import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    updateProfile,
} from 'firebase/auth';
import { FirebaseAuth } from './config';

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        const { displayName, email, photoURL, uid } = result.user;

        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid,
        };
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;

        return {
            ok: false,
            errorMessage,
        };
    }
};

export const signUpWithEmailPassword = async ({
    email,
    password,
    displayName,
}) => {
    try {
        const resp = await createUserWithEmailAndPassword(
            FirebaseAuth,
            email,
            password
        );
        const { uid, photoURL } = resp.user;
        await updateProfile(FirebaseAuth.currentUser, {
            displayName,
        });

        return {
            ok: true,
            uid,
            photoURL,
            email,
            displayName,
        };
    } catch (error) {
        switch (error.message) {
            case 'Firebase: Error (auth/email-already-in-use).':
                return { ok: false, errorMessage: 'Email already in use.' };
                break;

            default:
                return { ok: false, errorMessage: error.message };
                break;
        }
    }
};

export const loginWithEmailPassword = async ({ email, password }) => {
    try {
        const result = await signInWithEmailAndPassword(
            FirebaseAuth,
            email,
            password
        );

        const { displayName, photoURL, uid } = result.user;

        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid,
        };
    } catch (error) {
        switch (error.message) {
            case 'Firebase: Error (auth/invalid-credential).':
                return {
                    ok: false,
                    errorMessage: 'Invalid email or password.',
                };
                break;

            case 'Firebase: Error (auth/invalid-email).':
                return {
                    ok: false,
                    errorMessage: 'Invalid email',
                };

            default:
                return {
                    ok: false,
                    errorMessage: error.message,
                };
                break;
        }
    }
};

export const logoutFirebase = async () => {
    return await FirebaseAuth.signOut();
};
