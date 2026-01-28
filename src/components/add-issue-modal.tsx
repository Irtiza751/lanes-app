import React, { useEffect } from 'react'
import { Button } from './ui/button'
import { Dialog, DialogContent, DialogFooter, DialogHeader } from './ui/dialog'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import { CommandLineIcon } from '@heroicons/react/24/solid'
import { Icon } from '@/icons'
import { useForm } from '@tanstack/react-form'
import { z } from 'zod'
import { useTaskService } from '@/services/use-task.service'

type AddIssueModalProps = {
  children: React.ReactNode
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

const issueFormSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().optional(),
  status: z.string().default('backlog'),
})

export function AddIssueModal({
  children,
  open,
  onOpenChange,
}: AddIssueModalProps) {
  const { createTask } = useTaskService()

  const form = useForm({
    defaultValues: {
      title: '',
      description: '',
      status: 'backlog',
    },
    onSubmit: async ({ value }) => {
      // Validate with Zod
      const result = issueFormSchema.safeParse(value)

      if (!result.success) {
        console.error('Validation failed:', result.error)
        return
      }

      console.log('Task created:', result.data)

      const id = await createTask({
        title: result.data.title,
        description: result.data.description || '',
        status: result.data.status,
        key: 'TAN-' + 30,
        assignee: {
          id: 'user-1',
          name: 'Tania',
          image: 'https://i.pravatar.cc/150?img=1',
        },
        labels: [
          {
            id: 'label-1',
            name: 'Frontend',
            color: 'blue',
          },
        ],
        priority: { id: 'priority-1', name: 'High' },
      })
      console.log('Created task with id:', id)

      onOpenChange?.(false)
    },
  })

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <div>{children}</div>
      <DialogContent className="w-full sm:max-w-3xl top-1/3 bg-accent p-0 border border-border rounded-md h-auto gap-3">
        <DialogHeader className="flex-row items-center p-3">
          <Button size="xs" variant="outline">
            <CommandLineIcon className="size-3" />
            TAN
          </Button>
          <ChevronRightIcon className="size-3" />
          <span className="text-xs">New issue</span>
        </DialogHeader>

        <form
          onSubmit={(e) => {
            e.preventDefault()
            e.stopPropagation()
            form.handleSubmit()
          }}
          className="px-3"
        >
          <div className="space-y-2">
            <form.Field
              name="title"
              validators={{
                onChange: ({ value }) => {
                  const result = z
                    .string()
                    .min(1, 'Title is required')
                    .safeParse(value)
                  return result.success
                    ? undefined
                    : result.error.issues[0].message
                },
              }}
            >
              {(field) => (
                <div>
                  <input
                    className="block w-full text-lg font-semibold focus:outline-none bg-transparent"
                    placeholder="Issue title"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    onBlur={field.handleBlur}
                  />
                  {field.state.meta.errors.length > 0 && (
                    <span className="text-xs text-red-500">
                      {field.state.meta.errors[0]}
                    </span>
                  )}
                </div>
              )}
            </form.Field>

            <form.Field name="description">
              {(field) => (
                <textarea
                  className="w-full min-h-12 focus:outline-none bg-transparent text-md resize-none"
                  placeholder="Issue description..."
                  value={field.state.value}
                  onChange={(e) => field.handleChange(e.target.value)}
                  onBlur={field.handleBlur}
                />
              )}
            </form.Field>
          </div>

          <div className="flex items-center gap-2">
            <form.Field name="status">
              {(field) => (
                <Button
                  type="button"
                  variant="outline"
                  size="xs"
                  onClick={() => {
                    // You can add status change logic here
                  }}
                >
                  <Icon name="progress" value={13} />
                  {field.state.value === 'backlog' ? 'Todo' : field.state.value}
                </Button>
              )}
            </form.Field>
          </div>
        </form>

        <DialogFooter className="border-t border-border px-2 py-2">
          <form.Subscribe
            selector={(state) => [state.canSubmit, state.isSubmitting]}
          >
            {([canSubmit, isSubmitting]) => (
              <Button
                size="sm"
                type="button"
                className="text-xs w-26"
                onClick={() => form.handleSubmit()}
                disabled={!canSubmit}
              >
                {isSubmitting ? 'Creating...' : 'Create issue'}
              </Button>
            )}
          </form.Subscribe>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
