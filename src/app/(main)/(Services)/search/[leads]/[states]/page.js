import getLeadByState from "@/lib/getLeadByState";
import LeadsByCity from "@/ui/LeadsByCity";


function capitalizeFirstLetter(string) {
    if (!string) return '';
    return string?.charAt(0)?.toUpperCase() + string?.slice(1);
}


const page = async ({ params }) => {
    const { leads, states } = params;
    const decodeState = decodeURIComponent(states);
    console.log(decodeState);
    
    const data = await getLeadByState(leads, states);
    console.log(data);

    return (
        <div className="2xl:pt-40 xl:pt-40 xl:pb-20 2xl:pb-20 py-24 px-6">
            <div>
                <div className="flex 2xl:flex-row xl:flex-row flex-col items-center gap-4 justify-center">
                    <h4 className="text-xl inter font-medium text-center">
                        {capitalizeFirstLetter(leads)} in {decodeState}
                    </h4>
                    <p className="text-[#6941C6] inter text-sm font-medium py-[3px] px-[10px] bg-[#F9F5FF] rounded-[18px]">
                        {data?.length} leads
                    </p>
                </div>
                <p className="text-[#667085] inter font-normal 2xl:text-base xl:text-base text-sm text-center mt-2">
                    Opportunites can range from city/state, construcion clean ups, airbnb cleanings, sub contracts, and more. The process of providing a quote varies for each opportunity, and contact information is available for reaching out to the respective contacts in every opportunity
                </p>
            </div>
            <LeadsByCity data={data} states={states} />
        </div>
    );
};

export default page;