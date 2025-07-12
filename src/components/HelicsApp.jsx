import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Dashboard from '../pages/Dashboard';
import BrandAnalysis from '../pages/BrandAnalysis';
import Competitors from '../pages/Competitors';
import Strategy from '../pages/Strategy';
import CalendarView from '../pages/CalendarView';
import ContentGenerator from '../pages/ContentGenerator';
import WarMode from '../pages/WarMode';
import Team from '../pages/Team';

const HelicsApp = () => {
  const [currentView, setCurrentView] = useState('dashboard');

  const renderCurrentView = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard />;
      case 'brand-analysis':
        return <BrandAnalysis />;
      case 'competitors':
        return <Competitors />;
      case 'strategy':
        return <Strategy />;
      case 'calendar':
        return <CalendarView />;
      case 'content-generator':
        return <ContentGenerator />;
      case 'war-mode':
        return <WarMode />;
      case 'team':
        return <Team />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar currentView={currentView} setCurrentView={setCurrentView} />
      
      <div className="ml-64 p-8">
        <div className="max-w-7xl mx-auto">
          {renderCurrentView()}
        </div>
      </div>
    </div>
  );
};

export default HelicsApp;