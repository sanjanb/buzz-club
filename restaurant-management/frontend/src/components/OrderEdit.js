import React, { useState, useEffect } from 'react';
import { getOrderById, updateOrder } from '../../services/orderService';

const OrderEdit = ({ match }) => {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const fetchOrder = async () => {
      const response = await getOrderById(match.params.id);
      setOrder(response.data);
    };

    fetchOrder();
  }, [match.params.id]);

  const handleChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateOrder(order._id, order);
    // Redirect or provide feedback
  };

  if (!order) return <div>Loading...</div>;

  return (
    <form onSubmit={
