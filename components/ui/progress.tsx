'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

// Custom Progress Root component
const ProgressRoot = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { value?: number }
>(({ className, value, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'relative h-4 w-full overflow-hidden rounded-full bg-secondary',
      className
    )}
    {...props}
  >
    <div
      className="h-full w-full flex-1 bg-primary transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </div>
))
ProgressRoot.displayName = 'ProgressRoot'

// Custom Progress Indicator component
const ProgressIndicator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, style, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('h-full w-full flex-1 bg-primary transition-all', className)}
    style={style}
    {...props}
  />
))
ProgressIndicator.displayName = 'ProgressIndicator'

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressRoot>,
  React.ComponentPropsWithoutRef<typeof ProgressRoot>
>(({ className, value, ...props }, ref) => (
  <ProgressRoot
    ref={ref}
    className={cn(
      'relative h-4 w-full overflow-hidden rounded-full bg-secondary',
      className
    )}
    value={value}
    {...props}
  >
    <ProgressIndicator
      className="h-full w-full flex-1 bg-primary transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressRoot>
))
Progress.displayName = ProgressRoot.displayName

export { Progress }
