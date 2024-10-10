'use client'
import useAxiosSecure from "@/Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const GetAllLeads = () => {
    const axiosSecure = useAxiosSecure();

    const { isLoading, isError, error, data: allLeads, refetch } = useQuery({
        queryKey: ['allLeads'], // Include `uid` in queryKey to refetch if `uid` changes
        queryFn: async () => {
            try {
                const response = await axiosSecure.get(`allLeads`);
                const data = await response.data;
                console.log(data, 'allLeads');
                return data;
            } catch (err) {
                console.error("Error fetching user data:", err);
                throw err; // Rethrow the error to be caught by React Query
            }
        },
    });
    return { isLoading: false, allLeads, refetch };
};

export default GetAllLeads;