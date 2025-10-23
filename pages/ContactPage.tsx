
import React, { useState } from 'react';
import { MapPin, Phone, Mail, MessageSquare } from 'lucide-react';
import { addEnquiry } from '../services/mockApi';

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', company: '', email: '', phone: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        try {
            await addEnquiry(formData);
            setStatus('success');
            setFormData({ name: '', company: '', email: '', phone: '', message: '' });
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <div className="bg-neutral-light">
            <div className="container mx-auto px-6 py-16">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-primary mb-2">Get in Touch</h1>
                    <p className="text-lg text-gray-600">We're here to help with your project needs. Contact us or fill out the form below.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold text-primary mb-6">Contact Form</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"/>
                            </div>
                             <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"/>
                            </div>
                            <div>
                                <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company (Optional)</label>
                                <input type="text" name="company" id="company" value={formData.company} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"/>
                            </div>
                             <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                <textarea name="message" id="message" rows={4} required value={formData.message} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"></textarea>
                            </div>
                             <button type="submit" disabled={status === 'submitting'} className="w-full bg-primary text-white py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:bg-gray-400">
                                {status === 'submitting' ? 'Sending...' : 'Send Enquiry'}
                             </button>
                             {status === 'success' && <p className="text-green-600 mt-2">Thank you! Your enquiry has been sent.</p>}
                             {status === 'error' && <p className="text-red-600 mt-2">Something went wrong. Please try again.</p>}
                        </form>
                    </div>
                     <div className="space-y-8">
                         <div className="bg-white p-8 rounded-lg shadow-lg">
                             <h3 className="text-xl font-bold text-gray-800 flex items-center mb-4"><MapPin className="text-primary mr-3"/>Head Office – Kerala</h3>
                             <address className="text-gray-600 not-italic">C/o Kunhi Ebrayi, Government Hospital Road, Nut Street, Vadakara – 673104, India</address>
                         </div>
                          <div className="bg-white p-8 rounded-lg shadow-lg">
                             <h3 className="text-xl font-bold text-gray-800 flex items-center mb-4"><MapPin className="text-primary mr-3"/>Factory – Mysore, Karnataka</h3>
                             <address className="text-gray-600 not-italic">260/A, Hebbal Industrial Area, Mysore – 570016, India</address>
                         </div>
                          <div className="bg-white p-8 rounded-lg shadow-lg">
                            <a href="tel:+918648881888" className="flex items-center text-lg text-gray-700 hover:text-primary mb-4"><Phone className="mr-3"/>+91 86488 81888</a>
                            <a href="mailto:info@emphz.com" className="flex items-center text-lg text-gray-700 hover:text-primary"><Mail className="mr-3"/>info@emphz.com</a>
                         </div>
                         <a href="https://wa.me/918648881888" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full bg-green-500 text-white py-3 px-4 rounded-md shadow-sm font-semibold hover:bg-green-600 transition">
                            <MessageSquare className="mr-2"/> Chat on WhatsApp
                         </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
