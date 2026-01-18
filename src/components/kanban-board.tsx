import { Icon } from '@/icons'
import { Button } from './ui/button'

type KanbanProps = {
  lanes: {
    status: string
    title: string
    show?: boolean
    iconValue: number
    iconColor?: string
  }[]
  issues: Issue[]
}

export type Issue = {
  id: string
  title: string
  key: string
  status: string
  assignee: Assignee
  priority: Priority
  labels: Label[]
}

export type Assignee = {
  name: string
  image: any
}

export type Priority = {
  id: string
  name: string
}

export type Label = {
  id: string
  name: string
  color: string
}

export function KanbanBoard({ lanes, issues }: KanbanProps) {
  return (
    <div className="overflow-auto flex gap-5 p-2 max-w-[calc(100vw-322px)]">
      {lanes.map((lane) => (
        <div
          key={lane.status}
          className="bg-lanes rounded-sm min-h-[calc(100svh-120px)] p-2 basis-xs shrink-0 space-y-2"
        >
          <LaneHeader
            title={lane.title}
            count={2}
            iconValue={lane.iconValue}
            iconColor={lane.iconColor}
          />
          {issues
            .filter((issue) => issue.status === lane.status)
            .map((issue) => (
              <Ticket key={issue.id} issue={issue} />
            ))}
        </div>
      ))}
    </div>
  )
}

function LaneHeader({
  title,
  count,
  iconValue,
  iconColor,
}: {
  title: string
  count: number
  iconValue: number
  iconColor?: string
}) {
  return (
    <div className="text-slight-muted text-[13.3px] flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Icon
          name="progress"
          value={iconValue}
          color={iconColor}
          dashed={iconValue === 13}
          size={14}
        />
        <span>{title}</span>
        <span className="text-muted-foreground">{count}</span>
      </div>
    </div>
  )
}

type TicketProps = {
  issue: Issue
}
function Ticket({ issue }: TicketProps) {
  return (
    <div className="bg-accent px-3 py-2 shadow-lg border border-secondary rounded-md">
      <p className="text-[13px] font-semibold">{issue.title}</p>
      <Button size="xs" variant="outline">
        {issue.status}
      </Button>
    </div>
  )
}
