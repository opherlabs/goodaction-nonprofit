"use client";
import React, { useState } from 'react';
import { Users, Clipboard, Calendar, MessageSquare, Award, Search, ChevronDown, ChevronUp } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";

const VolunteerProgramTemplate = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortColumn, setSortColumn] = useState("");
  const [sortDirection, setSortDirection] = useState("asc");

  const entities = [
    { name: "Volunteer", icon: Users },
    { name: "VolunteerTraining", icon: Clipboard },
    { name: "VolunteerSchedule", icon: Calendar },
    { name: "VolunteerFeedback", icon: MessageSquare },
    { name: "VolunteerTask", icon: Award },
  ];

  const sampleData = {
    Volunteer: [
      { id: 1, fullName: "John Doe", email: "john@example.com", phoneNumber: "123-456-7890", status: "Active", skills: "First Aid, Event Management" },
      { id: 2, fullName: "Jane Smith", email: "jane@example.com", phoneNumber: "098-765-4321", status: "Inactive", skills: "Fundraising, Social Media" },
      { id: 3, fullName: "Alice Johnson", email: "alice@example.com", phoneNumber: "555-123-4567", status: "Active", skills: "Teaching, Counseling" },
      { id: 4, fullName: "Bob Williams", email: "bob@example.com", phoneNumber: "777-888-9999", status: "Active", skills: "Carpentry, Plumbing" },
    ],
    VolunteerTraining: [
      { id: 1, trainingName: "First Aid", description: "Basic first aid training", startDate: "2024-03-15", endDate: "2024-03-16", status: "Scheduled", capacity: 20, enrolled: 15 },
      { id: 2, trainingName: "Event Management", description: "How to manage community events", startDate: "2024-04-01", endDate: "2024-04-02", status: "Completed", capacity: 15, enrolled: 15 },
      { id: 3, trainingName: "Fundraising Basics", description: "Introduction to fundraising techniques", startDate: "2024-05-10", endDate: "2024-05-11", status: "Scheduled", capacity: 25, enrolled: 10 },
    ],
    VolunteerSchedule: [
      { id: 1, volunteerName: "John Doe", taskName: "Community Cleanup", scheduledDate: "2024-03-20", startTime: "09:00", endTime: "12:00", location: "Central Park" },
      { id: 2, volunteerName: "Jane Smith", taskName: "Food Drive", scheduledDate: "2024-03-25", startTime: "10:00", endTime: "14:00", location: "City Hall" },
      { id: 3, volunteerName: "Alice Johnson", taskName: "Youth Mentoring", scheduledDate: "2024-03-22", startTime: "15:00", endTime: "17:00", location: "Community Center" },
    ],
    VolunteerFeedback: [
      { id: 1, volunteerName: "John Doe", taskName: "Community Cleanup", date: "2024-03-20", rating: 5, comments: "Great experience! Well organized and impactful." },
      { id: 2, volunteerName: "Jane Smith", taskName: "Food Drive", date: "2024-03-25", rating: 4, comments: "Well organized, but long hours. Consider shorter shifts." },
      { id: 3, volunteerName: "Alice Johnson", taskName: "Youth Mentoring", date: "2024-03-22", rating: 5, comments: "Extremely rewarding. The kids were fantastic!" },
    ],
    VolunteerTask: [
      { id: 1, taskName: "Community Cleanup", description: "Clean up local park", startDate: "2024-03-20", endDate: "2024-03-20", location: "Central Park", volunteersNeeded: 10, volunteersAssigned: 8 },
      { id: 2, taskName: "Food Drive", description: "Collect food donations", startDate: "2024-03-25", endDate: "2024-03-25", location: "City Hall", volunteersNeeded: 5, volunteersAssigned: 5 },
      { id: 3, taskName: "Youth Mentoring", description: "Mentor local youth", startDate: "2024-03-22", endDate: "2024-06-22", location: "Community Center", volunteersNeeded: 15, volunteersAssigned: 12 },
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
      <h1 className="text-3xl font-bold mb-6">Enhanced Volunteer Program Template</h1>
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-6">
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
              <CardTitle>Enhanced Volunteer Program Overview</CardTitle>
              <CardDescription>
                Manage volunteer recruitment, training, scheduling, and feedback efficiently.
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

export default VolunteerProgramTemplate;