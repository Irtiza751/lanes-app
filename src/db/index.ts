import { Dexie, type EntityTable } from 'dexie'

interface Task {
  id: string
  title: string
  description: string | null
  status: string
  createdAt: Date
  updatedAt: Date
}

export const db = new Dexie('lanesdb') as Dexie & {
  tasks: EntityTable<Task, 'id'>
}

db.version(1).stores({
  tasks: 'id, title, description, status, createdAt, updatedAt',
})

////////////////////////////////////////////////
///////////////// DANGER ZONE //////////////////
////////////////////////////////////////////////

// async function nukeAllIndexedDB() {
//   const databases = await indexedDB.databases()

//   await Promise.all(
//     databases
//       .filter((db) => db.name)
//       .map((db) => indexedDB.deleteDatabase(db.name!)),
//   )
// }

// nukeAllIndexedDB()
