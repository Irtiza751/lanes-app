import React, { useEffect } from 'react'
import { Button } from './ui/button'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'
import { db } from '@/db'
import { useTaskService } from '@/services/use-task.service'

type AddIssueModalProps = {
  children: React.ReactNode
}

export function AddIssueModal({ children }: AddIssueModalProps) {
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
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="w-full sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>New issue</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 mb-4">
            <div className="grid gap-3">
              <Label htmlFor="title">Title</Label>
              <Input id="title" name="title" placeholder="Issue title" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                placeholder="Issue description"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Create issue</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
