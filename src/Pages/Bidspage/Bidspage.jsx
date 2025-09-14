import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import LoadingSpinner from "../../components/Spinner/LoadingSpinner";
import { Helmet } from "react-helmet";

const BidsPage = () => {
  const { taskId } = useParams();
  const [bids, setBids] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://freelance-task-server-dusky.vercel.app/bids/${taskId}`)
      .then((res) => res.json())
      .then((data) => {
        setBids(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [taskId]);

  if (loading) return <LoadingSpinner />;

  return (
    <div className="max-w-5xl mx-auto p-6">
         <Helmet>
        <title>TaskNest | Bids Page</title>
        <meta
          name="description"
          content="View and manage bids for your freelance tasks on TaskNest."
        />
      </Helmet>
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
        Bids for This Task
      </h2>

      {bids.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">No bids have been placed yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
            <thead className="bg-blue-100 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-gray-700 dark:text-gray-200 font-semibold">Bid Amount ($)</th>
                <th className="px-6 py-3 text-left text-gray-700 dark:text-gray-200 font-semibold">Duration (days)</th>
                <th className="px-6 py-3 text-left text-gray-700 dark:text-gray-200 font-semibold">Message</th>
              </tr>
            </thead>
            <tbody>
              {bids.map((bid, idx) => (
                <tr
                  key={bid._id}
                  className={`border-b last:border-b-0 ${idx % 2 === 0 ? "bg-gray-50 dark:bg-gray-900" : "bg-white dark:bg-gray-800"} hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors`}
                >
                  <td className="px-6 py-4 text-gray-800 dark:text-gray-200 font-medium">${bid.bidAmount}</td>
                  <td className="px-6 py-4 text-gray-800 dark:text-gray-200">{bid.bidDuration}</td>
                  <td className="px-6 py-4 text-gray-700 dark:text-gray-300">{bid.bidMessage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default BidsPage;
