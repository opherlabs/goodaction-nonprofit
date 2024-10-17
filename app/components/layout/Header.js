// src/components/layout/Header.js

'use client'

import { Bell } from 'lucide-react'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow-sm p-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">GoodAction</h1>
      <div className="flex items-center space-x-4">
        <button className="px-4 py-2 bg-green-500 text-white rounded-md">
          Add Your Logo
        </button>
        <Bell className="w-6 h-6 text-gray-600" />
        <Link href="/profile" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          <span>Gideon Ogongo</span>
        </Link>
      </div>
    </header>
  )
}