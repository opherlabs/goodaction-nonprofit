'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  Calendar, 
  DollarSign, 
  Target, 
  Users, 
  Heart, 
  Clock, 
  MapPin, 
  ChevronRight, 
  TrendingUp, 
  Mail, 
  Gift, 
  Share2, 
  Bell, 
  MessageSquare, 
  Handshake 
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";

const DonorInitiativePage = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedEvent, setSelectedEvent] = useState(null);

  const initiativeInfo = {
    title: "Community Health Initiative",
    category: "Healthcare",
    raised: 75000,
    goal: 150000,
    donors: 128,
    targetDonors: 250,
    createdDate: "18 Oct 2024",
    endDate: "31 Dec 2024",
    description: "Support our initiative to bring quality healthcare services to underserved communities. Your donation helps provide medical equipment, supplies, and healthcare education programs.",
    impact: {
      livesImpacted: 500,
      communitiesServed: 5,
      programsLaunched: 3,
      volunteersEngaged: 50
    }
  };

  const upcomingEvents = [
    {
      id: 1,
      title: "Annual Charity Gala",
      type: "Fundraising Event",
      date: "15 Nov 2024",
      time: "6:00 PM - 10:00 PM",
      location: "Grand Hotel",
      ticketPrice: 150,
      description: "An elegant evening of fine dining and entertainment to support our healthcare initiatives.",
      highlights: [
        "Guest Speaker: Dr. Sarah Johnson",
        "Live Music Performance",
        "Silent Auction",
        "Three-Course Dinner"
      ],
      registeredAttendees: 75,
      maxAttendees: 200
    },
    {
      id: 2,
      title: "Community Health Fair",
      type: "Community Event",
      date: "30 Nov 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Community Center",
      ticketPrice: 0,
      description: "A free community event featuring health screenings, educational workshops, and family activities.",
      highlights: [
        "Free Health Screenings",
        "Wellness Workshops",
        "Kids' Health Education",
        "Healthy Cooking Demos"
      ],
      registeredAttendees: 150,
      maxAttendees: 500
    }
  ];

  const donationTiers = [
    {
      name: "Champion",
      amount: 1000,
      benefits: [
        "Named recognition on website",
        "VIP access to events",
        "Quarterly impact reports",
        "Exclusive facility tours"
      ],
      donors: 15
    },
    {
      name: "Supporter",
      amount: 500,
      benefits: [
        "Recognition on website",
        "Priority event registration",
        "Bi-annual impact reports"
      ],
      donors: 45
    },
    {
      name: "Friend",
      amount: 100,
      benefits: [
        "Thank you certificate",
        "Impact updates",
        "Event invitations"
      ],
      donors: 68
    }
  ];

  const recentDonations = [
    {
      name: "Anonymous",
      amount: 1000,
      date: "2 hours ago",
      message: "Keep up the great work!"
    },
    {
      name: "Sarah J.",
      amount: 500,
      date: "5 hours ago",
      message: "Proud to support this cause"
    },
    {
      name: "Michael R.",
      amount: 250,
      date: "1 day ago",
      message: "For a healthier community"
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

  const EventModal = ({ event, onClose }) => {
    if (!event) return null;

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
        onClick={onClose}
      >
        <motion.div
          className="bg-white rounded-lg p-6 max-w-2xl w-full"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          onClick={e => e.stopPropagation()}
        >
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-2xl font-bold">{event.title}</h3>
              <p className="text-blue-600">{event.type}</p>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose}>✕</Button>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="space-y-2">
              <div className="flex items-center text-gray-600">
                <Calendar className="h-4 w-4 mr-2" />
                {event.date}
              </div>
              <div className="flex items-center text-gray-600">
                <Clock className="h-4 w-4 mr-2" />
                {event.time}
              </div>
              <div className="flex items-center text-gray-600">
                <MapPin className="h-4 w-4 mr-2" />
                {event.location}
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-600">Registration Progress</div>
              <div className="text-2xl font-bold text-blue-600">
                {event.registeredAttendees}/{event.maxAttendees}
              </div>
              <Progress 
                value={(event.registeredAttendees / event.maxAttendees) * 100}
                className="mt-2"
              />
            </div>
          </div>

          <div className="mb-6">
            <h4 className="font-semibold mb-2">Event Highlights</h4>
            <div className="grid grid-cols-2 gap-2">
              {event.highlights.map((highlight, index) => (
                <div key={index} className="flex items-center text-sm">
                  <ChevronRight className="h-4 w-4 mr-1 text-blue-500" />
                  {highlight}
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-end space-x-3">
            <Button variant="outline" onClick={onClose}>Close</Button>
            <Button>Register Now</Button>
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
            {/* Progress Card */}
            <Card>
              <CardHeader>
                <CardTitle>Fundraising Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-600">Amount Raised</span>
                      <span className="text-sm font-medium">
                        ${initiativeInfo.raised.toLocaleString()} of ${initiativeInfo.goal.toLocaleString()}
                      </span>
                    </div>
                    <Progress 
                      value={(initiativeInfo.raised / initiativeInfo.goal) * 100} 
                      className="h-2"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">
                        {initiativeInfo.donors}
                      </div>
                      <div className="text-sm text-gray-600">Total Donors</div>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">
                        {Math.round((initiativeInfo.raised / initiativeInfo.goal) * 100)}%
                      </div>
                      <div className="text-sm text-gray-600">Funded</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tabs Section */}
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="events">Events</TabsTrigger>
                <TabsTrigger value="donors">Donors</TabsTrigger>
                <TabsTrigger value="impact">Impact</TabsTrigger>
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
                        <CardTitle>About This Initiative</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mb-6">{initiativeInfo.description}</p>
                        <div className="grid grid-cols-2 gap-4">
                          {Object.entries(initiativeInfo.impact).map(([key, value]) => (
                            <div key={key} className="p-4 bg-gray-50 rounded-lg">
                              <div className="text-2xl font-bold text-blue-600">
                                {value}
                              </div>
                              <div className="text-sm text-gray-600 capitalize">
                                {key.replace(/([A-Z])/g, ' $1').trim()}
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="events">
                    <Card>
                      <CardHeader>
                        <CardTitle>Upcoming Events</CardTitle>
                        <CardDescription>Join our fundraising and community events</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <motion.div 
                          className="space-y-4"
                          variants={containerVariants}
                          initial="hidden"
                          animate="visible"
                        >
                          {upcomingEvents.map((event) => (
                            <motion.div
                              key={event.id}
                              variants={itemVariants}
                              whileHover={{ scale: 1.02 }}
                              onClick={() => setSelectedEvent(event)}
                              className="cursor-pointer"
                            >
                              <Card>
                                <CardContent className="p-4">
                                  <div className="flex justify-between items-start">
                                    <div>
                                      <h3 className="text-lg font-semibold">{event.title}</h3>
                                      <p className="text-sm text-blue-600">{event.type}</p>
                                      <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                                        <div className="flex items-center">
                                          <Calendar className="h-4 w-4 mr-1" />
                                          {event.date}
                                        </div>
                                        <div className="flex items-center">
                                          <Clock className="h-4 w-4 mr-1" />
                                          {event.time}
                                        </div>
                                        <div className="flex items-center">
                                          <MapPin className="h-4 w-4 mr-1" />
                                          {event.location}
                                        </div>
                                      </div>
                                    </div>
                                    <div className="text-right">
                                      <div className="text-2xl font-bold text-green-600">
                                        ${event.ticketPrice}
                                      </div>
                                      <div className="text-sm text-gray-500">per ticket</div>
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

<TabsContent value="donors">
<Card>
<CardHeader>
<CardTitle>Our Donors</CardTitle>
<CardDescription>Recent contributions and donation tiers</CardDescription>
</CardHeader>
<CardContent>
<div className="space-y-8">
  {/* Recent Donations Section */}
  <div>
    <h3 className="text-lg font-semibold mb-4">Recent Donations</h3>
    <motion.div 
      className="space-y-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {recentDonations.map((donation, index) => (
        <motion.div 
          key={index}
          variants={itemVariants}
          className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
        >
          <div className="space-y-1">
            <div className="font-medium">{donation.name}</div>
            <div className="text-sm text-gray-500">{donation.date}</div>
            {donation.message && (
              <div className="text-sm italic">"{donation.message}"</div>
            )}
          </div>
          <div className="text-lg font-bold text-green-600">
            ${donation.amount}
          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>

  {/* Donation Tiers Section */}
  <div>
    <h3 className="text-lg font-semibold mb-4">Donation Tiers</h3>
    <div className="grid grid-cols-3 gap-4">
      {donationTiers.map((tier, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          whileHover={{ scale: 1.03 }}
          className="cursor-pointer"
        >
          <Card>
            <CardHeader>
              <CardTitle>{tier.name}</CardTitle>
              <CardDescription>${tier.amount} or more</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-4">
                {tier.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start text-sm">
                    <ChevronRight className="h-4 w-4 mr-1 text-green-500 shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <div className="text-center text-sm text-gray-500">
                {tier.donors} donors at this tier
              </div>
              <Button className="w-full mt-4">
                Select {tier.name}
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  </div>
</div>
</CardContent>
</Card>
</TabsContent>

<TabsContent value="impact">
<Card>
<CardHeader>
<CardTitle>Impact Report</CardTitle>
<CardDescription>See how your donations make a difference</CardDescription>
</CardHeader>
<CardContent>
<div className="space-y-6">
  {/* Impact Metrics */}
  <div className="grid grid-cols-2 gap-4">
    {Object.entries(initiativeInfo.impact).map(([key, value]) => (
      <motion.div
        key={key}
        variants={itemVariants}
        className="p-6 bg-gradient-to-br from-blue-50 to-white rounded-lg border"
      >
        <div className="text-3xl font-bold text-blue-600 mb-2">
          {value}
        </div>
        <div className="text-gray-600 capitalize">
          {key.replace(/([A-Z])/g, ' $1').trim()}
        </div>
      </motion.div>
    ))}
  </div>

  {/* Impact Timeline */}
  <div className="space-y-4">
    <h3 className="text-lg font-semibold">Recent Milestones</h3>
    <div className="space-y-4">
      {[
        { date: "Oct 2024", title: "Mobile Clinic Launch", description: "Launched first mobile health clinic serving rural areas" },
        { date: "Sep 2024", title: "Health Education Program", description: "Started weekly health education workshops in 3 communities" },
        { date: "Aug 2024", title: "Equipment Donation", description: "Provided essential medical equipment to local clinic" }
      ].map((milestone, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg"
        >
          <div className="w-24 shrink-0 font-medium">{milestone.date}</div>
          <div>
            <div className="font-medium">{milestone.title}</div>
            <div className="text-sm text-gray-600">{milestone.description}</div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
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
{/* Primary Actions Card */}
<motion.div variants={itemVariants}>
<Card>
<CardHeader>
<CardTitle>Make a Difference</CardTitle>
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
Donate Now
</Button>
<Button 
variant="outline" 
className="w-full"
>
<Share2 className="mr-2 h-4 w-4" />
Share Initiative
</Button>
<Button 
variant="outline" 
className="w-full flex items-center justify-center"
>
<MessageSquare className="mr-2 h-4 w-4" />
Contact Us
</Button>
</CardContent>
</Card>
</motion.div>

{/* Recent Activity Card */}
<motion.div variants={itemVariants}>
<Card>
<CardHeader>
<CardTitle>Recent Activity</CardTitle>
</CardHeader>
<CardContent>
<div className="space-y-4">
<motion.div
className="flex items-center p-2 rounded-lg border bg-blue-50 border-blue-200"
whileHover={{ scale: 1.02 }}
>
<Gift className="h-4 w-4 text-blue-500 mr-2" />
<p className="text-sm text-blue-700">New donation received</p>
</motion.div>
<motion.div
className="flex items-center p-2 rounded-lg border bg-green-50 border-green-200"
whileHover={{ scale: 1.02 }}
>
<Users className="h-4 w-4 text-green-500 mr-2" />
<p className="text-sm text-green-700">10 new event registrations</p>
</motion.div>
</div>
</CardContent>
</Card>
</motion.div>

{/* Sponsorship Card */}
<motion.div variants={itemVariants}>
<Card>
<CardHeader>
<CardTitle>Become a Sponsor</CardTitle>
</CardHeader>
<CardContent>
<p className="text-sm text-gray-600 mb-4">
Support our initiative as a corporate sponsor and make a lasting impact in healthcare.
</p>
<Button variant="outline" className="w-full">
<Handshake className="mr-2 h-4 w-4" />
Sponsorship Details
</Button>
</CardContent>
</Card>
</motion.div>
</div>
</div>
</div>

{/* Event Modal */}
<AnimatePresence>
{selectedEvent && (
<EventModal 
event={selectedEvent} 
onClose={() => setSelectedEvent(null)} 
/>
)}
</AnimatePresence>
</div>
);
};

export default DonorInitiativePage;