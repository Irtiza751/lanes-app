import { createFileRoute, useRouter } from '@tanstack/react-router'
import { useEffect } from 'react'

export const Route = createFileRoute('/')({ component: App })

function App() {
  const router = useRouter()

  useEffect(() => {
    router.navigate({ to: '/projects' })
  }, [])

  return null
}
