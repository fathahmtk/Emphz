import React, { useState, useEffect } from 'react';
import { Quotation } from '../../types';
import { getQuotations } from '../../services/mockApi';
// Fix: Replaced non-existent 'FilePdf' icon with 'FileText'.
import { Plus, Eye, FileText, Trash } from 'lucide-react';

const statusColors = {
    Draft: 'bg-gray-200 text-gray-800',
    Sent: 'bg-blue-100 text-blue-800',
    Approved: 'bg-green-100 text-green-800',
    Rejected: 'bg-red-100 text-red-800',
};

const AdminQuotationsPage: React.FC = () => {
    const [quotations, setQuotations] = useState<Quotation[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchQuotations = async () => {
            setLoading(true);
            const data = await getQuotations();
            setQuotations(data);
            setLoading(false);
        };
        fetchQuotations();
    }, []);

    const handleActionClick = (action: string, quoteId: number) => {
        alert(`${action} clicked for quotation #${quoteId}. This is a UI demonstration.`);
    };

    return (
        <div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Manage Quotations</h1>
                <button 
                    onClick={() => alert("Create new quotation form would appear here.")}
                    className="bg-accent text-white px-4 py-2 rounded-md font-semibold hover:bg-accent-hover transition duration-300 flex items-center self-end sm:self-auto">
                    <Plus size={18} className="mr-2"/> Create Quotation
                </button>
            </div>
            
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">Quote ID</th>
                                <th scope="col" className="px-6 py-3">Customer</th>
                                <th scope="col" className="px-6 py-3">Total</th>
                                <th scope="col" className="px-6 py-3">Date</th>
                                <th scope="col" className="px-6 py-3">Status</th>
                                <th scope="col" className="px-6 py-3">Actions</th>
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
                                    <tr key={quote.id} className="bg-white border-b hover:bg-gray-50">
                                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">QT-{String(quote.id).padStart(4, '0')}</td>
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
                                                <button onClick={() => handleActionClick('View', quote.id)} className="text-gray-500 hover:text-blue-600" title="View Details"><Eye size={18}/></button>
                                                {/* Fix: Replaced non-existent 'FilePdf' icon with 'FileText'. */}
                                                <button onClick={() => handleActionClick('Generate PDF', quote.id)} className="text-gray-500 hover:text-green-600" title="Generate PDF"><FileText size={18}/></button>
                                                <button onClick={() => handleActionClick('Delete', quote.id)} className="text-gray-500 hover:text-red-600" title="Delete"><Trash size={18}/></button>
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