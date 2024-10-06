'use client'
import GetAllUsers from '@/lib/GetAllUser';
import SectionTitles from '@/ui/SectionTitles';
import TableHead from '@/ui/TableHead';
import React from 'react';

const Page = () => {
    const { allUsers } = GetAllUsers();
    console.log(allUsers);

    return (
        <div className='2xl:px-[70px] xl:px-16 px-8 2xl:my-36 xl:my-28 my-16'>
            <SectionTitles heading={'See all the users'} subHeading={'Manage all users'} />
            <div className='my-10'>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <TableHead tableHead={['Company Name', 'Email', 'Service State', 'Service City 1', 'Service City 2', 'Service City 3', 'Service City 4', 'Company Websites', 'Years in Business', 'Number of employees', 'Main Contact', 'Phone Number', 'Social Media 1', 'Social Media 2', 'Social Media 3', 'Social Media 4', 'Seller Status', 'Admin Status', 'Make admin']} />
                        <tbody>
                            {/* row 1 */}
                            {
                                allUsers?.map((user, i) => {
                                    return (
                                        <tr key={user?._id}>
                                            <th>{i + 1}</th>
                                            <td>{user?.email}</td>
                                            <td>{user?.serviceState}</td>
                                            <td>{user?.serviceCity1}</td>
                                            <td>{user?.serviceCity2}</td>
                                            <td>{user?.serviceCity3}</td>
                                            <td>{user?.serviceCity4}</td>
                                            <td>{user?.companyWebsites}</td>
                                            <td>{user?.yearsInBusiness}</td>
                                            <td>{user?.numberOfEmployees}</td>
                                            <td>{user?.mainContact}</td>
                                            <td>{user?.phoneNumber}</td>
                                            <td>{user?.socialMedia1}</td>
                                            <td>{user?.socialMedia2}</td>
                                            <td>{user?.socialMedia3}</td>
                                            <td>{user?.socialMedia4}</td>
                                            <td>{user?.isSeller}</td>
                                            <td>{user?.isAdmin}</td>
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