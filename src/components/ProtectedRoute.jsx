import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ isLoggedIn, children, anonymous = false }) => {
  const location = useLocation();
  const from = location.state?.from || "/";
  if (anonymous && isLoggedIn) {
    return <Navigate to={from} />;
  }
  if (!anonymous && !isLoggedIn) {
    return <Navigate to={"/login"} replace />;
  }
  return children;
};

export default ProtectedRoute;
