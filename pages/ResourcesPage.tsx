import React, { useState, useEffect, useMemo } from 'react';
import { Download as DownloadType } from '../types';
import { getDownloads } from '../services/mockApi';
import { Download as DownloadIcon, FileText, CheckSquare, Square } from 'lucide-react';

const ResourcesPage: React.FC = () => {
    const [downloads, setDownloads] = useState<DownloadType[]>([]);
    const [loading, setLoading] = useState(true);
    const [selected, setSelected] = useState<number[]>([]);

    useEffect(() => {
        const fetchDownloads = async () => {
            setLoading(true);
            const data = await getDownloads();
            setDownloads(data);
            setLoading(false);
        };
        fetchDownloads();
    }, []);

    const groupedDownloads = useMemo(() => {
        return downloads.reduce((acc, download) => {
            (acc[download.category] = acc[download.category] || []).push(download);
            return acc;
        }, {} as Record<string, DownloadType[]>);
    }, [downloads]);

    const handleSelect = (id: number) => {
        setSelected(prev => 
            prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
        );
    };

    const handleBundleDownload = () => {
        if (selected.length === 0) {
            alert("Please select at least one file to download.");
            return;
        }
        const selectedFiles = downloads.filter(d => selected.includes(d.id)).map(f => f.title);
        alert(`Simulating download of a submittal pack containing:\n- ${selectedFiles.join('\n- ')}`);
        setSelected([]);
    };

    return (
        <div className="bg-neutral-light min-h-screen">
            <div className="container mx-auto px-6 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-primary mb-2">Resources Library</h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">Access datasheets, CAD files, installation guides, and certifications. Select multiple files to create a custom submittal pack.</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg sticky top-20 z-40 mb-8">
                    <div className="flex justify-between items-center">
                        <p className="font-semibold text-gray-700">{selected.length} file(s) selected</p>
                        <button
                            onClick={handleBundleDownload}
                            disabled={selected.length === 0}
                            className="bg-accent text-white px-6 py-2 rounded-md font-semibold hover:bg-yellow-600 transition duration-300 flex items-center disabled:bg-gray-400 disabled:cursor-not-allowed">
                            <DownloadIcon size={18} className="mr-2"/> Create Submittal PDF
                        </button>
                    </div>
                </div>

                {loading ? (
                    <div className="space-y-8">
                        {Array.from({ length: 4 }).map((_, i) => (
                            <div key={i} className="animate-pulse">
                                <div className="h-8 w-1/3 bg-gray-300 rounded mb-4"></div>
                                <div className="h-12 bg-gray-200 rounded"></div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="space-y-10">
                        {Object.entries(groupedDownloads).map(([category, files]) => (
                            <div key={category}>
                                <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b-2 border-primary">{category}</h2>
                                <ul className="space-y-3">
                                    {files.map(file => (
                                        <li key={file.id} className="bg-white p-4 rounded-md shadow-sm flex items-center justify-between hover:bg-neutral-light transition-colors">
                                            <div className="flex items-center">
                                                <button onClick={() => handleSelect(file.id)} className="mr-4 text-primary">
                                                    {selected.includes(file.id) ? <CheckSquare /> : <Square />}
                                                </button>
                                                <FileText className="text-primary mr-3 flex-shrink-0" />
                                                <div>
                                                    <p className="font-semibold text-gray-800">{file.title}</p>
                                                    <p className="text-xs text-gray-500">Views: {file.views}</p>
                                                </div>
                                            </div>
                                            <a href={file.fileUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold text-sm">Download</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ResourcesPage;
