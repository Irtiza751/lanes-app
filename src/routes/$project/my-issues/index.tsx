import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/$project/my-issues/')({
  component: RouteComponent,
})

function RouteComponent() {
  const { project } = Route.useParams()

  return <div>Hello "/{project}/my-issues/"!</div>
}
