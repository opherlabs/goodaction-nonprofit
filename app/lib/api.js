import { programs as initialPrograms, initiatives as initialInitiatives } from './mockData';

let programs = [...initialPrograms];
let initiatives = [...initialInitiatives];

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export async function getPrograms() {
  await delay(500);
  return programs;
}

export async function getProgram(id) {
  await delay(500);
  return programs.find(p => p.id === parseInt(id)) || null;
}

export async function createProgram(programData) {
  await delay(500);
  const newProgram = {
    id: programs.length + 1,
    ...programData,
    createdAt: new Date().toISOString(),
    totalInitiatives: 0,
    ongoingInitiatives: 0,
    completedInitiatives: 0,
    totalVolunteers: 0,
    status: 'Active'
  };
  programs.push(newProgram);
  return newProgram;
}

export async function getInitiatives(programId) {
  await delay(500);
  return initiatives.filter(i => i.programId === parseInt(programId, 10));
}

export async function createInitiative(initiativeData) {
  await delay(500);
  const newInitiative = {
    id: String(initiatives.length + 1),
    ...initiativeData,
  };
  initiatives.push(newInitiative);
  
  // Update program statistics
  const program = programs.find(p => p.id === initiativeData.programId);
  if (program) {
    program.totalInitiatives += 1;
    if (initiativeData.status === 'active') {
      program.ongoingInitiatives += 1;
    } else if (initiativeData.status === 'completed') {
      program.completedInitiatives += 1;
    }
  }

  return { success: true, initiative: newInitiative };
}

// Additional mock functions for updating and deleting

export async function updateProgram(id, updateData) {
  await delay(500);
  const programIndex = programs.findIndex(p => p.id === id);
  if (programIndex === -1) {
    throw new Error('Program not found');
  }
  programs[programIndex] = { ...programs[programIndex], ...updateData };
  return programs[programIndex];
}

export async function deleteProgram(id) {
  await delay(500);
  const programIndex = programs.findIndex(p => p.id === id);
  if (programIndex === -1) {
    throw new Error('Program not found');
  }
  programs.splice(programIndex, 1);
  // Remove associated initiatives without reassigning
  initiatives.length = 0;
  initiatives.push(...initiatives.filter(i => i.programId !== id));
  return { success: true };
}

export async function updateInitiative(id, updateData) {
  await delay(500);
  const initiativeIndex = initiatives.findIndex(i => i.id === id);
  if (initiativeIndex === -1) {
    throw new Error('Initiative not found');
  }
  initiatives[initiativeIndex] = { ...initiatives[initiativeIndex], ...updateData };
  return initiatives[initiativeIndex];
}

export async function deleteInitiative(id) {
  await delay(500);
  const initiativeIndex = initiatives.findIndex(i => i.id === id);
  if (initiativeIndex === -1) {
    throw new Error('Initiative not found');
  }
  const deletedInitiative = initiatives[initiativeIndex];
  initiatives.splice(initiativeIndex, 1);
  
  // Update program statistics
  const program = programs.find(p => p.id === deletedInitiative.programId);
  if (program) {
    program.totalInitiatives -= 1;
    if (deletedInitiative.status === 'Active') {
      program.ongoingInitiatives -= 1;
    } else if (deletedInitiative.status === 'Completed') {
      program.completedInitiatives -= 1;
    }
  }
  
  return { success: true };
}
