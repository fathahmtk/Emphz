import React, { useState, useEffect } from 'react';
import { Enquiry } from '../../types';
import { getEnquiries } from '../../services/mockApi';

const statusColors = {
    New: 'bg-blue-100 text-blue-800',
    'In Progress': 'bg-yellow-100 text-yellow-800',
    Closed: 'bg-green-100 text-green-800',
};

const AdminEnquiriesPage: React.FC = () => {
    const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEnquiries = async () => {
            setLoading(true);
            const data = await getEnquiries();
            setEnquiries(data);
            setLoading(false);
        };
        fetchEnquiries();
    }, []);

    const handleStatusChange = (id: number, newStatus: Enquiry['status']) => {
        alert(`Status for enquiry ${id} would be changed to ${newStatus}. This is a UI demo.`);
        setEnquiries(enquiries.map(enq => enq.id === id ? {...enq, status: newStatus} : enq));
    }

    return (
        <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">Customer Enquiries</h1>
            
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
                 <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 whitespace-nowrap">Customer</th>
                                <th scope="col" className="px-6 py-3">Message</th>
                                <th scope="col" className="px-6 py-3">Date</th>
                                <th scope="col" className="px-6 py-3">Status</th>
                                <th scope="col" className="px-6 py-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                Array.from({ length: 2 }).map((_, index) => (
                                    <tr key={index} className="bg-white border-b">
                                        <td className="px-6 py-4"><div className="h-4 bg-gray-200 rounded animate-pulse w-24"></div></td>
                                        <td className="px-6 py-4"><div className="h-4 bg-gray-200 rounded animate-pulse"></div></td>
                                        <td className="px-6 py-4"><div className="h-4 bg-gray-200 rounded animate-pulse w-20"></div></td>
                                        <td className="px-6 py-4"><div className="h-4 bg-gray-200 rounded animate-pulse w-16"></div></td>
                                        <td className="px-6 py-4"><div className="h-6 bg-gray-200 rounded-full animate-pulse w-24"></div></td>
                                    </tr>
                                ))
                            ) : (
                                enquiries.map(enquiry => (
                                    <tr key={enquiry.id} className="bg-white border-b hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <p className="font-medium text-gray-900">{enquiry.name}</p>
                                            <p className="text-xs text-gray-500">{enquiry.email}</p>
                                        </td>
                                        <td className="px-6 py-4 max-w-sm truncate">{enquiry.message}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{new Date(enquiry.createdAt).toLocaleDateString()}</td>
                                        <td className="px-6 py-4">
                                            <select 
                                                value={enquiry.status}
                                                onChange={(e) => handleStatusChange(enquiry.id, e.target.value as Enquiry['status'])}
                                                className={`text-xs font-semibold px-2 py-1 rounded-full border-none focus:ring-0 ${statusColors[enquiry.status]}`}
                                            >
                                                <option value="New">New</option>
                                                <option value="In Progress">In Progress</option>
                                                <option value="Closed">Closed</option>
                                            </select>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <button
                                                onClick={() => alert(`Creating a quote from enquiry #${enquiry.id} for ${enquiry.name}.`)}
                                                className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-1 rounded-full hover:bg-blue-200 transition-colors"
                                            >
                                                Create Quote
                                            </button>
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