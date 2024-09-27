'use client'
import useAuth from '@/Hooks/useAuth';
import useAxiosPublic from '@/Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const GetUserData = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useAuth();
    const uid = user?.uid;
    const { isLoading, isError, error, data: userInfo } = useQuery({
        queryKey: ['userData', uid], // Include `uid` in queryKey to refetch if `uid` changes
        queryFn: async () => {
            try {
                const response = await axiosPublic.get(`/user/${uid}`);
                return response.data;
            } catch (err) {
                console.error("Error fetching user data:", err);
                throw err; // Rethrow the error to be caught by React Query
            }
        },
        enabled: !!uid, // Only fetch if `uid` is not null or undefined
    });
    return { isLoading: false, userInfo, error: null };
};

export default GetUserData;
