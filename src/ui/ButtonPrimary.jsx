import Link from 'next/link';
import React from 'react';

const ButtonPrimary = ({ href, label }) => {
    return (
        <Link href={href}>
            <button className='btn text-white 2xl:text-base xl:text-base 2xl:px-6 xl:px-4 px-2 text-[10px] bg-primary font-semibold poppins 2xl:rounded-[35px] xl:rounded-[35px] rounded-3xl'>
                {label}
            </button>
        </Link>
    );
};

export default ButtonPrimary;