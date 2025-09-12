import React, { useEffect, useState, use } from "react";
import { useParams, Navigate, useNavigate } from "react-router";
import LoadingSpinner from "../../components/Spinner/LoadingSpinner";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import BidForm from "../../components/BidForm/BidForm";

const TaskDetails = () => {
  const { id } = useParams();
  const { user, loading } = use(AuthContext);
  const [task, setTask] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://freelance-task-server-dusky.vercel.app/task/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Task not found");
        }
        return res.json();
      })
      .then((data) => setTask(data))
      .catch((err) => setError(err.message));
  }, [id]);

  if (loading) return <LoadingSpinner />;
  if (!user) return <Navigate to="/login" replace />;
  if (error) return <p className="text-red-600 text-center mt-6">{error}</p>;
  if (!task) return <LoadingSpinner />;

  return (
    <div className="max-w-4xl mx-auto p-6 my-20 bg-white dark:bg-gray-800 shadow-xl rounded-2xl border border-gray-200 dark:border-gray-700 transition-all duration-300">
   <h2 className="text-4xl font-bold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
        Task Overview
      </h2>

      <div className="space-y-4 text-gray-800 dark:text-gray-200 md:text-lg text-md">
        <p>
          <span className="font-semibold text-blue-500 dark:text-blue-400">Title:</span> {task.title}
        </p>
        <p>
          <span className="font-semibold text-blue-500 dark:text-blue-400">Category:</span> {task.category}
        </p>
        <p>
          <span className="font-semibold text-blue-500 dark:text-blue-400">Description:</span> {task.description}
        </p>
        <p>
          <span className="font-semibold text-blue-500 dark:text-blue-400">Deadline:</span>{" "}
          {new Date(task.deadline).toLocaleDateString()}
        </p>
        <p>
          <span className="font-semibold text-blue-500 dark:text-blue-400">Budget:</span> ${task.budget}
        </p>
        <p>
          <span className="font-semibold text-blue-500 dark:text-blue-400">Posted By:</span> {task.userName} ({task.userEmail})
        </p>

        {/* Bid Form */}
        <div className="mt-6 ">
          <BidForm taskId={task._id} />
        </div>

        {/* Back Button */}
        <div className="mt-6">
          <button
            onClick={() => navigate(-1)}
            className="px-5 py-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold rounded-md cursor-pointer shadow hover:from-blue-700 hover:via-purple-700 hover:to-pink-700"
          >
            ← Back to Previous Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
