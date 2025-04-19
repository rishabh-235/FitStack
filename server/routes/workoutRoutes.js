import express from "express";

// importing the controller functions
import { getAllWorkouts } from "../controllers/workoutControllers.js";

const router = express.Router();

// Get all workouts
router.get("/", getAllWorkouts);

export default router;