import React, { useState } from "react";
import { createOrder } from "../../services/orderService";

const OrderForm = () => {
  const [tableNumber, setTableNumber] = useState("");
  const [items, setItems] = useState([{ name: "", quantity: 1, price: 0 }]);
  const [totalAmount, setTotalAmount] = useState(0);

  const handleItemChange = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = value;
    setItems(newItems);
    calculateTotalAmount(newItems);
  };

  const calculateTotalAmount = (items) => {
    const amount = items.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
    setTotalAmount(amount);
  };

  const handleAddItem = () => {
    setItems([...items, { name: "", quantity: 1, price: 0 }]);
  };

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
      {items.map((item, index) => (
        <div key={index}>
          <label>Item Name:</label>
          <input
            type="text"
            value={item.name}
            onChange={(e) => handleItemChange(index, "name", e.target.value)}
          />
          <label>Quantity:</label>
          <input
            type="number"
            value={item.quantity}
            onChange={(e) =>
              handleItemChange(index, "quantity", e.target.value)
            }
          />
          <label>Price:</label>
          <input
            type="number"
            value={item.price}
            onChange={(e) => handleItemChange(index, "price", e.target.value)}
          />
        </div>
      ))}
      <button type="button" onClick={handleAddItem}>
        Add Item
      </button>
      <div>
        <label>Total Amount:</label>
        <input type="number" value={totalAmount} readOnly />
      </div>
      <button type="submit">Create Order</button>
    </form>
  );
};

export default OrderForm;
