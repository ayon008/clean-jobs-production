import formatTimestamp from '@/js/convertTime';
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
                <TableHead tableHead={tableHead} />
                <tbody>
                    {
                        data.map(d => {
                            return (
                                <tr key={d._id}>
                                    <td>
                                        <p className=" text-[#667085] inter text-base font-normal">{d?.businessName}</p>
                                    </td>
                                    <td>
                                        <div className="flex items-center gap-4">
                                            <MapMarker />
                                            <div>
                                                <h4 className="inter font-normal text-lg">{d?.city}</h4>
                                                <p className="text-[#72777A]">{d?.states}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p className="text-[#175CD3] bg-[#EFF8FF]  rounded-[18px] w-fit  inter text-sm font-medium py-2 px-[10px]">{d?.opportunityType}</p>
                                    </td>
                                    <td className="">
                                        <p className=" text-[#667085] inter text-base font-normal">{formatTimestamp(d?.uploadDate)}</p>
                                    </td>
                                    <td>
                                        <div className="flex items-center bg-[#F2F4F7] w-fit rounded-[20px] py-[6px] pl-[10px] pr-[20px]  ">
                                            {
                                                d?.sold ?
                                                    <>
                                                        <p className="text-red-600
                                     inter text-sm font-medium">Sold</p>
                                                    </>
                                                    :
                                                    <>
                                                        <Dot width={'w-[30px]'} />
                                                        <p className="text-[#027A48]
                                     inter text-sm font-medium">Available</p>
                                                    </>
                                            }
                                        </div>
                                    </td>
                                    <td>
                                        <div className="cursor-pointer">
                                            <Link href={`${d?.states}/${d?._id}`}>
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