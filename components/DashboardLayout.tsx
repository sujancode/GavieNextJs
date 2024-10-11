'use client'

import React, { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Header from './Header'
import Sidebar from './Sidebar/Sidebar'

type View =
  | 'overview'
  | 'agents'
  | 'knowledgeBase'
  | 'journeys'
  | 'automations'
  | 'integrations'
  | 'monitoring'

interface DashboardLayoutProps {
  children: React.ReactNode
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [currentView, setCurrentView] = useState<View>('overview')
  const pathname = usePathname()

  useEffect(() => {
    const view = pathname.split('/')[1] as View
    setCurrentView(view || 'overview')
  }, [pathname])

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen)

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header toggleSidebar={toggleSidebar} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout
