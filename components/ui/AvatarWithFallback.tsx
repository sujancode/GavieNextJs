import React from 'react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

interface AvatarWithFallbackProps {
  name: string;
  avatarColor: string;
}

const AvatarWithFallback: React.FC<AvatarWithFallbackProps> = ({ name, avatarColor }) => {
  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();

  return (
    <Avatar>
      <AvatarFallback style={{ backgroundColor: avatarColor }}>{initials}</AvatarFallback>
    </Avatar>
  );
};

export default AvatarWithFallback;