import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./../contexts/Auth";
const PrivateAdminRoute = ({ children }) => {
  const AuthContext = useContext(AuthContext);
  const isUserLoggedIn = AuthContext?.isUserLoggedIn;
  const role = AuthContext?.user?.special_user;
  return isUserLoggedIn &&
    role &&
    (role == "admin" || role == "super-admin") ? (
    children
  ) : (
    <Navigate to='/' />
  );
};
export default PrivateAdminRoute;
