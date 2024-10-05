'use client'
import useAuth from "@/Hooks/useAuth";
import useAxiosSecure from "@/Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const GetUserData = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const [uid, setUid] = useState(null);
    useEffect(() => {
        const uid = user?.uid;
        setUid(uid);
    }, [user])

    const { isLoading, isError, error, data: userInfo, refetch } = useQuery({
        queryKey: ['userData', uid], // Include `uid` in queryKey to refetch if `uid` changes
        queryFn: async () => {
            try {
                const response = await axiosSecure.get(`user/${uid}`);
                const data = await response.data;
                console.log(data, 'userInfo');
                return data;
            } catch (err) {
                console.error("Error fetching user data:", err);
                throw err; // Rethrow the error to be caught by React Query
            }
        },
    });
    return { isLoading: false, userInfo, refetch };
};

export default GetUserData;