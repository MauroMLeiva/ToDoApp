import { Navigate, Route, Routes } from 'react-router-dom';
import { TodoRoutes } from './TodoRoutes';
import { useSelector } from 'react-redux';
import { AuthRoutes } from './AuthRoutes';

export const AppRouter = () => {
    const { status } = useSelector((state) => state.auth);
    return (
        <Routes>
            {status === 'authenticated' ? (
                <Route path='/*' element={<TodoRoutes />} />
            ) : (
                <Route path='/auth/*' element={<AuthRoutes />} />
            )}

            <Route path='/*' element={<Navigate to='/auth/login' />} />
        </Routes>
    );
};
