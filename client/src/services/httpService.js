import axios from "axios";

const API_URL = "http://localhost:3000"; // Express server

/**
 * Generic GET request
 * @param {string} url - relative API url
 * @param {object} config - optional axios config (headers, params, etc.)
 */
export const get = async (url, config = {}) => {
  try {
    const response = await axios.get(`${API_URL}${url}`, config);
    return response.data;
  } catch (error) {
    console.error("GET request failed:", error);
    throw error;
  }
};

/**
 * Generic POST request
 * @param {string} url - relative API url
 * @param {object} payload - body data
 * @param {object} config - optional axios config (headers, params, etc.)
 */
export const post = async (url, payload, config = {}) => {
  try {
    const response = await axios.post(`${API_URL}${url}`, payload, config);
    return response.data;
  } catch (error) {
    console.error("POST request failed:", error);
    throw error;
  }
};

export default { get, post };
