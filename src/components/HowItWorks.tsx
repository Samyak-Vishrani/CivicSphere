
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  PlusCircle, 
  Users, 
  MessageSquare, 
  CreditCard,
  Star,
  CheckCircle,
  ArrowRight,
  ArrowDown
} from 'lucide-react';

const steps = [
  {
    icon: PlusCircle,
    title: 'Post Your Job',
    description: 'Describe what you need fixed, when you need it done, and your budget.',
    details: ['Free to post', 'Get matched instantly', 'No commitments']
  },
  {
    icon: Users,
    title: 'Review Workers',
    description: 'Browse profiles, ratings, and previous work from verified local professionals.',
    details: ['Background checked', 'Real reviews', 'Portfolio photos']
  },
  {
    icon: MessageSquare,
    title: 'Chat & Schedule',
    description: 'Communicate directly with workers to discuss details and set up timing.',
    details: ['Direct messaging', 'Schedule flexibility', 'Ask questions']
  },
  {
    icon: CheckCircle,
    title: 'Work Completed',
    description: 'Your chosen worker completes the job and uploads photos of the finished work.',
    details: ['Quality guarantee', 'Photo documentation', 'Progress updates']
  },
  {
    icon: CreditCard,
    title: 'Secure Payment',
    description: 'Pay safely through our platform only after you\'re satisfied with the work.',
    details: ['Secure payments', 'Money-back guarantee', 'Multiple payment options']
  },
  {
    icon: Star,
    title: 'Rate & Review',
    description: 'Share your experience to help other customers and workers in the community.',
    details: ['Help others decide', 'Build trust', 'Improve the platform']
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            How <span className="text-gradient">CivicSphere</span> Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Getting your repairs done has never been easier. Follow these simple steps 
            to connect with trusted local workers and get your job completed safely.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={step.title} className="relative animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
              <Card className="h-full hover:shadow-lg transition-all duration-300 group cursor-pointer">
                <CardContent className="p-6 space-y-4">
                  {/* Step Number & Icon */}
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent text-white rounded-full flex items-center justify-center text-xs font-bold">
                        {index + 1}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>

                  {/* Details */}
                  <div className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                        <span className="text-muted-foreground">{detail}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Arrow for desktop */}
              {index < steps.length - 1 && (
                <>
                  <div className="hidden xl:block absolute top-1/2 -right-4 z-10">
                    <ArrowRight className="w-8 h-8 text-primary/30" />
                  </div>
                  {/* Arrow for mobile */}
                  <div className="xl:hidden flex justify-center py-4">
                    <ArrowDown className="w-6 h-6 text-primary/30" />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 space-y-6">
          <div className="space-y-4">
            <h3 className="text-2xl lg:text-3xl font-bold">Ready to Get Started?</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust CivicSphere for their home and workplace repairs.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gradient-primary text-white hover:shadow-lg transition-all duration-300">
              Post Your First Job
              <PlusCircle className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-2">
              Join as a Worker
              <Users className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 pt-6 border-t border-border/20">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <CheckCircle className="w-4 h-4 text-success" />
              <span>No upfront costs</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <CheckCircle className="w-4 h-4 text-success" />
              <span>Background verified workers</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <CheckCircle className="w-4 h-4 text-success" />
              <span>24/7 customer support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
