import express from "express";

import { joinIngredientsWithRecipes } from "../controllers/joinController.js";

const router = express.Router();

router.get("/", joinIngredientsWithRecipes);

export default router;
