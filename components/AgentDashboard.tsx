"use client"

import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar/Sidebar';
import Overview from './Overview/Overview';
import AgentList from './AgentList/AgentList';
import KnowledgeBase from './KnowledgeBase/KnowledgeBase';
import Journeys from './Journeys/Journeys';
import Automations from './Automations/Automations';
import Integrations from './Integrations/Integrations';
import Monitoring from './Monitoring/Monitoring';

type View = 'overview' | 'agents' | 'knowledgeBase' | 'journeys' | 'automations' | 'integrations' | 'monitoring';

const AgentDashboard: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentView, setCurrentView] = useState<View>('overview');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const toggleViewMode = () => setViewMode(prev => prev === 'grid' ? 'list' : 'grid');

  const renderCurrentView = () => {
    switch (currentView) {
      case 'overview':
        return <Overview />;
      case 'agents':
        return <AgentList viewMode={viewMode} toggleViewMode={toggleViewMode} />;
      case 'knowledgeBase':
        return <KnowledgeBase viewMode={viewMode} toggleViewMode={toggleViewMode} />;
      case 'journeys':
        return <Journeys viewMode={viewMode} toggleViewMode={toggleViewMode} />;
      case 'automations':
        return <Automations viewMode={viewMode} toggleViewMode={toggleViewMode} />;
      case 'integrations':
        return <Integrations viewMode={viewMode} toggleViewMode={toggleViewMode} />;
      case 'monitoring':
        return <Monitoring viewMode={viewMode} toggleViewMode={toggleViewMode} />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header toggleSidebar={toggleSidebar} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar 
          isOpen={sidebarOpen} 
          onClose={() => setSidebarOpen(false)} 
          currentView={currentView}
          setCurrentView={setCurrentView}
        />
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-6">
          {renderCurrentView()}
        </main>
      </div>
    </div>
  );
};

export default AgentDashboard;