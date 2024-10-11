"use client"

import React, { useState } from 'react';
import { ColumnDef } from '@tanstack/react-table';
import { useRouter } from 'next/navigation';
import { MoreHorizontal, LayoutGrid, List } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DataTable } from '@/components/ui/DataTable';
import AvatarWithFallback from '@/components/ui/AvatarWithFallback';
import SearchBar from './SearchBar';
import ActionSelect from './ActionSelect';

interface AgentListProps {
  viewMode: 'grid' | 'list';
  toggleViewMode: () => void;
}

interface Agent {
  id: number;
  name: string;
  model: string;
  knowledgeBase: string;
  deployment: number;
  avatar: string;
}

const agents: Agent[] = [
  { id: 740, name: 'Docchat Customer Support', model: 'GPT-4', knowledgeBase: 'Customer Support', deployment: 2, avatar: '#FF5733' },
  { id: 540, name: 'Gavie Marketing Agent', model: 'Claude 3', knowledgeBase: 'Marketing Questions', deployment: 4, avatar: '#33FF57' },
  { id: 647, name: 'XYZ Nursing Assistant', model: 'GPT3.5', knowledgeBase: 'Health Knowledge Base', deployment: 5, avatar: '#3357FF' },
  { id: 798, name: 'Cloudpro Marketing Automation', model: 'Falcon 180B', knowledgeBase: 'Marketing FAQ', deployment: 1, avatar: '#FFFF33' },
  { id: 177, name: 'Cloudpro Sales Assistant', model: 'GPT-4a', knowledgeBase: 'Sales Data', deployment: 4, avatar: '#FF33FF' },
];

const AgentList: React.FC<AgentListProps> = ({ viewMode, toggleViewMode }) => {
  const router = useRouter();
  const [rowSelection, setRowSelection] = useState({});

  const columns: ColumnDef<Agent>[] = [
    {
      id: 'select',
      header: ({ table }) => (
        <Checkbox
          checked={table.getIsAllPageRowsSelected()}
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: 'name',
      header: 'AGENTS',
      cell: ({ row }) => (
        <div 
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => router.push(`/agents/${row.original.id}`)}
        >
          <AvatarWithFallback name={row.original.name} avatarColor={row.original.avatar} />
          <span>{row.original.name}</span>
        </div>
      ),
    },
    {
      accessorKey: 'id',
      header: 'ID',
    },
    {
      accessorKey: 'model',
      header: 'MODEL',
    },
    {
      accessorKey: 'knowledgeBase',
      header: 'KNOWLEDGE BASE',
    },
    {
      accessorKey: 'deployment',
      header: 'DEPLOYMENT',
    },
    {
      id: 'actions',
      cell: ({ row }) => {
        const agent = row.original;
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem onClick={() => navigator.clipboard.writeText(agent.id.toString())}>
                Copy agent ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>View agent details</DropdownMenuItem>
              <DropdownMenuItem>Edit agent</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <SearchBar />
        <div className="flex items-center space-x-2">
          <ActionSelect />
          <Button onClick={toggleViewMode}>
            {viewMode === 'grid' ? <List className="h-4 w-4" /> : <LayoutGrid className="h-4 w-4" />}
          </Button>
        </div>
      </div>
      <DataTable
        columns={columns}
        data={agents}
        rowSelection={rowSelection}
        setRowSelection={setRowSelection}
      />
    </div>
  );
};

export default AgentList;