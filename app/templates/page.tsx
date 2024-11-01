'use client'
import React, { useState } from 'react';
import { PlusCircle, Users, DollarSign, Globe, BarChart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const initiativeTemplates = [
  {
    id: 'volunteer',
    title: 'Enhanced Volunteer Program',
    description: 'Manage volunteer recruitment, training, scheduling, and feedback.',
    icon: Users,
  },
  {
    id: 'fundraising',
    title: 'Enhanced Donor/Fundraising Program',
    description: 'Manage fundraising campaigns, donor communications, and events.',
    icon: DollarSign,
  },
  {
    id: 'outreach',
    title: 'Enhanced Community Outreach Program',
    description: 'Engage with the community through events, workshops, and partnerships.',
    icon: Globe,
  },
  {
    id: 'impact',
    title: 'Enhanced Program Impact Initiative',
    description: 'Measure and report on the impact of programs.',
    icon: BarChart,
  },
];

const CreateInitiativeButton = ({ programId }) => {
  const [open, setOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const handleSelect = (templateId) => {
    const template = initiativeTemplates.find(t => t.id === templateId);
    setSelectedTemplate(template);
  };

  const handleCreate = () => {
    if (selectedTemplate) {
      // Here you would create the initiative based on the selected template
      console.log(`Creating initiative for program ${programId} using template ${selectedTemplate.id}`);
      // Navigate to the new initiative page or open a new dialog for data entry
      setOpen(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="template-button">Add New Initiative</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px]">
        <DialogHeader>
          <DialogTitle>Choose an Initiative Template</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-4 p-4">
          {initiativeTemplates.map((template) => (
            <Card 
              key={template.id} 
              className={`hover:shadow-lg transition-shadow duration-300 ${selectedTemplate?.id === template.id ? 'border-blue-500 border-2' : ''}`}
              onClick={() => handleSelect(template.id)}
            >
              <CardHeader>
                <CardTitle className="flex items-center">
                  <template.icon className="mr-2 h-5 w-5 text-blue-600" />
                  {template.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{template.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button onClick={() => handleSelect(template.id)} className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Explore Template
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        {selectedTemplate && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Template Data Model:</h3>
            <pre className="bg-gray-100 p-2 rounded">
              {JSON.stringify(selectedTemplate.dataModel, null, 2)}
            </pre>
            <Button onClick={handleCreate} className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white">
              Create Initiative
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CreateInitiativeButton;
