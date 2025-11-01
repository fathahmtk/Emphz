
import React, { useState } from 'react';
import { DIGITAL_BUSINESS_CARD_DATA, SEO_DATA } from '../constants';
import MetaTags from '../components/MetaTags';
import Button from '../components/Button';
import { useProductCatalog } from '../hooks/useProductCatalog';
import { addProduct } from '../api';
import { useToast } from '../ToastContext';
import { Product, DigitalBusinessCardData } from '../types';
import CopyButton from '../components/CopyButton';

const AdminPage: React.FC = () => {
  const { addToast } = useToast();
  const productCatalog = useProductCatalog();

  // State for Product Form
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productCode, setProductCode] = useState('');
  const [category, setCategory] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // State for DBC Generator
  const [dbcData, setDbcData] = useState<DigitalBusinessCardData>(DIGITAL_BUSINESS_CARD_DATA);
  const [generatedUrl, setGeneratedUrl] = useState('');


  const resetProductForm = () => {
    setProductName('');
    setProductDescription('');
    setProductCode('');
    setCategory('');
    setImageFile(null);
    const fileInput = document.getElementById('imageUpload') as HTMLInputElement;
    if (fileInput) fileInput.value = '';
  };

  const handleProductSubmit = async (e: React.FormEvent) => {
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
        image: imageFile 
          ? URL.createObjectURL(imageFile) 
          : 'https://images.unsplash.com/photo-1581093450021-4a7360aa9a23?q=80&w=2070&auto=format&fit=crop',
      };
      
      await addProduct(newProduct, category);
      addToast(`Product "${productName}" added successfully!`, 'success');
      resetProductForm();

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

  const handleDbcChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const keys = name.split('.');

    if (keys.length > 1) {
        const [section, key] = keys;
        setDbcData(prev => {
            const updatedSection = { ...(prev as any)[section], [key]: value };
            return { ...prev, [section]: updatedSection };
        });
    } else {
        setDbcData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleGenerateUrl = (e: React.MouseEvent) => {
    e.preventDefault();
    const jsonString = JSON.stringify(dbcData);
    const base64String = btoa(jsonString);
    const url = `${window.location.origin}${window.location.pathname}#/dbc?data=${encodeURIComponent(base64String)}`;
    setGeneratedUrl(url);
    addToast('Shareable link generated!', 'info');
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

        {/* Add Product Form */}
        <div className="max-w-4xl mx-auto bg-[var(--color-surface-primary)] p-8 rounded-[var(--radius)] shadow-lg border border-[var(--color-border)] mb-12">
          <h2 className="text-2xl font-semibold mb-6">Add New Product</h2>
          <form onSubmit={handleProductSubmit} className="space-y-6">
            <div>
              <label htmlFor="productName" className="block text-sm font-medium text-[var(--color-text-primary)] mb-1">Product Name *</label>
              <input type="text" id="productName" value={productName} onChange={(e) => setProductName(e.target.value)} className={formInputStyles} required />
            </div>
            <div>
              <label htmlFor="productCode" className="block text-sm font-medium text-[var(--color-text-primary)] mb-1">Product Code *</label>
              <input type="text" id="productCode" placeholder="e.g., E-111" value={productCode} onChange={(e) => setProductCode(e.target.value)} className={formInputStyles} required />
            </div>
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-[var(--color-text-primary)] mb-1">Product Category *</label>
              <select id="category" value={category} onChange={(e) => setCategory(e.target.value)} className={formInputStyles} required >
                <option value="">Select Category</option>
                {productCatalog.map(cat => (<option key={cat.code} value={cat.code}>{cat.name}</option>))}
              </select>
            </div>
            <div>
              <label htmlFor="productDescription" className="block text-sm font-medium text-[var(--color-text-primary)] mb-1">Product Description *</label>
              <textarea id="productDescription" rows={4} value={productDescription} onChange={(e) => setProductDescription(e.target.value)} className={formInputStyles} required ></textarea>
            </div>
            <div>
              <label htmlFor="imageUpload" className="block text-sm font-medium text-[var(--color-text-primary)] mb-1">Product Image (Optional)</label>
              <input type="file" id="imageUpload" accept="image/jpeg, image/png, image/webp" onChange={handleImageChange} className={fileInputStyles} />
              {imageFile && <p className="mt-2 text-sm text-[var(--color-text-secondary)]">Selected file: {imageFile.name}</p>}
            </div>
            <Button type="submit" variant="primary" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? 'Adding Product...' : 'Add Product to Catalog'}
            </Button>
          </form>
        </div>

        {/* DBC Generator Form */}
        <div className="max-w-4xl mx-auto bg-[var(--color-surface-primary)] p-8 rounded-[var(--radius)] shadow-lg border border-[var(--color-border)]">
          <h2 className="text-2xl font-semibold mb-6">Digital Business Card Generator</h2>
          <form className="space-y-8">
            <fieldset>
              <legend className="text-lg font-medium text-[var(--color-text-primary)] mb-3">Personal Details</legend>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="dbcName" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1">Full Name</label>
                  <input type="text" id="dbcName" name="name" value={dbcData.name} onChange={handleDbcChange} className={formInputStyles} />
                </div>
                <div>
                  <label htmlFor="dbcTitle" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1">Job Title</label>
                  <input type="text" id="dbcTitle" name="title" value={dbcData.title} onChange={handleDbcChange} className={formInputStyles} />
                </div>
              </div>
            </fieldset>
            <fieldset>
              <legend className="text-lg font-medium text-[var(--color-text-primary)] mb-3">Contact Information</legend>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="dbcPhone" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1">Phone</label>
                  <input type="tel" id="dbcPhone" name="contact.phone" value={dbcData.contact.phone} onChange={handleDbcChange} className={formInputStyles} />
                </div>
                <div>
                  <label htmlFor="dbcEmail" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1">Email</label>
                  <input type="email" id="dbcEmail" name="contact.email" value={dbcData.contact.email} onChange={handleDbcChange} className={formInputStyles} />
                </div>
              </div>
            </fieldset>
             <fieldset>
              <legend className="text-lg font-medium text-[var(--color-text-primary)] mb-3">Social Media Links</legend>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="url" name="socials.linkedin" placeholder="LinkedIn URL" value={dbcData.socials.linkedin} onChange={handleDbcChange} className={formInputStyles} />
                  <input type="url" name="socials.twitter" placeholder="Twitter/X URL" value={dbcData.socials.twitter} onChange={handleDbcChange} className={formInputStyles} />
                  <input type="url" name="socials.facebook" placeholder="Facebook URL" value={dbcData.socials.facebook} onChange={handleDbcChange} className={formInputStyles} />
                  <input type="url" name="socials.instagram" placeholder="Instagram URL" value={dbcData.socials.instagram} onChange={handleDbcChange} className={formInputStyles} />
              </div>
            </fieldset>

            <Button onClick={handleGenerateUrl} variant="primary" className="w-full">
              Generate Sharable Link
            </Button>

            {generatedUrl && (
              <div className="mt-6 p-4 bg-black/20 rounded-md border border-[var(--color-border)]">
                <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-2">Generated Link:</label>
                <div className="flex items-center gap-2">
                  <input type="text" readOnly value={generatedUrl} className={`${formInputStyles} flex-grow`} />
                  <CopyButton textToCopy={generatedUrl} />
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminPage;