'use client'
import React, { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const steps = [
  { id: 'program-details', label: 'Program Details' },
  { id: 'sdg-goals', label: 'SDG Goals' },
  { id: 'add-image', label: 'Add Image' },
  { id: 'review-publish', label: 'Review & Publish' }
];

const ProgramCreationFlow = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    budget: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Program Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="Program title"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Program Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows="4"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                placeholder="Program description"
              ></textarea>
            </div>
            <div className="flex space-x-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">Start Date</label>
                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">End Date</label>
                <input
                  type="date"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Budget</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 sm:text-sm">$</span>
                </div>
                <input
                  type="number"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                  placeholder="0.00"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 sm:text-sm">USD</span>
                </div>
              </div>
            </div>
          </div>
        );
      case 1:
        return <div>SDG Goals content (to be implemented)</div>;
      case 2:
        return <div>Add Image content (to be implemented)</div>;
      case 3:
        return <div>Review & Publish content (to be implemented)</div>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center mb-8">
          <a href="/programs" className="flex items-center text-blue-600 hover:underline">
            <ChevronLeft className="w-4 h-4 mr-1" />
            Back to Programs
          </a>
        </div>
        <Card>
          <CardContent className="p-6">
            <h1 className="text-2xl font-semibold mb-6">Program Details</h1>
            <p className="text-gray-600 mb-8">
              Creating programs allows you to collaborate with NGOs and also increase your employees engagement.
            </p>
            <div className="mb-8">
              <ol className="flex items-center w-full">
                {steps.map((step, index) => (
                  <li key={step.id} className={`flex items-center ${index !== steps.length - 1 ? 'w-full' : ''}`}>
                    <span className={`flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-12 shrink-0 ${currentStep >= index ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'}`}>
                      {index + 1}
                    </span>
                    <span className={`hidden sm:flex w-full bg-gray-200 h-0.5 ${index !== steps.length - 1 ? 'dark:bg-gray-700' : 'hidden'}`}></span>
                  </li>
                ))}
              </ol>
            </div>
            {renderStepContent()}
            <div className="mt-8 flex justify-between">
              <button
                onClick={handleBack}
                disabled={currentStep === 0}
                className={`px-4 py-2 rounded-md ${currentStep === 0 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
              >
                Back
              </button>
              <button
                onClick={handleNext}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                {currentStep === steps.length - 1 ? 'Finish' : 'Next'}
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProgramCreationFlow;