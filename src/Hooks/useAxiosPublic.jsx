import axios from "axios";
const useAxiosPublic = () => {
    const instance = axios.create({
        baseURL: 'https://clean-jobs-latest-backend.vercel.app/',
    });
    return instance;
};

export default useAxiosPublic;