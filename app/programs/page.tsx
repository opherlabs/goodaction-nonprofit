'use client'
import React, { useState } from 'react';
import { Home, PlusCircle, Settings, HelpCircle, MessageSquare } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const sidebarItems = [
  { icon: Home, label: 'Home', path: '/' },
  { icon: PlusCircle, label: 'Programs', path: '/programs' },
  { icon: Settings, label: 'Settings', path: '/settings' },
  { icon: HelpCircle, label: 'Support', path: '/support' },
  { icon: MessageSquare, label: 'Feedback', path: '/feedback' },
];

const ProgramsDashboard = () => {
  const [activeTab, setActiveTab] = useState('All Programs');

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-16 bg-white shadow-md">
        <div className="flex flex-col items-center py-4">
          <img src="/api/placeholder/40/40" alt="Logo" className="w-10 h-10 mb-8" />
          <nav className="flex flex-col items-center space-y-4">
            {sidebarItems.map((item, index) => (
              <a
                key={index}
                href={item.path}
                className="p-2 rounded-md hover:bg-gray-200 transition-colors duration-200"
              >
                <item.icon className="w-6 h-6 text-gray-600" />
              </a>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="bg-white shadow-sm p-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold">Programs</h1>
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 bg-green-500 text-white rounded-md">Add Your Logo</button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
              <span>Gideon Ogongo</span>
            </div>
          </div>
        </header>

        {/* Programs content */}
        <div className="p-6">
          <Card className="mb-6">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-2">Create an impact</h2>
              <p className="text-gray-600 mb-4">
                Creating a program offers a structured approach to address social issues, leading to more effective and impactful interventions.
              </p>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
                Create Program
              </button>
            </CardContent>
          </Card>

          {/* Tabs */}
          <div className="flex space-x-4 border-b mb-6">
            {['All Programs', 'Created by You'].map((tab) => (
              <button
                key={tab}
                className={`pb-2 px-1 ${
                  activeTab === tab ? 'border-b-2 border-black text-black font-semibold' : 'text-gray-600'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Program cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="overflow-hidden">
              <img src="/api/placeholder/400/200" alt="Education Program" className="w-full h-48 object-cover" />
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold mb-2">Education Program</h3>
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>$100,000</span>
                  <span>31 Dec, 2024 - 30 Mar, 2025</span>
                </div>
                <div className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-2 py-1 rounded">
                  04 Quality Education
                </div>
              </CardContent>
            </Card>
            {/* Add more program cards here as needed */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProgramsDashboard;