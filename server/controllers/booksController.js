const { getAllBooks} = require('../models/booksModel');

function getBooks(req, res) {
  res.json(getAllBooks());
}

module.exports = { getBooks };
