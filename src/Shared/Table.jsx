import Dot from '@/ui/Dot';
import Info from '@/ui/Info';
import MapMarker from '@/ui/MapMarker';
import TableHead from '@/ui/TableHead';
import Link from 'next/link';
import React from 'react'

const Table = ({ tableHead, data, states }) => {
    return (
        <div className="overflow-x-auto mt-10">
            <table className="table">
                {/* head */}
                <TableHead tableHead={tableHead}/>
                <tbody>
                    {
                        data.map(d => {
                            const { status, job_details, _id } = d;
                            const statusDetails = status.toLowerCase();
                            const { location, scope, type, date_posted } = job_details;
                            console.log(location);

                            return (
                                <tr key={d._id}>
                                    <td>
                                        <div className="flex items-center gap-3 ">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    {/* <Image
                                                            src={"https://img.daisyui.com/images/profile/demo/2@94.webp"}
                                                            alt="Avatar Tailwind CSS Component" /> */}
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{scope}</div>
                                                <div className="text-sm opacity-50">{type}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="flex items-center gap-4">
                                            <MapMarker />
                                            <div>
                                                <h4 className="inter font-normal text-lg">{location.city}</h4>
                                                <p className="text-[#72777A]">{location.state}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p className="text-[#175CD3] bg-[#EFF8FF]  rounded-[18px] w-fit  inter text-sm font-medium pt-[3px] px-[10px]">Standard Opportunity </p>
                                    </td>
                                    <td className="">
                                        <p className="  text-[#667085] inter text-base font-normal">{date_posted}</p>
                                    </td>
                                    <td>
                                        <div className="flex items-center bg-[#F2F4F7] w-fit rounded-[20px] py-[6px] pl-[10px] pr-[20px]  ">
                                            {
                                                statusDetails === 'offline' &&
                                                <>
                                                    <p className="text-[#344054]
                                     inter text-sm font-medium">Offline</p>
                                                </>
                                                ||
                                                statusDetails === 'sold' &&
                                                <>
                                                    <p className="text-red-600
                                     inter text-sm font-medium">Sold</p>
                                                </>
                                                ||
                                                statusDetails === 'open' &&
                                                <>
                                                    <Dot width={'w-[30px]'} />
                                                    <p className="text-[#027A48]
                                     inter text-sm font-medium">Available</p>
                                                </>
                                            }
                                        </div>
                                    </td>
                                    <td>
                                        <div className="  cursor-pointer">
                                            <Link href={`${states}/${_id}`}>
                                                <Info />
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Table;