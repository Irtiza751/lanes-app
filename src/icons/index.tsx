import Progress from './progress'
import { IconProps } from './types'

const icons = {
  progress: Progress,
}

export function Icon({
  name,
  ...props
}: { name: keyof typeof icons } & React.SVGProps<SVGSVGElement> & IconProps) {
  const Component = icons[name]
  return <Component {...props} />
}
