import SectionTitles from '@/ui/SectionTitles';
import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div className='2xl:px-[70px] xl:px-16 px-8 2xl:my-36 xl:my-28 my-28'>
            <SectionTitles heading={'Choose your leads category'} subHeading={'See all the leads around you & grab opportunities'} />
            <div className='2xl:w-1/2 xl:w-1/2 w-full mx-auto'>
                <div className='my-10 space-y-6'>
                    <h2 className='text-2xl poppins font-semibold text-center border border-gray-200 bg-slate-200 p-4 rounded-xl shadow-xl cursor-pointer'>
                        <Link href={'/search/exclusive-leads'}>
                            Exclusive Leads
                        </Link>
                    </h2>

                    <h2 className='text-2xl poppins font-semibold text-center border border-gray-200 bg-slate-200 p-4 rounded-xl shadow-xl cursor-pointer'>
                        <Link href={'/search/layups'}>
                            Layups (Warm leads)
                        </Link>
                    </h2>
                    <h2 className='text-2xl poppins font-semibold text-center border border-gray-200 bg-slate-200 p-4 rounded-xl shadow-xl cursor-pointer'>
                        <Link href={'/search/opportunities'}>
                            Opportunities
                        </Link>
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default page;