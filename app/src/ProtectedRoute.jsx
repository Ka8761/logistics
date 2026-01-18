// Create/Update src/components/ProtectedRoute.jsx
import { Navigate, Outlet } from 'react-router-dom';
import {useSelector} from 'react-redux';

export const ProtectedRoute = () => {
  const { token } = useSelector(state => state.user);
  
  // ✅ Allow home page + public routes
  const publicRoutes = ['/', '/home', '/about', '/contact'];
  const currentPath = window.location.pathname;
  
  if (!token && !publicRoutes.includes(currentPath)) {
    return <Navigate to="/login" replace />;
  }
  
  return <Outlet />;
};
