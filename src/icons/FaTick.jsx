import React from 'react';

const FaTick = () => {
    return (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_340_1070)">
                <rect x="2" y="1" width="32" height="32" rx="16" fill="#FCFCFC" />
                <rect x="2.5" y="1.5" width="31" height="31" rx="15.5" stroke="#246532" />
                <path d="M11.739 17.0012L15.6127 20.8749L23.9142 12.5742" stroke="#246532" stroke-width="1.56522" stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <defs>
                <filter id="filter0_d_340_1070" x="0.434783" y="0.217391" width="35.1304" height="35.1304" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="0.782609" />
                    <feGaussianBlur stdDeviation="0.782609" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_340_1070" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_340_1070" result="shape" />
                </filter>
            </defs>
        </svg>

    );
};

export default FaTick;