import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/routes.js";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());
app.use("/recipes", router);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
