import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const isLoggedIn =   JSON.parse(localStorage.getItem("isLoggedIn")) || false;

  if (isLoggedIn) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
