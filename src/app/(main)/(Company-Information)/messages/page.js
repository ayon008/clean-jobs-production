'use client'
import Image from 'next/image';
import image from '@/../public/assets/55024593_9264820 1.png';
import { FaArrowRight } from 'react-icons/fa';
import { useState } from 'react';
import { collection, query, where, getDocs, setDoc, updateDoc, serverTimestamp, getDoc } from "firebase/firestore";
import { db } from '@/js/firebase.init';
import useAuth from '@/Hooks/useAuth';
const Page = () => {

    const [userName, setUserName] = useState('')
    const [findUser, setUser] = useState(null);
    const [error, setError] = useState(false);

    const { user } = useAuth();


    const handleSearch = async () => {
        const q = query(collection(db, "users"), where("displayName", "==", userName));
        try {
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                setUser(doc.data());
            });
        }
        catch (error) {
            setError(true)
        }
    }

    const handleKey = e => {
        e.code === 'Enter' &&
            handleSearch();
    }

    const handleClick = async () => {
        const combinedID = user?.uid > findUser?.uid ? user?.uid + findUser?.uid : findUser?.uid + user?.uid;
        try {
            const res = await getDoc(doc(db, 'chats', combinedID))
            if (!res.exists()) {
                await setDoc(doc(db, "chats", combinedID), {
                    messages: []
                })
                await updateDoc(doc(db, 'userChats', findUser?.uid), {
                    [combinedID + '.userInfo']: {
                        uid: findUser.uid,
                        displayName: findUser.uid,
                        photoURL: findUser.photoURL
                    },
                    [combinedID + '.date']: serverTimestamp()
                })
                await updateDoc(doc(db, 'userChats', user?.uid), {
                    [combinedID + '.userInfo']: {
                        uid: user.uid,
                        displayName: user.uid,
                        photoURL: user.photoURL
                    },
                    [combinedID + '.date']: serverTimestamp()
                })
            }
        }
        catch (error) {

        }

    }

    // border-4 border-[#246532]
    return (
        <div className="pt-[80px]">
            <div className='grid message h-[600px]'>
                <div className='px-10 py-20 flex flex-col border-t-2 border-r-2 border-[#246532]'>
                    <h3 className='poppins text-3xl font-semibold'>Message <span className='text-primary'>(65)</span></h3>
                    <label className="input input-bordered flex items-center gap-2 bg-[#F8F8F8] mt-6 rounded-lg">
                        <input onKeyDown={(e) => handleKey(e)} onChange={(e) => setUserName(e.target.value)} type="text" className="grow bg-[#F8F8F8]" placeholder="Search" />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd" />
                        </svg>
                    </label>


                    {
                        findUser &&
                        <div className='mt-10'>
                            <div>
                                <div className='flex justify-between pb-4 border-b-[1px] border-b-gray-500'>
                                    <div>
                                        <h3 className="poppins text-xl font-semibold">{findUser.displayName}</h3>
                                        <p className='mt-2 text-gray-400 poppins text-[10px]'>Change the background</p>
                                    </div>
                                    <div>
                                        <p className='text-gray-400 poppins text-[10px]'>05:47 pm</p>
                                        <div className='w-[25px] bg-primary text-white rounded-[50%] h-[25px] mt-[10px] ml-auto relative'>
                                            <span className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>2</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                    {
                        error &&
                        <div className='mt-10 text-center text-red-500'>
                            User not found
                        </div>
                    }

                    {/* <Image src={image} alt="" className='my-auto' /> */}
                    <div className='mt-10' onClick={() => handleClick}>
                        <div>
                            <div className='flex justify-between pb-4 border-b-[1px] border-b-gray-500'>
                                <div>
                                    <h3 className="poppins text-xl font-semibold">Sepide Orchide</h3>
                                    <p className='mt-2 text-gray-400 poppins text-[10px]'>Change the background</p>
                                </div>
                                <div>
                                    <p className='text-gray-400 poppins text-[10px]'>05:47 pm</p>
                                    <div className='w-[25px] bg-primary text-white rounded-[50%] h-[25px] mt-[10px] ml-auto relative'>
                                        <span className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>2</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full h-full border-t-2 border-[#246532]'>
                    <div className='p-10 w-full h-full'>
                        <div className='flex flex-col h-full'>
                            <Image src={image} alt="" className='m-auto' />
                            <label className="input input-bordered flex items-center gap-2 bg-[#F8F8F8] mt-auto rounded-[90px] border-2 border-[#A4DB74]">
                                <input type="text" className="grow bg-[#F8F8F8]" placeholder="Enter something" />
                                <div className='bg-[#A4DB74] p-2 rounded-full'>
                                    <FaArrowRight className=' text-white' />
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Page;