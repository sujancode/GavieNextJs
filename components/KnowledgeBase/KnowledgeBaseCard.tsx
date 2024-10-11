import React from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface KnowledgeBaseCardProps {
  title: string;
  progress: number;
  description: string;
}

const KnowledgeBaseCard: React.FC<KnowledgeBaseCardProps> = ({ title, progress, description }) => {
  return (
    <Card className="border border-border hover:border-primary transition-colors duration-200 hover:shadow-md">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">{description}</p>
        <Progress value={progress} className="w-full" />
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium">{progress}%</span>
          <Button variant="outline" size="sm">Edit Article</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default KnowledgeBaseCard;