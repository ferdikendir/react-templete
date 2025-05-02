import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const AuthRoutes = () => {

    const token = localStorage.getItem('token');

    const navigate = useNavigate();


    useEffect(() => {
        if (token) {

            console.log('User is already logged in, redirecting to home page');
            navigate('/');

        }
    }, [navigate]);

    if (!token) {
        return (
            <Outlet />
        );
    }

};

export default AuthRoutes;