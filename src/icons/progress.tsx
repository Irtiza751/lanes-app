import { useAspectRatio } from '@/hooks/use-aspect-ratio'
import { IconProps } from './types'

export default function Progress({
  size = 16,
  color,
  className,
  value,
  dashed,
}: IconProps) {
  const { svgWidth, svgHeight } = useAspectRatio(size, 16, 16)
  return (
    <svg
      width={svgWidth}
      height={svgHeight}
      viewBox="0 0 14 14"
      fill="currentColor"
      className={className}
    >
      <circle
        cx="7"
        cy="7"
        r="6"
        fill="none"
        stroke={color || 'currentColor'}
        strokeWidth="1.5"
        strokeDasharray={`3.14 ${dashed ? '1' : '0'}`}
        strokeDashoffset="-0.7"
      ></circle>
      <circle
        className="progress"
        cx="7"
        cy="7"
        r="2"
        fill="none"
        stroke={color || 'currentColor'}
        strokeWidth="4"
        strokeDasharray="12.189379495928398 24.378758991856795"
        strokeDashoffset={value}
        transform="rotate(-90 7 7)"
      ></circle>
    </svg>
  )
}
