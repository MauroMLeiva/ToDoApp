import { Route, Routes } from 'react-router-dom';
import { TodoRoutes } from './TodoRoutes';

export const AppRouter = () => {
    return (
        <Routes>
            <Route path='/*' element={<TodoRoutes />} />
        </Routes>
    );
};
