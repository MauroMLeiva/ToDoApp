import { collection, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../firebase/config';
import { loadTasks } from '../helpers/loadTasks';
import {
    addNewTask,
    savingNewTask,
    setEditing,
    setEditingEnd,
    setSaving,
    setTasks,
    updateTask,
} from './taskSlice';

export const startNewTask = () => {
    return async (dispatch, getState) => {
        dispatch(savingNewTask());

        const { uid } = getState().auth;

        const newTask = {
            title: '',
            body: '',
            color: '',
            filter: ['all', 'pending'],
        };

        const newDoc = doc(collection(FirebaseDB, `${uid}/todo/tasks`));
        await setDoc(newDoc, newTask);

        newTask.id = newDoc.id;

        dispatch(addNewTask(newTask));
        dispatch(setEditing(newTask.id));
    };
};

export const startLoadingTasks = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        if (!uid) throw new Error('User ID does not exist');

        const tasks = await loadTasks(uid);
        dispatch(setTasks(tasks));
    };
};

export const startSavingTask = (task) => {
    return async (dispatch, getState) => {
        dispatch(setSaving());

        const { uid } = getState().auth;

        const taskToFireStore = { ...task };
        delete taskToFireStore.id;

        const docRef = doc(FirebaseDB, `${uid}/todo/tasks/${task.id}`);
        await setDoc(docRef, taskToFireStore, { merge: true });

        dispatch(updateTask(task));
        dispatch(setEditingEnd());
    };
};
