import http from "./httpService";

const login = async (username, password) => {
  const data = await http.post("/auth/login", { username, password });
  const { token } = data;

  // save token in localStorage
  localStorage.setItem("token", token);

  return token;
};

const logout = async (token) => {
  const response = await http.post("/auth/logout", {token});
  localStorage.removeItem("token");
  return response;
};

export default { login, logout };
