
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "New Summer Flavors Have Arrived!",
    excerpt: "Explore our new seasonal collection of refreshing summer flavors that will keep you cool all season long.",
    date: "May 1, 2023",
    image: "https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1587",
    category: "Product News"
  },
  {
    id: 2,
    title: "Introducing Our Sustainable Packaging",
    excerpt: "Learn about our new eco-friendly packaging initiative and how we're reducing our environmental impact.",
    date: "April 15, 2023",
    image: "https://images.unsplash.com/photo-1488900128323-21503983a07e?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1470",
    category: "Sustainability"
  },
  {
    id: 3,
    title: "Recipe: DIY Popsicle Cocktails for Adults",
    excerpt: "Turn our fruit popsicles into delicious cocktails with these simple recipes perfect for summer entertaining.",
    date: "April 3, 2023",
    image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=1587",
    category: "Recipes"
  }
];

const BlogPostCard = ({ post }) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="h-48 overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-2">
          <span className="inline-block bg-popsicle-yellow text-xs px-2 py-1 rounded-full text-gray-700 font-medium">
            {post.category}
          </span>
        </div>
        <h3 className="text-xl font-bold mb-2">{post.title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>
        <div className="mt-auto flex justify-between items-center">
          <span className="text-sm text-gray-500">{post.date}</span>
          <Button variant="ghost" className="p-0 hover:bg-transparent hover:text-popsicle-red">
            Read More <ArrowRight size={16} className="ml-1" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

const NewsSection = () => {
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
    
    const section = document.getElementById('news');
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
    <section id="news" className={`section bg-white ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
      <div className="container mx-auto">
        <div className="text-center mb-12 stagger-animation">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Latest News</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest news, events, and recipes from Frosty Pops.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div 
              key={post.id}
              className="opacity-0"
              style={{ animation: `fade-up 0.5s ease-out ${index * 0.2}s forwards` }}
            >
              <BlogPostCard post={post} />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="btn-secondary">View All Posts</Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
