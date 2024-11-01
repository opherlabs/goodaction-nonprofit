// src/components/layout/TopNav.js
'use client'
import Link from 'next/link';
import { Bell, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function TopNav() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleProfile = () => setIsProfileOpen(!isProfileOpen);

  return (
    <nav className="bg-white shadow-sm px-4 sm:px-6 lg:px-8 py-3">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-end">
          <div className="flex items-center space-x-4">
            <button className="btn-secondary">
              Add Your Logo
            </button>
            <Bell className="w-6 h-6 text-gray-600 cursor-pointer hover:text-gray-800" />
            <div className="relative">
              <button onClick={toggleProfile} className="flex items-center space-x-2 cursor-pointer">
                <div className="w-10 h-10 bg-gray-300 rounded-full overflow-hidden">
                  <img src="/api/placeholder/40/40" alt="Profile" className="w-full h-full object-cover" />
                </div>
                <span className="text-gray-700 font-medium">Gideon Ogongo</span>
                <ChevronDown size={16} className="text-gray-600" />
              </button>
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  <Link href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</Link>
                  <Link href="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</Link>
                  <Link href="/logout" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</Link>
                </div>
              )}
            </div>
            <div className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
              Beta
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
