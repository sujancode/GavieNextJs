// 'use client'
// import Monitoring from '@/components/Monitoring/Monitoring'
// import { useState } from 'react'

// export default function MonitoringPage() {
//   const [viewMode, setViewMode] = useState<'grid' | 'list'>('list')
//   return (
//     <Monitoring
//       viewMode={viewMode}
//       toggleViewMode={() =>
//         setViewMode((prev) => (prev === 'grid' ? 'list' : 'grid'))
//       }
//     />
//   )
// }

export default function MonitoringPage() {
  return (
    <div>
      <h1>Monitoring</h1>
      <p>This is the default Monitoring page.</p>
    </div>
  )
}
