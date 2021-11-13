import { useEffect, useState } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {

    // -------  States   ----------
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false);

    //--------   Firebase Auth   --------
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    // --------   Google Sign In   --------
    const signInUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider);
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
    }, [auth])

    //--------  Set Admin State  -----------
    useEffect(() => {       
        fetch(`https://whispering-chamber-62649.herokuapp.com/users/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setAdmin(data.admin);
            })
        
    }, [user?.email])


    // --------   Log Out  --------
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser();
            })
            .finally(() => setIsLoading(false));
    }
    //--------  Save user info to DB  -----------
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://whispering-chamber-62649.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }


    // ---------- Return all elements  ---------
    return {
        user,
        auth,
        admin,
        saveUser,
        updateProfile,
        signInUsingGoogle,
        logOut,
        registerUserUsingEmailPassword,
        signInUserUsingEmailPassword,
        isLoading, setIsLoading
    }
}

export default useFirebase;