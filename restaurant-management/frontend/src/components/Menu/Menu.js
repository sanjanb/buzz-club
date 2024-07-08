import React, { useEffect, useState } from "react";
import API from "../../api";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchMenuItems = async () => {
      const res = await API.get("/menu");
      setMenuItems(res.data);
    };
    fetchMenuItems();
  }, []);

  return (
    <div>
      {menuItems.map((item) => (
        <div key={item._id}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Menu;
