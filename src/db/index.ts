import { Issue } from '@/types'
import { Dexie, type EntityTable } from 'dexie'

export const db = new Dexie('lanesdb') as Dexie & {
  issues: EntityTable<Issue, 'id'>
}

db.version(1).stores({
  issues:
    'id, title, description, key, status, assignee, priority, labels, createdAt, updatedAt',
})
