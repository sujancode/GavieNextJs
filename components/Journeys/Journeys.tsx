'use client'

import React from 'react'
import { Plus, Search, LayoutGrid, List } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import JourneyCard from './JourneyCard'

interface JourneysProps {
  viewMode: 'grid' | 'list'
  toggleViewMode: () => void
}

const Journeys: React.FC<JourneysProps> = ({ viewMode, toggleViewMode }) => {
  const journeys = [
    { id: 1, title: 'Customer Onboarding', steps: 5, completionRate: 75 },
    { id: 2, title: 'Product Purchase Flow', steps: 3, completionRate: 60 },
    { id: 3, title: 'Support Ticket Resolution', steps: 4, completionRate: 80 },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
        <h1 className="text-2xl font-bold">Journeys</h1>
        <div className="flex flex-wrap items-center gap-4">
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Create Journey
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
        <Input className="pl-10 w-full" placeholder="Search Journeys" />
      </div>

      <div
        className={`grid gap-6 ${
          viewMode === 'grid' ? 'sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'
        }`}
      >
        {journeys.map((journey) => (
          <JourneyCard key={journey.id} {...journey} />
        ))}
      </div>
    </div>
  )
}

export default Journeys
