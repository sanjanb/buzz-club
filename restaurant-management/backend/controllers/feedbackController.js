// controllers/feedbackController.js
const Feedback = require("../models/Feedback");

exports.getFeedback = async (req, res) => {
  try {
    const feedback = await Feedback.find();
    res.json(feedback);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.addFeedback = async (req, res) => {
  const { customerName, comments, rating } = req.body;
  const newFeedback = new Feedback({ customerName, comments, rating });

  try {
    const savedFeedback = await newFeedback.save();
    res.json(savedFeedback);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Add other CRUD operations as needed
