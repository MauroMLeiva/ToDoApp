import { collection, deleteDoc, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../firebase/config';
import { loadTasks } from '../helpers/loadTasks';
import {
    addNewLabel,
    addNewTask,
    deleteLabelById,
    deleteTaskById,
    savingNewTask,
    setEditing,
    setEditingEnd,
    setFilter,
    setLabels,
    setSaving,
    setTasks,
    updateTask,
} from './taskSlice';
import { loadLabels } from '../helpers/loadLabels';

export const startNewTask = () => {
    return async (dispatch, getState) => {
        dispatch(savingNewTask());
        dispatch(setFilter('all'));

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

export const startNewLabel = (label) => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;

        const newLabel = {
            label,
        };

        const newDoc = doc(collection(FirebaseDB, `${uid}/todo/labels`));
        await setDoc(newDoc, newLabel);

        newLabel.id = newDoc.id;

        dispatch(addNewLabel(newLabel));
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

export const startLoadingLabels = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        if (!uid) throw new Error('User ID does not exist');

        const labels = await loadLabels(uid);
        dispatch(setLabels(labels));
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

export const startDeletingTask = (id) => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;

        const docRef = doc(FirebaseDB, `${uid}/todo/tasks/${id}`);
        await deleteDoc(docRef);

        dispatch(deleteTaskById(id));
    };
};

export const startDeletingLabel = (id) => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;

        const docRef = doc(FirebaseDB, `${uid}/todo/labels/${id}`);
        await deleteDoc(docRef);

        dispatch(deleteLabelById(id));
    };
};
