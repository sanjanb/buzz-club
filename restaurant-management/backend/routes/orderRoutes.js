// routes/orderRoutes.js
const express = require("express");
const { getOrders, addOrder } = require("../controllers/orderController");
const router = express.Router();

router.get("/", getOrders);
router.post("/", addOrder);

// Add other CRUD operations as needed

module.exports = router;
