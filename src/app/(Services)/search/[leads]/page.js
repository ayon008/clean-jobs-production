import { usStates } from "@/js/states";
import getLeadData from "@/lib/getLeadList";
import SearchState from "@/Shared/SearchState";
import Link from "next/link";

export async function generateStaticParams() {
    return [
        { leads: 'exclusive-leads' },
        { leads: 'layups' },
        { leads: 'opportunities' }
    ];
}

const LeadPage = async ({ params }) => {
    const { leads } = params;
    let data = [];

    try {
        data = await getLeadData(leads);
    } catch (error) {
        console.error('Error fetching lead data:', error);
    }

    const filteredData = (state) => data.filter(d => d.job_details.location.state === state).length;

    return (
        <div className="pt-40 pb-20 px-10">
            <SearchState leads={leads} />
            <div className="w-3/4 mx-auto mt-10">
                <ul>
                    {usStates.map((state) => (
                        <Link key={state} href={`${leads}/${state}`}>
                            <li className='p-3 hover:bg-[#F7F8F9] rounded'>
                                <div>
                                    <h3 className="poppins text-base font-medium">{state}</h3>
                                    <p className="text-[#64748B] poppins text-xs font-light mt-2">
                                        {filteredData(state) || 0}
                                    </p>
                                </div>
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default LeadPage;
