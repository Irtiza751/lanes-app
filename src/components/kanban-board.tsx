import { Icon } from '@/icons'

type KanbanProps = {
  lanes: {
    status: string
    title: string
    show?: boolean
    iconValue: number
    iconColor?: string
  }[]
}

export function KanbanBoard({ lanes }: KanbanProps) {
  return (
    <div className="overflow-auto flex gap-5 p-2 max-w-[calc(100vw-322px)]">
      {lanes.map((lane) => (
        <div
          key={lane.status}
          className="bg-lanes rounded-sm min-h-[calc(100svh-120px)] p-2 basis-xs shrink-0"
        >
          <LaneHeader
            title={lane.title}
            count={2}
            iconValue={lane.iconValue}
            iconColor={lane.iconColor}
          />
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
