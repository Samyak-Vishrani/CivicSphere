
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Wrench, 
  Users, 
  Shield, 
  Clock, 
  Star,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Connect with
                <span className="text-gradient block">Trusted Local Workers</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-xl">
                From plumbing to painting, find verified professionals for all your home and workplace repairs. 
                Get quotes, track progress, and pay securely.
              </p>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center space-x-2 bg-success/10 text-success px-3 py-2 rounded-full text-sm font-medium">
                <Shield className="w-4 h-4" />
                <span>Verified Workers</span>
              </div>
              <div className="flex items-center space-x-2 bg-primary/10 text-primary px-3 py-2 rounded-full text-sm font-medium">
                <Clock className="w-4 h-4" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center space-x-2 bg-warning/10 text-warning px-3 py-2 rounded-full text-sm font-medium">
                <Star className="w-4 h-4" />
                <span>Top Rated</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gradient-primary text-white hover:shadow-lg transition-all duration-300">
                Need a Service
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 hover:bg-accent hover:text-accent-foreground">
                Join as Worker
                <Users className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">10K+</div>
                <div className="text-sm text-muted-foreground">Jobs Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">5.0★</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Verified Workers</div>
              </div>
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="space-y-6 animate-scale-in">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Wrench className="w-6 h-6 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Post Your Job</h3>
                    <p className="text-muted-foreground">
                      Describe your repair needs and get connected with qualified local workers instantly.
                    </p>
                    <div className="flex items-center space-x-2 text-sm text-success">
                      <CheckCircle className="w-4 h-4" />
                      <span>Free to post</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Choose Your Worker</h3>
                    <p className="text-muted-foreground">
                      Review profiles, ratings, and chat with workers before making your selection.
                    </p>
                    <div className="flex items-center space-x-2 text-sm text-success">
                      <CheckCircle className="w-4 h-4" />
                      <span>Background verified</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-success rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">Secure Payment</h3>
                    <p className="text-muted-foreground">
                      Pay securely after work completion with photos and satisfaction guarantee.
                    </p>
                    <div className="flex items-center space-x-2 text-sm text-success">
                      <CheckCircle className="w-4 h-4" />
                      <span>Money-back guarantee</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
    </section>
  );
};

export default Hero;
