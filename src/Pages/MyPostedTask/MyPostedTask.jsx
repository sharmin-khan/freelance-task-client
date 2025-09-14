import React, { useEffect, useState, use } from "react";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import LoadingSpinner from "../../components/Spinner/LoadingSpinner";
import Swal from "sweetalert2";
import { Link } from "react-router";
import { Helmet } from "react-helmet";

const MyPostedTask = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { user, loading } = use(AuthContext);
  const [myTasks, setMyTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  // Fetch user's tasks
  useEffect(() => {
    if (user?.email) {
      fetch(`https://freelance-task-server-dusky.vercel.app/task?email=${user.email}`)
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

  const openModal = (task) => {
    setSelectedTask(task);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedTask(null);
    setModalOpen(false);
  };

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

    fetch(`https://freelance-task-server-dusky.vercel.app/task/${selectedTask._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedTask),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Update failed");
        return res.json();
      })
      .then(() => {
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

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this task!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://freelance-task-server-dusky.vercel.app/task/${id}`, { method: "DELETE" })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your task has been deleted.", "success");
              setMyTasks(myTasks.filter((task) => task._id !== id));
            }
          });
      }
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 my-20">
      <Helmet>
        <title>TaskNest | My Posted Tasks</title>
        <meta
          name="description"
          content="Manage and view your posted freelance tasks on TaskNest."
        />
      </Helmet>
      <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
        My Posted Tasks
      </h2>

      {myTasks.length === 0 ? (
        <p className="text-center text-gray-500 dark:text-gray-400">
          You haven't posted any tasks yet.
        </p>
      ) : (
        <table className="table-auto w-full border-collapse border border-gray-200 dark:border-gray-700 rounded-lg shadow-md">
          <thead>
            <tr className="bg-blue-200 dark:bg-purple-700/20 text-gray-800 dark:text-white">
              <th className="px-4 py-3 rounded-tl-lg">Title</th>
              <th className="px-4 py-3">Deadline</th>
              <th className="px-4 py-3">Budget</th>
              <th className="px-4 py-3 rounded-tr-lg">Actions</th>
            </tr>
          </thead>
          <tbody>
            {myTasks.map((task) => (
              <tr
                key={task._id}
                className="text-center border-t dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <td className="px-4 py-3">{task.title}</td>
                <td className="px-4 py-3">{new Date(task.deadline).toLocaleDateString()}</td>
                <td className="px-4 py-3">${task.budget}</td>
                <td className="px-4 py-3 flex justify-center gap-2">
                  <button
                    onClick={() => openModal(task)}
                    className="px-3 py-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white rounded transition-all duration-300 cursor-pointer"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(task._id)}
                    className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded transition-all duration-300 cursor-pointer"
                  >
                    Delete
                  </button>
                  <Link
                    to={`/bids/${task._id}`}
                    className="px-3 py-1 bg-green-500 hover:bg-green-600 text-white rounded transition-all duration-300"
                  >
                    Bids
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Modal */}
    {modalOpen && selectedTask && (
  <div className="fixed inset-0 flex items-center justify-center z-50 
                  bg-gradient-to-r from-purple-900/70 via-indigo-900/50 to-pink-900/70
                  backdrop-blur-sm">
    <div className="bg-white dark:bg-gray-900 rounded-xl p-6 max-w-lg w-full relative shadow-2xl">
      <button
        onClick={closeModal}
        className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 dark:hover:text-white text-2xl font-bold"
      >
        ×
      </button>
      <h3 className="text-xl font-semibold mb-4 text-center text-blue-600">
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
            defaultValue={new Date(selectedTask.deadline).toISOString().split("T")[0]}
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
          className="btn bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white w-full transition-all duration-300"
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
