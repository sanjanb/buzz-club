const MenuItem = require("../models/MenuItem");

exports.getMenuItems = async (req, res) => {
  try {
    const items = await MenuItem.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.addMenuItem = async (req, res) => {
  const { name, description, price } = req.body;
  const newItem = new MenuItem({ name, description, price });

  try {
    const savedItem = await newItem.save();
    res.json(savedItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
