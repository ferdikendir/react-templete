import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '@hooks';
import { useEffect, useRef } from 'react';

const ProtectedRoute = () => {
    const token = localStorage.getItem('token');
    const { getUser } = useAuth();

    const location = useLocation();

    const prevLocation = useRef(location);

    useEffect(() => {
        prevLocation.current = location;
    }, [location]);


    if (getUser()?.userId || token) {
        return <Outlet />;
    } else {

        if (prevLocation.current.pathname !== '/auth/login' && prevLocation.current.pathname !== '/403') {
            localStorage.setItem('returnUrl', prevLocation.current.pathname);
        }

        return <Navigate to="/auth/login" replace />;
    }


};

export default ProtectedRoute;
