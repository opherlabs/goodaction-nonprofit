'use client'
import React from 'react';
import { Home, PlusCircle, Settings, HelpCircle, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const sidebarItems = [
  { icon: Home, label: 'Home', path: '/' },
  { icon: PlusCircle, label: 'Programs', path: '/programs' },
  { icon: Settings, label: 'Settings', path: '/settings' },
  { icon: HelpCircle, label: 'Support', path: '/support' },
  { icon: MessageSquare, label: 'Feedback', path: '/feedback' },
];

const mockEngagementData = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 200 },
  { name: 'Apr', value: 278 },
  { name: 'May', value: 189 },
];

const HomeDashboard = () => {
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
          <h1 className="text-xl font-semibold">Home</h1>
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 bg-green-500 text-white rounded-md">Add Your Logo</button>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
              <span>Gideon Ogongo</span>
            </div>
          </div>
        </header>

        {/* Dashboard content */}
        <div className="p-6">
          {/* Summary cards */}
          <div className="grid grid-cols-4 gap-6 mb-6">
            <Card>
              <CardContent className="flex items-center p-4">
                <div className="bg-red-100 p-3 rounded-full mr-4">
                  <PlusCircle className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <div className="text-2xl font-bold">1</div>
                  <div className="text-sm text-gray-500">Programs</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center p-4">
                <div className="bg-yellow-100 p-3 rounded-full mr-4">
                  <PlusCircle className="w-6 h-6 text-yellow-500" />
                </div>
                <div>
                  <div className="text-2xl font-bold">0</div>
                  <div className="text-sm text-gray-500">Initiatives</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center p-4">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <PlusCircle className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <div className="text-2xl font-bold">$0.00</div>
                  <div className="text-sm text-gray-500">Total donations</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center p-4">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <PlusCircle className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <div className="text-2xl font-bold">0 Hrs</div>
                  <div className="text-sm text-gray-500">Total Volunteer Hours</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Activities and Engagement Trends */}
          <div className="grid grid-cols-2 gap-6">
            <Card>
              <CardHeader>Activities</CardHeader>
              <CardContent>
                <div className="flex flex-col items-center justify-center h-48">
                  <img src="/api/placeholder/150/150" alt="Activities" className="mb-4" />
                  <h3 className="text-xl font-semibold">Activities</h3>
                  <p className="text-gray-600">Access to all your activities on GoodAction.</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>Engagement Trends</CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={mockEngagementData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
                <div className="text-center mt-4">
                  <h3 className="text-xl font-semibold">Engagement Trends</h3>
                  <p className="text-gray-600">Overview of your interactions with GoodAction.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomeDashboard;