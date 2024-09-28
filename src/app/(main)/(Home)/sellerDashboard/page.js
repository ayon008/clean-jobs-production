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
        <div className='dashboard max-w-[1920px] mx-auto 2xl:gap-14 xl:gap-10 gap-5 2xl:px-[70px] xl:px-16 px-8 2xl:my-36 xl:my-28 my-16'>
            <div className=''>
                <Profiled />
                <div className='2xl:my-32 xl:my-24 my-10'>
                    <div className='w-full grid grid-cols-2 gap-x-6 gap-y-6'>
                        <DashboardCard
                            Icon={FaMessage}
                            title="User Message !"
                            description="Check your messages"
                            iconMargin="4px"
                        />
                        <DashboardCard
                            Icon={FaStatus}
                            title="Check lead status"
                            description="See all the lead status you uploaded"
                            iconMargin="4px"
                        />
                        <DashboardCard
                            Icon={FaUpload}
                            title="Upload your leads"
                            description="Sell your potential leads through us"
                            iconMargin="4px"
                        />
                        <DashboardCard
                            Icon={FaHand}
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