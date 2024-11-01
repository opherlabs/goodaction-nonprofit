// src/components/shared/TabNav.js
'use client'

import { useState } from 'react'

export function TabNav({ tabs, defaultTab, className, onTabChange }) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0])

  const handleTabChange = (tab) => {
    setActiveTab(tab)
    if (onTabChange) {
      onTabChange(tab)
    }
  }

  return (
    <div className={`flex space-x-4 border-b ${className}`}>
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`pb-2 px-1 ${
            activeTab === tab ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-600'
          }`}
          onClick={() => handleTabChange(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}
