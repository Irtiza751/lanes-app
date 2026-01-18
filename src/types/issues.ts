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

export type Lane = {
  status: string
  title: string
  show?: boolean
  iconValue: number
  iconColor?: string
}
