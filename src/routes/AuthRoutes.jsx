import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage } from '../auth/pages/LoginPage';
import { RegisterPage } from '../auth/pages/RegisterPage';

export const AuthRoutes = () => {
    return (
        <Routes>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/signup' element={<RegisterPage />} />

            <Route path='/*' element={<Navigate to='/auth/login' />} />
        </Routes>
    );
};