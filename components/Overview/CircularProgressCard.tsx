import React from 'react'
import { Card, CardContent } from '@/components/ui/card'

interface CircularProgressCardProps {
  title: string
  percentage: number
  color: string
}

const CircularProgressCard: React.FC<CircularProgressCardProps> = ({
  title,
  percentage,
  color,
}) => {
  const circumference = 2 * Math.PI * 45
  const strokeDashoffset = circumference - (percentage / 100) * circumference

  return (
    <Card>
      <CardContent className="p-6 flex items-center">
        <svg className="w-24 h-24" viewBox="0 0 100 100">
          <circle
            className="text-muted stroke-current"
            strokeWidth="10"
            cx="50"
            cy="50"
            r="45"
            fill="transparent"
          />
          <circle
            className={`${color} stroke-current`}
            strokeWidth="10"
            strokeLinecap="round"
            cx="50"
            cy="50"
            r="45"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            transform="rotate(-90 50 50)"
          />
          <text
            x="50"
            y="50"
            fontFamily="Verdana"
            fontSize="20"
            textAnchor="middle"
            alignmentBaseline="middle"
            fill="currentColor"
          >
            {percentage}%
          </text>
        </svg>
        <div className="ml-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-muted-foreground">{percentage}% Rate</p>
        </div>
      </CardContent>
    </Card>
  )
}

export default CircularProgressCard
