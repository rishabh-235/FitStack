import axios from "axios";
import React, { useContext, useEffect } from "react";
import { Data } from "../Context/WorkoutContext";

function Records() {
  const { workouts, deleteWorkout, setUpdateForm } = useContext(Data);

  if (!workouts) {
    return <div className="text-2xl font-bold">Loading...</div>;
  } else if (workouts.length === 0) {
    return <div className="text-2xl font-bold">No workouts found</div>;
  } else {
    return (
      <section className="h-full pt-[2rem] px-6 flex justify-start items-center flex-col border border-gray-200 rounded-lg bg-gray-50">
        <div className="text-3xl font-bold mb-4 text-center">Workouts</div>
        <div className="mb-8 text-gray-600 text-center">
          Here you can track your workouts.
        </div>

        <div className="p-[2rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workouts.map((workout) => (
            <div
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-start border border-gray-100 hover:shadow-2xl transition-shadow"
              key={workout._id}
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                {workout.title}
              </h3>
              <div className="flex flex-col gap-1 w-full">
                <span className="text-gray-700">
                  <span className="font-medium">Reps:</span> {workout.reps}
                </span>
                <span className="text-gray-700">
                  <span className="font-medium">Load:</span> {workout.load} kg
                </span>
              </div>
              <div className="mt-4">
                <button onClick={() => setUpdateForm(workout)} className="bg-blue-500 text-white text-[0.8rem] font-[500] rounded p-1 cursor-pointer hover:bg-blue-700">
                  Update
                </button>
                <button onClick={()=> deleteWorkout(workout._id)} className="ml-2 bg-red-500 text-white text-[0.8rem] font-[500] rounded p-1 cursor-pointer hover:bg-red-700">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default Records;
