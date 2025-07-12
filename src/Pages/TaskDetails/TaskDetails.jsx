import React, { useEffect, useState, use } from "react";
import { useParams, Navigate, useNavigate } from "react-router";
import LoadingSpinner from "../../components/Spinner/LoadingSpinner";
import { AuthContext } from "../../Context/AuthContext/AuthContext";

const TaskDetails = () => {
  const { id } = useParams();
  const { user, loading } = use(AuthContext);
  const [task, setTask] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/task/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Task not found");
        }
        return res.json();
      })
      .then((data) => setTask(data))
      .catch((err) => setError(err.message));
  }, [id]);

  if (loading)
    return (
      <p>
        <LoadingSpinner />
      </p>
    );
  if (!user) return <Navigate to="/login" replace />;
  if (error) return <p className="text-red-600 text-center">{error}</p>;
  if (!task)
    return (
      <p className="text-center">
        {" "}
        <LoadingSpinner />
      </p>
    );

  return (
    <div className="max-w-3xl lg:mx-auto md:mx-4 mx-2 p-6 my-10  bg-base-300 dark:bg-base-300 shadow-lg rounded-2xl border border-gray-200 dark:border-gray-700">
      <h2 className="text-3xl text-center font-semibold text-blue-600 mb-6">
        Task Overview
      </h2>

      <div className="space-y-4 text-gray-800 dark:text-gray-200 md:text-lg text-md">
        <p>
          <span className="font-semibold dark:text-blue-400">Title :</span> {task.title}
        </p>
        <p>
          <span className="font-semibold dark:text-blue-400">Category :</span> {task.category}
        </p>
        <p>
          <span className="font-semibold dark:text-blue-400">Description :</span>{" "}
          {task.description}
        </p>
        <p>
          <span className="font-semibold dark:text-blue-400">Deadline :</span>{" "}
          {new Date(task.deadline).toLocaleDateString()}
        </p>
        <p>
          <span className="font-semibold dark:text-blue-400">Budget :</span> ${task.budget}
        </p>
        <p>
          <span className="font-semibold dark:text-blue-400">Posted By :</span> {task.userName} (
          {task.userEmail})
        </p>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 p-2 bg-blue-600 hover:bg-blue-700 text-white rounded"
        >
          ← Back to Previous Page
        </button>
      </div>
    </div>
  );
};

export default TaskDetails;
