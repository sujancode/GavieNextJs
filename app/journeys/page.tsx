// 'use client'
// import Journeys from '@/components/Journeys/Journeys'
// import { useState } from 'react'

// export default function JourneysPage() {
//   const [viewMode, setViewMode] = useState<'grid' | 'list'>('list')
//   return (
//     <Journeys
//       viewMode={viewMode}
//       toggleViewMode={() =>
//         setViewMode((prev) => (prev === 'grid' ? 'list' : 'grid'))
//       }
//     />
//   )
// }

export default function JourneysPage() {
  return (
    <div>
      <h1>Journeys</h1>
      <p>This is the default Journeys page.</p>
    </div>
  )
}
