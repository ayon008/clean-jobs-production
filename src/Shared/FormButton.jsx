import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const FormButton = ({ width }) => {
    return (
        <div className="form-control relative">
            <button type='submit' className={`bg-primary text-white btn rounded-[16px] poppins text-lg font-semibold h-[60px] ${width}`}>
                Search <FaArrowRight />
            </button>
        </div>
    );
};

export default FormButton;