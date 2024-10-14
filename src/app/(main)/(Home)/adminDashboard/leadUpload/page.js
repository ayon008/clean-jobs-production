'use client'
import useAuth from '@/Hooks/useAuth';
import useAxiosSecure from '@/Hooks/useAxiosSecure';
import { usStates } from '@/js/states';
import uploadAudioToFirebase from '@/js/uploadAudio';
import FormButton from '@/Shared/FormButton';
import InputField from '@/Shared/InputField';
import PageTitle from '@/Shared/PageTitle';
import SelectField from '@/Shared/SelectField';
import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const LeadForm = () => {
    const { user } = useAuth();
    const firstLetter = user?.displayName[0];
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const axiosSecure = useAxiosSecure()

    const onSubmit = async (data) => {
        // Show the loading Swal when the form is submitted
        Swal.fire({
            title: 'Submitting...',
            text: 'Please wait while we process your request.',
            icon: 'info',
            allowOutsideClick: false,
            showConfirmButton: false,
            didOpen: () => {
                Swal.showLoading(); // Start loading indicator
            }
        });

        const record = data.audio[0];
        const audio = await uploadAudioToFirebase(record);
        const date = new Date();
        if (!audio) {
            Swal.fire({
                title: 'Error!',
                text: 'There was an issue submitting the lead. Please try again later.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
            return
        }
        // Post the form data to the server
        await axiosSecure.post('/leads', { ...data, sellerId: user?.uid, companyName: user?.displayName, audio, uploadDate: date, verified: false, sold: false, sellerPayment: false })
            .then(response => {
                // If the request is successful, show success Swal
                Swal.fire({
                    title: 'Success!',
                    text: 'Lead has been submitted successfully.',
                    icon: 'success',
                    confirmButtonText: 'OK'
                });
                reset();
            })
            .catch(error => {
                // If there is an error, show error Swal
                Swal.fire({
                    title: 'Error!',
                    text: 'There was an issue submitting the lead. Please try again later.',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            });
    };

    return (
        <div className='2xl:pt-36 xl:py-28 py-28'>
            <div className=''>
                <div className="2xl:w-[60px] 2xl:h-[60px] xl:w-[50px] xl:h-[50px] relative w-[30px] h-[30px] rounded-full bg-primary  mx-auto text-white">
                    <span className="absolute top-1/2 right-1/2 transform -translate-y-1/2 translate-x-1/2 md:text-base text-xs font-normal">{firstLetter}</span>
                </div>
            </div>
            <div className='my-6'>
                <h3 className='text-[#344054] text-center 2xl:text-3xl xl:text-3xl text-xl font-medium'>{user?.displayName}</h3>
                <p className='text-[#667085] text-center font-normal'>{user?.email}</p>
            </div>
            <div className='bg-[#C7F2AB] px-6 py-5 rounded-xl flex items-start gap-3 w-fit mx-auto'>
                <div className=''>
                    <h3 className='font-bold text-xs text-center'>Upload Leads</h3>
                    <p className='poppins text-xs mt-1 text-center'>Sell your leads faster and get profit</p>
                </div>
            </div>
            <div className='2xl:px-28 xl:px-20 px-10 2xl:mt-28 xl:mt-16 mt-10'>
                <div className='2xl:w-1/2 xl:w-1/2'>
                    <PageTitle
                        heading={'Lead Input Form'}
                        subHeading={"Please enter all the required lead information"}
                    />
                </div>
                <div className='2xl:mt-24 xl:mt-16 mt-10'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='grid 2xl:grid-cols-2 xl:grid-cols-2 grid-cols-1 gap-10'>
                            <div>
                                <div className="form-control relative">
                                    <label className="label absolute bg-white left-[2%] -top-[50%]">
                                        <span className="label-text text-primary font-normal text-base poppins">Lead Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter lead name"
                                        {...register('leadName')}
                                        className={`input input-bordered rounded-[10px] bg-white border border-[#5C6272]`}
                                    />
                                </div>
                            </div>
                            <div>
                                <InputField
                                    label={'Business Name'}
                                    placeholder={'Enter decision maker business name'}
                                    type={'text'}
                                    register={register}
                                    name={'businessName'}
                                    errors={errors}
                                />
                            </div>
                            <div className='col-start-1 row-start-5'>
                                <InputField
                                    label={'Appointment Time'}
                                    placeholder={'8.45 Pm'}
                                    type={'time'}
                                    register={register}
                                    name={'time'}
                                    errors={errors}
                                />
                            </div>
                            <div>
                                <SelectField
                                    label={'State'}
                                    placeholder={'Enter your state'}
                                    type={usStates}
                                    register={register}
                                    name={'states'}
                                    errors={errors}
                                />
                            </div>
                            <div>
                                <InputField
                                    label={'City'}
                                    placeholder={'New York City'}
                                    type={'text'}
                                    register={register}
                                    name={'city'}
                                    errors={errors}
                                />
                            </div>
                            <div>
                                <InputField
                                    label={'Location'}
                                    placeholder={'Oakley Avenue, Hammond, IN'}
                                    type={'text'}
                                    register={register}
                                    name={'location'}
                                    errors={errors}
                                />
                            </div>
                            <div className='col-start-1 row-start-2'>
                                <InputField
                                    placeholder={'Enter first name of decision maker'}
                                    label={'First Name'}
                                    type={'text'}
                                    register={register}
                                    name={'firstName'}
                                    errors={errors}
                                />
                            </div>
                            <div>
                                <InputField
                                    label={'Total cleanable area (sq/ft)'}
                                    placeholder={'Enter cleanable area in sq/ft'}
                                    type={'number'}
                                    register={register}
                                    name={'area'}
                                    errors={errors}
                                />
                            </div>
                            <div className='col-start-1 row-start-3'>
                                <div className="form-control relative">
                                    <label className="label absolute bg-white left-[2%] -top-[50%]">
                                        <span className="label-text text-primary font-normal text-base poppins">Last Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter your last name"
                                        {...register('lastName')}
                                        className={`input input-bordered rounded-[10px] bg-white border border-[#5C6272]`}
                                    />
                                </div>
                            </div>
                            <div className=''>
                                <div className="form-control relative">
                                    <label className="label absolute bg-white left-[2%] -top-[50%]">
                                        <span className="label-text text-primary font-normal text-base poppins">Phone Number</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Phone Number"
                                        {...register('phoneNumber')}
                                        className={`input input-bordered rounded-[10px] bg-white border border-[#5C6272]`}
                                    />
                                </div>
                            </div>
                            <div>
                                <InputField
                                    label={'Opportunity Type'}
                                    placeholder={'Enter Opportunity Type (standard or non-standard'}
                                    type={'text'}
                                    register={register}
                                    name={'opportunityType'}
                                    errors={errors}
                                />
                            </div>
                            <div>
                                <InputField
                                    label={'Type'}
                                    placeholder={'Office,Restaurant'}
                                    type={'text'}
                                    register={register}
                                    name={'type'}
                                    errors={errors}
                                />
                            </div>
                            <div>
                                <div className="form-control relative">
                                    <label className="label absolute bg-white left-[2%] -top-[50%]">
                                        <span className="label-text text-primary font-normal text-base poppins">Scope</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="General Cleaning - Vacuum, dust, mop and clean bathrooms, etc."
                                        {...register('scope')}
                                        className={`input input-bordered rounded-[10px] bg-white border border-[#5C6272]`}
                                    />
                                </div>
                            </div>
                            <div>
                                <InputField
                                    label={'Frequency'}
                                    placeholder={'1 day/week (weekends)'}
                                    type={'text'}
                                    register={register}
                                    name={'frequency'}
                                    errors={errors}
                                />
                            </div>
                            <div>
                                <InputField
                                    label={'Cleaning'}
                                    placeholder={'Outsourced'}
                                    type={'text'}
                                    register={register}
                                    name={'cleaning'}
                                    errors={errors}
                                />
                            </div>
                            <div>
                                <SelectField
                                    label={'Category'}
                                    placeholder={'Pick Category'}
                                    type={['exclusive-leads', 'layUps', 'opportunities']}
                                    register={register}
                                    name={'category'}
                                    errors={errors}
                                />
                            </div>
                            <div className='row-span-4'>
                                <div className="form-control relative">
                                    <label className="label absolute bg-white left-[2%] -top-[8%]">
                                        <span className="label-text text-primary font-normal text-base poppins">Additional Details</span>
                                    </label>
                                    <textarea
                                        type='text'
                                        placeholder={'Please enter any additional necessary details'}
                                        rows={8}
                                        className="textarea textarea-bordered textarea-md w-full rounded-[10px] bg-white border border-[#5C6272] resize-none"
                                        {...register('additionalDetails')}
                                    ></textarea>
                                </div>
                            </div>
                            <div className='col-start-1 row-start-4'>
                                <InputField
                                    label={'Appointment Date'}
                                    placeholder={'28/10/2024'}
                                    type={'date'}
                                    register={register}
                                    name={'date'}
                                    errors={errors}
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Upload Audio File (file name must be your company Name)</span>
                                </label>
                                <input
                                    type="file"
                                    accept="audio/*"  // Accept only audio files
                                    className="file-input file-input-bordered w-full rounded-[10px] bg-white"
                                    {...register('audio', {
                                        required: 'Audio file is required',
                                        validate: {
                                            // Validate if the file is of audio type
                                            audioType: (files) => {
                                                const allowedTypes = ['audio/mp3', 'audio/wav', 'audio/mpeg'];
                                                return files[0] && allowedTypes.includes(files[0].type) || 'Invalid file type. Only MP3 and WAV files are allowed.';
                                            }
                                        }
                                    })}
                                />
                                {errors.audio && <p className="text-red-500 text-sm">{errors.audio.message}</p>}
                            </div>
                            <div className='2xl:block xl:block hidden'></div>
                            <div className='2xl:block xl:block hidden'></div>
                            <FormButton label={'Submit'} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LeadForm;