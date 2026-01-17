import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/$project/issues/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/$project/issues/"!</div>
}
