import { Box, Toolbar } from '@mui/material';
import { Sidebar } from '../components/Sidebar';
import { TodoListView } from '../views/TodoListView';
import { TaskView } from '../views/TaskView';

export const TodoPage = () => {
    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <Sidebar />
                <Box sx={{ flexGrow: 1, p: 3 }}>
                    <Toolbar />

                    <TodoListView />

                    {/* <TaskView /> */}
                </Box>
            </Box>
        </>
    );
};
