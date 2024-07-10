import React, { useState, useEffect } from "react";
import { getFeedback } from "../../services/feedbackService";

const FeedbackList = () => {
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    const fetchFeedback = async () => {
      const response = await getFeedback();
      setFeedback(response.data);
    };

    fetchFeedback();
  }, []);

  return (
    <div>
      <h2>Feedback</h2>
      <ul>
        {feedback.map((item) => (
          <li key={item._id}>
            Customer: {item.customerName}, Comments: {item.comments}, Rating:{" "}
            {item.rating}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeedbackList;
