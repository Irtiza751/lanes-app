import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/$project/drafts/')({
  component: RouteComponent,
})

function RouteComponent() {
  const { project } = Route.useParams()

  return <div>Hello "/{project}/drafts/"!</div>
}
