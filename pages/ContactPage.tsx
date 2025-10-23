import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Phone, Mail, MessageSquare } from 'lucide-react';
import { addEnquiry } from '../services/mockApi';
import Breadcrumbs from '../components/Breadcrumbs';
import { SectionDivider } from '../components/SectionDivider';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { useToast } from '../hooks/useToast';
import { useI18n } from '../hooks/useI18n';

type FormFields = 'name' | 'email' | 'message';

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', company: '', email: '', phone: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'error'>('idle');
    const [errors, setErrors] = useState<Record<FormFields, string>>({ name: '', email: '', message: '' });
    const { addToast } = useToast();
    const { t } = useI18n();

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
                addToast(t('toasts.enquirySuccess'), 'success');
                setStatus('idle');
                setFormData({ name: '', company: '', email: '', phone: '', message: '' });
                setErrors({ name: '', email: '', message: '' });
            } catch (error) {
                setStatus('error');
                addToast(t('toasts.enquiryError'), 'error');
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

    const inputClasses = (hasError: boolean) =>
        `mt-1 block w-full px-4 py-3 border rounded-md shadow-sm focus:outline-none bg-white dark:bg-slate-700 dark:text-white ${
            hasError
                ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                : 'border-gray-300 dark:border-slate-600 focus:border-accent focus:ring-accent'
        }`;


    return (
        <div className="bg-background-light dark:bg-slate-900">
            <div className="bg-background dark:bg-slate-800 relative overflow-hidden">
                <div className="absolute inset-0">
                    <img src="https://images.unsplash.com/photo-1604147706283-d7119b5b822c?q=80&w=1920&auto=format&fit=crop" alt="Abstract background texture" className="w-full h-full object-cover opacity-50 dark:opacity-10" />
                    <div className="absolute inset-0 bg-white/95 dark:bg-slate-800/95"></div>
                </div>
                <div className="relative">
                    <Breadcrumbs links={breadcrumbLinks} />
                    <div className="container mx-auto px-6 py-16 text-center">
                        <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-primary dark:text-white mb-3 tracking-tight">Contact EMPHZ Global</h1>
                        <p className="text-lg text-text-secondary dark:text-slate-400">Get a Custom GRP Solution or Quotation from The GRP Experts.</p>
                    </div>
                </div>
            </div>
            
            <SectionDivider />

            <div className="container mx-auto px-6 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg border border-border dark:border-slate-700">
                        <h2 className="text-3xl font-bold font-heading text-primary dark:text-white mb-6">Contact Form</h2>
                        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-slate-300">Name</label>
                                <input ref={nameInputRef} type="text" name="name" id="name" required value={formData.name} onChange={handleChange} onBlur={handleBlur} className={inputClasses(!!errors.name)}/>
                                {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-slate-300">Email</label>
                                <input ref={emailInputRef} type="email" name="email" id="email" required value={formData.email} onChange={handleChange} onBlur={handleBlur} className={inputClasses(!!errors.email)}/>
                                {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
                            </div>
                            <div>
                                <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-slate-300">Company (Optional)</label>
                                <input type="text" name="company" id="company" value={formData.company} onChange={handleChange} className={inputClasses(false)}/>
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-slate-300">Phone (Optional)</label>
                                <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} className={inputClasses(false)}/>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-slate-300">Message</label>
                                <textarea ref={messageInputRef} name="message" id="message" rows={4} required value={formData.message} onChange={handleChange} onBlur={handleBlur} className={inputClasses(!!errors.message)}></textarea>
                                {errors.message && <p className="text-red-600 text-sm mt-1">{errors.message}</p>}
                            </div>
                            <button type="submit" disabled={status === 'submitting'} className="w-full bg-accent text-white py-3 px-4 border border-transparent rounded-md shadow-sm font-semibold hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent disabled:bg-gray-400 disabled:cursor-not-allowed text-base">
                                {status === 'submitting' ? 'Sending...' : 'Send Enquiry'}
                            </button>
                        </form>
                    </div>
                     <div className="space-y-8">
                         <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg border border-border dark:border-slate-700">
                             <h3 className="text-xl font-bold font-heading text-text-DEFAULT dark:text-slate-200 flex items-center mb-4"><MapPin className="text-accent mr-3"/>Head Office – Kerala</h3>
                             <address className="text-text-secondary dark:text-slate-400 not-italic">C/o Kunhi Ebrayi, Government Hospital Road, Nut Street, Vadakara – 673104, India</address>
                         </div>
                          <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg border border-border dark:border-slate-700">
                             <h3 className="text-xl font-bold font-heading text-text-DEFAULT dark:text-slate-200 flex items-center mb-4"><MapPin className="text-accent mr-3"/>Factory – Mysore, Karnataka</h3>
                             <address className="text-text-secondary dark:text-slate-400 not-italic">260/A, Hebbal Industrial Area, Mysore – 570016, India</address>
                         </div>
                          <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg border border-border dark:border-slate-700">
                            <a href="tel:+918648881888" className="flex items-center text-lg text-text-secondary dark:text-slate-400 hover:text-accent mb-4"><Phone className="mr-3"/>+91 86488 81888</a>
                            <a href="mailto:info@emphz.com" className="flex items-center text-lg text-text-secondary dark:text-slate-400 hover:text-accent"><Mail className="mr-3"/>info@emphz.com</a>
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