import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/$project/inbox/')({
  component: RouteComponent,
})

function RouteComponent() {
  const { project } = Route.useParams()

  return <div>Hello "/{project}/inbox/"!</div>
}
