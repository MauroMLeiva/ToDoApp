import { createSlice } from '@reduxjs/toolkit';

export const taskSlice = createSlice({
    name: 'task',

    initialState: {
        tasks: [
            {
                title: 'hola1',
                body: 'Body of the task item',
                id: 1,
                color: '',
                filter: ['all', 'pending'],
            },
            {
                title: 'hola2',
                body: 'Body of the task item',
                id: 2,
                color: 'teal',
                filter: ['all', 'done'],
            },
            {
                title: 'hola3',
                body: 'Lorem ipsum y qcyo cuanto mas',
                id: 3,
                color: 'green',
                filter: ['all', 'done', 'archived'],
            },
        ],
        filter: 'pending', // all, pending, done, archived
        editing: -1,
        isSaving: false,
        labels: ['urgent', 'work', 'groceries'],
    },

    reducers: {
        addNewTask: (state, action) => {
            state.tasks.push(action.payload);
            state.isSaving = true;
        },
        setEditing: (state, action) => {
            state.editing = action.payload;
        },
        setEditingEnd: (state, action) => {
            state.editing = -1;
            state.tasks = state.tasks.map((task) => {
                if (task.id === action.payload.id) {
                    return action.payload;
                }

                return task;
            });
        },
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
    },
});

export const { addNewTask, setEditing, setEditingEnd, setFilter } =
    taskSlice.actions;
