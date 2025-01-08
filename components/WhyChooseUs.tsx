'use client'

import { motion } from 'framer-motion'
import { Check, Star, Award, Users, Globe, } from 'lucide-react'
import meImg from '@/public/why-tmc-3-1024x538.png'
import Image from 'next/image';
interface WhyChooseUsProps {
  version: number;
}

const allReasons = [
  [
    "Personalized consultation tailored to your goals",
    "Extensive network of global educational institutions and employers",
    "High success rate in visa approvals",
    "Comprehensive support from application to arrival",
    "Up-to-date knowledge of international regulations and opportunities",
    "Post-placement assistance and ongoing support"
  ],
  [
    "Expert team with firsthand international experience",
    "Customized career planning and academic counseling",
    "Access to exclusive scholarship opportunities",
    "Innovative pre-departure orientation programs",
    "Strong alumni network for mentorship and guidance",
    "Cutting-edge online resources and tools"
  ],
  [
    "Multilingual support services",
    "Partnerships with top-ranked universities worldwide",
    "Specialized guidance for niche and emerging fields of study",
    "Regular workshops and webinars on global education trends",
    "Dedicated visa interview preparation sessions",
    "Comprehensive health and safety advisory services"
  ],
  [
    "Tailored financial planning assistance for studying abroad",
    "Virtual campus tours and interactive information sessions",
    "Personalized cultural adaptation programs",
    "Assistance with credit transfer and course equivalency",
    "Access to global internship and research opportunities",
    "24/7 emergency support for students and parents"
  ],
  [
    "Innovative AI-powered course and university matching",
    "Expertise in facilitating dual degree programs",
    "Guidance on post-study work opportunities and regulations",
    "Specialized support for students with unique needs",
    "Regular follow-ups and progress tracking throughout your journey",
    "Comprehensive guide to living costs and budgeting in host countries"
  ]
];

export default function WhyChooseUs({ version }: WhyChooseUsProps) {
  const reasons = allReasons[version - 1];

  const renderWhyChooseUsVersion1 = () => (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Why Choose Care2 Training Consultancy?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div 
              key={index} 
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Check className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-1" />
              <p className="text-lg text-gray-700">{reason}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

  const renderWhyChooseUsVersion2 = () => (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Why We 're Your Best Choice
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 p-6 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Star className="w-8 h-8 text-yellow-500 mb-4" />
              <p className="text-lg text-gray-700">{reason}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

  const renderWhyChooseUsVersion3 = () => (
    <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          The Care2 Advantage
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="flex items-center space-x-4"
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white p-2 rounded-full">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <p className="text-lg">{reason}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

  const renderWhyChooseUsVersion4 = () => (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Why Care2 Stands Out
        </motion.h2>
        <div className="flex flex-wrap justify-center">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md m-4 max-w-sm"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Users className="w-12 h-12 text-blue-600 mb-4 mx-auto" />
              <p className="text-lg text-gray-700 text-center">{reason}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

  const renderWhyChooseUsVersion5 = () => (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Reasons to Choose Care2
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image src={meImg} alt="Why Choose Care2" className="rounded-lg shadow-lg" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                className="flex items-center mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <Globe className="w-8 h-8 text-blue-600 mr-4" />
                <p className="text-lg text-gray-700">{reason}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );

  const renderWhyChooseUsVersion = () => {
    switch(version) {
      case 1:
        return renderWhyChooseUsVersion1();
      case 2:
        return renderWhyChooseUsVersion2();
      case 3:
        return renderWhyChooseUsVersion3();
      case 4:
        return renderWhyChooseUsVersion4();
      case 5:
        return renderWhyChooseUsVersion5();
      default:
        return renderWhyChooseUsVersion1();
    }
  }

  return (
    <section className="why-choose-us">
      {renderWhyChooseUsVersion()}
    </section>
  )
}

