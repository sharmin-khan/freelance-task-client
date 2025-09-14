import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import LoadingSpinner from "../../components/Spinner/LoadingSpinner";
import { Helmet } from "react-helmet";

const BrowseTasks = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 my-20">
      <Helmet>
        <title>TaskNest | Browse Tasks</title>
        <meta
          name="description"
          content="Browse and find freelance tasks on TaskNest. Explore various categories and connect with clients."
        />
      </Helmet>
      <h2 className="text-4xl font-bold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
        Browse Tasks
      </h2>

      {tasks.length === 0 ? (
        <p className="text-center text-gray-500 dark:text-gray-400">
          No tasks available at the moment.
        </p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tasks.map((task) => (
            <div
              key={task._id}
              className="border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white dark:bg-gray-900"
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                {task.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-1">
                <span className="font-medium">Category:</span> {task.category}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-1">
                <span className="font-medium">Budget:</span> ${task.budget}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                <span className="font-medium">Deadline:</span> {task.deadline}
              </p>
              <Link to={`/task/${task._id}`}>
                <button className="w-full py-2 px-4 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white font-semibold transition-all duration-300 cursor-pointer">
                  See Details
                </button>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BrowseTasks;
