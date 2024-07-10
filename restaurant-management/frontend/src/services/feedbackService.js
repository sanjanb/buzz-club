import api from "./api";

export const getFeedback = () => api.get("/feedback");
export const getFeedbackById = (id) => api.get(`/feedback/${id}`);
export const createFeedback = (feedbackData) =>
  api.post("/feedback", feedbackData);
export const updateFeedback = (id, feedbackData) =>
  api.put(`/feedback/${id}`, feedbackData);
export const deleteFeedback = (id) => api.delete(`/feedback/${id}`);
