'use client'
import useAuth from '@/Hooks/useAuth';
import { usStates } from '@/js/states';
import FormButton from '@/Shared/FormButton';
import InputField from '@/Shared/InputField';
import PageTitle from '@/Shared/PageTitle';
import SelectField from '@/Shared/SelectField';
import React from 'react';
import { useForm } from 'react-hook-form';

const LeadForm = () => {
    const { user } = useAuth();
    const firstLetter = user?.displayName[0];
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        // Handle form submission logic here
    };
    return (
        <div className='2xl:pt-36 xl:py-28 py-16'>
            <div className=''>
                <div className="2xl:w-[60px] 2xl:h-[60px] xl:w-[50px] xl:h-[50px] relative w-[20px] h-[20px] rounded-full bg-primary  mx-auto text-white">
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
                        <div className='grid grid-cols-2 gap-10'>
                            <InputField
                                label={'Business Name'}
                                placeholder={'Enter decision maker business name'}
                                type={'text'}
                                register={register}
                                name={'businessName'}
                                errors={errors}
                            />
                            <InputField
                                label={'Appointment Time'}
                                placeholder={'8.45 Pm'}
                                type={'time'}
                                register={register}
                                name={'time'}
                                errors={errors}
                            />
                            <SelectField
                                label={'Address/Location'}
                                placeholder={'Enter your state'}
                                type={usStates}
                                register={register}
                                name={'states'}
                                errors={errors}
                            />
                            <InputField
                                label={'City'}
                                placeholder={'New York City'}
                                type={'text'}
                                register={register}
                                name={'city'}
                                errors={errors}
                            />
                            <InputField
                                label={'Total cleanable area (sq/ft)'}
                                placeholder={'Enter cleanable area in sq/ft'}
                                type={'number'}
                                register={register}
                                name={'area'}
                                errors={errors}
                            />
                            <InputField
                                placeholder={'Enter first name of decision maker'}
                                label={'First Name'}
                                type={'text'}
                                register={register}
                                name={'firstName'}
                                errors={errors}
                            />
                            <InputField
                                label={'Last Name'}
                                placeholder={'Enter your last name'}
                                type={'text'}
                                register={register}
                                name={'lastName'}
                                errors={errors}
                            />
                            <InputField
                                label={'Cleaning frequency'}
                                placeholder={'Enter cleaning frequency'}
                                type={'text'}
                                register={register}
                                name={'frequency'}
                                errors={errors}
                            />
                            <InputField
                                label={'Additional Details'}
                                placeholder={'Please enter any additional necessary details'}
                                type={'text'}
                                register={register}
                                name={'additionalDetails'}
                                errors={errors}
                            />
                            <InputField
                                label={'Appointment Date'}
                                placeholder={'28/10/2024'}
                                type={'date'}
                                register={register}
                                name={'date'}
                                errors={errors}
                            />

                            <FormButton label={'Submit'} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LeadForm;