import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext()

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const createNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
}

const userLogin = (email,password) => {
  return  signInWithEmailAndPassword(auth,email,password)
}

const logOut = () => {
    return signOut(auth)
}

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    console.log(user)

    const authInfo = {
        user,
        setUser,
        createNewUser,
        userLogin,
        logOut
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => {
            unsubscribe()
        }
    }, [])
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;