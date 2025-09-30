const express = require('express');
const cors = require("cors");
const booksRoutes = require('./server/routes/booksRoutes.js');
const authRoutes = require('./server/routes/authRoutes.js');

const app = express();
app.use(cors());
app.use(express.json());


// Default route (health check)
app.get("/", (req, res) => {
  res.send("Server is running");
});

app.use('/auth', authRoutes);
app.use('/books', booksRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
