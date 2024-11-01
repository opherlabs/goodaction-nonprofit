'use client';
import React, { useState } from 'react';
import { Users, Calendar, Handshake, Megaphone, ClipboardList, BarChart } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ChevronDown, ChevronUp } from 'lucide-react';

const CommunityOutreachTemplate = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortColumn, setSortColumn] = useState("");
  const [sortDirection, setSortDirection] = useState("asc");

  const entities = [
    { name: "Event", icon: Calendar },
    { name: "Workshop", icon: ClipboardList },
    { name: "Partnership", icon: Handshake },
    { name: "Volunteer", icon: Users },
    { name: "Communication", icon: Megaphone },
    { name: "Impact", icon: BarChart },
  ];

  const sampleData = {
    Event: [
      { id: 1, name: "Community Clean-up Day", date: "2024-05-15", location: "Central Park", expectedAttendees: 100, registeredAttendees: 75, budget: 1000, status: "Planned" },
      { id: 2, name: "Neighborhood Health Fair", date: "2024-07-20", location: "Community Center", expectedAttendees: 500, registeredAttendees: 350, budget: 5000, status: "Planning" },
      { id: 3, name: "Local Business Expo", date: "2024-09-10", location: "Town Hall", expectedAttendees: 200, registeredAttendees: 180, budget: 3000, status: "Confirmed" },
    ],
    Workshop: [
      { id: 1, title: "Financial Literacy 101", instructor: "Jane Doe", date: "2024-06-05", duration: "2 hours", maxParticipants: 30, registeredParticipants: 25, materials: "Handouts provided" },
      { id: 2, title: "Youth Leadership Skills", instructor: "John Smith", date: "2024-08-12", duration: "3 hours", maxParticipants: 20, registeredParticipants: 18, materials: "Online resources" },
      { id: 3, title: "Senior Tech Basics", instructor: "Alice Johnson", date: "2024-07-08", duration: "1.5 hours", maxParticipants: 15, registeredParticipants: 12, materials: "Computers provided" },
    ],
    Partnership: [
      { id: 1, organizationName: "Local Food Bank", contactPerson: "Mark Wilson", email: "mark@foodbank.org", phone: "123-456-7890", partnershipType: "Resource Sharing", startDate: "2024-01-01", status: "Active" },
      { id: 2, organizationName: "City Library", contactPerson: "Sarah Brown", email: "sarah@library.gov", phone: "987-654-3210", partnershipType: "Event Collaboration", startDate: "2024-03-15", status: "Active" },
      { id: 3, organizationName: "Tech Startup Inc.", contactPerson: "Alex Lee", email: "alex@techstartup.com", phone: "555-123-4567", partnershipType: "Sponsorship", startDate: "2024-06-01", status: "Pending" },
    ],
    Volunteer: [
      { id: 1, name: "Emily Davis", email: "emily@example.com", phone: "123-789-4560", skills: "Event Planning, Public Speaking", availability: "Weekends", status: "Active" },
      { id: 2, name: "Michael Johnson", email: "michael@example.com", phone: "987-321-6540", skills: "Graphic Design, Social Media", availability: "Evenings", status: "Active" },
      { id: 3, name: "Lisa Thompson", email: "lisa@example.com", phone: "456-789-1230", skills: "Teaching, Counseling", availability: "Flexible", status: "On Leave" },
    ],
    Communication: [
      { id: 1, type: "Newsletter", audience: "Community Members", sentDate: "2024-04-01", content: "Monthly Update", deliveryMethod: "Email", engagementRate: "35%" },
      { id: 2, type: "Social Media Post", audience: "General Public", sentDate: "2024-04-15", content: "Event Announcement", deliveryMethod: "Facebook", engagementRate: "12%" },
      { id: 3, type: "Press Release", audience: "Media Outlets", sentDate: "2024-05-01", content: "Partnership Launch", deliveryMethod: "Email", engagementRate: "3 Media Pickups" },
    ],
    Impact: [
      { id: 1, metric: "People Served", value: 1500, period: "Q1 2024", program: "Food Distribution", changeFromLastPeriod: "+10%" },
      { id: 2, metric: "Volunteer Hours", value: 500, period: "March 2024", program: "All Programs", changeFromLastPeriod: "+5%" },
      { id: 3, metric: "Workshop Participants", value: 75, period: "Q1 2024", program: "Education Initiatives", changeFromLastPeriod: "+15%" },
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
      <h1 className="text-3xl font-bold mb-6">Enhanced Community Outreach Program Template</h1>
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
              <CardTitle>Community Outreach Program Overview</CardTitle>
              <CardDescription>
                Manage community events, workshops, partnerships, volunteers, communications, and impact assessment efficiently.
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

export default CommunityOutreachTemplate;