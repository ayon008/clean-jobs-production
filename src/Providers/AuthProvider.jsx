'use client'
import { createContext, useEffect, useState } from "react";
import { confirmPasswordReset, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "@/js/firebase.init";
import useAxiosPublic from "@/Hooks/useAxiosPublic";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const router = useRouter();

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
    const changePassword = async (email) => {
        if (!email) {
            console.error("Email is required for password reset");
            return;
        }
        try {
            await sendPasswordResetEmail(auth, email);
            console.log("Password reset email sent successfully.");
        } catch (error) {
            console.error("Password Reset Error:", error);
            throw error;
        }
    };
    const verifyPassword = async (actionCode, newPassword) => {
        try {
            await confirmPasswordReset(auth, actionCode, newPassword);
            console.log('Password reset successful');
            // Optionally redirect or update UI
        } catch (error) {
            // Handle errors
            console.error('Error resetting password:', error.message);
            // Optionally notify the user of the error
        }
    };

    const logOut = () => {
        setLoader(true);
        setUser(null);
        Cookies.remove('userToken');
        router.push('/');
        return signOut(auth);
    }

    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        const subscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                setLoader(false);
                axiosPublic.post('/userEmail', { email: currentUser.email })
                    .then(res => {
                        console.log(res);
                        const { token } = res?.data;
                        Cookies.set('userToken', token, { expires: 1 / 24 });
                    })
            }
            else if (!currentUser) {
                setUser(null);
                setLoader(false);
                Cookies.remove('userToken');
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
        changePassword,
        verifyPassword,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;