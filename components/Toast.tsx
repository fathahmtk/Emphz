import React, { useEffect } from 'react';
import { useToastContainer, ToastMessage } from '../hooks/useToast';
import { CheckCircle, XCircle, Info, X } from 'lucide-react';

const toastConfig = {
    success: { icon: CheckCircle, className: 'bg-green-500' },
    error: { icon: XCircle, className: 'bg-red-500' },
    info: { icon: Info, className: 'bg-blue-500' },
};

const Toast: React.FC<{ toast: ToastMessage; onRemove: (id: number) => void }> = ({ toast, onRemove }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onRemove(toast.id);
        }, 5000); // Auto-dismiss after 5 seconds

        return () => clearTimeout(timer);
    }, [toast, onRemove]);
    
    const config = toastConfig[toast.type];
    const Icon = config.icon;

    return (
        <div className={`toast-item flex items-center p-4 rounded-lg shadow-lg text-white ${config.className}`}>
            <Icon className="mr-3 flex-shrink-0" size={24} />
            <p className="flex-grow font-semibold">{toast.message}</p>
            <button onClick={() => onRemove(toast.id)} className="ml-4 p-1 rounded-full hover:bg-white/20 flex-shrink-0">
                <X size={18} />
            </button>
        </div>
    );
};

export const ToastContainer: React.FC = () => {
    const { toasts, removeToast } = useToastContainer();

    return (
        <div className="fixed top-5 right-5 z-[100] space-y-3 w-full max-w-sm">
            {toasts.map(toast => (
                <Toast key={toast.id} toast={toast} onRemove={removeToast} />
            ))}
        </div>
    );
};
