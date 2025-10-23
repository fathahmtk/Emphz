import React from 'react';

interface SuccessAnimationProps {
    message: string;
}

export const SuccessAnimation: React.FC<SuccessAnimationProps> = ({ message }) => {
    return (
        <div className="text-center py-4">
            <svg className="success-animation-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                <circle className="success-animation-circle" cx="26" cy="26" r="25" fill="none" />
                <path className="success-animation-checkmark" strokeLinecap="round" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
            </svg>
            <p className="text-green-600 font-semibold">{message}</p>
        </div>
    );
};