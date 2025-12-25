import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import {
  ArrowDown01FreeIcons,
  InboxFreeIcons,
  PencilEdit02FreeIcons,
  Search01FreeIcons,
  Target03FreeIcons,
} from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { Link } from '@tanstack/react-router'
import { Button } from './ui/button'

// Menu items.
const items = [
  {
    title: 'Inbox',
    url: '#',
    icon: () => <HugeiconsIcon icon={InboxFreeIcons} />,
  },
  {
    title: 'My Issues',
    url: '#',
    icon: () => <HugeiconsIcon icon={Target03FreeIcons} />,
  },
]

export function ProjectSidebar() {
  return (
    <Sidebar variant="inset">
      <SidebarHeader className="flex flex-row items-center">
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
          <Button variant="ghost" size="icon">
            <HugeiconsIcon icon={Search01FreeIcons} />
          </Button>
          <Button variant="ghost" size="icon">
            <HugeiconsIcon icon={PencilEdit02FreeIcons} />
          </Button>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton className="text-xs py-0 h-7.5">
                  <Link
                    to={item.url}
                    className="flex items-center w-full gap-2 h-full"
                  >
                    <div className="text-muted-foreground">
                      <item.icon />
                    </div>
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}
