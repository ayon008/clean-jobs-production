import Cookies from "js-cookie";
import useAxiosPublic from "./useAxiosPublic";

const useAxiosSecure = () => {
    const axiosPublic = useAxiosPublic();
    const token = Cookies.get('userToken');
    console.log(token);
    axiosPublic.interceptors.request.use(function (config) {
        config.headers.authorization = `Bearer ${token}`
        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    });

    // Add a response interceptor
    axiosPublic.interceptors.response.use(function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    }, function (error) {
        console.log(error);
        
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    });
};

export default useAxiosSecure;