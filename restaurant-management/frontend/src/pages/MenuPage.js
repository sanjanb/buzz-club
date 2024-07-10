import React from "react";
import MenuItemForm from "../components/Menu/MenuItemForm";
import MenuItemList from "../components/Menu/MenuItemList";

const MenuPage = () => {
  return (
    <div>
      <h2>Menu</h2>
      <MenuItemForm />
      <MenuItemList />
    </div>
  );
};

export default MenuPage;
