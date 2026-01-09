import { Dexie } from 'dexie';

export const db = new Dexie("lanesdb");

db.version(1).stores({
    tasks: "++id, title, description, status, createdAt, updatedAt",
})