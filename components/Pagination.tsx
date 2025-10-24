import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    if (totalPages <= 1) {
        return null;
    }

    const handlePrevious = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };
    
    // Logic to generate page numbers with ellipses
    const getPageNumbers = () => {
        const pageNumbers: (number | string)[] = [];
        const maxPagesToShow = 5;
        const halfPagesToShow = Math.floor(maxPagesToShow / 2);

        if (totalPages <= maxPagesToShow) {
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        } else {
            if (currentPage <= halfPagesToShow + 1) {
                for (let i = 1; i <= maxPagesToShow - 1; i++) {
                    pageNumbers.push(i);
                }
                pageNumbers.push('...');
                pageNumbers.push(totalPages);
            } else if (currentPage >= totalPages - halfPagesToShow) {
                pageNumbers.push(1);
                pageNumbers.push('...');
                for (let i = totalPages - maxPagesToShow + 2; i <= totalPages; i++) {
                    pageNumbers.push(i);
                }
            } else {
                pageNumbers.push(1);
                pageNumbers.push('...');
                for (let i = currentPage - halfPagesToShow + 1; i <= currentPage + halfPagesToShow - 1; i++) {
                    pageNumbers.push(i);
                }
                pageNumbers.push('...');
                pageNumbers.push(totalPages);
            }
        }
        return pageNumbers;
    };
    
    const pageNumbers = getPageNumbers();


    return (
        <nav className="flex items-center justify-between mt-6" aria-label="Pagination">
            <button
                onClick={handlePrevious}
                disabled={currentPage === 1}
                className="flex items-center px-4 py-2 text-sm font-medium text-text-secondary dark:text-slate-400 bg-white dark:bg-slate-800 border border-border dark:border-slate-700 rounded-md hover:bg-background-light dark:hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                <ChevronLeft size={16} className="mr-1" />
                Previous
            </button>
            <div className="hidden sm:flex items-center gap-1">
                {pageNumbers.map((page, index) =>
                    typeof page === 'number' ? (
                        <button
                            key={index}
                            onClick={() => onPageChange(page)}
                            className={`px-3 py-1.5 text-sm font-semibold rounded-md ${
                                currentPage === page
                                    ? 'bg-accent text-white'
                                    : 'text-text-secondary dark:text-slate-400 hover:bg-background-light dark:hover:bg-slate-700'
                            }`}
                        >
                            {page}
                        </button>
                    ) : (
                        <span key={index} className="px-3 py-1.5 text-sm font-semibold text-text-secondary dark:text-slate-400">
                            {page}
                        </span>
                    )
                )}
            </div>
             <div className="text-sm text-text-secondary dark:text-slate-400 sm:hidden">
                Page {currentPage} of {totalPages}
            </div>
            <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className="flex items-center px-4 py-2 text-sm font-medium text-text-secondary dark:text-slate-400 bg-white dark:bg-slate-800 border border-border dark:border-slate-700 rounded-md hover:bg-background-light dark:hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                Next
                <ChevronRight size={16} className="ml-1" />
            </button>
        </nav>
    );
};
