import React from 'react';
import { 
  ArrowLeft, 
  Calendar, 
  GraduationCap, 
  ClipboardList, 
  MessageSquare,
  Clock,
  MapPin,
  ChevronRight,
  Users
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const VolunteerInitiativePage = () => {
  const initiativeInfo = {
    title: "Train the Trainers",
    category: "Education",
    registered: 1,
    totalSpots: 20,
    createdDate: "18 Oct 2024",
    description: "Join our specialized program to become a certified trainer in community education. Help us build capacity by training other volunteers and community members."
  };

  const requiredTraining = [
    {
      id: 1,
      title: "Basic Training Principles",
      duration: "2 hours",
      type: "Online",
      status: "Required",
      deadline: "Before first session",
      description: "Learn fundamental training methodologies and best practices."
    },
    {
      id: 2,
      title: "Communication Skills Workshop",
      duration: "3 hours",
      type: "In-Person",
      status: "Required",
      deadline: "Within first week",
      description: "Develop effective communication techniques for training delivery."
    }
  ];

  const upcomingTasks = [
    {
      id: 1,
      title: "New Volunteer Orientation",
      date: "25 Oct 2024",
      time: "10:00 AM - 12:00 PM",
      location: "Community Center",
      status: "Scheduled"
    },
    {
      id: 2,
      title: "Training Session: Basic Skills",
      date: "28 Oct 2024",
      time: "2:00 PM - 5:00 PM",
      location: "Training Room A",
      status: "Pending"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Navigation */}
      <div className="max-w-6xl mx-auto mb-6">
        <Button variant="ghost" className="mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Initiatives
        </Button>

        {/* Hero Section */}
        <div className="relative rounded-xl overflow-hidden mb-6">
          <img 
            src="/api/placeholder/1200/400" 
            alt="Initiative banner" 
            className="w-full h-[300px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6 text-white">
            <h1 className="text-3xl font-bold mb-2">{initiativeInfo.title}</h1>
            <div className="flex items-center space-x-4 text-sm">
              <span className="bg-white/20 px-3 py-1 rounded-full">
                {initiativeInfo.category}
              </span>
              <span>Created: {initiativeInfo.createdDate}</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-3 gap-6">
          {/* Left Column - Description and Stats */}
          <div className="col-span-2">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>About This Initiative</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{initiativeInfo.description}</p>
                <div className="mt-4 flex items-center space-x-2">
                  <Users className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-600">
                    {initiativeInfo.registered} / {initiativeInfo.totalSpots} spots filled
                  </span>
                </div>
              </CardContent>
            </Card>

            <Tabs defaultValue="training" className="w-full">
              <TabsList>
                <TabsTrigger value="training">Required Training</TabsTrigger>
                <TabsTrigger value="tasks">Tasks</TabsTrigger>
                <TabsTrigger value="schedule">Schedule</TabsTrigger>
              </TabsList>

              <TabsContent value="training">
                <Card>
                  <CardHeader>
                    <CardTitle>Training Requirements</CardTitle>
                    <CardDescription>Complete these trainings to participate in the initiative</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {requiredTraining.map((training) => (
                        <Card key={training.id}>
                          <CardContent className="p-4">
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="font-semibold">{training.title}</h3>
                                <p className="text-sm text-gray-600">{training.description}</p>
                                <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                                  <div className="flex items-center">
                                    <Clock className="h-4 w-4 mr-1" />
                                    {training.duration}
                                  </div>
                                  <div className="flex items-center">
                                    <GraduationCap className="h-4 w-4 mr-1" />
                                    {training.type}
                                  </div>
                                </div>
                              </div>
                              <Button variant="outline" size="sm">
                                Start Training
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="tasks">
                <Card>
                  <CardHeader>
                    <CardTitle>Upcoming Tasks</CardTitle>
                    <CardDescription>Your assigned tasks and responsibilities</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {upcomingTasks.map((task) => (
                        <Card key={task.id}>
                          <CardContent className="p-4">
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="font-semibold">{task.title}</h3>
                                <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                                  <div className="flex items-center">
                                    <Calendar className="h-4 w-4 mr-1" />
                                    {task.date}
                                  </div>
                                  <div className="flex items-center">
                                    <Clock className="h-4 w-4 mr-1" />
                                    {task.time}
                                  </div>
                                  <div className="flex items-center">
                                    <MapPin className="h-4 w-4 mr-1" />
                                    {task.location}
                                  </div>
                                </div>
                              </div>
                              <span className={`px-2 py-1 rounded-full text-xs ${
                                task.status === 'Scheduled' 
                                  ? 'bg-green-100 text-green-800' 
                                  : 'bg-yellow-100 text-yellow-800'
                              }`}>
                                {task.status}
                              </span>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="schedule">
                <Card>
                  <CardHeader>
                    <CardTitle>Your Schedule</CardTitle>
                    <CardDescription>View and manage your volunteer schedule</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Add calendar or schedule component here */}
                      <p className="text-gray-600">Schedule functionality coming soon...</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Column - Actions */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full">Volunteer</Button>
                <Button variant="outline" className="w-full">Share</Button>
                <Button 
                  variant="outline" 
                  className="w-full flex items-center justify-center"
                >
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Provide Feedback
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Have questions about this initiative? Contact the coordinator for assistance.
                </p>
                <Button variant="outline" className="w-full">
                  Contact Coordinator
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerInitiativePage;