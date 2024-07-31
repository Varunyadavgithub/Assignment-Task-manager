import express from "express";
import mongoose from "mongoose";
import taskRoutes from "./routes/task.route.js";
import cors from "cors";

const app = express();
const PORT = 8000;

// Middlewares
app.use(cors());
app.use(express.json());

// DB Connection
mongoose
  .connect("mongodb://localhost:27017/Task-manager")
  .then(() => {
    console.log("MongoDb connected successfully...!!!");
  })
  .catch((error) => {
    console.log(error);
  });

// routes (APIs)
app.use("/api/v1/", taskRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
