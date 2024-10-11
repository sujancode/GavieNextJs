'use client'

import React from 'react'
import { Search, Bell, MessageSquare, Settings, Menu } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import GavieLogo from '@/components/ui/GavieLogo'
import { ColorPaletteSwitcher } from '@/components/ui/ColorPaletteSwitcher'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const Header = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  return (
    <header className="flex justify-between items-center p-4 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex items-center space-x-4">
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={toggleSidebar}
        >
          <Menu className="w-5 h-5" />
        </Button>
        <GavieLogo className="h-8 text-primary" />
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input className="w-64 pl-10" placeholder="Search" />
        </div>
      </div>
      <div className="flex items-center space-x-2 sm:space-x-4">
        <ColorPaletteSwitcher />
        <Button variant="ghost" size="icon" className="hidden sm:inline-flex">
          <Bell className="w-5 h-5" />
        </Button>
        <Button variant="ghost" size="icon" className="hidden sm:inline-flex">
          <MessageSquare className="w-5 h-5" />
        </Button>
        <Button variant="ghost" size="icon" className="hidden sm:inline-flex">
          <Settings className="w-5 h-5" />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
              <Avatar className="h-8 w-8">
                <AvatarFallback>NK</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">
                  Nimesh Kuinkel
                </p>
                <p className="text-xs leading-none text-muted-foreground">
                  nimesh@example.com
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}

export default Header
