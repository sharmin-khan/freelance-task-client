import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import LoadingSpinner from "../../components/Spinner/LoadingSpinner";

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
      });
  }, [taskId]);

  if (loading) return <LoadingSpinner />;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl text-blue-600 text-center font-bold mb-4">Bids for Task</h2>
      {bids.length === 0 ? (
        <p>No bids yet.</p>
      ) : (
        <table className="table-auto w-full border">
          <thead>
            <tr>
              <th className="border px-4 py-2">Bid Amount ($)</th>
              <th className="border px-4 py-2">Bid Duration (in days)</th>
              <th className="border px-4 py-2">Message</th>
            </tr>
          </thead>
          <tbody>
            {bids.map((bid) => (
              <tr key={bid._id}>
                <td className="border px-4 py-2">${bid.bidAmount}</td>
                <td className="border px-4 py-2">{bid.bidDuration}</td>
                <td className="border px-4 py-2">{bid.bidMessage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default BidsPage;
