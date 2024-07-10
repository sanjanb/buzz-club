const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// Set up server
const app = express();

// Enable CORS
app.use(cors());

// Other middlewares
app.use(express.json());

// Import routes
const orderRoutes = require("./routes/orderRoutes");
const feedbackRoutes = require("./routes/feedbackRoutes");
const menuRoutes = require("./routes/menuRoutes");

// Use routes
app.use("/orders", orderRoutes);
app.use("/feedback", feedbackRoutes);
app.use("/menu", menuRoutes);

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/restaurant_management", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
