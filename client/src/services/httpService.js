// src/services/httpService.js
//===============
// לאחד GET ו POST

import axios from "axios";

const API_URL = "http://localhost:3000"; // your Express server

// Generic GET request
export const get = async (url) => {
  try {
    const response = await axios.get(`${API_URL}${url}`);
    return response.data;
  } catch (error) {
    console.error("GET request failed:", error);
    throw error;
  }
};

// Generic POST request
export const post = async (url, payload) => {
  try {
    const response = await axios.post(`${API_URL}${url}`, payload);
    return response.data;
  } catch (error) {
    console.error("POST request failed:", error);
    throw error;
  }
};

export default { get, post };
