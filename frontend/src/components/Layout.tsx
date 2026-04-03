import { Outlet, useLocation, useNavigate } from 'react-router';
import { useEffect } from 'react';
import Navbar from './Navbar';
import { getCurrentUser } from '../utils/auth';

export default function Layout() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // prevent app from starting on /admin for non-admin users
    if (location.pathname === '/admin') {
      const user = getCurrentUser();
      if (!user || user.role !== 'admin') {
        navigate('/', { replace: true });
      }
    }
  }, [location.pathname, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
