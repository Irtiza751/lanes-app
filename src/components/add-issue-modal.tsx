import React, { useEffect } from 'react'
import { Button } from './ui/button'
import { Dialog, DialogContent, DialogFooter, DialogHeader } from './ui/dialog'
import { db } from '@/db'
import { useTaskService } from '@/services/use-task.service'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import { CommandLineIcon } from '@heroicons/react/24/solid'
import { Icon } from '@/icons'

type AddIssueModalProps = {
  children: React.ReactNode
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

export function AddIssueModal({
  children,
  open,
  onOpenChange,
}: AddIssueModalProps) {
  const { createTask } = useTaskService()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle task creation logic here
    console.log('Task created')
    const data = new FormData(e.target as HTMLFormElement)
    const title = data.get('title') as string
    const description = data.get('description') as string
    console.log({ title, description })
    // const id = await createTask({ title, description })
    // console.log('Created task with id:', id)
    onOpenChange?.(false)
  }

  const fetchTasks = async () => {
    const issues = await db.issues.toArray()
    console.log('All issues:', issues)
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <div>{children}</div>
      <DialogContent className="w-full sm:max-w-2xl top-1/3 bg-accent p-0 border border-border rounded-md h-auto">
        <DialogHeader className="flex-row items-center p-3">
          <Button size="xs" variant="outline">
            <CommandLineIcon className="size-3" />
            TAN
          </Button>
          <ChevronRightIcon className="size-3" />
          <span className="text-xs">New issue</span>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="px-3">
          <div className="space-y-2">
            <input
              className="block w-full text-lg font-semibold focus:outline-none bg-transparent"
              placeholder="Issue title"
            />
            <textarea
              className="w-full min-h-12 focus:outline-none bg-transparent text-md resize-none"
              placeholder="Issue description..."
            ></textarea>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="xs">
              <Icon name="progress" value={13} />
              Todo
            </Button>
          </div>
        </form>
        <DialogFooter className="border-t border-border px-2 py-2">
          <Button size="sm" type="submit" className="text-xs w-26">
            Create issue
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
