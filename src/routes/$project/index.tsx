import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/$project/')({
  component: RouteComponent,
})

function RouteComponent() {
  const { project } = Route.useParams()

  return <div>Hello "/{project}"!</div>
}
