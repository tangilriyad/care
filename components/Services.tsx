'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Briefcase, Globe, Book, Plane, Building, Users, Target, Headphones, Compass, Lightbulb, Rocket, Map, Award, Zap } from 'lucide-react'
import Link from 'next/link'

interface ServicesProps {
  version: number;
}

const allServices = [
  [
    {
      title: "Student Visa Mastery",
      description: "Navigate the complexities of international student visas with our expert guidance. We'll help you choose the right program, prepare your application, and increase your chances of approval.",
      icon: GraduationCap
    },
    {
      title: "Global Career Launchpad",
      description: "Take your career international with our work abroad services. We'll connect you with exciting opportunities, assist with work visas, and provide cultural preparation for your new adventure.",
      icon: Briefcase
    },
    {
      title: "Seamless Relocation Solutions",
      description: "Planning to move abroad? Our comprehensive consultancy services cover everything from visa applications to finding accommodation, ensuring a smooth transition to your new home.",
      icon: Globe
    }
  ],
  [
    {
      title: "Academic Counseling",
      description: "Receive personalized guidance on choosing the right courses and institutions that align with your career goals and academic interests.",
      icon: Book
    },
    {
      title: "Travel Assistance",
      description: "From booking flights to arranging accommodation, we ensure your journey abroad is smooth and stress-free.",
      icon: Plane
    },
    {
      title: "Cultural Integration Programs",
      description: "Prepare for life in a new country with our cultural workshops and language courses, designed to help you adapt quickly and confidently.",
      icon: Building
    }
  ],
  [
    {
      title: "Networking Opportunities",
      description: "Connect with alumni and professionals in your field through our extensive global network, opening doors to valuable opportunities.",
      icon: Users
    },
    {
      title: "Career Development Workshops",
      description: "Enhance your employability with our tailored workshops covering resume writing, interview skills, and job search strategies for the international market.",
      icon: Target
    },
    {
      title: "24/7 Support Services",
      description: "Access round-the-clock assistance for any queries or concerns during your time abroad, ensuring you always have support when you need it.",
      icon: Headphones
    }
  ],
  [
    {
      title: "Customized Study Plans",
      description: "Receive a personalized roadmap for your educational journey abroad, tailored to your academic background and career aspirations.",
      icon: Compass
    },
    {
      title: "Innovative Learning Programs",
      description: "Explore cutting-edge courses and unique study opportunities that set you apart in the global job market.",
      icon: Lightbulb
    },
    {
      title: "Start-up Incubation Support",
      description: "For aspiring entrepreneurs, we offer guidance on launching your business ideas in international markets, including legal and financial advice.",
      icon: Rocket
    }
  ],
  [
    {
      title: "Global Internship Placements",
      description: "Gain invaluable international work experience through our carefully curated internship programs with leading global companies.",
      icon: Map
    },
    {
      title: "Scholarship Application Assistance",
      description: "Maximize your chances of securing financial aid with our expert guidance on scholarship applications and essay writing.",
      icon: Award
    },
    {
      title: "Fast-Track Language Programs",
      description: "Accelerate your language learning with our intensive, immersive courses designed to prepare you for academic and professional success abroad.",
      icon: Zap
    }
  ]
];

export default function Services({ version }: ServicesProps) {
  const services = allServices[version - 1];

  const renderServicesVersion1 = () => (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-lg p-6 shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <service.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link 
                href="#"
                className="text-blue-600 font-semibold hover:text-blue-800 transition duration-300"
              >
                Learn More
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

  const renderServicesVersion2 = () => (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Comprehensive Services
        </motion.h2>
        {services.map((service, index) => (
          <motion.div 
            key={index}
            className="flex flex-col md:flex-row items-center mb-12 last:mb-0"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className={`md:w-1/2 mb-6 md:mb-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:order-last md:pl-8'}`}>
              <service.icon className="w-16 h-16 text-blue-600 mx-auto md:mx-0" />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link 
                href="#"
                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300"
              >
                Explore
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );

  const renderServicesVersion3 = () => (
    <section className="py-16 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Empowering Your Global Journey
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-filter backdrop-blur-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <service.icon className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-200 mb-4">{service.description}</p>
              <Link 
                href="#"
                className="text-yellow-400 font-semibold hover:text-yellow-300 transition duration-300"
              >
                Discover More
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

  const renderServicesVersion4 = () => (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Tailored Services for Your Success
        </motion.h2>
        <div className="flex flex-wrap justify-center">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="w-full md:w-1/2 lg:w-1/3 p-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div 
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  >
                    <service.icon className="w-12 h-12 text-blue-600 mb-4" />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                </div>
                <div className="bg-gray-50 px-6 py-4">
                  <Link 
                    href="#"
                    className="text-blue-600 font-semibold hover:text-blue-800 transition duration-300"
                  >
                    Learn More →
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

  const renderServicesVersion5 = () => (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Unlock Your Global Potential
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div 
                className="bg-blue-100 rounded-full p-6 inline-block mb-4"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <service.icon className="w-12 h-12 text-blue-600" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Link 
                  href="#"
                  className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300 inline-block"
                >
                  Get Started
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

  const renderServicesVersion = () => {
    switch(version) {
      case 1:
        return renderServicesVersion1();
      case 2:
        return renderServicesVersion2();
      case 3:
        return renderServicesVersion3();
      case 4:
        return renderServicesVersion4();
      case 5:
        return renderServicesVersion5();
      default:
        return renderServicesVersion1();
    }
  }

  return (
    <section className="services">
      {renderServicesVersion()}
    </section>
  )
}

