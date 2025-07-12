import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import LoadingSpinner from "../../components/Spinner/LoadingSpinner";
import Swal from "sweetalert2";

const MyPostedTask = () => {
  const { user, loading } = use(AuthContext);
  const [myTasks, setMyTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  // Fetch user's tasks
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/task?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setMyTasks(data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching tasks:", err);
          setIsLoading(false);
        });
    }
  }, [user]);

  if (loading || isLoading) return <LoadingSpinner />;

  // Open modal and set selected task
  const openModal = (task) => {
    setSelectedTask(task);
    setModalOpen(true);
  };

  // Close modal and clear selected task
  const closeModal = () => {
    setSelectedTask(null);
    setModalOpen(false);
  };

  // Handle update form submission
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedTask = {
      title: form.title.value,
      category: form.category.value,
      description: form.description.value,
      deadline: form.deadline.value,
      budget: parseFloat(form.budget.value),
      userEmail: selectedTask.userEmail,
      userName: selectedTask.userName,
    };

    fetch(`http://localhost:5000/task/${selectedTask._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedTask),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Update failed");
        return res.json();
      })
      .then(() => {
        // Update local state
        setMyTasks((prev) =>
          prev.map((task) =>
            task._id === selectedTask._id ? { ...task, ...updatedTask } : task
          )
        );
        closeModal();
        Swal.fire({
          icon: "success",
          title: "Task Updated!",
          text: "Your task has been updated successfully.",
          timer: 2000,
          showConfirmButton: false,
        });
      })
      .catch((err) => {
        console.error("Update error:", err);
        Swal.fire({
          icon: "error",
          title: "Update Failed!",
          text: "Something went wrong. Please try again.",
        });
      });
  };

  return (
    <div className="max-w-6xl mx-auto p-4 overflow-x-auto">
      <h2 className="lg:text-3xl text-xl font-semibold mb-6 text-center text-blue-600">
        My Posted Tasks
      </h2>
      {myTasks.length === 0 ? (
        <p className="text-center text-gray-600 dark:text-gray-300">
          You haven't posted any tasks yet.
        </p>
      ) : (
        <table className="table-auto w-full border dark:border-gray-600">
          <thead>
            <tr className="bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-white  ">
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2 ">Deadline</th>
              <th className="px-4 py-2">Budget</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {myTasks.map((task) => (
              <tr
                key={task._id}
                className="text-center border-t dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                <td className="px-4 py-3">{task.title}</td>
                <td className="px-4 py-3">
                  {new Date(task.deadline).toLocaleDateString()}
                </td>
                <td className="px-4 py-3">${task.budget}</td>
                <td className="px-4 py-3 flex justify-center gap-2">
                  <button
                    onClick={() => openModal(task)}
                    className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded"
                  >
                    Update
                  </button>
                  <button className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded">
                    Delete
                  </button>
                  <button className="px-3 py-1 bg-green-500 hover:bg-green-600 text-white rounded">
                    Bids
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Modal */}
      {modalOpen && selectedTask && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 dark:hover:text-white text-2xl font-bold"
            >
              ×
            </button>
            <h3 className="text-xl font-semibold mb-4 text-center">
              Update Task
            </h3>

            <form onSubmit={handleUpdate} className="space-y-4">
              <div>
                <label className="block mb-1 font-medium">Title</label>
                <input
                  type="text"
                  defaultValue={selectedTask.title}
                  name="title"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Category</label>
                <select
                  defaultValue={selectedTask.category}
                  name="category"
                  className="input input-bordered w-full"
                  required
                >
                  <option>Web Development</option>
                  <option>Design</option>
                  <option>Writing</option>
                  <option>Marketing</option>
                </select>
              </div>
              <div>
                <label className="block mb-1 font-medium">Description</label>
                <textarea
                  defaultValue={selectedTask.description}
                  name="description"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Deadline</label>
                <input
                  type="date"
                  defaultValue={
                    new Date(selectedTask.deadline).toISOString().split("T")[0]
                  }
                  name="deadline"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Budget</label>
                <input
                  type="number"
                  defaultValue={selectedTask.budget}
                  name="budget"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">User Email</label>
                <input
                  type="email"
                  defaultValue={selectedTask.userEmail}
                  readOnly
                  className="input input-bordered w-full bg-gray-100 dark:text-gray-800 cursor-not-allowed"
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">User Name</label>
                <input
                  type="text"
                  defaultValue={selectedTask.userName}
                  readOnly
                  className="input input-bordered w-full bg-gray-100 dark:text-gray-800 cursor-not-allowed"
                />
              </div>

              <button
                type="submit"
                className="btn bg-blue-600 hover:bg-blue-700 text-white w-full"
              >
                Update
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyPostedTask;
