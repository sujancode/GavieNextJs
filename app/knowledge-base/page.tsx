'use client'
import KnowledgeBase from '@/components/KnowledgeBase/KnowledgeBase'
import { useState } from 'react'

export default function KnowledgeBasePage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list')
  return (
    <KnowledgeBase
      viewMode={viewMode}
      toggleViewMode={() =>
        setViewMode((prev) => (prev === 'grid' ? 'list' : 'grid'))
      }
    />
  )
}
