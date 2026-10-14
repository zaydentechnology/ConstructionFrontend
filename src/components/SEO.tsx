import { useEffect } from 'react'

export function SEO({ title, description }: { title: string; description: string }) {
  useEffect(() => {
    document.title = title
    const element = document.querySelector('meta[name="description"]')
    if (element) element.setAttribute('content', description)
  }, [title, description])
  return null
}
