import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./../contexts/Auth";
const PrivateRoute = ({ children }) => {
  const AuthContext = useContext(AuthContext);
  const isUserLoggedIn = AuthContext.isUserLoggedIn;
  return isUserLoggedIn ? children : <Navigate to='/' />;
};
export default PrivateRoute;
