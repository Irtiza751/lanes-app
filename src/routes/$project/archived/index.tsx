import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/$project/archived/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/$project/archived/"!</div>
}
