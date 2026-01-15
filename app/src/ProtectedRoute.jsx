import { useSelector} from "react-redux";
import { Navigate } from "react-router-dom";

import React from "react";

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn, token} = useSelector(
    (state) => state.user
  );

  if (!isLoggedIn || !token) {
    return <Navigate to="/" replace />;
  }
    return children;
};

export default ProtectedRoute;
