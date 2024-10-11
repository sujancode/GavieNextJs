'use client'

import React, { useState } from 'react'
import { Search, Trash2, Settings, LayoutGrid, List } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import KnowledgeBaseCard from './KnowledgeBaseCard'
import CreateKnowledgeBase from './CreateKnowledgeBase'

interface KnowledgeBaseProps {
  viewMode: 'grid' | 'list'
  toggleViewMode: () => void
}

const KnowledgeBase: React.FC<KnowledgeBaseProps> = ({
  viewMode,
  toggleViewMode,
}) => {
  const [showCreateKB, setShowCreateKB] = useState(false)

  const knowledgeBases = [
    {
      id: 1,
      title: 'How to Create an Invoice for First Time',
      progress: 75,
      description:
        'There is no better advertisement campaign that is low cost and also successful at the same time.',
    },
    {
      id: 2,
      title: 'Is UI Designer should have Coding Skill?',
      progress: 50,
      description:
        'There is no better advertisement campaign that is low cost and also successful at the same time.',
    },
    {
      id: 3,
      title: 'What the Best Platform for UI Design?',
      progress: 25,
      description:
        'There is no better advertisement campaign that is low cost and also successful at the same time.',
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
        <h1 className="text-2xl font-bold">Knowledge Base</h1>
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="outline" size="icon">
            <Trash2 className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Settings className="h-4 w-4" />
          </Button>
          <Button onClick={toggleViewMode}>
            {viewMode === 'grid' ? (
              <List className="w-4 h-4" />
            ) : (
              <LayoutGrid className="w-4 h-4" />
            )}
          </Button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
        <div className="relative flex-grow w-full md:w-auto">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <Input className="pl-10 w-full" placeholder="Search Knowledge Base" />
        </div>
        <Button
          onClick={() => setShowCreateKB(true)}
          className="w-full md:w-auto"
        >
          Create Knowledge Base
        </Button>
      </div>

      <div
        className={`grid gap-6 ${
          viewMode === 'grid' ? 'sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'
        }`}
      >
        {knowledgeBases.map((kb) => (
          <KnowledgeBaseCard key={kb.id} {...kb} />
        ))}
      </div>

      {showCreateKB && (
        <CreateKnowledgeBase onClose={() => setShowCreateKB(false)} />
      )}
    </div>
  )
}
export default KnowledgeBase
