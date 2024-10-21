import formatTimestamp from '@/js/convertTime';
import { cookies } from 'next/headers';
import React from 'react';



function formatDate(dateString) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
}


const page = async ({ params }) => {
    const cookieStore = cookies();
    const userTokenObj = cookieStore.get('userToken');
    const token = userTokenObj?.value;

    const id = params?.lead;
    const res = await fetch(`https://clean-jobs-latest-backend.vercel.app/allLeads/${id}`, {
        cache: 'no-cache',
        headers: {
            authorization: `Bearer ${token}`,
        },
    });
    const data = await res.json();

    // Destructure the data object
    const {
        companyName,
        businessName,
        uploadDate,
        location,
        firstName,
        lastName,
        cleaning,
        frequency,
        area,
        scope,
        opportunityType,
        audio,
        additionalDetails,
        leadName,
        time,
        states,
        city,
        type,
        verified,
        sold,
        prize,
        date
    } = data || {};
    console.log(data);


    return (
        <div className="2xl:px-40 xl:px-28 2xl:pt-52 xl:pt-40 py-28 px-6 space-y-2">
            <h3 className="text-2xl font-semibold poppins">Uploader: {companyName}</h3>
            <h4 className="text-xl font-semibold poppins">
                <span>Business Name</span>: {businessName}
            </h4>
            <p className="text-base font-semibold poppins text-black">
                Appointment On: <span className="text-gray-500 text-sm poppins">{formatDate(date)} at {time}</span>
            </p>
            <p className="text-base font-semibold poppins text-black">
                Address: <span className="text-gray-500 text-sm poppins">{location}</span>
            </p>
            <h4 className="text-xl font-semibold poppins">
                <span>Decision Maker:</span> {firstName} {lastName}
            </h4>
            <p className="text-base font-semibold poppins text-black">
                Current Cleaning Status (Inhouse/Outsourced):{' '}
                <span className="text-gray-500 text-sm poppins">{cleaning}</span>
            </p>
            <p className="text-base font-semibold poppins text-black">
                Cleaning Frequency: <span className="text-gray-500 text-sm poppins">{frequency}</span>
            </p>
            <p className="text-base font-semibold poppins text-black">
                Size of the facility: <span className="text-gray-500 text-sm poppins">{area} unit</span>
            </p>
            <p className="text-base font-semibold poppins text-black">
                Common area: <span className="text-gray-500 text-sm poppins">{scope}</span>
            </p>
            <p className="text-base font-semibold poppins text-black">
                Opportunity Type: <span className="text-gray-500 text-sm poppins">{opportunityType}</span>
            </p>

            {/* New Fields */}
            <p className="text-base font-semibold poppins text-black">
                Additional Details: <span className="text-gray-500 text-sm poppins">{additionalDetails}</span>
            </p>
            <p className="text-base font-semibold poppins text-black">
                Lead Name: <span className="text-gray-500 text-sm poppins">{leadName}</span>
            </p>
            <p className="text-base font-semibold poppins text-black">
                Meeting Time: <span className="text-gray-500 text-sm poppins">{time}</span>
            </p>
            <p className="text-base font-semibold poppins text-black">
                State: <span className="text-gray-500 text-sm poppins">{states}</span>
            </p>
            <p className="text-base font-semibold poppins text-black">
                City: <span className="text-gray-500 text-sm poppins">{city}</span>
            </p>
            <p className="text-base font-semibold poppins text-black">
                Facility Type: <span className="text-gray-500 text-sm poppins">{type}</span>
            </p>
            <p className="text-base font-semibold poppins text-black">
                Verified: <span className="text-gray-500 text-sm poppins">{verified ? 'Yes' : 'No'}</span>
            </p>
            <p className="text-base font-semibold poppins text-black">
                Sold: <span className="text-gray-500 text-sm poppins">{sold ? 'Yes' : 'No'}</span>
            </p>
            <p className="text-base font-semibold poppins text-black">
                Prize: <span className="text-gray-500 text-sm poppins">${prize}</span>
            </p>
            <p className="text-base font-semibold poppins text-black">
                Upload Date: <span className="text-gray-500 text-sm poppins">{formatTimestamp(uploadDate)}</span>
            </p>

            {/* Audio Section */}
            {audio && (
                <div className="audio-section flex items-center gap-2">
                    <h4 className="text-xl font-semibold poppins">Audio Message:</h4>
                    <audio controls className="w-full">
                        <source src={audio} type="audio/mpeg" />
                        Your browser does not support the audio element.
                    </audio>
                </div>
            )}
        </div>
    );
};

export default page;
