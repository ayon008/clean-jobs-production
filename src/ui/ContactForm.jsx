'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import FormButton from '@/Shared/FormButton';

const ContactForm = () => {
    // Initialize React Hook Form
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    // Handle form submission
    const onSubmit = (data) => {
        console.log(data);  // Here you can handle your form data
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='2xl:mt-10 xl:mt-8'>
            <div className='grid grid-cols-2 gap-6 items-end'>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-[#0D0D0D] 2xl:text-base xl:text-base">Full Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="First Name"
                        className="input input-bordered rounded-[10px] border border-[#D6D6D6] w-full bg-white"
                        {...register('firstName', { required: true })}
                    />
                    {errors.firstName && <span className="text-red-500">First Name is required</span>}
                </div>
                <div className="form-control">
                    <input
                        type="text"
                        placeholder="Last Name"
                        className="input input-bordered rounded-[10px] border border-[#D6D6D6] w-full bg-white"
                        {...register('lastName', { required: true })}
                    />
                    {errors.lastName && <span className="text-red-500">Last Name is required</span>}
                </div>
            </div>
            <div className='grid grid-cols-2 gap-6 items-end mt-4'>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-[#0D0D0D] 2xl:text-base xl:text-base">Email</span>
                    </label>
                    <input
                        type="email"
                        placeholder="Email"
                        className="input input-bordered rounded-[10px] border border-[#D6D6D6] w-full bg-white"
                        {...register('email', { required: true })}
                    />
                    {errors.email && <span className="text-red-500">Email is required</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-[#0D0D0D] 2xl:text-base xl:text-base">Phone number</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Enter your phone number"
                        className="input input-bordered rounded-[10px] border border-[#D6D6D6] w-full bg-white"
                        {...register('phoneNumber', { required: true })}
                    />
                    {errors.phoneNumber && <span className="text-red-500">Phone number is required</span>}
                </div>
            </div>
            <div className="form-control mt-4">
                <label className="label">
                    <span className="label-text text-[#0D0D0D] 2xl:text-base xl:text-base">Subject</span>
                </label>
                <input
                    type="text"
                    placeholder="Write subject"
                    className="input input-bordered rounded-[10px] border border-[#D6D6D6] w-full bg-white"
                    {...register('subject', { required: true })}
                />
                {errors.subject && <span className="text-red-500">Subject is required</span>}
            </div>
            <div className="form-control mt-4">
                <label className="label">
                    <span className="label-text text-[#0D0D0D] 2xl:text-base xl:text-base">Your Message</span>
                </label>
                <textarea
                    placeholder="Write here"
                    className="textarea textarea-bordered rounded-[10px] border border-[#D6D6D6] w-full bg-white"
                    rows={4}
                    {...register('message', { required: true })}
                />
                {errors.message && <span className="text-red-500">Message is required</span>}
            </div>
            <div className="form-control 2xl:mt-10 xl:mt-8">
                <FormButton label={'Send Message'} width={'w-fit'} />
            </div>
        </form>
    );
};

export default ContactForm;
