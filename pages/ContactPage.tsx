import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Phone, Mail, MessageSquare } from 'lucide-react';
import { addEnquiry } from '../services/mockApi';
import { SuccessAnimation } from '../components/SuccessAnimation';
import Breadcrumbs from '../components/Breadcrumbs';
import { SectionDivider } from '../components/SectionDivider';
import { usePageMetadata } from '../hooks/usePageMetadata';

type FormFields = 'name' | 'email' | 'message';

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', company: '', email: '', phone: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [errors, setErrors] = useState<Record<FormFields, string>>({ name: '', email: '', message: '' });

    const nameInputRef = useRef<HTMLInputElement>(null);
    const emailInputRef = useRef<HTMLInputElement>(null);
    const messageInputRef = useRef<HTMLTextAreaElement>(null);

    const inputRefs = {
        name: nameInputRef,
        email: emailInputRef,
        message: messageInputRef,
    };

    usePageMetadata(
        "Contact EMPHZ Global | Get a Custom GRP Solution Quote",
        "Ready to start your project? Contact EMPHZ, The GRP Company, for a custom quotation on our market-leading GRP enclosures, kiosks, and composite solutions.",
        "Contact EMPHZ, get GRP quote, custom GRP solutions, GRP enquiry, The GRP Company, EMPHZ Global"
    );

    useEffect(() => {
        if (status === 'success') {
            const timer = setTimeout(() => {
                setStatus('idle');
            }, 4000); // Reset form status after 4 seconds to allow another submission
            return () => clearTimeout(timer);
        }
    }, [status]);
    
    const validateField = (name: FormFields, value: string): string => {
        switch (name) {
            case 'name':
                return value.trim() ? '' : 'Your name is required.';
            case 'email':
                if (!value.trim()) return 'Your email is required.';
                if (!/\S+@\S+\.\S+/.test(value)) return 'Please enter a valid email address.';
                return '';
            case 'message':
                return value.trim() ? '' : 'Please enter your message.';
            default:
                return '';
        }
    };

    const validateForm = (): boolean => {
        const newErrors: Record<FormFields, string> = { name: '', email: '', message: '' };
        let isValid = true;

        (Object.keys(errors) as FormFields[]).forEach(field => {
            const error = validateField(field, formData[field]);
            if (error) {
                newErrors[field] = error;
                isValid = false;
            }
        });

        setErrors(newErrors);
        return isValid;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    
    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target as { name: FormFields, value: string };
        const error = validateField(name, value);
        setErrors(prev => ({ ...prev, [name]: error }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const isValid = validateForm();
        if (isValid) {
            setStatus('submitting');
            try {
                await addEnquiry(formData);
                setStatus('success');
                setFormData({ name: '', company: '', email: '', phone: '', message: '' });
                setErrors({ name: '', email: '', message: '' });
            } catch (error) {
                setStatus('error');
            }
        } else {
            // Find the first field with an error and focus it
            const firstErrorField = (Object.keys(errors) as FormFields[]).find(field => validateField(field, formData[field]));
            if (firstErrorField && inputRefs[firstErrorField]?.current) {
                inputRefs[firstErrorField].current?.focus();
            }
        }
    };

    const breadcrumbLinks = [
        { name: 'Home', path: '/' },
        { name: 'Contact' }
    ];

    return (
        <div className="bg-background-light">
            <div className="bg-background relative overflow-hidden">
                <div className="absolute inset-0">
                    <img src="https://images.unsplash.com/photo-1604147706283-d7119b5b822c?q=80&w=1920&auto=format&fit=crop" alt="Abstract background texture" className="w-full h-full object-cover opacity-50" />
                    <div className="absolute inset-0 bg-white/95"></div>
                </div>
                <div className="relative">
                    <Breadcrumbs links={breadcrumbLinks} />
                    <div className="container mx-auto px-6 py-12 text-center">
                        <h1 className="text-4xl font-bold font-heading text-primary mb-2">Contact EMPHZ Global</h1>
                        <p className="text-lg text-text-secondary">Get a custom GRP solution or quotation from The GRP Experts.</p>
                    </div>
                </div>
            </div>
            
            <SectionDivider />

            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="bg-white p-8 rounded-lg shadow-lg border border-border">
                        <h2 className="text-2xl font-bold font-heading text-primary mb-6">Contact Form</h2>
                        {status === 'success' ? (
                            <SuccessAnimation message="Thank you! Your enquiry has been sent." />
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                    <input ref={nameInputRef} type="text" name="name" id="name" required value={formData.name} onChange={handleChange} onBlur={handleBlur} className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none ${errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-accent focus:ring-accent'}`}/>
                                    {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                    <input ref={emailInputRef} type="email" name="email" id="email" required value={formData.email} onChange={handleChange} onBlur={handleBlur} className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none ${errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-accent focus:ring-accent'}`}/>
                                    {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
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
                                    <textarea ref={messageInputRef} name="message" id="message" rows={4} required value={formData.message} onChange={handleChange} onBlur={handleBlur} className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none ${errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-accent focus:ring-accent'}`}></textarea>
                                    {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
                                </div>
                                <button type="submit" disabled={status === 'submitting'} className="w-full bg-accent text-white py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent disabled:bg-gray-400 disabled:cursor-not-allowed">
                                    {status === 'submitting' ? 'Sending...' : 'Send Enquiry'}
                                </button>
                                {status === 'error' && <p className="text-red-600 mt-2 text-center">Something went wrong. Please try again.</p>}
                            </form>
                        )}
                    </div>
                     <div className="space-y-8">
                         <div className="bg-white p-8 rounded-lg shadow-lg border border-border">
                             <h3 className="text-xl font-bold font-heading text-text-DEFAULT flex items-center mb-4"><MapPin className="text-accent mr-3"/>Head Office – Kerala</h3>
                             <address className="text-text-secondary not-italic">C/o Kunhi Ebrayi, Government Hospital Road, Nut Street, Vadakara – 673104, India</address>
                         </div>
                          <div className="bg-white p-8 rounded-lg shadow-lg border border-border">
                             <h3 className="text-xl font-bold font-heading text-text-DEFAULT flex items-center mb-4"><MapPin className="text-accent mr-3"/>Factory – Mysore, Karnataka</h3>
                             <address className="text-text-secondary not-italic">260/A, Hebbal Industrial Area, Mysore – 570016, India</address>
                         </div>
                          <div className="bg-white p-8 rounded-lg shadow-lg border border-border">
                            <a href="tel:+918648881888" className="flex items-center text-lg text-text-secondary hover:text-accent mb-4"><Phone className="mr-3"/>+91 86488 81888</a>
                            <a href="mailto:info@emphz.com" className="flex items-center text-lg text-text-secondary hover:text-accent"><Mail className="mr-3"/>info@emphz.com</a>
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