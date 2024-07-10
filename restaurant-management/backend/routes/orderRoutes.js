const express = require("express");
const {
  getOrders,
  getOrderById,
  addOrder,
  updateOrder,
  deleteOrder,
} = require("../controllers/orderController");
const router = express.Router();

router.get("/", getOrders);
router.get("/:id", getOrderById);
router.post("/", addOrder);
router.put("/:id", updateOrder);
router.delete("/:id", deleteOrder);

module.exports = router;
