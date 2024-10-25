import SectionTitles from '@/ui/SectionTitles';
import TableHead from '@/ui/TableHead';
import { cookies } from 'next/headers';
import React from 'react';

const page = async () => {
    const cookieStore = cookies();
    const userTokenObj = cookieStore.get('userToken');
    const token = userTokenObj?.value;
    const res = await fetch('https://clean-job-backend-final.vercel.app/messages', {
        cache: 'no-cache',
        headers: {
            authorization: `Bearer ${token}`
        }
    })
    const data = await res.json();
    return (
        <div className='2xl:px-[70px] xl:px-16 px-8 2xl:my-36 xl:my-28 my-16'>
            <SectionTitles heading={'Messages'} subHeading={'All the messages'} />
            <div className="overflow-x-auto mt-10">
                <table className="table">
                    {/* head */}
                    <TableHead tableHead={['#', 'Email', 'Full Name', 'Company Name','Phone Number', 'Subject', 'Message']} />
                    <tbody>
                        {/* row 1 */}
                        {
                            data?.map((d, i) => (
                                <tr key={d?._id} className="bg-base-200">
                                    <td>{i + 1}</td>
                                    <td>{d?.email}</td>
                                    <td>{d?.fullName}</td>
                                    <td>{d?.companyName}</td>
                                    
                                    <td>{d?.phoneNumber}</td>
                                    <td>{d?.subject}</td>
                                    <td>{d?.message}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default page;