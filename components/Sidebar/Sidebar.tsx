import React from 'react';
import { cn } from "@/lib/utils";
import { LayoutDashboard, Users, BookOpen, GitFork, Zap, Plug, BarChart3, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import RecentItems from '@/components/ui/RecentItems';
import UserProfile from '@/components/ui/UserProfile';

type View = 'overview' | 'agents' | 'knowledgeBase' | 'journeys' | 'automations' | 'integrations' | 'monitoring';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  currentView: View;
  setCurrentView: (view: View) => void;
}

const sidebarItems = [
  { icon: <LayoutDashboard className="w-4 h-4" />, text: "Overview", view: 'overview' as View },
  { icon: <Users className="w-4 h-4" />, text: "Agent", view: 'agents' as View },
  { icon: <BookOpen className="w-4 h-4" />, text: "Knowledge Base", view: 'knowledgeBase' as View },
  { icon: <GitFork className="w-4 h-4" />, text: "Journeys", view: 'journeys' as View },
  { icon: <Zap className="w-4 h-4" />, text: "Automations", view: 'automations' as View },
  { icon: <Plug className="w-4 h-4" />, text: "Integrations", view: 'integrations' as View },
  { icon: <BarChart3 className="w-4 h-4" />, text: "Monitoring", view: 'monitoring' as View },
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, currentView, setCurrentView }) => {
  return (
    <aside className={cn(
      "fixed inset-y-0 left-0 z-50 w-64 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-r flex flex-col transition-transform duration-200 ease-in-out lg:relative",
      isOpen ? 'translate-x-0' : '-translate-x-full',
      'lg:translate-x-0'
    )}>
      <div className="flex justify-between items-center p-4 lg:hidden">
        <span className="font-semibold">Menu</span>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="w-5 h-5" />
        </Button>
      </div>
      <div className="p-4">
        <UserProfile
          name="Nimesh Kuinkel"
          email="nimesh@example.com"
          avatarUrl="https://source.unsplash.com/100x100/?portrait"
        />
      </div>
      <nav className="space-y-2 p-4 flex-grow">
        {sidebarItems.map((item, index) => (
          <SidebarItem 
            key={index} 
            {...item} 
            active={item.view === currentView}
            onClick={() => setCurrentView(item.view)}
          />
        ))}
      </nav>
      <RecentItems
        title="RECENT AGENT"
        items={[
          { color: "bg-green-500", initials: "SA", name: "Sales", count: 120 },
          { color: "bg-purple-500", initials: "MA", name: "Marketing" },
          { color: "bg-blue-500", initials: "CA", name: "Call Center" },
          { color: "bg-pink-500", initials: "EA", name: "Error Handling" },
        ]}
      />
    </aside>
  );
};

const SidebarItem = ({ icon, text, active = false, onClick }) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant={active ? "secondary" : "ghost"}
          className={cn(
            "w-full justify-start",
            active && "font-semibold",
            !active && "text-muted-foreground"
          )}
          onClick={onClick}
        >
          {icon}
          <span className="ml-2">{text}</span>
        </Button>
      </TooltipTrigger>
      <TooltipContent side="right" className="lg:hidden">
        <p>{text}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

export default Sidebar;