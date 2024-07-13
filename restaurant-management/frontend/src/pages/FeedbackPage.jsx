import React from "react";
import FeedbackForm from "../components/Feedback/FeedbackForm";
import FeedbackList from "../components/Feedback/FeedbackList";

const FeedbackPage = () => {
  return (
    <div>
      <h2>Feedback</h2>
      <FeedbackForm />
      <FeedbackList />
    </div>
  );
};

export default FeedbackPage;
