
import React, { useState, useEffect, useRef } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { gsap } from "gsap";
import { ArrowLeft, ArrowRight, Heart } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const products = [
  {
    id: 1,
    name: "Berry Blast",
    description: "Mixed berry popsicle with strawberry, blueberry and raspberry",
    image: "https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1587",
    color: "bg-gradient-to-b from-popsicle-red to-popsicle-purple",
    ingredients: ["Strawberries", "Blueberries", "Raspberries", "Organic cane sugar", "Lemon juice"]
  },
  {
    id: 2,
    name: "Tropical Paradise",
    description: "Refreshing tropical mix with mango, pineapple and passion fruit",
    image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1587",
    color: "bg-gradient-to-b from-popsicle-yellow to-popsicle-orange",
    ingredients: ["Mango", "Pineapple", "Passion fruit", "Organic cane sugar", "Lime juice"]
  },
  {
    id: 3,
    name: "Minty Melon",
    description: "Watermelon and mint popsicle, perfect for hot summer days",
    image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1470",
    color: "bg-gradient-to-b from-popsicle-green to-popsicle-blue",
    ingredients: ["Watermelon", "Fresh mint", "Organic cane sugar", "Lime juice"]
  },
  {
    id: 4,
    name: "Citrus Splash",
    description: "Tangy citrus blend with orange, lemon and grapefruit",
    image: "https://images.unsplash.com/photo-1488900128323-21503983a07e?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1470",
    color: "bg-gradient-to-b from-popsicle-orange to-popsicle-yellow",
    ingredients: ["Orange", "Lemon", "Grapefruit", "Organic cane sugar"]
  },
  {
    id: 5,
    name: "Cherry Chocolate",
    description: "Sweet cherry popsicle with dark chocolate chunks",
    image: "https://images.unsplash.com/photo-1516559828984-fb3b99548b21?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1470",
    color: "bg-gradient-to-b from-popsicle-red to-popsicle-purple",
    ingredients: ["Cherries", "Dark chocolate", "Organic cane sugar", "Vanilla extract"]
  },
  {
    id: 6,
    name: "Coconut Dream",
    description: "Creamy coconut popsicle with real coconut pieces",
    image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1470",
    color: "bg-gradient-to-b from-gray-100 to-gray-300",
    ingredients: ["Coconut milk", "Coconut flakes", "Organic cane sugar", "Vanilla extract"]
  }
];

const ProductCard = ({ product, isActive, onClick }) => {
  const cardRef = useRef(null);
  
  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(cardRef.current, 
        { y: 50, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8, delay: 0.1 * product.id, ease: "power3.out" }
      );
    }
  }, []);
  
  return (
    <Card 
      ref={cardRef}
      className={`popsicle-card cursor-pointer h-full hover-card ${isActive ? 'ring-4 ring-popsicle-blue' : ''}`}
      onClick={() => onClick(product)}
    >
      <div className={`h-48 ${product.color} flex items-center justify-center p-4 relative overflow-hidden`}>
        <img 
          src={product.image} 
          alt={product.name} 
          className="h-full object-contain transform transition-transform duration-300 hover:scale-110"
        />
        <span className="absolute top-2 right-2 bg-white rounded-full p-1.5 shadow-md cursor-pointer transition-transform hover:scale-110">
          <Heart size={18} className="text-gray-400 hover:text-popsicle-red transition-colors" />
        </span>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-popsicle-red">Best Seller</span>
          <Button variant="ghost" size="sm" className="hover:bg-popsicle-red/10">View</Button>
        </div>
      </div>
    </Card>
  );
};

const ProductDetails = ({ product }) => {
  if (!product) return null;
  
  return (
    <div className="animate-fade-in">
      <div className={`w-full h-64 ${product.color} rounded-t-3xl flex items-center justify-center p-8 relative overflow-hidden`}>
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div className="absolute top-5 left-5 w-20 h-20 rounded-full bg-white/20"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-white/20"></div>
          <div className="absolute top-20 right-20 w-16 h-16 rounded-full bg-white/20"></div>
        </div>
        <img 
          src={product.image} 
          alt={product.name} 
          className="h-full object-contain animate-float drop-shadow-2xl"
        />
      </div>
      <div className="bg-white p-8 rounded-b-3xl shadow-xl relative">
        <div className="absolute -top-6 right-8 bg-white rounded-full p-4 shadow-lg">
          <Heart size={24} className="text-popsicle-red" />
        </div>
        
        <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
        <p className="text-xl text-gray-700 mb-6">{product.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          <span className="bg-popsicle-yellow/20 text-popsicle-orange px-3 py-1 rounded-full text-sm font-medium">Natural</span>
          <span className="bg-popsicle-green/20 text-popsicle-green px-3 py-1 rounded-full text-sm font-medium">Gluten Free</span>
          <span className="bg-popsicle-blue/20 text-popsicle-blue px-3 py-1 rounded-full text-sm font-medium">Low Calorie</span>
        </div>
        
        <h3 className="text-xl font-semibold mb-2">Ingredients:</h3>
        <ul className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-2">
          {product.ingredients.map((ingredient, index) => (
            <li key={index} className="flex items-center mb-2">
              <div className="w-2 h-2 rounded-full bg-popsicle-red mr-2"></div>
              {ingredient}
            </li>
          ))}
        </ul>
        
        <div className="flex flex-col md:flex-row gap-4">
          <Button className="bg-gradient-to-r from-popsicle-red to-popsicle-pink hover:opacity-90 text-white font-bold py-3 px-8 rounded-full">Buy Now</Button>
          <Button className="bg-gradient-to-r from-popsicle-yellow to-popsicle-orange hover:opacity-90 text-black font-bold py-3 px-8 rounded-full">Add to Favorites</Button>
        </div>
      </div>
    </div>
  );
};

const ProductsSection = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // Set default selected product
    if (products.length > 0 && !selectedProduct) {
      setSelectedProduct(products[0]);
    }
  }, []);

  return (
    <section id="products" ref={sectionRef} className="section bg-gradient-to-b from-blue-50 to-white">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-50 pointer-events-none">
        <div className="absolute top-1/4 -left-10 w-40 h-40 rounded-full bg-popsicle-red opacity-10"></div>
        <div className="absolute bottom-1/4 -right-20 w-60 h-60 rounded-full bg-popsicle-blue opacity-10"></div>
        <div className="absolute top-3/4 left-1/4 w-20 h-20 rounded-full bg-popsicle-yellow opacity-20"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 stagger-animation">
          <span className="inline-block bg-popsicle-red/10 text-popsicle-red px-4 py-1 rounded-full text-sm font-medium mb-4">Handcrafted With Love</span>
          <h2 className="section-title text-4xl md:text-5xl font-bold mb-6">Our Delicious Flavors</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our collection of handcrafted ice pops made with fresh fruits and natural ingredients.
            No artificial flavors, colors, or preservatives.
          </p>
        </div>

        {/* Mobile view - Carousel for smaller screens */}
        <div className="block md:hidden mb-12">
          <Carousel className="w-full max-w-sm mx-auto">
            <CarouselContent>
              {products.map((product) => (
                <CarouselItem key={product.id} className="pl-1">
                  <div className="p-1">
                    <ProductCard 
                      product={product} 
                      isActive={selectedProduct && selectedProduct.id === product.id}
                      onClick={setSelectedProduct} 
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-4">
              <CarouselPrevious className="static translate-y-0 mr-2" />
              <CarouselNext className="static translate-y-0 ml-2" />
            </div>
          </Carousel>
        </div>

        {/* Desktop view - Grid layout */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product) => (
            <div key={product.id} className={`transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
              <ProductCard 
                product={product} 
                isActive={selectedProduct && selectedProduct.id === product.id}
                onClick={setSelectedProduct} 
              />
            </div>
          ))}
        </div>

        {/* Featured product spotlight */}
        <div className="bg-white/50 backdrop-blur-md p-4 rounded-3xl mt-16">
          <div className="flex items-center justify-between mb-6 px-4">
            <h3 className="text-2xl font-bold">Featured Product</h3>
            <div className="flex gap-2">
              <button 
                onClick={() => {
                  const currentIndex = products.findIndex(p => p.id === selectedProduct.id);
                  const prevIndex = currentIndex === 0 ? products.length - 1 : currentIndex - 1;
                  setSelectedProduct(products[prevIndex]);
                }}
                className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50"
              >
                <ArrowLeft size={18} />
              </button>
              <button 
                onClick={() => {
                  const currentIndex = products.findIndex(p => p.id === selectedProduct.id);
                  const nextIndex = currentIndex === products.length - 1 ? 0 : currentIndex + 1;
                  setSelectedProduct(products[nextIndex]);
                }}
                className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
          {selectedProduct && <ProductDetails product={selectedProduct} />}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <Button className="bg-gradient-to-r from-popsicle-orange to-popsicle-yellow text-black font-bold py-3 px-12 rounded-full text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all">
            View All Flavors
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
