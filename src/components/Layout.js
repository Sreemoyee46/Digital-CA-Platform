import React from 'react';
import Sidebar from './Sidebar';
import './Layout.css';

function Layout({ children }) {
  return (
    <div className="layout-root">
      <Sidebar />
      <main className="layout-main">
        {children}
      </main>
    </div>
  );
}

export default Layout; 