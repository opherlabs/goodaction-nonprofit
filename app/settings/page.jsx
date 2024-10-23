'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  Calendar, 
  GraduationCap, 
  ClipboardList, 
  MessageSquare,
  Clock,
  MapPin,
  ChevronRight,
  Users,
  CheckCircle,
  Share2,
  Bell
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";

const VolunteerInitiativePage = () => {
  const [activeTab, setActiveTab] = useState('training');
  const [selectedTask, setSelectedTask] = useState(null);

  const initiativeInfo = {
    title: "Train the Trainers",
    category: "Education",
    registered: 1,
    totalSpots: 20,
    progress: 5,
    createdDate: "18 Oct 2024",
    description: "Join our specialized program to become a certified trainer in community education. Help us build capacity by training other volunteers and community members."
  };

  const requiredTraining = [
    {
      id: 1,
      title: "Basic Training Principles",
      duration: "2 hours",
      type: "Online",
      status: "In Progress",
      progress: 60,
      deadline: "Before first session",
      description: "Learn fundamental training methodologies and best practices.",
      modules: [
        { name: "Introduction to Training", completed: true },
        { name: "Adult Learning Principles", completed: true },
        { name: "Training Methods", completed: false },
        { name: "Assessment Techniques", completed: false }
      ]
    },
    {
      id: 2,
      title: "Communication Skills Workshop",
      duration: "3 hours",
      type: "In-Person",
      status: "Not Started",
      progress: 0,
      deadline: "Within first week",
      description: "Develop effective communication techniques for training delivery.",
      modules: [
        { name: "Effective Communication Basics", completed: false },
        { name: "Public Speaking", completed: false },
        { name: "Handling Q&A Sessions", completed: false },
        { name: "Group Dynamics", completed: false }
      ]
    }
  ];

  const upcomingTasks = [
    {
      id: 1,
      title: "New Volunteer Orientation",
      date: "25 Oct 2024",
      time: "10:00 AM - 12:00 PM",
      location: "Community Center",
      status: "Scheduled",
      attendees: 12,
      maxAttendees: 15
    },
    {
      id: 2,
      title: "Training Session: Basic Skills",
      date: "28 Oct 2024",
      time: "2:00 PM - 5:00 PM",
      location: "Training Room A",
      status: "Pending",
      attendees: 8,
      maxAttendees: 20
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const TaskDetail = ({ task }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
      onClick={() => setSelectedTask(null)}
    >
      <motion.div
        className="bg-white rounded-lg p-6 max-w-2xl w-full"
        onClick={e => e.stopPropagation()}
      >
        <h3 className="text-xl font-bold mb-4">{task.title}</h3>
        <div className="space-y-4">
          <div className="flex justify-between text-sm">
            <div className="space-y-2">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                {task.date}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                {task.time}
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                {task.location}
              </div>
            </div>
            <div className="text-right">
              <div className="font-semibold">Attendees</div>
              <div className="text-2xl font-bold text-blue-600">
                {task.attendees}/{task.maxAttendees}
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="font-semibold">Requirements</div>
            <ul className="list-disc list-inside text-sm">
              <li>Complete Basic Training</li>
              <li>Bring training materials</li>
              <li>Review session plan</li>
            </ul>
          </div>
          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={() => setSelectedTask(null)}>Close</Button>
            <Button>Confirm Attendance</Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <motion.div 
      className="min-h-screen bg-gray-50 p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto mb-6">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Initiatives
          </Button>
        </motion.div>

        <motion.div 
          className="relative rounded-xl overflow-hidden mb-6"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img 
            src="/api/placeholder/1200/400" 
            alt="Initiative banner" 
            className="w-full h-[300px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 text-white">
            <h1 className="text-3xl font-bold mb-2">{initiativeInfo.title}</h1>
            <div className="flex items-center space-x-4 text-sm">
              <span className="bg-white/20 px-3 py-1 rounded-full">
                {initiativeInfo.category}
              </span>
              <span>Created: {initiativeInfo.createdDate}</span>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-3 gap-6">
          <motion.div 
            className="col-span-2"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>About This Initiative</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{initiativeInfo.description}</p>
                  <div className="mt-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-600">Program Progress</span>
                      <span className="text-sm font-medium">{initiativeInfo.progress}%</span>
                    </div>
                    <Progress value={initiativeInfo.progress} className="h-2" />
                  </div>
                  <div className="mt-4 flex items-center space-x-2">
                    <Users className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">
                      {initiativeInfo.registered} / {initiativeInfo.totalSpots} spots filled
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList>
                <TabsTrigger value="training">Required Training</TabsTrigger>
                <TabsTrigger value="tasks">Tasks</TabsTrigger>
                <TabsTrigger value="schedule">Schedule</TabsTrigger>
              </TabsList>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  <TabsContent value="training">
                    <Card>
                      <CardHeader>
                        <CardTitle>Training Requirements</CardTitle>
                        <CardDescription>Complete these trainings to participate in the initiative</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <motion.div 
                          className="space-y-4"
                          variants={containerVariants}
                          initial="hidden"
                          animate="visible"
                        >
                          {requiredTraining.map((training) => (
                            <motion.div key={training.id} variants={itemVariants}>
                              <Card>
                                <CardContent className="p-4">
                                  <div className="space-y-4">
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
                                      <Button 
                                        variant={training.status === "In Progress" ? "default" : "outline"}
                                        size="sm"
                                      >
                                        {training.status === "In Progress" ? "Continue" : "Start"} Training
                                      </Button>
                                    </div>
                                    <div>
                                      <div className="flex justify-between mb-2">
                                        <span className="text-sm text-gray-600">Progress</span>
                                        <span className="text-sm font-medium">{training.progress}%</span>
                                      </div>
                                      <Progress value={training.progress} className="h-2" />
                                    </div>
                                    <div className="grid grid-cols-2 gap-2">
                                      {training.modules.map((module, index) => (
                                        <div 
                                          key={index}
                                          className="flex items-center space-x-2 text-sm"
                                        >
                                          <CheckCircle 
                                            className={`h-4 w-4 ${
                                              module.completed ? 'text-green-500' : 'text-gray-300'
                                            }`}
                                          />
                                          <span>{module.name}</span>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>
                            </motion.div>
                          ))}
                        </motion.div>
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
                        <motion.div 
                          className="space-y-4"
                          variants={containerVariants}
                          initial="hidden"
                          animate="visible"
                        >
                          {upcomingTasks.map((task) => (
                            <motion.div 
                              key={task.id} 
                              variants={itemVariants}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <Card className="cursor-pointer" onClick={() => setSelectedTask(task)}>
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
                            </motion.div>
                          ))}
                        </motion.div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="schedule">
                    <Card>
                      <CardHeader>
                        <CardTitle>Your Schedule</CardTitle>
                        <CardDescription>View and manage your volunteer commitments</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <motion.div 
                          className="space-y-6"
                          variants={containerVariants}
                          initial="hidden"
                          animate="visible"
                        >
                          {/* Weekly Schedule View */}
                          <div className="bg-white rounded-lg overflow-hidden">
                            <div className="grid grid-cols-7 gap-px bg-gray-200">
                              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                                <div key={day} className="bg-gray-50 p-2 text-center text-sm font-medium">
                                  {day}
                                </div>
                              ))}
                            </div>
                            <div className="grid grid-cols-7 gap-px bg-gray-200">
                              {[...Array(35)].map((_, i) => (
                                <motion.div
                                  key={i}
                                  className="bg-white p-2 h-24 relative"
                                  whileHover={{ backgroundColor: 'rgba(59, 130, 246, 0.05)' }}
                                >
                                  <span className="text-sm text-gray-500">{i + 1}</span>
                                  {i === 15 && (
                                    <motion.div
                                      className="absolute bottom-2 left-2 right-2 bg-blue-100 text-blue-800 text-xs p-1 rounded"
                                      initial={{ scale: 0.9, opacity: 0 }}
                                      animate={{ scale: 1, opacity: 1 }}
                                    >
                                      Training Session
                                    </motion.div>
                                  )}
                                </motion.div>
                              ))}
                            </div>
                          </div>

                          {/* Upcoming Schedule */}
                          <Card>
                            <CardHeader>
                              <CardTitle className="text-lg">Upcoming Schedule</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <motion.div className="space-y-4">
                                {[
                                  {
                                    date: "Oct 25, 2024",
                                    time: "10:00 AM - 12:00 PM",
                                    event: "New Volunteer Orientation",
                                    location: "Community Center"
                                  },
                                  {
                                    date: "Oct 28, 2024",
                                    time: "2:00 PM - 5:00 PM",
                                    event: "Training Session: Basic Skills",
                                    location: "Training Room A"
                                  }
                                ].map((event, index) => (
                                  <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="flex items-center p-3 rounded-lg border hover:bg-gray-50 transition-colors"
                                  >
                                    <div className="flex-1">
                                      <h4 className="font-medium">{event.event}</h4>
                                      <div className="text-sm text-gray-500 space-y-1">
                                        <div className="flex items-center">
                                          <Calendar className="h-4 w-4 mr-2" />
                                          {event.date}
                                        </div>
                                        <div className="flex items-center">
                                          <Clock className="h-4 w-4 mr-2" />
                                          {event.time}
                                        </div>
                                        <div className="flex items-center">
                                          <MapPin className="h-4 w-4 mr-2" />
                                          {event.location}
                                        </div>
                                      </div>
                                    </div>
                                    <Button variant="outline" size="sm">Add to Calendar</Button>
                                  </motion.div>
                                ))}
                              </motion.div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </motion.div>
              </AnimatePresence>
            </Tabs>
          </motion.div>

          {/* Right Column - Actions */}
          <motion.div 
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <Card>
                <CardHeader>
                  <CardTitle>Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button 
                    className="w-full relative overflow-hidden group"
                    size="lg"
                  >
                    <motion.span
                      className="absolute inset-0 bg-white opacity-25"
                      initial={false}
                      animate={{ scale: [1, 2], opacity: [0.25, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    />
                    Volunteer Now
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => {
                      // Add share functionality
                    }}
                  >
                    <Share2 className="mr-2 h-4 w-4" />
                    Share
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full flex items-center justify-center"
                  >
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Provide Feedback
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card>
                <CardHeader>
                  <CardTitle>Notifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <motion.div
                      className="flex items-center p-2 rounded-lg border bg-blue-50 border-blue-200"
                      whileHover={{ scale: 1.02 }}
                    >
                      <Bell className="h-4 w-4 text-blue-500 mr-2" />
                      <p className="text-sm text-blue-700">New training session available</p>
                    </motion.div>
                    <motion.div
                      className="flex items-center p-2 rounded-lg border bg-green-50 border-green-200"
                      whileHover={{ scale: 1.02 }}
                    >
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <p className="text-sm text-green-700">Completed Basic Training Module 1</p>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card>
                <CardHeader>
                  <CardTitle>Need Help?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Have questions about this initiative? Our coordinator is here to help.
                  </p>
                  <Button variant="outline" className="w-full">
                    Contact Coordinator
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {selectedTask && <TaskDetail task={selectedTask} />}
      </AnimatePresence>
    </motion.div>
  );
};

export default VolunteerInitiativePage;