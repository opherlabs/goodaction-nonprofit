// src/components/programs/ProgramCard.js
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function ProgramCard({ program }) {
  return (
    <Card className="overflow-hidden h-full">
      <img 
        src={program.imageUrl || "/api/placeholder/400/200"} 
        alt={program.title} 
        className="w-full h-48 object-cover"
      />
      <CardContent className="p-4">
        <h3 className="text-xl font-semibold mb-2 line-clamp-2">{program.title}</h3>
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span className="font-medium">${program.budget.toLocaleString()}</span>
          <span>{new Date(program.startDate).toLocaleDateString()} - {new Date(program.endDate).toLocaleDateString()}</span>
        </div>
        {program.sdgGoal && (
          <div className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
            {program.sdgGoal}
          </div>
        )}
        <p className="mt-2 text-gray-600 line-clamp-3">{program.description}</p>
      </CardContent>
    </Card>
  )
}
