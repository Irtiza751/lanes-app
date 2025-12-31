import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@/components/ui/sidebar'
import { Link } from '@tanstack/react-router'
import { SidebarHeader } from './sidebar-header'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from './ui/collapsible'

import { Route as ProjectRoute } from '@/routes/$project/route'

import {
  ArchiveBoxIcon,
  Cog6ToothIcon,
  CubeIcon,
  DocumentTextIcon,
  InboxIcon,
  PlayCircleIcon,
  RectangleStackIcon,
  Square2StackIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'
// Menu items.
const items = [
  {
    title: 'Inbox',
    url: '/$project/inbox',
    icon: () => <InboxIcon />,
  },
  {
    title: 'My Issues',
    url: '/$project/my-issues',
    icon: () => <RectangleStackIcon />,
  },
  {
    title: 'Members',
    url: '/$project/members',
    icon: () => <UsersIcon />,
  },
  {
    title: 'Drafts',
    url: '/$project/drafts',
    icon: () => <DocumentTextIcon />,
  },
  {
    title: 'Archived',
    url: '/$project/archived',
    icon: () => <ArchiveBoxIcon />,
  },
]

export function ProjectSidebar() {
  const { project } = ProjectRoute.useParams()

  return (
    <Sidebar variant="inset" className="text-muted-foreground">
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
                    <div>
                      <item.icon />
                    </div>
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
        <SidebarGroup>
          <Collapsible defaultOpen>
            <SidebarMenuItem>
              <CollapsibleTrigger className="w-full group">
                <SidebarMenuButton className="text-xs py-0 h-7.5">
                  <span>Project</span>
                  <span className="inline-block w-0 h-0 border-l-5 border-l-transparent border-r-5 border-r-transparent border-t-5 border-t-muted-foreground" />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuButton>
                  <Square2StackIcon />
                  <span>Issues</span>
                </SidebarMenuButton>
                <SidebarMenuButton>
                  <PlayCircleIcon />
                  <span>Sprints</span>
                </SidebarMenuButton>
                <SidebarMenuSub>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton>Current</SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton>Upcoming</SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                </SidebarMenuSub>
                <SidebarMenuButton>
                  <CubeIcon />
                  <span>Epics</span>
                </SidebarMenuButton>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="py-0">
              <Link
                to="/$project/settings"
                className="flex items-center w-full gap-2 h-full"
                params={{ project }}
              >
                <Cog6ToothIcon />
                <span>Settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
