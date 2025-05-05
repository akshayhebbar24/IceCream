
import React, { useEffect, useRef } from 'react';
import { ArrowDown, IceCream, Heart } from 'lucide-react';
import { gsap } from 'gsap';

const HeroSection = () => {
  const heroRef = useRef(null);
  const iconsRef = useRef(null);
  
  useEffect(() => {
    // Animated floating popsicles background
    const icons = iconsRef.current;
    if (icons) {
      for (let i = 0; i < 20; i++) {
        const icon = document.createElement('div');
        icon.className = 'absolute';
        
        // Randomize icon type (heart or ice cream)
        const iconType = Math.random() > 0.5 ? 
          '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ice-cream"><path d="M12 17c5 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm0 0v4"/></svg>' : 
          '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>';
        
        icon.innerHTML = iconType;
        
        // Random position, size and color
        const size = Math.random() * 40 + 10;
        const colors = ['text-popsicle-red', 'text-popsicle-blue', 'text-popsicle-green', 
                        'text-popsicle-yellow', 'text-popsicle-pink', 'text-popsicle-purple'];
        const colorClass = colors[Math.floor(Math.random() * colors.length)];
        
        icon.classList.add(colorClass, 'opacity-20');
        icon.style.width = `${size}px`;
        icon.style.height = `${size}px`;
        icon.style.left = `${Math.random() * 100}%`;
        icon.style.top = `${Math.random() * 100}%`;
        
        // Animation
        gsap.to(icon, {
          y: -100 - Math.random() * 100,
          x: Math.sin(Math.random() * 10) * 20,
          rotation: Math.random() * 360,
          duration: 5 + Math.random() * 10,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
        
        icons.appendChild(icon);
      }
    }
    
    // Main hero animations
    const tl = gsap.timeline();
    tl.from(".hero-logo", {
      scale: 0.8,
      opacity: 0,
      duration: 1,
      ease: "back.out"
    })
    .from(".hero-title", {
      y: 50,
      opacity: 0,
      duration: 0.7,
      ease: "power2.out"
    }, "-=0.3")
    .from(".hero-description", {
      y: 30,
      opacity: 0,
      duration: 0.7,
      ease: "power2.out"
    }, "-=0.4")
    .from(".hero-button", {
      scale: 0.8,
      opacity: 0,
      duration: 0.5,
      ease: "back.out"
    }, "-=0.3")
    .from(".scroll-indicator", {
      y: -20,
      opacity: 0,
      duration: 0.5
    }, "-=0.1");

    // Enhanced parallax scrolling effect with more elements
    const handleScroll = () => {
      const scrollElements = document.querySelectorAll('.parallax-element');
      
      scrollElements.forEach(element => {
        const speed = element.getAttribute('data-speed');
        const yPos = -window.scrollY * speed;
        element.style.transform = `translateY(${yPos}px)`;
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" ref={heroRef} className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-blue-50 via-blue-100 to-white">
      {/* Animated background icons */}
      <div ref={iconsRef} className="absolute inset-0 overflow-hidden pointer-events-none z-0"></div>
      
      {/* Enhanced decorative circles with more vibrant colors */}
      <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-popsicle-yellow rounded-full opacity-20 blur-xl parallax-element" data-speed="0.2"></div>
      <div className="absolute bottom-1/3 right-1/6 w-80 h-80 bg-popsicle-pink rounded-full opacity-20 blur-xl parallax-element" data-speed="0.3"></div>
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-popsicle-blue rounded-full opacity-15 blur-2xl parallax-element" data-speed="0.1"></div>
      <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-popsicle-green rounded-full opacity-20 blur-lg parallax-element" data-speed="0.25"></div>
      <div className="absolute top-2/3 left-2/3 w-56 h-56 bg-popsicle-orange rounded-full opacity-20 blur-xl parallax-element" data-speed="0.15"></div>
      
      {/* Main popsicle illustrations with enhanced animation */}
      <div className="hidden lg:block absolute -bottom-20 -left-10 w-72 h-72 transform rotate-12 parallax-element animate-float" data-speed="0.15">
        <img 
          src="https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1587" 
          alt="Popsicle" 
          className="w-full h-full object-contain drop-shadow-2xl"
        />
      </div>
      
      <div className="hidden lg:block absolute -bottom-10 right-10 w-80 h-80 transform -rotate-12 parallax-element animate-float" data-speed="0.2" style={{animationDelay: "1.5s"}}>
        <img 
          src="https://images.unsplash.com/photo-1488900128323-21503983a07e?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1470" 
          alt="Popsicle" 
          className="w-full h-full object-contain drop-shadow-2xl"
        />
      </div>
      
      {/* Main content with enhanced animation */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="container mx-auto px-4 text-center">
          <div className="hero-logo animate-float mb-8">
            <img 
              src="https://images.unsplash.com/photo-1488900128323-21503983a07e?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1470" 
              alt="FrostyPops Logo" 
              className="w-64 h-64 mx-auto object-contain drop-shadow-xl"
            />
          </div>
          
          <h1 className="hero-title text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-popsicle-red via-popsicle-orange to-popsicle-green bg-clip-text text-transparent">
            Frosty Pops
          </h1>
          
          <p className="hero-description text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-700">
            Handcrafted ice pops made with fresh fruits and all-natural ingredients.
            Cool down with our delicious frozen treats!
          </p>
          
          <button 
            className="hero-button relative overflow-hidden text-lg px-8 py-4 rounded-full shadow-lg transform transition-all hover:scale-110 hover:shadow-xl bg-gradient-to-r from-popsicle-red to-popsicle-pink text-white"
            onClick={scrollToProducts}
          >
            <span className="relative z-10">Discover Our Flavors</span>
            <div className="absolute inset-0 bg-white opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
      
      {/* Enhanced scroll indicator */}
      <div className="scroll-indicator absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer" onClick={scrollToProducts}>
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2 text-gray-600 font-medium">Scroll Down</span>
          <ArrowDown size={32} className="text-popsicle-blue animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
