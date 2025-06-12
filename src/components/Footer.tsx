
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Home,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowRight
} from 'lucide-react';

const Footer = () => {
  return (
    <footer id="about" className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Column */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                  <Home className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gradient">CivicSphere</span>
              </div>
              <p className="text-muted-foreground max-w-sm">
                Connecting communities with trusted local workers for all home and workplace repair needs.
                Safe, secure, and reliable.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="w-10 h-10 p-0">
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm" className="w-10 h-10 p-0">
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm" className="w-10 h-10 p-0">
                  <Instagram className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm" className="w-10 h-10 p-0">
                  <Linkedin className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Services Column */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Services</h3>
              <div className="space-y-4 text-sm">
                <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Plumbing
                </a>
                <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Electrical
                </a>
                <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Painting
                </a>
                <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Carpentry
                </a>
                <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                  HVAC
                </a>
                <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                  View All Services
                </a>
              </div>
            </div>

            {/* Company Column */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Company</h3>
              <div className="space-y-4 text-sm">
                <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </a>
                <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                  How it Works
                </a>
                <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Safety
                </a>
                <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Careers
                </a>
                <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Press
                </a>
                <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </a>
              </div>
            </div>

            {/* Contact & Newsletter Column */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Stay Connected</h3>

              {/* Contact Info */}
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span>support@civicsphere.com</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>1-800-CIVIC-01</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  <span>Available Nationwide</span>
                </div>
              </div>

              {/* Newsletter */}
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Get updates on new features and special offers.
                </p>
                <div className="flex space-x-2">
                  <Input
                    placeholder="Enter your email"
                    className="flex-1"
                  />
                  <Button size="sm" className="gradient-primary text-white">
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2024 CivicSphere. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Cookie Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Help Center
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
