import React from 'react';
import Hero from '../components/sections/Hero';
import ServicesSection from '../components/sections/ServicesSection';
import DiscoverServices from '../components/sections/DiscoverServices';
import Testimonials from '../components/sections/Testimonials';
import BlogSection from '../components/sections/BlogSection';
import ContactSection from '../components/sections/ContactSection';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <ServicesSection />
      <DiscoverServices />
      <Testimonials />
      <BlogSection />
      <ContactSection />
    </>
  );
};

export default Home;