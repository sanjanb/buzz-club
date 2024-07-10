const Feedback = require("../models/Feedback");

// Get all feedback
exports.getFeedback = async (req, res) => {
  try {
    const feedback = await Feedback.find();
    res.json(feedback);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single feedback by ID
exports.getFeedbackById = async (req, res) => {
  try {
    const feedback = await Feedback.findById(req.params.id);
    if (!feedback)
      return res.status(404).json({ message: "Feedback not found" });
    res.json(feedback);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add new feedback
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

// Update feedback
exports.updateFeedback = async (req, res) => {
  const { customerName, comments, rating } = req.body;

  try {
    const feedback = await Feedback.findById(req.params.id);
    if (!feedback)
      return res.status(404).json({ message: "Feedback not found" });

    feedback.customerName = customerName ?? feedback.customerName;
    feedback.comments = comments ?? feedback.comments;
    feedback.rating = rating ?? feedback.rating;

    const updatedFeedback = await feedback.save();
    res.json(updatedFeedback);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete feedback
exports.deleteFeedback = async (req, res) => {
  try {
    const feedback = await Feedback.findById(req.params.id);
    if (!feedback)
      return res.status(404).json({ message: "Feedback not found" });

    await feedback.remove();
    res.json({ message: "Feedback deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
