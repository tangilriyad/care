'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, Phone,  Globe } from 'lucide-react'

interface ContactFormProps {
  version: number;
}

const formVersions = [
  {
    title: "Get in Touch",
    fields: [
      { name: "name", label: "Name", type: "text" },
      { name: "email", label: "Email", type: "email" },
      { name: "message", label: "Message", type: "textarea" }
    ],
    buttonText: "Send Message"
  },
  {
    title: "Request a Consultation",
    fields: [
      { name: "name", label: "Full Name", type: "text" },
      { name: "email", label: "Email Address", type: "email" },
      { name: "phone", label: "Phone Number", type: "tel" },
      { name: "service", label: "Service Interested In", type: "select", options: ["Study Abroad", "Work Abroad", "Immigration", "Language Courses"] },
      { name: "message", label: "Additional Information", type: "textarea" }
    ],
    buttonText: "Schedule Consultation"
  },
  {
    title: "Quick Enquiry",
    fields: [
      { name: "name", label: "Name", type: "text" },
      { name: "email", label: "Email", type: "email" },
      { name: "query", label: "Your Query", type: "select", options: ["Visa Information", "University Application", "Career Advice", "Other"] },
      { name: "message", label: "Brief Message", type: "textarea" }
    ],
    buttonText: "Submit Enquiry"
  },
  {
    title: "Book a Webinar",
    fields: [
      { name: "name", label: "Full Name", type: "text" },
      { name: "email", label: "Email Address", type: "email" },
      { name: "webinar", label: "Webinar Topic", type: "select", options: ["Study in USA", "Work in Canada", "UK Immigration", "Australian Education System"] },
      { name: "date", label: "Preferred Date", type: "date" }
    ],
    buttonText: "Reserve My Spot"
  },
  {
    title: "Request Information Package",
    fields: [
      { name: "name", label: "Name", type: "text" },
      { name: "email", label: "Email", type: "email" },
      { name: "interests", label: "Areas of Interest", type: "checkbox", options: ["Undergraduate Studies", "Postgraduate Studies", "PhD Programs", "Professional Certifications"] },
      { name: "countries", label: "Preferred Countries", type: "checkbox", options: ["USA", "UK", "Canada", "Australia", "Germany", "Other"] }
    ],
    buttonText: "Send Me Info"
  }
];

export default function ContactForm({ version }: ContactFormProps) {
  const [formData, setFormData] = useState({});
  const formConfig = formVersions[version - 1];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement;
      setFormData(prevState => ({
        ...prevState,
        [name]: checkbox.checked
          ? [...(prevState[name] || []), value]
          : (prevState[name] || []).filter(item => item !== value)
      }));
    } else {
      setFormData(prevState => ({ ...prevState, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({});
  };

  const renderContactFormVersion1 = () => (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {formConfig.title}
        </motion.h2>
        <motion.form 
          onSubmit={handleSubmit} 
          className="max-w-lg mx-auto space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {formConfig.fields.map((field, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <label htmlFor={field.name} className="block text-sm font-medium text-gray-700 mb-1">{field.label}</label>
              {field.type === 'textarea' ? (
                <textarea
                  id={field.name}
                  name={field.name}
                  value={formData[field.name] || ''}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              ) : field.type === 'select' ? (
                <select
                  id={field.name}
                  name={field.name}
                  value={formData[field.name] || ''}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select an option</option>
                  {field.options.map((option, optionIndex) => (
                    <option key={optionIndex} value={option}>{option}</option>
                  ))}
                </select>
              ) : field.type === 'checkbox' ? (
                <div className="space-y-2">
                  {field.options.map((option, optionIndex) => (
                    <div key={optionIndex} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`${field.name}-${optionIndex}`}
                        name={field.name}
                        value={option}
                        checked={(formData[field.name] || []).includes(option)}
                        onChange={handleChange}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label htmlFor={`${field.name}-${optionIndex}`} className="ml-2 block text-sm text-gray-900">
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              ) : (
                <input
                  type={field.type}
                  id={field.name}
                  name={field.name}
                  value={formData[field.name] || ''}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              )}
            </motion.div>
          ))}
          <motion.button 
            type="submit" 
            className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Send className="w-5 h-5 mr-2" />
            {formConfig.buttonText}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );

  const renderContactFormVersion2 = () => (
    <section id="contact" className="py-16 bg-gradient-to-br from-blue-500 to-purple-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {formConfig.title}
        </motion.h2>
        <motion.form 
          onSubmit={handleSubmit} 
          className="max-w-2xl mx-auto space-y-8 bg-white bg-opacity-10 p-8 rounded-lg backdrop-filter backdrop-blur-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {formConfig.fields.map((field, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="relative"
            >
              <label htmlFor={field.name} className="block text-sm font-medium mb-1">{field.label}</label>
              {field.type === 'textarea' ? (
                <textarea
                  id={field.name}
                  name={field.name}
                  value={formData[field.name] || ''}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 py-2 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent placeholder-white placeholder-opacity-50 text-white"
                ></textarea>
              ) : field.type === 'select' ? (
                <select
                  id={field.name}
                  name={field.name}
                  value={formData[field.name] || ''}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent text-white"
                >
                  <option value="">Select an option</option>
                  {field.options.map((option, optionIndex) => (
                    <option key={optionIndex} value={option}>{option}</option>
                  ))}
                </select>
              ) : field.type === 'checkbox' ? (
                <div className="space-y-2">
                  {field.options.map((option, optionIndex) => (
                    <div key={optionIndex} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`${field.name}-${optionIndex}`}
                        name={field.name}
                        value={option}
                        checked={(formData[field.name] || []).includes(option)}
                        onChange={handleChange}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-white rounded bg-white bg-opacity-20"
                      />
                      <label htmlFor={`${field.name}-${optionIndex}`} className="ml-2 block text-sm">
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              ) : (
                <input
                  type={field.type}
                  id={field.name}
                  name={field.name}
                  value={formData[field.name] || ''}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent placeholder-white placeholder-opacity-50 text-white"
                />
              )}
            </motion.div>
          ))}
          <motion.button 
            type="submit" 
            className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-blue-600 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Send className="w-5 h-5 mr-2" />
            {formConfig.buttonText}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );

  const renderContactFormVersion3 = () => (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {formConfig.title}
        </motion.h2>
        <motion.div 
          className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden md:flex"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="md:w-1/2 bg-blue-600 p-8 text-white">
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            <p className="mb-4">Fill out the form and we will get back to you within 24 hours.</p>
            <div className="flex items-center mb-4">
              <Phone className="w-6 h-6 mr-2" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center mb-4">
              <Mail className="w-6 h-6 mr-2" />
              <span>info@care2consultancy.com</span>
            </div>
            <div className="flex items-center">
              <Globe className="w-6 h-6 mr-2" />
              <span>www.care2consultancy.com</span>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="md:w-1/2 p-8">
            {formConfig.fields.map((field, index) => (
              <motion.div 
                key={index}
                className="mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <label htmlFor={field.name} className="block text-sm font-medium text-gray-700 mb-1">{field.label}</label>
                {field.type === 'textarea' ? (
                  <textarea
                    id={field.name}
                    name={field.name}
                    value={formData[field.name] || ''}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  ></textarea>
                ) : field.type === 'select' ? (
                  <select
                    id={field.name}
                    name={field.name}
                    value={formData[field.name] || ''}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select an option</option>
                    {field.options.map((option, optionIndex) => (
                      <option key={optionIndex} value={option}>{option}</option>
                    ))}
                  </select>
                ) : field.type === 'checkbox' ? (
                  <div className="space-y-2">
                    {field.options.map((option, optionIndex) => (
                      <div key={optionIndex} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`${field.name}-${optionIndex}`}
                          name={field.name}
                          value={option}
                          checked={(formData[field.name] || []).includes(option)}
                          onChange={handleChange}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor={`${field.name}-${optionIndex}`} className="ml-2 block text-sm text-gray-900">
                          {option}
                        </label>
                      </div>
                    ))}
                  </div>
                ) : (
                  <input
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    value={formData[field.name] || ''}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                )}
              </motion.div>
            ))}
            <motion.button 
              type="submit" 
              className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Send className="w-5 h-5 mr-2" />
              {formConfig.buttonText}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );

  const renderContactFormVersion4 = () => (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {formConfig.title}
        </motion.h2>
        <motion.form 
          onSubmit={handleSubmit} 
          className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {formConfig.fields.map((field, index) => (
            <motion.div 
              key={index}
              className={field.type === 'textarea' ? 'md:col-span-2' : ''}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <label htmlFor={field.name} className="block text-sm font-medium text-gray-700 mb-1">{field.label}</label>
              {field.type === 'textarea' ? (
                <textarea
                  id={field.name}
                  name={field.name}
                  value={formData[field.name] || ''}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              ) : field.type === 'select' ? (
                <select
                  id={field.name}
                  name={field.name}
                  value={formData[field.name] || ''}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select an option</option>
                  {field.options.map((option, optionIndex) => (
                    <option key={optionIndex} value={option}>{option}</option>
                  ))}
                </select>
              ) : field.type === 'checkbox' ? (
                <div className="space-y-2">
                  {field.options.map((option, optionIndex) => (
                    <div key={optionIndex} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`${field.name}-${optionIndex}`}
                        name={field.name}
                        value={option}
                        checked={(formData[field.name] || []).includes(option)}
                        onChange={handleChange}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label htmlFor={`${field.name}-${optionIndex}`} className="ml-2 block text-sm text-gray-900">
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              ) : (
                <input
                  type={field.type}
                  id={field.name}
                  name={field.name}
                  value={formData[field.name] || ''}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              )}
            </motion.div>
          ))}
          <motion.button 
            type="submit" 
            className="md:col-span-2 w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Send className="w-5 h-5 mr-2" />
            {formConfig.buttonText}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );

  const renderContactFormVersion5 = () => (
    <section id="contact" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {formConfig.title}
        </motion.h2>
        <motion.form 
          onSubmit={handleSubmit} 
          className="max-w-2xl mx-auto space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {formConfig.fields.map((field, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <label htmlFor={field.name} className="block text-sm font-medium mb-1">{field.label}</label>
              {field.type === 'textarea' ? (
                <textarea
                  id={field.name}
                  name={field.name}
                  value={formData[field.name] || ''}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-white"
                ></textarea>
              ) : field.type === 'select' ? (
                <select
                  id={field.name}
                  name={field.name}
                  value={formData[field.name] || ''}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-white"
                >
                  <option value="">Select an option</option>
                  {field.options.map((option, optionIndex) => (
                    <option key={optionIndex} value={option}>{option}</option>
                  ))}
                </select>
              ) : field.type === 'checkbox' ? (
                <div className="space-y-2">
                  {field.options.map((option, optionIndex) => (
                    <div key={optionIndex} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`${field.name}-${optionIndex}`}
                        name={field.name}
                        value={option}
                        checked={(formData[field.name] || []).includes(option)}
                        onChange={handleChange}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-700 rounded bg-gray-800"
                      />
                      <label htmlFor={`${field.name}-${optionIndex}`} className="ml-2 block text-sm">
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              ) : (
                <input
                  type={field.type}
                  id={field.name}
                  name={field.name}
                  value={formData[field.name] || ''}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-white"
                />
              )}
            </motion.div>
          ))}
          <motion.button 
            type="submit" 
            className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-900 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Send className="w-5 h-5 mr-2" />
            {formConfig.buttonText}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );

  const renderContactFormVersion = () => {
    switch(version) {
      case 1:
        return renderContactFormVersion1();
      case 2:
        return renderContactFormVersion2();
      case 3:
        return renderContactFormVersion3();
      case 4:
        return renderContactFormVersion4();
      case 5:
        return renderContactFormVersion5();
      default:
        return renderContactFormVersion1();
    }
  }

  return (
    <section className="contact-form">
      {renderContactFormVersion()}
    </section>
  )
}

