import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { getIsLoggedIn } from "../../redux/Auth/auth-selectors";

export default function PrivateRoute({ redirectTo = "/" }) {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return isLoggedIn ? <Outlet /> : <Navigate to={redirectTo} replace />;
}
