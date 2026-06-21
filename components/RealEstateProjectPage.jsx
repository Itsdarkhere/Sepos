'use client'
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X, MapPin, Calendar, Square, Users, Architecture, Ruler, ArrowLeft, ArrowRight, Phone } from 'lucide-react';

// Sample project data (in real implementation, this would come from an API or CMS)
const projectDetail = {
  id: 1,
  title: "Skyline Towers",
  tagline: "Redefining Luxury Urban Living",
  location: "123 Downtown Avenue, New York, NY 10001",
  category: "Residential",
  completionYear: "2023",
  status: "Completed",
  description: "Skyline Towers represents the pinnacle of modern urban living, offering unparalleled luxury and convenience in the heart of downtown. This landmark development features two residential towers with a total of 180 premium apartments, ranging from elegant studios to spacious penthouses. Each residence is finished to the highest standards, featuring premium materials, floor-to-ceiling windows, and smart home technology.",
  features: [
    "180 luxury residential units across two towers",
    "24/7 concierge and security services",
    "Rooftop infinity pool and lounge area",
    "State-of-the-art fitness center and spa",
    "Private cinema and entertainment rooms",
    "Underground parking with EV charging stations",
    "Sustainable design with LEED Gold certification"
  ],
  factsheet: {
    architect: "Foster & Partners",
    developer: "APEX Developments",
    totalUnits: 180,
    totalFloors: 35,
    totalArea: "320,000 sq ft",
    parkingSpaces: 220,
    amenities: "Infinity pool, spa, fitness center, lounge, cinema",
    certifications: "LEED Gold"
  },
  timeline: {
    planning: "2018",
    construction: "2019-2023",
    completion: "June 2023",
    occupancy: "September 2023"
  },
  images: [
    {
      id: 1,
      src: "/api/placeholder/1200/800",
      alt: "Skyline Towers exterior view",
      caption: "Exterior view of Skyline Towers at sunset"
    },
    {
      id: 2,
      src: "/api/placeholder/1200/800",
      alt: "Luxury apartment interior",
      caption: "Luxury penthouse living area with panoramic city views"
    },
    {
      id: 3,
      src: "/api/placeholder/1200/800",
      alt: "Rooftop infinity pool",
      caption: "Rooftop infinity pool and lounge area"
    },
    {
      id: 4,
      src: "/api/placeholder/1200/800",
      alt: "Building lobby",
      caption: "Grand lobby entrance with concierge desk"
    },
    {
      id: 5,
      src: "/api/placeholder/1200/800",
      alt: "Fitness center",
      caption: "State-of-the-art fitness center with city views"
    },
    {
      id: 6,
      src: "/api/placeholder/1200/800",
      alt: "Private cinema",
      caption: "Private screening room and entertainment space"
    }
  ],
  mapCoordinates: {
    lat: 40.7128,
    lng: -74.0060
  }
};

// Sample related projects
const relatedProjects = [
  {
    id: 2,
    title: "Riverside Plaza",
    category: "Commercial",
    location: "Waterfront District",
    image: "/api/placeholder/600/400",
    slug: "riverside-plaza"
  },
  {
    id: 3,
    title: "The Oasis",
    category: "Residential",
    location: "Suburban Area",
    image: "/api/placeholder/600/400",
    slug: "the-oasis"
  },
  {
    id: 4,
    title: "Tech Innovation Hub",
    category: "Commercial",
    location: "Tech District",
    image: "/api/placeholder/600/400",
    slug: "tech-innovation-hub"
  }
];

// Navbar Component (simplified from homepage)
const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md py-2 z-50">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center">
          <span className="text-xl font-bold mr-2">APEX</span>
          <span className="text-xl font-light">DEVELOPMENTS</span>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="/#home" className="font-medium hover:text-blue-600 transition-colors">Home</a>
          <a href="/#projects" className="font-medium hover:text-blue-600 transition-colors">Projects</a>
          <a href="/#partners" className="font-medium hover:text-blue-600 transition-colors">Partners</a>
          <a href="/#contact" className="font-medium hover:text-blue-600 transition-colors">Contact</a>
        </div>
        <Button variant="outline" className="hidden md:block">
          Get In Touch
        </Button>
        <button className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

// Project Header Component
const ProjectHeader = ({ project }) => {
  return (
    <section className="pt-24 pb-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <a href="/#projects" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to All Projects
        </a>
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold mb-3">{project.title}</h1>
            <p className="text-xl text-gray-600 mb-4">{project.tagline}</p>
            <div className="flex items-center text-gray-500">
              <MapPin className="h-5 w-5 mr-2" />
              {project.location}
            </div>
          </div>
          <div className="mt-4 md:mt-0">
            <span className={`inline-block px-4 py-2 rounded-full font-medium 
              ${project.status === 'Completed' ? 'bg-green-100 text-green-800' : 
                project.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                'bg-yellow-100 text-yellow-800'}`}
            >
              {project.status}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

// Project Gallery Component with Modal View
const ProjectGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openImageDialog = (image) => {
    setSelectedImage(image);
    setIsDialogOpen(true);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image) => (
          <div 
            key={image.id} 
            className="aspect-[4/3] overflow-hidden rounded-lg cursor-pointer relative group"
            onClick={() => openImageDialog(image)}
          >
            <img 
              src={image.src} 
              alt={image.alt} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity flex items-center justify-center">
              <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-center p-4">
                <span className="bg-black bg-opacity-70 px-3 py-1 rounded-full text-sm">Click to expand</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-5xl w-[90vw] p-0 bg-black">
          <div className="relative h-[80vh] flex items-center justify-center">
            {selectedImage && (
              <>
                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.alt} 
                  className="max-h-full max-w-full object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-4 text-white">
                  <p>{selectedImage.caption}</p>
                </div>
                <div className="absolute top-4 right-4">
                  <DialogClose className="h-10 w-10 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-70 flex items-center justify-center">
                    <X className="h-6 w-6" />
                  </DialogClose>
                </div>
                
                <button 
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 h-12 w-12 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-70 flex items-center justify-center"
                  onClick={() => {
                    const currentIndex = images.findIndex(img => img.id === selectedImage.id);
                    const prevIndex = (currentIndex - 1 + images.length) % images.length;
                    setSelectedImage(images[prevIndex]);
                  }}
                >
                  <ChevronLeft className="h-8 w-8" />
                </button>
                
                <button 
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 h-12 w-12 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-70 flex items-center justify-center"
                  onClick={() => {
                    const currentIndex = images.findIndex(img => img.id === selectedImage.id);
                    const nextIndex = (currentIndex + 1) % images.length;
                    setSelectedImage(images[nextIndex]);
                  }}
                >
                  <ChevronRight className="h-8 w-8" />
                </button>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

// Project Details Component
const ProjectDetails = ({ project }) => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {project.description}
            </p>
            
            <h3 className="text-2xl font-bold mb-4">Key Features</h3>
            <ul className="mb-12 space-y-2">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">Project Gallery</h3>
              <ProjectGallery images={project.images} />
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6">Location</h3>
              <div className="rounded-lg overflow-hidden h-80 mb-4">
                <iframe 
                  src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${project.mapCoordinates.lat},${project.mapCoordinates.lng}&zoom=15`}
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen=""
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <p className="text-gray-700 flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                {project.location}
              </p>
            </div>
          </div>
          
          <div>
            <Card className="mb-8 pt-0 overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-blue-600 text-white p-6">
                  <h3 className="text-xl font-bold mb-2">Project Facts</h3>
                  <p>Key information about {project.title}</p>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-start">
                    <Square className="h-5 w-5 mr-3 text-blue-600 mt-1" />
                    <div>
                      <p className="font-medium text-gray-500">Architect</p>
                      <p>{project.factsheet.architect}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Users className="h-5 w-5 mr-3 text-blue-600 mt-1" />
                    <div>
                      <p className="font-medium text-gray-500">Developer</p>
                      <p>{project.factsheet.developer}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Square className="h-5 w-5 mr-3 text-blue-600 mt-1" />
                    <div>
                      <p className="font-medium text-gray-500">Total Units</p>
                      <p>{project.factsheet.totalUnits}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Ruler className="h-5 w-5 mr-3 text-blue-600 mt-1" />
                    <div>
                      <p className="font-medium text-gray-500">Total Area</p>
                      <p>{project.factsheet.totalArea}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Calendar className="h-5 w-5 mr-3 text-blue-600 mt-1" />
                    <div>
                      <p className="font-medium text-gray-500">Completion</p>
                      <p>{project.timeline.completion}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className=' pt-0 overflow-hidden'>
              <CardContent className="p-0">
                <div className="bg-gray-800 text-white p-6">
                  <h3 className="text-xl font-bold mb-2">Project Timeline</h3>
                  <p>Development journey of {project.title}</p>
                </div>
                <div className="p-6">
                  <div className="relative">
                    <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                    
                    <div className="relative pl-10 pb-6">
                      <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                        <div className="w-4 h-4 rounded-full bg-blue-600"></div>
                      </div>
                      <p className="font-bold">Planning</p>
                      <p className="text-gray-600">{project.timeline.planning}</p>
                    </div>
                    
                    <div className="relative pl-10 pb-6">
                      <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                        <div className="w-4 h-4 rounded-full bg-blue-600"></div>
                      </div>
                      <p className="font-bold">Construction</p>
                      <p className="text-gray-600">{project.timeline.construction}</p>
                    </div>
                    
                    <div className="relative pl-10 pb-6">
                      <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                        <div className="w-4 h-4 rounded-full bg-blue-600"></div>
                      </div>
                      <p className="font-bold">Completion</p>
                      <p className="text-gray-600">{project.timeline.completion}</p>
                    </div>
                    
                    <div className="relative pl-10">
                      <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                        <div className="w-4 h-4 rounded-full bg-green-600"></div>
                      </div>
                      <p className="font-bold">Occupancy</p>
                      <p className="text-gray-600">{project.timeline.occupancy}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

// Related Projects Component
const RelatedProjects = ({ projects, currentProjectId }) => {
  const filteredProjects = projects.filter(project => project.id !== currentProjectId);
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Explore Our Other Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover more landmark developments from APEX Developments
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 text-sm rounded">
                  {project.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-500 mb-4 flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {project.location}
                </p>
                <a 
                  href={`/projects/${project.slug}`} 
                  className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                >
                  View Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button variant="outline" size="lg" asChild>
            <a href="/#projects">
              View All Projects
              <ChevronRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

// Footer Component (simplified from homepage)
const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="mb-4">
              <span className="text-xl font-bold text-white mr-1">APEX</span>
              <span className="text-lg font-light">DEVELOPMENTS</span>
            </div>
            <p className="mb-4">
              Building exceptional properties that create lasting value for communities and investors.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="/#projects" className="hover:text-white transition-colors">Projects</a></li>
              <li><a href="/#partners" className="hover:text-white transition-colors">Partners</a></li>
              <li><a href="/#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 mt-0.5 text-blue-400" />
                <span>123 Development Avenue, Downtown, NY 10001</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-blue-400" />
                <a href="tel:+15551234567" className="hover:text-white transition-colors">+1 (555) 123-4567</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} APEX Developments. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// Main Project Detail Component
const RealEstateProjectPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ProjectHeader project={projectDetail} />
      <ProjectDetails project={projectDetail} />
      <RelatedProjects projects={relatedProjects} currentProjectId={projectDetail.id} />
      <Footer />
    </div>
  );
};

export default RealEstateProjectPage;