// models/Feedback.js
const mongoose = require("mongoose");

const FeedbackSchema = new mongoose.Schema({
  customerName: {
    type: String,
    required: true,
  },
  comments: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Feedback", FeedbackSchema);
