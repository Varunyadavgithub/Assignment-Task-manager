import { Tasks } from "../models/task.model.js";

export const createTask = async (req, res) => {
  try {
    const task = new Tasks(req.body);
    await task.save();
    res.status(201).json({ message: "Task ceated successfully", task });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getTasks = async (req, res) => {
  try {
    const tasks = await Tasks.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getTaskById = async (req, res) => {
  try {
    const task = await Tasks.findById(req.params.id);
    if (!task) return res.status(404).json({ message: "Task is not found" });
    res.status(200).json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const updateTask = async (req, res) => {
  try {
    const task = await Tasks.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!task) return res.status(404).json({ message: "Task is not found" });
    res.status(200).json({ message: "Updated Task", task });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const task = await Tasks.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).json({ message: "Task is not found" });
    res.status(200).json({ message: "Task deleted" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
