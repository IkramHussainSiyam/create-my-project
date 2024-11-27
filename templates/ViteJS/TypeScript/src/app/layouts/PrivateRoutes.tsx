import { Navigate, Outlet } from "react-router";

export default function PrivateRoutes() {
  const isAuthenticated = false;

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
}
