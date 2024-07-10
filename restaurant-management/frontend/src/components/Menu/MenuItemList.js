import React, { useState, useEffect } from "react";
import { getMenuItems } from "../../services/menuService";

const MenuItemList = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchMenuItems = async () => {
      const response = await getMenuItems();
      setMenuItems(response.data);
    };

    fetchMenuItems();
  }, []);

  return (
    <div>
      <h2>Menu Items</h2>
      <ul>
        {menuItems.map((item) => (
          <li key={item._id}>
            Name: {item.name}, Description: {item.description}, Price:{" "}
            {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuItemList;
