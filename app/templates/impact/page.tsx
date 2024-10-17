'use client'
'use client';
import React, { useState } from 'react';
import { BarChart, Target, Users, FileText, LineChart, PieChart, Search, ChevronDown, ChevronUp } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


const ProgramImpactAssessmentTemplate = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortColumn, setSortColumn] = useState("");
  const [sortDirection, setSortDirection] = useState("asc");

  const entities = [
    { name: "Outcome", icon: Target },
    { name: "Assessment", icon: BarChart },
    { name: "Stakeholder", icon: Users },
    { name: "Survey", icon: FileText },
    { name: "LogicModel", icon: LineChart },
    { name: "Report", icon: PieChart },
  ];

  const sampleData = {
    Outcome: [
      { id: 1, name: "Increased Literacy Rates", program: "Adult Education", indicator: "Reading Level", targetValue: 85, actualValue: 80, measurementMethod: "Standardized Test" },
      { id: 2, name: "Improved Community Health", program: "Wellness Initiative", indicator: "BMI Reduction", targetValue: 15, actualValue: 12, measurementMethod: "Health Screenings" },
      { id: 3, name: "Enhanced Job Readiness", program: "Youth Employment", indicator: "Job Placement Rate", targetValue: 70, actualValue: 65, measurementMethod: "Post-Program Survey" },
    ],
    Assessment: [
      { id: 1, name: "Literacy Program Evaluation", program: "Adult Education", date: "2024-06-30", method: "Mixed Methods", keyFindings: "80% improvement in reading scores", recommendations: "Increase one-on-one tutoring" },
      { id: 2, name: "Community Health Impact", program: "Wellness Initiative", date: "2024-09-15", method: "Quantitative Analysis", keyFindings: "15% reduction in community BMI", recommendations: "Expand nutrition education" },
      { id: 3, name: "Youth Employment Outcomes", program: "Youth Employment", date: "2024-08-01", method: "Longitudinal Study", keyFindings: "65% job placement within 6 months", recommendations: "Strengthen employer partnerships" },
    ],
    Stakeholder: [
      { id: 1, name: "City Education Board", type: "Government", contactPerson: "John Doe", email: "john@cityedu.gov", interestLevel: "High", influenceLevel: "High" },
      { id: 2, name: "Local Health Coalition", type: "Non-Profit", contactPerson: "Jane Smith", email: "jane@healthcoalition.org", interestLevel: "Medium", influenceLevel: "Medium" },
      { id: 3, name: "Youth Career Center", type: "Community Org", contactPerson: "Mike Johnson", email: "mike@youthcareers.org", interestLevel: "High", influenceLevel: "Medium" },
    ],
    Survey: [
      { id: 1, name: "Adult Literacy Feedback", program: "Adult Education", target: "Program Participants", responseRate: "75%", keyInsight: "90% report improved reading confidence", actionItem: "Introduce advanced classes" },
      { id: 2, name: "Community Health Assessment", program: "Wellness Initiative", target: "Local Residents", responseRate: "60%", keyInsight: "Increased awareness of healthy habits", actionItem: "Launch mobile health app" },
      { id: 3, name: "Employer Satisfaction Survey", program: "Youth Employment", target: "Partner Employers", responseRate: "80%", keyInsight: "High satisfaction with youth preparedness", actionItem: "Expand internship program" },
    ],
    LogicModel: [
      { id: 1, program: "Adult Education", inputs: "Tutors, Learning Materials", activities: "Classes, Workshops", outputs: "200 Participants Trained", outcomes: "Improved Literacy Rates", impact: "Enhanced Community Education Level" },
      { id: 2, program: "Wellness Initiative", inputs: "Health Experts, Equipment", activities: "Fitness Classes, Nutrition Counseling", outputs: "500 Health Assessments", outcomes: "Improved Community Health", impact: "Reduced Healthcare Costs" },
      { id: 3, program: "Youth Employment", inputs: "Career Counselors, Job Listings", activities: "Resume Workshops, Job Fairs", outputs: "100 Youth Trained", outcomes: "Increased Employment Rate", impact: "Economic Growth" },
    ],
    Report: [
      { id: 1, title: "Annual Impact Report", year: 2024, programs: "All", keyMetrics: "Literacy Rates, Health Indices, Employment Rates", stakeholderFeedback: "Positive", recommendations: "Increase funding for youth programs" },
      { id: 2, title: "Wellness Initiative Outcomes", year: 2024, programs: "Wellness Initiative", keyMetrics: "BMI Reduction, Activity Levels", stakeholderFeedback: "Very Positive", recommendations: "Expand to neighboring communities" },
      { id: 3, title: "Quarterly Education Review", year: 2024, programs: "Adult Education", keyMetrics: "Enrollment Rates, Test Scores", stakeholderFeedback: "Mixed", recommendations: "Revise curriculum based on feedback" },
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
      <h1 className="text-3xl font-bold mb-6">Enhanced Program Impact Assessment Template</h1>
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
              <CardTitle>Program Impact Assessment Overview</CardTitle>
              <CardDescription>
                Manage outcomes, assessments, stakeholders, surveys, logic models, and reports efficiently.
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

export default ProgramImpactAssessmentTemplate;
