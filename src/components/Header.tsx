
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Home, 
  User, 
  Briefcase,
  Star,
  MessageCircle,
  Settings
} from 'lucide-react';

interface HeaderProps {
  userType?: 'customer' | 'worker' | null;
}

const Header = ({ userType = null }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-card/95 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
              <Home className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gradient">CivicSphere</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {!userType && (
              <>
                <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
                  Services
                </a>
                <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
                  How it Works
                </a>
                <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </a>
              </>
            )}
            
            {userType === 'customer' && (
              <>
                <Link to="/customer-dashboard" className="text-muted-foreground hover:text-foreground transition-colors flex items-center space-x-1">
                  <Home className="w-4 h-4" />
                  <span>Dashboard</span>
                </Link>
                <Link to="/post-job" className="text-muted-foreground hover:text-foreground transition-colors flex items-center space-x-1">
                  <Briefcase className="w-4 h-4" />
                  <span>Post Job</span>
                </Link>
                <a href="#messages" className="text-muted-foreground hover:text-foreground transition-colors flex items-center space-x-1">
                  <MessageCircle className="w-4 h-4" />
                  <span>Messages</span>
                </a>
              </>
            )}

            {userType === 'worker' && (
              <>
                <Link to="/worker-dashboard" className="text-muted-foreground hover:text-foreground transition-colors flex items-center space-x-1">
                  <Home className="w-4 h-4" />
                  <span>Dashboard</span>
                </Link>
                <a href="#available-jobs" className="text-muted-foreground hover:text-foreground transition-colors flex items-center space-x-1">
                  <Briefcase className="w-4 h-4" />
                  <span>Available Jobs</span>
                </a>
                <a href="#my-work" className="text-muted-foreground hover:text-foreground transition-colors flex items-center space-x-1">
                  <Star className="w-4 h-4" />
                  <span>My Work</span>
                </a>
              </>
            )}
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {!userType ? (
              <>
                <Link to="/login">
                  <Button variant="ghost">Sign In</Button>
                </Link>
                <Link to="/signup">
                  <Button className="gradient-primary text-white">Get Started</Button>
                </Link>
              </>
            ) : (
              <>
                <Button variant="ghost" size="sm">
                  <Settings className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <User className="w-4 h-4" />
                </Button>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col space-y-4">
              {!userType && (
                <>
                  <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
                    Services
                  </a>
                  <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
                    How it Works
                  </a>
                  <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                    About
                  </a>
                  <div className="pt-4 border-t border-border">
                    <div className="flex flex-col space-y-2">
                      <Link to="/login">
                        <Button variant="ghost" className="justify-start w-full">Sign In</Button>
                      </Link>
                      <Link to="/signup">
                        <Button className="gradient-primary text-white justify-start w-full">Get Started</Button>
                      </Link>
                    </div>
                  </div>
                </>
              )}
              
              {userType && (
                <>
                  <Link to={userType === 'customer' ? '/customer-dashboard' : '/worker-dashboard'} className="text-muted-foreground hover:text-foreground transition-colors flex items-center space-x-2">
                    <Home className="w-4 h-4" />
                    <span>Dashboard</span>
                  </Link>
                  <Link to={userType === 'customer' ? '/post-job' : '#available-jobs'} className="text-muted-foreground hover:text-foreground transition-colors flex items-center space-x-2">
                    <Briefcase className="w-4 h-4" />
                    <span>{userType === 'customer' ? 'Post Job' : 'Available Jobs'}</span>
                  </Link>
                  <a href="#messages" className="text-muted-foreground hover:text-foreground transition-colors flex items-center space-x-2">
                    <MessageCircle className="w-4 h-4" />
                    <span>Messages</span>
                  </a>
                  <div className="pt-4 border-t border-border">
                    <div className="flex flex-col space-y-2">
                      <Button variant="ghost" className="justify-start">
                        <Settings className="w-4 h-4 mr-2" />
                        Settings
                      </Button>
                      <Button variant="ghost" className="justify-start">
                        <User className="w-4 h-4 mr-2" />
                        Profile
                      </Button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
