import React, { useState, useEffect } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { Enquiry, Quotation } from '../../types';
import { getEnquiries, updateEnquiryStatus, addQuotation } from '../../services/mockApi';
import { QuotationForm } from '../../components/QuotationForm';
import { Eye } from 'lucide-react';
import { StatusDropdown } from '../../components/StatusDropdown';

const AdminEnquiriesPage: React.FC = () => {
    const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
    const [loading, setLoading] = useState(true);
    const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
    const [quotePrefill, setQuotePrefill] = useState<Partial<Quotation> | null>(null);
    const navigate = useNavigate();

    const fetchEnquiriesData = async () => {
        setLoading(true);
        const data = await getEnquiries();
        setEnquiries(data);
        setLoading(false);
    };

    useEffect(() => {
        fetchEnquiriesData();
    }, []);

    const handleStatusChange = async (id: number, newStatus: Enquiry['status']) => {
        try {
            await updateEnquiryStatus(id, newStatus);
            setEnquiries(enquiries.map(enq => enq.id === id ? {...enq, status: newStatus} : enq));
        } catch (error) {
            alert(`Failed to update status: ${(error as Error).message}`);
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
            alert('Quotation created successfully!');
            navigate('/admin/quotations');
        } catch (error) {
             alert(`Failed to create quote: ${(error as Error).message}`);
        }
    };

    const handleCancelQuote = () => {
        setIsQuoteModalOpen(false);
        setQuotePrefill(null);
    };


    return (
        <div>
            {isQuoteModalOpen && <QuotationForm quote={quotePrefill as Quotation} onSave={handleSaveQuote} onCancel={handleCancelQuote} />}

            <h1 className="text-2xl sm:text-3xl font-bold text-text-DEFAULT mb-6">Customer Enquiries</h1>
            
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-border">
                 <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-text-secondary">
                        <thead className="text-xs text-text-secondary uppercase bg-background-light">
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
                                    <tr key={index} className="bg-white border-b border-border">
                                        <td className="px-6 py-4"><div className="h-4 bg-gray-200 rounded animate-pulse w-24"></div></td>
                                        <td className="px-6 py-4"><div className="h-4 bg-gray-200 rounded animate-pulse"></div></td>
                                        <td className="px-6 py-4"><div className="h-4 bg-gray-200 rounded animate-pulse w-20"></div></td>
                                        <td className="px-6 py-4"><div className="h-6 bg-gray-200 rounded-md animate-pulse w-24"></div></td>
                                        <td className="px-6 py-4"><div className="h-6 bg-gray-200 rounded-md animate-pulse w-24"></div></td>
                                    </tr>
                                ))
                            ) : (
                                enquiries.map(enquiry => (
                                    <tr key={enquiry.id} className="bg-white border-b border-border hover:bg-background-light">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <p className="font-medium text-text-DEFAULT">{enquiry.name}</p>
                                            <p className="text-xs text-text-secondary">{enquiry.email}</p>
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
                                                    className="text-primary hover:text-primary-dark font-semibold text-xs flex items-center gap-1"
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
                </div>
            </div>
        </div>
    );
};

export default AdminEnquiriesPage;