import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { db } from '@/db'
import { useTaskService } from '@/services/use-task.service'
import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react'

export const Route = createFileRoute('/$project/')({
  component: RouteComponent,
})

function RouteComponent() {
  const { project } = Route.useParams()
  const { createTask } = useTaskService()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle task creation logic here
    console.log('Task created')
    const data = new FormData(e.target as HTMLFormElement)
    const title = data.get('title') as string
    const description = data.get('description') as string | null
    console.log({ title, description })
    const id = await createTask({ title, description })
    console.log('Created task with id:', id)
  }

  const fetchTasks = async () => {
    const tasks = await db.tasks.toArray()
    console.log('All tasks:', tasks)
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  return (
    <div>
      <h1 className="mb-4">Project: {project}</h1>
      <form className="space-y-5" onSubmit={handleSubmit}>
        <Input name="title" placeholder="Enter title" />
        <Textarea name="description" placeholder="Description" />
        <Button type="submit">Create Task</Button>
      </form>
    </div>
  )
}
