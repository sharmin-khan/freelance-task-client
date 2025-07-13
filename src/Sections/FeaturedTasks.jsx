import React, { useEffect, useState } from "react";
import LoadingSpinner from "../components/Spinner/LoadingSpinner";

const FeaturedTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true); // loading state

  useEffect(() => {
    fetch("http://localhost:5000/featured-tasks")
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
      <h2 className="text-4xl font-semibold text-blue-600 text-center mb-6">
        Featured Tasks
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
        Discover high-priority freelance tasks with upcoming deadlines. These
        featured tasks are handpicked to help you find the best opportunities
        quickly and efficiently.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tasks.map((task) => (
          <div
            key={task._id}
            className="border-1 border-blue-300 bg-blue-100 dark:border-gray-600 dark:bg-gray-800  rounded-lg p-4 shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl dark:text-blue-600 font-semibold mb-2">
              {task.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-200 mb-2">
              Budget: ${task.budget}
            </p>
            <p className="text-gray-500 dark:text-gray-200">
              Deadline: {new Date(task.deadline).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedTasks;
