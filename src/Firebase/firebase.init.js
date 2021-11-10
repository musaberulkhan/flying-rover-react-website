import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

// ----------  Initialize Authentication   ---------
const initializeAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;