import { Button } from '@/components/ui/button'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { Icon } from '@/icons'
import {
  AdjustmentsHorizontalIcon,
  Square2StackIcon,
} from '@heroicons/react/24/solid'
import { FilterMailIcon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { createFileRoute } from '@tanstack/react-router'

const lanes = [
  {
    status: 'todo',
    title: 'todos',
    issues: [{}],
  },
]

export const Route = createFileRoute('/$project/issues/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <header className="border-b flex items-center px-3 gap-2 py-1">
        <SidebarTrigger />
        <Button variant="outline" size="xs" className="text-muted-foreground">
          <Square2StackIcon />
          <span>All issues</span>
        </Button>
        <Button variant="outline" size="xs" className="text-muted-foreground">
          <Icon name="progress" value={6} />
          <span>Active</span>
        </Button>
        <Button variant="outline" size="xs" className="text-muted-foreground">
          <Icon name="progress" value={13} dashed />
          <span>Backlog</span>
        </Button>
      </header>
      {/* sub header */}
      <header className="px-3 py-2 border-b border-input flex items-center justify-between">
        <Button
          size="sm"
          variant="ghost"
          className="h-6.5 text-xs text-muted-foreground"
        >
          <HugeiconsIcon icon={FilterMailIcon} /> Filter
        </Button>
        <Button
          size="sm"
          variant="secondary"
          className="h-6.5 text-xs text-muted-foreground"
        >
          <AdjustmentsHorizontalIcon /> Display
        </Button>
      </header>
    </div>
  )
}
