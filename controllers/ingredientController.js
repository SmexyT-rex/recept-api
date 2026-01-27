import db from "../database/db.js";

export const createIngredient = async (req, res) => {
  try {
    const { recipe_id = null, name, quantity } = req.body;

    if (!name) {
      return res.status(400).json({ error: "Ingredient name is required" });
    }

    const [result] = await db.execute(
      "INSERT INTO ingredients (recipe_id, name, quantity) VALUES (?, ?, ?)",
      [recipe_id, name, quantity],
    );
    res
      .status(201)
      .json({ message: "Ingredient created", id: result.insertId });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Error creating ingredient", details: err.message });
  }
};

export const getAllIngredients = async (req, res) => {
  try {
    const [ings] = await db.execute("SELECT * FROM ingredients");
    res.json(ings);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Error fetching ingredients", details: err.message });
  }
};

export const getIngredientById = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await db.execute("SELECT * FROM ingredients WHERE id = ?", [
      id,
    ]);

    if (rows.length === 0) {
      return res.status(404).json({ error: "Ingredient not found" });
    }

    res.json(rows[0]);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Error fetching ingredient", details: err.message });
  }
};

export const updateIngredient = async (req, res) => {
  try {
    const { id } = req.params;
    const { recipe_id = null, name, quantity } = req.body;

    const [result] = await db.execute(
      "UPDATE ingredients SET recipe_id = ?, name = ?, quantity = ? WHERE id = ?",
      [recipe_id, name, quantity, id],
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Ingredient not found" });
    }

    res.json({ message: "Ingredient updated successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Error updating ingredient", details: err.message });
  }
};

export const deleteIngredient = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await db.execute("DELETE FROM ingredients WHERE id = ?", [
      id,
    ]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Ingredient not found" });
    }

    res.json({ message: "Ingredient deleted successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Error deleting ingredient", details: err.message });
  }
};

export default {
  createIngredient,
  getAllIngredients,
  getIngredientById,
  updateIngredient,
  deleteIngredient,
};
