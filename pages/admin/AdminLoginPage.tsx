
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { Shield } from 'lucide-react';

// Fix: Changed to a named export to align with the import in App.tsx.
export const AdminLoginPage: React.FC = () => {
  const [email, setEmail] = useState('admin@emphz.com');
  const [password, setPassword] = useState('password'); // Dummy password
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login, user } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === 'admin@emphz.com' && password) {
        login(email);
        navigate('/admin/dashboard');
    } else {
        setError('Invalid credentials. Use admin@emphz.com');
    }
  };
  
  if (user) {
    navigate('/admin/dashboard');
  }
  
  const logoSvg = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgwIiBoZWlnaHQ9IjMwIiB2aWV3Qm94PSIwIDAgMTgwIDMwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xNSAwTDI5IDhWMjJMMTUgMzBMMSAyMlY4TDE1IDBaIiBmaWxsPSIjMDA5NzlGIi8+PHRleHQgeD0iMzUiIHk9IjIyIiBmb250LWZhbWlseT0iT3JiaXRyb24sIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI5MDAiIGZvbnQtc2l6ZT0iMjAiIGZpbGw9InZhcigtLWNvbG9yLXRleHQtZGVmYXVsdCkiPkVNUFoiL3RleHQ+PHRleHQgeD0iMTAwIiB5PSIyMiIgZm9udC1mYW1pbHk9IlBvcHBpbnMsIHNhbnMtc2VyaWYiIGZvbnQtd2VpZ2h0PSI2MDAiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9InZhcigtLWNvbG9yLXRleHQtZGVmYXVsdCkiPkdsb2JhbDwvdGV4dD48L3N2Zz4=`;
    return (
        <div className="flex items-center justify-center min-h-screen bg-background-light dark:bg-primary">
            <div className="w-full max-w-md p-8 space-y-6 bg-white dark:bg-primary-dark rounded-lg shadow-xl border border-border dark:border-border-dark">
                <div className="flex flex-col items-center">
                    <img src={logoSvg} alt="EMPHZ Global" className="h-12 mb-4"/>
                    <h2 className="text-2xl font-bold text-text-DEFAULT dark:text-text-DEFAULT">Admin Login</h2>
                    <p className="text-sm text-text-secondary dark:text-text-secondary mt-1">Access your EMPHZ Global dashboard</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-text-secondary dark:text-text-secondary">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent bg-white dark:bg-slate-700 dark:text-white"
                        />
                    </div>
                    <div>
                        <label htmlFor="password"
                               className="block text-sm font-medium text-text-secondary dark:text-text-secondary">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-accent focus:border-accent bg-white dark:bg-slate-700 dark:text-white"
                        />
                    </div>
                    {error && <p className="text-sm text-danger text-center">{error}</p>}
                    <div>
                        <button
                            type="submit"
                            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-accent hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent">
                            Sign in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
