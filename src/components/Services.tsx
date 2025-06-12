
import React from 'react';
import ServiceCard from './ServiceCard';
import ServicesCTA from './ServicesCTA';
import { serviceCategories } from '../data/services';

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Popular <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From emergency repairs to planned improvements, our verified workers handle 
            all types of home and workplace services with professional expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {serviceCategories.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              delay={index * 100}
            />
          ))}
        </div>

        <ServicesCTA />
      </div>
    </section>
  );
};

export default Services;
