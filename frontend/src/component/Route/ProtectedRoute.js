import React from "react";
import {Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
const ProtectedRoute = ({ isAdmin, children }) => {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  const isAdminUser = user && user.role === "admin";
  return isAuthenticated || (isAdmin && isAdminUser) ? (
    children
  ) : (
    <Navigate to="/login" />
  );
};


export default ProtectedRoute;
