'use client'
import useAxiosSecure from "@/Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const GetSavedLead = () => {
    const axiosSecure = useAxiosSecure(uid);

    const { isLoading, isError, error, data: savedLeads, refetch } = useQuery({
        queryKey: ['savedLeads'], // Include `uid` in queryKey to refetch if `uid` changes
        queryFn: async () => {
            try {
                const response = await axiosSecure.get(`savedLeads/${uid}`);
                const data = await response.data;
                console.log(data, 'savedLeads');
                return data;
            } catch (err) {
                console.error("Error fetching user data:", err);
                throw err; // Rethrow the error to be caught by React Query
            }
        },
    });
    return { isLoading: false, savedLeads, refetch };
};

export default GetSavedLead;