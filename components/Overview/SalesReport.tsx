"use client"

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', onlineSales: 750, offlineSales: 500 },
  { month: 'Feb', onlineSales: 820, offlineSales: 600 },
  { month: 'Mar', onlineSales: 750, offlineSales: 525 },
  { month: 'Apr', onlineSales: 900, offlineSales: 450 },
  { month: 'May', onlineSales: 850, offlineSales: 550 },
  { month: 'Jun', onlineSales: 950, offlineSales: 600 },
];

const SalesReport: React.FC = () => {
  return (
    <Card className="mt-4">
      <CardHeader>
        <CardTitle>Sales Report</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
            <YAxis stroke="hsl(var(--muted-foreground))" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'hsl(var(--card))', 
                borderColor: 'hsl(var(--border))',
                color: 'hsl(var(--card-foreground))'
              }} 
            />
            <Legend />
            <Bar dataKey="onlineSales" fill="#3b82f6" />
            <Bar dataKey="offlineSales" fill="#10b981" />
          </BarChart>
        </ResponsiveContainer>
        <div className="mt-4 text-sm text-muted-foreground">
          <p>March, 2019</p>
          <p>$750 Online Sales</p>
          <p>$525 Offline Sales</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default SalesReport;