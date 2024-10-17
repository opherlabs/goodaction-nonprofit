'use client'
import React, { useState } from 'react';
import { Bell, Settings, Home, PlusCircle, HelpCircle, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('Report');

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-16 bg-white shadow-md">
        <div className="flex flex-col items-center py-4">
          <img src="/api/placeholder/40/40" alt="Logo" className="w-10 h-10 mb-8" />
          <nav className="flex flex-col items-center space-y-4">
            <Home className="w-6 h-6 text-gray-600" />
            <PlusCircle className="w-6 h-6 text-gray-600" />
            <Settings className="w-6 h-6 text-gray-600" />
            <HelpCircle className="w-6 h-6 text-gray-600" />
            <MessageSquare className="w-6 h-6 text-gray-600" />
          </nav>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="bg-white shadow-sm p-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold">Education Program</h1>
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md">Edit</button>
            <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md">Archive</button>
            <Bell className="w-6 h-6 text-gray-600" />
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
              <span>Gideon Ogongo</span>
            </div>
          </div>
        </header>

        {/* Program details */}
        <div className="p-6">
          <div className="flex items-center space-x-4 mb-6">
            <img src="/api/placeholder/80/80" alt="Program" className="w-20 h-20 rounded-md" />
            <div>
              <h2 className="text-2xl font-semibold">Education Program</h2>
              <p className="text-gray-600">Programs about Education</p>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex space-x-4 border-b mb-6">
            {['Report', 'Initiatives', 'Program Details'].map((tab) => (
              <button
                key={tab}
                className={`pb-2 px-1 ${
                  activeTab === tab ? 'border-b-2 border-green-500 text-green-500' : 'text-gray-600'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Content based on active tab */}
          {activeTab === 'Report' && (
            <div className="grid grid-cols-3 gap-6">
              <Card>
                <CardHeader>Total Initiatives</CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold">0</div>
                  <div className="flex justify-between text-sm text-gray-600 mt-2">
                    <span>Ongoing: 0</span>
                    <span>Completed: 0</span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>Total number of volunteers</CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold">0</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>Total funds raised</CardHeader>
                <CardContent>
                  <div className="text-sm text-gray-600">Budget</div>
                  <div className="text-2xl font-bold">$100,000.00</div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === 'Initiatives' && (
            <div>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md mb-4">
                Create Initiative
              </button>
              <div className="text-center py-12">
                <img src="/api/placeholder/200/200" alt="No initiatives" className="mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Initiatives</h3>
                <p className="text-gray-600">The Program has No Initiatives.</p>
              </div>
            </div>
          )}

          {activeTab === 'Program Details' && (
            <div>
              <h3 className="text-xl font-semibold mb-4">Program Details</h3>
              {/* Add program details content here */}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
