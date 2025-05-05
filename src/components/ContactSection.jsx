
import React from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter } from 'lucide-react';

const ContactSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here would be the form submission logic
    alert('Thank you for your message! We will get back to you soon.');
  };
  
  return (
    <section id="contact" className="section bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto">
        <div className="text-center mb-12 stagger-animation">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have a question or suggestion? We'd love to hear from you!
            Fill out the form below or reach out to us on social media.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-3xl shadow-xl">
            <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <Input 
                  type="text" 
                  id="name" 
                  placeholder="John Smith" 
                  className="w-full"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <Input 
                  type="email" 
                  id="email" 
                  placeholder="john@example.com" 
                  className="w-full"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <Input 
                  type="text" 
                  id="subject" 
                  placeholder="Question about your products" 
                  className="w-full"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Your message here..." 
                  rows={5}
                  className="w-full"
                  required
                />
              </div>
              
              <Button type="submit" className="btn-primary w-full">
                Send Message
              </Button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="flex flex-col justify-between">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-700">Main Office:</h4>
                  <p className="text-gray-600">
                    123 Popsicle Way<br />
                    Frosty Town, IC 12345<br />
                    United States
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-700">Email:</h4>
                  <p className="text-gray-600">hello@frostypops.com</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-700">Phone:</h4>
                  <p className="text-gray-600">(555) 123-POPS</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-700">Business Hours:</h4>
                  <p className="text-gray-600">
                    Monday-Friday: 9AM - 5PM<br />
                    Saturday-Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
              
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-12 h-12 rounded-full bg-popsicle-red flex items-center justify-center text-white hover:bg-popsicle-pink transition-colors"
                >
                  <Facebook size={24} />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 rounded-full bg-popsicle-blue flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                >
                  <Twitter size={24} />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-popsicle-purple to-popsicle-orange flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                >
                  <Instagram size={24} />
                </a>
              </div>
            </div>
            
            <div className="mt-8">
              <div className="bg-popsicle-yellow p-6 rounded-2xl text-center">
                <h4 className="text-xl font-bold mb-2">Become a Distributor</h4>
                <p className="text-gray-700 mb-4">
                  Interested in selling Frosty Pops at your store or restaurant? 
                  Contact our distribution team!
                </p>
                <Button className="bg-black text-white hover:bg-gray-800">
                  Distribution Inquiries
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
