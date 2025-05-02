import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from '../auth/LoginPage';
import AuthLayout from '../auth/AuthLayout';
import ForgotPassword from '../auth/ForgotPassword';
import Dashboard from '../pages/dashboard/Dashboard';
import Banks from '../pages/banks/Banks';
import { AuthProvider } from '@providers';
import { Layout } from '@layout';
import { ProtectedRoute, PermittedRoute, AuthRoutes } from '@routes';


const AppRoutes = () => {

    return (
        <Router>

            <AuthProvider>

                <Routes>

                    <Route element={<AuthRoutes />}>

                        <Route path="/auth" element={<AuthLayout />}>
                            <Route index element={<Navigate to="login" replace />} />
                            <Route path='login' element={<LoginPage />} />
                            <Route path='forgot-password' element={<ForgotPassword />}></Route>
                        </Route>

                    </Route>

                    <Route element={<ProtectedRoute />}>

                        <Route path='/' element={<Layout />}>

                            <Route element={<PermittedRoute permissions={1} />}>
                                <Route index element={<Navigate to="/dashboard" replace />} />
                            </Route>

                            <Route path='dashboard' element={<Dashboard />} />

                            <Route path='banks' element={<Banks />} />


                        </Route>

                        <Route path='*' element={<Navigate to="/dashboard" replace />} />

                    </Route>


                </Routes>

            </AuthProvider>

        </Router>
    )

};

export default AppRoutes;