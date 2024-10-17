// src/components/programs/ProgramDetails.js

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CalendarIcon, DollarSignIcon, UserIcon, TagIcon } from 'lucide-react';

export default function ProgramDetails({ program }) {
  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold mb-4">{program.title}</h2>
          <p className="text-gray-600 mb-4">{program.description}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center">
              <CalendarIcon className="w-5 h-5 mr-2 text-blue-500" />
              <span>
                {new Date(program.startDate).toLocaleDateString()} - {new Date(program.endDate).toLocaleDateString()}
              </span>
            </div>
            <div className="flex items-center">
              <DollarSignIcon className="w-5 h-5 mr-2 text-green-500" />
              <span>Budget: ${program.budget.toLocaleString()}</span>
            </div>
            <div className="flex items-center">
              <UserIcon className="w-5 h-5 mr-2 text-purple-500" />
              <span>{program.totalVolunteers} Volunteers</span>
            </div>
            <div className="flex items-center">
              <TagIcon className="w-5 h-5 mr-2 text-red-500" />
              <span>{program.status}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {program.sdgGoals && program.sdgGoals.length > 0 && (
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4">SDG Goals</h3>
            <div className="flex flex-wrap gap-2">
              {program.sdgGoals.map((goal, index) => (
                <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  {goal}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-4">Program Metrics</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h4 className="font-semibold">Total Initiatives</h4>
              <p className="text-2xl">{program.totalInitiatives}</p>
            </div>
            <div>
              <h4 className="font-semibold">Ongoing Initiatives</h4>
              <p className="text-2xl">{program.ongoingInitiatives}</p>
            </div>
            <div>
              <h4 className="font-semibold">Completed Initiatives</h4>
              <p className="text-2xl">{program.completedInitiatives}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {program.sponsors && program.sponsors.length > 0 && (
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4">Sponsors</h3>
            <ul className="list-disc list-inside">
              {program.sponsors.map((sponsor, index) => (
                <li key={index}>{sponsor}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  );
}