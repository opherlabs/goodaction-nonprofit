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

const CreateInitiativeButton = () => {
  const [open, setOpen] = useState(false);

  const handleSelect = (templateId) => {
    console.log(`Selected template: ${templateId}`);
    // Here you would typically navigate to a new page or open another modal
    // to start creating the initiative based on the selected template
    setOpen(false);
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
            <Card key={template.id} className="hover:shadow-lg transition-shadow duration-300">
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
                  Select
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreateInitiativeButton;
