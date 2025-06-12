
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Plus, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  MapPin,
  DollarSign,
  Phone,
  MessageCircle,
  Star
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';

const CustomerDashboard = () => {
  // Mock user jobs
  const userJobs = [
    {
      id: 1,
      title: 'Fix leaky kitchen faucet',
      category: 'Plumbing',
      status: 'in-progress',
      worker: 'John Smith',
      workerPhone: '+1-555-0123',
      workerRating: 4.8,
      budget: '$100-150',
      postedDate: '2 days ago',
      location: 'Downtown District'
    },
    {
      id: 2,
      title: 'Paint living room walls',
      category: 'Painting',
      status: 'pending',
      budget: '$300-400',
      postedDate: '1 day ago',
      location: 'Residential Area',
      proposals: 3
    },
    {
      id: 3,
      title: 'Electrical outlet repair',
      category: 'Electrical',
      status: 'completed',
      worker: 'Mike Johnson',
      workerRating: 4.9,
      budget: '$80-120',
      completedDate: '1 week ago',
      location: 'Home Office'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'warning';
      case 'in-progress': return 'default';
      case 'completed': return 'success';
      default: return 'secondary';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending': return <AlertCircle className="h-4 w-4" />;
      case 'in-progress': return <Clock className="h-4 w-4" />;
      case 'completed': return <CheckCircle className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-secondary">
      <Header userType="customer" />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* Dashboard Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">My Jobs</h1>
            <p className="text-muted-foreground">
              Manage your home repair and maintenance requests
            </p>
          </div>
          <Link to="/post-job">
            <Button className="gradient-primary text-white">
              <Plus className="h-4 w-4 mr-2" />
              Post New Job
            </Button>
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Jobs</p>
                  <p className="text-2xl font-bold">{userJobs.length}</p>
                </div>
                <AlertCircle className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">In Progress</p>
                  <p className="text-2xl font-bold">
                    {userJobs.filter(job => job.status === 'in-progress').length}
                  </p>
                </div>
                <Clock className="h-8 w-8 text-warning" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Completed</p>
                  <p className="text-2xl font-bold">
                    {userJobs.filter(job => job.status === 'completed').length}
                  </p>
                </div>
                <CheckCircle className="h-8 w-8 text-success" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Pending</p>
                  <p className="text-2xl font-bold">
                    {userJobs.filter(job => job.status === 'pending').length}
                  </p>
                </div>
                <AlertCircle className="h-8 w-8 text-destructive" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Jobs List */}
        <div className="space-y-6">
          {userJobs.map((job) => (
            <Card key={job.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <CardTitle className="text-lg">{job.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {job.status === 'completed' ? job.completedDate : job.postedDate}
                    </CardDescription>
                  </div>
                  <Badge variant={getStatusColor(job.status) as any} className="flex items-center space-x-1">
                    {getStatusIcon(job.status)}
                    <span className="capitalize">{job.status}</span>
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                      {job.location}
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="h-4 w-4 mr-2 text-muted-foreground" />
                      {job.budget}
                    </div>
                    <div className="flex items-center">
                      <span className="inline-block w-2 h-2 rounded-full bg-primary mr-2"></span>
                      {job.category}
                    </div>
                  </div>

                  {/* Worker Info (for accepted/completed jobs) */}
                  {job.worker && (
                    <div className="bg-muted p-4 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">{job.worker}</p>
                          <div className="flex items-center mt-1">
                            <Star className="h-4 w-4 text-warning mr-1" />
                            <span className="text-sm">{job.workerRating}</span>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          {job.workerPhone && (
                            <Button variant="outline" size="sm">
                              <Phone className="h-4 w-4 mr-1" />
                              Call
                            </Button>
                          )}
                          <Button variant="outline" size="sm">
                            <MessageCircle className="h-4 w-4 mr-1" />
                            Message
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Pending job info */}
                  {job.status === 'pending' && job.proposals && (
                    <div className="bg-warning/10 p-4 rounded-lg">
                      <p className="text-sm">
                        <strong>{job.proposals} workers</strong> have submitted proposals for this job.
                      </p>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex justify-between items-center pt-2">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                    <div className="flex space-x-2">
                      {job.status === 'pending' && (
                        <>
                          <Button variant="outline" size="sm">Edit</Button>
                          <Button variant="destructive" size="sm">Cancel</Button>
                        </>
                      )}
                      {job.status === 'completed' && (
                        <Button variant="outline" size="sm">
                          <Star className="h-4 w-4 mr-1" />
                          Rate Worker
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {userJobs.length === 0 && (
          <div className="text-center py-12">
            <AlertCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No Jobs Yet</h3>
            <p className="text-muted-foreground mb-4">
              You haven't posted any jobs yet. Get started by posting your first job!
            </p>
            <Link to="/post-job">
              <Button className="gradient-primary text-white">
                <Plus className="h-4 w-4 mr-2" />
                Post Your First Job
              </Button>
            </Link>
          </div>
        )}
      </main>
    </div>
  );
};

export default CustomerDashboard;
