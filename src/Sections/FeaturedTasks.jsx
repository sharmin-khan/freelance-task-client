import React, { useEffect, useState } from "react";
import LoadingSpinner from "../components/Spinner/LoadingSpinner";

const FeaturedTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true); // loading state

  useEffect(() => {
    fetch("https://freelance-task-server-dusky.vercel.app/featured-tasks")
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching featured tasks:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-40">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="my-20 px-4 max-w-7xl mx-auto">
      {/* Section Header */}
      <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-600 text-center mb-6">
        Featured Tasks
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
        Discover high-priority freelance tasks with upcoming deadlines. These
        featured tasks are handpicked to help you find the best opportunities
        quickly and efficiently.
      </p>

      {/* Tasks Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tasks.map((task) => (
         <div
  key={task._id}
  className="rounded-xl p-5 shadow-md hover:shadow-xl transition transform hover:-translate-y-1
    bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 
    dark:from-indigo-900 dark:via-purple-800 dark:to-blue-900"
>
  <h3 className="text-xl font-semibold mb-2 text-blue-700 dark:text-yellow-400">
    {task.title}
  </h3>
  <p className="text-gray-700 dark:text-gray-200 mb-1">
    Budget: <span className="font-semibold">${task.budget}</span>
  </p>
  <p className="text-gray-500 dark:text-gray-300">
    Deadline: {new Date(task.deadline).toLocaleDateString()}
  </p>
</div>

        ))}
      </div>
    </div>
  );
};

export default FeaturedTasks;
