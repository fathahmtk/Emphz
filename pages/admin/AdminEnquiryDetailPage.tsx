
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, NavLink } from 'react-router-dom';
import { Enquiry, Quotation } from '../../types';
import { getEnquiryById, updateEnquiryStatus, addQuotation } from '../../services/mockApi';
import { ArrowLeft, User, Building, Mail as MailIcon, Phone, FileText, MessageSquare } from 'lucide-react';
import { QuotationForm } from '../../components/QuotationForm';
import { StatusDropdown } from '../../components/StatusDropdown';
import { useToast } from '../../hooks/useToast';
import { useI18n } from '../../hooks/useI18n';

const DetailItem: React.FC<{ icon: React.ReactNode, label: string, value?: string | null }> = ({ icon, label, value }) => (
    <div>
        <dt className="text-sm font-medium text-text-secondary dark:text-slate-400 flex items-center">
            {icon}
            <span className="ml-2">{label}</span>
        </dt>
        <dd className="mt-1 text-md text-text-DEFAULT dark:text-slate-200 font-semibold">{value || 'N/A'}</dd>
    </div>
);


const AdminEnquiryDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [enquiry, setEnquiry] = useState<Enquiry | null>(null);
    const [loading, setLoading] = useState(true);
    const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
    const { addToast } = useToast();
    const { t } = useI18n();
    
    useEffect(() => {
        const fetchEnquiry = async () => {
            if (id) {
                setLoading(true);
                const data = await getEnquiryById(Number(id));
                setEnquiry(data || null);
                setLoading(false);
            }
        };
        fetchEnquiry();
    }, [id]);

    const handleStatusChange = async (newStatus: Enquiry['status']) => {
        if (enquiry) {
            try {
                const updatedEnquiry = await updateEnquiryStatus(enquiry.id, newStatus);
                setEnquiry(updatedEnquiry);
                addToast(t('toasts.saveSuccess'), 'success');
            } catch (error) {
                const err = error as Error;
                addToast(t('toasts.saveError').replace('{error}', err.message), 'error');
            }
        }
    };
    
    const handleCreateQuote = () => {
        if(enquiry) {
            setIsQuoteModalOpen(true);
        }
    };
    
    const handleSaveQuote = async (quoteData: Omit<Quotation, 'id' | 'createdAt'> | Quotation) => {
        try {
            await addQuotation(quoteData as Omit<Quotation, 'id' | 'createdAt'>);
            setIsQuoteModalOpen(false);
            addToast(t('toasts.saveSuccess'), 'success');
            navigate('/admin/quotations');
        } catch (error) {
             const err = error as Error;
             addToast(t('toasts.saveError').replace('{error}', err.message), 'error');
        }
    };

    const handleCancelQuote = () => {
        setIsQuoteModalOpen(false);
    };


    if (loading) {
        return <div className="text-center p-8 dark:text-slate-300">Loading enquiry details...</div>;
    }

    if (!enquiry) {
        return <div className="text-center p-8 text-red-500">Enquiry not found.</div>;
    }
    
    const quotePrefillData = {
        enquiryId: enquiry.id,
        customer: enquiry.name,
        email: enquiry.email,
    };

    return (
        <div>
             {isQuoteModalOpen && <QuotationForm quote={quotePrefillData as Quotation} onSave={handleSaveQuote} onCancel={handleCancelQuote} />}
            <div className="mb-6 flex justify-between items-center">
                <NavLink to="/admin/enquiries" className="flex items-center text-accent dark:text-accent hover:underline font-semibold">
                    <ArrowLeft size={18} className="mr-2" />
                    Back to Enquiries
                </NavLink>
                <button
                    onClick={handleCreateQuote}
                    className="bg-accent text-white px-4 py-2 rounded-lg font-semibold hover:bg-accent-hover shadow-sm transition-all duration-300 flex items-center"
                >
                    Create Quotation
                </button>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-border dark:border-slate-700">
                <div className="border-b border-border dark:border-slate-700 pb-4 mb-6 flex justify-between items-start">
                    <div>
                        <h1 className="text-2xl font-bold text-text-DEFAULT dark:text-slate-200">Enquiry from {enquiry.name}</h1>
                        <p className="text-sm text-text-secondary dark:text-slate-400">Received on {new Date(enquiry.createdAt).toLocaleString()}</p>
                    </div>
                     <div>
                        <label className="text-sm font-medium text-text-secondary dark:text-slate-400 block mb-1">Status</label>
                        <StatusDropdown
                            currentStatus={enquiry.status}
                            onStatusChange={handleStatusChange}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-6">
                    <DetailItem icon={<User size={16} />} label="Customer Name" value={enquiry.name} />
                    <DetailItem icon={<Building size={16} />} label="Company" value={enquiry.company} />
                    <DetailItem icon={<MailIcon size={16} />} label="Email" value={enquiry.email} />
                    <DetailItem icon={<Phone size={16} />} label="Phone" value={enquiry.phone} />
                    <DetailItem icon={<FileText size={16} />} label="Product of Interest" value={enquiry.productName} />
                </div>
                
                <div>
                    <h2 className="text-lg font-semibold text-text-DEFAULT dark:text-slate-200 flex items-center mb-2">
                         <MessageSquare size={16} className="mr-2"/> Message
                    </h2>
                    <div className="bg-background-light dark:bg-slate-700 p-4 rounded-md border border-border dark:border-slate-600">
                        <p className="text-text-secondary dark:text-slate-300 whitespace-pre-wrap">{enquiry.message}</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AdminEnquiryDetailPage;
