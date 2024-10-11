'use client'

import Integrations from '@/components/Integrations/Integrations'
import { useState } from 'react'

export default function IntegrationsPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list')
  return (
    <Integrations
      viewMode={viewMode}
      toggleViewMode={() =>
        setViewMode((prev) => (prev === 'grid' ? 'list' : 'grid'))
      }
    />
  )
}
