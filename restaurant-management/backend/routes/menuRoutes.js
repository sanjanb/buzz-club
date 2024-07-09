// routes/menuRoutes.js
const express = require("express");
const { getMenuItems, addMenuItem } = require("../controllers/menuController");
const router = express.Router();

router.get("/", getMenuItems);
router.post("/", addMenuItem);

// Add other CRUD operations as needed

module.exports = router;
