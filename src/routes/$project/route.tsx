import { Outlet, createFileRoute } from '@tanstack/react-router'
import { ProjectSidebar } from '@/components/project-sidebar'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'

export const Route = createFileRoute('/$project')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <SidebarProvider>
      <ProjectSidebar />
      <SidebarInset className="dark:border border-input">
        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  )
}
