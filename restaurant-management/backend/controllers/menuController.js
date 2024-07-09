// controllers/menuController.js
const MenuItem = require("../models/MenuItem");

exports.getMenuItems = async (req, res) => {
  try {
    const menuItems = await MenuItem.find();
    res.json(menuItems);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.addMenuItem = async (req, res) => {
  const { name, description, price } = req.body;
  const newMenuItem = new MenuItem({ name, description, price });

  try {
    const savedMenuItem = await newMenuItem.save();
    res.json(savedMenuItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Add other CRUD operations as needed
