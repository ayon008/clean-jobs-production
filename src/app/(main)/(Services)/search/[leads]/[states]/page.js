import getLeadByState from "@/lib/getLeadByState";
import getLeadData from "@/lib/getLeadList";
import uniqueArr from "@/js/uniqueArr";
import LeadsByCity from "@/ui/LeadsByCity";


export async function generateStaticParams() {
    const [exclusive, layups, opportunities] = await Promise.all([
        getLeadData("exclusive-leads"),
        getLeadData("layups"),
        getLeadData("opportunities")
    ]);

    // Helper function to map data to params
    const mapDataToParams = (data, leadType) => {
        return data.map(item => ({
            leads: leadType,
            states: item.job_details.location.state
        }));
    };

    // Generate params for each lead type
    const exclusiveParams = mapDataToParams(exclusive, 'exclusive-leads');
    const layupsParams = mapDataToParams(layups, 'layups');
    const opportunitiesParams = mapDataToParams(opportunities, 'opportunities');


    const allParams = uniqueArr([
        ...exclusiveParams,
        ...layupsParams,
        ...opportunitiesParams
    ])

    // Return all params
    return allParams;
}

function capitalizeFirstLetter(string) {
    if (!string) return '';
    return string.charAt(0).toUpperCase() + string.slice(1);
}


const page = async ({ params }) => {
    const { leads, states } = params;
    const data = await getLeadByState(leads, states);
    console.log(data);

    return (
        <div className="pt-40 pb-20 px-10">
            <div>
                <div className="flex items-center gap-4 justify-center">
                    <h4 className="text-xl inter font-medium text-center">
                        {capitalizeFirstLetter(leads)} in {params.states}
                    </h4>
                    <p className="text-[#6941C6] inter text-sm font-medium pt-[3px] px-[10px] bg-[#F9F5FF] rounded-[18px]">
                        {data?.length}
                    </p>
                </div>
                <p className="text-[#667085] inter font-normal text-base text-center mt-2">
                    Opportunites can range from city/state, construcion clean ups, airbnb cleanings, sub contracts, and more. The process of providing a quote varies for each opportunity, and contact information is available for reaching out to the respective contacts in every opportunity
                </p>
            </div>
            <LeadsByCity data={data} states={states} />
        </div>
    );
};

export default page;