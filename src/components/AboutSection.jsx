
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const section = document.getElementById('about');
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);
  
  return (
    <section id="about" className="section bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      <div className="container mx-auto relative">
        {/* Decorative elements */}
        <div className="hidden md:block absolute top-20 right-0 w-64 h-64 bg-popsicle-yellow rounded-full opacity-20 blur-xl"></div>
        <div className="hidden md:block absolute bottom-20 left-0 w-40 h-40 bg-popsicle-blue rounded-full opacity-10 blur-lg"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left column - text content */}
          <div className={`stagger-animation ${isVisible ? 'visible' : ''}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h2>
            <p className="text-lg mb-6">
              Frosty Pops started in a small kitchen with a simple idea: create delicious, healthy ice pops using real ingredients. 
              Our founder, Emily, was tired of frozen treats filled with artificial flavors and preservatives.
            </p>
            <p className="text-lg mb-6">
              What began as homemade popsicles for friends and family quickly grew into a passion for crafting the perfect popsicle. 
              Today, we continue to make each popsicle by hand in small batches, using locally sourced fruits whenever possible.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-white p-4 rounded-xl shadow-md">
                <div className="text-3xl font-bold text-popsicle-red mb-2">100%</div>
                <div className="text-gray-600">Natural Ingredients</div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-md">
                <div className="text-3xl font-bold text-popsicle-blue mb-2">30+</div>
                <div className="text-gray-600">Unique Flavors</div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-md">
                <div className="text-3xl font-bold text-popsicle-green mb-2">50k+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
            </div>
            <Button className="btn-primary">Learn More About Us</Button>
          </div>
          
          {/* Right column - image */}
          <div 
            className={`relative ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
            style={{ animationDelay: '0.3s' }}
          >
            <div className="rounded-3xl overflow-hidden shadow-xl transform rotate-3">
              <img 
                src="https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1587" 
                alt="Making popsicles" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-xl overflow-hidden shadow-lg transform -rotate-6">
              <img 
                src="https://images.unsplash.com/photo-1501443762994-82bd5dace89a?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1470" 
                alt="Fresh fruits" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Our values section */}
        <div className="mt-24">
          <h3 className="text-3xl font-bold mb-12 text-center">Our Values</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className={`bg-white p-6 rounded-2xl shadow-lg ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
              <div className="w-16 h-16 bg-popsicle-red rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-2">Quality Ingredients</h4>
              <p className="text-gray-600">
                We use only the freshest, highest quality ingredients in our popsicles. 
                No artificial flavors, colors, or preservatives.
              </p>
            </div>
            
            <div className={`bg-white p-6 rounded-2xl shadow-lg ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
              <div className="w-16 h-16 bg-popsicle-green rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-2">Sustainability</h4>
              <p className="text-gray-600">
                We're committed to sustainable practices, from compostable packaging 
                to reducing food waste and supporting local farmers.
              </p>
            </div>
            
            <div className={`bg-white p-6 rounded-2xl shadow-lg ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
              <div className="w-16 h-16 bg-popsicle-blue rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-2">Joy & Delight</h4>
              <p className="text-gray-600">
                We believe in creating moments of joy and delight with every 
                popsicle. Life is sweeter with Frosty Pops!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
