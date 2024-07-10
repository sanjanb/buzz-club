import React, { useState, useEffect } from "react";
import { getMenuItems } from "../services/menuService";

const MenuItems = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchMenuItems = async () => {
      const response = await getMenuItems();
      setMenuItems(response.data);
    };

    fetchMenuItems();
  }, []);

  return (
    <section className="menu-items">
      <h2>Menu</h2>
      <ul>
        {menuItems.map((item) => (
          <li key={item._id}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>${item.price}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MenuItems;
