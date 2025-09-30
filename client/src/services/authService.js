import http from "./httpService";

const login = async (username, password) => {
  const data = await http.post("/auth/login", { username, password });
  const { token } = data;

  // save token in localStorage
  localStorage.setItem("token", token);

  return token;
};

export default { login };
