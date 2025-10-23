import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { Shield } from 'lucide-react';

const AdminLoginPage: React.FC = () => {
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
  
  const logoSvg = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzM0IiBoZWlnaHQ9IjYwIiB2aWV3Qm94PSIwIDAgMzM0IDYwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8ZyBjbGlwLXBhdGg9InVybCgjY2xpcDApIj4KPHBhdGggZD0iTTI1LjMzMjEgMEw1MC42NjQyIDE0LjYyODlWNDMuODg2N0wyNS4zMzIxIDU4LjUxNTZMMC4wMDAwMyA0My44ODY3VjE0LjYyODlaIiBmaWxsPSIjMUExQzFGIi8+CjxwYXRoIGQ9Ik0yNS4zMzIxIDBMMTUuODgyMyA1LjQ0MDM3VjUyLjA3NTJMMjUuMzMyMSA1OC41MTU2IiBmaWxsPSIjMEE5NzlGIi8+CjxwYXRoIGQ9Ik0yNS4zMzIxIDBMMzQuNzgxOSA1LjQ0MDM3VjUyLjA3NTJMMjUuMzMyMSA1OC41MTU2IiBmaWxsPSIjMEE5NzlGIi8+CjxwYXRoIGQ9Ik0yNS4zMzIxIDBMMjAuNTU3MiAzLjI3MzA5VjU1LjI0MjVMMjUuMzMyMSA1OC41MTU2IiBmaWxsPSIjMEE5NzlGIi8+CjxwYXRoIGQ9Ik0yNS4zMzIxIDBMMjUuMzMyMSAwTDUwLjY2NDIgMTQuNjI4OVY0My44ODY3TDI1LjMzMjEgNTguNTE1NkwyNS4zMzIxIDU4LjUxNTYiIGZpbGw9IiMwMDk3OUYiLz4KPHBhdGggZD0iTTMwLjExMDcgMjEuOTA1MUwyNS4zMzU4IDI0Ljc4MDFMMjAuNTYwOCAyMS45MDUxVjE2LjEyNTFMMjUuMzM1OCAxMy4yNDUxTDMwLjExMDcgMTYuMTI1MVYyMS45MDUxWiIgZmlsbD0iI0JDRTVCMiIvPgo8cGF0aCBkPSJNMjUuMzM1OCAyNC43ODAxTDIwLjU2MDggMjEuOTA1MVYxNi4xMjUxTDI1LjMzNTggMTMuMjQ1MUwyNS4zMzU4IDI0Ljc4MDFaIiBmaWxsPSIjNDg2QTY5Ii8+CjxwYXRoIGQ9Ik0zMC4xMTA3IDM2LjYxMDFMMjUuMzM1OCAzOS40OTAxTDIwLjU2MDggMzYuNjEwMVYzMC44MzAxbDIuMzg3NSAxLjM4VjM1LjIzMDFsMi4zODc1IDEuMzhsMi4zODc1LTEuMzhWMzIuMjEwMWwyLjM4NzUtMS4zOFYzNi42MTAxWiIgZmlsbD0iI0JDRTVCMiIvPgo8cGF0aCBkPSJNMjUuMzM1OCAzOS40OTAxTDIwLjU2MDggMzYuNjEwMVYzMC44MzAxTDIyLjk0ODMgMzIuMjEwMVYzNS4yMzAxTDI1LjMzNTggMzYuNjEwMUwyNS4zMzU4IDM5LjQ5MDFaIiBmaWxsPSIjNDg2QTY5Ii8+CjwvZz4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAxKSI+CjxwYXRoIGQ9Ik03MC4yNjU2IDM0LjQzNzVINDguODI4MVYyMy4wNjI1SDcwLjI2NTZWNTEuNDM3NUg4MC4xNDA2VjIzLjA2MjVIOTMuMTU2MlYxMy41OTM4SDgwLjE0MDZWMGg2My43MDNWMTMuNTkzOEg5Ni41OTM4VjIzLjA2MjVIMTEyLjcxOVY1My41OTM4SDk2LjU5MzhWNDEuOTM3NUg4MC4xNDA2VjYzLjQ2ODhIMTIxLjc2NlY1MS40Mzc1SDEyNy4xNDFWMTMuNTkzOEgxMzUuMjY2VjBINzAuMjY1NlYzNC40Mzc1Wk0xMjEuNzY2IDIuODI4MTJWMTAuNzY1Nkg4My4wNTA4VjIuODI4MTJIMTIxLjc2NlpNOTMuNjQwNiA0MS45Mzc1SDkzLjE1NjJWMzIuNTYyNUg4MC4xNDA2VjM0LjQzNzVIMTEyLjcxOVYyMy4wNjI1SDEyNy4xNDFWNDEuOTM3NUg5My42NDA2WiIgZmlsbD0iIzFBMUMxRiIvPgo8cGF0aCBkPSJNMTQyLjI2NiAyMy4wNjI1SDIxNC4zVjEzLjU5MzhIMTMyLjI5N1Y2My40Njg4SDI0My4xMjVWNTMuOTA2MkgxNDIuMjY2VjQ0LjQzNzVIMjA1LjMyOFYzNC45MDYySDE0Mi4yNjZWMjMuMDYyNVoiIGZpbGw9IiMxQTFDMUYiLz4KPHBhdGggZD0iTTI3NC43MDMgNTMuOTA2MkgzMTIuNDIyVjQ0LjQzNzVIMjg0LjQ4NFYwSDI3NC43MDNWNTMuOTA2MloiIGZpbGw9IiMxQTFDMUYiLz4KPHBhdGggZD0iTTIyMy40MjIgNjMuNDY4OEgyMzUuMTg4VjBINDIuOTM3NVYxMy41OTM4SDIzOC4wMTZWMzQuOTA2MkgzMjUuMjAzVjQ0LjQzNzVIMjM4LjAxNlY2My40Njg4SDIyMy40MjJaIiBmaWxsPSIjMUExQzFGIi8+CjxwYXRoIGQ9Ik0yNDkuNTE2IDIuODI4MTJDMjQ4LjQxMyAyLjgyODEyIDI0Ny40NDYgMy4xNTI4OCAyNDYuNjE1IDMuODAyNDdDMjQ1Ljc4NCA0LjQ1MjA1IDI0NS4wNTggNS4yOTYyNiAyNDQuNDM4IDYuMzM1MTlDMjQzLjgxNyA3LjM3NDA2IDI0My4zNTIgOC41NzQ3NCAyNDMuMDQyIDkuOTM3MjRDMTY4LjQzOCAxMi40Mzc1IDEzMy4yMDMgMTMuNTkzOCAxMzIuMjk3IDEzLjU5MzhWMjMuMDYyNUgxNDIuMjY2VjM0LjkwNjJIMjA1LjMyOFY0NC40Mzc1SDE0Mi4yNjZWMzQuOTA2MkgxMzIuMjk3VjQ0LjQzNzVIMTQyLjI2NlY1M04OTA2MkgxMzIuMjk3VjYzLjQ2ODhIMjQzLjEyNVY1My45MDYySDI3NC43MDNWNDQuNDM3NUgyODQuNDg0VjM0LjkwNjJIMjc0LjcwM1YyMy4wNjI1SDI4NC40ODRWMTMuNTkzOEgyNzQuNzAzVjBIMjg0LjQ4NFYzNC45MDYySDMyNS4yMDNWMjMuMDYyNUgzMTIuNDIyVjEzLjU5MzhIMzEyLjYwOVYzNC45MDYySDMzMy41VjBINDAuNDUzMVYxMy41OTM4SDM3LjAyMzRWMEgyMjMuNDIyVjEzLjU5MzhIMjM1LjE4OFYwSDIzOC4wMTZWMTMuNTkzOEgyMjMuNDIyVjIzLjA2MjVIMjE0LjNWMTMuNTkzOEgyMTMuOTg0VjIzLjA2MjVIMjE0LjNDMTk5LjQ2OSAyMy4wNjI1IDE3OS45MjIgMjEuNTE1NiAxNjMuOTA2IDE4LjYyNUgxNjUuOTY5QzE2NC43NDQgMTguNTQxNSAxNjMuNjI2IDE4LjQ4OTUgMTYyLjYxNSAxOC40Njg4QzE2MS42MDQgMTguNDQ4IDE2MC42MzYgMTguNDM3NSAxNTkuNzAzIDE4LjQzNzVDMTQ0LjEzMSAxOC40Mzc1IDEyOS45MTMgMTkuMDQxMSAxMTcuMDQ3IDIwLjI1QzE2Ni43MDMgMjIuMDYyNSAyMDYuMTQxIDI0LjA2MjUgMjE3LjQzOCAyNC45Mzc1SDIyMi4zNzVWMTYuMjgxMkgxMzUuMjY2VjBINzAuMjY1NlYzNC40Mzc1SDQ4LjgyODFWMjMuMDYyNUg3MC4yNjU2VjUxLjQzNzVINDguODI4MVY2My40Njg4SDcwLjI2NTZWNTEuNDM3NUg4MC4xNDA2VjIzLjA2MjVIOTMuMTU2MlYxMy41OTM4SDgwLjE0MDZWMEg4My4wNTA4VjEzLjU5MzhIODAuMTQwNlYyMy4wNjI1SDk2LjU5MzhWMzIuNTYyNUg5My4xNTYyVjQxLjkzNzVIMTI3LjE0MVYyMy4wNjI1SDEzNS4yNjZWMTMuNTkzOEgxMjcuMTQxVjUxLjQzNzVIMTIxLjc2NlY2My40Njg4SDgwLjE0MDZWNDEuOTM3NUg5Ni41OTM4VjUzLjU5MzhIMTEyLjcxOVYyMy4wNjI1SDEwMC4wNDdWMzIuNTYyNUg5Ni41OTM4VjQxLjkzNzVIOzMuNTE1NlYyMy4wNjI1SDk2LjU5MzhWMTMuNTkzOEg5My4xNTYyVjIzLjA2MjVIODAuMTQwNlYzNC40Mzc1SDkzLjE1NjJWMzIuNTYyNUgxMDIuNTYyVjQxLjkzNzVIMTIxLjc2NlY1MS40Mzc1SDExMi43MTlWMzQuNDM3NUg5My42NDA2VjQxLjkzNzVIMTIxLjc2NlYxMy41OTM4SDEyNS44MjdWMEgxMzUuMjY2VjEzLjU5MzhIMTI3LjE0MVYyMy4wNjI1SDExMi43MTlWMTEuODc1SDEyMS43NjZWMEgxMjUuODI3QzEyOC4xODEgMi4zNTg4NiAxMjkuNjg4IDQuNTkzNzUgMTMwLjQ1MyA2LjY4NzVDMTMxLjIxOSA4Ljc4MTI1IDEzMS41OTQgMTAuODU5NCAxMzEuNTk0IDEyLjkyMThWMjAuODQzOEgxMzAuMDQ3VjE4Ljg3NUgxMjguNVYxNi45MDYySDEyNi45NTNWMTQuOTM3NUgxMjUuNDIyVjEyLjk2ODhIMTIzLjg5MVYxMS4wNjI1SDEyMi4zNDRWOS4xNTYyNUgxMjAuNzk3VjcuMjVIMTE5LjI1VjUuMzQzNzVIMTE3LjcwM1YzLjQzNzVIMTE2LjE1NlYxLjUyMDgzQzEwNy40MDMgMS4zMTI1IDk4LjEzOTIgMS4yNSA4OC41NDY5IDEuMjVWMEg0Mi45Mzc1VjEzLjU5MzhINDIuOTM3NVYwSDI0OS41MTZaIiBmaWxsPSIjMUExQzFGIi8+CjwvZz4KPC9zdmc+Cg==`;

  const inputClasses = "appearance-none block w-full px-4 py-3 border border-border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-teal focus:border-teal sm:text-sm bg-background";

  return (
    <div className="min-h-screen bg-background-light flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md border border-border">
        <div className="text-center mb-8">
            <img src={logoSvg} alt="EMPHZ Global Logo" className="h-12 mx-auto mb-4" />
            <h1 className="text-2xl font-bold font-heading text-graphite">Admin Portal</h1>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-graphite">
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
                className={inputClasses}
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-graphite">
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
                className={inputClasses}
              />
            </div>
          </div>
          
          {error && <p className="text-danger text-sm">{error}</p>}

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-semibold text-white bg-teal hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal"
            >
              Sign in
            </button>
          </div>
        </form>
         <div className="mt-6 text-center text-xs text-gray-500">
            <p className="flex items-center justify-center gap-2"><Shield size={14}/> This is a simulated login. No real authentication is performed.</p>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginPage;