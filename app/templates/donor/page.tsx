"use client";
import React, { useState } from 'react';
import { Users, DollarSign, Calendar, MessageSquare, Target, BarChart } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ChevronDown, ChevronUp } from 'lucide-react';

const DonorManagementTemplate = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortColumn, setSortColumn] = useState("");
  const [sortDirection, setSortDirection] = useState("asc");

  const entities = [
    { name: "Donor", icon: Users },
    { name: "Donation", icon: DollarSign },
    { name: "Campaign", icon: Target },
    { name: "Event", icon: Calendar },
    { name: "Communication", icon: MessageSquare },
    { name: "Report", icon: BarChart },
  ];

  const sampleData = {
    Donor: [
      { id: 1, fullName: "John Smith", email: "john@example.com", phone: "123-456-7890", donorType: "Individual", totalDonations: 5000, lastDonationDate: "2024-02-15", preferredContact: "Email" },
      { id: 2, fullName: "ABC Corporation", email: "contact@abc.com", phone: "987-654-3210", donorType: "Corporate", totalDonations: 25000, lastDonationDate: "2024-03-01", preferredContact: "Phone" },
      { id: 3, fullName: "Sarah Johnson", email: "sarah@example.com", phone: "555-123-4567", donorType: "Individual", totalDonations: 1500, lastDonationDate: "2024-01-20", preferredContact: "Mail" },
    ],
    Donation: [
      { id: 1, donorId: 1, amount: 1000, date: "2024-02-15", campaign: "Annual Fund", paymentMethod: "Credit Card", isRecurring: false },
      { id: 2, donorId: 2, amount: 10000, date: "2024-03-01", campaign: "Capital Campaign", paymentMethod: "Bank Transfer", isRecurring: false },
      { id: 3, donorId: 3, amount: 100, date: "2024-01-20", campaign: "Monthly Giving", paymentMethod: "PayPal", isRecurring: true },
    ],
    Campaign: [
      { id: 1, name: "Annual Fund", startDate: "2024-01-01", endDate: "2024-12-31", goal: 100000, amountRaised: 45000, status: "Active" },
      { id: 2, name: "Capital Campaign", startDate: "2024-03-01", endDate: "2025-02-28", goal: 1000000, amountRaised: 250000, status: "Active" },
      { id: 3, name: "Giving Tuesday", startDate: "2024-11-28", endDate: "2024-11-28", goal: 50000, amountRaised: 0, status: "Planned" },
    ],
    Event: [
      { id: 1, name: "Annual Gala", date: "2024-09-15", location: "Grand Hotel", expectedAttendees: 200, ticketsSold: 150, sponsorshipTarget: 50000, sponsorshipSecured: 35000 },
      { id: 2, name: "Charity Run", date: "2024-06-01", location: "City Park", expectedAttendees: 500, registrations: 300, fundraisingGoal: 25000, amountRaised: 15000 },
      { id: 3, name: "Donor Appreciation Dinner", date: "2024-11-10", location: "Community Center", expectedAttendees: 100, invitationsSent: 100, rsvps: 75 },
    ],
    Communication: [
      { id: 1, type: "Thank You", recipient: "John Smith", sentDate: "2024-02-16", channel: "Email", response: "Positive", followUpNeeded: false },
      { id: 2, type: "Campaign Update", recipient: "All Donors", sentDate: "2024-03-15", channel: "Mail", response: "Mixed", followUpNeeded: true },
      { id: 3, type: "Event Invitation", recipient: "Sarah Johnson", sentDate: "2024-10-15", channel: "Email", response: "No Response", followUpNeeded: true },
    ],
    Report: [
      { id: 1, name: "Q1 Fundraising Summary", generationDate: "2024-04-01", period: "Q1 2024", totalRevenue: 150000, topCampaign: "Annual Fund", donorRetentionRate: "85%" },
      { id: 2, name: "Donor Segmentation Analysis", generationDate: "2024-03-15", period: "2024 YTD", segmentsCovered: 5, topSegment: "Major Donors", insightsGenerated: 10 },
      { id: 3, name: "Event ROI Report", generationDate: "2024-09-30", period: "2024 Q3", eventsAnalyzed: 2, totalRevenue: 75000, totalCosts: 25000, netROI: "200%" },
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
      <h1 className="text-3xl font-bold mb-6">Enhanced Donor Management Program Template</h1>
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
              <CardTitle>Donor Management Program Overview</CardTitle>
              <CardDescription>
                Manage donors, donations, campaigns, events, communications, and reports efficiently.
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

export default DonorManagementTemplate;