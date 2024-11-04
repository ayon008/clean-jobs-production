import DashboardCard from '@/Shared/DashBoardCard';
import ProfileCard from '@/Shared/ProfileCard';
import Profiled from '@/Shared/Profiled';
import React from 'react';
import FaMessage from '@/icons/FaMessage';
import FaHand from '@/icons/FaHand';
import FaStatus from '@/icons/FaStatus';
import FaUpload from '@/icons/FaUpload';

const page = () => {
    return (
        <div className='dashboard max-w-[1920px] mx-auto 2xl:gap-14 xl:gap-10 gap-5 2xl:px-[70px] xl:px-16 px-8 2xl:my-20 xl:my-16 my-12'>
            <div className=''>
                <Profiled />
                <div className='2xl:my-32 xl:my-24 my-10'>
                    <div className='w-full grid 2xl:grid-cols-2 xl:grid-cols-2 grid-cols-1 gap-x-6 gap-y-6'>
                        <DashboardCard
                            Icon={FaMessage}
                            title="User Message !"
                            description="Check your messages"
                            iconMargin="4px"
                        />
                        <DashboardCard
                            Icon={FaStatus}
                            href={'/sellerDashboard/leadStatus'}
                            title="Check lead status"
                            description="See all the lead status you uploaded"
                            iconMargin="4px"
                        />
                        <DashboardCard
                            Icon={FaUpload}
                            href={'/sellerDashboard/leadUpload'}
                            title="Upload your leads"
                            description="Sell your potential leads through us"
                            iconMargin="4px"
                        />
                        <DashboardCard
                            Icon={FaHand}
                            href={'/other-services'}
                            title="Explore Our Other Services"
                            description="We offer all kind of IT solutions, check us out"
                            iconMargin="1px"
                        />
                    </div>
                </div>
            </div>
            <ProfileCard sellerDashboard={true} />
        </div>
    );
};

export default page;