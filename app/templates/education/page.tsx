"use client";
import React, { useState } from 'react';
import { Book, Users, UserCheck, Calendar, FileText, Award } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ChevronDown, ChevronUp } from 'lucide-react';


const EducationalProgramTemplate = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortColumn, setSortColumn] = useState("");
  const [sortDirection, setSortDirection] = useState("asc");

  const entities = [
    { name: "Course", icon: Book },
    { name: "Student", icon: Users },
    { name: "Instructor", icon: UserCheck },
    { name: "Schedule", icon: Calendar },
    { name: "Resource", icon: FileText },
    { name: "Assessment", icon: Award },
  ];

  const sampleData = {
    Course: [
      { id: 1, courseName: "Introduction to Programming", description: "Basic programming concepts", level: "Beginner", duration: "8 weeks", maxEnrollment: 30, currentEnrollment: 25 },
      { id: 2, courseName: "Advanced Mathematics", description: "Complex mathematical theories", level: "Advanced", duration: "12 weeks", maxEnrollment: 20, currentEnrollment: 15 },
      { id: 3, courseName: "Environmental Science", description: "Study of ecosystems and climate", level: "Intermediate", duration: "10 weeks", maxEnrollment: 25, currentEnrollment: 22 },
    ],
    Student: [
      { id: 1, fullName: "Alice Johnson", email: "alice@example.com", phoneNumber: "123-456-7890", enrollmentDate: "2024-01-15", status: "Active", coursesEnrolled: 2 },
      { id: 2, fullName: "Bob Smith", email: "bob@example.com", phoneNumber: "098-765-4321", enrollmentDate: "2024-02-01", status: "Active", coursesEnrolled: 1 },
      { id: 3, fullName: "Charlie Brown", email: "charlie@example.com", phoneNumber: "555-123-4567", enrollmentDate: "2024-01-20", status: "Inactive", coursesEnrolled: 0 },
    ],
    Instructor: [
      { id: 1, fullName: "Dr. Jane Doe", email: "jane.doe@example.com", phoneNumber: "111-222-3333", specialization: "Computer Science", yearsOfExperience: 10, activeCourses: 2 },
      { id: 2, fullName: "Prof. John Smith", email: "john.smith@example.com", phoneNumber: "444-555-6666", specialization: "Mathematics", yearsOfExperience: 15, activeCourses: 1 },
      { id: 3, fullName: "Dr. Emily Brown", email: "emily.brown@example.com", phoneNumber: "777-888-9999", specialization: "Environmental Science", yearsOfExperience: 8, activeCourses: 1 },
    ],
    Schedule: [
      { id: 1, courseId: 1, courseName: "Introduction to Programming", instructorName: "Dr. Jane Doe", dayOfWeek: "Monday", startTime: "10:00 AM", endTime: "12:00 PM", room: "CS-101" },
      { id: 2, courseId: 2, courseName: "Advanced Mathematics", instructorName: "Prof. John Smith", dayOfWeek: "Tuesday", startTime: "2:00 PM", endTime: "4:00 PM", room: "MATH-201" },
      { id: 3, courseId: 3, courseName: "Environmental Science", instructorName: "Dr. Emily Brown", dayOfWeek: "Wednesday", startTime: "1:00 PM", endTime: "3:00 PM", room: "ENV-301" },
    ],
    Resource: [
      { id: 1, resourceName: "Programming Textbook", type: "Book", format: "Physical", availableCopies: 25, totalCopies: 30, associatedCourse: "Introduction to Programming" },
      { id: 2, resourceName: "Math Problem Set", type: "Document", format: "PDF", availableCopies: "Unlimited", totalCopies: "Unlimited", associatedCourse: "Advanced Mathematics" },
      { id: 3, resourceName: "Environmental Case Studies", type: "Video", format: "MP4", availableCopies: "Unlimited", totalCopies: "Unlimited", associatedCourse: "Environmental Science" },
    ],
    Assessment: [
      { id: 1, assessmentName: "Programming Midterm", courseId: 1, type: "Exam", dateScheduled: "2024-04-15", duration: "2 hours", totalPoints: 100, passingScore: 60 },
      { id: 2, assessmentName: "Math Problem Set 1", courseId: 2, type: "Assignment", dateScheduled: "2024-03-20", duration: "1 week", totalPoints: 50, passingScore: 30 },
      { id: 3, assessmentName: "Ecosystem Project", courseId: 3, type: "Project", dateScheduled: "2024-05-01", duration: "3 weeks", totalPoints: 200, passingScore: 120 },
    ],
  };

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const sortedData = (entityName) => {
    return [...sampleData[entityName]].sort((a, b) => {
      if (a[sortColumn] < b[sortColumn]) return sortDirection === "asc" ? -1 : 1;
      if (a[sortColumn] > b[sortColumn]) return sortDirection === "asc" ? 1 : -1;
      return 0;
    });
  };

  const filteredData = (entityName) => {
    return sortedData(entityName).filter(item =>
      Object.values(item).some(val =>
        val.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Enhanced Educational Program Template</h1>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-7">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          {entities.map((entity) => (
            <TabsTrigger key={entity.name} value={entity.name}>
              {entity.name}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Educational Program Overview</CardTitle>
              <CardDescription>
                Manage courses, students, instructors, schedules, resources, and assessments efficiently.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {entities.map((entity) => (
                  <Card key={entity.name}>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        {entity.name}
                      </CardTitle>
                      <entity.icon className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{sampleData[entity.name].length}</div>
                      <p className="text-xs text-muted-foreground">
                        total entries
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        {entities.map((entity) => (
          <TabsContent key={entity.name} value={entity.name}>
            <Card>
              <CardHeader>
                <CardTitle>{entity.name} Data Model</CardTitle>
                <CardDescription>
                  Manage and view {entity.name} data.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <Search className="h-4 w-4 mr-2" />
                    <Input
                      placeholder="Search..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="max-w-sm"
                    />
                  </div>
                  <Button>Add New {entity.name}</Button>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        {Object.keys(sampleData[entity.name][0]).map((key) => (
                          <th 
                            key={key} 
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                            onClick={() => handleSort(key)}
                          >
                            {key}
                            {sortColumn === key && (
                              sortDirection === "asc" ? <ChevronUp className="inline ml-1 h-4 w-4" /> : <ChevronDown className="inline ml-1 h-4 w-4" />
                            )}
                          </th>
                        ))}
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {filteredData(entity.name).map((item, index) => (
                        <tr key={index}>
                          {Object.values(item).map((value, valueIndex) => (
                            <td key={valueIndex} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {value}
                            </td>
                          ))}
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <Button variant="outline" size="sm" className="mr-2">Edit</Button>
                            <Button variant="outline" size="sm">Delete</Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default EducationalProgramTemplate;