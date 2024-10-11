'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { LayoutGrid, List } from 'lucide-react'
import StatCard from './StatCard'
import TicketsChart from './TicketsChart'
import CircularProgressCard from './CircularProgressCard'
import VisitorsChart from './VisitorsChart'
import AverageCustomerInteraction from './AverageCustomerInteraction'
import SalesReport from './SalesReport'

const Overview: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  const toggleViewMode = () => {
    setViewMode((prev) => (prev === 'grid' ? 'list' : 'grid'))
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Overview</h1>
        <div className="flex items-center space-x-4">
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Show: All Projects" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Projects</SelectItem>
              <SelectItem value="active">Active Projects</SelectItem>
              <SelectItem value="completed">Completed Projects</SelectItem>
            </SelectContent>
          </Select>
          <Button onClick={toggleViewMode}>
            {viewMode === 'grid' ? (
              <List className="w-4 h-4" />
            ) : (
              <LayoutGrid className="w-4 h-4" />
            )}
          </Button>
          <Button>Generate Report</Button>
        </div>
      </div>

      <div
        className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4' : 'grid-cols-1'}`}
      >
        <StatCard
          title="Customer Support Queries"
          value={982}
          change={2.5}
          isPositive={true}
          comparedTo="21340 last year"
        />
        <StatCard
          title="Calls"
          value={357}
          change={0.5}
          isPositive={true}
          comparedTo="1002 last year"
        />
        <StatCard
          title="Tickets"
          value={110}
          change={1.5}
          isPositive={false}
          comparedTo="165 last year"
        />
        <StatCard
          title="Agents"
          value={5}
          change={2.5}
          isPositive={true}
          comparedTo="510500 last year"
        />
      </div>

      <div
        className={`grid gap-6 ${viewMode === 'grid' ? 'lg:grid-cols-3' : 'grid-cols-1'}`}
      >
        <div className={viewMode === 'grid' ? 'lg:col-span-2' : ''}>
          <TicketsChart />
        </div>
        <div
          className={`space-y-6 ${viewMode === 'grid' ? '' : 'lg:grid lg:grid-cols-3 lg:gap-6'}`}
        >
          <CircularProgressCard
            title="Ticket Solving Rate"
            percentage={68}
            color="text-primary"
          />
          <CircularProgressCard
            title="Satisfied Customers"
            percentage={76}
            color="text-green-500"
          />
          <VisitorsChart />
        </div>
      </div>

      <div
        className={`grid gap-6 ${viewMode === 'grid' ? 'lg:grid-cols-2' : 'grid-cols-1'}`}
      >
        <AverageCustomerInteraction />
        <SalesReport />
      </div>
    </div>
  )
}

export default Overview
