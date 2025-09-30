// Mock database
const users = [
  { username: "tehila", password: "1234" },
];

const findUser = (username, password) => {
  return users.find(u => u.username === username && u.password === password);
};

module.exports = { findUser };
