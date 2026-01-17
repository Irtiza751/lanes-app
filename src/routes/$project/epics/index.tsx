import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/$project/epics/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/$project/epics/"!</div>
}
