import { createSlice } from '@reduxjs/toolkit';

export const taskSlice = createSlice({
    name: 'task',

    initialState: {
        tasks: [],
        filter: 'pending', // all, pending, done, archived, {labels}
        editing: -1,
        isSaving: false,
        labels: [],
        messageSaved: '',
    },

    reducers: {
        addNewTask: (state, action) => {
            state.tasks.unshift(action.payload);
            state.isSaving = true;
        },
        setTasks: (state, action) => {
            state.tasks = action.payload;
        },
        setEditing: (state, action) => {
            state.editing = action.payload;
            state.messageSaved = '';
        },
        setEditingEnd: (state) => {
            state.editing = -1;
        },
        updateTask: (state, action) => {
            state.isSaving = false;
            state.tasks = state.tasks.map((task) => {
                if (task.id === action.payload.id) {
                    return action.payload;
                }

                return task;
            });

            state.messageSaved = `Note updated correctly`;
        },
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
        clearTasksOnLogout: (state) => {
            state.isSaving = false;
            state.editing = -1;
            state.tasks = [];
        },
        setSaving: (state) => {
            state.isSaving = true;
            state.messageSaved = '';
        },
        savingNewTask: (state) => {
            state.isSaving = true;
        },
    },
});

export const {
    addNewTask,
    setEditing,
    setEditingEnd,
    setFilter,
    setTasks,
    clearTasksOnLogout,
    setSaving,
    savingNewTask,
    updateTask,
} = taskSlice.actions;
