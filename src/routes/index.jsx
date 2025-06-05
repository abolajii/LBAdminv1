import { Navigate, Outlet } from "react-router-dom";

import userStore from "../store/userStore";

export const PrivateRoute = () => {
  const { user } = userStore();

  return user !== null ? <Outlet /> : <Navigate to="/login" />;
};

export const PublicRoute = () => {
  const { user } = userStore();
  return user !== null ? <Navigate to="/dashboard" /> : <Outlet />;
};
