import { createContext, useState, useEffect } from "react";

export const Data = createContext();

const WrokoutContext = ({ children }) => {
  const [workouts, setWorkouts] = useState(null);
  const [updateForm, setUpdateForm] = useState(null);

  const getWorkouts = async () => {
    const response = await fetch("http://localhost:4000/api/workouts/");
    const data = await response.json();
    setWorkouts(data);
  }

  const createWorkout = async (workout) => {
    const response = await fetch("http://localhost:4000/api/workouts/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(workout),
    });
    const data = await response.json();
    setWorkouts((prev) => [...prev, data]);
  };

  const deleteWorkout = async (id) => {
    const response = await fetch(`http://localhost:4000/api/workouts/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      setWorkouts((prev) => prev.filter((workout) => workout._id !== id));
    }
  };

  const updateWorkout = async (id, updatedWorkout) => {
    const response = await fetch(`http://localhost:4000/api/workouts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedWorkout),
    });
    const data = await response.json();
    setWorkouts((prev) =>
      prev.map((workout) => (workout._id === id ? data : workout))
    );
  };


  useEffect(() => {
    getWorkouts();
  }, []);

  return (
    <Data.Provider value={{ workouts, setWorkouts, updateWorkout, deleteWorkout, createWorkout, updateForm, setUpdateForm }}>
      {children}
    </Data.Provider>
  );
}

export default WrokoutContext;