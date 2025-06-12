
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Home, MapPin, Calendar, DollarSign } from 'lucide-react';

const PostJob = () => {
  const [jobData, setJobData] = useState({
    title: '',
    category: '',
    description: '',
    location: '',
    urgency: 'medium' as 'low' | 'medium' | 'high',
    budget: '',
    preferredDate: '',
    contactInfo: ''
  });

  const categories = [
    'Plumbing', 'Electrical', 'Carpentry', 'Painting', 'HVAC', 
    'Roofing', 'Flooring', 'Landscaping', 'Cleaning', 'General Maintenance'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Job posting:', jobData);
    // TODO: Implement job posting logic
  };

  return (
    <div className="min-h-screen bg-gradient-secondary">
      {/* Header */}
      <header className="bg-card/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                <Home className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gradient">CivicSphere</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link to="/login">
                <Button variant="ghost">Sign In</Button>
              </Link>
              <Link to="/signup">
                <Button className="gradient-primary text-white">Sign Up</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl flex items-center justify-center space-x-2">
                <span>Post a Job</span>
              </CardTitle>
              <CardDescription>
                Describe the work you need done and connect with skilled workers
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Job Title */}
                <div className="space-y-2">
                  <Label htmlFor="title">Job Title</Label>
                  <Input
                    id="title"
                    placeholder="e.g., Fix leaky kitchen faucet"
                    value={jobData.title}
                    onChange={(e) => setJobData(prev => ({ ...prev, title: e.target.value }))}
                    required
                  />
                </div>

                {/* Category */}
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <select
                    id="category"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    value={jobData.category}
                    onChange={(e) => setJobData(prev => ({ ...prev, category: e.target.value }))}
                    required
                  >
                    <option value="">Select a category</option>
                    {categories.map((category) => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <Label htmlFor="description">Job Description</Label>
                  <textarea
                    id="description"
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    placeholder="Describe the work needed, any specific requirements, tools needed, etc."
                    value={jobData.description}
                    onChange={(e) => setJobData(prev => ({ ...prev, description: e.target.value }))}
                    required
                  />
                </div>

                {/* Location and Budget */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="location">
                      <MapPin className="w-4 h-4 inline mr-1" />
                      Location
                    </Label>
                    <Input
                      id="location"
                      placeholder="Enter address or area"
                      value={jobData.location}
                      onChange={(e) => setJobData(prev => ({ ...prev, location: e.target.value }))}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="budget">
                      <DollarSign className="w-4 h-4 inline mr-1" />
                      Budget Range
                    </Label>
                    <Input
                      id="budget"
                      placeholder="e.g., $100-200"
                      value={jobData.budget}
                      onChange={(e) => setJobData(prev => ({ ...prev, budget: e.target.value }))}
                    />
                  </div>
                </div>

                {/* Urgency and Preferred Date */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="urgency">Urgency Level</Label>
                    <select
                      id="urgency"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      value={jobData.urgency}
                      onChange={(e) => setJobData(prev => ({ ...prev, urgency: e.target.value as any }))}
                    >
                      <option value="low">Low (Within a week)</option>
                      <option value="medium">Medium (Within 3 days)</option>
                      <option value="high">High (ASAP)</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="preferredDate">
                      <Calendar className="w-4 h-4 inline mr-1" />
                      Preferred Date
                    </Label>
                    <Input
                      id="preferredDate"
                      type="date"
                      value={jobData.preferredDate}
                      onChange={(e) => setJobData(prev => ({ ...prev, preferredDate: e.target.value }))}
                    />
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-2">
                  <Label htmlFor="contactInfo">Contact Information</Label>
                  <Input
                    id="contactInfo"
                    placeholder="Phone number or preferred contact method"
                    value={jobData.contactInfo}
                    onChange={(e) => setJobData(prev => ({ ...prev, contactInfo: e.target.value }))}
                    required
                  />
                </div>

                {/* Submit Button */}
                <Button type="submit" className="w-full gradient-primary text-white">
                  Post Job
                </Button>
              </form>

              {/* Additional Info */}
              <div className="mt-6 p-4 bg-muted rounded-lg">
                <h4 className="font-semibold mb-2">What happens next?</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Workers with matching expertise will see your job</li>
                  <li>• You'll receive proposals from interested workers</li>
                  <li>• Review worker profiles and choose the best fit</li>
                  <li>• Coordinate directly with your chosen worker</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PostJob;
