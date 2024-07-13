import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import OrderPage from "./pages/OrderPage";
import FeedbackPage from "./pages/FeedbackPage";
import MenuPage from "./pages/MenuPage";
import OrderEdit from "./components/Orders/OrderEdit"; // Import OrderEdit component

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/orders" element={<OrderPage />} />
          <Route path="/orders/edit/:id" element={<OrderEdit />} />{" "}
          {/* Route for editing order */}
          <Route path="/feedback" element={<FeedbackPage />} />
          <Route path="/menu" element={<MenuPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;