'use client'
import Image from 'next/image';
import profileImage from '../../../../../public/assets/Frame 1261153333.png'
import FaMessage from '@/icons/FaMessage';
import { FaBell, FaList, } from 'react-icons/fa';
import FaLeads from '@/icons/FaLeads';
import FaContract from '@/icons/FaContract';
import FaShoppingCart from '@/icons/FaShoppingCart';
import FaHand from '@/icons/FaHand';
import woman from '../../../../../public/assets/vecteezy_business-woman-holding-tablet-pc_47656782 2.svg'
import useAuth from '@/Hooks/useAuth';
import FaProfile from '@/icons/FaProfile';
import FaExit from '@/icons/FaExit';
import { MdOutlineNotifications } from 'react-icons/md';

const Page = () => {

    const { user } = useAuth();
    const name = user?.displayName;
    const firstLetter = user?.displayName[0];

    return (
        <div className='dashboard 2xl:gap-14 xl:gap-10 gap-5 2xl:px-[70px] xl:px-16 px-8 2xl:my-36 xl:my-28 my-16'>
            <div>
                <div className='2xl:mt-14 xl:mt-14 mt-10 relative w-fit h-fit rounded-xl'>
                    <Image src={profileImage} alt='' />
                    <Image src={woman} alt='' className='absolute bottom-0 left-[134px]' />
                    <div className='absolute top-1/2 right-40 transform -translate-y-1/2'>
                        <h3 className='2xl:text-4xl xl:text-4xl font-bold text-2xl'>{name}</h3>
                        <p className='text-base font-normal poppins text-center'>Welcome to your dashboard.</p>
                    </div>
                </div>
                <div className='2xl:my-32 xl:my-24 my-10'>
                    <div className='max-w-[794px] grid grid-cols-2 gap-x-6 gap-y-6'>
                        <div className='bg-[#C7F2AB] px-6 py-5 rounded-[20px] flex items-start gap-3'>
                            <div className='mt-[4px]'>
                                <FaMessage />
                            </div>
                            <div>
                                <h3 className='font-bold text-xs'>User Message !</h3>
                                <p className='poppins text-xs'>Check your messages</p>
                            </div>
                        </div>
                        <div className='bg-[#C7F2AB] px-6 py-5 rounded-[20px] flex items-start gap-3'>
                            <div className='mt-[4px]'>
                                <FaList />
                            </div>
                            <div>
                                <h3 className='font-bold text-xs'>My Lead List</h3>
                                <p className='poppins text-xs'>See all the lead you saved</p>
                            </div>
                        </div>
                        <div className='bg-[#C7F2AB] px-6 py-5 rounded-[20px] flex items-start gap-3'>
                            <div className='mt-[4px]'>
                                <FaLeads />
                            </div>
                            <div>
                                <h3 className='font-bold text-xs'>Find Exclusive Lead in Your Area</h3>
                                <p className='poppins text-xs'>See all the leads around you & grab opportunities</p>
                            </div>
                        </div>
                        <div className='bg-[#C7F2AB] px-6 py-5 rounded-[20px] flex items-start gap-3'>
                            <div className='mt-[4px]'>
                                <FaContract />
                            </div>
                            <div>
                                <h3 className='font-bold text-xs'>Post for Sub-Contractor</h3>
                                <p className='poppins text-xs'>Submit if you have a lead list</p>
                            </div>
                        </div>
                        <div className='bg-[#C7F2AB] px-6 py-5 rounded-[20px] flex items-start gap-3'>
                            <div className='mt-[4px]'>
                                <FaShoppingCart />
                            </div>
                            <div>
                                <h3 className='font-bold text-xs'>Purchase Leads</h3>
                                <p className='poppins text-xs'>See the lead list you own</p>
                            </div>
                        </div>
                        <div className='bg-[#C7F2AB] px-6 py-5 rounded-[20px] flex items-start gap-3'>
                            <div className='mt-[1px]'>
                                <FaHand />
                            </div>
                            <div>
                                <h3 className='font-bold text-xs'>Explore Our Other Services</h3>
                                <p className='poppins text-xs'>We offer all kind of IT solutions, check us out</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='2xl:mt-[50px] xl:mt-[50px] box-shadow rounded-3xl border border-[#246532]'>
                <div className='2xl:pt-[50px] xl:pt-[50px]'>
                    <div className="2xl:w-[60px] 2xl:h-[60px] xl:w-[50px] xl:h-[50px] relative w-[20px] h-[20px] rounded-full bg-primary  mx-auto text-white">
                        <span className="absolute top-1/2 right-1/2 transform -translate-y-1/2 translate-x-1/2 md:text-base text-xs font-normal">{firstLetter}</span>
                    </div>
                </div>
                <div className='2xl:mt-6 xl:mt-6 mt-3'>
                    <h3 className='text-[#344054] text-center 2xl:text-3xl xl:text-3xl text-xl font-medium'>{user?.displayName}</h3>
                    <p className='text-[#667085] text-center font-normal'>{user?.email}</p>
                    <div className='2xl:px-14 xl:px-12 my-7'>
                        <div className='bg-[#C7F2AB] px-6 py-5 rounded-xl flex items-start gap-3'>
                            <div>
                                <h3 className='font-bold text-xs'>Premium Membership</h3>
                                <p className='poppins text-xs mt-1'>Upgrade for more features</p>
                            </div>
                        </div>
                    </div>
                    <div className='2xl:px-6 xl:px-6 px-2 space-y-6'>
                        <h2 className='text-lg font-bold text-black'>Account</h2>
                        <div className='flex items-center gap-2'>
                            <FaProfile />
                            <h2 className='text-base'>Profile</h2>
                        </div>
                        <div className='flex items-center gap-2'>
                            <FaExit />
                            <h2 className='text-base'>Logout</h2>
                        </div>
                        <div className='flex items-center gap-2'>
                            <MdOutlineNotifications size={'24px'} />
                            <h2 className='text-base'>Profile</h2>
                        </div>
                    </div>
                    <div className='2xl:px-8 xl:px-6 px-3 space-y-[18px] 2xl:py-12 xl:py-8 py-6'>
                        <div className='bg-[#C7F2AB] px-6 py-5 rounded-[20px] flex items-start gap-3'>
                            <div className='mt-[1px]'>
                                <FaMessage />
                            </div>
                            <div>
                                <h3 className='font-bold text-xs'>New Message !</h3>
                                <p className='poppins text-xs'>You got a new message from our admin panel</p>
                            </div>
                        </div>
                        <div className='bg-[#C7F2AB] px-6 py-5 rounded-[20px] flex items-start gap-3'>
                            <div className='mt-[1px]'>
                                <MdOutlineNotifications size={'24px'} />
                            </div>
                            <div>
                                <h3 className='font-bold text-xs'>New Notification !</h3>
                                <p className='poppins text-xs'>We just added some new leads check out now</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;