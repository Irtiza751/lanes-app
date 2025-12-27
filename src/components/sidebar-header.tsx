import { Button } from './ui/button'
import {
  ArrowDown01FreeIcons,
  PencilEdit02FreeIcons,
  Search01FreeIcons,
} from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { SidebarHeader as ShadCNSidebarHeader } from '@/components/ui/sidebar'

export function SidebarHeader() {
  return (
    <ShadCNSidebarHeader className="flex flex-row items-center">
      <div className="flex-1">
        <button className="text-xs h-7 flex items-center flex gap-2 hover:bg-muted px-1 rounded-sm">
          <div className="bg-orange-400 size-4.5 flex items-center justify-center rounded-sm">
            <small className="font-semibold">TA</small>
          </div>
          <span className="font-semibold">Taskmaster</span>
          <HugeiconsIcon icon={ArrowDown01FreeIcons} size={14} />
        </button>
      </div>
      <div className="flex justify-end gpa-2">
        <Button variant="ghost" size="icon-sm">
          <HugeiconsIcon icon={Search01FreeIcons} />
        </Button>
        <Button variant="secondary" size="icon-sm">
          <HugeiconsIcon icon={PencilEdit02FreeIcons} />
        </Button>
      </div>
    </ShadCNSidebarHeader>
  )
}
