// src/app/programs/[id]/page.js

'use client'

import { useParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { TabNav } from '../../components/shared/TabNav'
import { getProgram, getInitiatives } from '../../lib/api'
import ProgramDetails from '../../components/programs/ProgramDetails'
import InitiativeCard from '../../components/initiatives/InitiativeCard'
import ProgramReport from '../../components/programs/ProgramReport'
import { Edit, Archive, Plus, Filter } from 'lucide-react'

export default function ProgramDetail() {
  const params = useParams()
  const [program, setProgram] = useState(null)
  const [initiatives, setInitiatives] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true)
        setError(null)
        const programData = await getProgram(params.id)
        if (!programData) {
          throw new Error('Program not found')
        }
        setProgram(programData)
        const initiativesData = await getInitiatives(params.id)
        setInitiatives(initiativesData)
      } catch (error) {
        console.error('Error fetching data:', error)
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [params.id])

  if (loading) {
    return <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  }

  if (error) {
    return <div className="flex items-center justify-center h-screen text-red-500 text-xl">{error}</div>
  }

  if (!program) {
    return <div className="flex items-center justify-center h-screen text-gray-500 text-xl">Program not found</div>
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
          <div className="flex items-center space-x-6 mb-6">
            <Image 
              src={program.imageUrl || "/images/placeholder.png"} 
              alt={program.title} 
              width={80} 
              height={80} 
              className="rounded-md object-cover"
            />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{program.title}</h1>
              <p className="text-gray-600 mt-2">{program.description}</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0 mb-6">
            <div className="flex items-center space-x-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Upcoming</span>
              <span className="text-gray-600">
                {new Date(program.startDate).toLocaleDateString()} - {new Date(program.endDate).toLocaleDateString()}
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-md flex items-center hover:bg-gray-50 transition-colors">
                <Edit className="w-4 h-4 mr-2" /> Edit
              </button>
              <button className="px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-md flex items-center hover:bg-gray-50 transition-colors">
                <Archive className="w-4 h-4 mr-2" /> Archive
              </button>
            </div>
          </div>

          <TabNav
            tabs={['Report', 'Initiatives', 'Program Details']}
            defaultTab="Initiatives"
            className="mb-6"
          >
            {(activeTab) => (
              <>
                {activeTab === 'Report' && <ProgramReport program={program} />}

                {activeTab === 'Initiatives' && (
                  <div>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0 mb-6">
                      <Link 
                        href={`/initiatives/create?programId=${params.id}`} 
                        className="px-4 py-2 bg-blue-600 text-white rounded-md flex items-center hover:bg-blue-700 transition-colors"
                      >
                        <Plus className="w-4 h-4 mr-2" /> Create Initiative
                      </Link>
                      <div className="flex items-center space-x-4">
                        <span className="text-gray-600">Filter By</span>
                        <select className="border rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                          <option>Status</option>
                          <option>Active</option>
                          <option>Completed</option>
                        </select>
                        <select className="border rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                          <option>Type</option>
                          <option>Volunteer</option>
                          <option>Fundraising</option>
                        </select>
                      </div>
                    </div>

                    {initiatives.length === 0 ? (
                      <div className="text-center py-12 bg-gray-50 rounded-lg">
                        <Image 
                          src="/images/initiatives-placeholder.png" 
                          alt="No initiatives" 
                          width={200} 
                          height={200} 
                          className="mx-auto mb-4"
                        />
                        <h3 className="text-xl font-semibold mb-2 text-gray-900">Initiatives</h3>
                        <p className="text-gray-600">The Program has No Initiatives.</p>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {initiatives.map(initiative => (
                          <InitiativeCard key={initiative.id} initiative={initiative} />
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {activeTab === 'Program Details' && <ProgramDetails program={program} />}
              </>
            )}
          </TabNav>
        </div>
      </div>
    </div>
  )
}
