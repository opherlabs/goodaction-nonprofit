// 'use client'
// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Book, Users, UserCheck, Calendar, FileText, Award, ChevronRight, BarChart, PieChart, Database, ArrowRight } from 'lucide-react';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { BarChart, LineChart, PieChart as RechartsChart, XAxis, YAxis, Pie, Line } from 'recharts';
// import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

// const EducationTemplateShowcase = () => {
//   const [activeSection, setActiveSection] = useState('overview');
//   const [demoData, setDemoData] = useState(null);

//   useEffect(() => {
//     // Simulating API call to fetch demo data
//     const fetchDemoData = async () => {
//       // In a real application, this would be an API call
//       const data = {
//         students: [
//           { month: 'Jan', count: 100 },
//           { month: 'Feb', count: 120 },
//           { month: 'Mar', count: 150 },
//           { month: 'Apr', count: 180 },
//           { month: 'May', count: 200 },
//         ],
//         courses: [
//           { name: 'Computer Science', students: 50 },
//           { name: 'Mathematics', students: 40 },
//           { name: 'Physics', students: 30 },
//           { name: 'Chemistry', students: 25 },
//         ],
//         resources: [
//           { name: 'Textbooks', value: 150 },
//           { name: 'Laptops', value: 30 },
//           { name: 'Projectors', value: 5 },
//           { name: 'Lab Equipment', value: 80 },
//         ],
//       };
//       setDemoData(data);
//     };

//     fetchDemoData();
//   }, []);

//   const sections = [
//     { id: 'overview', title: 'Overview', icon: Book },
//     { id: 'courses', title: 'Courses', icon: Book },
//     { id: 'students', title: 'Students', icon: Users },
//     { id: 'instructors', title: 'Instructors', icon: UserCheck },
//     { id: 'schedules', title: 'Schedules', icon: Calendar },
//     { id: 'resources', title: 'Resources', icon: FileText },
//     { id: 'assessments', title: 'Assessments', icon: Award },
//     { id: 'datamodel', title: 'Data Model', icon: Database },
//   ];

//   const sectionContent = {
//     overview: {
//       title: "Educational Program Management System",
//       description: "A comprehensive solution for managing educational programs, courses, students, and resources.",
//       features: [
//         "Course Management",
//         "Student Enrollment",
//         "Instructor Profiles",
//         "Scheduling",
//         "Resource Allocation",
//         "Assessment Tracking",
//       ],
//       demo: <OverviewDemo demoData={demoData} />,
//     },
//     courses: {
//       title: "Course Management",
//       description: "Efficiently manage and organize your educational courses.",
//       features: [
//         "Create and edit course details",
//         "Set course capacity and duration",
//         "Assign instructors to courses",
//         "Track enrollment statistics",
//         "Manage course materials and resources",
//       ],
//       demo: <CourseDemo demoData={demoData} />,
//     },
//     students: {
//       title: "Student Management",
//       description: "Keep track of student information, enrollments, and progress.",
//       features: [
//         "Maintain detailed student profiles",
//         "Manage course enrollments",
//         "Track academic progress",
//         "Record attendance",
//         "Generate student reports",
//       ],
//       demo: <StudentDemo demoData={demoData} />,
//     },
//     instructors: {
//       title: "Instructor Management",
//       description: "Organize instructor information and assignments.",
//       features: [
//         "Create instructor profiles",
//         "Assign courses to instructors",
//         "Track teaching hours",
//         "Manage instructor qualifications",
//         "Evaluate instructor performance",
//       ],
//       demo: <InstructorDemo />,
//     },
//     schedules: {
//       title: "Scheduling System",
//       description: "Efficiently plan and manage class schedules.",
//       features: [
//         "Create and manage class timetables",
//         "Avoid scheduling conflicts",
//         "Assign classrooms and resources",
//         "Generate schedule reports",
//         "Send schedule notifications",
//       ],
//       demo: <ScheduleDemo />,
//     },
//     resources: {
//       title: "Resource Management",
//       description: "Track and allocate educational resources effectively.",
//       features: [
//         "Manage textbooks and digital resources",
//         "Track equipment and supplies",
//         "Reserve facilities and classrooms",
//         "Monitor resource usage",
//         "Generate resource reports",
//       ],
//       demo: <ResourceDemo demoData={demoData} />,
//     },
//     assessments: {
//       title: "Assessment Tracking",
//       description: "Create, manage, and track student assessments.",
//       features: [
//         "Design various types of assessments",
//         "Schedule exams and assignments",
//         "Record and analyze grades",
//         "Generate progress reports",
//         "Provide feedback to students",
//       ],
//       demo: <AssessmentDemo />,
//     },
//     datamodel: {
//       title: "Data Model",
//       description: "Explore the underlying data structure of the Education Template.",
//       features: [
//         "Entity relationships",
//         "Key attributes",
//         "Data types",
//         "Scalability considerations",
//         "Integration points",
//       ],
//       demo: <DataModelDemo />,
//     },
//   };

//   const fadeIn = {
//     initial: { opacity: 0, y: 20 },
//     animate: { opacity: 1, y: 0 },
//     exit: { opacity: 0, y: -20 },
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white p-8">
//       <motion.h1 
//         className="text-4xl font-bold text-center mb-12 text-blue-800"
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//       >
//         Education Template Showcase
//       </motion.h1>

//       <div className="flex flex-col lg:flex-row gap-8">
//         <motion.div 
//           className="lg:w-1/4"
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//         >
//           <Card>
//             <CardHeader>
//               <CardTitle>Explore Features</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <ul className="space-y-2">
//                 {sections.map((section) => (
//                   <li key={section.id}>
//                     <Button
//                       variant={activeSection === section.id ? "default" : "ghost"}
//                       className="w-full justify-start"
//                       onClick={() => setActiveSection(section.id)}
//                     >
//                       <section.icon className="mr-2 h-4 w-4" />
//                       {section.title}
//                       <ChevronRight className="ml-auto h-4 w-4" />
//                     </Button>
//                   </li>
//                 ))}
//               </ul>
//             </CardContent>
//           </Card>
//         </motion.div>

//         <motion.div 
//           className="lg:w-3/4"
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5, delay: 0.4 }}
//         >
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={activeSection}
//               initial="initial"
//               animate="animate"
//               exit="exit"
//               variants={fadeIn}
//               transition={{ duration: 0.3 }}
//             >
//               <Card>
//                 <CardHeader>
//                   <CardTitle>{sectionContent[activeSection].title}</CardTitle>
//                   <CardDescription>{sectionContent[activeSection].description}</CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   <Tabs defaultValue="features">
//                     <TabsList>
//                       <TabsTrigger value="features">Key Features</TabsTrigger>
//                       <TabsTrigger value="demo">Interactive Demo</TabsTrigger>
//                     </TabsList>
//                     <TabsContent value="features">
//                       <ul className="space-y-2 mt-4">
//                         {sectionContent[activeSection].features.map((feature, index) => (
//                           <motion.li 
//                             key={index}
//                             variants={fadeIn}
//                             className="flex items-center space-x-2"
//                           >
//                             <ArrowRight className="h-4 w-4 text-blue-500" />
//                             <span>{feature}</span>
//                           </motion.li>
//                         ))}
//                       </ul>
//                     </TabsContent>
//                     <TabsContent value="demo">
//                       <div className="mt-4">
//                         {sectionContent[activeSection].demo}
//                       </div>
//                     </TabsContent>
//                   </Tabs>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           </AnimatePresence>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// const OverviewDemo = ({ demoData }) => (
//   <div className="space-y-4">
//     <Alert>
//       <AlertTitle>Welcome to our Educational Program Management System</AlertTitle>
//       <AlertDescription>
//         Explore our key metrics and visualizations below to get a comprehensive overview of your educational programs.
//       </AlertDescription>
//     </Alert>
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//       <Card>
//         <CardHeader>
//           <CardTitle>Total Students</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <p className="text-4xl font-bold">1,234</p>
//         </CardContent>
//       </Card>
//       <Card>
//         <CardHeader>
//           <CardTitle>Active Courses</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <p className="text-4xl font-bold">56</p>
//         </CardContent>
//       </Card>
//       <Card>
//         <CardHeader>
//           <CardTitle>Avg. Course Rating</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <p className="text-4xl font-bold">4.7 / 5</p>
//         </CardContent>
//       </Card>
//     </div>
//     {demoData && (
//       <div className="mt-8">
//         <h3 className="text-xl font-bold mb-4">Student Enrollment Trend</h3>
//         <LineChart width={600} height={300} data={demoData.students}>
//           <XAxis dataKey="month" />
//           <YAxis />
//           <Line type="monotone" dataKey="count" stroke="#8884d8" />
//         </LineChart>
//       </div>
//     )}
//   </div>
// );

// const CourseDemo = ({ demoData }) => (
//   <div className="space-y-4">
//     <Alert>
//       <AlertTitle>Course Management Dashboard</AlertTitle>
//       <AlertDescription>
//         Explore our course management features and get insights into course popularity and enrollment statistics.
//       </AlertDescription>
//     </Alert>
//     <div className="border p-4 rounded-md">
//       <h3 className="font-bold mb-2">Sample Course: Introduction to Computer Science</h3>
//       <p><strong>Instructor:</strong> Dr. Jane Smith</p>
//       <p><strong>Duration:</strong> 12 weeks</p>
//       <p><strong>Capacity:</strong> 30 students (25 enrolled)</p>
//       <p><strong>Resources:</strong> 3 textbooks, 15 online modules</p>
//       <Button className="mt-2">Edit Course</Button>
//     </div>
//     {demoData && (
//       <div className="mt-8">
//         <h3 className="text-xl font-bold mb-4">Course Enrollment Distribution</h3>
//         <PieChart width={400} height={400}>
//           <Pie data={demoData.courses} dataKey="students" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label />
//         </PieChart>
//       </div>
//     )}
//   </div>
// );

// const StudentDemo = ({ demoData }) => (
//   <div className="space-y-4">
//     <Alert>
//       <AlertTitle>Student Management System</AlertTitle>
//       <AlertDescription>
//         Manage student profiles, track progress, and analyze performance trends.
//       </AlertDescription>
//     </Alert>
//     <div className="border p-4 rounded-md">
//       <h3 className="font-bold mb-2">Student Profile: John Doe</h3>
//       <p><strong>ID:</strong> STU12345</p>
//       <p><strong>Enrolled Courses:</strong> 3</p>
//       <p><strong>GPA:</strong> 3.7</p>
//       <p><strong>Attendance Rate:</strong> 95%</p>
//       <Button className="mt-2">View Full Profile</Button>
//     </div>
//     {demoData && (
//       <div className="mt-8">
//         <h3 className="text-xl font-bold mb-4">Student Enrollment Growth</h3>
//         <BarChart width={600} height={300} data={demoData.students}>
//           <XAxis dataKey="month" />
//           <YAxis />
//           <BarChart dataKey="count" fill="#82ca9d" />
//         </BarChart>
//       </div>
//     )}
//   </div>
// );

// const InstructorDemo = () => (
//   <div className="space-y-4">
//     <Alert>
//       <AlertTitle>Instructor Management Portal</AlertTitle>
//       <AlertDescription>
//         Efficiently manage instructor information, assignments, and performance metrics.
//       </AlertDescription>
//     </Alert>
//     <div className="border p-4 rounded-md">
//       <h3 className="font-bold mb-2">Instructor Profile: Dr. Jane Smith</h3>
//       <p><strong>ID:</strong> INS789</p>
//       <p><strong>Department:</strong> Computer Science</p>
//       <p><strong>Courses Teaching:</strong> 2</p>
//       <p><strong>Office Hours:</strong> Mon, Wed 2-4 PM</p>
//       <Button className="mt-2">Assign Course</Button>
//     </div>
//     <div className="mt-4">
//       <h3 className="text-xl font-bold mb-2">Instructor Performance Metrics</h3>
//       <div className="grid grid-cols-2 gap-4">
//         <Card>
//           <CardHeader>
//             <CardTitle>Average Student Rating</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <p className="text-3xl font-bold text-green-600">4.8 / 5</p
//             </CardContent>
//         </Card>
//         <Card>
//           <CardHeader>
//             <CardTitle>Courses Taught This Year</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <p className="text-3xl font-bold text-blue-600">5</p>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   </div>
// );

// const ScheduleDemo = () => (
//   <div className="space-y-4">
//     <Alert>
//       <AlertTitle>Interactive Scheduling System</AlertTitle>
//       <AlertDescription>
//         Efficiently manage class schedules, avoid conflicts, and optimize resource allocation.
//       </AlertDescription>
//     </Alert>
//     <div className="border p-4 rounded-md">
//       <h3 className="font-bold mb-2">Weekly Schedule</h3>
//       <table className="w-full">
//         <thead>
//           <tr>
//             <th className="border p-2">Time</th>
//             <th className="border p-2">Monday</th>
//             <th className="border p-2">Tuesday</th>
//             <th className="border p-2">Wednesday</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td className="border p-2">9:00 AM</td>
//             <td className="border p-2 bg-blue-100">Intro to CS</td>
//             <td className="border p-2">-</td>
//             <td className="border p-2 bg-blue-100">Intro to CS</td>
//           </tr>
//           <tr>
//             <td className="border p-2">11:00 AM</td>
//             <td className="border p-2">-</td>
//             <td className="border p-2 bg-green-100">Data Structures</td>
//             <td className="border p-2">-</td>
//           </tr>
//         </tbody>
//       </table>
//       <Button className="mt-4">Add Class</Button>
//     </div>
//     <div className="mt-4">
//       <h3 className="text-xl font-bold mb-2">Room Utilization</h3>
//       <BarChart width={500} height={300} data={[
//         {name: 'Room A', usage: 80},
//         {name: 'Room B', usage: 65},
//         {name: 'Room C', usage: 90},
//         {name: 'Room D', usage: 70},
//       ]}>
//         <XAxis dataKey="name" />
//         <YAxis />
//         <BarChart dataKey="usage" fill="#8884d8" />
//       </BarChart>
//     </div>
//   </div>
// );

// const ResourceDemo = ({ demoData }) => (
//   <div className="space-y-4">
//     <Alert>
//       <AlertTitle>Resource Management Center</AlertTitle>
//       <AlertDescription>
//         Track, allocate, and optimize the use of educational resources across your programs.
//       </AlertDescription>
//     </Alert>
//     <div className="border p-4 rounded-md">
//       <h3 className="font-bold mb-2">Resource Inventory</h3>
//       <ul className="list-disc list-inside">
//         <li>Textbooks: 150 available</li>
//         <li>Laptops: 30 available</li>
//         <li>Projectors: 5 available</li>
//         <li>Lab Equipment: 80% utilization</li>
//       </ul>
//       <Button className="mt-2">Reserve Resource</Button>
//     </div>
//     {demoData && (
//       <div className="mt-8">
//         <h3 className="text-xl font-bold mb-4">Resource Distribution</h3>
//         <PieChart width={400} height={400}>
//           <Pie data={demoData.resources} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#82ca9d" label />
//         </PieChart>
//       </div>
//     )}
//   </div>
// );

// const AssessmentDemo = () => (
//   <div className="space-y-4">
//     <Alert>
//       <AlertTitle>Comprehensive Assessment System</AlertTitle>
//       <AlertDescription>
//         Design, manage, and analyze various types of student assessments to track learning outcomes.
//       </AlertDescription>
//     </Alert>
//     <div className="border p-4 rounded-md">
//       <h3 className="font-bold mb-2">Assessment: Midterm Exam</h3>
//       <p><strong>Course:</strong> Introduction to Computer Science</p>
//       <p><strong>Date:</strong> October 15, 2024</p>
//       <p><strong>Duration:</strong> 2 hours</p>
//       <p><strong>Total Points:</strong> 100</p>
//       <Button className="mt-2">Grade Assessments</Button>
//     </div>
//     <div className="mt-4">
//       <h3 className="text-xl font-bold mb-2">Assessment Performance Overview</h3>
//       <LineChart width={500} height={300} data={[
//         {name: 'Quiz 1', avgScore: 85},
//         {name: 'Assignment 1', avgScore: 78},
//         {name: 'Midterm', avgScore: 82},
//         {name: 'Quiz 2', avgScore: 88},
//         {name: 'Final Project', avgScore: 90},
//       ]}>
//         <XAxis dataKey="name" />
//         <YAxis />
//         <Line type="monotone" dataKey="avgScore" stroke="#8884d8" />
//       </LineChart>
//     </div>
//   </div>
// );

// const DataModelDemo = () => (
//   <div className="space-y-4">
//     <Alert>
//       <AlertTitle>Education Template Data Model</AlertTitle>
//       <AlertDescription>
//         Explore the underlying data structure that powers the Education Template.
//       </AlertDescription>
//     </Alert>
//     <div className="border p-4 rounded-md">
//       <h3 className="font-bold mb-2">Entity Relationship Diagram</h3>
//       <img src="/api/placeholder/800/600" alt="Entity Relationship Diagram" className="w-full h-auto" />
//     </div>
//     <div className="mt-4">
//       <h3 className="text-xl font-bold mb-2">Key Entities</h3>
//       <ul className="list-disc list-inside">
//         <li>Program</li>
//         <li>Course</li>
//         <li>Student</li>
//         <li>Instructor</li>
//         <li>Assessment</li>
//         <li>Resource</li>
//       </ul>
//     </div>
//     <div className="mt-4">
//       <h3 className="text-xl font-bold mb-2">Scalability Considerations</h3>
//       <p>The data model is designed to handle:</p>
//       <ul className="list-disc list-inside">
//         <li>Multiple programs and courses</li>
//         <li>Large student and instructor populations</li>
//         <li>Diverse assessment types</li>
//         <li>Extensive resource tracking</li>
//       </ul>
//     </div>
//     <Button className="mt-4">Download Full Data Model Documentation</Button>
//   </div>
// );

// export default EducationTemplateShowcase;

export default function Try(){
    return (
        <div>
            <h1>Try</h1>
        </div>
    )
}