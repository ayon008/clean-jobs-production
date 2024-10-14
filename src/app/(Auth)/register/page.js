'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import TickCircle from "@/ui/TickCircle";
import useAuth from '@/Hooks/useAuth';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import { usStates } from '@/js/states';
import { useRouter } from 'next/navigation';
import useAxiosPublic from '@/Hooks/useAxiosPublic';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '@/js/firebase.init';

const Register = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting }, watch, reset } = useForm();
    const { signUp, updateUserProfile } = useAuth();
    const router = useRouter();
    const axiosPublic = useAxiosPublic();

    const onSubmit = async (data) => {
        const { companyName, email, password, confirmPassword, serviceState, serviceCities } = data;

        if (password !== confirmPassword) {
            return;
        }

        try {
            const res = await signUp(email, password);
            const user = res.user;

            await updateUserProfile(companyName);

            const cities = serviceCities.split(',').map(city => city.trim());

            const response = await axiosPublic.post('user', {
                userId: user.uid,
                companyName,
                email,
                serviceState,
                serviceCity1: cities[0],
                serviceCity2: cities[1]
            });

            await setDoc(doc(db, "users", user?.uid), {
                uid: user.uid,
                displayName: user?.displayName,
                email: user?.email,
                photoURL: user?.photoURL
            });

            await setDoc(doc(db, 'usersChat', user?.uid), {})

            if (response.data.insertedId) {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Signed Up",
                    showConfirmButton: false,
                    timer: 1500,
                });
                router.push('/dashboard');
                reset();
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Registration Failed',
                text: error.code?.split('auth/')[1] || 'An error occurred during sign-up',
            });
        }
    };

    const inputClass = "input input-bordered w-full";
    const errorClass = "text-red-500 text-sm";

    return (
        <div className="md:h-screen login lg:px-16 max-w-screen-2xl mx-auto md:py-0 py-10">
            <div className="flex md:flex-row flex-col h-full items-start justify-center">
                <div className="md:w-[40%] w-full h-full flex flex-col">
                    <div className="my-auto">
                        <p className="text-primary mb-6 -mt-5 text-xl pl-8">Join now! No credit card needed.</p>
                        <div className="h-full flex flex-col px-8 py-6">
                            <div className='text-left'>
                                <div className='mt-2'>
                                    <span className='text-4xl font-bold'>$0</span>
                                    <span className='text-primary font-semibold text-xs'>/year</span>
                                </div>
                                <p className='text-green-500 text-xl mt-6'>Free</p>
                            </div>
                            <ul className='mt-6 space-y-3 text-left text-xs'>
                                {[
                                    "View 1 cleaning opportunity per 30 days.",
                                    "Search/view 5 decision makers per search.",
                                    "Cleaning opportunities sent to your inbox.",
                                    "Cleaning contract calculators",
                                    "Create 1 Lead List with up to 45 total leads.",
                                    "Store & manage up to 3 cleaning opportunities/solicitations.",
                                    "Post up to 3 solicitations."
                                ].map((text, idx) => (
                                    <li key={idx} className='flex gap-2 items-center'>
                                        <TickCircle />
                                        <span className='text-left w-fit text-sm font-medium'>{text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="md:w-[60%] w-full h-full flex flex-col">
                    <form className="w-full md:p-8 p-4 md:my-auto" onSubmit={handleSubmit(onSubmit)}>
                        <label className="text-2xl text-blue-400 font-semibold">Create an account</label>
                        <div className="grid md:grid-cols-2 md:grid-rows-3 grid-cols-1 gap-6">
                            {[
                                {
                                    label: "Company Name",
                                    name: "companyName",
                                    type: "text",
                                    placeholder: "SparkleClean Solutions",
                                    required: "Company Name is required"
                                },
                                {
                                    label: "E-Mail Address",
                                    name: "email",
                                    type: "email",
                                    placeholder: "contact@sparklecleansolutions.com",
                                    required: "E-Mail Address is required",
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: "Invalid email address"
                                    }
                                },
                                {
                                    label: "Service State",
                                    name: "serviceState",
                                    type: "select",
                                    options: usStates,
                                    required: "Service State is required"
                                },
                                {
                                    label: "What cities do you service?",
                                    name: "serviceCities",
                                    type: "text",
                                    placeholder: "City1,City2",
                                    required: "Service Cities are required"
                                },
                                {
                                    label: "Password",
                                    name: "password",
                                    type: "password",
                                    placeholder: "password",
                                    required: "Password is required",
                                    minLength: {
                                        value: 6,
                                        message: "Password must be at least 6 characters long"
                                    }
                                },
                                {
                                    label: "Confirm Password",
                                    name: "confirmPassword",
                                    type: "password",
                                    placeholder: "confirm password",
                                    required: "Confirm Password is required",
                                    validate: value => value === watch('password') || "Passwords do not match"
                                },
                            ].map((field, idx) => (
                                <div key={idx} className="form-control">
                                    <label className="form-control w-full">
                                        <div className="label">
                                            <span className="label-text text-base text-primary">{field.label}</span>
                                        </div>
                                        {field.type === "select" ? (
                                            <select className="select text-primary text-base select-bordered w-full" {...register(field.name, { required: field.required })}>
                                                <option disabled selected>Pick Your State</option>
                                                {field.options.map((option, index) => (
                                                    <option key={index} value={option}>{option}</option>
                                                ))}
                                            </select>
                                        ) : (
                                            <input
                                                type={field.type}
                                                placeholder={field.placeholder}
                                                className={inputClass}
                                                {...register(field.name, {
                                                    required: field.required,
                                                    pattern: field.pattern,
                                                    minLength: field.minLength,
                                                    validate: field.validate
                                                })}
                                            />
                                        )}
                                        {errors[field.name] && <p className={errorClass}>{errors[field.name].message}</p>}
                                    </label>
                                </div>
                            ))}
                        </div>
                        <input
                            type="submit"
                            className="btn btn-outline text-green-600 w-full text-xl mt-6"
                            value={isSubmitting ? "Submitting..." : "Sign Up!"}
                            disabled={isSubmitting}
                        />
                        <a href={'/login'}>
                            <p className="text-center mt-6 cursor-pointer">Already have an account?</p>
                        </a>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
