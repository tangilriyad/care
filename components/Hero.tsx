'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import abroadImg from "@/public/study-abroad-safety-guide-hero.jpg"
// import abroadVideo from "../public/"
// my-app/public/abroad.mp4
import { ArrowRight, Globe, BookOpen, Briefcase, Users, Plane } from 'lucide-react'
import Image from 'next/image'
// my-app/public/study-abroad-safety-guide-hero.jpg
interface HeroProps {
  version: number;
}

const heroContent = [
  {
    title: "Your Gateway to Global Opportunities",
    subtitle: "Expert guidance for studying, working, and living abroad",
    cta: "Start Your Journey",
    image: abroadImg
  },
  {
    title: "Unlock Your International Potential",
    subtitle: "Personalized consultancy for global education and careers",
    cta: "Explore Possibilities",
    image:abroadImg
  },
  {
    title: "Navigate Your Path to Success Abroad",
    subtitle: "Comprehensive support for international aspirations",
    cta: "Chart Your Course",
    image: abroadImg
  },
  {
    title: "Your Dream of Global Success, Realized",
    subtitle: "Expert guidance every step of your international journey",
    cta: "Begin Your Adventure",
    image: abroadImg
  },
  {
    title: "Empowering Your Global Ambitions",
    subtitle: "Tailored solutions for international study and work",
    cta: "Unleash Your Potential",
    image:abroadImg
  }
];

export default function Hero({ version }: HeroProps) {
  const content = heroContent[version - 1];

  const renderHeroVersion1 = () => (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="absolute inset-0 opacity-20">
        <Image src={abroadImg} alt="World Map" className="w-full h-full object-cover" />
      </div>
      <div className="relative z-10 text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1 
          className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {content.title}
        </motion.h1>
        <motion.p 
          className="text-xl sm:text-2xl mb-10 text-blue-100"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {content.subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link 
            href="#contact" 
            className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-100 inline-flex items-center"
          >
            {content.cta}
            <ArrowRight className="ml-2" />
          </Link>
        </motion.div>
      </div>
    </div>
  );

  const renderHeroVersion2 = () => (
    <div className="relative min-h-screen flex items-center bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-800">{content.title}</h1>
            <p className="text-xl mb-8 text-gray-600">{content.subtitle}</p>
            <Link 
              href="#contact" 
              className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 ease-in-out hover:bg-blue-700 inline-flex items-center"
            >
              {content.cta}
              <ArrowRight className="ml-2" />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-96 sm:h-[500px]"
          >
            <Image src={abroadImg} alt="Students abroad" className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-2xl" />
          </motion.div>
        </div>
      </div>
    </div>
  );

  const renderHeroVersion3 = () => (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <video 
        autoPlay 
        loop 
        muted 
        className="absolute w-auto min-w-full min-h-full max-w-none"
      >
        <source src='/abroad.mp4' type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {content.title}
        </motion.h1>
        <motion.p 
          className="text-xl sm:text-2xl mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {content.subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center space-x-4"
        >
          <Link 
            href="#contact" 
            className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out hover:bg-blue-700"
          >
            {content.cta}
          </Link>
          <Link 
            href="#services" 
            className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out hover:bg-white hover:text-blue-600"
          >
            Our Services
          </Link>
        </motion.div>
      </div>
    </div>
  );

  const renderHeroVersion4 = () => (
    <div className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-900 via-blue-600 to-blue-400 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">{content.title}</h1>
            <p className="text-xl mb-8 text-blue-100">{content.subtitle}</p>
            <Link 
              href="#contact" 
              className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg text-lg transition duration-300 ease-in-out hover:bg-blue-100 inline-flex items-center"
            >
              {content.cta}
              <ArrowRight className="ml-2" />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { icon: Globe, text: "Global Reach" },
              { icon: BookOpen, text: "Expert Guidance" },
              { icon: Briefcase, text: "Career Support" },
              { icon: Users, text: "Personal Approach" }
            ].map((item, index) => (
              <div key={index} className="bg-white bg-opacity-20 p-6 rounded-lg text-center">
                <item.icon className="w-12 h-12 mx-auto mb-4" />
                <p className="font-semibold">{item.text}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );

  const renderHeroVersion5 = () => (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{backgroundImage: `url(${content.image})`}}
      ></div>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center text-white">
          <motion.h1 
            className="text-5xl sm:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {content.title}
          </motion.h1>
          <motion.p 
            className="text-xl sm:text-2xl mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {content.subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <Link 
              href="#contact" 
              className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out hover:bg-blue-700 w-full sm:w-auto"
            >
              {content.cta}
            </Link>
            <Link 
              href="#about" 
              className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out hover:bg-white hover:text-blue-600 w-full sm:w-auto"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 flex justify-center"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-white text-center">
            {[
              { icon: Plane, text: "Study Abroad" },
              { icon: Briefcase, text: "Work Abroad" },
              { icon: Users, text: "Cultural Exchange" },
              { icon: Globe, text: "Global Network" }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="bg-white bg-opacity-20 p-4 rounded-full mb-4">
                  <item.icon className="w-8 h-8" />
                </div>
                <p className="font-semibold">{item.text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );

  const renderHeroVersion = () => {
    switch(version) {
      case 1:
        return renderHeroVersion1();
      case 2:
        return renderHeroVersion2();
      case 3:
        return renderHeroVersion3();
      case 4:
        return renderHeroVersion4();
      case 5:
        return renderHeroVersion5();
      default:
        return renderHeroVersion1();
    }
  }

  return (
    <section className="hero">
      {renderHeroVersion()}
    </section>
  )
}

