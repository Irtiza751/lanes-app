import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/$project/settings/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/$project/settings/"!</div>
}
