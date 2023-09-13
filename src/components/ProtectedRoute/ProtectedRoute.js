import React from 'react';
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ element: Component, ...props  }) => {
  let location = useLocation();
  return (
    props.isLoggedIn ? <Component {...props} /> : <Navigate to='/' state={{ from: location }} replace/>
  )
}

export default ProtectedRoute;