import { createContext, useContext, useEffect, useState } from "react";
import { apiUrl } from "../constants/ApiUrl";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [user, setUser] = useState(token ? jwtDecode(token) : null);

// On token change, decode the user info
useEffect(() => {
  if (token) {
    try {
      const decoded = jwtDecode(token);
      setUser(decoded); // Example decoded token: { userId: "123", role: "client" }
    } catch (error) {
      console.error("Invalid token:", error);
      logout();
    }
  }
}, [token]);


  const register = async (userData) => {
    try {
      const response = await fetch(`${apiUrl}/user/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      const data = await response.json();
      login(data.user);
    } catch (error) {
      console.error(error);
    }
  };

  const login = async (credentials) => {
    try {
      console.log(credentials)
      const response = await fetch(`${apiUrl}/user/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", data.access_token);
        setToken(data.access_token);
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  const isLoggedIn = () => !!token;

  return (
    <AuthContext.Provider value={{ token, login, logout, isLoggedIn, register, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
