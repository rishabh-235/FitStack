import express from "express";

// importing the controller functions
import {
  deleteWorkout,
  updateWorkout,
  createWorkout,
  getAllWorkouts,
  getWorkout,
} from "../controllers/workoutControllers.js";

const router = express.Router();

// Get all workouts
router.get("/", getAllWorkouts);

// Get a single workout
router.get("/:id", getWorkout);

// Create a new workout
router.post("/", createWorkout);

// Update a workout
router.patch("/:id", updateWorkout);

// Delete a workout
router.delete("/:id", deleteWorkout);

export default router;
