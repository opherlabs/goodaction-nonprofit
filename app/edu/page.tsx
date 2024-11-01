'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft,
  Book,
  GraduationCap,
  Users,
  Calendar,
  ClipboardList,
  Clock,
  MapPin,
  ChevronRight,
  Award,
  BookOpen,
  Share2,
  MessageSquare,
  FileText,
  CheckCircle,
  Handshake,
  Star,
  Library,
  UserCheck
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";

const EducationInitiativePage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedCourse, setSelectedCourse] = useState(null);

  const initiativeInfo = {
    title: "Digital Skills Training Program",
    category: "Technology Education",
    enrolledStudents: 85,
    maxCapacity: 120,
    createdDate: "18 Oct 2024",
    endDate: "31 Mar 2025",
    description: "Comprehensive digital skills training program designed to prepare participants for the modern workforce. Learn coding, digital marketing, and essential tech skills from industry experts.",
    impact: {
      studentsEnrolled: 85,
      coursesOffered: 6,
      instructors: 12,
      completionRate: 92
    }
  };

  const courses = [
    {
      id: 1,
      title: "Web Development Fundamentals",
      instructor: "Dr. Sarah Johnson",
      duration: "12 weeks",
      schedule: "Mon & Wed, 6:00 PM - 8:00 PM",
      location: "Tech Lab 1",
      enrolledStudents: 25,
      maxStudents: 30,
      description: "Learn the basics of web development including HTML, CSS, and JavaScript.",
      modules: [
        "Introduction to HTML",
        "CSS Styling",
        "JavaScript Basics",
        "Responsive Design"
      ],
      requirements: [
        "Basic computer skills",
        "Own laptop required",
        "Internet access"
      ],
      outcomes: [
        "Build responsive websites",
        "Understand web development principles",
        "Create interactive web applications"
      ],
      resources: [
        { type: "Video Lectures", count: 24 },
        { type: "Practice Exercises", count: 48 },
        { type: "Projects", count: 3 }
      ],
      rating: 4.8,
      reviews: 45
    },
    {
      id: 2,
      title: "Digital Marketing Essentials",
      instructor: "Prof. Michael Chen",
      duration: "8 weeks",
      schedule: "Tue & Thu, 5:00 PM - 7:00 PM",
      location: "Virtual Classroom",
      enrolledStudents: 28,
      maxStudents: 35,
      description: "Master the fundamentals of digital marketing, including social media, SEO, and content strategy.",
      modules: [
        "Social Media Marketing",
        "Search Engine Optimization",
        "Content Marketing",
        "Analytics & Reporting"
      ],
      requirements: [
        "Basic marketing knowledge",
        "Social media familiarity",
        "Computer with internet"
      ],
      outcomes: [
        "Create marketing campaigns",
        "Optimize online presence",
        "Analyze marketing data"
      ],
      resources: [
        { type: "Video Lectures", count: 16 },
        { type: "Case Studies", count: 12 },
        { type: "Projects", count: 2 }
      ],
      rating: 4.7,
      reviews: 32
    }
  ];

  const instructors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      expertise: "Web Development",
      experience: "10+ years",
      courses: ["Web Development Fundamentals", "Advanced JavaScript"],
      rating: 4.9,
      reviews: 156,
      bio: "PhD in Computer Science with extensive industry experience in web development and software engineering.",
      achievements: [
        "Published author in Web Technologies",
        "Tech conference speaker",
        "Industry consultant"
      ]
    },
    {
      id: 2,
      name: "Prof. Michael Chen",
      expertise: "Digital Marketing",
      experience: "8+ years",
      courses: ["Digital Marketing Essentials", "Social Media Strategy"],
      rating: 4.8,
      reviews: 124,
      bio: "Former Marketing Director with expertise in digital transformation and online marketing strategies.",
      achievements: [
        "Digital Marketing Award Winner 2023",
        "Certified Google Trainer",
        "Marketing Conference Speaker"
      ]
    }
  ];

  const studentSuccessStories = [
    {
      id: 1,
      name: "Emily Rodriguez",
      course: "Web Development Fundamentals",
      outcome: "Secured Web Developer position",
      story: "The program provided me with the perfect foundation to transition into tech. Within two months of completion, I landed my dream job.",
      rating: 5
    },
    {
      id: 2,
      name: "James Wilson",
      course: "Digital Marketing Essentials",
      outcome: "Started digital marketing agency",
      story: "The practical knowledge and industry insights helped me launch my own digital marketing agency.",
      rating: 5
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Tech Career Fair",
      date: "15 Nov 2024",
      time: "2:00 PM - 6:00 PM",
      location: "Main Campus Hall",
      description: "Connect with tech companies and explore job opportunities.",
      type: "Career Development"
    },
    {
      id: 2,
      title: "Industry Expert Workshop",
      date: "20 Nov 2024",
      time: "3:00 PM - 5:00 PM",
      location: "Tech Lab 2",
      description: "Special workshop on emerging tech trends by industry leaders.",
      type: "Workshop"
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

  const CourseDetailModal = ({ course, onClose }) => {
    if (!course) return null;

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
              <h2 className="text-2xl font-bold mb-2">{course.title}</h2>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span>{course.rating} ({course.reviews} reviews)</span>
              </div>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose}>✕</Button>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="space-y-4">
              <div className="flex items-center text-gray-600">
                <UserCheck className="h-4 w-4 mr-2" />
                Instructor: {course.instructor}
              </div>
              <div className="flex items-center text-gray-600">
                <Clock className="h-4 w-4 mr-2" />
                Duration: {course.duration}
              </div>
              <div className="flex items-center text-gray-600">
                <Calendar className="h-4 w-4 mr-2" />
                Schedule: {course.schedule}
              </div>
              <div className="flex items-center text-gray-600">
                <MapPin className="h-4 w-4 mr-2" />
                Location: {course.location}
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-600 mb-2">Enrollment Status</div>
              <div className="text-2xl font-bold text-blue-600 mb-2">
                {course.enrolledStudents}/{course.maxStudents}
              </div>
              <Progress 
                value={(course.enrolledStudents / course.maxStudents) * 100}
                className="mb-2"
              />
              <div className="text-sm text-gray-500">
                {course.maxStudents - course.enrolledStudents} spots remaining
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">Course Modules</h3>
              <div className="grid grid-cols-2 gap-2">
                {course.modules.map((module, index) => (
                  <div key={index} className="flex items-center text-sm">
                    <ChevronRight className="h-4 w-4 mr-1 text-blue-500" />
                    {module}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Requirements</h3>
              <ul className="list-disc list-inside text-sm space-y-1">
                {course.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Learning Outcomes</h3>
              <ul className="list-disc list-inside text-sm space-y-1">
                {course.outcomes.map((outcome, index) => (
                  <li key={index}>{outcome}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Course Resources</h3>
              <div className="grid grid-cols-3 gap-4">
                {course.resources.map((resource, index) => (
                  <div key={index} className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="font-medium">{resource.count}</div>
                    <div className="text-sm text-gray-600">{resource.type}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-3 mt-6">
            <Button variant="outline" onClick={onClose}>Close</Button>
            <Button>Enroll Now</Button>
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
              <span>{initiativeInfo.createdDate} - {initiativeInfo.endDate}</span>
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="col-span-2 space-y-6">
            {/* Enrollment Progress */}
            <Card>
              <CardHeader>
                <CardTitle>Program Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-600">Enrollment Progress</span>
                      <span className="text-sm font-medium">
                        {initiativeInfo.enrolledStudents}/{initiativeInfo.maxCapacity} Students
                      </span>
                    </div>
                    <Progress 
                      value={(initiativeInfo.enrolledStudents / initiativeInfo.maxCapacity) * 100}
                      className="h-2"
                    />
                  </div>
                  <div className="grid grid-cols-4 gap-4">
                    {Object.entries(initiativeInfo.impact).map(([key, value]) => (
                      <div key={key} className="text-center p-4 rounded-lg bg-blue-50">
                        <div className="text-2xl font-bold text-blue-600">
                          {typeof value === 'number' ? value : `${value}%`}
                        </div>
                        <div className="text-sm text-gray-600 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tabs Section */}
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="courses">Courses</TabsTrigger>
<TabsTrigger value="instructors">Instructors</TabsTrigger>
                <TabsTrigger value="success">Success Stories</TabsTrigger>
                <TabsTrigger value="resources">Resources</TabsTrigger>
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
                        <CardTitle>About This Program</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mb-6">{initiativeInfo.description}</p>
                        <div className="grid grid-cols-2 gap-6">
                          <div className="space-y-4">
                            <h3 className="font-semibold">Program Highlights</h3>
                            <ul className="space-y-2">
                              {[
                                "Industry-relevant curriculum",
                                "Hands-on practical training",
                                "Expert instructors",
                                "Flexible learning schedule",
                                "Career support services"
                              ].map((highlight, index) => (
                                <li key={index} className="flex items-center text-sm">
                                  <ChevronRight className="h-4 w-4 mr-2 text-blue-500" />
                                  {highlight}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="space-y-4">
                            <h3 className="font-semibold">Career Opportunities</h3>
                            <ul className="space-y-2">
                              {[
                                "Web Developer",
                                "Digital Marketing Specialist",
                                "UX Designer",
                                "Content Strategist",
                                "Technology Consultant"
                              ].map((career, index) => (
                                <li key={index} className="flex items-center text-sm">
                                  <Award className="h-4 w-4 mr-2 text-green-500" />
                                  {career}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="courses">
                    <Card>
                      <CardHeader>
                        <CardTitle>Available Courses</CardTitle>
                        <CardDescription>Browse our selection of professional courses</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <motion.div 
                          className="space-y-4"
                          variants={containerVariants}
                          initial="hidden"
                          animate="visible"
                        >
                          {courses.map((course) => (
                            <motion.div
                              key={course.id}
                              variants={itemVariants}
                              whileHover={{ scale: 1.02 }}
                              onClick={() => setSelectedCourse(course)}
                              className="cursor-pointer"
                            >
                              <Card>
                                <CardContent className="p-6">
                                  <div className="flex justify-between items-start">
                                    <div className="space-y-3">
                                      <div>
                                        <h3 className="text-lg font-semibold">{course.title}</h3>
                                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                                          <span>{course.rating} ({course.reviews} reviews)</span>
                                        </div>
                                      </div>
                                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                                        <div className="flex items-center">
                                          <UserCheck className="h-4 w-4 mr-1" />
                                          {course.instructor}
                                        </div>
                                        <div className="flex items-center">
                                          <Clock className="h-4 w-4 mr-1" />
                                          {course.duration}
                                        </div>
                                        <div className="flex items-center">
                                          <MapPin className="h-4 w-4 mr-1" />
                                          {course.location}
                                        </div>
                                      </div>
                                      <p className="text-sm text-gray-600">{course.description}</p>
                                    </div>
                                    <div className="text-right">
                                      <div className="text-sm text-gray-600 mb-1">
                                        Enrollment
                                      </div>
                                      <div className="text-lg font-bold text-blue-600">
                                        {course.enrolledStudents}/{course.maxStudents}
                                      </div>
                                      <Progress 
                                        value={(course.enrolledStudents / course.maxStudents) * 100}
                                        className="mt-2 w-24"
                                      />
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

                  <TabsContent value="instructors">
                    <Card>
                      <CardHeader>
                        <CardTitle>Our Expert Instructors</CardTitle>
                        <CardDescription>Learn from industry professionals</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <motion.div 
                          className="grid grid-cols-2 gap-6"
                          variants={containerVariants}
                          initial="hidden"
                          animate="visible"
                        >
                          {instructors.map((instructor) => (
                            <motion.div 
                              key={instructor.id}
                              variants={itemVariants}
                            >
                              <Card>
                                <CardContent className="p-6">
                                  <div className="space-y-4">
                                    <div className="flex justify-between items-start">
                                      <div>
                                        <h3 className="text-lg font-semibold">{instructor.name}</h3>
                                        <p className="text-sm text-blue-600">{instructor.expertise}</p>
                                      </div>
                                      <div className="flex items-center space-x-1">
                                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                                        <span className="text-sm font-medium">{instructor.rating}</span>
                                      </div>
                                    </div>
                                    <p className="text-sm text-gray-600">{instructor.bio}</p>
                                    <div className="space-y-2">
                                      <div className="text-sm font-medium">Courses:</div>
                                      <div className="flex flex-wrap gap-2">
                                        {instructor.courses.map((course, index) => (
                                          <span 
                                            key={index}
                                            className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full"
                                          >
                                            {course}
                                          </span>
                                        ))}
                                      </div>
                                    </div>
                                    <div className="space-y-2">
                                      <div className="text-sm font-medium">Achievements:</div>
                                      <ul className="text-sm space-y-1">
                                        {instructor.achievements.map((achievement, index) => (
                                          <li key={index} className="flex items-center">
                                            <Award className="h-4 w-4 mr-2 text-green-500" />
                                            {achievement}
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

                  <TabsContent value="success">
                    <Card>
                      <CardHeader>
                        <CardTitle>Student Success Stories</CardTitle>
                        <CardDescription>See how our program transforms careers</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <motion.div 
                          className="space-y-6"
                          variants={containerVariants}
                          initial="hidden"
                          animate="visible"
                        >
                          {studentSuccessStories.map((story) => (
                            <motion.div
                              key={story.id}
                              variants={itemVariants}
                              className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-lg"
                            >
                              <div className="space-y-4">
                                <div className="flex justify-between items-start">
                                  <div>
                                    <h3 className="text-lg font-semibold">{story.name}</h3>
                                    <p className="text-sm text-blue-600">{story.course}</p>
                                  </div>
                                  <div className="flex items-center space-x-1">
                                    {[...Array(story.rating)].map((_, i) => (
                                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                                    ))}
                                  </div>
                                </div>
                                <p className="text-sm text-gray-600 italic">"{story.story}"</p>
                                <div className="flex items-center text-sm text-green-600">
                                  <Award className="h-4 w-4 mr-2" />
                                  {story.outcome}
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </motion.div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="resources">
                    <Card>
                      <CardHeader>
                        <CardTitle>Learning Resources</CardTitle>
                        <CardDescription>Access study materials and tools</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 gap-6">
                          <motion.div 
                            className="space-y-4"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                          >
                            <h3 className="font-semibold">Study Materials</h3>
                            <div className="space-y-2">
                              {[
                                { icon: BookOpen, text: "Online Course Materials" },
                                { icon: FileText, text: "Practice Exercises" },
                                { icon: Library, text: "Digital Library Access" },
                                { icon: ClipboardList, text: "Assessment Tools" }
                              ].map((resource, index) => (
                                <motion.div
                                  key={index}
                                  variants={itemVariants}
                                  className="flex items-center p-3 bg-gray-50 rounded-lg"
                                >
                                  <resource.icon className="h-4 w-4 mr-2 text-blue-500" />
                                  <span className="text-sm">{resource.text}</span>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>

                          <motion.div 
                            className="space-y-4"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                          >
                            <h3 className="font-semibold">Upcoming Events</h3>
                            <div className="space-y-2">
                              {upcomingEvents.map((event, index) => (
                                <motion.div
                                  key={index}
                                  variants={itemVariants}
                                  className="p-3 bg-gray-50 rounded-lg space-y-2"
                                >
                                  <div className="font-medium text-sm">{event.title}</div>
                                  <div className="flex items-center text-sm text-gray-600">
                                    <Calendar className="h-4 w-4 mr-2" />
                                    {event.date}, {event.time}
                                  </div>
                                  <div className="text-sm text-gray-600">{event.description}</div>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </motion.div>
              </AnimatePresence>
            </Tabs>
          </div>

          {/* Right Column - Actions & Info */}
          <div className="space-y-6">
            {/* Primary Actions */}
            <motion.div variants={itemVariants}>
              <Card>
                <CardHeader>
                  <CardTitle>Get Started</CardTitle>
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
                    Enroll Now
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full"
                  >
                    <Share2 className="mr-2 h-4 w-4" />
                    Share Program
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full flex items-center justify-center"
                  >
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Contact Advisor
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Program Information */}
            <motion.div variants={itemVariants}>
              <Card>
                <CardHeader>
                  <CardTitle>Program Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="text-sm text-gray-600">Duration</div>
                    <div className="font-medium">6 Months</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm text-gray-600">Format</div>
                    <div className="font-medium">Hybrid (Online & In-person)</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm text-gray-600">Certificate</div>
                    <div className="font-medium">Professional Certification</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm text-gray-600">Schedule</div>
                    <div className="font-medium">Flexible Hours</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm text-gray-600">Prerequisites</div>
                    <div className="font-medium">Basic Computer Skills</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Key Benefits */}
            <motion.div variants={itemVariants}>
              <Card>
                <CardHeader>
                  <CardTitle>Key Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[
                      {
                        icon: Award,
                        title: "Industry Certification",
                        description: "Receive recognized certification upon completion"
                      },
                      {
                        icon: Users,
                        title: "Networking Opportunities",
                        description: "Connect with industry professionals"
                      },
                      {
                        icon: BookOpen,
                        title: "Hands-on Projects",
                        description: "Build practical skills through real projects"
                      },
                      {
                        icon: GraduationCap,
                        title: "Career Support",
                        description: "Get guidance for job placement"
                      }
                    ].map((benefit, index) => (
                      <motion.li
                        key={index}
                        className="flex items-start space-x-3 p-2 rounded-lg hover:bg-gray-50"
                        whileHover={{ x: 5 }}
                      >
                        <benefit.icon className="h-5 w-5 text-blue-500 mt-1" />
                        <div>
                          <div className="font-medium">{benefit.title}</div>
                          <div className="text-sm text-gray-600">{benefit.description}</div>
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Success Metrics */}
            <motion.div variants={itemVariants}>
              <Card>
                <CardHeader>
                  <CardTitle>Success Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: "Job Placement", value: "92%", icon: Award },
                      { label: "Course Completion", value: "95%", icon: CheckCircle },
                      { label: "Student Satisfaction", value: "4.8/5", icon: Star },
                      { label: "Industry Partners", value: "50+", icon: Handshake }
                    ].map((metric, index) => (
                      <div
                        key={index}
                        className="text-center p-3 bg-gradient-to-b from-blue-50 to-white rounded-lg"
                      >
                        <metric.icon className="h-5 w-5 text-blue-500 mx-auto mb-2" />
                        <div className="text-lg font-bold text-blue-600">{metric.value}</div>
                        <div className="text-xs text-gray-600">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Upcoming Deadlines */}
            <motion.div variants={itemVariants}>
              <Card>
                <CardHeader>
                  <CardTitle>Important Dates</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      {
                        event: "Early Bird Registration",
                        date: "Oct 31, 2024",
                        type: "deadline"
                      },
                      {
                        event: "Next Cohort Starts",
                        date: "Jan 15, 2025",
                        type: "start"
                      },
                      {
                        event: "Information Session",
                        date: "Nov 5, 2024",
                        type: "event"
                      }
                    ].map((date, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50"
                      >
                        <div>
                          <div className="font-medium">{date.event}</div>
                          <div className="text-sm text-gray-600">{date.date}</div>
                        </div>
                        <div
                          className={`px-2 py-1 rounded-full text-xs ${
                            date.type === 'deadline' 
                              ? 'bg-red-100 text-red-800'
                              : date.type === 'start'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-blue-100 text-blue-800'
                          }`}
                        >
                          {date.type}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Course Detail Modal */}
      <AnimatePresence>
        {selectedCourse && (
          <CourseDetailModal 
            course={selectedCourse} 
            onClose={() => setSelectedCourse(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default EducationInitiativePage;
