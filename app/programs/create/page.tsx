// src/app/programs/create/page.js (Program Creation Flow)
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent } from '@/components/ui/card'
import { createProgram } from '../../lib/api'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { CalendarIcon, DollarSign } from 'lucide-react'

const steps = [
  { id: 'program-details', label: 'Program Details' },
  { id: 'sdg-goals', label: 'SDG Goals' },
  { id: 'add-image', label: 'Add Image' },
  { id: 'review-publish', label: 'Review & Publish' }
]

export default function CreateProgram() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    budget: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await createProgram(formData)
      router.push('/programs')
    } catch (error) {
      console.error('Failed to create program:', error)
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card className="shadow-lg">
        <CardContent className="p-8">
          <h1 className="text-3xl font-bold mb-8 text-center">Create Program</h1>
          <div className="mb-12">
            <ol className="flex items-center w-full">
              {steps.map((step, index) => (
                <li key={step.id} className={`flex items-center ${index !== steps.length - 1 ? 'w-full' : ''}`}>
                  <span className={`flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-12 shrink-0 ${currentStep >= index ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
                    {index + 1}
                  </span>
                  <span className={`hidden sm:inline-block ml-2 text-sm ${currentStep >= index ? 'text-blue-600 font-medium' : 'text-gray-500'}`}>{step.label}</span>
                  {index !== steps.length - 1 && (
                    <div className={`flex-1 h-0.5 mx-4 ${currentStep > index ? 'bg-blue-600' : 'bg-gray-200'}`}></div>
                  )}
                </li>
              ))}
            </ol>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            {currentStep === 0 && (
              <div className="space-y-6">
                <div>
                  <Label htmlFor="title" className="text-lg font-medium">Program Title</Label>
                  <Input
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="mt-2"
                    placeholder="Enter program title"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="description" className="text-lg font-medium">Program Description</Label>
                  <Textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows="4"
                    className="mt-2"
                    placeholder="Describe your program"
                    required
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="startDate" className="text-lg font-medium">Start Date</Label>
                    <div className="relative mt-2">
                      <Input
                        id="startDate"
                        type="date"
                        name="startDate"
                        value={formData.startDate}
                        onChange={handleInputChange}
                        className="pl-10"
                        required
                      />
                      <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="endDate" className="text-lg font-medium">End Date</Label>
                    <div className="relative mt-2">
                      <Input
                        id="endDate"
                        type="date"
                        name="endDate"
                        value={formData.endDate}
                        onChange={handleInputChange}
                        className="pl-10"
                        required
                      />
                      <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>
                  </div>
                </div>
                <div>
                  <Label htmlFor="budget" className="text-lg font-medium">Budget</Label>
                  <div className="relative mt-2">
                    <Input
                      id="budget"
                      type="number"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="pl-10"
                      placeholder="0.00"
                      required
                    />
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">USD</span>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 1 && (
              <div>
                <h2 className="text-2xl font-semibold mb-6">SDG Goals</h2>
                <p className="text-gray-600 mb-4">Select the Sustainable Development Goals that align with this program.</p>
                {/* Add SDG Goals selection here */}
              </div>
            )}

            {currentStep === 2 && (
              <div>
                <h2 className="text-2xl font-semibold mb-6">Add Image</h2>
                <div className="mt-4">
                  <Label htmlFor="programImage" className="block text-lg font-medium mb-2">Program Image</Label>
                  <Input
                    id="programImage"
                    type="file"
                    accept="image/*"
                    className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  />
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div>
                <h2 className="text-2xl font-semibold mb-6">Review & Publish</h2>
                <div className="space-y-4 bg-gray-50 p-6 rounded-lg">
                  <p><strong className="font-medium">Title:</strong> {formData.title}</p>
                  <p><strong className="font-medium">Description:</strong> {formData.description}</p>
                  <p><strong className="font-medium">Start Date:</strong> {formData.startDate}</p>
                  <p><strong className="font-medium">End Date:</strong> {formData.endDate}</p>
                  <p><strong className="font-medium">Budget:</strong> ${formData.budget} USD</p>
                  {/* Add SDG Goals and image preview here */}
                </div>
              </div>
            )}

            <div className="flex justify-between mt-12">
              <Button
                type="button"
                onClick={handleBack}
                disabled={currentStep === 0}
                variant="outline"
                className={currentStep === 0 ? 'invisible' : ''}
              >
                Back
              </Button>
              {currentStep === steps.length - 1 ? (
                <Button type="submit" className="ml-auto">
                  Publish Program
                </Button>
              ) : (
                <Button type="button" onClick={handleNext} className="ml-auto">
                  Next
                </Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
