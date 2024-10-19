import { usStates } from "@/js/states";
import getLeadData from "@/lib/getLeadList";
import SearchState from "@/Shared/SearchState";
import Link from "next/link";

const LeadPage = async ({ params }) => {
    const { leads } = params;
    let data = [];

    try {
        data = await getLeadData(leads);
    } catch (error) {
        console.error('Error fetching lead data:', error);
        return <div className="pt-40 pb-20 px-10">Error loading data</div>; // Handle error gracefully
    }

    const filteredData = (state) => {
        return data?.filter(d => d.states === state)?.length;
    };

    const selectedStates = [...new Set(data?.map(d => d.states))]?.sort();

    return (
        <div className="pt-40 pb-20 px-10">
            <SearchState data={data} leads={leads} />
            <div className="w-3/4 mx-auto mt-10">
                <ul>
                    {selectedStates?.map((state) => (
                        <Link key={state} href={`${leads}/${state}`}>
                            <li className='p-3 hover:bg-[#F7F8F9] border-b-2 rounded'>
                                <div>
                                    <h3 className="poppins text-base font-medium">{state}</h3>
                                    <p className="text-[#64748B] font-semibold poppins text-xs mt-2">
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
