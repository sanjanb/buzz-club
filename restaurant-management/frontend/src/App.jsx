import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import OrderPage from "./pages/OrderPage";
import MenuPage from "./pages/MenuPage";
import FeedbackPage from "./pages/FeedbackPage";
import OrderEdit from "./components/Orders/OrderEdit"; // Ensure this path is correct

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/orders" element={<OrderPage />} />
        <Route path="/orders/edit/:id" element={<OrderEdit />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
      </Routes>
    </Router>
  );
}

export default App;
