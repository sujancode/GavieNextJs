import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { cn } from '@/lib/utils'

interface UserProfileProps {
  name: string
  email: string
  avatarUrl: string
}

const UserProfile: React.FC<UserProfileProps> = ({
  name,
  email,
  avatarUrl,
}) => {
  return (
    <div className="flex items-center space-x-3 p-2 rounded-lg bg-accent/50">
      <Avatar>
        <AvatarImage src={avatarUrl} alt={name} />
        <AvatarFallback>{name.charAt(0)}</AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <span className="font-semibold text-sm">{name}</span>
        <span className="text-xs text-muted-foreground">{email}</span>
      </div>
    </div>
  )
}

export default UserProfile
