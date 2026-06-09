import { configDotenv } from "dotenv";
import express from "express";
import mongoose, { mongo } from "mongoose";
import itemRoutes from "./items.routes.js";

configDotenv();

const app = express();
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGODB_URI;

if (!MONGO_URI) {
  throw new Error("MONGODB_URI environment variable is rewuired");
}

app.use(express.json());

app.use("/api", itemRoutes);

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log(`Successfully connected to MongoDB`);
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Api server is running at http://localhost:${PORT}`);
    });
  })

  .catch((error) => {
    console.error(`Database connection failed: ${error}`);
  });
