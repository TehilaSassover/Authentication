const express = require('express');
const mainRoutes = require('./server/routes/usersRoutes.js');
const booksRoutes = require('./server/routes/booksRoutes.js');

const app = express();
app.use(express.json());

app.use('/', mainRoutes);
app.use('/books', booksRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
