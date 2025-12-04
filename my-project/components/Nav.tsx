'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const items = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/education', label: 'Education' },
  { href: '/hobbies', label: 'Hobbies' },
  { href: '/contact', label: 'Contact' }
]

export default function Nav() {
  const path = usePathname() || '/'

  return (
    <nav className="nav-container">
      <ul className="nav-list">
        {items.map((it) => {
          const active = path === it.href

          return (
            <li key={it.href}>
              <Link className={`nav-btn ${active ? 'active' : ''}`} href={it.href}>
                {it.label}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}