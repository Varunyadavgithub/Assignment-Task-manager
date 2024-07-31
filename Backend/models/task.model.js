import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "Pending",
  },
  createdAt: { 
    type: Date,
    default: Date.now
 },
  updatedAt: { 
    type: Date,
    default: Date.now
 }
});

export const Tasks = mongoose.model("Task", taskSchema);
