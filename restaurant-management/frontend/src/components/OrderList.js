import React, { useState, useEffect } from "react";
import { getOrders } from "../services/orderService";

const OrderList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await getOrders();
      setOrders(response.data);
    };

    fetchOrders();
  }, []);

  return (
    <div>
      <h2>Orders</h2>
      <ul>
        {orders.map((order) => (
          <li key={order._id}>
            Table: {order.tableNumber}, Status: {order.status}, Total:{" "}
            {order.totalAmount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderList;
