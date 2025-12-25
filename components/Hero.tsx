
import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden bg-slate-900">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/dental-hero/1920/1080" 
          alt="Professional Dental Office" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-900/40 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-2xl text-white">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-dental-500/20 backdrop-blur-sm border border-dental-500/30 rounded-full text-dental-300 text-xs font-bold uppercase tracking-widest mb-6">
            <CheckCircle2 className="w-4 h-4 text-dental-400" />
            Top-Rated Lake Worth Dentist
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
            Elevating Your <br />
            <span className="text-dental-300 italic">Smile Experience</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-xl leading-relaxed">
            Welcome to Lake Worth Dental Studio, where advanced technology meets compassionate, patient-centered cosmetic and implant dentistry.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button className="w-full sm:w-auto bg-dental-500 hover:bg-dental-400 text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all group">
              New Patient Special
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-bold transition-all">
              View Our Work
            </button>
          </div>

          <div className="mt-12 flex items-center gap-8 grayscale opacity-70">
            <div className="flex flex-col">
              <span className="text-2xl font-serif font-bold">500+</span>
              <span className="text-[10px] uppercase tracking-widest text-slate-400">Smile Makeovers</span>
            </div>
            <div className="w-[1px] h-8 bg-white/20"></div>
            <div className="flex flex-col">
              <span className="text-2xl font-serif font-bold">4.9/5</span>
              <span className="text-[10px] uppercase tracking-widest text-slate-400">Google Reviews</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
