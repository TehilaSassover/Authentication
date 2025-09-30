import React from "react";
import authService from "../services/authService";

function Auth() {
  const handleLogin = async () => {
    try {
      const token = await authService.login("tehila", "1234"); // שם וסיסמא קבועים
      alert("Logged in! Token saved: " + token);
    } catch (error) {
      console.error(error);
      alert("Login failed!");
    }
  };

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;
      const response = await authService.logout(token);
      alert("Logged out! " + response.token);
    } catch (error) {
      console.error(error);
      alert("Logout failed!");
    }
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <br />
      <button onClick={handleLogout}>Logout</button>
    </div>

  );
}

export default Auth;
