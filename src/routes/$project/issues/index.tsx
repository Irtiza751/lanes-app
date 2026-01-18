import { Button } from '@/components/ui/button'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { Icon } from '@/icons'
import {
  AdjustmentsHorizontalIcon,
  Square2StackIcon,
} from '@heroicons/react/24/solid'
import { FilterMailIcon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { createFileRoute } from '@tanstack/react-router'
import { KanbanBoard } from '@/components/kanban-board'

const lanes = [
  {
    status: 'backlog',
    title: 'Backlog',
    iconValue: 13,
    iconColor: '#8a8a8a',
  },
  {
    status: 'todo',
    title: 'Todos',
    iconColor: '#cccccc',
    iconValue: 13,
  },
  {
    status: 'in-progress',
    title: 'In Progress',
    iconColor: 'orange',
    iconValue: 8,
  },
  {
    status: 'code-review',
    title: 'Code Review',
    iconColor: 'yellowgreen',
    iconValue: 6,
  },
  {
    status: 'done',
    title: 'Done',
    iconColor: 'purple',
    iconValue: 0,
  },
]

const issues = [
  {
    id: '1',
    title: 'Design sidebar layout',
    key: 'TES-1',
    status: 'backlog',
    assignee: {
      name: 'Muhammad Irtiza',
      image: null,
    },
    priority: {
      id: '1',
      name: 'high',
    },
    labels: [
      { id: 'ui', name: 'UI', color: 'aquamarine' },
      { id: 'planning', name: 'Planning', color: 'gray' },
    ],
  },
  {
    id: '2',
    title: 'Setup project routing',
    key: 'TES-2',
    status: 'todo',
    assignee: {
      name: 'Ali Raza',
      image: null,
    },
    priority: {
      id: '2',
      name: 'medium',
    },
    labels: [{ id: 'frontend', name: 'Frontend', color: 'green' }],
  },
  {
    id: '3',
    title: 'Create reusable button component',
    key: 'TES-3',
    status: 'backlog',
    assignee: {
      name: 'Sara Khan',
      image: null,
    },
    priority: {
      id: '3',
      name: 'low',
    },
    labels: [
      { id: 'ui', name: 'UI', color: 'aquamarine' },
      { id: 'component', name: 'Component', color: 'indianred' },
    ],
  },
  {
    id: '4',
    title: 'Implement Kanban board drag and drop',
    key: 'TES-4',
    status: 'todo',
    assignee: {
      name: 'Muhammad Irtiza',
      image: null,
    },
    priority: {
      id: '1',
      name: 'high',
    },
    labels: [{ id: 'feature', name: 'Feature', color: 'teal' }],
  },
  {
    id: '5',
    title: 'Fix sidebar collapse bug',
    key: 'TES-5',
    status: 'in-progress',
    assignee: {
      name: 'Ali Raza',
      image: null,
    },
    priority: {
      id: '1',
      name: 'high',
    },
    labels: [{ id: 'bug', name: 'Bug', color: 'red' }],
  },
  {
    id: '6',
    title: 'Add issue priority indicator',
    key: 'TES-6',
    status: 'code-review',
    assignee: {
      name: 'Sara Khan',
      image: null,
    },
    priority: {
      id: '2',
      name: 'medium',
    },
    labels: [{ id: 'enhancement', name: 'Enhancement', color: 'orange' }],
  },
  {
    id: '7',
    title: 'Refactor issue card component',
    key: 'TES-7',
    status: 'code-review',
    assignee: {
      name: 'Muhammad Irtiza',
      image: null,
    },
    priority: {
      id: '3',
      name: 'low',
    },
    labels: [{ id: 'refactor', name: 'Refactor', color: 'yellow' }],
  },
  {
    id: '8',
    title: 'Persist board state in IndexedDB',
    key: 'TES-8',
    status: 'done',
    assignee: {
      name: 'Ali Raza',
      image: null,
    },
    priority: {
      id: '2',
      name: 'medium',
    },
    labels: [{ id: 'storage', name: 'Storage', color: 'brown' }],
  },
  {
    id: '9',
    title: 'Add empty state for lanes',
    key: 'TES-9',
    status: 'done',
    assignee: {
      name: 'Sara Khan',
      image: null,
    },
    priority: {
      id: '3',
      name: 'low',
    },
    labels: [{ id: 'ui', name: 'UI', color: 'aquamarine' }],
  },
  {
    id: '10',
    title: 'Write basic board documentation',
    key: 'TES-10',
    status: 'backlog',
    assignee: {
      name: 'Muhammad Irtiza',
      image: null,
    },
    priority: {
      id: '3',
      name: 'low',
    },
    labels: [{ id: 'docs', name: 'Documentation', color: 'pink' }],
  },
]

export const Route = createFileRoute('/$project/issues/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <header className="border-b flex items-center px-3 gap-2 py-1">
        <SidebarTrigger />
        <Button variant="outline" size="xs" className="text-muted-foreground">
          <Square2StackIcon />
          <span>All issues</span>
        </Button>
        <Button variant="outline" size="xs" className="text-muted-foreground">
          <Icon name="progress" value={6} />
          <span>Active</span>
        </Button>
        <Button variant="outline" size="xs" className="text-muted-foreground">
          <Icon name="progress" value={13} dashed />
          <span>Backlog</span>
        </Button>
      </header>
      {/* sub header */}
      <header className="px-3 py-2 border-b border-input flex items-center justify-between">
        <Button
          size="sm"
          variant="ghost"
          className="h-6.5 text-xs text-muted-foreground"
        >
          <HugeiconsIcon icon={FilterMailIcon} /> Filter
        </Button>
        <Button
          size="sm"
          variant="secondary"
          className="h-6.5 text-xs text-muted-foreground"
        >
          <AdjustmentsHorizontalIcon /> Display
        </Button>
      </header>
      {/* board */}
      <KanbanBoard lanes={lanes} issues={issues} />
    </div>
  )
}
