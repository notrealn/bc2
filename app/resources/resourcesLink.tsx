'use client'

import { usePathname } from 'next/navigation'

export function Link({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className={`text-lg ${usePathname() == href ? 'underline' : ''}`}
    >
      {label}
    </a>
  )
}
