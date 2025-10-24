
import React, { useState, useEffect } from 'react';
import { CaseStudy } from '../../types';
import { getCaseStudies, addCaseStudy, updateCaseStudy, deleteCaseStudy } from '../../services/mockApi';
import { Plus, Edit, Trash } from 'lucide-react';
import { CaseStudyForm } from '../../components/CaseStudyForm';
import { useToast } from '../../hooks/useToast';
import { useI18n } from '../../hooks/useI18n';

const AdminCaseStudiesPage: React.FC = () => {
    const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingStudy, setEditingStudy] = useState<CaseStudy | null>(null);
    const { addToast } = useToast();
    const { t } = useI18n();

    const fetchCaseStudiesData = async () => {
        setLoading(true);
        const data = await getCaseStudies();
        setCaseStudies(data);
        setLoading(false);
    };

    useEffect(() => {
        fetchCaseStudiesData();
    }, []);

    const handleAddNew = () => {
        setEditingStudy(null);
        setIsModalOpen(true);
    };

    const handleEdit = (study: CaseStudy) => {
        setEditingStudy(study);
        setIsModalOpen(true);
    };
    
    const handleDelete = async (studyId: number, studyTitle: string) => {
        if (window.confirm(`Are you sure you want to delete "${studyTitle}"?`)) {
            try {
                await deleteCaseStudy(studyId);
                setCaseStudies(prev => prev.filter(s => s.id !== studyId));
                addToast(t('toasts.deleteSuccess').replace('{name}', studyTitle), 'success');
            } catch (error) {
                const err = error as Error;
                addToast(t('toasts.deleteError').replace('{error}', err.message), 'error');
            }
        }
    };
    
    const handleSave = async (studyData: Omit<CaseStudy, 'id' | 'createdAt'> | CaseStudy) => {
        try {
            if ('id' in studyData) {
                // Editing existing
                await updateCaseStudy(studyData as CaseStudy);
            } else {
                // Adding new
                await addCaseStudy(studyData as Omit<CaseStudy, 'id' | 'createdAt'>);
            }
            addToast(t('toasts.saveSuccess'), 'success');
            setIsModalOpen(false);
            setEditingStudy(null);
            await fetchCaseStudiesData(); // Re-fetch to see changes
        } catch (error) {
            const err = error as Error;
            addToast(t('toasts.saveError').replace('{error}', err.message), 'error');
        }
    };
    
    const handleCancel = () => {
        setIsModalOpen(false);
        setEditingStudy(null);
    };

    return (
        <div>
            {isModalOpen && <CaseStudyForm study={editingStudy} onSave={handleSave} onCancel={handleCancel} />}
            
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-slate-200">Manage Case Studies</h1>
                <button 
                    onClick={handleAddNew}
                    className="bg-accent text-white px-4 py-2 rounded-lg font-semibold hover:bg-accent-hover shadow-sm hover:shadow-md transition-all duration-300 flex items-center self-end sm:self-auto">
                    <Plus size={18} className="mr-2"/> Add Case Study
                </button>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-4 sm:p-6 rounded-lg shadow-sm border border-border dark:border-slate-700">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-text-secondary dark:text-slate-400">
                        <thead className="text-xs text-text-secondary dark:text-slate-400 uppercase bg-background-light dark:bg-slate-700">
                            <tr>
                                <th scope="col" className="px-6 py-3 font-semibold whitespace-nowrap">Title</th>
                                <th scope="col" className="px-6 py-3 font-semibold">Client</th>
                                <th scope="col" className="px-6 py-3 font-semibold">Industry</th>
                                <th scope="col" className="px-6 py-3 font-semibold">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                Array.from({ length: 3 }).map((_, index) => (
                                    <tr key={index} className="bg-white dark:bg-slate-800 border-b dark:border-slate-700">
                                        <td className="px-6 py-4"><div className="h-4 bg-gray-200 dark:bg-slate-700 rounded animate-pulse"></div></td>
                                        <td className="px-6 py-4"><div className="h-4 bg-gray-200 dark:bg-slate-700 rounded animate-pulse"></div></td>
                                        <td className="px-6 py-4"><div className="h-4 bg-gray-200 dark:bg-slate-700 rounded animate-pulse"></div></td>
                                        <td className="px-6 py-4"><div className="h-4 bg-gray-200 dark:bg-slate-700 rounded animate-pulse"></div></td>
                                    </tr>
                                ))
                            ) : (
                                caseStudies.map(study => (
                                    <tr key={study.id} className="bg-white dark:bg-slate-800 border-b dark:border-slate-700 hover:bg-background-light dark:hover:bg-slate-700/50">
                                        <td className="px-6 py-4 font-medium text-text-DEFAULT dark:text-slate-200 whitespace-nowrap">{study.title}</td>
                                        <td className="px-6 py-4">{study.client}</td>
                                        <td className="px-6 py-4">{study.industry}</td>
                                        <td className="px-6 py-4">
                                            <div className="flex space-x-4">
                                                <button onClick={() => handleEdit(study)} className="text-accent hover:text-accent-hover"><Edit size={18}/></button>
                                                <button onClick={() => handleDelete(study.id, study.title)} className="text-danger hover:opacity-80"><Trash size={18}/></button>
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

export default AdminCaseStudiesPage;
