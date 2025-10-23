

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

const AdminLoginPage: React.FC = () => {
  const [email, setEmail] = useState('admin@emphz.com');
  const [password, setPassword] = useState('password'); // Dummy password
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login, user } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple mock validation
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

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="text-center mb-6">
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNzAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCAyNzAgNTAiPjxzdHlsZT4udGV4dC1lbXBoeiB7IGZvbnQ6IGJvbGQgMzZweCAnUG9wcGlucycsIHNhbnMtc2VyaWY7IGZpbGw6ICMxZTI5M2I7IH0gLnRleHQtZ2xvYmFsIHsgZm9udDogNTAwIDM2cHggJ1BvcHBpbnMnLCBzYW5zLXNlcmlmOyBmaWxsOiAjNDc1NTY5OyB9IC5kb3QgeyBmaWxsOiAjMDZiNmQ0OyB9PC9zdHlsZT48dGV4dCB4PSIxMCIgeT0iMzgiIGNsYXNzPSJ0ZXh0LWVtcGh6Ij5FTVBIWjwvdGV4dD48dGV4dCB4PSIxNDgiIHk9IjM4IiBjbGFzcz0idGV4dC1nbG9iYWwiPkdsb2JhbDwvdGV4dD48Y2lyY2xlIGN4PSIyNTUiIGN5PSIzNSIgcj0iNSIgY2xhc3M9ImRvdCIvPjwvc3ZnPg==" alt="EMPHZ Global Logo" className="h-12 mx-auto" />
            <p className="text-gray-500 mt-2">Admin Portal</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-accent focus:border-accent sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-accent focus:border-accent sm:text-sm"
              />
            </div>
          </div>
          
          {error && <p className="text-red-500 text-sm">{error}</p>}

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-accent hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
            >
              Sign in
            </button>
          </div>
        </form>
         <div className="mt-4 text-center text-xs text-gray-500">
            <p>This is a simulated login. No real authentication is performed.</p>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginPage;