import React, { useState } from "react";
import { createOrder } from "../services/orderService";

const OrderForm = () => {
  const [tableNumber, setTableNumber] = useState("");
  const [items, setItems] = useState([{ name: "", quantity: 1, price: 0 }]);
  const [totalAmount, setTotalAmount] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const orderData = { tableNumber, items, totalAmount, status: "pending" };
    await createOrder(orderData);
    // Reset form or provide feedback
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Table Number:</label>
        <input
          type="number"
          value={tableNumber}
          onChange={(e) => setTableNumber(e.target.value)}
        />
      </div>
      {/* Handle items and totalAmount similarly */}
      <button type="submit">Create Order</button>
    </form>
  );
};

export default OrderForm;
