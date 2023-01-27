import React from 'react';
import {auth} from '../firebase/config.firebase';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    signOut
} from 'firebase/auth';
import {Navigate} from "react-router-dom";
const authContext = React.createContext({});

const AuthProvider = ({children}) => {

    const [currentUser, setCurrentUser] = React.useState(null);
    const registerUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const registerWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider()
        return signInWithPopup(auth, googleProvider)
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signOutUser = () => {
        return signOut(auth);
    }

    const AuthRoute = ({children}) => {

        if (currentUser){
            return <Navigate to="/posts" />
        }
        return (
            <>
                {children}
            </>
        )
    }

    React.useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            setCurrentUser(currentUser)
        })
    },[])

    return (
        <authContext.Provider value={{
            registerUser,
            loginUser,
            signOutUser,
            AuthRoute,
            currentUser,
            registerWithGoogle
        }}>
            {children}
        </authContext.Provider>
    )
}

export {
    AuthProvider,
    authContext
}