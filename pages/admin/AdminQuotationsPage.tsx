import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Quotation } from '../../types';
import { getQuotations, addQuotation, updateQuotation, deleteQuotation } from '../../services/mockApi';
import { Plus, Eye, FileText, Trash, Edit } from 'lucide-react';
import { QuotationForm } from '../../components/QuotationForm';
import { useToast } from '../../hooks/useToast';
import { useI18n } from '../../hooks/useI18n';
import { Pagination } from '../../components/Pagination';

const ITEMS_PER_PAGE = 10;

const statusColors = {
    Draft: 'bg-gray-200 text-gray-800 dark:bg-slate-700 dark:text-slate-300',
    Sent: 'bg-warning/10 text-warning',
    Approved: 'bg-success/10 text-success',
    Rejected: 'bg-danger/10 text-danger',
};

const AdminQuotationsPage: React.FC = () => {
    const [quotations, setQuotations] = useState<Quotation[]>([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingQuote, setEditingQuote] = useState<Quotation | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const { addToast } = useToast();
    const { t } = useI18n();

    const fetchQuotationsData = async () => {
        setLoading(true);
        const data = await getQuotations();
        setQuotations(data);
        setLoading(false);
    };

    useEffect(() => {
        fetchQuotationsData();
    }, []);

    const totalPages = Math.ceil(quotations.length / ITEMS_PER_PAGE);
    const paginatedQuotations = quotations.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    const handleAddNew = (prefillData?: Partial<Quotation>) => {
        setEditingQuote(prefillData ? prefillData as Quotation : null);
        setIsModalOpen(true);
    };

    const handleEdit = (quote: Quotation) => {
        setEditingQuote(quote);
        setIsModalOpen(true);
    };

    const handleDelete = async (quoteId: number) => {
        const quoteName = `QT-${String(quoteId).padStart(4, '0')}`;
        if (window.confirm(`Are you sure you want to delete quotation ${quoteName}"?`)) {
            try {
                await deleteQuotation(quoteId);
                addToast(t('toasts.deleteSuccess').replace('{name}', quoteName), 'success');
                await fetchQuotationsData();
            } catch (error) {
                const err = error as Error;
                addToast(t('toasts.deleteError').replace('{error}', err.message), 'error');
            }
        }
    };
    
    const handleSave = async (quoteData: Omit<Quotation, 'id' | 'createdAt'> | Quotation) => {
        try {
            if ('id' in quoteData) {
                await updateQuotation(quoteData as Quotation);
            } else {
                await addQuotation(quoteData);
            }
            addToast(t('toasts.saveSuccess'), 'success');
            setIsModalOpen(false);
            setEditingQuote(null);
            await fetchQuotationsData();
        } catch (error) {
            const err = error as Error;
            addToast(t('toasts.saveError').replace('{error}', err.message), 'error');
        }
    };
    
    const handleCancel = () => {
        setIsModalOpen(false);
        setEditingQuote(null);
    };

    return (
        <div>
            {isModalOpen && <QuotationForm quote={editingQuote} onSave={handleSave} onCancel={handleCancel} />}

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <h1 className="text-2xl sm:text-3xl font-bold text-text-DEFAULT dark:text-slate-200">Manage Quotations</h1>
                <button 
                    onClick={() => handleAddNew()}
                    className="bg-accent text-white px-4 py-2 rounded-md font-semibold hover:bg-accent-hover transition duration-300 flex items-center self-end sm:self-auto">
                    <Plus size={18} className="mr-2"/> Create Quotation
                </button>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-4 sm:p-6 rounded-lg shadow-sm border border-border dark:border-slate-700">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-text-secondary dark:text-slate-400">
                        <thead className="text-xs text-text-secondary dark:text-slate-400 uppercase bg-background-light dark:bg-slate-700">
                            <tr>
                                <th scope="col" className="px-6 py-3 font-semibold whitespace-nowrap">Quote ID</th>
                                <th scope="col" className="px-6 py-3 font-semibold">Customer</th>
                                <th scope="col" className="px-6 py-3 font-semibold">Total</th>
                                <th scope="col" className="px-6 py-3 font-semibold">Date</th>
                                <th scope="col" className="px-6 py-3 font-semibold">Status</th>
                                <th scope="col" className="px-6 py-3 font-semibold">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                Array.from({ length: 2 }).map((_, index) => (
                                    <tr key={index} className="bg-white dark:bg-slate-800 border-b dark:border-slate-700 animate-pulse">
                                        <td className="px-6 py-4"><div className="h-4 bg-gray-200 dark:bg-slate-700 rounded w-8"></div></td>
                                        <td className="px-6 py-4"><div className="h-4 bg-gray-200 dark:bg-slate-700 rounded w-24"></div></td>
                                        <td className="px-6 py-4"><div className="h-4 bg-gray-200 dark:bg-slate-700 rounded w-20"></div></td>
                                        <td className="px-6 py-4"><div className="h-4 bg-gray-200 dark:bg-slate-700 rounded w-20"></div></td>
                                        <td className="px-6 py-4"><div className="h-6 bg-gray-200 dark:bg-slate-700 rounded-full w-16"></div></td>
                                        <td className="px-6 py-4"><div className="h-4 bg-gray-200 dark:bg-slate-700 rounded w-24"></div></td>
                                    </tr>
                                ))
                            ) : (
                                paginatedQuotations.map(quote => (
                                    <tr key={quote.id} className="bg-white dark:bg-slate-800 border-b dark:border-slate-700 hover:bg-background-light dark:hover:bg-slate-700/50">
                                        <td className="px-6 py-4 font-medium text-text-DEFAULT dark:text-slate-200 whitespace-nowrap">QT-{String(quote.id).padStart(4, '0')}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{quote.customer}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(quote.total)}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{new Date(quote.createdAt).toLocaleDateString()}</td>
                                        <td className="px-6 py-4">
                                            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${statusColors[quote.status]}`}>
                                                {quote.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex space-x-3">
                                                <NavLink to={`/admin/quotations/${quote.id}`} className="text-steel-DEFAULT hover:text-accent" title="View Details"><Eye size={18}/></NavLink>
                                                <button onClick={() => handleEdit(quote)} className="text-steel-DEFAULT hover:text-success" title="Edit Quote"><Edit size={18}/></button>
                                                <button onClick={() => handleDelete(quote.id)} className="text-steel-DEFAULT hover:text-danger" title="Delete"><Trash size={18}/></button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
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

export default AdminQuotationsPage;
