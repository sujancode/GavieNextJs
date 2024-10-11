import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const data = [
  { month: 'Jan', customerInteractions: 400, tickets: 350 },
  { month: 'Feb', customerInteractions: 300, tickets: 400 },
  { month: 'Mar', customerInteractions: 500, tickets: 450 },
  { month: 'Apr', customerInteractions: 450, tickets: 470 },
  { month: 'May', customerInteractions: 550, tickets: 500 },
  { month: 'Jun', customerInteractions: 600, tickets: 550 },
  { month: 'Jul', customerInteractions: 550, tickets: 600 },
  { month: 'Aug', customerInteractions: 700, tickets: 510 },
  { month: 'Sep', customerInteractions: 650, tickets: 480 },
  { month: 'Oct', customerInteractions: 600, tickets: 520 },
  { month: 'Nov', customerInteractions: 550, tickets: 490 },
  { month: 'Dec', customerInteractions: 500, tickets: 450 },
]

const TicketsChart: React.FC = () => {
  return (
    <Card className="mt-4">
      <CardHeader>
        <CardTitle>Tickets</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
            <YAxis stroke="hsl(var(--muted-foreground))" />
            <Tooltip
              contentStyle={{
                backgroundColor: 'hsl(var(--card))',
                borderColor: 'hsl(var(--border))',
                color: 'hsl(var(--card-foreground))',
              }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="customerInteractions"
              stroke="#3b82f6"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="tickets" stroke="#10b981" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}

export default TicketsChart
