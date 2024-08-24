'use client';
import { usStates } from "@/js/states";
import FormButton from "@/Shared/FormButton";
import InputField from "@/Shared/InputField";
import PageTitle from "@/Shared/PageTitle";
import SelectField from "@/Shared/SelectField";
import { useForm } from "react-hook-form";

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

    return (
        <div className="pb-20 pt-40 px-10">
            <PageTitle
                heading={'Decision Maker Search'}
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
            </div>
        </div>
    );
};

export default Page;
