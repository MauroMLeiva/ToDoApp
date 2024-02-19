import { collection, getDocs } from 'firebase/firestore/lite';
import { FirebaseDB } from '../firebase/config';

export const loadTasks = async (uid = '') => {
    if (!uid) throw new Error('User ID does not exist');

    const collectionRef = collection(FirebaseDB, `${uid}/todo/tasks`);
    const docs = await getDocs(collectionRef);

    const tasks = [];
    docs.forEach((doc) => {
        tasks.push({ id: doc.id, ...doc.data() });
    });

    return tasks;
};
