import React from 'react'
import { Zap } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface AutomationCardProps {
  title: string
  type: string
  status: 'Active' | 'Inactive'
}

const AutomationCard: React.FC<AutomationCardProps> = ({
  title,
  type,
  status,
}) => {
  return (
    <Card className="border border-border hover:border-primary transition-colors duration-200 hover:shadow-md">
      <CardHeader>
        <CardTitle className="flex justify-between items-start">
          <span>{title}</span>
          <Badge variant={status === 'Active' ? 'default' : 'secondary'}>
            {status}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center text-sm text-muted-foreground">
          <Zap className="w-4 h-4 mr-2" />
          <span>{type}</span>
        </div>
      </CardContent>
    </Card>
  )
}

export default AutomationCard
