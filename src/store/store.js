import { configureStore } from '@reduxjs/toolkit';
import { taskSlice } from './taskSlice';
import { authSlice } from './authSlice';

export const store = configureStore({
    reducer: {
        task: taskSlice.reducer,
        auth: authSlice.reducer,
    },
});
