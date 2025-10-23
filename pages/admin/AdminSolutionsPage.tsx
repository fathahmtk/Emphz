import React, { useState, useEffect } from 'react';
import { Solution } from '../../types';
import { getSolutions, addSolution, updateSolution, deleteSolution } from '../../services/mockApi';
import { Plus, Edit, Trash } from 'lucide-react';
import { SolutionForm } from '../../components/SolutionForm';

const AdminSolutionsPage: React.FC = () => {
    const [solutions, setSolutions] = useState<Solution[]>([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingSolution, setEditingSolution] = useState<Solution | null>(null);

    const fetchSolutionsData = async () => {
        setLoading(true);
        const data = await getSolutions();
        setSolutions(data);
        setLoading(false);
    };

    useEffect(() => {
        fetchSolutionsData();
    }, []);

    const handleAddNew = () => {
        setEditingSolution(null);
        setIsModalOpen(true);
    };

    const handleEdit = (solution: Solution) => {
        setEditingSolution(solution);
        setIsModalOpen(true);
    };
    
    const handleDelete = async (slug: string, name: string) => {
        if (window.confirm(`Are you sure you want to delete "${name}"?`)) {
            try {
                await deleteSolution(slug);
                setSolutions(prev => prev.filter(s => s.slug !== slug));
                alert(`"${name}" deleted successfully.`);
            } catch (error) {
                const err = error as Error;
                alert(`Failed to delete solution: ${err.message}`);
            }
        }
    };
    
    const handleSave = async (solutionData: Solution, originalSlug?: string) => {
        try {
            if (originalSlug) {
                // Editing existing
                await updateSolution(originalSlug, solutionData);
            } else {
                // Adding new
                await addSolution(solutionData);
            }
            setIsModalOpen(false);
            setEditingSolution(null);
            await fetchSolutionsData(); // Re-fetch to see changes
        } catch (error) {
            const err = error as Error;
            alert(`Failed to save solution: ${err.message}`);
        }
    };
    
    const handleCancel = () => {
        setIsModalOpen(false);
        setEditingSolution(null);
    };

    return (
        <div>
            {isModalOpen && <SolutionForm solution={editingSolution} onSave={handleSave} onCancel={handleCancel} />}
            
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Manage Solutions</h1>
                <button 
                    onClick={handleAddNew}
                    className="bg-accent text-white px-4 py-2 rounded-lg font-semibold hover:bg-accent-hover shadow-sm hover:shadow-md transition-all duration-300 flex items-center self-end sm:self-auto">
                    <Plus size={18} className="mr-2"/> Add Solution
                </button>
            </div>
            
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-border">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-text-secondary">
                        <thead className="text-xs text-text-secondary uppercase bg-background-light">
                            <tr>
                                <th scope="col" className="px-6 py-3 font-semibold whitespace-nowrap">Name</th>
                                <th scope="col" className="px-6 py-3 font-semibold">Slug</th>
                                <th scope="col" className="px-6 py-3 font-semibold">Related Products</th>
                                <th scope="col" className="px-6 py-3 font-semibold">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                Array.from({ length: 2 }).map((_, index) => (
                                    <tr key={index} className="bg-white border-b border-border">
                                        <td className="px-6 py-4"><div className="h-4 bg-gray-200 rounded animate-pulse"></div></td>
                                        <td className="px-6 py-4"><div className="h-4 bg-gray-200 rounded animate-pulse"></div></td>
                                        <td className="px-6 py-4"><div className="h-4 bg-gray-200 rounded animate-pulse"></div></td>
                                        <td className="px-6 py-4"><div className="h-4 bg-gray-200 rounded animate-pulse"></div></td>
                                    </tr>
                                ))
                            ) : (
                                solutions.map(solution => (
                                    <tr key={solution.slug} className="bg-white border-b border-border hover:bg-background-light">
                                        <td className="px-6 py-4 font-medium text-text-DEFAULT whitespace-nowrap">{solution.name}</td>
                                        <td className="px-6 py-4 font-mono text-xs">{solution.slug}</td>
                                        <td className="px-6 py-4">{solution.products.length}</td>
                                        <td className="px-6 py-4">
                                            <div className="flex space-x-4">
                                                <button onClick={() => handleEdit(solution)} className="text-blue-600 hover:text-blue-800"><Edit size={18}/></button>
                                                <button onClick={() => handleDelete(solution.slug, solution.name)} className="text-red-600 hover:text-red-800"><Trash size={18}/></button>
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

export default AdminSolutionsPage;
