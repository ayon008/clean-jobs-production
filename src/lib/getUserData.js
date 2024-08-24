'use client'
import useAxiosPublic from '@/Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const GetUserData = () => {
    const axiosPublic = useAxiosPublic();
    const uid = JSON.parse(localStorage.getItem('uid'));
    const { isPending, error, data: userData } = useQuery({
        queryKey: ['userData'],
        queryFn: () => {
            axiosPublic.get(`/user/${uid}`)
                .then(response => {
                    return response.data
                })
        }
    })
    return { isPending, error, userData };
};

export default GetUserData;