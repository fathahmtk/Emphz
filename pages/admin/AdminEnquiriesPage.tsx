import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate, NavLink, useLocation } from 'react-router-dom';
import { Enquiry, Quotation } from '../../types';
import { getEnquiries, updateEnquiryStatus, addQuotation } from '../../services/mockApi';
import { QuotationForm } from '../../components/QuotationForm';
import { Eye } from 'lucide-react';
import { StatusDropdown } from '../../components/StatusDropdown';
import { useToast } from '../../hooks/useToast';
import { useI18n } from '../../hooks/useI18n';
import { Pagination } from '../../components/Pagination';

const ITEMS_PER_PAGE = 10;

const AdminEnquiriesPage: React.FC = () => {
    const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
    const [quotePrefill, setQuotePrefill] = useState<Partial<Quotation> | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();
    const location = useLocation();
    const { addToast } = useToast();
    const { t } = useI18n();

    useEffect(() => {
        const fetchEnquiriesData = async () => {
            setLoading(true);
            const data = await getEnquiries();
            setEnquiries(data);
            setLoading(false);
        };
        
        const params = new URLSearchParams(location.search);
        const search = params.get('search');
        if (search) {
            setSearchTerm(search);
        }
        
        fetchEnquiriesData();
    }, [location.search]);

    const filteredEnquiries = useMemo(() => {
        if (!searchTerm) {
            return enquiries;
        }
        const lowercasedTerm = searchTerm.toLowerCase();
        return enquiries.filter(enquiry =>
            enquiry.name.toLowerCase().includes(lowercasedTerm) ||
            enquiry.email.toLowerCase().includes(lowercasedTerm)
        );
    }, [enquiries, searchTerm]);

    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm]);

    const totalPages = Math.ceil(filteredEnquiries.length / ITEMS_PER_PAGE);
    const paginatedEnquiries = filteredEnquiries.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );


    const handleStatusChange = async (id: number, newStatus: Enquiry['status']) => {
        try {
            await updateEnquiryStatus(id, newStatus);
            setEnquiries(enquiries.map(enq => enq.id === id ? {...enq, status: newStatus} : enq));
        } catch (error) {
            const err = error as Error;
            addToast(t('toasts.saveError').replace('{error}', err.message), 'error');
        }
    };

    const handleCreateQuote = (enquiry: Enquiry) => {
        setQuotePrefill({
            enquiryId: enquiry.id,
            customer: enquiry.name,
            email: enquiry.email,
        });
        setIsQuoteModalOpen(true);
    };

    const handleSaveQuote = async (quoteData: Omit<Quotation, 'id' | 'createdAt'> | Quotation) => {
        try {
            await addQuotation(quoteData as Omit<Quotation, 'id' | 'createdAt'>);
            setIsQuoteModalOpen(false);
            setQuotePrefill(null);
            addToast(t('toasts.saveSuccess'), 'success');
            navigate('/admin/quotations');
        } catch (error) {
             const err = error as Error;
             addToast(t('toasts.saveError').replace('{error}', err.message), 'error');
        }
    };

    const handleCancelQuote = () => {
        setIsQuoteModalOpen(false);
        setQuotePrefill(null);
    };


    return (
        <div>
            {isQuoteModalOpen && <QuotationForm quote={quotePrefill as Quotation} onSave={handleSaveQuote} onCancel={handleCancelQuote} />}

            <h1 className="text-2xl sm:text-3xl font-bold text-text-DEFAULT dark:text-slate-200 mb-6">Customer Enquiries</h1>
            
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Search by name or email..."
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    className="w-full max-w-md px-4 py-2 border border-border dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-white dark:bg-slate-700 dark:text-white"
                />
            </div>

            <div className="bg-white dark:bg-slate-800 p-4 sm:p-6 rounded-lg shadow-sm border border-border dark:border-slate-700">
                 <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-text-secondary dark:text-slate-400">
                        <thead className="text-xs text-text-secondary dark:text-slate-400 uppercase bg-background-light dark:bg-slate-700">
                            <tr>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap font-semibold">Customer</th>
                                <th scope="col" className="px-6 py-3 font-semibold">Message</th>
                                <th scope="col" className="px-6 py-3 font-semibold">Date</th>
                                <th scope="col" className="px-6 py-3 font-semibold">Status</th>
                                <th scope="col" className="px-6 py-3 font-semibold">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                Array.from({ length: 2 }).map((_, index) => (
                                    <tr key={index} className="bg-white dark:bg-slate-800 border-b dark:border-slate-700">
                                        <td className="px-6 py-4"><div className="h-4 bg-gray-200 dark:bg-slate-700 rounded animate-pulse w-24"></div></td>
                                        <td className="px-6 py-4"><div className="h-4 bg-gray-200 dark:bg-slate-700 rounded animate-pulse"></div></td>
                                        <td className="px-6 py-4"><div className="h-4 bg-gray-200 dark:bg-slate-700 rounded animate-pulse w-20"></div></td>
                                        <td className="px-6 py-4"><div className="h-6 bg-gray-200 dark:bg-slate-700 rounded-md animate-pulse w-24"></div></td>
                                        <td className="px-6 py-4"><div className="h-6 bg-gray-200 dark:bg-slate-700 rounded-md animate-pulse w-24"></div></td>
                                    </tr>
                                ))
                            ) : (
                                paginatedEnquiries.map(enquiry => (
                                    <tr key={enquiry.id} className="bg-white dark:bg-slate-800 border-b dark:border-slate-700 hover:bg-background-light dark:hover:bg-slate-700/50">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <p className="font-medium text-text-DEFAULT dark:text-slate-200">{enquiry.name}</p>
                                            <p className="text-xs text-text-secondary dark:text-slate-400">{enquiry.email}</p>
                                        </td>
                                        <td className="px-6 py-4 max-w-sm truncate" title={enquiry.message}>{enquiry.message}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{new Date(enquiry.createdAt).toLocaleDateString()}</td>
                                        <td className="px-6 py-4">
                                            <StatusDropdown 
                                                currentStatus={enquiry.status}
                                                onStatusChange={(newStatus) => handleStatusChange(enquiry.id, newStatus)}
                                            />
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                             <div className="flex items-center gap-4">
                                                <NavLink 
                                                    to={`/admin/enquiries/${enquiry.id}`}
                                                    className="text-accent dark:text-accent hover:underline font-semibold text-xs flex items-center gap-1"
                                                >
                                                    <Eye size={14}/> View
                                                </NavLink>
                                                <button
                                                    onClick={() => handleCreateQuote(enquiry)}
                                                    className="bg-accent text-white text-xs font-semibold px-2.5 py-1.5 rounded-md hover:bg-accent-hover transition-colors"
                                                >
                                                    Create Quote
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                    {!loading && filteredEnquiries.length === 0 && (
                        <div className="text-center py-10">
                            <p className="text-text-secondary dark:text-slate-400">No enquiries found for "{searchTerm}".</p>
                        </div>
                    )}
                </div>
                 <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                />
            </div>
        </div>
    );
};

export default AdminEnquiriesPage;
