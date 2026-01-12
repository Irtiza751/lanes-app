import { db } from '@/db'
import { nanoid } from 'nanoid'

type CreateTaskParams = {
  title: string
  description: string | null
  status?: string
}

export function useTaskService() {
  return {
    createTask: async ({ title, description, status }: CreateTaskParams) => {
      return await db.tasks.add({
        id: nanoid(),
        title,
        description,
        status: status ?? 'todo',
        createdAt: new Date(),
        updatedAt: new Date(),
      })
    },
  }
}
