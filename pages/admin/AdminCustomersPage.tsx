import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Customer } from '../../types';
import { getCustomers } from '../../services/mockApi';
import { Eye } from 'lucide-react';

const AdminCustomersPage: React.FC = () => {
    const [customers, setCustomers] = useState<Customer[]>([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCustomers = async () => {
            setLoading(true);
            const data = await getCustomers();
            data.sort((a, b) => b.firstSeen.getTime() - a.firstSeen.getTime());
            setCustomers(data);
            setLoading(false);
        };
        fetchCustomers();
    }, []);

    const handleViewHistory = (customerEmail: string) => {
        navigate(`/admin/enquiries?search=${encodeURIComponent(customerEmail)}`);
    };

    return (
        <div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <h1 className="text-2xl sm:text-3xl font-bold text-text-DEFAULT">Customers</h1>
            </div>
            
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-border">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-text-secondary">
                        <thead className="text-xs text-text-secondary uppercase bg-background-light">
                            <tr>
                                <th scope="col" className="px-6 py-3 font-semibold whitespace-nowrap">Customer</th>
                                <th scope="col" className="px-6 py-3 font-semibold">Company</th>
                                <th scope="col" className="px-6 py-3 font-semibold text-center">Enquiries</th>
                                <th scope="col" className="px-6 py-3 font-semibold text-center">Quotes</th>
                                <th scope="col" className="px-6 py-3 font-semibold">First Seen</th>
                                <th scope="col" className="px-6 py-3 font-semibold">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                Array.from({ length: 3 }).map((_, index) => (
                                    <tr key={index} className="bg-white border-b border-border animate-pulse">
                                        <td className="px-6 py-4"><div className="h-4 bg-gray-200 rounded w-32"></div></td>
                                        <td className="px-6 py-4"><div className="h-4 bg-gray-200 rounded w-24"></div></td>
                                        <td className="px-6 py-4"><div className="h-4 bg-gray-200 rounded w-8 mx-auto"></div></td>
                                        <td className="px-6 py-4"><div className="h-4 bg-gray-200 rounded w-8 mx-auto"></div></td>
                                        <td className="px-6 py-4"><div className="h-4 bg-gray-200 rounded w-20"></div></td>
                                        <td className="px-6 py-4"><div className="h-4 bg-gray-200 rounded w-8"></div></td>
                                    </tr>
                                ))
                            ) : (
                                customers.map(customer => (
                                    <tr key={customer.id} className="bg-white border-b border-border hover:bg-background-light">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <p className="font-medium text-text-DEFAULT">{customer.name}</p>
                                            <p className="text-xs text-text-secondary">{customer.email}</p>
                                        </td>
                                        <td className="px-6 py-4">{customer.company || 'N/A'}</td>
                                        <td className="px-6 py-4 text-center font-medium">{customer.enquiryCount}</td>
                                        <td className="px-6 py-4 text-center font-medium">{customer.quotationCount}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{new Date(customer.firstSeen).toLocaleDateString()}</td>
                                        <td className="px-6 py-4">
                                            <div className="flex space-x-3">
                                                <button onClick={() => handleViewHistory(customer.email)} className="text-gray-500 hover:text-blue-600" title="View History"><Eye size={18}/></button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                     {customers.length === 0 && !loading && (
                        <div className="text-center py-10">
                            <p>No customers found.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdminCustomersPage;