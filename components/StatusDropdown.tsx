
import React, { useState, useRef, useEffect } from 'react';
import { Enquiry } from '../types';
import { ChevronDown } from 'lucide-react';

const statusColors: Record<Enquiry['status'], string> = {
    New: 'bg-gray-200 text-text-secondary hover:bg-gray-300',
    'In Progress': 'bg-warning/10 text-warning hover:bg-warning/20',
    Closed: 'bg-success/10 text-success hover:bg-success/20',
};

const statusOptions: Enquiry['status'][] = ['New', 'In Progress', 'Closed'];

interface StatusDropdownProps {
    currentStatus: Enquiry['status'];
    onStatusChange: (newStatus: Enquiry['status']) => void;
}

export const StatusDropdown: React.FC<StatusDropdownProps> = ({ currentStatus, onStatusChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleSelect = (status: Enquiry['status']) => {
        onStatusChange(status);
        setIsOpen(false);
    };

    return (
        <div className="relative inline-block text-left" ref={dropdownRef}>
            <div>
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className={`inline-flex justify-between items-center w-full min-w-[120px] rounded-md px-3 py-1.5 text-xs font-semibold shadow-sm transition-colors ${statusColors[currentStatus]}`}
                >
                    <span>{currentStatus}</span>
                    <ChevronDown className={`-mr-1 h-4 w-4 self-center ml-2 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
            </div>

            {isOpen && (
                <div
                    className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white dark:bg-slate-700 ring-1 ring-black ring-opacity-5 dark:ring-slate-600 focus:outline-none z-10"
                    role="menu"
                >
                    <div className="py-1" role="none">
                        {statusOptions.map((status) => (
                            <button
                                key={status}
                                onClick={() => handleSelect(status)}
                                className={`w-full text-left px-4 py-2 text-sm ${
                                    status === currentStatus
                                        ? 'bg-gray-100 dark:bg-slate-600 text-gray-900 dark:text-white'
                                        : 'text-gray-700 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-slate-600'
                                }`}
                                role="menuitem"
                            >
                                {status}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};
