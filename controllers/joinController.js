import db from "../database/db.js";

export const joinIngredientsWithRecipes = async (req, res) => {
  const timeoutMs = 3000;
  try {
    const queryPromise = db.execute(
      `SELECT r.id AS recipe_id, r.name AS recipe_name, i.id AS ingredient_id, i.name AS ingredient_name, i.quantity FROM recipes r JOIN ingredients i ON r.id = i.recipe_id`,
    );
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Query timed out")), timeoutMs),
    );
    const [result] = await Promise.race([queryPromise, timeoutPromise]);
    res.json(result);
  } catch (err) {
    res
      .status(500)
      .json({ error: "Error fetching data", details: err.message });
  }
};

export default { joinIngredientsWithRecipes };
