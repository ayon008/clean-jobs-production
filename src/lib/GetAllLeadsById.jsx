'use client'
import useAxiosSecure from "@/Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const GetSingleLead = (id) => {
    const axiosSecure = useAxiosSecure();

    const { isLoading, isError, error, data: singleLeads, refetch } = useQuery({
        queryKey: ['singleLeads'], // Include `uid` in queryKey to refetch if `uid` changes
        queryFn: async () => {
            try {
                const response = await axiosSecure.get(`singleLeads/${id}`);
                const data = await response.data;
                console.log(data, 'singleLeads');
                return data;
            } catch (err) {
                console.error("Error fetching user data:", err);
                throw err; // Rethrow the error to be caught by React Query
            }
        },
    });
    return { isLoading: false, singleLeads, refetch };
};

export default GetSingleLead;