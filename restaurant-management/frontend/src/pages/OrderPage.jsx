import React from "react";
import Navbar from "../components/common/Navbar";
import OrderList from "../components/Orders/OrderList";
import Footer from "../components/common/Footer";

const OrderPage = () => {
  return (
    <div>
      <Navbar />
      <OrderList />
      <Footer />
    </div>
  );
};

export default OrderPage;
