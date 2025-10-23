import React, { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { Quotation } from '../../types';
import { getQuotationById, updateQuotation } from '../../services/mockApi';
import { ArrowLeft, Edit, Download } from 'lucide-react';
import { QuotationForm } from '../../components/QuotationForm';

const statusColors = {
    Draft: 'bg-gray-200 text-gray-800',
    Sent: 'bg-blue-100 text-blue-800',
    Approved: 'bg-green-100 text-green-800',
    Rejected: 'bg-red-100 text-red-800',
};

const DetailItem: React.FC<{ label: string, value?: string | null | Date }> = ({ label, value }) => {
    let displayValue = 'N/A';
    if (value instanceof Date) {
        displayValue = value.toLocaleDateString();
    } else if (value) {
        displayValue = value;
    }

    return (
        <div>
            <dt className="text-sm font-medium text-text-secondary">{label}</dt>
            <dd className="mt-1 text-md text-text-DEFAULT font-semibold">{displayValue}</dd>
        </div>
    );
};

const AdminQuotationDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [quote, setQuote] = useState<Quotation | null>(null);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const fetchQuote = async () => {
            if (id) {
            setLoading(true);
            const data = await getQuotationById(Number(id));
            setQuote(data || null);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchQuote();
    }, [id]);

    const handleEdit = () => {
        setIsModalOpen(true);
    };

    const handleSave = async (quoteData: Omit<Quotation, 'id' | 'createdAt'> | Quotation) => {
        try {
            await updateQuotation(quoteData as Quotation);
            setIsModalOpen(false);
            await fetchQuote(); // Re-fetch to show updated data
        } catch (error) {
            alert(`Failed to save quotation: ${(error as Error).message}`);
        }
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleDownloadPdf = () => {
        alert(`Simulating PDF download for QT-${String(quote?.id).padStart(4, '0')}.`);
    };


    if (loading) {
        return <div className="text-center p-8">Loading quotation details...</div>;
    }

    if (!quote) {
        return <div className="text-center p-8 text-red-500">Quotation not found.</div>;
    }

    return (
        <div>
            {isModalOpen && <QuotationForm quote={quote} onSave={handleSave} onCancel={handleCancel} />}
            <div className="mb-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                <NavLink to="/admin/quotations" className="flex items-center text-primary hover:underline font-semibold self-start">
                    <ArrowLeft size={18} className="mr-2" />
                    Back to Quotations
                </NavLink>
                <div className="flex gap-4 self-end sm:self-auto">
                        <button
                        onClick={handleDownloadPdf}
                        className="bg-gray-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-gray-700 shadow-sm transition-all duration-300 flex items-center"
                    >
                        <Download size={16} className="mr-2" />
                        Download PDF
                    </button>
                    <button
                        onClick={handleEdit}
                        className="bg-accent text-white px-4 py-2 rounded-lg font-semibold hover:bg-accent-hover shadow-sm transition-all duration-300 flex items-center"
                    >
                        <Edit size={16} className="mr-2" />
                        Edit
                    </button>
                </div>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm border border-border">
                <div className="border-b border-border pb-4 mb-6 flex flex-col sm:flex-row justify-between items-start gap-4">
                    <div>
                        <h1 className="text-2xl font-bold text-text-DEFAULT">Quotation QT-{String(quote.id).padStart(4, '0')}</h1>
                        <p className="text-sm text-text-secondary">Created on {new Date(quote.createdAt).toLocaleString()}</p>
                    </div>
                    <div>
                        <span className={`text-sm font-semibold px-3 py-1.5 rounded-full ${statusColors[quote.status]}`}>
                            {quote.status}
                        </span>
                    </div>
                </div>
                
                <h2 className="text-lg font-semibold text-text-DEFAULT mb-4">Customer Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    <DetailItem label="Customer Name" value={quote.customer} />
                    <DetailItem label="Email" value={quote.email} />
                    <DetailItem label="Valid Until" value={quote.validUntil} />
                </div>

                <h2 className="text-lg font-semibold text-text-DEFAULT mb-4">Line Items</h2>
                <div className="overflow-x-auto mb-6 border border-border rounded-lg">
                    <table className="w-full text-sm text-left">
                        <thead className="text-xs text-text-secondary uppercase bg-background-light">
                            <tr>
                                <th className="px-4 py-3 font-semibold">Item Name</th>
                                <th className="px-4 py-3 font-semibold text-right">Quantity</th>
                                <th className="px-4 py-3 font-semibold text-right">Unit Price</th>
                                <th className="px-4 py-3 font-semibold text-right">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {quote.items.map((item, index) => (
                                <tr key={index} className="border-b border-border last:border-b-0">
                                    <td className="px-4 py-3 font-medium text-text-DEFAULT">{item.name}</td>
                                    <td className="px-4 py-3 text-right text-text-secondary">{item.qty} {item.unit}</td>
                                    <td className="px-4 py-3 text-right text-text-secondary">{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(item.price)}</td>
                                    <td className="px-4 py-3 text-right font-semibold text-text-DEFAULT">{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(item.qty * item.price)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                
                <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                     <div className="w-full md:w-1/2">
                        {quote.notes && (
                            <div>
                                <h2 className="text-lg font-semibold text-text-DEFAULT mb-2">Notes</h2>
                                <div className="bg-background-light p-4 rounded-md border border-border">
                                    <p className="text-text-secondary whitespace-pre-wrap text-sm">{quote.notes}</p>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="w-full md:w-auto md:min-w-[280px]">
                        <div className="space-y-2 text-sm text-text-secondary bg-background-light p-4 rounded-lg border border-border">
                            <div className="flex justify-between">
                                <span>Subtotal:</span>
                                <span>{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(quote.subtotal)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Tax (18%):</span>
                                <span>{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(quote.tax)}</span>
                            </div>
                            <div className="flex justify-between font-bold text-lg text-text-DEFAULT border-t border-border pt-2 mt-2">
                                <span>Total:</span>
                                <span>{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(quote.total)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminQuotationDetailPage;