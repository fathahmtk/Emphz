
import React from 'react';
import { Package, Mail, Users, BarChart } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';

const StatCard: React.FC<{ title: string; value: string; icon: React.ReactNode }> = ({ title, value, icon }) => (
    <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
        <div className="bg-primary text-white p-3 rounded-full mr-4">
            {icon}
        </div>
        <div>
            <p className="text-sm text-gray-500">{title}</p>
            <p className="text-2xl font-bold text-gray-800">{value}</p>
        </div>
    </div>
);


const AdminDashboardPage: React.FC = () => {
    const { user } = useAuth();
    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome, {user?.name}!</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <StatCard title="Total Products" value="11" icon={<Package />} />
                <StatCard title="New Enquiries" value="2" icon={<Mail />} />
                <StatCard title="Customers" value="3" icon={<Users />} />
                 <StatCard title="Sales (Month)" value="₹XX,XX,XXX" icon={<BarChart />} />
            </div>

             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                 <div className="bg-white p-6 rounded-lg shadow-md">
                     <h2 className="text-xl font-semibold mb-4">Recent Enquiries</h2>
                     <ul className="space-y-4">
                         <li className="flex justify-between items-center">
                             <div>
                                 <p className="font-semibold">John Doe</p>
                                 <p className="text-sm text-gray-500">Quote for single-door enclosures</p>
                             </div>
                             <span className="text-xs bg-yellow-200 text-yellow-800 font-semibold px-2 py-1 rounded-full">In Progress</span>
                         </li>
                         <li className="flex justify-between items-center">
                             <div>
                                 <p className="font-semibold">Jane Smith</p>
                                 <p className="text-sm text-gray-500">Information about security cabins</p>
                             </div>
                             <span className="text-xs bg-green-200 text-green-800 font-semibold px-2 py-1 rounded-full">New</span>
                         </li>
                     </ul>
                 </div>
                 <div className="bg-white p-6 rounded-lg shadow-md">
                      <h2 className="text-xl font-semibold mb-4">Sales Overview (Mock Chart)</h2>
                      <div className="flex items-center justify-center h-48 bg-gray-100 rounded-md">
                          <BarChart className="text-gray-400" size={48}/>
                          <p className="text-gray-500 ml-4">Chart would be displayed here.</p>
                      </div>
                 </div>
            </div>
        </div>
    );
};

export default AdminDashboardPage;
