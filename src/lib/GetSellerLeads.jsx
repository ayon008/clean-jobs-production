'use client'
import useAxiosSecure from "@/Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const GetSellerLeads = (sellerId) => {
    const axiosSecure = useAxiosSecure();

    const { isLoading, isError, error, data: sellerLeads, refetch } = useQuery({
        queryKey: ['sellerLeads'], // Include `uid` in queryKey to refetch if `uid` changes
        queryFn: async () => {
            try {
                const response = await axiosSecure.get(`sellerLeads/${sellerId}`);
                const data = await response.data;
                console.log(data, 'sellerLeads');
                return data;
            } catch (err) {
                console.error("Error fetching user data:", err);
                throw err; // Rethrow the error to be caught by React Query
            }
        },
    });
    return { isLoading: false, sellerLeads, refetch };
};

export default GetSellerLeads;