import React from "react";
import OrderForm from "../components/Orders/OrderForm";
import OrderList from "../components/Orders/OrderList";

const OrderPage = () => {
  return (
    <div>
      <h2>Orders</h2>
      <OrderForm />
      <OrderList />
    </div>
  );
};

export default OrderPage;
