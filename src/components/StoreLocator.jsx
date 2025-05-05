
import React, { useState, useEffect } from 'react';
import { MapPin, Search } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const stores = [
  {
    id: 1,
    name: "Downtown Flagship Store",
    address: "123 Main Street, Downtown",
    hours: "Mon-Sun: 11AM - 9PM",
    phone: "(555) 123-4567",
    coordinates: { lat: 40.7128, lng: -74.0060 }
  },
  {
    id: 2,
    name: "Beachside Pop Shop",
    address: "456 Ocean Avenue, Beachfront",
    hours: "Mon-Sun: 10AM - 10PM",
    phone: "(555) 234-5678",
    coordinates: { lat: 40.7282, lng: -73.7949 }
  },
  {
    id: 3,
    name: "Uptown Pops",
    address: "789 Park Road, Uptown District",
    hours: "Mon-Sat: 12PM - 8PM, Sun: 12PM - 6PM",
    phone: "(555) 345-6789",
    coordinates: { lat: 40.8448, lng: -73.8648 }
  },
  {
    id: 4,
    name: "Westside Market Location",
    address: "101 Market Street, West Side",
    hours: "Fri-Sun: 9AM - 5PM",
    phone: "(555) 456-7890",
    coordinates: { lat: 40.7589, lng: -74.1709 }
  },
];

const StoreCard = ({ store, isActive, onClick }) => {
  return (
    <div 
      className={`bg-white p-4 rounded-xl shadow-md cursor-pointer transition-all duration-200 
        ${isActive ? 'ring-2 ring-popsicle-red shadow-lg' : 'hover:shadow-lg'}`}
      onClick={() => onClick(store)}
    >
      <div className="flex items-start">
        <div className="bg-popsicle-red rounded-full p-2 mr-3 text-white">
          <MapPin size={16} />
        </div>
        <div>
          <h4 className="font-semibold">{store.name}</h4>
          <p className="text-sm text-gray-600">{store.address}</p>
        </div>
      </div>
    </div>
  );
};

const StoreDetails = ({ store }) => {
  if (!store) return null;
  
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 animate-fade-in">
      <h3 className="text-2xl font-bold mb-3">{store.name}</h3>
      <div className="bg-gray-100 h-48 rounded-lg mb-4 overflow-hidden">
        {/* Map placeholder */}
        <div className="h-full w-full bg-blue-100 flex items-center justify-center">
          <div className="text-center">
            <MapPin size={32} className="mx-auto mb-2 text-popsicle-red" />
            <p className="text-gray-500">Map view of {store.name}</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4">
        <div>
          <h4 className="font-semibold text-gray-700">Address:</h4>
          <p>{store.address}</p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-700">Hours:</h4>
          <p>{store.hours}</p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-700">Phone:</h4>
          <p>{store.phone}</p>
        </div>
      </div>
      <Button className="btn-primary mt-4 w-full">Get Directions</Button>
    </div>
  );
};

const StoreLocator = () => {
  const [selectedStore, setSelectedStore] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredStores, setFilteredStores] = useState(stores);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const filtered = stores.filter(store => 
      store.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      store.address.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredStores(filtered);
  }, [searchTerm]);
  
  useEffect(() => {
    // Set default selection
    if (stores.length > 0 && !selectedStore) {
      setSelectedStore(stores[0]);
    }
  }, []);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const section = document.getElementById('stores');
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);
  
  const handleSearch = (e) => {
    e.preventDefault();
    // Search is already handled by the useEffect above
  };
  
  return (
    <section id="stores" className={`section bg-gradient-to-b from-blue-50 to-white ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
      <div className="container mx-auto">
        <div className="text-center mb-12 stagger-animation">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Find Our Stores</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover where to find our delicious frozen treats! Visit one of our stores 
            or find Frosty Pops at select markets and partner shops.
          </p>
        </div>
        
        <div className="mb-8">
          <form onSubmit={handleSearch} className="flex gap-2">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input
                type="text"
                placeholder="Search by location or address"
                className="pl-10 py-3 w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button type="submit" className="btn-primary">Search</Button>
          </form>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <div className="space-y-3">
              {filteredStores.length > 0 ? (
                filteredStores.map(store => (
                  <StoreCard 
                    key={store.id} 
                    store={store} 
                    isActive={selectedStore && selectedStore.id === store.id}
                    onClick={setSelectedStore} 
                  />
                ))
              ) : (
                <p className="text-center py-8 text-gray-500">No stores found matching your search.</p>
              )}
            </div>
          </div>
          
          <div className="md:col-span-2">
            {selectedStore && <StoreDetails store={selectedStore} />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoreLocator;
