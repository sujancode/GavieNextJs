'use client'

import AgentList from '@/components/AgentList/AgentList'
import { useState } from 'react'

export default function AgentsPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list')
  return (
    <AgentList
      viewMode={viewMode}
      toggleViewMode={() =>
        setViewMode((prev) => (prev === 'grid' ? 'list' : 'grid'))
      }
    />
  )
}
