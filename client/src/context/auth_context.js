import React, {useContext, useEffect, useState} from 'react'
import {
    GoogleAuthProvider,
    signInWithRedirect,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth';
import {auth} from "../services/firebase";


const AuthContext = React.createContext();


export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(user))

    }, [user])


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
        return () => {
            unsubscribe();
        }
    }, [])

    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
    };

    const signOutWithGoogle = () => {
        signOut(auth)
        setUser({})
    }




    const signInUserWithEmailAndPassword = currentUser => {
        setUser(currentUser)
    }
    // const signOutUserWithEmailAndPassword = () => {
    //     setUser({})
    //     signOut(auth)
    // }


    return (
        <AuthContext.Provider value={{
            user,
            signInUserWithEmailAndPassword,
            // signOutUserWithEmailAndPassword,
            signInWithGoogle, signOutWithGoogle
        }
        }>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => {
    return useContext(AuthContext);
}