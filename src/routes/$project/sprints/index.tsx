import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/$project/sprints/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/$project/sprints/"!</div>
}
