import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const user =   JSON.parse(localStorage.getItem("isLoggedInHomyz")) || false;
  console.log(user)

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
