'use client'

import React, { useState } from 'react'
import { Plus, Search, LayoutGrid, List } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import AutomationCard from './AutomationCard'
import AutomationFlow from './AutomationFlow'

interface AutomationsProps {
  viewMode: 'grid' | 'list'
  toggleViewMode: () => void
}

const Automations: React.FC<AutomationsProps> = ({
  viewMode,
  toggleViewMode,
}) => {
  const [showFlow, setShowFlow] = useState(false)
  const automations = [
    { id: 1, title: 'Welcome Email Sequence', type: 'Email', status: 'Active' },
    { id: 2, title: 'Lead Scoring', type: 'CRM', status: 'Inactive' },
    {
      id: 3,
      title: 'Support Ticket Assignment',
      type: 'Helpdesk',
      status: 'Active',
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
        <h1 className="text-2xl font-bold">Automations</h1>
        <div className="flex flex-wrap items-center gap-4">
          <Button onClick={() => setShowFlow(true)}>
            <Plus className="w-4 h-4 mr-2" />
            Create Automation
          </Button>
          <Button onClick={toggleViewMode}>
            {viewMode === 'grid' ? (
              <List className="w-4 h-4" />
            ) : (
              <LayoutGrid className="w-4 h-4" />
            )}
          </Button>
        </div>
      </div>

      <div className="relative w-full md:w-96">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
        <Input className="pl-10 w-full" placeholder="Search Automations" />
      </div>

      {showFlow ? (
        <AutomationFlow onClose={() => setShowFlow(false)} />
      ) : (
        <div
          className={`grid gap-6 ${viewMode === 'grid' ? 'sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}
        >
          {automations.map((automation) => (
            <AutomationCard
              key={automation.id}
              title={automation.title}
              type={automation.type}
              status={automation.status as 'Active' | 'Inactive'}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Automations
