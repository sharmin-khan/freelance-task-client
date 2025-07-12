// AddTask.jsx
import React, { use } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/AuthContext/AuthContext";

const AddTask = () => {
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

    // Send to server
    fetch("http://localhost:5000/task", {
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
    <div className="max-w-2xl mx-auto my-8 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold mb-4 text-center text-blue-600">Add a New Task</h2>
      <form onSubmit={handleAddTask} className="space-y-4">
        <input type="text" name="title" placeholder="Task Title" className="input input-bordered w-full" required />
        
        <select name="category" className="input input-bordered w-full" required>
          <option value="">Select Category</option>
          <option value="Web Development">Web Development</option>
          <option value="Design">Design</option>
          <option value="Writing">Writing</option>
          <option value="Marketing">Marketing</option>
        </select>

        <textarea name="description" placeholder="Task Description" className="textarea textarea-bordered w-full" required></textarea>
        
        <input type="date" name="deadline" className="input input-bordered w-full" required />
        
        <input type="number" name="budget" placeholder="Budget" className="input input-bordered w-full" required />

        <input type="email" name="userEmail" defaultValue={user?.email} readOnly className="input input-bordered w-full bg-gray-100 dark:bg-gray-900 dark:text-gray-100" />
        
        <input type="text" name="userName" defaultValue={user?.displayName} readOnly className="input input-bordered w-full bg-gray-100 dark:bg-gray-900 dark:text-gray-100" />

        <button type="submit" className="btn bg-blue-600 hover:bg-blue-500 text-white w-full">Add Task</button>
      </form>
    </div>
  );
};

export default AddTask;
