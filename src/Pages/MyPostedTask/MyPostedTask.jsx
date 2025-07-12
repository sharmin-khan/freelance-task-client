import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import { Link } from "react-router";
import LoadingSpinner from "../../components/Spinner/LoadingSpinner";

const MyPostedTask = () => {
  const { user, loading } = use(AuthContext);
  const [myTasks, setMyTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

  return (
    <div className="max-w-6xl mx-auto p-4 overflow-x-auto">
      <h2 className="text-3xl font-semibold mb-6 text-center text-blue-600">
        My Posted Tasks
      </h2>
      {myTasks.length === 0 ? (
        <p className="text-center text-gray-600 dark:text-gray-300">
          You haven't posted any tasks yet.
        </p>
      ) : (
        <table className="table-auto w-full border dark:border-gray-600">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white">
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Deadline</th>
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
                  <Link
                    to={`/update-task/${task._id}`}
                    className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded"
                  >
                    Update
                  </Link>
                  <button className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded">
                    Delete
                  </button>
                  <Link
                    to={`/bids/${task._id}`}
                    className="px-3 py-1 bg-green-500 hover:bg-green-600 text-white rounded"
                  >
                    Bids
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MyPostedTask;
