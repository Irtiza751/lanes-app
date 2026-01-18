import { Icon } from '@/icons'
import { Button } from './ui/button'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { UserCircleIcon } from '@heroicons/react/24/solid'
import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline'
import { useSidebar } from './ui/sidebar'
import { cn } from '@/lib/utils'
import { Badge } from './ui/badge'

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
  const { open } = useSidebar()

  return (
    <div
      className={cn('overflow-auto flex gap-5 p-2 transition-width', {
        'max-w-[calc(100vw-322px)]': open,
        'max-w-[calc(100vw-0px)]': !open,
      })}
    >
      {lanes.map((lane) => (
        <div
          key={lane.status}
          className="bg-lanes rounded-sm min-h-[calc(100svh-120px)] p-2 basis-88 shrink-0 space-y-2"
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
              <Ticket
                value={lane.iconValue}
                key={issue.id}
                issue={issue}
                color={lane.iconColor}
              />
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
    <div className="text-slight-muted text-xs flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Icon
          name="progress"
          value={iconValue}
          color={iconColor}
          dashed={title === 'Backlog'}
          size={13}
        />
        <span>{title}</span>
        <span className="text-muted-foreground">{count}</span>
      </div>
    </div>
  )
}

type TicketProps = {
  issue: Issue
  value: number
  color?: string
}
function Ticket({ issue, value, color }: TicketProps) {
  return (
    <div className="bg-ticket p-2 shadow-lg border border-secondary rounded-md">
      <div className="flex items-center justify-between">
        <span className="text-xs text-muted-foreground">{issue.key}</span>
        <Avatar className="size-5">
          <AvatarImage
            src={issue.assignee.image}
            alt={issue.assignee.name}
            title={issue.assignee.name}
            className="size-5"
          />
          <AvatarFallback className="size-5">
            <UserCircleIcon />
          </AvatarFallback>
        </Avatar>
      </div>
      <div className="flex items-center gap-2 mt-1 mb-2 text-slight-muted">
        <Icon
          name="progress"
          value={value}
          dashed={issue.status === 'backlog'}
          color={color}
          size={13}
        />
        <p className="text-xs font-semibold">{issue.title}</p>
      </div>
      <div className="flex items-center flex-wrap gap-1">
        <Button
          size="icon-xs"
          variant="outline"
          className="size-5 rounded-sm bg-none"
        >
          <EllipsisHorizontalIcon />
        </Button>
        {issue.labels.map((label) => (
          <Badge
            key={label.id}
            variant={'outline'}
            className="rounded-sm text-[10px]"
          >
            <span
              className="size-2 rounded-full"
              style={{ backgroundColor: label.color }}
            />
            {label.name}
          </Badge>
        ))}
      </div>
    </div>
  )
}
