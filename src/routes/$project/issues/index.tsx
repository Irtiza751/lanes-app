import { Button } from '@/components/ui/button'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { Icon } from '@/icons'
import { Square2StackIcon } from '@heroicons/react/24/outline'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/$project/issues/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <header className="border-b flex items-center px-3 gap-2 py-1">
        <SidebarTrigger />
        <Button variant="outline" size="sm" className="text-muted-foreground">
          <Square2StackIcon />
          <span>All issues</span>
        </Button>
        <Button variant="outline" size="sm" className="text-muted-foreground">
          <Icon name="progress" value={6} />
          <span>Active</span>
        </Button>
        <Button variant="outline" size="sm" className="text-muted-foreground">
          <Icon name="progress" value={13} dashed />
          <span>Backlog</span>
        </Button>
      </header>
    </div>
  )
}
