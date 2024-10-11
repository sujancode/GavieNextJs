'use client'

import Automations from '@/components/Automations/Automations'
import { useState } from 'react'

export default function AutomationsPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list')
  return (
    <Automations
      viewMode={viewMode}
      toggleViewMode={() =>
        setViewMode((prev) => (prev === 'grid' ? 'list' : 'grid'))
      }
    />
  )
}
