'use client';
import { usStates } from '@/js/states';
import image from '@/../public/assets/Frame.svg';
import PageTitle from "@/Shared/PageTitle";
import Image from "next/image";
import InputField from '@/Shared/InputField';
import SelectField from '@/Shared/SelectField';
import FormButton from '@/Shared/FormButton';
import { useForm } from 'react-hook-form';
import Loading from '../../loading';

const Page = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

    const onSubmit = async (data) => {
        try {
            // Simulate form submission (replace with actual API call)
            const response = await fetch('/api/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Form submission failed');
            }

            const result = await response.json();
            console.log('Form submitted successfully:', result);

        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    if (isSubmitting) {
        return <Loading />;
    }

    return (
        <div className="pb-20 pt-40 px-10">
            <PageTitle
                heading={'Single Decision Maker Search'}
                subHeading={'Verified emails have been double validated. Unverified emails are catch-all emails that may or may not work.'}
            />

            <div className="mt-20 flex items-center justify-between">
                <form className="w-1/2 space-y-10" onSubmit={handleSubmit(onSubmit)}>
                    <SelectField
                        label={'Search By'}
                        placeholder={'Company Name / First Name'}
                        type={['Company Name', 'First Name', 'Last Name']}
                        register={register}
                        name="searchBy"
                        errors={errors}
                        validation={{ required: 'Please select a search type' }}
                    />

                    <InputField
                        label={'Name'}
                        placeholder={'Enter company/Decision maker name'}
                        type={'text'}
                        register={register}
                        name="name"
                        errors={errors}
                        validation={{ required: 'Name is required' }}
                    />

                    <SelectField
                        label={'State'}
                        placeholder={'Select a state'}
                        type={usStates}
                        register={register}
                        name="state"
                        errors={errors}
                        validation={{ required: 'State is required' }}
                    />

                    <InputField
                        label={'City'}
                        placeholder={'Enter city name'}
                        type={'text'}
                        register={register}
                        name="city"
                        errors={errors}
                        validation={{ required: 'City is required' }}
                    />

                    <FormButton width={'w-3/4'} label={'Search'} disabled={isSubmitting} />
                </form>
                <div className="w-1/2">
                    <Image src={image} alt='decision-maker' className='w-1/2 h-auto mx-auto' />
                    <p className='text-center nunito font-semibold text-4xl mt-6'>Compare Confidently</p>
                </div>
            </div>
        </div>
    );
};

export default Page;
