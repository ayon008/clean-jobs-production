'use client'
import useAxiosSecure from '@/Hooks/useAxiosSecure';
import formatTimestamp from '@/js/convertTime';
import GetAllLeads from '@/lib/GetAllLeads';
import SearchState from '@/Shared/SearchState';
import TableHead from '@/ui/TableHead';
import React from 'react';
import Swal from 'sweetalert2';

const Page = () => {

    const axiosSecure = useAxiosSecure();
    const { allLeads, refetch, isLoading } = GetAllLeads();
    console.log(allLeads);

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
                        240
                    </p>
                </div>
                <p className="text-[#667085] inter font-normal text-xs text-center mt-2">
                    Check the leads you uploaded and know your lead status
                </p>
            </div>
            <div className='my-9'>
                <SearchState />
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <TableHead allLeads={true} tableHead={['Uploader', 'Business Name', 'Decision Maker', 'Appointment Date', 'Appointment Time', 'States', 'City', 'Area', 'Upload Date', 'Audio', 'Status', 'Additional Details', 'Category', 'Change Category', 'Update Status']} />
                    <tbody>
                        {
                            allLeads?.map(lead => {
                                return (
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
                                                {lead?.additionalDetails}
                                            </p>
                                        </td>
                                        <td>
                                            <p className='text-xs font-semibold text-black poppins text-center'>
                                                {lead?.category}
                                            </p>
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
                                    </tr>
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