// src/App.tsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './assets/components/Header';
import Footer from './assets/components/Footer';
import Homepage from './assets/pages/Homepage';
import ProductSubmission from './assets/pages/ProductSubmission';
import ReportPreview from './assets/pages/ReportPreview';
import Login from './assets/pages/Login';
import Dashboard from './assets/pages/Dashboard';

const App: React.FC = () => {
  const logoText = 'EthicalScan';
  

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Submit Product', path: '/submit-product' },
    { label: 'Reports', path: '/reports' },
    { label: 'Login', path: '/login' },
    { label: 'Dashboard', path: '/dashboard' }
  ];

  return (
    <BrowserRouter>
      <Header logoText={logoText} navItems={navItems} />
      <main className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/submit-product" element={<ProductSubmission />} />
          <Route path="/reports" element={<ReportPreview />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
