'use client'
import useAxiosSecure from '@/Hooks/useAxiosSecure';
import GetAllUsers from '@/lib/GetAllUser';
import SectionTitles from '@/ui/SectionTitles';
import TableHead from '@/ui/TableHead';
import React from 'react';
import Swal from 'sweetalert2';

const Page = () => {
    const { allUsers, refetch } = GetAllUsers();
    const axiosSecure = useAxiosSecure();
    const makeAdmin = async (id, action, email) => {
        console.log(id, action);
        // Show loading spinner
        Swal.fire({
            title: 'Processing...',
            text: 'Please wait while we update the admin status.',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });

        try {
            const response = await axiosSecure.patch(`/makeAdmin/${id}`, { isAdmin: action });
            // Close the loading spinner
            Swal.close();

            // Show success message
            Swal.fire({
                title: 'Success!',
                text: `User has been ${action ? 'made' : 'removed from'} admin successfully.`,
                icon: 'success',
                confirmButtonText: 'OK'
            });
            refetch()
        } catch (error) {
            console.log(error);

            // Close the loading spinner
            Swal.close();

            // Show error message
            Swal.fire({
                title: 'Error!',
                text: 'There was an issue updating the admin status. Please try again.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    };

    const makeSeller = async (id, action) => {
        Swal.fire({
            title: 'Processing...',
            text: 'Please wait while we update the admin status.',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });

        try {
            const response = await axiosSecure.patch(`/makeSeller/${id}`, { isSeller: action });

            // Close the loading spinner
            Swal.close();

            // Show success message
            Swal.fire({
                title: 'Success!',
                text: `User has been ${action ? 'made' : 'removed from'} admin successfully.`,
                icon: 'success',
                confirmButtonText: 'OK'
            });
            refetch()
        } catch (error) {
            // Close the loading spinner
            Swal.close();

            // Show error message
            Swal.fire({
                title: 'Error!',
                text: 'There was an issue updating the admin status. Please try again.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    }

    return (
        <div className='2xl:px-[70px] xl:px-16 px-8 2xl:my-36 xl:my-28 my-16'>
            <SectionTitles heading={'See all the users'} subHeading={'Manage all users'} />
            <div className='my-10'>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <TableHead tableHead={['Company Name', 'Email', 'Service State', 'Service City 1', 'Service City 2', 'Service City 3', 'Service City 4', 'Company Websites', 'Years in Business', 'Number of employees', 'Main Contact', 'Phone Number', 'Social Media 1', 'Social Media 2', 'Social Media 3', 'Social Media 4', 'Seller Status', 'Admin Status', 'Make Seller', 'Make admin']} />
                        <tbody>
                            {/* row 1 */}
                            {
                                allUsers?.map((user, i) => {
                                    return (
                                        <tr key={user?._id}>
                                            <th>{user?.companyName}</th>
                                            <td>
                                                <a href={`mailTo:${user?.email}`}>{user?.email}</a>
                                            </td>
                                            <td>{user?.serviceState}</td>
                                            <td>{user?.serviceCity1}</td>
                                            <td>{user?.serviceCity2}</td>
                                            <td>{user?.serviceCity3}</td>
                                            <td>{user?.serviceCity4}</td>
                                            <td>
                                                <a href={user?.companyWebsite} className='text-blue-500 underline'>
                                                    Company Website
                                                </a>
                                            </td>
                                            <td>{user?.yearsInBusiness}</td>
                                            <td>{user?.numberOfEmployees}</td>
                                            <td>{user?.mainContact}</td>
                                            <td>{user?.phoneNumber}</td>
                                            <td>
                                                {
                                                    user?.socialMedia1 ?
                                                        <a href={user?.socialMedia1} className='text-blue-500 underline'>Social Media 1</a>
                                                        :
                                                        <p>Not given</p>
                                                }
                                            </td>
                                            <td>
                                                {
                                                    user?.socialMedia2 ?
                                                        <a href={user?.socialMedia2} className='text-blue-500 underline'>Social Media 1</a>
                                                        :
                                                        <p>Not given</p>
                                                }
                                            </td>
                                            <td>
                                                {
                                                    user?.socialMedia3 ?
                                                        <a href={user?.socialMedia3} className='text-blue-500 underline'>Social Media 1</a>
                                                        :
                                                        <p>Not given</p>
                                                }
                                            </td>
                                            <td>
                                                {
                                                    user?.socialMedia4 ?
                                                        <a href={user?.socialMedia4} className='text-blue-500 underline'>Social Media 1</a>
                                                        :
                                                        <p>Not given</p>
                                                }
                                            </td>
                                            <td>{user?.isSeller ? 'true' : 'false'}</td>
                                            <td>{user?.isAdmin ? 'true' : 'false'}</td>
                                            <td>
                                                {
                                                    !user?.isSeller ?
                                                        <button onClick={() => makeSeller(user?._id, true)} className="rounded-[10px] btn btn-outline text-green-500 hover:text-white hover:bg-green-500 hover:border-none">
                                                            Make Seller
                                                        </button>
                                                        :
                                                        <button onClick={() => makeSeller(user?._id, false)} className="rounded-[10px] btn btn-outline text-red-500 hover:text-white hover:bg-red-500 hover:border-none">
                                                            Remove Seller
                                                        </button>
                                                }
                                            </td>
                                            <td>
                                                {
                                                    !user?.isAdmin ?
                                                        <button onClick={() => makeAdmin(user?._id, true, user?.email)} className="rounded-[10px] btn btn-outline text-green-500 hover:text-white hover:bg-green-500 hover:border-none">
                                                            Make Admin
                                                        </button>
                                                        :
                                                        <button onClick={() => makeAdmin(user?._id, false)} className="rounded-[10px] btn btn-outline text-red-500 hover:text-white hover:bg-red-500 hover:border-none">
                                                            Remove Admin
                                                        </button>
                                                }
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                {/*  */}
            </div>
        </div>
    );
};

export default Page;