const MenuItem = require("../models/MenuItem");

// Get all menu items
exports.getMenuItems = async (req, res) => {
  try {
    const menuItems = await MenuItem.find();
    res.json(menuItems);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single menu item by ID
exports.getMenuItemById = async (req, res) => {
  try {
    const menuItem = await MenuItem.findById(req.params.id);
    if (!menuItem)
      return res.status(404).json({ message: "Menu item not found" });
    res.json(menuItem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add new menu item
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

// Update menu item
exports.updateMenuItem = async (req, res) => {
  const { name, description, price } = req.body;

  try {
    const menuItem = await MenuItem.findById(req.params.id);
    if (!menuItem)
      return res.status(404).json({ message: "Menu item not found" });

    menuItem.name = name ?? menuItem.name;
    menuItem.description = description ?? menuItem.description;
    menuItem.price = price ?? menuItem.price;

    const updatedMenuItem = await menuItem.save();
    res.json(updatedMenuItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete menu item
exports.deleteMenuItem = async (req, res) => {
  try {
    const menuItem = await MenuItem.findById(req.params.id);
    if (!menuItem)
      return res.status(404).json({ message: "Menu item not found" });

    await menuItem.remove();
    res.json({ message: "Menu item deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
