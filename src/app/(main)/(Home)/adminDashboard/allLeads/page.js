'use client'
import useAxiosSecure from '@/Hooks/useAxiosSecure';
import formatTimestamp from '@/js/convertTime';
import GetAllLeads from '@/lib/GetAllLeads';
import Dot from '@/ui/Dot';
import Info from '@/ui/Info';
import SectionTitles from '@/ui/SectionTitles';
import TableHead from '@/ui/TableHead';
import Link from 'next/link';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import dynamic from 'next/dynamic';
const Modal = dynamic(() => import('@/ui/Modal'), { ssr: false });

const Page = () => {

    const axiosSecure = useAxiosSecure();
    const { allLeads, refetch, isLoading } = GetAllLeads();
    const [isOpen, setIsOpen] = useState(false);
    console.log(allLeads);

    const handleDelete = (id) => {
        // Show confirmation Swal
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                // Show loading Swal
                Swal.fire({
                    title: 'Deleting...',
                    text: 'Please wait while we delete the lead.',
                    icon: 'info',
                    allowOutsideClick: false,
                    didOpen: () => {
                        Swal.showLoading();
                    }
                });

                // Perform the delete request
                axiosSecure.delete(`/lead/${id}`)
                    .then(response => {
                        // Show success Swal
                        Swal.fire({
                            title: 'Deleted!',
                            text: 'The lead has been deleted successfully.',
                            icon: 'success',
                            confirmButtonText: 'OK'
                        });
                        refetch(); // Refetch the data after deletion
                    })
                    .catch(error => {
                        // Show error Swal
                        Swal.fire({
                            title: 'Error!',
                            text: 'There was an error deleting the lead. Please try again.',
                            icon: 'error',
                            confirmButtonText: 'OK'
                        });
                    });
            }
        });
    };


    const handlePrize = (event, id) => {
        event.preventDefault(); // Prevent form submission
        const prize = event.target.prize.value;
        // Show loading Swal
        Swal.fire({
            title: 'Updating Prize...',
            text: 'Please wait while we update the prize.',
            icon: 'info',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });

        axiosSecure.patch(`/prize/${id}`, { prize: prize })
            .then(response => {
                // On success, show success Swal
                Swal.fire({
                    title: 'Success!',
                    text: 'The prize has been updated successfully.',
                    icon: 'success',
                    confirmButtonText: 'OK'
                });
                // Refetch the data
                refetch();
            })
            .catch(error => {
                // On error, show error Swal
                Swal.fire({
                    title: 'Error!',
                    text: 'There was an error updating the prize. Please try again.',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            });
    };



    const handleStatus = (id, action) => {
        // Show loading Swal
        Swal.fire({
            title: 'Processing...',
            text: 'Please wait while we update the status.',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });

        axiosSecure.patch(`/allLeads/${id}`, { verified: action })
            .then((response) => {
                // Show success Swal
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'Status updated successfully!',
                    confirmButtonText: 'OK'
                });
                refetch();
            })
            .catch((error) => {
                // Show error Swal
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Failed to update the status. Please try again.',
                    confirmButtonText: 'OK'
                });
            });
    };

    const handleCategory = (event, id) => {
        const category = event.target.value;
        axiosSecure.patch(`/category/${id}`, { category: category })
        refetch()
    }


    if (isLoading) {
        return <p>Loading...</p>
    }


    return (
        <div className='pt-40 pb-20 px-10'>
            <div>
                <div className="flex items-center gap-4 justify-center">
                    <h4 className="text-xl inter font-medium text-center">
                        Lead verification status
                    </h4>
                    <p className="text-[#6941C6] inter text-sm font-medium pt-[3px] px-[10px] bg-[#F9F5FF] rounded-[18px]">
                        {allLeads?.length}
                    </p>
                </div>
                <p className="text-[#667085] inter font-normal text-xs text-center mt-2">
                    Check the leads you uploaded and know your lead status
                </p>
            </div>
            <div className='my-9'>
                {/* <SearchState /> */}
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <TableHead allLeads={true} tableHead={['Uploader', 'Business Name', 'Decision Maker', 'Appointment Date', 'Appointment Time', 'States', 'City', 'Area', 'Upload Date', 'Audio', 'Status', 'Additional Details', 'Category', 'Sold', 'Change Category', 'Update Status', 'Prize', 'Set Prize', 'Action', 'Edit', 'Details']} />
                    <tbody>
                        {
                            allLeads?.map(lead => {
                                return (
                                    <>
                                        <tr key={lead?._id}>
                                            <td>
                                                <p className='text-xs font-semibold text-black poppins text-center'>{lead?.companyName}</p>
                                            </td>
                                            <td>
                                                <p className='text-xs font-semibold text-black poppins text-center'>{lead?.businessName}</p>
                                            </td>
                                            <td>
                                                <p className='text-xs font-semibold text-black poppins text-center'>{lead?.firstName} {lead?.lastName}</p>
                                            </td>
                                            <td>
                                                <p className='text-xs font-semibold text-black poppins text-center'>{lead?.date}</p>
                                            </td>
                                            <td>
                                                <p className='text-xs font-semibold text-black poppins text-center'>{lead?.time}</p>
                                            </td>
                                            <td>
                                                <p className='text-xs font-semibold text-black poppins text-center'>{lead?.states}</p>
                                            </td>
                                            <td>
                                                <p className='text-xs font-semibold text-black poppins text-center'>{lead?.city}</p>
                                            </td>
                                            <td>
                                                <p className='text-xs font-semibold text-black poppins text-center'>{lead?.area}</p>
                                            </td>
                                            <td>
                                                <p className='text-xs font-semibold text-black poppins text-center'>{formatTimestamp(lead?.uploadDate)}</p>
                                            </td>
                                            <td>
                                                <audio src={lead?.audio} controls />
                                            </td>
                                            <td>
                                                {lead?.verified ?
                                                    <p className='text-xs font-semibold text-green-500 poppins text-center'>Verified</p>
                                                    :
                                                    <p className='text-xs font-semibold text-red-500 poppins text-center'>Not verified</p>
                                                }

                                            </td>
                                            <td>
                                                <p className='text-xs font-semibold text-black poppins text-center'>
                                                    {lead?.additionalDetails?.slice(0, 20)}...
                                                </p>
                                            </td>
                                            <td>
                                                <p className='text-xs font-semibold text-black poppins text-center'>
                                                    {lead?.category}
                                                </p>
                                            </td>
                                            <td>
                                                {
                                                    lead?.sold ?
                                                        <>
                                                            <p className="text-red-600
                             inter text-sm font-medium">Sold</p>
                                                        </>
                                                        :
                                                        <>
                                                            <Dot width={'w-[30px]'} />
                                                            <p className="text-[#027A48]
                             inter text-sm font-medium">Not sold</p>
                                                        </>

                                                }
                                            </td>
                                            <td>
                                                <select onChange={() => handleCategory(event, lead?._id)} defaultValue={lead?.category} className='rounded-[10px] bg-white select select-bordered'>
                                                    <option>exclusive-leads</option>
                                                    <option>layUps</option>
                                                    <option>opportunities</option>
                                                </select>
                                            </td>
                                            <td>
                                                {
                                                    !lead?.verified ?
                                                        <button onClick={() => handleStatus(lead?._id, true)} className='rounded-[10px] btn btn-outline text-green-500'>
                                                            Approve
                                                        </button>
                                                        :
                                                        <button onClick={() => handleStatus(lead?._id, false)} className='rounded-[10px] btn btn-outline text-red-500'>
                                                            Reject
                                                        </button>
                                                }

                                            </td>
                                            <td>
                                                {
                                                    !lead?.prize ? 'Not Set' : `$${lead?.prize}`
                                                }
                                            </td>
                                            <td>
                                                <form onSubmit={() => handlePrize(event, lead?._id)} className='flex items-center justify-center gap-1'>
                                                    <input name='prize' type='text' min={0} defaultValue={lead?.prize} className='rounded-md input input-bordered' />
                                                    <input className='rounded-md btn text-white bg-primary' type='submit' value={'Update'} />
                                                </form>
                                            </td>
                                            <td>
                                                <button onClick={() => handleDelete(lead?._id)} className='rounded-lg btn btn-outline text-red-600'>
                                                    Delete
                                                </button>
                                            </td>
                                            <td>
                                                <button className="btn btn-outline text-green-600 rounded-lg" onClick={() => setIsOpen(true)}>Edit</button>
                                            </td>
                                            <td>
                                                <Link href={`/adminDashboard/allLeads/${lead?._id}`}>
                                                    <Info />
                                                </Link>
                                            </td>
                                        </tr>
                                        {isOpen && (
                                            <div className="fixed inset-0 flex items-center justify-center z-50">
                                                {/* Modal Backdrop */}
                                                <div
                                                    className="absolute inset-0 bg-black opacity-50"
                                                    onClick={() => setIsOpen(false)}
                                                ></div>

                                                {/* Modal Box */}
                                                <div className="relative bg-white rounded-lg p-8 w-[90vw] max-w-4xl max-h-[80vh] overflow-y-auto">
                                                    <SectionTitles heading={'Edit'} subHeading={'Edit your leads'} />
                                                    <Modal id={lead?._id} />
                                                    <button
                                                        onClick={() => setIsOpen(false)}
                                                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                                                    >
                                                        ✕
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>
            {/* <TableHead tableHead={tableHead} /> */}
        </div>
    );
};

export default Page;