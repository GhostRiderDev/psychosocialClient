import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRouteUser = ({ children }) => {
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem("yourInfo"));

  if (user?.role === "Patient") {
    return children;
  }

  return <Navigate to="/auth/login" state={{ from: location }} replace />;
};
PrivateRouteUser.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRouteUser;
