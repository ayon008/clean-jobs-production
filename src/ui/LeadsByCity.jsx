'use client';

import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import Table from '@/Shared/Table';

const LeadsByCity = ({ data, states }) => {
    const [city, setCity] = useState('');

    const handleOnChange = (e) => {
        setCity(e.target.value);
    };

    const filteredData = city
        ? data.filter(d =>
            d.job_details.location.city.toLowerCase().includes(city.toLowerCase())
        )
        : data;

    return (
        <div>
            <div className="w-1/2 mx-auto mt-9">
                <div className="flex items-start gap-2">
                    <input
                        onChange={handleOnChange}
                        id="search"
                        type="text"
                        placeholder="Search cities near you"
                        className="input input-bordered bg-white w-[75%] h-[60px] rounded-[10px] border border-[#D0D5DD] shadow-lg"
                    />
                    <button className="btn bg-primary text-white flex items-center h-[60px] w-[20%] rounded-[10px]">
                        <FaSearch size="1rem" />
                        <span className="inter text-base font-medium">Search</span>
                    </button>
                </div>
            </div>

            <Table
                tableHead={['Leads', 'Location', 'Opportunity Type', 'Date', 'Status', 'View Details']}
                states={states}
                data={filteredData}
            />
        </div>
    );
};

export default LeadsByCity;
