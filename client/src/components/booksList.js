// src/components/BooksList.js
import { useEffect, useState } from "react";
import { getAllBooks, addBook } from "../services/booksService";

export default function BooksList() {
  const [books, setBooks] = useState([]);

  const handleFetchBooks = async () => {
    const data = await getAllBooks();
    if (!data) {
      alert("You need to login first!");
      return;
    }
    setBooks(data);
  };

  // const handleAddBook = async () => {
  //   const newBook = { id: Date.now(), title: "New Book" };
  //   await addBook(newBook);
  //   const updatedBooks = await getAllBooks();
  //   setBooks(updatedBooks);
  // };

  return (
    <div>
      <h2>Books List</h2>
      <button onClick={handleFetchBooks}>Fetch Book</button>
      <ul>
        {books.map((b) => (
          <li key={b.id}>{b.title}</li>
        ))}
      </ul>
    </div>
  );
}
