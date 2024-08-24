import Dot from "@/ui/Dot";
import FireIcon from "@/ui/FireIcon";
import RedDot from "@/ui/RedDot";
import { FaArrowRight, FaFacebookMessenger, FaPhone, FaPhoneAlt } from "react-icons/fa";
import image from '@/../public/assets/Ellipse 148.png'
import Image from "next/image";
import { MdEmail } from 'react-icons/md';
import { FaGlobe } from 'react-icons/fa';
import pImage from '@/../public/assets/primary img.jpg'
import getLeadById from "@/lib/getLeadById";
import getLeadData from "@/lib/getLeadList";


export async function generateStaticParams() {
    const leadTypes = ["exclusive-leads", "layups", "opportunities"];

    const params = await Promise.all(
        leadTypes.map(async (type) => {
            const leads = await getLeadData(type);
            return leads.map(lead => ({
                leads: type,
                state: lead.job_details.location.state,
                id: lead._id,
            }));
        })
    );
    return params.flat();
}

const page = async ({ params }) => {
    const { leads, states, id } = params;
    const data = await getLeadById(leads, states, id);
    const { status, job_details } = data;
    const { location, type, scope, frequency, facility_size, date_sold, notes, schedule } = job_details;

    const isSold = status.toLowerCase() === 'sold';
    const isAvailable = status.toLowerCase() === 'available';

    return (
        <div className="pt-40 pb-20 px-10">
            <div>
                {isSold && (
                    <div className="flex items-center bg-red-100 rounded-[20px] py-[3px] px-4 w-fit mx-auto">
                        <p className="text-red-600 inter text-sm font-medium">Sold</p>
                    </div>
                )}
                {isAvailable && (
                    <div className="flex items-center bg-[#ECFDF3] rounded-[20px] py-[3px] pl-[10px] pr-[20px] w-fit mx-auto">
                        <Dot />
                        <p className="text-[#027A48] inter text-sm font-medium">Available</p>
                    </div>
                )}
                <div className="flex justify-center items-end">
                    <h3 className="inter text-7xl font-black text-center mt-6">
                        {scope} <span className="inter text-3xl text-secondary font-semibold">-{frequency}</span>
                    </h3>
                    <FireIcon width={"30"} />
                </div>
                <p className="text-center text-[#585860] font-medium text-2xl mt-4">Posted 5 months ago</p>
                <div className="mt-10 grid grid-cols-3 gap-10">
                    <DetailCard title="Location" content={`${location.city}, ${location.state}`} />
                    <DetailCard title="Type" content={type} />
                    <DetailCard title="Scope" content={scope} />
                    <DetailCard title="Cleaning" content="Outsourced" />
                    <DetailCard title="Size" content={`Total: ${facility_size?.total}, Ground Floor: ${facility_size?.ground_floor}, Basement: ${facility_size?.basement}`} />
                    <DetailCard title="Frequency" content={frequency} />
                    <DetailCard title="Note" content={notes} />
                    <DetailCard title="Posted" content={date_sold} />
                </div>
                {isSold ? (
                    <SoldMessage />
                ) : (
                    <BuyLeadMessage />
                )}
            </div>
        </div>
    );
};

const DetailCard = ({ title, content }) => (
    <div className="bg-white p-12 border-4 border-[#F4F4F5] rounded-[24px]">
        <h4 className="text-[#246532] poppins text-xs font-black px-4 py-2 w-fit bg-[#DDFFE4] rounded-[100px] mx-auto">{title}</h4>
        <p className="text-[#72777A] inter text-sm font-medium text-center mt-4">{content}</p>
    </div>
);

const SoldMessage = () => (
    <div className="w-1/2 mx-auto mt-10">
        <h3 className="poppins text-6xl font-semibold text-center">Oops! You missed</h3>
        <p className="poppins text-xl font-medium text-center mt-5">Looks like you missed this one. Get an Unlimited subscription and get instant notifications when leads are posted.</p>
    </div>
);

const BuyLeadMessage = () => (
    <div className="w-1/2 mx-auto mt-10">
        <h3 className="poppins text-6xl font-semibold text-center">Buy This Lead</h3>
        <p className="poppins text-xl font-medium text-center mt-5">The preset walkthrough date for this exclusive lead is 1/24/2024. Walkthrough dates and times may possibly be changed after purchasing, but there is no guarantee.</p>
        <div className="w-3/4 mx-auto mt-10">
            <button className="bg-primary flex items-center gap-2 justify-center w-full rounded-[16px] p-5">
                <p className="poppins text-lg font-medium text-white">Buy This Lead</p>
                <FaArrowRight className="text-white" />
            </button>
        </div>
    </div>
);

export default page;