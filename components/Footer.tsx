"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Mail,
  MapPin,
} from "lucide-react";
import { Fragment } from "react";

interface FooterProps {
  version: number;
}

const footerVersions = [
  {
    columns: [
      {
        title: "Contact Us",
        content: [
          "123 Consultation Street",
          "City, Country 12345",
          "Phone: +1 (123) 456-7890",
          "Email: info@care2consultancy.com",
        ],
      },
      {
        title: "Quick Links",
        links: [
          { name: "Home", href: "#" },
          { name: "About Us", href: "#" },
          { name: "Services", href: "#" },
          { name: "Contact", href: "#" },
        ],
      },
      {
        title: "Follow Us",
        socialLinks: [
          { name: "Facebook", icon: Facebook, href: "#" },
          { name: "Twitter", icon: Twitter, href: "#" },
          { name: "LinkedIn", icon: Linkedin, href: "#" },
        ],
      },
    ],
    bottomLinks: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
    ],
  },
  {
    columns: [
      {
        title: "Our Services",
        links: [
          { name: "Study Abroad", href: "#" },
          { name: "Work Abroad", href: "#" },
          { name: "Immigration Services", href: "#" },
          { name: "Language Courses", href: "#" },
        ],
      },
      {
        title: "Resources",
        links: [
          { name: "Blog", href: "#" },
          { name: "FAQs", href: "#" },
          { name: "Testimonials", href: "#" },
          { name: "Partner Universities", href: "#" },
        ],
      },
      {
        title: "Connect With Us",
        content: [
          "Main Office: +1 (123) 456-7890",
          "Support: +1 (123) 456-7891",
          "Email: support@care2consultancy.com",
          "Address: 456 Global Avenue, City, Country 67890",
        ],
      },
    ],
    bottomLinks: [
      { name: "Sitemap", href: "#" },
      { name: "Accessibility", href: "#" },
      { name: "Cookie Policy", href: "#" },
    ],
  },
  {
    columns: [
      {
        title: "About Us",
        links: [
          { name: "Our Story", href: "#" },
          { name: "Team", href: "#" },
          { name: "Careers", href: "#" },
          { name: "Press Releases", href: "#" },
        ],
      },
      {
        title: "Student Resources",
        links: [
          { name: "Scholarship Guide", href: "#" },
          { name: "Visa Information", href: "#" },
          { name: "Pre-Departure Checklist", href: "#" },
          { name: "Student Forums", href: "#" },
        ],
      },
      {
        title: "Stay Connected",
        socialLinks: [
          { name: "Facebook", icon: Facebook, href: "#" },
          { name: "Twitter", icon: Twitter, href: "#" },
          { name: "LinkedIn", icon: Linkedin, href: "#" },
          { name: "Instagram", icon: Instagram, href: "#" },
          { name: "YouTube", icon: Youtube, href: "#" },
        ],
      },
    ],
    bottomLinks: [
      { name: "Ethics Policy", href: "#" },
      { name: "Diversity Statement", href: "#" },
    ],
  },
  {
    columns: [
      {
        title: "Global Offices",
        content: [
          "New York: +1 (123) 456-7892",
          "London: +44 20 1234 5678",
          "Sydney: +61 2 9876 5432",
          "Tokyo: +81 3 1234 5678",
        ],
      },
      {
        title: "Partner Programs",
        links: [
          { name: "University Partnerships", href: "#" },
          { name: "Corporate Collaborations", href: "#" },
          { name: "Agent Network", href: "#" },
          { name: "Alumni Association", href: "#" },
        ],
      },
      {
        title: "Legal",
        links: [
          { name: "Terms of Use", href: "#" },
          { name: "Privacy Policy", href: "#" },
          { name: "Cookie Policy", href: "#" },
          { name: "Disclaimer", href: "#" },
        ],
      },
    ],
    bottomLinks: [
      { name: "Feedback", href: "#" },
      { name: "Report an Issue", href: "#" },
    ],
  },
  {
    columns: [
      {
        title: "Explore",
        links: [
          { name: "Destinations", href: "#" },
          { name: "Programs", href: "#" },
          { name: "Events", href: "#" },
          { name: "Success Stories", href: "#" },
        ],
      },
      {
        title: "Support",
        links: [
          { name: "Help Center", href: "#" },
          { name: "Contact Support", href: "#" },
          { name: "Live Chat", href: "#" },
          { name: "FAQ", href: "#" },
        ],
      },
      {
        title: "Newsletter",
        content: [
          "Subscribe to our newsletter for the latest updates and exclusive offers.",
          <form key="newsletter" className="mt-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 border rounded text-gray-800"
            />
            <button
              type="submit"
              className="mt-2 w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition duration-300"
            >
              Subscribe
            </button>
          </form>,
        ],
      },
    ],
    bottomLinks: [
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Press Kit", href: "#" },
    ],
  },
];

export default function Footer({ version }: FooterProps) {
  const footerConfig = footerVersions[version - 1];

  const renderFooterVersion1 = () => (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {footerConfig.columns.map((column, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-4">{column.title}</h3>
              {column.content && (
                <ul className="space-y-2">
                  {column.content.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              )}
              {column.links && (
                <ul className="space-y-2">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="hover:text-blue-400 transition duration-300"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
              {column.socialLinks && (
                <div className="flex space-x-4 mt-4">
                  {column.socialLinks.map((link, linkIndex) => (
                    <Link
                      key={linkIndex}
                      href={link.href}
                      className="hover:text-blue-400 transition duration-300"
                    >
                      <link.icon className="w-6 h-6" />
                    </Link>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
        <motion.div
          className="mt-8 pt-8 border-t border-gray-700 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p>&copy; 2023 Care2 Training Consultancy. All rights reserved.</p>
          <div className="mt-2">
            {footerConfig.bottomLinks.map((link, index) => (
              <Fragment key={index}>
                {index > 0 && <span className="mx-2">|</span>}
                <Link
                  href={link.href}
                  className="hover:text-blue-400 transition duration-300"
                >
                  {link.name}
                </Link>
              </Fragment>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );

  const renderFooterVersion2 = () => (
    <footer className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {footerConfig.columns.map((column, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-bold mb-6 border-b border-blue-400 pb-2">
                {column.title}
              </h3>
              {column.content && (
                <ul className="space-y-3">
                  {column.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center">
                      <Mail className="w-5 h-5 mr-2 text-blue-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
              {column.links && (
                <ul className="space-y-3">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="hover:text-blue-300 transition duration-300 flex items-center"
                      >
                        <span className="mr-2">→</span>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
        <motion.div
          className="mt-12 pt-8 border-t border-blue-700 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-blue-200">
            &copy; 2023 Care2 Training Consultancy. All rights reserved.
          </p>
          <div className="mt-4 flex justify-center space-x-4">
            {footerConfig.bottomLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-sm hover:text-blue-300 transition duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );

  const renderFooterVersion3 = () => (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {footerConfig.columns.map((column, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold mb-6 text-white">
                {column.title}
              </h3>
              {column.links && (
                <ul className="space-y-3">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="hover:text-white transition duration-300 flex items-center"
                      >
                        <span className="mr-2 text-blue-400">•</span>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
              {column.socialLinks && (
                <div className="flex space-x-4 mt-6">
                  {column.socialLinks.map((link, linkIndex) => (
                    <Link
                      key={linkIndex}
                      href={link.href}
                      className="hover:text-white transition duration-300"
                    >
                      <link.icon className="w-6 h-6" />
                    </Link>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
        <motion.div
          className="mt-12 pt-8 border-t border-gray-800 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-gray-500">
            &copy; 2023 Care2 Training Consultancy. All rights reserved.
          </p>
          <div className="mt-4 flex justify-center space-x-4">
            {footerConfig.bottomLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-sm hover:text-white transition duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );

  const renderFooterVersion4 = () => (
    <footer className="bg-white text-gray-800 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {footerConfig.columns.map((column, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-bold mb-6 text-blue-600">
                {column.title}
              </h3>
              {column.content && (
                <ul className="space-y-3">
                  {column.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <MapPin className="w-5 h-5 mr-2 text-blue-500 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
              {column.links && (
                <ul className="space-y-3">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="hover:text-blue-600 transition duration-300"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
        <motion.div
          className="mt-12 pt-8 border-t border-gray-200 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-gray-600">
            &copy; 2023 Care2 Training Consultancy. All rights reserved.
          </p>
          <div className="mt-4 flex justify-center space-x-4">
            {footerConfig.bottomLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-sm hover:text-blue-600 transition duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );

  const renderFooterVersion5 = () => (
    <footer className="bg-gray-100 text-gray-800 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {footerConfig.columns.map((column, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-bold mb-6 text-gray-900">
                {column.title}
              </h3>
              {column.content && (
                <ul className="space-y-3">
                  {column.content.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              )}
              {column.links && (
                <ul className="space-y-3">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="hover:text-blue-600 transition duration-300"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
              {column.title === "Newsletter" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {column.content}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
        <motion.div
          className="mt-12 pt-8 border-t border-gray-300 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-gray-600">
            &copy; 2023 Care2 Training Consultancy. All rights reserved.
          </p>
          <div className="mt-4 flex justify-center space-x-4">
            {footerConfig.bottomLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-sm hover:text-blue-600 transition duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );

  const renderFooterVersion = () => {
    switch (version) {
      case 1:
        return renderFooterVersion1();
      case 2:
        return renderFooterVersion2();
      case 3:
        return renderFooterVersion3();
      case 4:
        return renderFooterVersion4();
      case 5:
        return renderFooterVersion5();
      default:
        return renderFooterVersion1();
    }
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {renderFooterVersion()}
    </motion.footer>
  );
}
