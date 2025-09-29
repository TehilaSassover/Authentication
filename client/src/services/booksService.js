// src/services/booksService.js
import * as http from "./httpService";

// Fetch all books
export const getAllBooks = async () => {
  return await http.get("/books");
};

