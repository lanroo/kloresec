import React from 'react';
import SecurityDevelopment from './SecurityDevelopment';
import PenetrationTesting from './PenetrationTesting';
import RedTeamOperations from './RedTeamOperations';

const DiscoverServices: React.FC = () => {
  return (
    <section id="services" className="container mx-auto px-4 py-16 md:py-24 scroll-mt-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4" data-searchable>Discover Our Services</h2>
        <p className="text-gray-400 text-lg" data-searchable>Effectiveness and Quality</p>
      </div>

      <SecurityDevelopment />
      <PenetrationTesting />
      <RedTeamOperations />
    </section>
  );
};

export default DiscoverServices;