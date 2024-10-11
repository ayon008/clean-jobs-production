'use client'
import useAuth from '@/Hooks/useAuth';
import Table from '@/Shared/Table';
import SectionTitles from '@/ui/SectionTitles';
import React from 'react';

const Page = () => {
    const { user } = useAuth();
    return (
        <div className='pt-40 pb-20 px-10'>
            <SectionTitles heading={'Bookmarked'} subHeading={'Saved leads'} />
            <Table
                tableHead={['Leads', 'Location', 'Opportunity Type', 'Date', 'Status', 'View Details']}
                data={['']}
            />
        </div>
    );
};

export default Page;