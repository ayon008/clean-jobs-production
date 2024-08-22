'use client';
import { usStates } from '@/js/states';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState, useMemo } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchState = ({ leads }) => {
    const router = useRouter();
    const [inputValue, setInputValue] = useState('');

    // Memoize filtered states to avoid recalculating on every render
    const filteredStates = useMemo(() => {
        if (!inputValue) return [];
        return usStates.filter(state =>
            state.toLowerCase().includes(inputValue.toLowerCase())
        );
    }, [inputValue]);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && filteredStates.length > 0) {
            router.push(`${leads}/${filteredStates[0]}`);
        }
    };

    const handleSearchClick = () => {
        if (filteredStates.length > 0) {
            router.push(`${leads}/${filteredStates[0]}`);
        }
    };

    return (
        <div className="w-1/2 mx-auto">
            <div className="flex items-start gap-2">
                <input
                    id="search"
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    placeholder={`Find ${leads} by state`}
                    className="input input-bordered bg-white w-[75%] h-[60px] rounded-[10px] border border-[#D0D5DD] shadow-lg"
                    aria-label={`Search ${leads} by state`}
                />
                <button
                    onClick={handleSearchClick}
                    className="btn bg-primary text-white flex items-center h-[60px] w-[20%] rounded-[10px]"
                    aria-label={`Search ${leads}`}
                >
                    <FaSearch size={'1rem'} />
                    <span className="inter text-base font-medium">Search</span>
                </button>
            </div>
            {inputValue.length > 1 && (
                <ul className="mt-6">
                    {filteredStates.length ? (
                        filteredStates.map((state) => (
                            <Link key={state} href={`${leads}/${state}`}>
                                <li className='p-3 hover:bg-[#F7F8F9] rounded'>
                                    <h3 className="poppins text-base font-medium">{state}</h3>
                                </li>
                            </Link>
                        ))
                    ) : (
                        <li className='p-3 text-gray-500'>No states found</li>
                    )}
                </ul>
            )}
        </div>
    );
};

export default SearchState;
