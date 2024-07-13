import React from "react";
import Navbar from "../components/common/Navbar";
import FeedbackList from "../components/Feedback/FeedbackList";
import Footer from "../components/common/Footer";

const FeedbackPage = () => {
  return (
    <div>
      <Navbar />
      <FeedbackList />
      <Footer />
    </div>
  );
};

export default FeedbackPage;
