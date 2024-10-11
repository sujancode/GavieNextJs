import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { ArrowDownIcon } from 'lucide-react'

const data = [
  { date: '1', visitors: 400 },
  { date: '2', visitors: 300 },
  { date: '3', visitors: 500 },
  { date: '4', visitors: 450 },
  { date: '5', visitors: 550 },
  { date: '6', visitors: 600 },
  { date: '7', visitors: 550 },
]

const VisitorsChart: React.FC = () => {
  return (
    <Card className="mt-4">
      <CardHeader>
        <CardTitle>Visitors</CardTitle>
        <div className="flex items-center">
          <span className="text-2xl font-bold mr-2">10,254</span>
          <span className="text-red-500 flex items-center">
            <ArrowDownIcon className="w-4 h-4 mr-1" />
            1.5%
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={100}>
          <AreaChart data={data}>
            <Area
              type="monotone"
              dataKey="visitors"
              stroke="#3b82f6"
              fill="#3b82f6"
              fillOpacity={0.2}
            />
          </AreaChart>
        </ResponsiveContainer>
        <p className="text-sm text-muted-foreground mt-2">Visitors this year</p>
      </CardContent>
    </Card>
  )
}

export default VisitorsChart
