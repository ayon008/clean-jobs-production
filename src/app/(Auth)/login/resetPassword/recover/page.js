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

const Page = ({ searchParams }) => {
    const code = searchParams?.oobCode;
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { verifyPassword } = useAuth();
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(prev => !prev);
    };

    const onSubmit = async (data) => {
        const { password } = data;
        try {
            verifyPassword(code, password)
            Swal.fire({
                icon: 'success',
                title: 'Password reset successful!',
                showConfirmButton: false,
                timer: 1500,
            });
            router.push('/login'); // Redirect to login page after successful reset
            reset();
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Reset failed!',
                text: error.message,
            });
        }
    };


    return (
        <div className='h-screen flex items-center justify-center bg-white md:px-0 px-6'>
            <div className='w-full max-w-md bg-gray-100 rounded-[20px] border border-[#E0E0E0]'>
                <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
                    <div className='w-3/4'>
                        <Logo />
                    </div>
                    <h2 className='text-base font-normal nunito'>Reset Password</h2>
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
                    </div>
                    <div className="form-control w-full mx-auto">
                        <button type="submit" className="btn rounded-[10px] btn-primary bg-primary text-white mt-4">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Page;
