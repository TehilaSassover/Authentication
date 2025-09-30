import React from "react";
import authService from "../services/authService";

function Login() {
  const handleLogin = async () => {
    try {
      const token = await authService.login("tehila", "1234"); // שם וסיסמא קבועים
      alert("Logged in! Token saved: " + token);
    } catch (error) {
      console.error(error);
      alert("Login failed!");
    }
  };

  return <button onClick={handleLogin}>Login</button>;
}

export default Login;
