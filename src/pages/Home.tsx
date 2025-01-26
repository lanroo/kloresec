import React from 'react';
import Hero from '../components/sections/Hero';
import ServicesSection from '../components/sections/ServicesSection';
import DiscoverServices from '../components/sections/DiscoverServices';
import BlogSection from '../components/sections/BlogSection';
import ContactSection from '../components/sections/ContactSection';

const Home: React.FC = () => {
  const showServices = false;
  const showDiscover = false;
  const showContact = false;

  return (
    <>
      <Hero />
      {showServices && <ServicesSection />}
      {showDiscover && <DiscoverServices />}
      <BlogSection />
      {showContact && <ContactSection />}
    </>
  );
};

export default Home;