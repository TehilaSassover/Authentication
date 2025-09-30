import http from "./httpService";

// Fetch all books (protected route)
export const getAllBooks = async () => {
  const token = localStorage.getItem("token"); // get token from localStorage

  if (!token) {
    console.error("User is not authenticated");
    return null; // או throw חדש אם רוצים שהקריאה תיכשל
  }

  try {
    const data = await http.get("/books", {
      headers: {
        Authorization: `Bearer ${token}`, // send token in header
      },
    });
    return data;
  } catch (error) {
    console.error("Error fetching books:", error.message || error);
    return null;
  }
};
