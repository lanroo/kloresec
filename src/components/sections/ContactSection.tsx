import React from 'react';
import { Shield, ArrowRight } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Let's Talk About our{' '}
              <span className="text-green-400">Cybersecurity</span> Services
            </h2>
            <p className="text-gray-400">
              Please fill out the form and we will contact you within 24 hours.
            </p>
          </div>
          <div className="relative w-full max-w-md mt-8">
            <Shield className="absolute text-green-400 w-48 h-48 opacity-10" />
            <div className="relative z-10">
              <img 
                src="https://res.cloudinary.com/dggewyuon/image/upload/v1737839193/am-benefits_efuzhk.svg" 
                alt="Cybersecurity" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>

        <div className="bg-gray-900/50 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-green-400/20 shadow-[0_0_15px_rgba(74,222,128,0.1)] mt-16 md:mt-32">
          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Your Full Name"
                className="w-full bg-black/50 border border-green-400/20 rounded-lg px-4 py-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-green-400/40 transition-colors"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-black/50 border border-green-400/20 rounded-lg px-4 py-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-green-400/40 transition-colors"
              />
            </div>
            <div>
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full bg-black/50 border border-green-400/20 rounded-lg px-4 py-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-green-400/40 transition-colors"
              />
            </div>
            <div>
              <textarea
                rows={4}
                placeholder="Type Your Message Here.."
                className="w-full bg-black/50 border border-green-400/20 rounded-lg px-4 py-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:border-green-400/40 transition-colors resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-green-500 transition-colors duration-300 flex items-center justify-center gap-2 group"
            >
              Submit Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;