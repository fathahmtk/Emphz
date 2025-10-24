import React, { useState, useEffect } from 'react';
import { Solution } from '../../types';
import { getSolutions, addSolution, updateSolution, deleteSolution } from '../../services/mockApi';
import { Plus, Edit, Trash } from 'lucide-react';
import { SolutionForm } from '../../components/SolutionForm';
import { useToast } from '../../hooks/useToast';
import { useI18n } from '../../hooks/useI18n';
import { Pagination } from '../../components/Pagination';

const ITEMS_PER_PAGE = 10;

const AdminSolutionsPage: React.FC = () => {
    const [solutions, setSolutions] = useState<Solution[]>([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingSolution, setEditingSolution] = useState<Solution | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const { addToast } = useToast();
    const { t } = useI18n();

    const fetchSolutionsData = async () => {
        setLoading(true);
        const data = await getSolutions();
        setSolutions(data);
        setLoading(false);
    };

    useEffect(() => {
        fetchSolutionsData();
    }, []);

    const totalPages = Math.ceil(solutions.length / ITEMS_PER_PAGE);
    const paginatedSolutions = solutions.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

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
                addToast(t('toasts.deleteSuccess').replace('{name}', name), 'success');
            } catch (error) {
                const err = error as Error;
                addToast(t('toasts.deleteError').replace('{error}', err.message), 'error');
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
            addToast(t('toasts.saveSuccess'), 'success');
            setIsModalOpen(false);
            setEditingSolution(null);
            await fetchSolutionsData(); // Re-fetch to see changes
        } catch (error) {
            const err = error as Error;
            addToast(t('toasts.saveError').replace('{error}', err.message), 'error');
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
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-slate-200">Manage Solutions</h1>
                <button 
                    onClick={handleAddNew}
                    className="bg-accent text-white px-4 py-2 rounded-lg font-semibold hover:bg-accent-hover shadow-sm hover:shadow-md transition-all duration-300 flex items-center self-end sm:self-auto">
                    <Plus size={18} className="mr-2"/> Add Solution
                </button>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-4 sm:p-6 rounded-lg shadow-sm border border-border dark:border-slate-700">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-text-secondary dark:text-slate-400">
                        <thead className="text-xs text-text-secondary dark:text-slate-400 uppercase bg-background-light dark:bg-slate-700">
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
                                    <tr key={index} className="bg-white dark:bg-slate-800 border-b dark:border-slate-700">
                                        <td className="px-6 py-4"><div className="h-4 bg-gray-200 dark:bg-slate-700 rounded animate-pulse"></div></td>
                                        <td className="px-6 py-4"><div className="h-4 bg-gray-200 dark:bg-slate-700 rounded animate-pulse"></div></td>
                                        <td className="px-6 py-4"><div className="h-4 bg-gray-200 dark:bg-slate-700 rounded animate-pulse"></div></td>
                                        <td className="px-6 py-4"><div className="h-4 bg-gray-200 dark:bg-slate-700 rounded animate-pulse"></div></td>
                                    </tr>
                                ))
                            ) : (
                                paginatedSolutions.map(solution => (
                                    <tr key={solution.slug} className="bg-white dark:bg-slate-800 border-b dark:border-slate-700 hover:bg-background-light dark:hover:bg-slate-700/50">
                                        <td className="px-6 py-4 font-medium text-text-DEFAULT dark:text-slate-200 whitespace-nowrap">{solution.name}</td>
                                        <td className="px-6 py-4 font-mono text-xs">{solution.slug}</td>
                                        <td className="px-6 py-4">{solution.products.length}</td>
                                        <td className="px-6 py-4">
                                            <div className="flex space-x-4">
                                                <button onClick={() => handleEdit(solution)} className="text-accent hover:text-accent-hover"><Edit size={18}/></button>
                                                <button onClick={() => handleDelete(solution.slug, solution.name)} className="text-danger hover:opacity-80"><Trash size={18}/></button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
                 <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                />
            </div>
        </div>
    );
};

export default AdminSolutionsPage;
