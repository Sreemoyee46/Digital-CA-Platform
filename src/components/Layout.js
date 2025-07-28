import React, { useState } from 'react';
import Sidebar from './Sidebar';
import './Layout.css';

function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="layout-root">
      {/* Mobile hamburger button */}
      <button 
        className="mobile-menu-toggle"
        onClick={toggleSidebar}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div className="sidebar-overlay" onClick={toggleSidebar}></div>
      )}

      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <main className="layout-main">
        {children}
      </main>
    </div>
  );
}

export default Layout; 