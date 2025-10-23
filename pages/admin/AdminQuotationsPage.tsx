import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Quotation } from '../../types';
import { getQuotations, addQuotation, updateQuotation, deleteQuotation } from '../../services/mockApi';
import { Plus, Eye, FileText, Trash, Edit } from 'lucide-react';
import { QuotationForm } from '../../components/QuotationForm';

const statusColors = {
    Draft: 'bg-gray-200 text-gray-800',
    Sent: 'bg-blue-100 text-blue-800',
    Approved: 'bg-green-100 text-green-800',
    Rejected: 'bg-red-100 text-red-800',
};

const AdminQuotationsPage: React.FC = () => {
    const [quotations, setQuotations] = useState<Quotation[]>([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingQuote, setEditingQuote] = useState<Quotation | null>(null);

    const fetchQuotationsData = async () => {
        setLoading(true);
        const data = await getQuotations();
        setQuotations(data);
        setLoading(false);
    };

    useEffect(() => {
        fetchQuotationsData();
    }, []);

    const handleAddNew = (prefillData?: Partial<Quotation>) => {
        setEditingQuote(prefillData ? prefillData as Quotation : null);
        setIsModalOpen(true);
    };

    const handleEdit = (quote: Quotation) => {
        setEditingQuote(quote);
        setIsModalOpen(true);
    };

    const handleDelete = async (quoteId: number) => {
        if (window.confirm(`Are you sure you want to delete quotation QT-${String(quoteId).padStart(4, '0')}"?`)) {
            try {
                await deleteQuotation(quoteId);
                await fetchQuotationsData();
            } catch (error) {
                alert(`Error deleting quotation: ${(error as Error).message}`);
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
            setIsModalOpen(false);
            setEditingQuote(null);
            await fetchQuotationsData();
        } catch (error) {
            alert(`Error saving quotation: ${(error as Error).message}`);
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
                <h1 className="text-2xl sm:text-3xl font-bold text-text-DEFAULT">Manage Quotations</h1>
                <button 
                    onClick={() => handleAddNew()}
                    className="bg-accent text-white px-4 py-2 rounded-md font-semibold hover:bg-accent-hover transition duration-300 flex items-center self-end sm:self-auto">
                    <Plus size={18} className="mr-2"/> Create Quotation
                </button>
            </div>
            
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-border">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-text-secondary">
                        <thead className="text-xs text-text-secondary uppercase bg-background-light">
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
                                    <tr key={index} className="bg-white border-b animate-pulse">
                                        <td className="px-6 py-4"><div className="h-4 bg-gray-200 rounded w-8"></div></td>
                                        <td className="px-6 py-4"><div className="h-4 bg-gray-200 rounded w-24"></div></td>
                                        <td className="px-6 py-4"><div className="h-4 bg-gray-200 rounded w-20"></div></td>
                                        <td className="px-6 py-4"><div className="h-4 bg-gray-200 rounded w-20"></div></td>
                                        <td className="px-6 py-4"><div className="h-6 bg-gray-200 rounded-full w-16"></div></td>
                                        <td className="px-6 py-4"><div className="h-4 bg-gray-200 rounded w-24"></div></td>
                                    </tr>
                                ))
                            ) : (
                                quotations.map(quote => (
                                    <tr key={quote.id} className="bg-white border-b border-border hover:bg-background-light">
                                        <td className="px-6 py-4 font-medium text-text-DEFAULT whitespace-nowrap">QT-{String(quote.id).padStart(4, '0')}</td>
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
                                                <NavLink to={`/admin/quotations/${quote.id}`} className="text-gray-500 hover:text-blue-600" title="View Details"><Eye size={18}/></NavLink>
                                                <button onClick={() => handleEdit(quote)} className="text-gray-500 hover:text-green-600" title="Edit Quote"><Edit size={18}/></button>
                                                <button onClick={() => handleDelete(quote.id)} className="text-gray-500 hover:text-red-600" title="Delete"><Trash size={18}/></button>
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

export default AdminQuotationsPage;