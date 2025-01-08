'use client'

import { motion } from 'framer-motion'
import { Users, Globe, Award, Briefcase, BookOpen } from 'lucide-react'
import abroadImg from '@/public/hq720.jpg'
import Image from 'next/image';
interface AboutProps {
  version: number;
}

const aboutContent = [
  {
    title: "About Care2 Training Consultancy",
    description: "At Care2 Training Consultancy, we're dedicated to turning your international aspirations into reality. With over a decade of experience, our team of expert consultants provides personalized guidance for students, professionals, and adventurers seeking to study, work, or live abroad. We simplify complex visa processes, connect you with prestigious institutions, and open doors to exciting career opportunities across the globe."
  },
  {
    title: "Our Mission and Vision",
    description: "Our mission is to empower individuals to achieve their global ambitions through expert guidance and support. We envision a world where international education and career opportunities are accessible to all, fostering cultural exchange and personal growth. With our comprehensive services and dedicated team, we strive to be the bridge that connects you to a world of possibilities."
  },
  {
    title: "Our Expertise and Approach",
    description: "With a combined experience of over 50 years in international education and immigration, our team brings unparalleled expertise to your journey. We take a holistic approach, considering your unique background, goals, and challenges to craft a personalized strategy for your success. Our data-driven insights and up-to-date knowledge of global trends ensure you're always a step ahead in your international pursuits."
  },
  {
    title: "Our Global Network",
    description: "Care2 Training Consultancy boasts an extensive network of partnerships with leading universities, employers, and organizations worldwide. This vast network allows us to offer you exclusive opportunities and insights that you won't find elsewhere. From prestigious academic institutions to innovative start-ups and multinational corporations, we connect you with the right people and places to fuel your global success."
  },
  {
    title: "Our Commitment to You",
    description: "At Care2, your success is our success. We're committed to providing unwavering support throughout your international journey, from the initial consultation to long after you've settled abroad. Our team is passionate about cultural exchange and believes in the transformative power of international experiences. With Care2, you're not just a client; you're part of a global community of ambitious individuals shaping the future."
  }
];

export default function About({ version }: AboutProps) {
  const content = aboutContent[version - 1];
  const renderAboutVersion1 = () => (
    <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {content.title}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white bg-opacity-10 p-6 rounded-lg"
          >
            <Users className="w-12 h-12 mb-4 text-blue-300" />
            <h3 className="text-xl font-semibold mb-2">Expert Guidance</h3>
            <p>Our team of experienced consultants provides personalized support for your international journey.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white bg-opacity-10 p-6 rounded-lg"
          >
            <Globe className="w-12 h-12 mb-4 text-blue-300" />
            <h3 className="text-xl font-semibold mb-2">Global Network</h3>
            <p>Access our extensive network of universities, employers, and organizations worldwide.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white bg-opacity-10 p-6 rounded-lg"
          >
            <Award className="w-12 h-12 mb-4 text-blue-300" />
            <h3 className="text-xl font-semibold mb-2">Proven Success</h3>
            <p>Join thousands of satisfied clients who have achieved their international goals with our help.</p>
          </motion.div>
        </div>
        <motion.p 
          className="text-lg mt-12 max-w-3xl mx-auto text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {content.description}
        </motion.p>
      </div>
    </section>
  );
 

  const renderAboutVersion2 = () => (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">{content.title}</h2>
            <p className="text-lg text-gray-700">{content.description}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { icon: Users, text: "Expert Team" },
              { icon: Globe, text: "Global Reach" },
              { icon: Award, text: "Proven Success" },
              { icon: Briefcase, text: "Career Support" }
            ].map((item, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg text-center">
                <item.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <p className="font-semibold">{item.text}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );

 
  const renderAboutVersion3 = () => (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {content.title}
        </motion.h2>
        <motion.p 
          className="text-lg text-gray-700 max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {content.description}
        </motion.p>
      </div>
    </section>
  );
  const renderAboutVersion4 = () => (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {content.title}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image src={abroadImg} alt="About Care2 Training Consultancy" className="rounded-lg shadow-lg" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="text-lg text-gray-700 mb-6">{content.description}</p>
            <ul className="space-y-4">
              {[
                "Personalized consultation tailored to your goals",
                "Extensive network of global educational institutions",
                "High success rate in visa approvals",
                "Comprehensive support from application to arrival"
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );

  const renderAboutVersion5 = () => (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {content.title}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <div className="bg-blue-100 rounded-full p-6 inline-block mb-4">
              <BookOpen className="w-12 h-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p className="text-gray-600">Empowering individuals to achieve their global ambitions through expert guidance and support.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center"
          >
            <div className="bg-green-100 rounded-full p-6 inline-block mb-4">
              <Users className="w-12 h-12 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Our Team</h3>
            <p className="text-gray-600">Experienced consultants with a passion for international education and cultural exchange.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center"
          >
            <div className="bg-purple-100 rounded-full p-6 inline-block mb-4">
              <Globe className="w-12 h-12 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Our Reach</h3>
            <p className="text-gray-600">Extensive global network connecting you to opportunities worldwide.</p>
          </motion.div>
        </div>
        <motion.p 
          className="text-lg text-gray-700 max-w-3xl mx-auto text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {content.description}
        </motion.p>
      </div>
    </section>
  );

  const renderAboutVersion = () => {
    switch(version) {
      case 1:
        return renderAboutVersion1();
      case 2:
        return renderAboutVersion2();
      case 3:
        return renderAboutVersion3();
      case 4:
        return renderAboutVersion4();
      case 5:
        return renderAboutVersion5();
      default:
        return renderAboutVersion1();
    }
  }

  return (
    <section className="about">
      {renderAboutVersion()}
    </section>
  )
}

