'use client'
import { useForm } from "react-hook-form";
import { usStates } from "@/js/states";
import FormButton from "@/Shared/FormButton";
import InputField from "@/Shared/InputField";
import PageTitle from "@/Shared/PageTitle";
import SelectField from "@/Shared/SelectField";
import CustomFileInput from "@/ui/InputButton";
import { useState, useEffect } from "react";
import GetUserData from "@/lib/getUserData";
import useAxiosSecure from "@/Hooks/useAxiosSecure";
import useAuth from "@/Hooks/useAuth";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

const Page = () => {
    // Fetch user data
    const { isLoading, userInfo, refetch } = GetUserData();
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    console.log(userInfo);

    // Initialize form with default values
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: {
            companyName: userInfo?.companyName || user?.displayName,
            email: userInfo?.email || user?.email,
            companyWebsite: userInfo?.companyWebsite || '',
            serviceState: userInfo?.serviceState || '',
            serviceCity1: userInfo?.serviceCity1 || '',
            serviceCity2: userInfo?.serviceCity2 || '',
            serviceCity3: userInfo?.serviceCity3 || '',
            serviceCity4: userInfo?.serviceCity4 || '',
            yearsInBusiness: userInfo?.yearsInBusiness || '',
            numberOfEmployees: userInfo?.numberOfEmployees || '',
            mainContact: userInfo?.mainContact || '',
            phoneNumber: userInfo?.phoneNumber || '',
            socialMedia1: userInfo?.socialMedia1 || '',
            socialMedia2: userInfo?.socialMedia2 || '',
            socialMedia3: userInfo?.socialMedia3 || '',
            socialMedia4: userInfo?.socialMedia4 || '',
            companyDetails: userInfo?.companyDetails || '',
            companyLogo: userInfo?.companyLogo || '',
        }
    });

    // States for dynamic fields
    const [socialCount, setSocialCount] = useState(0);
    const [serviceCityCount, setServiceCityCount] = useState(0);

    // Update form default values if userInfo changes
    useEffect(() => {
        reset({
            companyName: userInfo?.companyName || user?.displayName,
            email: userInfo?.email || user?.email,
            companyWebsite: userInfo?.companyWebsite || '',
            serviceState: userInfo?.serviceState || '',
            serviceCity1: userInfo?.serviceCity1 || '',
            serviceCity2: userInfo?.serviceCity2 || '',
            serviceCity3: userInfo?.serviceCity3 || '',
            serviceCity4: userInfo?.serviceCity4 || '',
            yearsInBusiness: userInfo?.yearsInBusiness || '',
            numberOfEmployees: userInfo?.numberOfEmployees || '',
            mainContact: userInfo?.mainContact || '',
            phoneNumber: userInfo?.phoneNumber || '',
            socialMedia1: userInfo?.socialMedia1 || '',
            socialMedia2: userInfo?.socialMedia2 || '',
            socialMedia3: userInfo?.socialMedia3 || '',
            socialMedia4: userInfo?.socialMedia4 || '',
            companyDetails: userInfo?.companyDetails || '',
            companyLogo: userInfo?.companyLogo || '',
        });
        // Cities
        const initialCities = [userInfo?.serviceCity1, userInfo?.serviceCity2, userInfo?.serviceCity3, userInfo?.serviceCity4]?.filter(city => city);
        setServiceCityCount(initialCities?.length);
        // Medias
        const initialMedias = [userInfo?.socialMedia1, userInfo?.socialMedia2, userInfo?.socialMedia3, userInfo?.socialMedia4]?.filter(media => media);
        setSocialCount(initialMedias?.length);
    }, [userInfo, user, reset]);

    console.log(serviceCityCount);


    const handleAddField = (type) => {
        if (type === 'social') {
            if (socialCount < 4) {
                setSocialCount(prevCount => prevCount + 1);
            }
        } else if (type === 'city') {
            if (serviceCityCount < 4) {
                setServiceCityCount(prevCount => prevCount + 1);
            }
        }
    };

    const onSubmit = async (data) => {
        console.log(data);

        try {
            // Show loading alert
            Swal.fire({
                title: 'Updating user...',
                text: 'Please wait while we update your information.',
                icon: 'info',
                allowOutsideClick: false,
                showConfirmButton: false,
                willOpen: () => {
                    Swal.showLoading(); // Display loading spinner
                },
            });
            console.log(data);

            // Make the patch request with axiosSecure
            const response = await axiosSecure.patch(`/user/${userInfo?._id}`, data)
            // On success, show success alert
            Swal.fire({
                title: 'Success!',
                text: 'Your information has been successfully updated.',
                icon: 'success',
                timer: 3000, // Auto close after 3 seconds
                showConfirmButton: false,
            });
            refetch();
        } catch (error) {
            // On error, show error alert
            Swal.fire({
                title: 'Error!',
                text: 'Something went wrong while updating your information.',
                icon: 'error',
                confirmButtonText: 'Try Again',
            });
            console.error('Error updating user info:', error);
        }
    };


    return (
        <div className="py-40 2xl:pt-60 px-10">
            <PageTitle
                heading={'Profile'}
                subHeading={`Hi! ${userInfo?.companyName || user?.displayName || " "}, Here you can manage your profile`}
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
                            disabled={true}
                        />

                        <InputField
                            label={'Company Website'}
                            placeholder="Enter your company website"
                            type={'text'}
                            register={register}
                            name={'companyWebsite'}
                            errors={errors}
                        />

                        {/* <div className="form-control relative">
                            <label className="label absolute bg-white left-[2%] -top-[50%]">
                                <span className="label-text text-primary font-normal text-base poppins">Company Logo</span>
                            </label>
                            <CustomFileInput
                                label={'Select a logo to upload'}
                                bg={'bg-white'}
                                width={'w-full'}
                                name={'companyLogo'}
                                {...register('companyLogo')}
                            />
                        </div> */}

                        <SelectField
                            label={'Service State'}
                            type={usStates}
                            placeholder={'Pick your service state'}
                            register={register}
                            name={'serviceState'}
                            errors={errors}
                        />

                        <InputField
                            type={'text'}
                            placeholder={`Enter your service city 1`}
                            label={`Enter Your Service City 1`}
                            register={register}
                            name={`serviceCity1`}
                            errors={errors}
                        />

                        {
                            (userInfo?.serviceCity2 || serviceCityCount > 1) &&
                            <InputField
                                type={'text'}
                                placeholder={`Enter your service city 2`}
                                label={`Enter Your Service City 2`}
                                register={register}
                                name={`serviceCity2`}
                                errors={errors}
                            />
                        }
                        {
                            (userInfo?.serviceCity3 || serviceCityCount > 2) &&
                            <InputField
                                type={'text'}
                                placeholder={`Enter your service city 3`}
                                label={`Enter Your Service City 3`}
                                register={register}
                                name={`serviceCity3`}
                                errors={errors}
                            />
                        }
                        {
                            (userInfo?.serviceCity4 || serviceCityCount > 3) &&
                            <InputField
                                type={'text'}
                                placeholder={`Enter your service city 4`}
                                label={`Enter Your Service City 4`}
                                register={register}
                                name={`serviceCity4`}
                                errors={errors}
                            />
                        }

                        {
                            serviceCityCount < 4 &&
                            <div className="flex items-center gap-5">
                                <p className="text-primary poppins font-normal text-lg">Add more Service Cities</p>
                                <svg onClick={() => handleAddField('city')} className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                                    <path d="M21.1587 15.5743V25.8634M26.3032 20.7188H16.0141M36.5923 20.7188C36.5923 22.7456 36.1931 24.7525 35.4175 26.625C34.6419 28.4975 33.5051 30.1989 32.0719 31.6321C30.6388 33.0652 28.9374 34.2021 27.0649 34.9777C25.1924 35.7533 23.1854 36.1525 21.1587 36.1525C19.1319 36.1525 17.125 35.7533 15.2525 34.9777C13.38 34.2021 11.6786 33.0652 10.2454 31.6321C8.81227 30.1989 7.67544 28.4975 6.89982 26.625C6.12421 24.7525 5.72501 22.7456 5.72501 20.7188C5.72501 16.6256 7.35105 12.6999 10.2454 9.80557C13.1398 6.9112 17.0654 5.28516 21.1587 5.28516C25.2519 5.28516 29.1775 6.9112 32.0719 9.80557C34.9663 12.6999 36.5923 16.6256 36.5923 20.7188Z" stroke="#878787" strokeWidth="2.57228" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        }

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

                        {
                            (userInfo?.socialMedia1 || socialCount > 0) &&
                            <InputField
                                type={'text'}
                                placeholder={`Enter your social media link 1`}
                                label={`Social Media 1`}
                                register={register}
                                name={`socialMedia1`}
                                errors={errors}
                            />
                        }
                        {
                            (userInfo?.socialMedia2 || socialCount > 1) &&
                            <InputField
                                type={'text'}
                                placeholder={`Enter your social media link 2`}
                                label={`Social Media 2`}
                                register={register}
                                name={`socialMedia2`}
                                errors={errors}
                            />
                        }
                        {
                            (userInfo?.socialMedia3 || socialCount > 2) &&
                            <InputField
                                type={'text'}
                                placeholder={`Enter your social media link 3`}
                                label={`Social Media 3`}
                                register={register}
                                name={`socialMedia3`}
                                errors={errors}
                            />
                        }
                        {
                            (userInfo?.socialMedia4 || socialCount > 3) &&
                            <InputField
                                type={'text'}
                                placeholder={`Enter your social media link 4`}
                                label={`Social Media 4`}
                                register={register}
                                name={`socialMedia4`}
                                errors={errors}
                            />
                        }

                        {
                            socialCount < 4 &&
                            <div className="flex items-center gap-5">
                                <p className="text-primary poppins font-normal text-lg">Add more Social Media</p>
                                <svg onClick={() => handleAddField('social')} className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                                    <path d="M21.1587 15.5743V25.8634M26.3032 20.7188H16.0141M36.5923 20.7188C36.5923 22.7456 36.1931 24.7525 35.4175 26.625C34.6419 28.4975 33.5051 30.1989 32.0719 31.6321C30.6388 33.0652 28.9374 34.2021 27.0649 34.9777C25.1924 35.7533 23.1854 36.1525 21.1587 36.1525C19.1319 36.1525 17.125 35.7533 15.2525 34.9777C13.38 34.2021 11.6786 33.0652 10.2454 31.6321C8.81227 30.1989 7.67544 28.4975 6.89982 26.625C6.12421 24.7525 5.72501 22.7456 5.72501 20.7188C5.72501 16.6256 7.35105 12.6999 10.2454 9.80557C13.1398 6.9112 17.0654 5.28516 21.1587 5.28516C25.2519 5.28516 29.1775 6.9112 32.0719 9.80557C34.9663 12.6999 36.5923 16.6256 36.5923 20.7188Z" stroke="#878787" strokeWidth="2.57228" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        }


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
