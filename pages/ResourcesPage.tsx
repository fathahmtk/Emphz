import React, { useState, useEffect, useMemo } from 'react';
import { Download as DownloadType } from '../types';
import { getDownloads } from '../services/mockApi';
import { Download as DownloadIcon, FileText, CheckSquare, Square } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import { SectionDivider } from '../components/SectionDivider';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { useToast } from '../hooks/useToast';
import { useI18n } from '../hooks/useI18n';

const ResourcesPage: React.FC = () => {
    const [downloads, setDownloads] = useState<DownloadType[]>([]);
    const [loading, setLoading] = useState(true);
    const [selected, setSelected] = useState<number[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('All');
    const { addToast } = useToast();
    const { t } = useI18n();

    usePageMetadata(
        "EMPHZ GRP Resources | Datasheets, Certifications & CAD",
        "The official resource library from EMPHZ, The GRP Company. Download technical datasheets, CAD files, and certifications for all EMPHZ GRP solutions.",
        "EMPHZ GRP datasheets, GRP CAD files, GRP certifications, GRP technical resources, The GRP Company"
    );

    useEffect(() => {
        const fetchDownloads = async () => {
            setLoading(true);
            const data = await getDownloads();
            setDownloads(data);
            setLoading(false);
        };
        fetchDownloads();
    }, []);

    const categories = useMemo(() => {
        const uniqueCategories = [...new Set(downloads.map(d => d.category))];
        return ['All', ...uniqueCategories];
    }, [downloads]);
    
    const filteredDownloads = useMemo(() => {
        return downloads.filter(download => {
            const matchesCategory = categoryFilter === 'All' || download.category === categoryFilter;
            const matchesSearch = download.title.toLowerCase().includes(searchTerm.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [downloads, categoryFilter, searchTerm]);

    // Group downloads by category for display.
    // Using a typed reduce function ensures correct type inference for the accumulator.
    const groupedDownloads = useMemo(() => {
        return filteredDownloads.reduce<Record<string, DownloadType[]>>((groups, download) => {
            const category = download.category;
            if (!groups[category]) {
                groups[category] = [];
            }
            groups[category].push(download);
            return groups;
        }, {});
    }, [filteredDownloads]);

    const handleSelect = (id: number) => {
        setSelected(prev => 
            prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
        );
    };

    const handleBundleDownload = () => {
        if (selected.length === 0) {
            addToast(t('toasts.selectionRequired'), 'error');
            return;
        }
        const selectedFiles = downloads.filter(d => selected.includes(d.id)).map(f => f.title);
        addToast(t('toasts.downloadSimulation').replace('{files}', selectedFiles.join(', ')), 'info');
        setSelected([]);
    };
    
    const breadcrumbLinks = [
        { name: 'Home', path: '/' },
        { name: 'Resources' }
    ];

    return (
        <div className="bg-background-light dark:bg-slate-900 min-h-screen">
            <div className="bg-background dark:bg-slate-800 relative overflow-hidden">
                 <div className="absolute inset-0">
                    <img src="https://images.unsplash.com/photo-1604147706283-d7119b5b822c?q=80&w=1920&auto=format&fit=crop" alt="Abstract background texture" className="w-full h-full object-cover opacity-50 dark:opacity-10" />
                    <div className="absolute inset-0 bg-white/95 dark:bg-slate-800/95"></div>
                </div>
                <div className="relative">
                    <Breadcrumbs links={breadcrumbLinks} />
                    <div className="container mx-auto px-6 py-12 text-center">
                        <h1 className="text-4xl font-bold font-heading text-primary dark:text-white mb-2">EMPHZ GRP Resource Library</h1>
                        <p className="text-lg text-text-secondary dark:text-slate-400 max-w-3xl mx-auto">Access datasheets, CAD files, and certifications from The GRP Company. Select files to create a custom submittal pack.</p>
                    </div>
                </div>
            </div>

            <SectionDivider />

            <div className="container mx-auto px-6 py-12">
                 <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md border border-border dark:border-slate-700 mb-8 flex flex-col md:flex-row gap-4 items-center">
                    <input
                        type="text"
                        placeholder="Search downloads by title..."
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                        className="w-full md:flex-1 px-4 py-3 border border-border dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-white dark:bg-slate-700 dark:text-white"
                    />
                    <select
                        value={categoryFilter}
                        onChange={e => setCategoryFilter(e.target.value)}
                        className="w-full md:w-auto px-4 py-3 border border-border dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-white dark:bg-slate-700 dark:text-white"
                    >
                        {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                    </select>
                </div>

                <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg sticky top-20 z-40 mb-8 border border-border dark:border-slate-700">
                    <div className="flex justify-between items-center">
                        <p className="font-semibold text-text-DEFAULT dark:text-slate-200">{selected.length} file(s) selected</p>
                        <button
                            onClick={handleBundleDownload}
                            disabled={selected.length === 0}
                            className="bg-accent text-white px-6 py-2 rounded-md font-semibold hover:bg-accent-hover transition duration-300 flex items-center disabled:bg-gray-400 disabled:cursor-not-allowed">
                            <DownloadIcon size={18} className="mr-2"/> Create Submittal PDF
                        </button>
                    </div>
                </div>

                {loading ? (
                    <div className="space-y-8">
                        {Array.from({ length: 4 }).map((_, i) => (
                            <div key={i} className="animate-pulse">
                                <div className="h-8 w-1/3 bg-gray-300 dark:bg-slate-700 rounded mb-4"></div>
                                <div className="h-12 bg-gray-200 dark:bg-slate-800 rounded"></div>
                            </div>
                        ))}
                    </div>
                ) : Object.keys(groupedDownloads).length > 0 ? (
                    <div className="space-y-10">
                        {/* FIX: Replaced Object.entries with Object.keys for better type safety with object iteration.
                            This resolves an issue where `files` was inferred as `unknown` by TypeScript. */}
                        {Object.keys(groupedDownloads).map((category) => (
                            <div key={category}>
                                <h2 className="text-2xl font-bold font-heading text-text-DEFAULT dark:text-slate-200 mb-4 pb-2 border-b-2 border-accent">{category}</h2>
                                <ul className="space-y-3">
                                    {groupedDownloads[category].map(file => (
                                        <li key={file.id} className="bg-white dark:bg-slate-800 p-4 rounded-md shadow-sm flex items-center justify-between hover:bg-background-light dark:hover:bg-slate-700/50 transition-colors border border-border dark:border-slate-700">
                                            <div className="flex items-center">
                                                <button onClick={() => handleSelect(file.id)} className="mr-4 text-accent">
                                                    {selected.includes(file.id) ? <CheckSquare /> : <Square />}
                                                </button>
                                                <FileText className="text-accent mr-3 flex-shrink-0" />
                                                <div>
                                                    <p className="font-semibold text-text-DEFAULT dark:text-slate-200">{file.title}</p>
                                                    <p className="text-xs text-text-secondary dark:text-slate-400">Views: {file.views}</p>
                                                </div>
                                            </div>
                                            <a href={file.fileUrl} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-semibold text-sm">Download</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                ) : (
                     <div className="text-center py-16">
                        <h3 className="text-2xl font-semibold font-heading text-text-DEFAULT dark:text-slate-200">No downloads found</h3>
                        <p className="text-text-secondary dark:text-slate-400 mt-2">Try adjusting your search or filter criteria.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ResourcesPage;