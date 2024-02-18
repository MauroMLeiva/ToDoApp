import { createSlice } from '@reduxjs/toolkit';

export const taskSlice = createSlice({
    name: 'task',

    initialState: {
        tasks: [],
        active: null,
        isSaving: false,
    },

    reducers: {
        addNewTask: (state, action) => {
            state.tasks.push(action.payload);
            state.isSaving = true;
        },
    },
});

export const { addNewTask } = taskSlice.actions;
