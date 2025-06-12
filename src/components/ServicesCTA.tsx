
import React from 'react';
import { ArrowRight } from 'lucide-react';

const ServicesCTA = () => {
  return (
    <div className="text-center space-y-6">
      <div className="space-y-4">
        <h3 className="text-2xl font-bold">Don't see your service?</h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Our network of skilled professionals covers hundreds of home and workplace services. 
          Post your job and get matched with the right expert.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 rounded-md px-8 gradient-primary text-white">
          Post a Job
          <ArrowRight className="w-5 h-5 ml-2" />
        </button>
        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 rounded-md px-8 border border-input bg-background hover:bg-accent hover:text-accent-foreground">
          Browse All Services
        </button>
      </div>
    </div>
  );
};

export default ServicesCTA;
