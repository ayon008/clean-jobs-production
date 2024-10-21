'use client'
import useAuth from '@/Hooks/useAuth';
import Logo from '@/Shared/Logo';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

const Page = ({ searchParams }) => {
    const message = searchParams?.message;
    const router = useRouter();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { signIn, user } = useAuth();
    const [showPassword, setShowPassword] = useState(false);


    const togglePasswordVisibility = () => {
        setShowPassword(prev => !prev);
    };

    const onSubmit = (data) => {
        const email = data.email;
        const password = data.password;

        // Show the loading spinner
        Swal.fire({
            title: 'Signing In...',
            text: 'Please wait',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            },
        });

        signIn(email, password)
            .then(async (res) => {
                let token = Cookies.get('userToken');
                if (!token) {
                    await new Promise((resolve, reject) => {
                        const checkToken = setInterval(() => {
                            token = Cookies.get('userToken');
                            if (token) {
                                clearInterval(checkToken);
                                resolve(token);
                            }
                        }, 100);
                    })
                }
                if (token) {
                    let decoded = jwtDecode(token);
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Signed In Successfully",
                        showConfirmButton: false,
                        timer: 1500,
                    });

                    reset();
                    console.log(decoded);
                    // Ensure decoded exists before routing
                    if (decoded?.isAdmin) {
                        router.push(`/adminDashboard`);
                    } else if (decoded?.isSeller) {
                        router.push(`/sellerDashboard`);
                    } else {
                        router.push(`/dashboard`);
                    }
                }
            })
            .catch((err) => {
                console.log(err);
                // If there is an error, show an error message
                Swal.fire({
                    icon: 'error',
                    title: 'Sign In Failed',
                    text: err.code?.split('auth/')[1] || 'An error occurred during sign-in',
                });
            });
    };



    return (
        <div className='h-screen flex items-center justify-center bg-white md:px-0 px-6'>
            <div className='w-full max-w-md bg-gray-100 rounded-[20px] border border-[#E0E0E0]'>
                <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                    <h3 className='text-center text-red-500'>{message}</h3>
                    <div className='w-3/4'>
                        <Logo />
                    </div>
                    <h2 className='text-base font-normal nunito'>Welcome back. Please enter your details</h2>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-[#5C6272] font-normal text-base nunito">Email/User name</span>
                        </label>
                        <input
                            type="email"
                            placeholder="emailaddress@gmail.com"
                            className="input input-bordered rounded-[10px] bg-[#FAFAFB] border border-[#5C6272]"
                            {...register('email', { required: 'Email is required' })}
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-[#5C6272] font-normal text-base nunito">Password</span>
                        </label>
                        <div className='relative'>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                placeholder="password"
                                className="input input-bordered rounded-[10px] bg-[#FAFAFB] border border-[#5C6272] w-full"
                                {...register('password', { required: 'Password is required' })}
                            />
                            {
                                !showPassword &&
                                <FaEye
                                    className='text-[#999999] absolute right-4 top-1/2 bottom-1/2 cursor-pointer'
                                    onClick={togglePasswordVisibility}
                                    style={{ transform: "translateY(-50%)" }}
                                />
                            }
                            {
                                showPassword &&
                                <FaEyeSlash
                                    className='text-[#999999] absolute right-4 top-1/2 bottom-1/2 cursor-pointer'
                                    onClick={togglePasswordVisibility}
                                    style={{ transform: "translateY(-50%)" }}
                                />
                            }
                        </div>
                        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                        <label className="label">
                            <Link href="/login/resetPassword" className="label-text-alt link link-hover">Forgot password?</Link>
                        </label>
                    </div>
                    <div className="form-control w-full mx-auto">
                        <button type="submit" className="btn rounded-[10px] btn-primary bg-primary text-white">Login</button>
                        <label className="label mt-2">
                            <span className='text-[#AEAEAE] text-base nunito font-normal'>
                                Don’t have an account?
                                <Link href="/register" className="label-text-alt link link-hover underline text-base"> SignUp</Link>
                            </span>
                        </label>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Page;
