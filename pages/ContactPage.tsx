import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, MessageSquare } from 'lucide-react';
import { addEnquiry } from '../services/mockApi';
import { SuccessAnimation } from '../components/SuccessAnimation';

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', company: '', email: '', phone: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [errors, setErrors] = useState({ name: '', email: '', message: '' });

    useEffect(() => {
        if (status === 'success') {
            const timer = setTimeout(() => {
                setStatus('idle');
            }, 4000); // Reset form status after 4 seconds to allow another submission
            return () => clearTimeout(timer);
        }
    }, [status]);

    const validate = () => {
        const newErrors = { name: '', email: '', message: '' };
        let isValid = true;

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required.';
            isValid = false;
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required.';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email address is invalid.';
            isValid = false;
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required.';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        // Clear error when user starts typing
        if (errors[name as keyof typeof errors]) {
            setErrors({ ...errors, [name]: '' });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (validate()) {
            setStatus('submitting');
            try {
                await addEnquiry(formData);
                setStatus('success');
                setFormData({ name: '', company: '', email: '', phone: '', message: '' });
                setErrors({ name: '', email: '', message: '' });
            } catch (error) {
                setStatus('error');
            }
        }
    };

    return (
        <div className="bg-background-light">
            <div className="container mx-auto px-6 py-16">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-primary mb-2">Get in Touch</h1>
                    <p className="text-lg text-text-secondary">We're here to help with your project needs. Contact us or fill out the form below.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold text-primary mb-6">Contact Form</h2>
                        {status === 'success' ? (
                            <SuccessAnimation message="Thank you! Your enquiry has been sent." />
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                    <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent ${errors.name ? 'border-red-500' : 'border-gray-300'}`}/>
                                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                    <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent ${errors.email ? 'border-red-500' : 'border-gray-300'}`}/>
                                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                                </div>
                                <div>
                                    <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company (Optional)</label>
                                    <input type="text" name="company" id="company" value={formData.company} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent"/>
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone (Optional)</label>
                                    <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent"/>
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                    <textarea name="message" id="message" rows={4} required value={formData.message} onChange={handleChange} className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent ${errors.message ? 'border-red-500' : 'border-gray-300'}`}></textarea>
                                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                                </div>
                                <button type="submit" disabled={status === 'submitting'} className="w-full bg-accent text-white py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent disabled:bg-gray-400 disabled:cursor-not-allowed">
                                    {status === 'submitting' ? 'Sending...' : 'Send Enquiry'}
                                </button>
                                {status === 'error' && <p className="text-red-600 mt-2 text-center">Something went wrong. Please try again.</p>}
                            </form>
                        )}
                    </div>
                     <div className="space-y-8">
                         <div className="bg-white p-8 rounded-lg shadow-lg">
                             <h3 className="text-xl font-bold text-text-DEFAULT flex items-center mb-4"><MapPin className="text-primary mr-3"/>Head Office – Kerala</h3>
                             <address className="text-text-secondary not-italic">C/o Kunhi Ebrayi, Government Hospital Road, Nut Street, Vadakara – 673104, India</address>
                         </div>
                          <div className="bg-white p-8 rounded-lg shadow-lg">
                             <h3 className="text-xl font-bold text-text-DEFAULT flex items-center mb-4"><MapPin className="text-primary mr-3"/>Factory – Mysore, Karnataka</h3>
                             <address className="text-text-secondary not-italic">260/A, Hebbal Industrial Area, Mysore – 570016, India</address>
                         </div>
                          <div className="bg-white p-8 rounded-lg shadow-lg">
                            <a href="tel:+918648881888" className="flex items-center text-lg text-text-secondary hover:text-primary mb-4"><Phone className="mr-3"/>+91 86488 81888</a>
                            <a href="mailto:info@emphz.com" className="flex items-center text-lg text-text-secondary hover:text-primary"><Mail className="mr-3"/>info@emphz.com</a>
                         </div>
                         <a href="https://wa.me/918648881888" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full bg-accent text-white py-3 px-4 rounded-md shadow-sm font-semibold hover:bg-accent-hover transition">
                            <MessageSquare className="mr-2"/> Chat on WhatsApp
                         </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;