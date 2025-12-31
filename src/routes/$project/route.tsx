import { ProjectSidebar } from '@/components/project-sidebar'
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/$project')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <SidebarProvider>
      <ProjectSidebar />
      <SidebarInset className="p-2 border">
        <SidebarTrigger />
        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  )
}
