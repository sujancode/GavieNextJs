'use client'

import React from 'react'
import { LayoutGrid, List } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import MetricCard from './MetricCard'
import PerformanceChart from './PerformanceChart'

interface MonitoringProps {
  viewMode: 'grid' | 'list'
  toggleViewMode: () => void
}

const Monitoring: React.FC<MonitoringProps> = ({
  viewMode,
  toggleViewMode,
}) => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
        <h1 className="text-2xl font-bold">Monitoring</h1>
        <div className="flex flex-wrap items-center gap-4">
          <Select defaultValue="24h">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select time range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="24h">Last 24 hours</SelectItem>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
            </SelectContent>
          </Select>
          <Button onClick={toggleViewMode}>
            {viewMode === 'grid' ? (
              <List className="w-4 h-4" />
            ) : (
              <LayoutGrid className="w-4 h-4" />
            )}
          </Button>
        </div>
      </div>

      <div
        className={`grid gap-4 ${viewMode === 'grid' ? 'sm:grid-cols-2 lg:grid-cols-4' : 'grid-cols-1'}`}
      >
        <MetricCard title="Total Requests" value="1,234" change={5.7} />
        <MetricCard title="Avg. Response Time" value="250ms" change={-2.3} />
        <MetricCard title="Error Rate" value="0.5%" change={-0.2} />
        <MetricCard title="Active Users" value="789" change={12.5} />
      </div>

      <PerformanceChart />
    </div>
  )
}

export default Monitoring
