import React, { useState, useEffect } from 'react';
import { Quotation } from '../types';
import { X, Plus, Trash } from 'lucide-react';

interface QuotationFormProps {
    quote: Omit<Quotation, 'id' | 'createdAt'> | Quotation | null;
    onSave: (quote: Omit<Quotation, 'id' | 'createdAt'> | Quotation) => void;
    onCancel: () => void;
}

const getInitialFormData = () => ({
    enquiryId: undefined,
    customer: '',
    email: '',
    validUntil: new Date(new Date().setDate(new Date().getDate() + 30)).toISOString().split('T')[0],
    subtotal: 0,
    tax: 0,
    total: 0,
    currency: 'INR',
    status: 'Draft' as Quotation['status'],
    items: [{ name: '', qty: 1, unit: 'pcs', price: 0 }],
    notes: '',
    pdfUrl: undefined,
});

export const QuotationForm: React.FC<QuotationFormProps> = ({ quote, onSave, onCancel }) => {
    const isEditing = quote && 'id' in quote;
    const [formData, setFormData] = useState(getInitialFormData());

    useEffect(() => {
        if (quote) {
            setFormData({
                ...getInitialFormData(),
                ...quote,
                validUntil: (quote.validUntil ? new Date(quote.validUntil) : new Date(new Date().setDate(new Date().getDate() + 30))).toISOString().split('T')[0],
                items: quote.items && quote.items.length > 0 ? quote.items : [{ name: '', qty: 1, unit: 'pcs', price: 0 }],
            });
        } else {
             setFormData(getInitialFormData());
        }
    }, [quote]);
    
    useEffect(() => {
        const subtotal = formData.items.reduce((acc, item) => acc + item.qty * item.price, 0);
        const tax = subtotal * 0.18; // Assuming 18% tax
        const total = subtotal + tax;
        setFormData(prev => ({ ...prev, subtotal, tax, total }));
    }, [formData.items]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleItemChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const newItems = [...formData.items];
        const itemToUpdate = { ...newItems[index] };
        (itemToUpdate as any)[name] = name === 'qty' || name === 'price' ? parseFloat(value) || 0 : value;
        newItems[index] = itemToUpdate;
        setFormData(prev => ({ ...prev, items: newItems }));
    };
    
    const addItem = () => {
        setFormData(prev => ({ ...prev, items: [...prev.items, { name: '', qty: 1, unit: 'pcs', price: 0 }] }));
    };

    const removeItem = (index: number) => {
        setFormData(prev => ({ ...prev, items: prev.items.filter((_, i) => i !== index) }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const finalData = {
            ...formData,
            validUntil: formData.validUntil ? new Date(formData.validUntil) : undefined,
        }
        const saveData = isEditing ? { ...quote, ...finalData } : finalData;
        onSave(saveData);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-start pt-10 pb-10 overflow-y-auto">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl m-4">
                <div className="p-6 border-b flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-gray-800">{isEditing ? `Edit Quotation QT-${String((quote as Quotation)?.id).padStart(4, '0')}` : 'Create New Quotation'}</h2>
                    <button onClick={onCancel} className="text-gray-500 hover:text-gray-800"><X size={24} /></button>
                </div>
                <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="customer" className="block text-sm font-medium text-gray-700">Customer Name</label>
                            <input type="text" name="customer" id="customer" value={formData.customer} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent"/>
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Customer Email</label>
                            <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent"/>
                        </div>
                        <div>
                            <label htmlFor="validUntil" className="block text-sm font-medium text-gray-700">Valid Until</label>
                            <input type="date" name="validUntil" id="validUntil" value={formData.validUntil} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent"/>
                        </div>
                        <div>
                            <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
                            <select name="status" id="status" value={formData.status} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent">
                                <option value="Draft">Draft</option>
                                <option value="Sent">Sent</option>
                                <option value="Approved">Approved</option>
                                <option value="Rejected">Rejected</option>
                            </select>
                        </div>
                    </div>

                    <div className="pt-4">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Line Items</h3>
                        <div className="space-y-2">
                            {formData.items.map((item, index) => (
                                <div key={index} className="grid grid-cols-12 gap-2 items-center">
                                    <input type="text" name="name" placeholder="Item Name" value={item.name} onChange={e => handleItemChange(index, e)} className="col-span-5 px-2 py-1 border border-gray-300 rounded-md"/>
                                    <input type="number" name="qty" placeholder="Qty" value={item.qty} onChange={e => handleItemChange(index, e)} className="col-span-2 px-2 py-1 border border-gray-300 rounded-md"/>
                                    <input type="text" name="unit" placeholder="Unit" value={item.unit} onChange={e => handleItemChange(index, e)} className="col-span-2 px-2 py-1 border border-gray-300 rounded-md"/>
                                    <input type="number" name="price" placeholder="Price" value={item.price} onChange={e => handleItemChange(index, e)} className="col-span-2 px-2 py-1 border border-gray-300 rounded-md"/>
                                    <button type="button" onClick={() => removeItem(index)} className="col-span-1 text-red-500 hover:text-red-700 flex justify-center"><Trash size={18}/></button>
                                </div>
                            ))}
                        </div>
                        <button type="button" onClick={addItem} className="mt-2 text-sm text-accent font-semibold hover:text-accent-hover flex items-center"><Plus size={16} className="mr-1"/> Add Item</button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                         <div>
                            <label htmlFor="notes" className="block text-sm font-medium text-gray-700">Notes</label>
                            <textarea name="notes" id="notes" rows={4} value={formData.notes || ''} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent"></textarea>
                        </div>
                         <div className="text-right space-y-1 pt-5">
                            <p>Subtotal: <span className="font-semibold">{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(formData.subtotal)}</span></p>
                            <p>Tax (18%): <span className="font-semibold">{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(formData.tax)}</span></p>
                            <p className="text-xl font-bold">Total: <span className="font-bold">{new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(formData.total)}</span></p>
                        </div>
                    </div>

                    <div className="pt-4 border-t flex justify-end gap-3">
                        <button type="button" onClick={onCancel} className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg font-semibold hover:bg-gray-300 transition-colors">Cancel</button>
                        <button type="submit" className="bg-accent text-white px-4 py-2 rounded-lg font-semibold hover:bg-accent-hover transition-colors">Save Quotation</button>
                    </div>
                </form>
            </div>
        </div>
    );
};