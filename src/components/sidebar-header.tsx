import { Button } from './ui/button'
import {
  PencilEdit02FreeIcons,
  Search01FreeIcons,
} from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { SidebarHeader as ShadCNSidebarHeader } from '@/components/ui/sidebar'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

export function SidebarHeader() {
  return (
    <ShadCNSidebarHeader className="flex flex-row items-center">
      <div className="flex-1">
        <button className="text-xs h-7 flex items-center flex gap-2 hover:bg-muted px-1 rounded-sm">
          <div className="bg-orange-400 size-5 flex items-center justify-center rounded-sm">
            <small className="font-semibold text-white">TA</small>
          </div>
          <span className="font-semibold">Taskmaster</span>
          <ChevronDownIcon className="size-3" strokeWidth={2} />
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
