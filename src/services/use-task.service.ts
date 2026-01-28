import { db } from '@/db'
import { Assignee, Label, Priority } from '@/types'
import { nanoid } from 'nanoid'

type CreateTaskParams = {
  title: string
  description: string
  key: string
  status?: string
  assignee?: Assignee
  priority?: Priority
  labels?: Label[]
}

export function useTaskService() {
  return {
    createTask: async ({
      title,
      description,
      key,
      status,
      assignee,
      priority,
      labels,
    }: CreateTaskParams) => {
      return await db.issues.add({
        id: nanoid(),
        title,
        description,
        key,
        status: status ?? 'backlog',
        assignee,
        priority,
        labels,
        createdAt: new Date(),
        updatedAt: new Date(),
      })
    },
  }
}
