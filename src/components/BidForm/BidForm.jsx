import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/AuthContext/AuthContext";

const BidForm = ({ taskId }) => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const handleSubmitBid = (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const bidAmount = parseFloat(form.bidAmount.value);
    const bidMessage = form.bidMessage.value;
    const bidDuration = parseInt(form.bidDuration.value);

    const bidData = {
      taskId,
      bidderEmail: user?.email,
      bidderName: user?.displayName,
      bidAmount,
      bidDuration,
      bidMessage,
    };

    fetch("http://localhost:5000/bids", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bidData),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Bid Submitted successfully",
            text: "Your bid has been placed successfully.",
            timer: 1500,
            showConfirmButton: false,
          });
          form.reset();
        }
      })
      .catch((err) => {
        setLoading(false);
        Swal.fire("Error", "Failed to submit bid", "error");
        console.error(err);
      });
  };

  return (
    <div className="max-w-xl mx-auto my-8 p-4 border rounded bg-white dark:bg-gray-800 shadow-md">
      <h3 className="text-xl font-bold mb-4 text-center text-blue-600">
        Place Your Bid
      </h3>
      <form onSubmit={handleSubmitBid} className="space-y-4 ">
        <div>
          <label className="block font-medium mb-1">Bid Amount ($)</label>
          <input
            type="number"
            name="bidAmount"
            required
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">
            Bid Duration (in days)
          </label>
          <input
            type="number"
            name="bidDuration"
            required
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Your Message</label>
          <textarea
            name="bidMessage"
            required
            className="input input-bordered w-full"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="btn bg-green-600 hover:bg-green-700 text-white w-full"
        >
          {loading ? "Submitting..." : "Submit Bid"}
        </button>
      </form>
    </div>
  );
};

export default BidForm;
