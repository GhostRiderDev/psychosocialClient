import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const admin = JSON.parse(localStorage.getItem("yourInfo"));
  

  if (admin?.role === "Admin") {
    return children;
  }
  return <Navigate to="/auth/login" state={{ from: location }} replace />;
};
PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
