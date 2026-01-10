import { Outlet, createFileRoute } from '@tanstack/react-router'
import { ProjectSidebar } from '@/components/project-sidebar'
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar'

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
