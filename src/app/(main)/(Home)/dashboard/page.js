import FaMessage from '@/icons/FaMessage';
import { FaList, } from 'react-icons/fa';
import FaLeads from '@/icons/FaLeads';
import FaContract from '@/icons/FaContract';
import FaShoppingCart from '@/icons/FaShoppingCart';
import FaHand from '@/icons/FaHand';
import FaProfile from '@/icons/FaProfile';
import FaExit from '@/icons/FaExit';
import { MdOutlineNotifications } from 'react-icons/md';
import Profiled from '@/Shared/Profiled';
import DashboardCard from '@/Shared/DashBoardCard';
import ProfileCard from '@/Shared/ProfileCard';

const Page = () => {
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
                            Icon={FaList}
                            title="My Lead List"
                            description="See all the lead you saved"
                            iconMargin="4px"
                        />
                        <DashboardCard
                            Icon={FaLeads}
                            title="Find Exclusive Lead in Your Area"
                            description="See all the leads around you & grab opportunities"
                            iconMargin="4px"
                        />
                        <DashboardCard
                            Icon={FaContract}
                            title="Post for Sub-Contractor"
                            description="Submit if you have a lead list"
                            iconMargin="4px"
                        />
                        <DashboardCard
                            Icon={FaShoppingCart}
                            title="Purchase Leads"
                            description="See the lead list you own"
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
            <ProfileCard userDashboard={true} />
        </div>
    );
};

export default Page;