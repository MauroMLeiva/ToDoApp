import { collection, getDocs } from 'firebase/firestore/lite';
import { FirebaseDB } from '../firebase/config';

export const loadLabels = async (uid = '') => {
    if (!uid) throw new Error('User ID does not exist');

    const collectionRef = collection(FirebaseDB, `${uid}/todo/labels`);
    const docs = await getDocs(collectionRef);

    const labels = [];
    docs.forEach((doc) => {
        labels.push({ id: doc.id, ...doc.data() });
    });

    return labels;
};
