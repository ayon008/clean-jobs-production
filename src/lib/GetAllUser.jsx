'use client'
import useAxiosSecure from "@/Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const GetAllUsers = () => {
    const axiosSecure = useAxiosSecure();

    const { isLoading, isError, error, data: allUsers, refetch } = useQuery({
        queryKey: ['allUsers'], // Include `uid` in queryKey to refetch if `uid` changes
        queryFn: async () => {
            try {
                const response = await axiosSecure.get(`user`);
                const data = await response.data;
                console.log(data, 'allUsers');
                return data;
            } catch (err) {
                console.error("Error fetching user data:", err);
                throw err; // Rethrow the error to be caught by React Query
            }
        },
    });
    return { isLoading: false, allUsers, refetch };
};

export default GetAllUsers;