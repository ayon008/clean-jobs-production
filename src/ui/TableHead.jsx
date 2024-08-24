import React from 'react';

const TableHead = ({ tableHead }) => {
    return (
        <thead>
            <tr className="bg-[#FCFCFD]">
                {
                    tableHead.map((th, index) => {
                        return (
                            <th key={index} className="text-[#667085] font-medium text-sm inter">{th}</th>
                        )
                    })
                }
            </tr>
        </thead>
    );
};

export default TableHead;