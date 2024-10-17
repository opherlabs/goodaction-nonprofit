// src/lib/mockData.js

export const programs = [
  {
    id: 1,
    title: "Education Program",
    description: "A program focused on improving education in underserved communities.",
    startDate: "2023-01-01",
    endDate: "2023-12-31",
    budget: 100000,
    sdgGoals: ["Quality Education", "Reduced Inequalities"],
    totalInitiatives: 3,
    ongoingInitiatives: 2,
    completedInitiatives: 1,
    totalVolunteers: 50,
    status: "Active"
  },
  // Add more mock programs as needed
];

export const initiatives = [
  {
    id: 1,
    programId: 1,
    title: "School Supply Drive",
    description: "Collecting and distributing school supplies to students in need.",
    status: "Active",
    type: "Volunteer"
  },
  {
    id: 2,
    programId: 1,
    title: "After-School Tutoring",
    description: "Providing free tutoring services to students after school hours.",
    status: "Active",
    type: "Volunteer"
  },
  {
    id: 3,
    programId: 1,
    title: "Scholarship Fundraiser",
    description: "Raising funds to provide scholarships for underprivileged students.",
    status: "Completed",
    type: "Fundraising"
  },
  // Add more mock initiatives as needed
];
