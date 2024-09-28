import SearchState from '@/Shared/SearchState';
import TableHead from '@/ui/TableHead';
import React from 'react';

const page = () => {
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
                <p className="text-[#667085] inter font-normal text-base text-center mt-2">
                    Check the leads you uploaded and know your lead status
                </p>
            </div>
            <div className='my-9'>
                <SearchState />
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <TableHead allLeads={true} tableHead={['Uploader', 'Decision Maker', 'Upload Date', 'Status', 'View Details']} />
                    <tbody>
                        <tr>
                            <td>
                                <p>Ryna</p>
                                <small>Bangladesh call center</small>
                            </td>
                            <td>
                                <p>Ryna</p>
                                <small>Bangladesh call center</small>
                            </td>
                            <td>
                                <p>Ryna</p>
                                <small>Bangladesh call center</small>
                            </td>
                            <td>
                                <p>Ryna</p>
                                <small>Bangladesh call center</small>
                            </td>
                            <td>
                                <p>Ryna</p>
                                <small>Bangladesh call center</small>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {/* <TableHead tableHead={tableHead} /> */}
        </div>
    );
};

export default page;