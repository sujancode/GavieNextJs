"use client"

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { time: '00:00', requests: 100, responseTime: 200 },
  { time: '04:00', requests: 200, responseTime: 180 },
  { time: '08:00', requests: 300, responseTime: 250 },
  { time: '12:00', requests: 400, responseTime: 220 },
  { time: '16:00', requests: 350, responseTime: 230 },
  { time: '20:00', requests: 250, responseTime: 210 },
];

const PerformanceChart: React.FC = () => {
  return (
    <Card className="mt-4">
      <CardHeader>
        <CardTitle>Performance Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Line yAxisId="left" type="monotone" dataKey="requests" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line yAxisId="right" type="monotone" dataKey="responseTime" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default PerformanceChart;