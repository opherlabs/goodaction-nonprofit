// app/initiatives/create/page.js
'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, DollarSign, GraduationCap, BarChart } from 'lucide-react';
import DynamicInitiativeForm from '../../components/DynamicInitiativeForm';

const initiativeTypes = [
  {
    id: 'fundraising',
    title: 'Fundraising',
    description: 'Create campaigns to raise funds for your cause',
    icon: DollarSign,
    color: 'bg-green-100 text-green-600'
  },
  {
    id: 'volunteer',
    title: 'Volunteer',
    description: 'Organize volunteer programs and events',
    icon: Users,
    color: 'bg-blue-100 text-blue-600'
  },
  {
    id: 'education',
    title: 'Education',
    description: 'Develop educational programs and courses',
    icon: GraduationCap,
    color: 'bg-purple-100 text-purple-600'
  },
  {
    id: 'impact',
    title: 'Impact',
    description: 'Track and measure program outcomes',
    icon: BarChart,
    color: 'bg-orange-100 text-orange-600'
  }
];

export default function CreateInitiativePage() {
  const [selectedType, setSelectedType] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900">Create a New Initiative</h1>
          <p className="mt-2 text-gray-600">Select an initiative type to get started</p>
        </motion.div>

        {!selectedType ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {initiativeTypes.map((type) => (
              <Card
                key={type.id}
                className="cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => setSelectedType(type.id)}
              >
                <CardContent className="p-6">
                  <div className={`inline-flex p-3 rounded-lg ${type.color} mb-4`}>
                    <type.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{type.title}</h3>
                  <p className="text-gray-600">{type.description}</p>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        ) : (
          <DynamicInitiativeForm initiativeType={selectedType} />
        )}
      </div>
    </div>
  );
}
