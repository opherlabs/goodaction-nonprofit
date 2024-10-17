// src/components/programs/ProgramReport.js
import { Card, CardContent } from '@/components/ui/card'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const mockData = [
  { name: 'Jan', volunteers: 40, donations: 2400 },
  { name: 'Feb', volunteers: 30, donations: 1398 },
  { name: 'Mar', volunteers: 50, donations: 9800 },
  { name: 'Apr', volunteers: 27, donations: 3908 },
  { name: 'May', volunteers: 18, donations: 4800 },
  { name: 'Jun', volunteers: 23, donations: 3800 },
]

export default function ProgramReport({ program }) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold mb-2">Total Initiatives</h3>
            <div className="text-3xl font-bold">{program.totalInitiatives}</div>
            <div className="flex justify-between text-sm text-gray-600 mt-2">
              <span>Ongoing: {program.ongoingInitiatives}</span>
              <span>Completed: {program.completedInitiatives}</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold mb-2">Total Volunteers</h3>
            <div className="text-3xl font-bold">{program.totalVolunteers}</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold mb-2">Total Funds Raised</h3>
            <div className="text-3xl font-bold">${program.totalFundsRaised}</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold mb-4">Program Performance</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={mockData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Bar yAxisId="left" dataKey="volunteers" fill="#8884d8" name="Volunteers" />
              <Bar yAxisId="right" dataKey="donations" fill="#82ca9d" name="Donations ($)" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  )
}

