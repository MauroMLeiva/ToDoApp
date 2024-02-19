import { Masonry } from '@mui/lab';
import { useSelector } from 'react-redux';
import { TaskItem } from '../components/TaskItem';

export const TodoListView = () => {
    const { tasks, filter } = useSelector((state) => state.task);

    return (
        <Masonry
            columns={{ xs: 1, columns: 2, columns3: 3, xl: 4 }}
            spacing={3}
        >
            {/* DYNAMICALLY RENDER CARDS WITH USERS TODOS */}

            {tasks.map((item) => {
                if (item.filter.includes(filter)) {
                    return <TaskItem key={item.id} item={item} />;
                }

                return;
            })}
        </Masonry>
    );
};
