import { Issue, Lane } from '@/types'
import { create } from 'zustand'

type IssueStore = {
  issues: Issue[]
  lanes: Lane[]
  // methods
  setIssues: (issues: Issue[]) => void
  addIssue: (issue: Issue) => void
}

export const useIssue = create<IssueStore>((set) => ({
  issues: [],
  lanes: [],
  // methods
  setIssues: (issues) => set({ issues }),
  addIssue: (issue) => set((state) => ({ issues: [...state.issues, issue] })),
}))
