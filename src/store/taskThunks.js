import {
    collection,
    deleteDoc,
    doc,
    getDocs,
    query,
    setDoc,
    where,
} from 'firebase/firestore/lite';
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
    updateLabelById,
    updateTask,
    updateTaskDone,
    updateTaskPending,
} from './taskSlice';
import { loadLabels } from '../helpers/loadLabels';

export const startNewTask = (newFilter) => {
    return async (dispatch, getState) => {
        dispatch(savingNewTask());
        dispatch(setFilter(newFilter));

        const { uid } = getState().auth;

        const newTask =
            newFilter === 'all' || newFilter === 'pending'
                ? {
                      title: '',
                      body: '',
                      color: '',
                      filter: ['all', 'pending'],
                  }
                : {
                      title: '',
                      body: '',
                      color: '',
                      filter: ['all', 'pending', newFilter],
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
        dispatch(setSaving());

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

        dispatch(setEditingEnd());
        dispatch(updateTask(task));
    };
};

export const startDeletingTask = (id) => {
    return async (dispatch, getState) => {
        dispatch(setSaving());

        const { uid } = getState().auth;

        const docRef = doc(FirebaseDB, `${uid}/todo/tasks/${id}`);
        await deleteDoc(docRef);

        dispatch(deleteTaskById(id));
    };
};

export const startDeletingLabel = (label) => {
    return async (dispatch, getState) => {
        dispatch(setSaving());
        const { uid } = getState().auth;

        const docRef = doc(FirebaseDB, `${uid}/todo/labels/${label.id}`);
        await deleteDoc(docRef);

        const q = query(
            collection(FirebaseDB, `${uid}/todo/tasks`),
            where('filter', 'array-contains', label.label)
        );
        const snap = await getDocs(q);
        snap.forEach(async (document) => {
            const newFilter = document
                .data()
                .filter.filter((item) => item !== label.label);

            const newDoc = { ...document.data(), filter: newFilter };

            const docRef = doc(FirebaseDB, `${uid}/todo/tasks/${document.id}`);

            await setDoc(docRef, newDoc, { merge: true });

            const updateDoc = { ...newDoc, id: document.id };
            dispatch(updateTask(updateDoc));
        });

        dispatch(deleteLabelById(label));
    };
};
export const startUpdatingLabel = (label) => {
    return async (dispatch, getState) => {
        dispatch(setSaving());
        const { uid } = getState().auth;

        const newLabel = { label: label.labelContent };

        const docRef = doc(FirebaseDB, `${uid}/todo/labels/${label.id}`);
        await setDoc(docRef, newLabel, { merge: true });

        const q = query(
            collection(FirebaseDB, `${uid}/todo/tasks`),
            where('filter', 'array-contains', label.old)
        );
        const snap = await getDocs(q);

        snap.forEach(async (document) => {
            const removeOldLabel = document
                .data()
                .filter.filter((item) => item !== label.old);
            const newFilter = [...removeOldLabel, label.labelContent];

            const newDoc = { ...document.data(), filter: newFilter };

            const docRef = doc(FirebaseDB, `${uid}/todo/tasks/${document.id}`);

            await setDoc(docRef, newDoc, { merge: true });

            const updateDoc = { ...newDoc, id: document.id };
            dispatch(updateTask(updateDoc));
        });

        const updatedLabel = { ...newLabel, id: label.id };
        dispatch(updateLabelById(updatedLabel));
    };
};

export const startSetDone = (task) => {
    return async (dispatch, getState) => {
        dispatch(setSaving());

        const { uid } = getState().auth;
        const newFilter = task.filter.filter((tag) => tag !== 'pending');
        newFilter.push('done');

        const taskToFireStore = { ...task, filter: newFilter };
        const taskUpdate = { ...task, filter: newFilter };
        delete taskToFireStore.id;

        const docRef = doc(FirebaseDB, `${uid}/todo/tasks/${task.id}`);
        await setDoc(docRef, taskToFireStore, { merge: true });

        dispatch(updateTaskDone(taskUpdate));
    };
};

export const startSetUndone = (task) => {
    return async (dispatch, getState) => {
        dispatch(setSaving());

        const { uid } = getState().auth;
        const newFilter = task.filter.filter((tag) => tag !== 'done');
        newFilter.push('pending');

        const taskToFireStore = { ...task, filter: newFilter };
        const taskUpdate = { ...task, filter: newFilter };
        delete taskToFireStore.id;

        const docRef = doc(FirebaseDB, `${uid}/todo/tasks/${task.id}`);
        await setDoc(docRef, taskToFireStore, { merge: true });

        dispatch(updateTaskPending(taskUpdate));
    };
};
