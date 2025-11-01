import React, { useState } from 'react';
import { SEO_DATA } from '../constants';
import MetaTags from '../components/MetaTags';
import Button from '../components/Button';
import { useProductCatalog } from '../hooks/useProductCatalog';
import { addProduct } from '../api';
import { useToast } from '../ToastContext';
import { Product } from '../types';

const AdminPage: React.FC = () => {
  const { addToast } = useToast();
  const productCatalog = useProductCatalog();

  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productCode, setProductCode] = useState('');
  const [category, setCategory] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const resetForm = () => {
    setProductName('');
    setProductDescription('');
    setProductCode('');
    setCategory('');
    setImageFile(null);
    // This is needed to clear the file input visually
    const fileInput = document.getElementById('imageUpload') as HTMLInputElement;
    if (fileInput) fileInput.value = '';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!productName || !productDescription || !productCode || !category) {
      addToast('Please fill out all required fields.', 'warning');
      return;
    }
    setIsSubmitting(true);
    try {
      const newProduct: Product = {
        name: productName,
        description: productDescription,
        code: productCode,
        // In a real app, this would involve uploading the image and getting a URL
        image: imageFile 
          ? URL.createObjectURL(imageFile) 
          : 'https://images.unsplash.com/photo-1581093450021-4a7360aa9a23?q=80&w=2070&auto=format&fit=crop',
      };
      
      await addProduct(newProduct, category);
      addToast(`Product "${productName}" added successfully!`, 'success');
      resetForm();

    } catch (error) {
      console.error(error);
      addToast((error as Error).message, 'error');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };


  const formInputStyles = `w-full px-4 py-2 border border-[var(--color-border)] rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-[var(--color-brand)]/80 focus:border-[var(--color-brand)] bg-white text-[var(--color-text-primary)] placeholder-[var(--color-text-secondary)]`;
  const fileInputStyles = `w-full text-sm text-[var(--color-text-secondary)] file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-[var(--color-text-primary)] hover:file:bg-gray-200 file:cursor-pointer`;

  return (
    <>
      <MetaTags
        title={SEO_DATA.admin.title}
        description={SEO_DATA.admin.description}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl lg:text-5xl font-bold text-center mb-10">Admin Portal</h1>
        <p className="text-center text-lg text-[var(--color-text-secondary)] mb-10 max-w-2xl mx-auto">
          Manage EMPHZ product catalog, specifications, and digital assets.
          New products added here will be reflected across the app immediately.
        </p>

        <div className="max-w-4xl mx-auto bg-[var(--color-surface-primary)] p-8 rounded-[var(--radius)] shadow-lg border border-[var(--color-border)]">
          <h2 className="text-2xl font-semibold mb-6">Add New Product</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="productName" className="block text-sm font-medium text-[var(--color-text-primary)] mb-1">Product Name *</label>
              <input
                type="text"
                id="productName"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                className={formInputStyles}
                required
              />
            </div>
            <div>
              <label htmlFor="productCode" className="block text-sm font-medium text-[var(--color-text-primary)] mb-1">Product Code *</label>
              <input
                type="text"
                id="productCode"
                placeholder="e.g., E-111"
                value={productCode}
                onChange={(e) => setProductCode(e.target.value)}
                className={formInputStyles}
                required
              />
            </div>
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-[var(--color-text-primary)] mb-1">Product Category *</label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className={formInputStyles}
                required
              >
                <option value="">Select Category</option>
                {productCatalog.map(cat => (
                  <option key={cat.code} value={cat.code}>{cat.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="productDescription" className="block text-sm font-medium text-[var(--color-text-primary)] mb-1">Product Description *</label>
              <textarea
                id="productDescription"
                rows={4}
                value={productDescription}
                onChange={(e) => setProductDescription(e.target.value)}
                className={formInputStyles}
                required
              ></textarea>
            </div>
            <div>
              <label htmlFor="imageUpload" className="block text-sm font-medium text-[var(--color-text-primary)] mb-1">Product Image (Optional)</label>
              <input
                type="file"
                id="imageUpload"
                accept="image/jpeg, image/png, image/webp"
                onChange={handleImageChange}
                className={fileInputStyles}
              />
              {imageFile && <p className="mt-2 text-sm text-[var(--color-text-secondary)]">Selected file: {imageFile.name}</p>}
            </div>
            
            <Button type="submit" variant="primary" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? 'Adding Product...' : 'Add Product to Catalog'}
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminPage;
