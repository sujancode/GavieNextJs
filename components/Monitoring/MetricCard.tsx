import React from 'react'
import { ArrowUpIcon, ArrowDownIcon } from 'lucide-react'

interface MetricCardProps {
  title: string
  value: string
  change: number
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, change }) => {
  const isPositive = change >= 0

  return (
    <div className="bg-card rounded-lg p-6 space-y-2">
      <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
      <div className="flex items-baseline">
        <span className="text-2xl font-bold">{value}</span>
        <span
          className={`ml-2 text-sm font-medium ${isPositive ? 'text-green-500' : 'text-red-500'}`}
        >
          {isPositive ? (
            <ArrowUpIcon className="inline w-4 h-4" />
          ) : (
            <ArrowDownIcon className="inline w-4 h-4" />
          )}
          {Math.abs(change)}%
        </span>
      </div>
    </div>
  )
}

export default MetricCard
