'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import FormButton from '@/Shared/FormButton';

const ContactUserForm = () => {
    // Initialize React Hook Form
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    // Handle form submission
    const onSubmit = (data) => {
        console.log(data);  // Form data will be handled here
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='2xl:mt-10 xl:mt-8 space-y-4'>
            <div className="form-control">
                <input
                    type="text"
                    placeholder="Your Name"
                    className="input input-bordered rounded-[10px] border border-[#D6D6D6] w-full bg-white"
                    {...register('name', { required: true })}
                />
                {errors.name && <span className="text-red-500">Name is required</span>}
            </div>
            <div className="form-control">
                <input
                    type="email"
                    placeholder="Email"
                    className="input input-bordered rounded-[10px] border border-[#D6D6D6] w-full bg-white"
                    {...register('email', { required: true })}
                />
                {errors.email && <span className="text-red-500">Email is required</span>}
            </div>
            <div className="form-control">
                <textarea
                    placeholder="Comment"
                    className="textarea textarea-bordered rounded-[10px] border border-[#D6D6D6] w-full bg-white"
                    rows={4}
                    {...register('comment', { required: true })}
                />
                {errors.comment && <span className="text-red-500">Comment is required</span>}
            </div>
            <div className='form-control'>
                <div className='flex items-center gap-2'>
                    <input
                        type="checkbox"
                        className='w-[16px] h-[16px]'
                        {...register('privacyPolicy', { required: true })}
                    />
                    <label className="label">
                        <span className="label-text text-sm text-[#808080]">
                            You agree to our friendly <span className='text-primary font-semibold inter'>privacy policy.</span>
                        </span>
                    </label>
                </div>
                {errors.privacyPolicy && <span className="text-red-500">You must agree to the privacy policy</span>}
            </div>
            <FormButton width={'w-fit'} label={'Send Message'} />
        </form>
    );
};

export default ContactUserForm;
