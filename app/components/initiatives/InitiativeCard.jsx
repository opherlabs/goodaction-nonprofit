// src/components/initiatives/InitiativeCard.js
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import { CalendarIcon, UserIcon, TagIcon } from 'lucide-react'

export default function InitiativeCard({ initiative }) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <Image 
        src={initiative.imageUrl || "/images/initiative-placeholder.png"} 
        alt={initiative.title} 
        width={400} 
        height={200} 
        className="w-full h-48 object-cover"
      />
      <CardContent className="p-4">
        <h3 className="text-xl font-semibold mb-2 line-clamp-1">{initiative.title}</h3>
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <CalendarIcon className="w-4 h-4 mr-1" />
          <span>{new Date(initiative.startDate).toLocaleDateString()} - {new Date(initiative.endDate).toLocaleDateString()}</span>
        </div>
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <UserIcon className="w-4 h-4 mr-1" />
          <span>{initiative.volunteers} Volunteers</span>
        </div>
        <div className="flex items-center text-sm text-gray-600 mb-2">
          <TagIcon className="w-4 h-4 mr-1" />
          <span>{initiative.type}</span>
        </div>
        <p className="text-gray-600 line-clamp-2 mt-2">{initiative.description}</p>
      </CardContent>
    </Card>
  )
}
