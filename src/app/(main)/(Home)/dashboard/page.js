import FaMessage from '@/icons/FaMessage';
import { FaList, } from 'react-icons/fa';
import FaContract from '@/icons/FaContract';
import FaShoppingCart from '@/icons/FaShoppingCart';
import FaHand from '@/icons/FaHand';
import Profiled from '@/Shared/Profiled';
import DashboardCard from '@/Shared/DashBoardCard';
import ProfileCard from '@/Shared/ProfileCard';
import FaNetwork from '@/icons/FaNetwork';

const Page = () => {
    return (
        <div className='dashboard max-w-[1920px] mx-auto 2xl:gap-14 xl:gap-10 gap-5 2xl:px-[70px] xl:px-16 px-8 2xl:my-20 xl:my-16 my-12'>
            <div className=''>
                <Profiled />
                <div className='2xl:my-32 xl:my-24 my-10'>
                    <div className='w-full grid 2xl:grid-cols-2 xl:grid-cols-2 grid-cols-1 gap-x-6 gap-y-6'>

                        <DashboardCard
                            href={''}
                            Icon={FaMessage}
                            title="User Message !"
                            description="Check your messages"
                            iconMargin="4px"
                        />

                        <DashboardCard
                            href={'/dashboard/myLeads'}
                            Icon={FaList}
                            title="My Lead List"
                            description="See all the lead you saved"
                            iconMargin="4px"
                        />

                        <div className='col-span-2 row-start-1'>
                            <DashboardCard
                                href={'/search'}
                                Icon={FaNetwork}
                                title="Find Exclusive Lead in Your Area"
                                description="See all the leads around you & grab opportunities"
                                iconMargin="4px"
                            />
                        </div>

                        <DashboardCard
                            href={''}
                            Icon={FaContract}
                            title="Post for Sub-Contractor"
                            description="Submit if you have a lead list"
                            iconMargin="4px"
                        />

                        <DashboardCard
                            href={''}
                            Icon={FaShoppingCart}
                            title="Purchase Leads"
                            description="See the lead list you own"
                            iconMargin="4px"
                        />

                        <DashboardCard
                            href={'/other-services'}
                            Icon={FaHand}
                            title="Explore Our Other Services"
                            description="We offer all kind of IT solutions, check us out"
                            iconMargin="1px"
                        />

                    </div>
                </div>
            </div>
            <ProfileCard userDashboard={true} />
        </div>
    );
};

export default Page;