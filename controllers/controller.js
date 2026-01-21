import db from "../database/db.js";

export const createRecipe = async (req, res) => {
  try {
    const { name, description, instructions, ingredients } = req.body;

    if (!Array.isArray(ingredients)) {
      return res.status(400).json({ error: "Ingredients must be an array" });
    }

    const [result] = await db.execute(
      "INSERT INTO recipes (name, description, instructions) VALUES (?, ?, ?)",
      [name, description, instructions],
    );

    const recipeId = result.insertId;

    for (let ing of ingredients) {
      await db.execute(
        "INSERT INTO ingredients (recipe_id, name, quantity) VALUES (?, ?, ?)",
        [recipeId, ing.name, ing.quantity],
      );
    }

    res.status(201).json({ message: "Recipe created successfully", recipeId });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Error creating recipe", details: err.message });
  }
};

export const getAllRecipes = async (req, res) => {
  try {
    const [recipes] = await db.execute("SELECT * FROM recipes");

    for (let recipe of recipes) {
      const [ings] = await db.execute(
        "SELECT id, name, quantity FROM ingredients WHERE recipe_id = ?",
        [recipe.id],
      );
      recipe.ingredients = ings;
    }

    res.json(recipes);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Error fetching recipes", details: err.message });
  }
};

export const getRecipeById = async (req, res) => {
  try {
    const { id } = req.params;

    const [recipes] = await db.execute("SELECT * FROM recipes WHERE id = ?", [
      id,
    ]);

    if (recipes.length === 0) {
      return res.status(404).json({ error: "Recipe not found" });
    }

    const [ings] = await db.execute(
      "SELECT id, name, quantity FROM ingredients WHERE recipe_id = ?",
      [id],
    );

    recipes[0].ingredients = ings;

    res.json(recipes[0]);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Error fetching recipe", details: err.message });
  }
};

export const updateRecipe = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, instructions, ingredients } = req.body;

    const [recipeResult] = await db.execute(
      "UPDATE recipes SET name = ?, description = ?, instructions = ? WHERE id = ?",
      [name, description, instructions, id],
    );

    if (recipeResult.affectedRows === 0) {
      return res.status(404).json({ error: "Recipe not found" });
    }

    await db.execute("DELETE FROM ingredients WHERE recipe_id = ?", [id]);

    for (let ing of ingredients) {
      await db.execute(
        "INSERT INTO ingredients (recipe_id, name, quantity) VALUES (?, ?, ?)",
        [id, ing.name, ing.quantity],
      );
    }

    res.json({ message: "Recipe updated successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Error updating recipe", details: err.message });
  }
};

export const deleteRecipe = async (req, res) => {
  try {
    const { id } = req.params;

    const [result] = await db.execute("DELETE FROM recipes WHERE id = ?", [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Recipe not found" });
    }

    res.json({ message: "Recipe deleted successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Error deleting recipe", details: err.message });
  }
};

export default {
  createRecipe,
  getAllRecipes,
  getRecipeById,
  updateRecipe,
  deleteRecipe,
};
