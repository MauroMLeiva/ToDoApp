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
            state.messageSaved = 'Task created';
        },
        addNewLabel: (state, action) => {
            state.labels.push(action.payload);
        },
        setTasks: (state, action) => {
            state.tasks = action.payload;
        },
        setLabels: (state, action) => {
            state.labels = action.payload;
        },
        setEditing: (state, action) => {
            state.editing = action.payload;
            state.messageSaved = '';
        },
        setEditingEnd: (state) => {
            state.editing = -1;
            state.messageSaved = '';
        },
        updateTask: (state, action) => {
            state.isSaving = false;
            state.tasks = state.tasks.map((task) => {
                if (task.id === action.payload.id) {
                    return action.payload;
                }

                return task;
            });

            state.messageSaved = 'Task saved';
        },
        updateTaskDone: (state, action) => {
            state.isSaving = false;
            state.tasks = state.tasks.map((task) => {
                if (task.id === action.payload.id) {
                    return action.payload;
                }

                return task;
            });

            state.messageSaved = 'Task marked as Done';
        },
        updateTaskPending: (state, action) => {
            state.isSaving = false;
            state.tasks = state.tasks.map((task) => {
                if (task.id === action.payload.id) {
                    return action.payload;
                }

                return task;
            });

            state.messageSaved = 'Task marked as Pending';
        },
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
        clearTasksOnLogout: (state) => {
            state.isSaving = false;
            state.editing = -1;
            state.tasks = [];
            state.filter = 'pending';
            state.messageSaved = '';
        },
        setSaving: (state) => {
            state.isSaving = true;
            state.messageSaved = '';
        },
        savingNewTask: (state) => {
            state.isSaving = true;
            state.messageSaved = '';
        },
        deleteTaskById: (state, action) => {
            state.active = null;
            state.tasks = state.tasks.filter(
                (task) => task.id !== action.payload
            );

            state.messageSaved = 'Task deleted';
        },
        deleteLabelById: (state, action) => {
            state.labels = state.labels.filter(
                (label) => label.id !== action.payload.id
            );

            if (state.filter == action.payload.label) {
                state.filter = 'all';
            }

            state.messageSaved = 'Label deleted';
        },
        updateLabelById: (state, action) => {
            state.isSaving = false;
            state.labels = state.labels.map((label) => {
                if (label.id === action.payload.id) {
                    return action.payload;
                }

                return label;
            });

            state.filter = action.payload.label;

            state.messageSaved = 'Label saved';
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
    deleteTaskById,
    addNewLabel,
    setLabels,
    deleteLabelById,
    updateTaskDone,
    updateTaskPending,
    updateLabelById,
} = taskSlice.actions;
