import Workout from "../models/workoutModel.js";

// Get all workouts
const getAllWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find({}).sort({ createdAt: -1 });
    res.status(200).json(workouts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single workout
const getWorkout = async (req, res) => {
  const { id } = req.params;

  try {
    const workout = await Workout.findById(id);
    res.status(200).json(workout);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// create a new workout
const createWorkout = async (req, res) => {
  try {
    const workout = new Workout(req.body);
    await workout.save();
    res.status(201).json(workout);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// update a workout
const updateWorkout = async (req, res) => {
  const { id } = req.params;

  try {
    const workout = await Workout.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(workout);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// delete a workout
const deleteWorkout = async (req, res) =>{
  const {id} = req.params;

  try{
    await Workout.findByIdAndDelete(id);
    res.status(204).json();
  }
  catch(error){
    res.status(500).json({error: error.message});
  }
}

export { getAllWorkouts, getWorkout, createWorkout, updateWorkout, deleteWorkout };