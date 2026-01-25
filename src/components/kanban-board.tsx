import { Icon } from '@/icons'
import { Button } from './ui/button'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { UserCircleIcon } from '@heroicons/react/24/solid'
import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline'
import { useSidebar } from './ui/sidebar'
import { cn } from '@/lib/utils'
import { Badge } from './ui/badge'
import {
  DndContext,
  DragEndEvent,
  useDraggable,
  useDroppable,
} from '@dnd-kit/core'
import { Issue, Lane } from '../types'
import { CSS } from '@dnd-kit/utilities'

type KanbanProps = {
  lanes: Lane[]
  issues: Issue[]
  onDragEnd?: (event: DragEndEvent) => void
}

export function KanbanBoard({
  lanes,
  issues,
  onDragEnd = () => {},
}: KanbanProps) {
  const { open } = useSidebar()

  console.log(issues)

  return (
    <DndContext onDragEnd={onDragEnd}>
      <div
        className={cn('overflow-auto flex gap-5 p-2 transition-width', {
          'max-w-[calc(100vw-322px)]': open,
          'max-w-[calc(100vw-0px)]': !open,
        })}
      >
        {lanes.map((lane) => (
          <Column
            key={lane.status}
            lane={lane}
            issues={issues?.filter((issue) => issue.status === lane.status)}
          />
        ))}
      </div>
    </DndContext>
  )
}

type ColumnProps = {
  lane: Lane
  issues: Issue[]
}

function Column({ lane, issues }: ColumnProps) {
  const { setNodeRef } = useDroppable({ id: lane.status, data: lane })

  return (
    <div
      ref={setNodeRef}
      className="dark:bg-lanes bg-accent rounded-sm min-h-[calc(100svh-120px)] p-2 basis-88 shrink-0 space-y-2"
    >
      <LaneHeader
        title={lane.title}
        count={2}
        iconValue={lane.iconValue}
        iconColor={lane.iconColor}
      />
      {issues.map((issue) => (
        <Ticket
          value={lane.iconValue}
          key={issue.id}
          issue={issue}
          color={lane.iconColor}
        />
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
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: issue.id,
    data: issue,
  })

  const styles = {
    transform: CSS.Translate.toString(transform),
  }

  return (
    <div
      {...attributes}
      {...listeners}
      style={styles}
      ref={setNodeRef}
      className="dark:bg-ticket bg-background p-2 shadow-xs border border-ticket-accent rounded-md"
    >
      <div className="flex items-center justify-between">
        <span className="text-xs text-muted-foreground">{issue.key}</span>
        <Avatar className="size-5">
          <AvatarImage
            src={issue.assignee?.image}
            alt={issue.assignee?.name}
            title={issue.assignee?.name}
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
        {issue.labels?.map((label) => (
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
