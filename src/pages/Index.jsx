
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProductsSection from '@/components/ProductsSection';
import AboutSection from '@/components/AboutSection';
import StoreLocator from '@/components/StoreLocator';
import NewsSection from '@/components/NewsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

const Index = () => {
  useEffect(() => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    
    // Enhanced smooth scroll behavior for anchor links with easing
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href')?.substring(1);
        if (targetId) {
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            // Create smoother scroll with GSAP
            gsap.to(window, {
              duration: 1,
              scrollTo: { y: targetElement.offsetTop - 80, autoKill: false },
              ease: "power3.inOut" // Enhanced easing function
            });
          }
        }
      });
    });
    
    // Enhanced intersection observer for more advanced animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const handleIntersection = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Apply different animation classes based on data attributes
          const animationType = entry.target.getAttribute('data-animation') || 'fade-in';
          entry.target.classList.add(`animate-${animationType}`);
          
          // Create enhanced sparkle effect to elements
          const sparkle = document.createElement('div');
          sparkle.classList.add('sparkle-effect');
          sparkle.style.position = 'absolute';
          sparkle.style.top = '0';
          sparkle.style.left = '0';
          sparkle.style.width = '100%';
          sparkle.style.height = '100%';
          sparkle.style.backgroundImage = 'radial-gradient(circle, rgba(255,255,255,0.8) 10%, transparent 10%)';
          sparkle.style.backgroundSize = '12px 12px';
          sparkle.style.animation = 'sparkle-animation 1.5s ease-out forwards';
          sparkle.style.pointerEvents = 'none';
          entry.target.style.position = 'relative';
          entry.target.appendChild(sparkle);
          
          // Add shimmer effect after sparkle
          setTimeout(() => {
            const shimmer = document.createElement('div');
            shimmer.classList.add('shimmer-effect');
            shimmer.style.position = 'absolute';
            shimmer.style.top = '0';
            shimmer.style.left = '-100%';
            shimmer.style.width = '100%';
            shimmer.style.height = '100%';
            shimmer.style.background = 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)';
            shimmer.style.animation = 'shimmer-animation 1.5s ease-in-out forwards';
            shimmer.style.pointerEvents = 'none';
            entry.target.appendChild(shimmer);
            setTimeout(() => shimmer.remove(), 1500);
          }, 500);
          
          setTimeout(() => sparkle.remove(), 1000);
          observer.unobserve(entry.target);
        }
      });
    };
    
    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    document.querySelectorAll('.animate-on-scroll').forEach(element => {
      observer.observe(element);
    });
    
    // Enhanced parallax scrolling effect with rotation and scale
    const parallaxElements = document.querySelectorAll('.parallax-bg');
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      parallaxElements.forEach((el) => {
        const speed = el.getAttribute('data-speed') || 0.1;
        const rotateSpeed = el.getAttribute('data-rotate') || 0;
        const scaleSpeed = el.getAttribute('data-scale') || 0;
        
        el.style.transform = `translateY(${scrollY * speed}px) 
                            rotate(${scrollY * rotateSpeed}deg) 
                            scale(${1 + (scrollY * scaleSpeed * 0.001)})`;
      });
    });
    
    // Add hover effects to menu cards using JavaScript
    const addCardHoverEffects = () => {
      const cards = document.querySelectorAll('.menu-card, .popsicle-card, .hover-card, .team-card, .news-card');
      
      cards.forEach(card => {
        // Add glow effect on hover
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            y: -15,
            scale: 1.03,
            boxShadow: "0 20px 30px rgba(0,0,0,0.15)",
            duration: 0.3,
            ease: "power2.out"
          });
          
          // Add glowing border
          card.style.boxShadow = "0 0 15px rgba(255,107,107,0.5)";
          
          // Find and animate image inside card
          const cardImage = card.querySelector('img');
          if (cardImage) {
            gsap.to(cardImage, {
              scale: 1.1,
              duration: 0.5,
              ease: "power1.out"
            });
          }
          
          // Find and animate headings inside card
          const cardHeading = card.querySelector('h3, h4');
          if (cardHeading) {
            gsap.to(cardHeading, {
              color: '#ff6b6b',
              duration: 0.3
            });
          }
        });
        
        // Reset effects on mouse leave
        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            y: 0,
            scale: 1,
            boxShadow: "0 10px 20px rgba(0,0,0,0.05)",
            duration: 0.5,
            ease: "power2.out"
          });
          
          // Reset glowing border
          card.style.boxShadow = "";
          
          // Reset image animation
          const cardImage = card.querySelector('img');
          if (cardImage) {
            gsap.to(cardImage, {
              scale: 1,
              duration: 0.5,
              ease: "power1.out"
            });
          }
          
          // Reset heading color
          const cardHeading = card.querySelector('h3, h4');
          if (cardHeading) {
            gsap.to(cardHeading, {
              color: '',
              duration: 0.3
            });
          }
        });
      });
    };
    
    // Call function once DOM is fully loaded
    window.addEventListener('load', addCardHoverEffects);
    
    // Also call it immediately in case content is already loaded
    addCardHoverEffects();
    
    // Create animated background pattern
    const createBackgroundPattern = () => {
      const patternContainer = document.createElement('div');
      patternContainer.className = 'bg-pattern';
      patternContainer.style.position = 'fixed';
      patternContainer.style.top = '0';
      patternContainer.style.left = '0';
      patternContainer.style.width = '100%';
      patternContainer.style.height = '100%';
      patternContainer.style.pointerEvents = 'none';
      patternContainer.style.zIndex = '0';
      patternContainer.style.opacity = '0.05';
      patternContainer.style.backgroundImage = `
        linear-gradient(30deg, #ff6b6b 12%, transparent 12.5%, transparent 87%, #ff6b6b 87.5%, #ff6b6b),
        linear-gradient(150deg, #ff6b6b 12%, transparent 12.5%, transparent 87%, #ff6b6b 87.5%, #ff6b6b),
        linear-gradient(30deg, #ff6b6b 12%, transparent 12.5%, transparent 87%, #ff6b6b 87.5%, #ff6b6b),
        linear-gradient(150deg, #ff6b6b 12%, transparent 12.5%, transparent 87%, #ff6b6b 87.5%, #ff6b6b),
        linear-gradient(60deg, #ff6b6b77 25%, transparent 25.5%, transparent 75%, #ff6b6b77 75%, #ff6b6b77)
      `;
      patternContainer.style.backgroundSize = '80px 140px';
      
      document.body.appendChild(patternContainer);
    };
    
    createBackgroundPattern();
    
    // Add css for animations
    const addAnimationStyles = () => {
      const styleEl = document.createElement('style');
      styleEl.textContent = `
        @keyframes sparkle-animation {
          0% { opacity: 0; }
          25% { opacity: 0.6; }
          100% { opacity: 0; }
        }
        
        @keyframes shimmer-animation {
          0% { transform: translateX(0%); }
          100% { transform: translateX(200%); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
      `;
      document.head.appendChild(styleEl);
    };
    
    addAnimationStyles();
    
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', () => {});
      window.removeEventListener('load', addCardHoverEffects);
      // Remove any added global elements
      const pattern = document.querySelector('.bg-pattern');
      if (pattern) pattern.remove();
    };
  }, []);
  
  return (
    <div className="font-baloo overflow-x-hidden bg-gradient-to-b from-blue-50 to-white">
      <div className="fixed top-0 left-0 w-full h-full bg-pattern opacity-5 pointer-events-none z-0"></div>
      <Navbar />
      <HeroSection />
      <ProductsSection />
      <AboutSection />
      <StoreLocator />
      <NewsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
