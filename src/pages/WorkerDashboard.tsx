
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  MapPin, 
  Clock, 
  DollarSign, 
  Calendar,
  Filter,
  Briefcase,
  Star,
  Phone
} from 'lucide-react';
import Header from '@/components/Header';

const WorkerDashboard = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Mock worker expertise (this would come from user profile)
  const workerExpertise = ['Plumbing', 'General Maintenance'];

  // Mock available jobs (filtered by worker's expertise)
  const availableJobs = [
    {
      id: 1,
      title: 'Fix leaky kitchen faucet',
      category: 'Plumbing',
      description: 'Kitchen faucet has been dripping for weeks. Need quick fix.',
      location: 'Downtown District',
      urgency: 'high',
      budget: '$100-150',
      postedDate: '2 hours ago',
      customer: 'Sarah Johnson'
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
      customer: 'Mike Davis'
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
      customer: 'Emily Chen'
    }
  ];

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'high': return 'destructive';
      case 'medium': return 'warning';
      case 'low': return 'secondary';
      default: return 'secondary';
    }
  };

  const handleAcceptJob = (jobId: number) => {
    console.log('Accepting job:', jobId);
    // TODO: Implement job acceptance logic
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-secondary">
      <Header userType="worker" />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Dashboard Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Worker Dashboard</h1>
          <p className="text-muted-foreground">
            Jobs available in your expertise areas: {workerExpertise.join(', ')}
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Available Jobs</p>
                  <p className="text-2xl font-bold">{availableJobs.length}</p>
                </div>
                <Briefcase className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Active Jobs</p>
                  <p className="text-2xl font-bold">2</p>
                </div>
                <Clock className="h-8 w-8 text-accent" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Completed Jobs</p>
                  <p className="text-2xl font-bold">24</p>
                </div>
                <Star className="h-8 w-8 text-warning" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Rating</p>
                  <p className="text-2xl font-bold">4.8</p>
                </div>
                <Star className="h-8 w-8 text-warning" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filter Section */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Available Jobs</h2>
          <div className="flex items-center space-x-2">
            <Filter className="h-4 w-4" />
            <select
              className="border border-input rounded-md px-3 py-1 text-sm"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="all">All Categories</option>
              {workerExpertise.map((category) => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {availableJobs
            .filter(job => selectedCategory === 'all' || job.category === selectedCategory)
            .map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-lg">{job.title}</CardTitle>
                      <CardDescription className="text-sm">
                        Posted by {job.customer} • {job.postedDate}
                      </CardDescription>
                    </div>
                    <Badge variant={getUrgencyColor(job.urgency) as any}>
                      {job.urgency}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      {job.description}
                    </p>
                    
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                        {job.location}
                      </div>
                      <div className="flex items-center text-sm">
                        <DollarSign className="h-4 w-4 mr-2 text-muted-foreground" />
                        {job.budget}
                      </div>
                      <div className="flex items-center text-sm">
                        <Briefcase className="h-4 w-4 mr-2 text-muted-foreground" />
                        {job.category}
                      </div>
                    </div>

                    <div className="flex space-x-2 pt-2">
                      <Button 
                        className="flex-1 gradient-primary text-white"
                        onClick={() => handleAcceptJob(job.id)}
                      >
                        Accept Job
                      </Button>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>

        {availableJobs.length === 0 && (
          <div className="text-center py-12">
            <Briefcase className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No Jobs Available</h3>
            <p className="text-muted-foreground">
              There are currently no jobs available in your expertise areas.
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default WorkerDashboard;
