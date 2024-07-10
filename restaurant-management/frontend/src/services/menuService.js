import api from "./api";

export const getMenuItems = () => api.get("/menu");
export const getMenuItemById = (id) => api.get(`/menu/${id}`);
export const createMenuItem = (menuItemData) => api.post("/menu", menuItemData);
export const updateMenuItem = (id, menuItemData) =>
  api.put(`/menu/${id}`, menuItemData);
export const deleteMenuItem = (id) => api.delete(`/menu/${id}`);
