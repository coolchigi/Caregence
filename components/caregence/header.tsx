'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Heart, User } from 'lucide-react'

const navItems = [
  { name: 'Dashboard', href: '/loggedin' },
  { name: 'Providers', href: '/loggedin/providers' },
  { name: 'AI Matching', href: '/loggedin/matching' },
  { name: 'Community Q&A', href: '/loggedin/community' },
]

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Heart className="h-8 w-8 text-purple-600" />
              <span className="ml-2 text-2xl font-bold text-purple-600">Caregence</span>
            </div>
          </div>
          <div className="flex items-center">
            <User className="h-6 w-6 text-gray-400" />
            <span className="ml-2 text-sm font-medium text-gray-700">Welcome, User</span>
          </div>
        </div>
        <nav className="flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                pathname === item.href
                  ? 'border-purple-500 text-purple-600'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}