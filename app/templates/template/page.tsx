'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Book, Users, UserCheck, Calendar, FileText, Award, ChevronRight, BarChart, PieChart } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const EducationTemplateShowcase = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    { id: 'overview', title: 'Overview', icon: Book },
    { id: 'courses', title: 'Courses', icon: Book },
    { id: 'students', title: 'Students', icon: Users },
    { id: 'instructors', title: 'Instructors', icon: UserCheck },
    { id: 'schedules', title: 'Schedules', icon: Calendar },
    { id: 'resources', title: 'Resources', icon: FileText },
    { id: 'assessments', title: 'Assessments', icon: Award },
  ];

  const sectionContent = {
    overview: {
      title: "Educational Program Management System",
      description: "A comprehensive solution for managing educational programs, courses, students, and resources.",
      features: [
        "Course Management",
        "Student Enrollment",
        "Instructor Profiles",
        "Scheduling",
        "Resource Allocation",
        "Assessment Tracking",
      ],
      demo: <OverviewDemo />,
    },
    courses: {
      title: "Course Management",
      description: "Efficiently manage and organize your educational courses.",
      features: [
        "Create and edit course details",
        "Set course capacity and duration",
        "Assign instructors to courses",
        "Track enrollment statistics",
        "Manage course materials and resources",
      ],
      demo: <CourseDemo />,
    },
    students: {
      title: "Student Management",
      description: "Keep track of student information, enrollments, and progress.",
      features: [
        "Maintain detailed student profiles",
        "Manage course enrollments",
        "Track academic progress",
        "Record attendance",
        "Generate student reports",
      ],
      demo: <StudentDemo />,
    },
    instructors: {
      title: "Instructor Management",
      description: "Organize instructor information and assignments.",
      features: [
        "Create instructor profiles",
        "Assign courses to instructors",
        "Track teaching hours",
        "Manage instructor qualifications",
        "Evaluate instructor performance",
      ],
      demo: <InstructorDemo />,
    },
    schedules: {
      title: "Scheduling System",
      description: "Efficiently plan and manage class schedules.",
      features: [
        "Create and manage class timetables",
        "Avoid scheduling conflicts",
        "Assign classrooms and resources",
        "Generate schedule reports",
        "Send schedule notifications",
      ],
      demo: <ScheduleDemo />,
    },
    resources: {
      title: "Resource Management",
      description: "Track and allocate educational resources effectively.",
      features: [
        "Manage textbooks and digital resources",
        "Track equipment and supplies",
        "Reserve facilities and classrooms",
        "Monitor resource usage",
        "Generate resource reports",
      ],
      demo: <ResourceDemo />,
    },
    assessments: {
      title: "Assessment Tracking",
      description: "Create, manage, and track student assessments.",
      features: [
        "Design various types of assessments",
        "Schedule exams and assignments",
        "Record and analyze grades",
        "Generate progress reports",
        "Provide feedback to students",
      ],
      demo: <AssessmentDemo />,
    },
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white p-8">
      <motion.h1 
        className="text-4xl font-bold text-center mb-12 text-blue-800"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Education Template Showcase
      </motion.h1>

      <div className="flex flex-col lg:flex-row gap-8">
        <motion.div 
          className="lg:w-1/4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Explore Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {sections.map((section) => (
                  <li key={section.id}>
                    <Button
                      variant={activeSection === section.id ? "default" : "ghost"}
                      className="w-full justify-start"
                      onClick={() => setActiveSection(section.id)}
                    >
                      <section.icon className="mr-2 h-4 w-4" />
                      {section.title}
                      <ChevronRight className="ml-auto h-4 w-4" />
                    </Button>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div 
          className="lg:w-3/4"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial="initial"
              animate="animate"
              exit="exit"
              variants={fadeIn}
              transition={{ duration: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{sectionContent[activeSection].title}</CardTitle>
                  <CardDescription>{sectionContent[activeSection].description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="features">
                    <TabsList>
                      <TabsTrigger value="features">Key Features</TabsTrigger>
                      <TabsTrigger value="demo">Interactive Demo</TabsTrigger>
                    </TabsList>
                    <TabsContent value="features">
                      <ul className="space-y-2 mt-4">
                        {sectionContent[activeSection].features.map((feature, index) => (
                          <motion.li 
                            key={index}
                            variants={fadeIn}
                            className="flex items-center space-x-2"
                          >
                            <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                            <span>{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </TabsContent>
                    <TabsContent value="demo">
                      <div className="mt-4">
                        {sectionContent[activeSection].demo}
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

const OverviewDemo = () => (
  <div className="space-y-4">
    <p>Welcome to our Educational Program Management System. Here's a quick overview of our key metrics:</p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Total Students</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-4xl font-bold">1,234</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Active Courses</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-4xl font-bold">56</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Avg. Course Rating</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-4xl font-bold">4.7 / 5</p>
        </CardContent>
      </Card>
    </div>
  </div>
);

const CourseDemo = () => (
  <div className="space-y-4">
    <p>Explore our course management features:</p>
    <div className="border p-4 rounded-md">
      <h3 className="font-bold mb-2">Sample Course: Introduction to Computer Science</h3>
      <p><strong>Instructor:</strong> Dr. Jane Smith</p>
      <p><strong>Duration:</strong> 12 weeks</p>
      <p><strong>Capacity:</strong> 30 students (25 enrolled)</p>
      <p><strong>Resources:</strong> 3 textbooks, 15 online modules</p>
      <Button className="mt-2">Edit Course</Button>
    </div>
  </div>
);

const StudentDemo = () => (
  <div className="space-y-4">
    <p>Manage student profiles and track progress:</p>
    <div className="border p-4 rounded-md">
      <h3 className="font-bold mb-2">Student Profile: John Doe</h3>
      <p><strong>ID:</strong> STU12345</p>
      <p><strong>Enrolled Courses:</strong> 3</p>
      <p><strong>GPA:</strong> 3.7</p>
      <p><strong>Attendance Rate:</strong> 95%</p>
      <Button className="mt-2">View Full Profile</Button>
    </div>
  </div>
);

const InstructorDemo = () => (
  <div className="space-y-4">
    <p>Manage instructor information and assignments:</p>
    <div className="border p-4 rounded-md">
      <h3 className="font-bold mb-2">Instructor Profile: Dr. Jane Smith</h3>
      <p><strong>ID:</strong> INS789</p>
      <p><strong>Department:</strong> Computer Science</p>
      <p><strong>Courses Teaching:</strong> 2</p>
      <p><strong>Office Hours:</strong> Mon, Wed 2-4 PM</p>
      <Button className="mt-2">Assign Course</Button>
    </div>
  </div>
);

const ScheduleDemo = () => (
  <div className="space-y-4">
    <p>View and manage class schedules:</p>
    <div className="border p-4 rounded-md">
      <h3 className="font-bold mb-2">Weekly Schedule</h3>
      <table className="w-full">
        <thead>
          <tr>
            <th>Time</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>9:00 AM</td>
            <td>Intro to CS</td>
            <td>-</td>
            <td>Intro to CS</td>
          </tr>
          <tr>
            <td>11:00 AM</td>
            <td>-</td>
            <td>Data Structures</td>
            <td>-</td>
          </tr>
        </tbody>
      </table>
      <Button className="mt-2">Add Class</Button>
    </div>
  </div>
);

const ResourceDemo = () => (
  <div className="space-y-4">
    <p>Manage and allocate educational resources:</p>
    <div className="border p-4 rounded-md">
      <h3 className="font-bold mb-2">Resource Inventory</h3>
      <ul className="list-disc list-inside">
        <li>Textbooks: 150 available</li>
        <li>Laptops: 30 available</li>
        <li>Projectors: 5 available</li>
        <li>Lab Equipment: 80% utilization</li>
      </ul>
      <Button className="mt-2">Reserve Resource</Button>
    </div>
  </div>
);

const AssessmentDemo = () => (
  <div className="space-y-4">
    <p>Create and manage student assessments:</p>
    <div className="border p-4 rounded-md">
      <h3 className="font-bold mb-2">Assessment: Midterm Exam</h3>
      <p><strong>Course:</strong> Introduction to Computer Science</p>
      <p><strong>Date:</strong> October 15, 2024</p>
      <p><strong>Duration:</strong> 2 hours</p>
      <p><strong>Total Points:</strong> 100</p>
      <Button className="mt-2">Grade Assessments</Button>
    </div>
  </div>
);

export default EducationTemplateShowcase;