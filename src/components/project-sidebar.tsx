import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import {
  ArchiveFreeIcons,
  ArrowDown01FreeIcons,
  Copy01FreeIcons,
  CubeFreeIcons,
  InboxFreeIcons,
  LicenseDraftFreeIcons,
  ReplayFreeIcons,
  Settings02FreeIcons,
  Target03FreeIcons,
} from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { Link } from '@tanstack/react-router'
import { SidebarHeader } from './sidebar-header'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from './ui/collapsible'

import { Route as ProjectRoute } from '@/routes/$project/route'

// Menu items.
const items = [
  {
    title: 'Inbox',
    url: '/$project/inbox',
    icon: () => <HugeiconsIcon icon={InboxFreeIcons} />,
  },
  {
    title: 'My Issues',
    url: '/$project/my-issues',
    icon: () => <HugeiconsIcon icon={Target03FreeIcons} />,
  },
  {
    title: 'Drafts',
    url: '/$project/drafts',
    icon: () => <HugeiconsIcon icon={LicenseDraftFreeIcons} />,
  },
]

export function ProjectSidebar() {
  const { project } = ProjectRoute.useParams()

  return (
    <Sidebar variant="inset">
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton className="py-0 h-7.5">
                  <Link
                    to={item.url}
                    className="flex items-center w-full gap-2 h-full"
                    params={{ project }}
                  >
                    <div className="text-muted-foreground">
                      <item.icon />
                    </div>
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
            <Collapsible defaultOpen>
              <SidebarMenuItem>
                <CollapsibleTrigger className="w-full group">
                  <SidebarMenuButton className="text-xs py-0 h-7.5">
                    <span className="text-muted-foreground">Project</span>
                    <HugeiconsIcon
                      icon={ArrowDown01FreeIcons}
                      className="group-data-[state=closed]:-rotate-90 transition-transform"
                    />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuButton>
                    <HugeiconsIcon
                      className="text-muted-foreground"
                      icon={Copy01FreeIcons}
                    />
                    <span>Issues</span>
                  </SidebarMenuButton>
                  <SidebarMenuButton>
                    <HugeiconsIcon
                      className="text-muted-foreground"
                      icon={ReplayFreeIcons}
                    />
                    <span>Sprints</span>
                  </SidebarMenuButton>
                  <SidebarMenuButton>
                    <HugeiconsIcon
                      className="text-muted-foreground"
                      icon={CubeFreeIcons}
                    />
                    <span>Epics</span>
                  </SidebarMenuButton>
                  <SidebarMenuButton>
                    <HugeiconsIcon
                      className="text-muted-foreground"
                      icon={ArchiveFreeIcons}
                    />
                    <span>Archive</span>
                  </SidebarMenuButton>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="py-0">
              <Link
                to="/$project"
                className="flex items-center w-full gap-2 h-full"
                params={{ project }}
              >
                <HugeiconsIcon icon={Settings02FreeIcons} />
                <span>Project Settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
