// routes/feedbackRoutes.js
const express = require("express");
const {
  getFeedback,
  addFeedback,
} = require("../controllers/feedbackController");
const router = express.Router();

router.get("/", getFeedback);
router.post("/", addFeedback);

// Add other CRUD operations as needed

module.exports = router;
