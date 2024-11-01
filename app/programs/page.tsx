// src/app/programs/page.js (Programs Dashboard)
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import ProgramCard from '../components/programs/ProgramCard'
import { PlusCircle } from 'lucide-react'

import { getPrograms } from '../lib/api'

export default async function Programs() {
  const programs = await getPrograms()

  return (
    <div className="p-6">
      <Card className="mb-6">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-2">Create an impact</h2>
          <p className="text-gray-600 mb-4">
            Creating a program offers a structured approach to address social issues, leading to more effective and impactful interventions.
          </p>
          <Link href="/programs/create" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            <PlusCircle className="w-5 h-5 mr-2" />
            Create Program
          </Link>
        </CardContent>
      </Card>

      <div className="flex space-x-4 border-b mb-6">
        <button className="pb-2 px-1 border-b-2 border-blue-600 text-blue-600 font-semibold">
          All Programs
        </button>
        <button className="pb-2 px-1 text-gray-600 hover:text-blue-600 transition-colors">
          Created by You
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {programs.map(program => (
          <Link key={program.id} href={`/programs/${program.id}`} className="block hover:shadow-lg transition-shadow">
            <ProgramCard program={program} />
          </Link>
        ))}
      </div>
    </div>
  )
}
