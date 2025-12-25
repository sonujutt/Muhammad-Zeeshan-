
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-dental-600 uppercase tracking-widest mb-4">Our Expertise</h2>
          <h3 className="text-4xl font-serif font-bold text-slate-900 mb-6">Comprehensive Lake Worth Dental Services</h3>
          <p className="text-slate-600">
            From routine checkups to full mouth reconstructions, we provide advanced dental solutions tailored to your unique needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="group p-8 bg-slate-50 rounded-2xl border border-transparent hover:border-dental-100 hover:bg-white hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 bg-white shadow-sm rounded-xl flex items-center justify-center text-dental-600 mb-6 group-hover:bg-dental-600 group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
              <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
              <button className="text-dental-600 font-bold text-sm flex items-center gap-2 group/btn">
                Learn More
                <div className="w-0 group-hover/btn:w-4 h-[2px] bg-dental-600 transition-all duration-300"></div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
