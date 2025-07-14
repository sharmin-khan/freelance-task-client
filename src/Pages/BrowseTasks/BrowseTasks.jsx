import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import LoadingSpinner from "../../components/Spinner/LoadingSpinner";

const BrowseTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://freelance-task-server-dusky.vercel.app/task")
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch tasks:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="text-center mt-10">
        <LoadingSpinner></LoadingSpinner>
      </div>
    );
  }

  return (
    <div className="max-w-7xl lg:mx-auto md:mx-4 mx-2 py-10 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">
        Browse Tasks
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tasks.map((task) => (
          <div key={task._id} className="border rounded p-4 shadow bg-white">
            <h3 className="text-xl dark:text-gray-700 font-semibold mb-2">
              {task.title}
            </h3>
            <p className="text-md text-gray-600 mb-1">
              Category: {task.category}
            </p>
            <p className="text-md text-gray-600 mb-1">Budget: ${task.budget}</p>
            <p className="text-md text-gray-600 mb-1">
              Deadline: {task.deadline}
            </p>
            <Link to={`/task/${task._id}`}>
              <button className="p-2 rounded-sm cursor-pointer bg-blue-600 hover:bg-blue-700 text-white mt-2">
                See Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseTasks;
