'use client'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { PlusCircle } from 'lucide-react'
const mockEngagementData = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 200 },
  { name: 'Apr', value: 278 },
  { name: 'May', value: 189 },
]

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      
      {/* Summary cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardContent>
            <h2 className="text-xl font-semibold mb-4">Activities</h2>
            <div className="flex flex-col items-center justify-center h-48">
              <img src="/api/placeholder/150/150" alt="Activities" className="mb-4" />
              <p className="text-gray-600">Access to all your activities on GoodAction.</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <h2 className="text-xl font-semibold mb-4">Engagement Trends</h2>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={mockEngagementData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
            <p className="text-center mt-4 text-gray-600">Overview of your interactions with GoodAction.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
