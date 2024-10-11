import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface IntegrationCardProps {
  name: string;
  description: string;
  icon: string;
}

const IntegrationCard: React.FC<IntegrationCardProps> = ({ name, description, icon }) => {
  return (
    <Card className="border border-border hover:border-primary transition-colors duration-200 hover:shadow-md">
      <CardHeader>
        <CardTitle className="flex items-center space-x-3">
          <div className="text-3xl">{icon}</div>
          <span>{name}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">{description}</p>
        <Button variant="outline" className="w-full">Connect</Button>
      </CardContent>
    </Card>
  );
};

export default IntegrationCard;