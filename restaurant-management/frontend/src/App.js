import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import OrderPage from "./pages/OrderPage";
import FeedbackPage from "./pages/FeedbackPage";
import MenuPage from "./pages/MenuPage";

const App = () => {
  return (
    <Router>
      <div>
        <h1>Restaurant Management System</h1>
        <Routes>
          <Route path="/orders" element={<OrderPage />} />
          <Route path="/feedback" element={<FeedbackPage />} />
          <Route path="/menu" element={<MenuPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
