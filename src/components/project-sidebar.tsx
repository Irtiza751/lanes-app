import { Link } from '@tanstack/react-router'
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
} from '@heroicons/react/24/solid'
import { SidebarHeader } from './sidebar-header'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from './ui/collapsible'
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

import { Route as ProjectRoute } from '@/routes/$project/route'

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
                <SidebarMenuButton className="p-0">
                  <Link
                    to={item.url}
                    className="flex items-center w-full gap-2 h-full px-2"
                    params={{ project }}
                    activeProps={{
                      className:
                        'bg-sidebar-accent text-foreground font-medium',
                    }}
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
              <CollapsibleTrigger className="group text-xs py-0 h-7.5 space-x-1">
                {/* <SidebarMenuButton className="text-xs py-0 h-7.5"> */}
                <span>Project</span>
                <span className="inline-block w-0 h-0 border-l-5 border-l-transparent border-r-5 border-r-transparent border-t-5 border-t-muted-foreground" />
                {/* </SidebarMenuButton> */}
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuButton className="p-0">
                  <Link
                    to="/$project/issues"
                    params={{ project }}
                    className="flex items-center w-full gap-2 h-full px-2"
                    activeProps={{
                      className:
                        'bg-sidebar-accent text-foreground font-medium',
                    }}
                  >
                    <Square2StackIcon />
                    <span>Issues</span>
                  </Link>
                </SidebarMenuButton>
                <SidebarMenuButton className="p-0">
                  <Link
                    to="/$project/sprints"
                    params={{ project }}
                    className="flex items-center w-full gap-2 h-full px-2"
                    activeProps={{
                      className:
                        'bg-sidebar-accent text-foreground font-medium',
                    }}
                  >
                    <PlayCircleIcon />
                    <span>Sprints</span>
                  </Link>
                </SidebarMenuButton>
                <SidebarMenuSub>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton>Current</SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                  <SidebarMenuSubItem>
                    <SidebarMenuSubButton>Upcoming</SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                </SidebarMenuSub>
                <SidebarMenuButton className="p-0">
                  <Link
                    to="/$project/epics"
                    params={{ project }}
                    className="flex items-center w-full gap-2 h-full px-2"
                    activeProps={{
                      className:
                        'bg-sidebar-accent text-foreground font-medium',
                    }}
                  >
                    <CubeIcon />
                    <span>Epics</span>
                  </Link>
                </SidebarMenuButton>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="p-0">
              <Link
                to="/$project/settings"
                className="flex items-center w-full gap-2 h-full px-5"
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
