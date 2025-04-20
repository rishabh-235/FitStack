import React, { useEffect, useState, useContext } from "react";
import { Data } from "../Context/WorkoutContext";
import axios from "axios";

function Form() {
  const { setWorkouts, updateForm , setUpdateForm} = useContext(Data);
  const [formData, setFormData] = useState({ title: "", reps: "", load: "" });

  useEffect(() => {
    setFormData(updateForm || { _id: "", title: "", reps: "", load: "" });
  }, [updateForm]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const reps = e.target.reps.value;
    const load = e.target.load.value;

    const workout = { title, reps, load };

    let response;
    if (updateForm) {
      response = await axios.patch(
        `http://localhost:4000/api/workouts/${updateForm._id}`,
        workout
      );

      setUpdateForm(null);
    } else {
      response = await axios.post(
        "http://localhost:4000/api/workouts/",
        workout
      );
    }

    if (response.status >= 200 && response.status < 300) {
      setWorkouts((prev) => {
        const updatedWorkouts = prev.filter(workout => workout._id !== updateForm?._id);
        return [...updatedWorkouts, response.data];
      });
    } else {
      console.error("Failed to add workout:", response.statusText);
    }

    e.target.reset();
  };

  return (
    <div className=" h-full py-[2.5rem] px-[1.5rem] flex justify-start items-center flex-col gap-[20px] border border-gray-100 shadow-lg rounded-[10px] hover:shadow-2xl transition-shadow bg-">
      <h1 className="text-2xl font-bold text-center">Add New Record</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col justify-center items-start gap-[5px]">
          <label htmlFor="title">Title</label>
          <input
            onChange={handleChange}
            className="border border-black rounded p-2 w-[25rem]"
            type="text"
            name="title"
            id="title"
            value={formData.title}
            placeholder="Enter your title"
          />
        </div>

        <div className="flex flex-col justify-center items-start gap-[5px]">
          <label htmlFor="reps">Number of Reps</label>
          <input
            className="border border-black rounded p-2 w-[25rem]"
            type="number"
            name="reps"
            id="reps"
            onChange={handleChange}
            value={formData.reps}
            placeholder="Enter number of reps"
          />
        </div>

        <div className="flex flex-col justify-center items-start gap-[5px]">
          <label htmlFor="load">Load</label>
          <input
            className="border border-black rounded p-2 w-[25rem]"
            type="number"
            min={1}
            name="load"
            id="load"
            onChange={handleChange}
            value={formData.load}
            placeholder="Enter your load"
          />
        </div>

        {updateForm ? (
          <button
            className="bg-blue-500 text-white rounded p-2 mt-1 cursor-pointer hover:bg-blue-700"
            type="submit"
          >
            Update
          </button>
        ) : (
          <button
            className="bg-blue-500 text-white rounded p-2 mt-1 cursor-pointer hover:bg-blue-700"
            type="submit"
          >
            Add
          </button>
        )}
      </form>
    </div>
  );
}

export default Form;
