import { toast } from "react-toastify";
import { useAuth } from "../context/Auth";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const { isAuth } = useAuth();

  if (!isAuth) {
    toast.error("Please login First");
  }

  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
