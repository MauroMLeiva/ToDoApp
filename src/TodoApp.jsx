import { AppRouter } from './routes/AppRouter';
import { AppTheme } from './theme/AppTheme';

export const TodoApp = () => {
    return (
        <AppTheme>
            <AppRouter />
        </AppTheme>
    );
};
