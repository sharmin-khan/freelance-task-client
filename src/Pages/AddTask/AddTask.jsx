// AddTask.jsx
import React, { use, useEffect } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/AuthContext/AuthContext";

const AddTask = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);   
  const { user } = use(AuthContext);

  const handleAddTask = (e) => {
    e.preventDefault();
    const form = e.target;
    const task = {
      title: form.title.value,
      category: form.category.value,
      description: form.description.value,
      deadline: form.deadline.value,
      budget: parseFloat(form.budget.value),
      userEmail: user?.email,
      userName: user?.displayName,
    };

    fetch("https://freelance-task-server-dusky.vercel.app/task", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire("Success!", "Task added successfully", "success");
          form.reset();
        }
      });
  };

  return (
    <div className="max-w-2xl mx-auto my-20 p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 shadow-xl rounded-2xl">
      <h2 className="text-3xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
        Add a New Task
      </h2>
      <form onSubmit={handleAddTask} className="space-y-5">
        <input
          type="text"
          name="title"
          placeholder="Task Title"
          className="input input-bordered w-full border-blue-300 focus:border-blue-500 focus:ring focus:ring-blue-200 rounded-lg"
          required
        />

        <select
          name="category"
          className="input input-bordered w-full border-blue-300 focus:border-blue-500 focus:ring focus:ring-blue-200 rounded-lg"
          required
        >
          <option value="">Select Category</option>
          <option value="Web Development">Web Development</option>
          <option value="Design">Design</option>
          <option value="Writing">Writing</option>
          <option value="Marketing">Marketing</option>
        </select>

        <textarea
          name="description"
          placeholder="Task Description"
          className="textarea textarea-bordered w-full border-blue-300 focus:border-blue-500 focus:ring focus:ring-blue-200 rounded-lg"
          required
        ></textarea>

        <input
          type="date"
          name="deadline"
          className="input input-bordered w-full border-blue-300 focus:border-blue-500 focus:ring focus:ring-blue-200 rounded-lg"
          required
        />

        <input
          type="number"
          name="budget"
          placeholder="Budget"
          className="input input-bordered w-full border-blue-300 focus:border-blue-500 focus:ring focus:ring-blue-200 rounded-lg"
          required
        />

        <input
          type="email"
          name="userEmail"
          defaultValue={user?.email}
          readOnly
          className="input input-bordered w-full bg-gray-100 dark:bg-gray-900 dark:text-gray-100 border-gray-300 rounded-lg"
        />

        <input
          type="text"
          name="userName"
          defaultValue={user?.displayName}
          readOnly
          className="input input-bordered w-full bg-gray-100 dark:bg-gray-900 dark:text-gray-100 border-gray-300 rounded-lg"
        />

        <button
          type="submit"
          className="btn w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white font-semibold rounded-lg transition-all duration-300"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;
