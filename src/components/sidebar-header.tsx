import { Button } from './ui/button'
import {
  PencilEdit02FreeIcons,
  Search01FreeIcons,
} from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { SidebarHeader as ShadCNSidebarHeader } from '@/components/ui/sidebar'
import { ChevronUpDownIcon, Cog6ToothIcon } from '@heroicons/react/24/outline'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { Input } from './ui/input'

export function SidebarHeader() {
  return (
    <ShadCNSidebarHeader className="flex flex-row items-center">
      <div className="flex-1">
        <ProjectHeaderDropdown />
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

function ProjectHeaderDropdown() {
  const projects = [
    {
      name: 'Taskmaster',
      color: 'bg-orange-400',
    },
    {
      name: 'Lanes application',
      color: 'bg-indigo-400',
    },
    {
      name: 'Java breaker app',
      color: 'bg-blue-400',
    },
  ]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <button className="text-xs h-7 flex items-center flex gap-2 hover:bg-muted px-1 rounded-sm">
          <div className="bg-orange-400 size-5 flex items-center justify-center rounded-sm">
            <small className="font-semibold text-white">TA</small>
          </div>
          <span className="font-semibold">Taskmaster</span>
          <ChevronUpDownIcon className="size-4" strokeWidth={2} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-56 w-auto bg-secondary border">
        <DropdownMenuGroup>
          <DropdownMenuItem>My Account</DropdownMenuItem>
          <DropdownMenuItem>Invite Members</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Change Project</DropdownMenuSubTrigger>
            <DropdownMenuSubContent className="min-w-56 max-w-sm w-auto bg-secondary border">
              <DropdownMenuLabel>Recent</DropdownMenuLabel>
              {projects.map((project) => (
                <DropdownMenuItem key={project.name} className="ellipsis">
                  {project.name}
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator />
              <DropdownMenuLabel>Manage</DropdownMenuLabel>
              <DropdownMenuItem>Create Project</DropdownMenuItem>
              <DropdownMenuItem>Find Project</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
