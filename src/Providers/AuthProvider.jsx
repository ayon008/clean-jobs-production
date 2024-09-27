'use client'
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "@/js/firebase.init";
import useAxiosPublic from "@/Hooks/useAxiosPublic";
import Cookies from "js-cookie";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const auth = getAuth(app);

    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (name) => {
        return updateProfile(auth.currentUser, {
            displayName: name
        });
    }

    const logOut = () => {
        setLoader(true);
        return signOut(auth);
    }

    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        const subscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                const uid = currentUser.uid;
                setLoader(false);
                axiosPublic.post('/userEmail', { email: currentUser.email })
                    .then(res => {
                        console.log(res);
                        const { token } = res?.data;
                        Cookies.set('userToken', token)
                    })
            }
            else {
                setUser(null);
                setLoader(false);
                Cookies.remove('userToken')
            }
        })
        return () => subscribe();
    }, [auth, axiosPublic])

    const authInfo = {
        signUp,
        signIn,
        logOut,
        updateUserProfile,
        loader,
        user,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;