import { 
    createUserWithEmailAndPassword, 
    getAuth, 
    onAuthStateChanged, 
    sendEmailVerification, 
    signInWithEmailAndPassword, 
    signOut,
    updateProfile
} from "firebase/auth";

import { app } from "./config";

class Authentication {
    constructor() {
        this.auth = getAuth(app);
    }

    signup(email, password) {
        return createUserWithEmailAndPassword(this.auth, email, password);
    }

    login(email, password) {
        return signInWithEmailAndPassword(this.auth, email, password);
    }

    logout() {
        return signOut(this.auth);
    }

    sendVerification() {
        return sendEmailVerification(this.auth.currentUser);
    }

    onAuthChange(callback) {
        return onAuthStateChanged(this.auth, callback);
    }

    updateUserProfile(fullName, photoURL) {
        return updateProfile(this.auth.currentUser, {displayName: fullName, photoURL: photoURL});
    }
};

export const AuthService = new Authentication();