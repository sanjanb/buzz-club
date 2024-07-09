const Order = require("../models/Order");

exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.addOrder = async (req, res) => {
  const { tableNumber, items, totalAmount, status } = req.body;
  const newOrder = new Order({ tableNumber, items, totalAmount, status });

  try {
    const savedOrder = await newOrder.save();
    res.json(savedOrder);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Add other CRUD operations as needed
