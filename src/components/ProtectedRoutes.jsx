import { useAuthStore } from "../store/useAuthStore";
import { Outlet, Navigate } from "react-router-dom";
export default function ProtectedRoutes() {
  const { isLoggedIn } = useAuthStore();
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />;
}
