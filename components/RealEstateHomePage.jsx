"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  ChevronRight,
  MapPin,
  Clock,
  Building,
  Phone,
  Mail,
  Linkedin,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

// Sample data for projects (in real implementation, this would come from an API or CMS)
const projectsData = [
  {
    id: 1,
    title: "Skyline Towers",
    location: "Downtown",
    category: "Residential",
    completionYear: "2023",
    description:
      "Luxury residential towers with panoramic city views and premium amenities.",
    imageUrl: "/api/placeholder/800/500",
    slug: "skyline-towers",
  },
  {
    id: 2,
    title: "Riverside Plaza",
    location: "Waterfront District",
    category: "Commercial",
    completionYear: "2022",
    description:
      "Mixed-use development with office spaces, retail, and dining overlooking the river.",
    imageUrl: "/api/placeholder/800/500",
    slug: "riverside-plaza",
  },
  {
    id: 3,
    title: "The Oasis",
    location: "Suburban Area",
    category: "Residential",
    completionYear: "2024",
    description:
      "Gated community with sustainable homes, parks, and community centers.",
    imageUrl: "/api/placeholder/800/500",
    slug: "the-oasis",
  },
  {
    id: 4,
    title: "Tech Innovation Hub",
    location: "Tech District",
    category: "Commercial",
    completionYear: "2023",
    description:
      "State-of-the-art office complex designed for technology companies and startups.",
    imageUrl: "/api/placeholder/800/500",
    slug: "tech-innovation-hub",
  },
];

// Sample data for affiliated companies
const affiliatedCompanies = [
  {
    id: 1,
    name: "Elite Architecture Partners",
    logo: "/api/placeholder/200/200",
    description:
      "Award-winning architectural firm specializing in sustainable urban design.",
  },
  {
    id: 2,
    name: "Construct Pro Services",
    logo: "/api/placeholder/200/200",
    description: "Premium construction management and building services.",
  },
  {
    id: 3,
    name: "Urban Planning Associates",
    logo: "/api/placeholder/200/200",
    description: "Strategic urban development and city planning consultancy.",
  },
];

// Sample data for team members
const teamMembers = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CEO",
    email: "sarah.johnson@example.com",
    phone: "+1 (555) 123-4567",
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Development Director",
    email: "michael.chen@example.com",
    phone: "+1 (555) 234-5678",
  },
  {
    id: 3,
    name: "Jennifer Park",
    position: "Head of Acquisitions",
    email: "jennifer.park@example.com",
    phone: "+1 (555) 345-6789",
  },
  {
    id: 4,
    name: "David Rodriguez",
    position: "Chief Architect",
    email: "david.rodriguez@example.com",
    phone: "+1 (555) 456-7890",
  },
];

// Navbar Component
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent text-white py-4"
      }`}
    >
      <div className='container mx-auto flex items-center justify-between px-4'>
        <div className='flex items-center'>
          <span className='text-xl font-bold mr-2'>SEPOS</span>
          <span className='text-xl font-light'>OY</span>
        </div>
        <div className='hidden md:flex space-x-6'>
          <a
            href='#home'
            className='font-medium hover:text-blue-600 transition-colors'
          >
            Home
          </a>
          <a
            href='#projects'
            className='font-medium hover:text-blue-600 transition-colors'
          >
            Projects
          </a>
          <a
            href='#partners'
            className='font-medium hover:text-blue-600 transition-colors'
          >
            Partners
          </a>
          <a
            href='#contact'
            className='font-medium hover:text-blue-600 transition-colors'
          >
            Contact
          </a>
        </div>
        <Button variant='outline' className='hidden md:block'>
          Get In Touch
        </Button>
        <button className='md:hidden'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

// Hero Section Component
const HeroSection = () => {
  return (
    <section id='home' className='relative h-screen flex items-center'>
      <div className='absolute inset-0 bg-black/50 z-10'></div>
      <div
        className='absolute inset-0 bg-cover bg-center'
        style={{ backgroundImage: 'url(https://ik.imagekit.io/s93qwyistj0/pics-highres/desktop_-um8M8xUPd.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653668423308)' }}
      ></div>
      <div className='container mx-auto px-4 relative z-20'>
        <div className='max-w-3xl'>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4'>
            Building Tomorrow's Landmarks Today
          </h1>
          <p className='text-xl text-gray-200 mb-8'>
            APEX Developments is a premier real estate development company with
            a portfolio of iconic residential and commercial properties. We
            transform visions into remarkable spaces that enhance communities
            and create lasting value.
          </p>
          <div className='flex flex-col sm:flex-row gap-4'>
            <Button size='lg' className='bg-blue-600 hover:bg-blue-700'>
              Explore Our Projects
              <ChevronRight className='ml-2 h-4 w-4' />
            </Button>
            <Button
              size='lg'
              variant='outline'
              className='text-white border-white hover:bg-white/10'
            >
              About Our Company
            </Button>
          </div>
        </div>
      </div>
      <div className='absolute bottom-10 left-0 right-0 flex justify-center'>
        <div className='animate-bounce'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-8 w-8 text-white'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M19 14l-7 7m0 0l-7-7m7 7V3'
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

// Projects Section Component
const ProjectsSection = (projectArray) => {
  console.log("projectArray: ", projectArray?.projectArray?.projectArray)

  return (
    <section id='projects' className='py-20 bg-gray-50'>
      <div className='container mx-auto px-4'>
        <div className='mb-16 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            Our Signature Projects
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            We take pride in developing exceptional properties that define
            skylines and transform neighborhoods.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projectArray?.projectArray?.projectArray.map((project) => (
            <Card
              key={project.index}
              className='overflow-hidden hover:shadow-lg transition-shadow'
            >
              <div className='aspect-video relative overflow-hidden'>
                <img
                  src={project.displayImage[1]}
                  alt={project.name}
                  className='w-full h-full object-cover transition-transform duration-500 hover:scale-105'
                />
              </div>
              <CardHeader>
                <CardTitle className='text-xl'>{project.name}</CardTitle>
                <CardDescription className='flex items-center gap-1 text-gray-500'>
                  <MapPin className='h-4 w-4' /> Turku
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className='text-gray-700 mb-4'>{project.finnish.status}</p>
              </CardContent>
              <CardFooter>
                <Link
                  href={`/garden`}
                  className='text-blue-600 hover:text-blue-800 font-medium flex items-center'
                >
                  View Project Details
                  <ArrowRight className='ml-2 h-4 w-4' />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className='mt-12 text-center'>
          <Button variant='outline' size='lg'>
            View All Projects
            <ChevronRight className='ml-2 h-4 w-4' />
          </Button>
        </div>
      </div>
    </section>
  );
};

// Affiliated Companies Section Component
const AffiliatedCompaniesSection = (projectArray) => {
  console.log("projectArray: ", projectArray.projectArray.companyArray)
  return (
    <section id='partners' className='py-20 bg-white'>
      <div className='container mx-auto px-4'>
        <div className='mb-16 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            Our Trusted Partners
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            We collaborate with industry-leading companies to deliver
            exceptional developments.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {projectArray.projectArray.companyArray.map((company) => (
            <Card
              key={company.id}
              className='text-center hover:shadow-md transition-shadow'
            >
              <CardHeader>
                <div className='flex justify-center mb-4'>
                  <div className='h-24 w-24 rounded-full overflow-hidden'>
                    <img
                      src={company.image}
                      alt={company.name}
                      className='w-full h-full object-cover'
                    />
                  </div>
                </div>
                <CardTitle>{company.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-gray-600'>{company.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section Component
const ContactSection = () => {
  return (
    <section id='contact' className='py-20 bg-gray-900 text-white'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          <div>
            <h2 className='text-3xl md:text-4xl font-bold mb-6'>
              Get In Touch
            </h2>
            <p className='text-gray-300 mb-8 text-xl'>
              Whether you're interested in our developments, seeking partnership
              opportunities, or would like to discuss your next project, our
              team is here to help.
            </p>

            <div className='mb-12'>
              <h3 className='text-xl font-semibold mb-4'>Our Team</h3>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {teamMembers.map((member) => (
                  <div key={member.id} className='flex flex-col'>
                    <h4 className='font-medium text-lg'>{member.name}</h4>
                    <p className='text-gray-400 mb-1'>{member.position}</p>
                    <a
                      href={`mailto:${member.email}`}
                      className='text-blue-400 hover:text-blue-300 flex items-center gap-1'
                    >
                      <Mail className='h-4 w-4' />
                      {member.email}
                    </a>
                    <a
                      href={`tel:${member.phone}`}
                      className='text-gray-300 flex items-center gap-1'
                    >
                      <Phone className='h-4 w-4' />
                      {member.phone}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className='text-xl font-semibold mb-4'>Office Location</h3>
              <p className='flex items-center gap-2 mb-2'>
                <MapPin className='h-5 w-5 text-blue-400' />
                123 Development Avenue, Downtown, NY 10001
              </p>
              <p className='flex items-center gap-2'>
                <Building className='h-5 w-5 text-blue-400' />
                Monday - Friday: 9:00 AM - 6:00 PM
              </p>
            </div>
          </div>

          <div className='bg-white/10 p-8 rounded-lg'>
            <h3 className='text-2xl font-semibold mb-6'>Send Us a Message</h3>
            <form className='space-y-6'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div>
                  <label
                    htmlFor='name'
                    className='block mb-2 text-sm font-medium'
                  >
                    Your Name
                  </label>
                  <Input
                    id='name'
                    placeholder='John Doe'
                    className='bg-white/5 border-white/10 text-white'
                  />
                </div>
                <div>
                  <label
                    htmlFor='email'
                    className='block mb-2 text-sm font-medium'
                  >
                    Your Email
                  </label>
                  <Input
                    id='email'
                    type='email'
                    placeholder='john@example.com'
                    className='bg-white/5 border-white/10 text-white'
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor='subject'
                  className='block mb-2 text-sm font-medium'
                >
                  Subject
                </label>
                <Input
                  id='subject'
                  placeholder='How can we help you?'
                  className='bg-white/5 border-white/10 text-white'
                />
              </div>
              <div>
                <label
                  htmlFor='message'
                  className='block mb-2 text-sm font-medium'
                >
                  Message
                </label>
                <Textarea
                  id='message'
                  rows={5}
                  placeholder='Tell us about your inquiry...'
                  className='bg-white/5 border-white/10 text-white'
                />
              </div>
              <Button className='w-full bg-blue-600 hover:bg-blue-700'>
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className='bg-gray-950 text-gray-300 py-12'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12'>
          <div>
            <div className='mb-4'>
              <span className='text-xl font-bold text-white mr-1'>APEX</span>
              <span className='text-lg font-light'>DEVELOPMENTS</span>
            </div>
            <p className='mb-4'>
              Building exceptional properties that create lasting value for
              communities and investors.
            </p>
            <div className='flex space-x-4'>
              <a
                href='#'
                className='text-gray-400 hover:text-white transition-colors'
              >
                <Linkedin />
              </a>
              <a
                href='#'
                className='text-gray-400 hover:text-white transition-colors'
              >
                <Linkedin />
              </a>
              <a
                href='#'
                className='text-gray-400 hover:text-white transition-colors'
              >
                <Linkedin />
              </a>
            </div>
          </div>

          <div>
            <h3 className='text-lg font-semibold mb-4 text-white'>
              Quick Links
            </h3>
            <ul className='space-y-2'>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Home
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  About Us
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Projects
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Partners
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='text-lg font-semibold mb-4 text-white'>Projects</h3>
            <ul className='space-y-2'>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Residential
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Commercial
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Mixed-Use
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Sustainable
                </a>
              </li>
              <li>
                <a href='#' className='hover:text-white transition-colors'>
                  Future Developments
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='text-lg font-semibold mb-4 text-white'>
              Contact Info
            </h3>
            <ul className='space-y-3'>
              <li className='flex items-start gap-2'>
                <MapPin className='h-5 w-5 mt-0.5 text-blue-400' />
                <span>123 Development Avenue, Downtown, NY 10001</span>
              </li>
              <li className='flex items-center gap-2'>
                <Phone className='h-5 w-5 text-blue-400' />
                <a
                  href='tel:+15551234567'
                  className='hover:text-white transition-colors'
                >
                  +1 (555) 123-4567
                </a>
              </li>
              <li className='flex items-center gap-2'>
                <Mail className='h-5 w-5 text-blue-400' />
                <a
                  href='mailto:info@apexdevelopments.com'
                  className='hover:text-white transition-colors'
                >
                  info@apexdevelopments.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className='pt-8 border-t border-gray-800 text-sm text-center'>
          <p>
            &copy; {new Date().getFullYear()} APEX Developments. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
const RealEstateHomepage = (projectArray) => {
  return (
    <div className='min-h-screen'>
      <Navbar />
      <HeroSection />
      <ProjectsSection projectArray={projectArray} />
      <AffiliatedCompaniesSection projectArray={projectArray} />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default RealEstateHomepage;
