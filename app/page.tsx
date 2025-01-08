'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import WhyChooseUs from '@/components/WhyChooseUs'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import Pagination from '@/components/Pagination'

export default function Home() {
  const [currentPages, setCurrentPages] = useState({
    hero: 1,
    about: 1,
    services: 1,
    whyChooseUs: 1,
    contactForm: 1,
    footer: 1
  });

  const updatePage = (component: string, page: number) => {
    setCurrentPages(prev => ({ ...prev, [component]: page }));
  };

  return (
    <main className="min-h-screen">
      <Navbar />
      <Pagination currentPage={currentPages.hero} setCurrentPage={(page) => updatePage('hero', page)} />
      <Hero version={currentPages.hero} />
      
      <section id="about">
        <Pagination currentPage={currentPages.about} setCurrentPage={(page) => updatePage('about', page)} />
        <About version={currentPages.about} />
      </section>
      
      <section id="services">
        <Pagination currentPage={currentPages.services} setCurrentPage={(page) => updatePage('services', page)} />
        <Services version={currentPages.services} />
      </section>
      
      <section id="why-choose-us">
        <Pagination currentPage={currentPages.whyChooseUs} setCurrentPage={(page) => updatePage('whyChooseUs', page)} />
        <WhyChooseUs version={currentPages.whyChooseUs} />
      </section>
      
      <section id="contact">
        <Pagination currentPage={currentPages.contactForm} setCurrentPage={(page) => updatePage('contactForm', page)} />
        <ContactForm version={currentPages.contactForm} />
      </section>
      
      <Pagination currentPage={currentPages.footer} setCurrentPage={(page) => updatePage('footer', page)} />
      <Footer version={currentPages.footer} />
    </main>
  )
}

