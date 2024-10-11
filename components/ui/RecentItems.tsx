import React from 'react';
import AvatarWithFallback from './AvatarWithFallback';

interface RecentItemsProps {
  title: string;
  items: Array<{
    color: string;
    initials: string;
    name: string;
    count?: number;
  }>;
}

const RecentItems: React.FC<RecentItemsProps> = ({ title, items }) => {
  return (
    <div className="p-4">
      <h3 className="mb-2 text-sm font-semibold text-muted-foreground">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <AvatarWithFallback name={item.name} color={item.color} />
            <span className="ml-2 text-sm">{item.name}</span>
            {item.count !== undefined && (
              <span className="ml-auto text-xs bg-muted text-muted-foreground rounded-full px-2 py-1">
                {item.count}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentItems;