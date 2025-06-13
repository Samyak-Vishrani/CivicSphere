import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Job {
  id: number;
  title: string;
  category: string;
  description: string;
  location: string;
  urgency: 'low' | 'medium' | 'high';
  budget: string;
  postedDate: string;
  customer: string;
  customerPhone?: string;
  status: 'pending' | 'in-progress' | 'completed';
  worker?: string;
  workerPhone?: string;
  workerRating?: number;
  completedDate?: string;
  proposals?: number;
}

interface JobContextType {
  jobs: Job[];
  addJob: (job: Omit<Job, 'id' | 'postedDate' | 'status'>) => void;
  updateJob: (id: number, updates: Partial<Job>) => void;
  acceptJob: (jobId: number, workerInfo: { name: string; phone: string; rating: number }) => void;
  getJobsByCustomer: (customer: string) => Job[];
  getAvailableJobsByExpertise: (expertise: string[]) => Job[];
}

const JobContext = createContext<JobContextType | undefined>(undefined);

// Mock initial jobs data
const initialJobs: Job[] = [
  {
    id: 1,
    title: 'Fix leaky kitchen faucet',
    category: 'Plumbing',
    description: 'Kitchen faucet has been dripping for weeks. Need quick fix.',
    location: 'Downtown District',
    urgency: 'high',
    budget: '$100-150',
    postedDate: '2 hours ago',
    customer: 'Current User',
    customerPhone: '+1-555-0101',
    status: 'in-progress',
    worker: 'John Smith',
    workerPhone: '+1-555-0123',
    workerRating: 4.8
  },
  {
    id: 2,
    title: 'Replace bathroom pipes',
    category: 'Plumbing',
    description: 'Old pipes need replacement in master bathroom.',
    location: 'Residential Area',
    urgency: 'medium',
    budget: '$300-500',
    postedDate: '1 day ago',
    customer: 'Mike Davis',
    customerPhone: '+1-555-0102',
    status: 'in-progress',
    worker: 'John Smith',
    workerPhone: '+1-555-0123',
    workerRating: 4.8
  },
  {
    id: 3,
    title: 'General home maintenance check',
    category: 'General Maintenance',
    description: 'Monthly maintenance check for HVAC, plumbing, and electrical.',
    location: 'Suburb Heights',
    urgency: 'low',
    budget: '$200-250',
    postedDate: '3 days ago',
    customer: 'Emily Chen',
    customerPhone: '+1-555-0103',
    status: 'completed',
    worker: 'Mike Johnson',
    workerRating: 4.9,
    completedDate: '1 week ago'
  }
];

export const JobProvider = ({ children }: { children: ReactNode }) => {
  const [jobs, setJobs] = useState<Job[]>(initialJobs);

  const addJob = (jobData: Omit<Job, 'id' | 'postedDate' | 'status'>) => {
    const newJob: Job = {
      ...jobData,
      id: Math.max(...jobs.map(j => j.id)) + 1,
      postedDate: 'Just now',
      status: 'pending',
      proposals: 0
    };
    setJobs(prev => [newJob, ...prev]);
  };

  const updateJob = (id: number, updates: Partial<Job>) => {
    setJobs(prev => prev.map(job => 
      job.id === id ? { ...job, ...updates } : job
    ));
  };

  const acceptJob = (jobId: number, workerInfo: { name: string; phone: string; rating: number }) => {
    setJobs(prev => prev.map(job => 
      job.id === jobId 
        ? { 
            ...job, 
            status: 'in-progress' as const,
            worker: workerInfo.name,
            workerPhone: workerInfo.phone,
            workerRating: workerInfo.rating
          }
        : job
    ));
  };

  const getJobsByCustomer = (customer: string) => {
    return jobs.filter(job => job.customer === customer);
  };

  const getAvailableJobsByExpertise = (expertise: string[]) => {
    return jobs.filter(job => 
      job.status === 'pending' && expertise.includes(job.category)
    );
  };

  return (
    <JobContext.Provider value={{
      jobs,
      addJob,
      updateJob,
      acceptJob,
      getJobsByCustomer,
      getAvailableJobsByExpertise
    }}>
      {children}
    </JobContext.Provider>
  );
};

export const useJobs = () => {
  const context = useContext(JobContext);
  if (!context) {
    throw new Error('useJobs must be used within a JobProvider');
  }
  return context;
};