'use client'
import useAuth from '@/Hooks/useAuth';
import useAxiosSecure from '@/Hooks/useAxiosSecure';
import GetSellerLeads from '@/lib/GetSellerLeads';
import React from 'react';

const Page = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const { sellerLeads, refetch } = GetSellerLeads(user?.uid);
    console.log(sellerLeads);

    return (
        <div className='pt-40 pb-20 px-10'>
            <div>
                <div className="flex items-center gap-4 justify-center">
                    <h4 className="text-xl inter font-medium text-center">
                        Lead verification status
                    </h4>
                    <p className="text-[#6941C6] inter text-sm font-medium pt-[3px] px-[10px] bg-[#F9F5FF] rounded-[18px]">
                        {sellerLeads?.length}
                    </p>
                </div>
                <p className="text-[#667085] inter font-normal text-xs text-center mt-2">
                    Check the leads you uploaded and know your lead status
                </p>
            </div>
        </div>
    );
};

export default Page;