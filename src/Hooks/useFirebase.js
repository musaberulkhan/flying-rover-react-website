import { useEffect, useState } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {

    // -------  States   ----------
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    // const [invalidUser, setInvalidUser] = useState(false);

    //--------   Firebase Auth   --------
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    // --------   Google Sign In   --------
    const signInUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    // --------   Log Out  --------
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser();
            })
            .finally(() => setIsLoading(false));
    }

    // --------   Register Using Email and Password  --------
    const registerUserUsingEmailPassword = (email, password) => {
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);           
    }

    // --------   Sign In Using Email and Password  --------
    const signInUserUsingEmailPassword = (email, password) => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password)            
    }

    //--------  Observer User State  -----------
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            setIsLoading(false);
        });
    }, [])


    // ---------- Return all elements  ---------
    return {
        user,
        auth,
        updateProfile,
        signInUsingGoogle,
        logOut,
        registerUserUsingEmailPassword,
        signInUserUsingEmailPassword,
        isLoading, setIsLoading
    }
}

export default useFirebase;