import React, { useState, useEffect } from 'react';
import { Package, Mail, Users, BarChart, Eye, TrendingDown } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { getDashboardStats } from '../../services/mockApi';

const StatCard: React.FC<{ title: string; value: React.ReactNode; icon: React.ReactNode }> = ({ title, value, icon }) => (
    <div className="bg-background p-6 rounded-lg shadow-sm border border-border flex items-center">
        <div className="bg-accent text-white p-4 rounded-full mr-5">
            {icon}
        </div>
        <div>
            <p className="text-sm text-text-secondary font-medium">{title}</p>
            <div className="text-3xl font-bold text-text-DEFAULT">{value}</div>
        </div>
    </div>
);

// Mock data for analytics
type AnalyticsRange = '7d' | '30d' | '90d';
const mockAnalyticsData = {
    '7d': { visitors: 1250, pageViews: 4500, bounceRate: '45.2%' },
    '30d': { visitors: 5600, pageViews: 18200, bounceRate: '52.1%' },
    '90d': { visitors: 15100, pageViews: 55600, bounceRate: '48.7%' },
};


const AdminDashboardPage: React.FC = () => {
    const { user } = useAuth();
    const [analyticsRange, setAnalyticsRange] = useState<AnalyticsRange>('30d');
    const [stats, setStats] = useState({
        totalProducts: 0,
        newEnquiries: 0,
        totalCustomers: 0,
        monthlySales: 0,
    });
    const [loadingStats, setLoadingStats] = useState(true);
    
    useEffect(() => {
        const fetchStats = async () => {
            setLoadingStats(true);
            const data = await getDashboardStats();
            setStats(data);
            setLoadingStats(false);
        };
        fetchStats();
    }, []);

    const analyticsData = mockAnalyticsData[analyticsRange];

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(amount);
    };

    const renderStatValue = (value: string | number) => {
        return loadingStats ? <div className="h-8 w-20 bg-gray-200 rounded animate-pulse"></div> : <p>{value}</p>;
    };

    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold text-text-DEFAULT">Welcome, {user?.name}!</h1>
            
            <div>
                 <h2 className="text-xl font-semibold mb-4 text-text-DEFAULT">Quick Stats</h2>
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <StatCard title="Total Products" value={renderStatValue(stats.totalProducts)} icon={<Package />} />
                    <StatCard title="New Enquiries" value={renderStatValue(stats.newEnquiries)} icon={<Mail />} />
                    <StatCard title="Total Customers" value={renderStatValue(stats.totalCustomers)} icon={<Users />} />
                    <StatCard title="Sales (This Month)" value={loadingStats ? renderStatValue('...') : <p>{formatCurrency(stats.monthlySales)}</p>} icon={<BarChart />} />
                </div>
            </div>

            {/* Website Analytics Section */}
            <div>
                 <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
                    <h2 className="text-xl font-semibold text-text-DEFAULT">Website Analytics</h2>
                    <div className="flex items-center gap-2 p-1 bg-background rounded-lg border border-border">
                        {(['Last 7 Days', 'Last 30 Days', 'Last 90 Days'] as const).map(label => {
                            const rangeMap: { [key: string]: AnalyticsRange } = {
                                'Last 7 Days': '7d',
                                'Last 30 Days': '30d',
                                'Last 90 Days': '90d',
                            };
                            const range = rangeMap[label];
                            return (
                                <button
                                    key={range}
                                    onClick={() => setAnalyticsRange(range)}
                                    className={`px-3 py-1.5 text-sm font-semibold rounded-md transition-colors ${
                                        analyticsRange === range
                                            ? 'bg-accent text-white shadow-sm'
                                            : 'text-text-secondary hover:bg-gray-100'
                                    }`}
                                >
                                    {label}
                                </button>
                            );
                        })}
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <StatCard title="Total Visitors" value={analyticsData.visitors.toLocaleString()} icon={<Users />} />
                    <StatCard title="Page Views" value={analyticsData.pageViews.toLocaleString()} icon={<Eye />} />
                    <StatCard title="Bounce Rate" value={analyticsData.bounceRate} icon={<TrendingDown />} />
                </div>
            </div>


             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                 <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
                     <h2 className="text-xl font-semibold mb-4 text-text-DEFAULT">Recent Enquiries</h2>
                     <ul className="space-y-4">
                         <li className="flex justify-between items-center p-3 rounded-md bg-background-light">
                             <div>
                                 <p className="font-semibold text-text-DEFAULT">John Doe</p>
                                 <p className="text-sm text-text-secondary">Quote for single-door enclosures</p>
                             </div>
                             <span className="text-xs bg-yellow-100 text-yellow-800 font-semibold px-2.5 py-1 rounded-full">In Progress</span>
                         </li>
                         <li className="flex justify-between items-center p-3 rounded-md bg-background-light">
                             <div>
                                 <p className="font-semibold text-text-DEFAULT">Jane Smith</p>
                                 <p className="text-sm text-text-secondary">Information about security cabins</p>
                             </div>
                             <span className="text-xs bg-cyan-100 text-cyan-800 font-semibold px-2.5 py-1 rounded-full">New</span>
                         </li>
                     </ul>
                 </div>
                 <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
                      <h2 className="text-xl font-semibold mb-4 text-text-DEFAULT">Sales Overview (Mock Chart)</h2>
                      <div className="flex items-center justify-center h-48 bg-background-light rounded-md border border-border">
                          <BarChart className="text-gray-400" size={48}/>
                          <p className="text-text-secondary ml-4">Chart would be displayed here.</p>
                      </div>
                 </div>
            </div>
        </div>
    );
};

export default AdminDashboardPage;