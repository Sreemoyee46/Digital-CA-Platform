import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Sidebar.css';

function Sidebar({ isOpen, onClose }) {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/login');
    if (onClose) onClose(); // Close sidebar on mobile
  };

  const handleNavClick = () => {
    if (onClose) onClose(); // Close sidebar on mobile when nav item is clicked
  };

  return (
    <div className={`sidebar ${isOpen ? 'sidebar-open' : ''}`}>
      <div className="sidebar-header">
        <span className="sidebar-title">Digital CA</span>
      </div>
      
      <nav className="sidebar-nav">
        <Link 
          to="/dashboard" 
          className={`sidebar-link ${location.pathname === '/dashboard' ? 'active' : ''}`}
          onClick={handleNavClick}
        >
          <span className="sidebar-icon">📊</span>
          <span>Dashboard</span>
        </Link>
        
        <Link 
          to="/form" 
          className={`sidebar-link ${location.pathname === '/form' ? 'active' : ''}`}
          onClick={handleNavClick}
        >
          <span className="sidebar-icon">📝</span>
          <span>Form Section</span>
        </Link>
        
        <Link 
          to="/invoice" 
          className={`sidebar-link ${location.pathname === '/invoice' ? 'active' : ''}`}
          onClick={handleNavClick}
        >
          <span className="sidebar-icon">🧾</span>
          <span>Invoice Creation</span>
        </Link>
        
        <Link 
          to="/charts" 
          className={`sidebar-link ${location.pathname === '/charts' ? 'active' : ''}`}
          onClick={handleNavClick}
        >
          <span className="sidebar-icon">📈</span>
          <span>Charts</span>
        </Link>
      </nav>
      
      <button className="sidebar-logout" onClick={handleLogout}>
        <span className="sidebar-icon">🚪</span>
        <span>Logout</span>
      </button>
    </div>
  );
}

export default Sidebar; 