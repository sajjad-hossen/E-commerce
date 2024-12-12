import { useState, createContext, useEffect } from "react";

// Create the AuthContext
export const AuthContext = createContext();

// Function to retrieve the token and user from localStorage
const retrieveStoredToken = () => {
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");

  // Parse user only if it exists
  const parsedUser = user ? JSON.parse(user) : null;

  return { token, user: parsedUser };
};

const AuthContextProvider = ({ children }) => {
  // Retrieve stored token and user from localStorage on initialization
  const { token: storedToken, user: storedUser } = retrieveStoredToken();

  // Initialize state with stored values or null if not found
  const [token, setToken] = useState(storedToken || null);
  const [user, setUser] = useState(storedUser || null);

  // Determine if a user is logged in based on the presence of a token
  const isUserLoggedIn = !!token;

  // Function to handle user logout
  const logoutHandler = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  // Function to handle user login
  const loginHandler = (userData, token) => {
    setToken(token);
    setUser(userData);
    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  // useEffect to sync state with localStorage when the component mounts
  useEffect(() => {
    const storedTokenData = retrieveStoredToken();

    if (storedTokenData.token) {
      setToken(storedTokenData.token);
      setUser(storedTokenData.user);
    }
  }, []);

  // Context object with token, user, and handler functions
  const authContext = {
    token,
    user,
    isUserLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  // Provide the authContext value to children components
  return (
    <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
