'use client'
import useAuth from '@/Hooks/useAuth';
import Logo from '@/Shared/Logo';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

const Page = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { changePassword } = useAuth();

    const onSubmit = async (data) => {
        const { email } = data;
        try {
            await changePassword(email)
            Swal.fire({
                icon: 'success',
                title: 'The email has been sent successfully, please check your email',
                showConfirmButton: false,
                timer: 1500,
            });
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
                    <h2 className='text-base font-normal nunito'>Recover your account</h2>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-[#5C6272] font-normal text-base nunito">Enter your email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="emailaddress@gmail.com"
                            className="input input-bordered rounded-[10px] bg-[#FAFAFB] border border-[#5C6272]"
                            {...register('email', { required: 'Email is required' })}
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
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
