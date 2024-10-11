import React from 'react';
import { GitCommit } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface JourneyCardProps {
  title: string;
  steps: number;
  completionRate: number;
}

const JourneyCard: React.FC<JourneyCardProps> = ({ title, steps, completionRate }) => {
  return (
    <Card className="border border-border hover:border-primary transition-colors duration-200 hover:shadow-md">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center text-sm text-muted-foreground">
          <GitCommit className="w-4 h-4 mr-2" />
          <span>{steps} steps</span>
        </div>
        <Progress value={completionRate} className="w-full" />
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium">{completionRate}% completion rate</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default JourneyCard;