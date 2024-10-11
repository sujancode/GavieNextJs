"use client"

import React from 'react';
import { Search, LayoutGrid, List } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import IntegrationCard from './IntegrationCard';

interface IntegrationsProps {
  viewMode: 'grid' | 'list';
  toggleViewMode: () => void;
}

const Integrations: React.FC<IntegrationsProps> = ({ viewMode, toggleViewMode }) => {
  const integrations = [
    { id: 1, name: 'Slack', description: 'Connect your Slack workspace', icon: '🔵' },
    { id: 2, name: 'Salesforce', description: 'Sync data with Salesforce CRM', icon: '☁️' },
    { id: 3, name: 'Zendesk', description: 'Integrate with Zendesk support', icon: '🎧' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
        <h1 className="text-2xl font-bold">Integrations</h1>
        <Button onClick={toggleViewMode}>
          {viewMode === 'grid' ? <List className="w-4 h-4" /> : <LayoutGrid className="w-4 h-4" />}
        </Button>
      </div>

      <div className="relative w-full md:w-96">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
        <Input className="pl-10 w-full" placeholder="Search Integrations" />
      </div>

      <div className={`grid gap-6 ${viewMode === 'grid' ? 'sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
        {integrations.map((integration) => (
          <IntegrationCard key={integration.id} {...integration} />
        ))}
      </div>
    </div>
  );
};

export default Integrations;