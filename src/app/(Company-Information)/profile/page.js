'use client'
import { useForm } from "react-hook-form";
import { usStates } from "@/js/states";
import GetUserData from "@/lib/getUserData";
import FormButton from "@/Shared/FormButton";
import InputField from "@/Shared/InputField";
import PageTitle from "@/Shared/PageTitle";
import SelectField from "@/Shared/SelectField";
import CustomFileInput from "@/ui/InputButton";
import { useState, useEffect } from "react";

const Page = () => {
    // Fetch user data
    const { userInfo } = GetUserData();
    console.log(userInfo);

    // Initialize form with default values
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: {
            companyName: userInfo?.companyName || '',
            email: userInfo?.email || '',
            companyWebsite: userInfo?.companyWebsite || '',
            serviceState: userInfo?.serviceState || '',
            serviceCity: userInfo?.serviceCity || [''],
            yearsInBusiness: userInfo?.yearsInBusiness || '',
            numberOfEmployees: userInfo?.numberOfEmployees || '',
            mainContact: userInfo?.mainContact || '',
            phoneNumber: userInfo?.phoneNumber || '',
            socialMedia: userInfo?.socialMedia || [''],
            companyDetails: userInfo?.companyDetails || ''
        }
    });

    // States for dynamic fields
    const [socialCount, setSocialCount] = useState(userInfo?.socialMedia?.length || 1);
    const [serviceCityCount, setServiceCityCount] = useState(userInfo?.serviceCityCount || 1);

    // Update form default values if userInfo changes
    useEffect(() => {
        reset({
            companyName: userInfo?.companyName || '',
            email: userInfo?.email || '',
            companyWebsite: userInfo?.companyWebsite || '',
            serviceState: userInfo?.serviceState || '',
            serviceCity: userInfo?.serviceCity || '',
            yearsInBusiness: userInfo?.yearsInBusiness || '',
            numberOfEmployees: userInfo?.numberOfEmployees || '',
            mainContact: userInfo?.mainContact || '',
            phoneNumber: userInfo?.phoneNumber || '',
            socialMedia: userInfo?.socialMedia || [''],
            companyDetails: userInfo?.companyDetails || ''
        });
    }, [userInfo, reset]);

    const handleAddField = (type) => {
        if (type === 'social') {
            setSocialCount(prevCount => prevCount + 1);
        } else if (type === 'city') {
            setServiceCityCount(prevCount => prevCount + 1);
        }
    };

    const onSubmit = data => {
        console.log(data); // Handle the form submission
        // Add file handling logic if necessary
    };

    return (
        <div className="py-40 2xl:pt-60 px-10">
            <PageTitle
                heading={'Profile'}
                subHeading={`Hi! ${userInfo?.companyName}, Here you can manage your profile`}
            />

            <form className="mt-20" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex items-start gap-20">
                    <div className="w-1/2 flex flex-col gap-y-10">
                        <InputField
                            label={'Company Name'}
                            placeholder={'Enter your company name'}
                            type={'text'}
                            register={register}
                            name={'companyName'}
                            errors={errors}
                        />

                        <InputField
                            label={'Company Mail'}
                            placeholder={'Enter your business email address'}
                            type={'email'}
                            register={register}
                            name={'email'}
                            errors={errors}
                        />

                        <InputField
                            label={'Company Website'}
                            placeholder="Enter your company website"
                            type={'text'}
                            register={register}
                            name={'companyWebsite'}
                            errors={errors}
                        />

                        <div className="form-control relative">
                            <label className="label absolute bg-white left-[2%] -top-[50%]">
                                <span className="label-text text-primary font-normal text-base poppins">Company Logo</span>
                            </label>
                            <CustomFileInput
                                label={'Select a logo to upload'}
                                bg={'bg-white'}
                                width={'w-full'}
                                name={'Company Logo'}
                                {...register('Company Logo')}
                            />
                        </div>

                        <SelectField
                            label={'Service State'}
                            type={usStates}
                            placeholder={'Pick your service state'}
                            register={register}
                            name={'serviceState'}
                            errors={errors}
                        />

                        <InputField
                            label={'Enter Your Service City'}
                            type={'text'}
                            placeholder={'New York City'}
                            register={register}
                            name={'serviceCity'}
                            errors={errors}
                        />

                        {Array.from({ length: serviceCityCount }, (_, i) => (
                            <InputField
                                key={i}
                                type={'text'}
                                placeholder={`Enter your service city ${i + 1}`}
                                label={`Service City ${i + 1}`}
                                register={register}
                                name={`serviceCity${i + 1}`}
                                errors={errors}
                            />
                        ))}

                        <div className="flex items-center gap-5">
                            <p className="text-primary poppins font-normal text-lg">Add more Service Cities</p>
                            <svg onClick={() => handleAddField('city')} className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                                <path d="M21.1587 15.5743V25.8634M26.3032 20.7188H16.0141M36.5923 20.7188C36.5923 22.7456 36.1931 24.7525 35.4175 26.625C34.6419 28.4975 33.5051 30.1989 32.0719 31.6321C30.6388 33.0652 28.9374 34.2021 27.0649 34.9777C25.1924 35.7533 23.1854 36.1525 21.1587 36.1525C19.1319 36.1525 17.125 35.7533 15.2525 34.9777C13.38 34.2021 11.6786 33.0652 10.2454 31.6321C8.81227 30.1989 7.67544 28.4975 6.89982 26.625C6.12421 24.7525 5.72501 22.7456 5.72501 20.7188C5.72501 16.6256 7.35105 12.6999 10.2454 9.80557C13.1398 6.9112 17.0654 5.28516 21.1587 5.28516C25.2519 5.28516 29.1775 6.9112 32.0719 9.80557C34.9663 12.6999 36.5923 16.6256 36.5923 20.7188Z" stroke="#878787" strokeWidth="2.57228" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>

                        <InputField
                            label={'Years in Business'}
                            type={'number'}
                            placeholder={'Enter your experience in years'}
                            register={register}
                            name={'yearsInBusiness'}
                            errors={errors}
                        />

                        <InputField
                            label={'Number of Employees'}
                            type={'number'}
                            placeholder={'Enter employee amount'}
                            register={register}
                            name={'numberOfEmployees'}
                            errors={errors}
                        />
                    </div>

                    <div className="w-1/2 flex flex-col gap-y-10">
                        <InputField
                            label={'Main Contact'}
                            type={'text'}
                            placeholder={'Enter your contact'}
                            register={register}
                            name={'mainContact'}
                            errors={errors}
                        />

                        <InputField
                            label={'Phone Number'}
                            type={'text'}
                            placeholder={'Enter your phone number'}
                            register={register}
                            name={'phoneNumber'}
                            errors={errors}
                        />

                        {Array.from({ length: socialCount }, (_, i) => (
                            <InputField
                                key={i}
                                type={'text'}
                                placeholder={`Enter your social media link ${i + 1}`}
                                label={`Social Media ${i + 1}`}
                                register={register}
                                name={`socialMedia${i + 1}`}
                                errors={errors}
                            />
                        ))}

                        <div className="flex items-center gap-5">
                            <p className="text-primary poppins font-normal text-lg">Add more Social Media</p>
                            <svg onClick={() => handleAddField('social')} className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                                <path d="M21.1587 15.5743V25.8634M26.3032 20.7188H16.0141M36.5923 20.7188C36.5923 22.7456 36.1931 24.7525 35.4175 26.625C34.6419 28.4975 33.5051 30.1989 32.0719 31.6321C30.6388 33.0652 28.9374 34.2021 27.0649 34.9777C25.1924 35.7533 23.1854 36.1525 21.1587 36.1525C19.1319 36.1525 17.125 35.7533 15.2525 34.9777C13.38 34.2021 11.6786 33.0652 10.2454 31.6321C8.81227 30.1989 7.67544 28.4975 6.89982 26.625C6.12421 24.7525 5.72501 22.7456 5.72501 20.7188C5.72501 16.6256 7.35105 12.6999 10.2454 9.80557C13.1398 6.9112 17.0654 5.28516 21.1587 5.28516C25.2519 5.28516 29.1775 6.9112 32.0719 9.80557C34.9663 12.6999 36.5923 16.6256 36.5923 20.7188Z" stroke="#878787" strokeWidth="2.57228" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>

                        <div className="form-control relative">
                            <label className="label absolute bg-white left-[2%] -top-[8%]">
                                <span className="label-text text-primary font-normal text-base poppins">Company Details</span>
                            </label>
                            <textarea
                                placeholder="companyDetails"
                                rows={8}
                                className="textarea textarea-bordered textarea-md w-full rounded-[10px] bg-white border border-[#5C6272] resize-none"
                                {...register("companyDetails")}
                            ></textarea>
                        </div>
                    </div>
                </div>

                <div className="mt-10 w-fit mx-auto">
                    <FormButton label={'Update my profile'} />
                </div>
            </form>
        </div>
    );
};

export default Page;
