import React from 'react';
import { ArrowUpIcon, ArrowDownIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: number;
  change: number;
  isPositive: boolean;
  comparedTo: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, isPositive, comparedTo }) => {
  return (
    <div className="bg-card p-6 rounded-lg border border-border">
      <h3 className="text-sm font-medium text-muted-foreground mb-2">{title}</h3>
      <div className="flex items-baseline">
        <span className="text-3xl font-bold mr-2">{value}</span>
        <span className={`text-sm font-medium ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
          {isPositive ? <ArrowUpIcon className="inline w-4 h-4" /> : <ArrowDownIcon className="inline w-4 h-4" />}
          {change}%
        </span>
      </div>
      <p className="text-xs text-muted-foreground mt-1">Compared to {comparedTo}</p>
    </div>
  );
};

export default StatCard;