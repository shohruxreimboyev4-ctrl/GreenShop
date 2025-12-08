import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ErrorBoundary from '../components/ErrorBoundary';

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <ErrorBoundary>
          <Outlet />
        </ErrorBoundary>
      </main>
      <Footer/>
    </div>
  );
};

export default Layout;