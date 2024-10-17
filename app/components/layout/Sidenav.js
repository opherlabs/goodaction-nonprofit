// src/components/layout/Sidenav.js

'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, PlusCircle, Settings, HelpCircle, MessageSquare } from 'lucide-react'
import Image from 'next/image'

const sidenavItems = [
  { icon: Home, label: 'Home', path: '/' },
  { icon: PlusCircle, label: 'Programs', path: '/programs' },
  { icon: Settings, label: 'Settings', path: '/settings' },
  { icon: HelpCircle, label: 'Support', path: '/support' },
  { icon: MessageSquare, label: 'Feedback', path: '/feedback' },
]

export default function Sidenav() {
  const pathname = usePathname()

  return (
    <aside className="w-20 bg-white shadow-md flex flex-col items-center py-6">
      <Link href="/" className="mb-8">
        <Image src="/logo/goodaction-logo.png" alt="Logo" width={60} height={60} />
      </Link>
      <nav className="flex flex-col items-center space-y-6">
        {sidenavItems.map((item, index) => (
          <Link
            key={index}
            href={item.path}
            className={`p-3 rounded-lg hover:bg-gray-200 transition-colors duration-200 ${
              pathname === item.path ? 'bg-gray-200' : ''
            }`}
          >
            <item.icon className="w-8 h-8 text-gray-600" />
          </Link>
        ))}
      </nav>
    </aside>
  )
}
