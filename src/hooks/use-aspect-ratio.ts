export function useAspectRatio(size: number, width: number, height: number) {
  const aspectRatio = width / height
  const svgHeight = size
  const svgWidth = size * aspectRatio

  return {
    svgWidth,
    svgHeight,
  }
}
