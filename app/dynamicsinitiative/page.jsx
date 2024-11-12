'use client'
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, DollarSign, GraduationCap, BarChart, ArrowRight } from 'lucide-react';

const initiativeTypes = [
  {
    id: 'fundraising',
    title: 'Fundraising Initiatives',
    description: 'Manage fundraising campaigns and donor relationships',
    icon: DollarSign,
    color: 'bg-green-100 text-green-600',
    href: '/dynamicsinitiative/fundraising'
  },
  {
    id: 'volunteer',
    title: 'Volunteer Initiatives',
    description: 'Coordinate volunteer programs and community engagement',
    icon: Users,
    color: 'bg-blue-100 text-blue-600',
    href: '/dynamicsinitiative/volunteer'
  },
  {
    id: 'education',
    title: 'Education Initiatives',
    description: 'Develop and manage educational programs',
    icon: GraduationCap,
    color: 'bg-purple-100 text-purple-600',
    href: '/dynamicsinitiative/education'
  },
  {
    id: 'impact',
    title: 'Impact Initiatives',
    description: 'Track and measure program outcomes and impact',
    icon: BarChart,
    color: 'bg-orange-100 text-orange-600',
    href: '/dynamicsinitiative/impact'
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to the Initiative Platform
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Create, manage, and track various initiatives to drive positive change in your community
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <Link 
            href="/dynamicsinitiative/create"
            className="block w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg p-6 text-center transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <h2 className="text-2xl font-semibold mb-2">Create New Initiative</h2>
            <p className="text-blue-100">Start a new initiative and make an impact</p>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {initiativeTypes.map((type, index) => (
            <motion.div
              key={type.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * (index + 1) }}
            >
              <Link href={type.href}>
                <Card className="cursor-pointer hover:shadow-lg transition-all duration-200 group">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`${type.color} p-3 rounded-lg`}>
                        <type.icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                          {type.title}
                        </h3>
                        <p className="text-gray-600 mb-4">{type.description}</p>
                        <div className="flex items-center text-blue-600 text-sm font-medium">
                          View Initiatives
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
