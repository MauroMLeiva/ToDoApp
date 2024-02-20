import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Masonry } from '@mui/lab';
import toast, { Toaster } from 'react-hot-toast';

import { TaskItem } from '../components/TaskItem';

export const TodoListView = () => {
    const { tasks, filter, messageSaved } = useSelector((state) => state.task);

    useEffect(() => {
        if (messageSaved.length > 0) {
            toast(messageSaved, {
                style: {
                    boxShadow: '0px 0px 10px 2px black',
                    backgroundColor: '#e65100',
                    color: 'white',
                    fontWeight: '700',
                },
            });
        }
    }, [messageSaved]);

    return (
        <>
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

            <Toaster position='bottom-center' />
        </>
    );
};
