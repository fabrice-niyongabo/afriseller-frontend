import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedDashboard = ({ children }) => {
  const { token } = useSelector((state) => state.user);
  return token && token.trim() !== "" ? children : <Navigate to="/login" />;
};

export default ProtectedDashboard;
