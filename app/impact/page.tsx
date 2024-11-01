'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft,
  BarChart,
  Target,
  Users,
  FileText,
  TrendingUp,
  ChevronRight,
  PieChart,
  Globe,
  Heart,
  Share2,
  MessageSquare,
  Clock,
  CheckCircle,
  Calendar,
  ArrowUpRight
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";

const ImpactAssessmentPage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedMetric, setSelectedMetric] = useState(null);

  const initiativeInfo = {
    title: "Community Health Impact Assessment",
    category: "Healthcare Impact",
    timeframe: "2024 Annual Assessment",
    createdDate: "18 Oct 2024",
    status: "In Progress",
    description: "Comprehensive impact assessment of our community health initiatives, measuring outcomes across healthcare access, wellness programs, and community engagement.",
    metrics: {
      programsAssessed: 12,
      stakeholdersEngaged: 250,
      communitiesServed: 15,
      outcomeMetrics: 45
    }
  };

  const outcomeIndicators = [
    {
      id: 1,
      name: "Healthcare Access Improvement",
      category: "Primary Outcome",
      target: 80,
      current: 65,
      unit: "%",
      trend: "+15%",
      status: "On Track",
      description: "Percentage increase in community members with regular healthcare access",
      measurements: [
        { month: "Jan", value: 50 },
        { month: "Feb", value: 55 },
        { month: "Mar", value: 58 },
        { month: "Apr", value: 62 },
        { month: "May", value: 65 }
      ],
      keyFindings: [
        "15% increase in clinic visits",
        "Reduced wait times by 30%",
        "Improved patient satisfaction"
      ],
      recommendations: [
        "Expand mobile clinic services",
        "Increase healthcare education programs",
        "Enhance appointment scheduling system"
      ]
    },
    {
      id: 2,
      name: "Community Wellness Programs",
      category: "Secondary Outcome",
      target: 1000,
      current: 850,
      unit: "participants",
      trend: "+200",
      status: "Near Target",
      description: "Number of participants in wellness programs and health education",
      measurements: [
        { month: "Jan", value: 650 },
        { month: "Feb", value: 700 },
        { month: "Mar", value: 750 },
        { month: "Apr", value: 800 },
        { month: "May", value: 850 }
      ],
      keyFindings: [
        "85% program completion rate",
        "High participant satisfaction",
        "Increased health awareness"
      ],
      recommendations: [
        "Introduce advanced programs",
        "Expand program locations",
        "Develop online components"
      ]
    },
    {
      id: 3,
      name: "Health Outcome Improvements",
      category: "Impact Metric",
      target: 40,
      current: 35,
      unit: "% reduction",
      trend: "-35%",
      status: "Exceeding",
      description: "Percentage reduction in preventable health conditions",
      measurements: [
        { month: "Jan", value: 15 },
        { month: "Feb", value: 20 },
        { month: "Mar", value: 25 },
        { month: "Apr", value: 30 },
        { month: "May", value: 35 }
      ],
      keyFindings: [
        "Significant reduction in chronic conditions",
        "Improved health behaviors",
        "Better health outcomes"
      ],
      recommendations: [
        "Focus on prevention programs",
        "Enhance monitoring systems",
        "Increase community outreach"
      ]
    }
  ];

  const stakeholderFeedback = [
    {
      id: 1,
      name: "Community Health Center",
      type: "Healthcare Provider",
      feedback: "The program has significantly improved healthcare accessibility in our community.",
      impact: "High",
      satisfaction: 90,
      recommendations: [
        "Expand mobile clinic services",
        "Increase specialist availability",
        "Enhance telemedicine options"
      ]
    },
    {
      id: 2,
      name: "Local Government",
      type: "Public Sector",
      feedback: "Positive impact on community health metrics and reduced healthcare costs.",
      impact: "High",
      satisfaction: 85,
      recommendations: [
        "Increase program funding",
        "Expand to neighboring areas",
        "Strengthen data collection"
      ]
    },
    {
      id: 3,
      name: "Community Leaders",
      type: "Community Representative",
      feedback: "Notable improvements in community health awareness and engagement.",
      impact: "Medium",
      satisfaction: 88,
      recommendations: [
        "More community events",
        "Enhanced communication",
        "Additional resources"
      ]
    }
  ];

  const surveyResults = [
    {
      id: 1,
      title: "Patient Satisfaction Survey",
      respondents: 500,
      completionRate: 85,
      keyInsights: [
        "90% satisfaction with care quality",
        "Improved access to services",
        "Reduced wait times"
      ],
      trends: [
        { month: "Jan", satisfaction: 75 },
        { month: "Feb", satisfaction: 78 },
        { month: "Mar", satisfaction: 82 },
        { month: "Apr", satisfaction: 85 },
        { month: "May", satisfaction: 90 }
      ]
    },
    {
      id: 2,
      title: "Community Health Assessment",
      respondents: 750,
      completionRate: 80,
      keyInsights: [
        "Increased health awareness",
        "Better preventive care",
        "Improved health behaviors"
      ],
      trends: [
        { month: "Jan", awareness: 60 },
        { month: "Feb", awareness: 65 },
        { month: "Mar", awareness: 70 },
        { month: "Apr", awareness: 75 },
        { month: "May", awareness: 80 }
      ]
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

  const MetricDetailModal = ({ metric, onClose }) => {
    if (!metric) return null;

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
        onClick={onClose}
      >
        <motion.div
          className="bg-white rounded-lg p-6 max-w-3xl w-full max-h-[90vh] overflow-y-auto"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          onClick={e => e.stopPropagation()}
        >
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">{metric.name}</h2>
              <span className="text-sm text-blue-600">{metric.category}</span>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose}>✕</Button>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="space-y-4">
              <div>
                <div className="text-sm text-gray-600 mb-1">Progress</div>
                <div className="text-2xl font-bold text-blue-600">
                  {metric.current}{metric.unit} <span className="text-sm text-green-600">{metric.trend}</span>
                </div>
                <Progress 
                  value={(metric.current / metric.target) * 100}
                  className="mt-2"
                />
              </div>
              <div className="text-sm text-gray-600">
                Target: {metric.target}{metric.unit}
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-2">Status</div>
              <span className={`px-3 py-1 rounded-full text-sm ${
                metric.status === 'Exceeding' 
                  ? 'bg-green-100 text-green-800'
                  : metric.status === 'On Track'
                  ? 'bg-blue-100 text-blue-800'
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {metric.status}
              </span>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">Key Findings</h3>
              <ul className="space-y-2">
                {metric.keyFindings.map((finding, index) => (
                  <li key={index} className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                    {finding}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Recommendations</h3>
              <ul className="space-y-2">
                {metric.recommendations.map((rec, index) => (
                  <li key={index} className="flex items-center text-sm">
                    <ArrowUpRight className="h-4 w-4 mr-2 text-blue-500" />
                    {rec}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Progress Tracking</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between mb-2">
                  {metric.measurements.map((m, index) => (
                    <div key={index} className="text-center">
                      <div className="text-sm text-gray-600">{m.month}</div>
                      <div className="font-medium">{m.value}{metric.unit}</div>
                    </div>
                  ))}
                </div>
                <div className="relative h-20">
                  {/* Here you would add a chart visualization */}
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-3 mt-6">
            <Button variant="outline" onClick={onClose}>Close</Button>
            <Button>Download Report</Button>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Navigation */}
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

        {/* Hero Section */}
        <motion.div 
          className="relative rounded-xl overflow-hidden mb-6 h-[300px]"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img 
            src="/api/placeholder/1200/400" 
            alt="Initiative banner" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 text-white">
            <h1 className="text-3xl font-bold mb-2">{initiativeInfo.title}</h1>
            <div className="flex items-center space-x-4 text-sm">
              <span className="bg-white/20 px-3 py-1 rounded-full">
                {initiativeInfo.category}
              </span>
              <span>{initiativeInfo.timeframe}</span>
              <span className="bg-blue-500/20 px-3 py-1 rounded-full">
                {initiativeInfo.status}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-3 gap-6">
          {/* Left Column - Main Content */}
          <div className="col-span-2 space-y-6">
            {/* Impact Metrics Overview */}
            <Card>
              <CardHeader>
                <CardTitle>Impact Metrics Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-4 gap-4">
                  {Object.entries(initiativeInfo.metrics).map(([key, value]) => (
                    <motion.div
                      key={key}
                      variants={itemVariants}
                      className="text-center p-4 bg-gradient-to-b from-blue-50 to-white rounded-lg"
                    >
                      <div className="text-2xl font-bold text-blue-600">
                        {value}
                      </div>
                      <div className="text-sm text-gray-600 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tabs Section */}
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="outcomes">Outcomes</TabsTrigger>
                <TabsTrigger value="stakeholders">Stakeholders</TabsTrigger>
                <TabsTrigger value="surveys">Surveys</TabsTrigger>
              </TabsList>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2 }}
                >
                  <TabsContent value="overview">
                    <Card>
                      <CardHeader>
                        <CardTitle>Impact Assessment Overview</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-6">
                          <p className="text-gray-600">{initiativeInfo.description}</p>
                          
                          <div className="grid grid-cols-2 gap-6">
                            <div>
                              <h3 className="font-semibold mb-4">Assessment Highlights</h3>
                              <div className="space-y-3">
                                {[
                                  "Comprehensive community health evaluation",
                                  "Multi-stakeholder engagement process",
                                  "Data-driven outcome measurement",
                                  "Evidence-based recommendations",
                                  "Continuous monitoring framework"
                                ].map((highlight, index) => (
                                  <motion.div
                                    key={index}
                                    className="flex items-center space-x-2"
                                    variants={itemVariants}
                                  >
                                    <CheckCircle className="h-4 w-4 text-green-500" />
                                    <span className="text-sm">{highlight}</span>
                                  </motion.div>
                                ))}
                              </div>
                            </div>

                            <div>
                              <h3 className="font-semibold mb-4">Assessment Timeline</h3>
                              <div className="space-y-4">
                                {[
                                  { phase: "Data Collection", status: "Completed", date: "Oct 2024" },
                                  { phase: "Analysis", status: "In Progress", date: "Nov 2024" },
                                  { phase: "Stakeholder Review", status: "Upcoming", date: "Dec 2024" },
                                  { phase: "Final Report", status: "Planned", date: "Jan 2025" }
                                ].map((phase, index) => (
                                  <motion.div
                                    key={index}
                                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                                    variants={itemVariants}
                                  >
                                    <div>
                                      <div className="font-medium">{phase.phase}</div>
                                      <div className="text-sm text-gray-600">{phase.date}</div>
                                    </div>
                                    <span className={`px-2 py-1 rounded-full text-xs ${
                                      phase.status === 'Completed' 
                                        ? 'bg-green-100 text-green-800'
                                        : phase.status === 'In Progress'
                                        ? 'bg-blue-100 text-blue-800'
                                        : 'bg-gray-100 text-gray-800'
                                    }`}>
                                      {phase.status}
                                    </span>
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="outcomes">
                    <Card>
                      <CardHeader>
                        <CardTitle>Outcome Indicators</CardTitle>
                        <CardDescription>Track and measure program outcomes</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <motion.div 
                          className="space-y-6"
                          variants={containerVariants}
                          initial="hidden"
                          animate="visible"
                        >
                          {outcomeIndicators.map((indicator) => (
                            <motion.div
                              key={indicator.id}
                              variants={itemVariants}
                              whileHover={{ scale: 1.02 }}
                              className="cursor-pointer"
                              onClick={() => setSelectedMetric(indicator)}
                            >
                              <Card>
                                <CardContent className="p-6">
                                  <div className="flex justify-between items-start">
                                    <div className="space-y-2">
                                      <div>
                                        <h3 className="text-lg font-semibold">{indicator.name}</h3>
                                        <p className="text-sm text-blue-600">{indicator.category}</p>
                                      </div>
                                      <p className="text-sm text-gray-600">{indicator.description}</p>
                                    </div>
                                    <div className="text-right">
                                      <div className="text-2xl font-bold text-blue-600">
                                        {indicator.current}{indicator.unit}
                                      </div>
                                      <div className="text-sm text-green-600">
                                        {indicator.trend}
                                      </div>
                                    </div>
                                  </div>
                                  <div className="mt-4">
                                    <div className="flex justify-between mb-1">
                                      <span className="text-sm text-gray-600">Progress to Target</span>
                                      <span className="text-sm font-medium">
                                        {Math.round((indicator.current / indicator.target) * 100)}%
                                      </span>
                                    </div>
                                    <Progress 
                                      value={(indicator.current / indicator.target) * 100}
                                      className="h-2"
                                    />
                                  </div>
                                </CardContent>
                              </Card>
                            </motion.div>
                          ))}
                        </motion.div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="stakeholders">
                    <Card>
                      <CardHeader>
                        <CardTitle>Stakeholder Feedback</CardTitle>
                        <CardDescription>Insights from program stakeholders</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <motion.div 
                          className="space-y-6"
                          variants={containerVariants}
                          initial="hidden"
                          animate="visible"
                        >
                          {stakeholderFeedback.map((feedback) => (
                            <motion.div
                              key={feedback.id}
                              variants={itemVariants}
                            >
                              <Card>
                                <CardContent className="p-6">
                                  <div className="space-y-4">
                                    <div className="flex justify-between items-start">
                                      <div>
                                        <h3 className="text-lg font-semibold">{feedback.name}</h3>
                                        <p className="text-sm text-blue-600">{feedback.type}</p>
                                      </div>
                                      <div className="text-right">
                                        <div className="text-sm text-gray-600">Impact Level</div>
                                        <span className={`px-2 py-1 rounded-full text-xs ${
                                          feedback.impact === 'High' 
                                            ? 'bg-green-100 text-green-800'
                                            : 'bg-blue-100 text-blue-800'
                                        }`}>
                                          {feedback.impact}
                                        </span>
                                      </div>
                                    </div>
                                    <div className="space-y-2">
                                      <p className="text-gray-600 italic">"{feedback.feedback}"</p>
                                      <div className="flex items-center space-x-2">
                                        <div className="text-sm text-gray-600">Satisfaction</div>
                                        <Progress value={feedback.satisfaction} className="flex-1" />
                                        <div className="text-sm font-medium">{feedback.satisfaction}%</div>
                                      </div>
                                    </div>
                                    <div>
                                      <div className="text-sm font-medium mb-2">Recommendations:</div>
                                      <ul className="space-y-1">
                                        {feedback.recommendations.map((rec, index) => (
                                          <li key={index} className="flex items-center text-sm">
                                            <ArrowUpRight className="h-4 w-4 mr-2 text-blue-500" />
                                            {rec}
                                          </li>
                                        ))}
                                      </ul>
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

                  <TabsContent value="surveys">
                    <Card>
                      <CardHeader>
                        <CardTitle>Survey Results</CardTitle>
                        <CardDescription>Analysis of community feedback and assessments</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <motion.div 
                          className="space-y-6"
                          variants={containerVariants}
                          initial="hidden"
                          animate="visible"
                        >
                          {surveyResults.map((survey) => (
                            <motion.div
                              key={survey.id}
                              variants={itemVariants}
                            >
                              <Card>
                                <CardContent className="p-6">
                                  <div className="space-y-4">
                                    <div className="flex justify-between items-start">
                                      <div>
                                        <h3 className="text-lg font-semibold">{survey.title}</h3>
                                        <div className="flex items-center space-x-4 mt-2">
                                          <div className="flex items-center">
                                            <Users className="h-4 w-4 mr-1 text-gray-500" />
                                            <span className="text-sm text-gray-600">
                                              {survey.respondents} respondents
                                            </span>
                                          </div>
                                          <div className="flex items-center">
                                            <CheckCircle className="h-4 w-4 mr-1 text-green-500" />
                                            <span className="text-sm text-gray-600">
                                              {survey.completionRate}% completion rate
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div>
                                      <div className="text-sm font-medium mb-2">Key Insights:</div>
                                      <ul className="space-y-2">
                                        {survey.keyInsights.map((insight, index) => (
                                          <li key={index} className="flex items-center text-sm">
                                            <ChevronRight className="h-4 w-4 mr-2 text-blue-500" />
                                            {insight}
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                    <div className="bg-gray-50 p-4 rounded-lg">
                                      <div className="text-sm font-medium mb-2">Trend Analysis</div>
                                      <div className="h-40">
                                        {/* Add chart visualization here */}
                                      </div>
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
                </motion.div>
              </AnimatePresence>
            </Tabs>
          </div>

          {/* Right Column - Actions & Info */}
          <div className="space-y-6">
            {/* Assessment Status */}
            <motion.div variants={itemVariants}>
              <Card>
                <CardHeader>
                  <CardTitle>Assessment Status</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="text-sm text-gray-600">Overall Progress</div>
                    <Progress value={65} className="h-2" />
                    <div className="flex justify-between text-sm">
                      <span>65% Complete</span>
                      <span className="text-blue-600">On Track</span>
                    </div>
                  </div>
                  <Button className="w-full">
                    Download Latest Report
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Quick Actions */}
            <motion.div variants={itemVariants}>
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full" variant="outline">
                    <Share2 className="mr-2 h-4 w-4" />
                    Share Insights
                  </Button>
                  <Button className="w-full" variant="outline">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Provide Feedback
                  </Button>
                  <Button className="w-full" variant="outline">
                    <Calendar className="mr-2 h-4 w-4" />
                    Schedule Review
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Key Metrics */}
            <motion.div variants={itemVariants}>
              <Card>
                <CardHeader>
                  <CardTitle>Key Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { label: "Data Points Collected", value: "5,230", icon: FileText },
                      { label: "Stakeholders Engaged", value: "250", icon: Users },
                      { label: "Communities Impacted", value: "15", icon: Globe },
                      { label: "Success Rate", value: "92%", icon: Target }
                    ].map((metric, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center">
                          <metric.icon className="h-4 w-4 text-blue-500 mr-2" />
                          <span className="text-sm text-gray-600">{metric.label}</span>
                        </div>
                        <span className="font-medium">{metric.value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Important Dates */}
            <motion.div variants={itemVariants}>
              <Card>
                <CardHeader>
                  <CardTitle>Important Dates</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { event: "Data Collection Ends", date: "Nov 30, 2024", type: "deadline" },
                      { event: "Stakeholder Review", date: "Dec 15, 2024", type: "review" },
                      { event: "Final Report Due", date: "Jan 31, 2025", type: "milestone" }
                    ].map((date, index) => (
                      <div
                       
                        key={index}
                        className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50"
                      >
                        <div>
                          <div className="font-medium text-sm">{date.event}</div>
                          <div className="text-sm text-gray-600">{date.date}</div>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          date.type === 'deadline' 
                            ? 'bg-red-100 text-red-800'
                            : date.type === 'review'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-green-100 text-green-800'
                        }`}>
                          {date.type}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Resources & Documents */}
            <motion.div variants={itemVariants}>
              <Card>
                <CardHeader>
                  <CardTitle>Resources & Documents</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      {
                        title: "Assessment Framework",
                        type: "PDF",
                        size: "2.4 MB",
                        icon: FileText
                      },
                      {
                        title: "Data Collection Tools",
                        type: "ZIP",
                        size: "4.1 MB",
                        icon: FileText
                      },
                      {
                        title: "Stakeholder Guide",
                        type: "PDF",
                        size: "1.8 MB",
                        icon: FileText
                      }
                    ].map((resource, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 cursor-pointer"
                      >
                        <div className="flex items-center space-x-3">
                          <resource.icon className="h-4 w-4 text-blue-500" />
                          <div>
                            <div className="font-medium text-sm">{resource.title}</div>
                            <div className="text-xs text-gray-600">
                              {resource.type} • {resource.size}
                            </div>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          Download
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={itemVariants}>
              <Card>
                <CardHeader>
                  <CardTitle>Need Assistance?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Contact the assessment team for questions or support.
                  </p>
                  <div className="space-y-3">
                    <Button className="w-full" variant="outline">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Contact Team
                    </Button>
                    <Button className="w-full" variant="outline">
                      <Calendar className="mr-2 h-4 w-4" />
                      Schedule Meeting
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Metric Detail Modal */}
      <AnimatePresence>
        {selectedMetric && (
          <MetricDetailModal 
            metric={selectedMetric} 
            onClose={() => setSelectedMetric(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ImpactAssessmentPage;