import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../authenticationContext/context';

const route = () => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default route;