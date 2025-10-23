import React, { useState, useEffect } from 'react';
import { Product } from '../../types';
import { getProducts, addProduct, updateProduct, deleteProduct } from '../../services/mockApi';
import { Plus, Edit, Trash } from 'lucide-react';
import { ProductForm } from '../../components/ProductForm';

const AdminProductsPage: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingProduct, setEditingProduct] = useState<Product | null>(null);

    const fetchProductsData = async () => {
        setLoading(true);
        const data = await getProducts();
        setProducts(data);
        setLoading(false);
    };

    useEffect(() => {
        fetchProductsData();
    }, []);

    const handleAddNew = () => {
        setEditingProduct(null);
        setIsModalOpen(true);
    };

    const handleEdit = (product: Product) => {
        setEditingProduct(product);
        setIsModalOpen(true);
    };
    
    const handleDelete = async (productId: number, productName: string) => {
        if (window.confirm(`Are you sure you want to delete "${productName}"?`)) {
            try {
                await deleteProduct(productId);
                setProducts(prev => prev.filter(p => p.id !== productId));
                alert(`"${productName}" deleted successfully.`);
            } catch (error) {
                const err = error as Error;
                alert(`Failed to delete product: ${err.message}`);
            }
        }
    };
    
    const handleSave = async (productData: Omit<Product, 'id' | 'createdAt' | 'updatedAt' | 'categoryName'> | Product) => {
        try {
            if ('id' in productData) {
                // Editing existing product
                await updateProduct(productData as Product);
            } else {
                // Adding new product
                await addProduct(productData);
            }
            setIsModalOpen(false);
            setEditingProduct(null);
            await fetchProductsData(); // Re-fetch to see changes
        } catch (error) {
            const err = error as Error;
            alert(`Failed to save product: ${err.message}`);
        }
    };
    
    const handleCancel = () => {
        setIsModalOpen(false);
        setEditingProduct(null);
    };

    return (
        <div>
            {isModalOpen && <ProductForm product={editingProduct} onSave={handleSave} onCancel={handleCancel} />}
            
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Manage Products</h1>
                <button 
                    onClick={handleAddNew}
                    className="bg-accent text-white px-4 py-2 rounded-lg font-semibold hover:bg-accent-hover shadow-sm hover:shadow-md transition-all duration-300 flex items-center self-end sm:self-auto">
                    <Plus size={18} className="mr-2"/> Add Product
                </button>
            </div>
            
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-border">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-text-secondary">
                        <thead className="text-xs text-text-secondary uppercase bg-background-light">
                            <tr>
                                <th scope="col" className="px-6 py-3 font-semibold whitespace-nowrap">Product Name</th>
                                <th scope="col" className="px-6 py-3 font-semibold">Category</th>
                                <th scope="col" className="px-6 py-3 font-semibold">Featured</th>
                                <th scope="col" className="px-6 py-3 font-semibold">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                Array.from({ length: 5 }).map((_, index) => (
                                    <tr key={index} className="bg-white border-b border-border">
                                        <td className="px-6 py-4"><div className="h-4 bg-gray-200 rounded animate-pulse"></div></td>
                                        <td className="px-6 py-4"><div className="h-4 bg-gray-200 rounded animate-pulse"></div></td>
                                        <td className="px-6 py-4"><div className="h-4 bg-gray-200 rounded animate-pulse"></div></td>
                                        <td className="px-6 py-4"><div className="h-4 bg-gray-200 rounded animate-pulse"></div></td>
                                    </tr>
                                ))
                            ) : (
                                products.map(product => (
                                    <tr key={product.id} className="bg-white border-b border-border hover:bg-background-light">
                                        <td className="px-6 py-4 font-medium text-text-DEFAULT whitespace-nowrap">{product.name}</td>
                                        <td className="px-6 py-4">{product.categoryName}</td>
                                        <td className="px-6 py-4">
                                            <span className={`px-2 py-1 text-xs font-semibold rounded-full ${product.isFeatured ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                                               {product.isFeatured ? 'Yes' : 'No'}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex space-x-4">
                                                <button onClick={() => handleEdit(product)} className="text-blue-600 hover:text-blue-800"><Edit size={18}/></button>
                                                <button onClick={() => handleDelete(product.id, product.name)} className="text-red-600 hover:text-red-800"><Trash size={18}/></button>
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

export default AdminProductsPage;