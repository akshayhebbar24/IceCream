
import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Heart, ShoppingBag } from 'lucide-react';
import { gsap } from 'gsap';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navbarRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Enhanced navbar animation on load
    gsap.from(navbarRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });
    
    // Enhanced logo animation
    const logo = document.querySelector(".navbar-logo");
    if (logo) {
      gsap.from(logo, {
        scale: 0.5,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "back.out(1.7)" // Added stronger overshoot
      });
    }
    
    // Links animation with sparkle effect
    const links = document.querySelectorAll(".nav-item");
    gsap.from(links, {
      opacity: 0,
      y: -20,
      stagger: 0.1,
      duration: 0.5,
      delay: 0.5,
      onComplete: () => {
        // Add subtle pulse animation after initial animation
        gsap.to(links, {
          scale: 1.05,
          duration: 0.3,
          yoyo: true,
          repeat: 1,
          stagger: 0.07
        });
      }
    });
    
    // Add hover listeners for nav items to create interactive effects
    links.forEach(link => {
      link.addEventListener('mouseenter', () => {
        gsap.to(link, {
          scale: 1.05,
          color: '#ff6b6b',
          duration: 0.3
        });
      });
      
      link.addEventListener('mouseleave', () => {
        gsap.to(link, {
          scale: 1,
          color: '',
          duration: 0.3
        });
      });
    });
    
  }, []);

  useEffect(() => {
    // Enhanced mobile menu animation
    if (mobileMenuRef.current) {
      if (isMobileMenuOpen) {
        gsap.fromTo(mobileMenuRef.current, 
          { height: 0, opacity: 0 }, 
          { 
            height: "auto", 
            opacity: 1, 
            duration: 0.4,
            ease: "power2.out"
          }
        );
        
        // Mobile menu links animation with staggered entrance
        const mobileLinks = document.querySelectorAll(".mobile-nav-item");
        gsap.fromTo(mobileLinks, 
          { y: 20, opacity: 0 }, 
          { 
            y: 0, 
            opacity: 1, 
            stagger: 0.1, 
            delay: 0.2,
            ease: "back.out"
          }
        );
      } else {
        gsap.to(mobileMenuRef.current, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: "power2.in"
        });
      }
    }
  }, [isMobileMenuOpen]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav 
      ref={navbarRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="navbar-logo text-2xl font-bold group">
            <span className="text-popsicle-red group-hover:scale-110 inline-block transition-transform">Frosty</span>
            <span className="text-popsicle-blue group-hover:scale-110 inline-block transition-transform delay-100">Pops</span>
            <span className="relative">
              <span className="absolute -top-1 -right-3 w-2 h-2 bg-popsicle-red rounded-full animate-pulse"></span>
            </span>
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a onClick={() => scrollToSection('home')} className="nav-item nav-link cursor-pointer">Home</a>
          <a onClick={() => scrollToSection('products')} className="nav-item nav-link cursor-pointer">Products</a>
          <a onClick={() => scrollToSection('about')} className="nav-item nav-link cursor-pointer">About</a>
          <a onClick={() => scrollToSection('stores')} className="nav-item nav-link cursor-pointer">Find Us</a>
          <a onClick={() => scrollToSection('news')} className="nav-item nav-link cursor-pointer">News</a>
        </div>
        
        {/* Action buttons with enhanced hover effects */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="nav-item w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-all duration-300 hover:scale-110 hover:shadow-md relative overflow-hidden group">
            <Heart size={20} className="text-gray-600 group-hover:text-popsicle-red transition-colors duration-300" />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-popsicle-red text-white text-xs rounded-full flex items-center justify-center group-hover:scale-125 transition-transform">2</span>
          </button>
          <button className="nav-item w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-all duration-300 hover:scale-110 hover:shadow-md relative overflow-hidden group">
            <ShoppingBag size={20} className="text-gray-600 group-hover:text-popsicle-blue transition-colors duration-300" />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-popsicle-red text-white text-xs rounded-full flex items-center justify-center group-hover:scale-125 transition-transform">1</span>
          </button>
          <Button 
            onClick={() => scrollToSection('contact')}
            className="nav-item relative overflow-hidden bg-gradient-to-r from-popsicle-red to-popsicle-pink hover:opacity-90 transition-all text-white rounded-full hover:shadow-lg hover:scale-105 group"
          >
            <span className="relative z-10">Contact</span>
            <span className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-popsicle-blue focus:outline-none hover:bg-gray-100 rounded-full transition-colors"
          >
            {isMobileMenuOpen ? (
              <X size={24} className="transition-transform duration-300 hover:rotate-90" />
            ) : (
              <Menu size={24} className="transition-transform duration-300 hover:scale-110" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu with enhanced styling */}
      <div 
        ref={mobileMenuRef}
        className={`md:hidden bg-white/95 backdrop-blur-md shadow-xl absolute top-full left-0 w-full py-4 overflow-hidden ${isMobileMenuOpen ? 'h-auto' : 'h-0'}`}
      >
        <div className="container mx-auto flex flex-col space-y-4 px-6">
          <a onClick={() => scrollToSection('home')} className="mobile-nav-item nav-link px-4 py-2 cursor-pointer hover:bg-gray-50 rounded-lg transition-colors">Home</a>
          <a onClick={() => scrollToSection('products')} className="mobile-nav-item nav-link px-4 py-2 cursor-pointer hover:bg-gray-50 rounded-lg transition-colors">Products</a>
          <a onClick={() => scrollToSection('about')} className="mobile-nav-item nav-link px-4 py-2 cursor-pointer hover:bg-gray-50 rounded-lg transition-colors">About</a>
          <a onClick={() => scrollToSection('stores')} className="mobile-nav-item nav-link px-4 py-2 cursor-pointer hover:bg-gray-50 rounded-lg transition-colors">Find Us</a>
          <a onClick={() => scrollToSection('news')} className="mobile-nav-item nav-link px-4 py-2 cursor-pointer hover:bg-gray-50 rounded-lg transition-colors">News</a>
          
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="flex space-x-4">
              <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center relative hover:bg-gray-200 transition-colors">
                <Heart size={20} className="text-gray-600" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-popsicle-red text-white text-xs rounded-full flex items-center justify-center">2</span>
              </button>
              <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center relative hover:bg-gray-200 transition-colors">
                <ShoppingBag size={20} className="text-gray-600" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-popsicle-red text-white text-xs rounded-full flex items-center justify-center">1</span>
              </button>
            </div>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-popsicle-red to-popsicle-pink hover:opacity-90 text-white rounded-full px-6 transition-transform hover:scale-105"
            >
              Contact
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
