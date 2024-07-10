const express = require("express");
const {
  getFeedback,
  getFeedbackById,
  addFeedback,
  updateFeedback,
  deleteFeedback,
} = require("../controllers/feedbackController");
const router = express.Router();

router.get("/", getFeedback);
router.get("/:id", getFeedbackById);
router.post("/", addFeedback);
router.put("/:id", updateFeedback);
router.delete("/:id", deleteFeedback);

module.exports = router;
