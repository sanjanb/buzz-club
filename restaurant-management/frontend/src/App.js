import React from "react";
import OrderList from "./components/OrderList";
import OrderForm from "./components/OrderForm";
import FeedbackList from "./components/FeedbackList";
import FeedbackForm from "./components/FeedbackForm";
import MenuItemList from "./components/MenuItemList";
import MenuItemForm from "./components/MenuItemForm";

const App = () => {
  return (
    <div>
      <h1>Restaurant Management System</h1>
      <OrderForm />
      <OrderList />
      <FeedbackForm />
      <FeedbackList />
      <MenuItemForm />
      <MenuItemList />
    </div>
  );
};

export default App;
