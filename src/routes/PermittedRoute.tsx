import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '@hooks';

const PermittedRoute = ({ permissions }: { permissions: number[] | number }) => {
    const { getUser, hasPermission } = useAuth();
    const location = useLocation();

    if (!getUser()) {
        return <Navigate to="/auth/login" state={{ from: location }} replace />;
    }

    if (!hasPermission(permissions)) {
        return <Navigate to="/403" replace />;
    }

    return <Outlet />;
};

export default PermittedRoute;
