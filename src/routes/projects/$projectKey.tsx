import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/projects/$projectKey')({
  component: RouteComponent,
})

function RouteComponent() {
  const { projectKey } = Route.useParams()

  return <div>Hello "/projects/{projectKey}"!</div>
}
