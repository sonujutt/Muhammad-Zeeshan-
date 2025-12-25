
import React, { useState } from 'react';
import { GALLERY } from '../constants';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SmileGallery: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => setActiveIdx((prev) => (prev + 1) % GALLERY.length);
  const prev = () => setActiveIdx((prev) => (prev - 1 + GALLERY.length) % GALLERY.length);

  return (
    <section id="gallery" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-sm font-bold text-dental-600 uppercase tracking-widest mb-4">Patient Transformations</h2>
            <h3 className="text-4xl font-serif font-bold text-slate-900">Real Smiles, Real Results</h3>
          </div>
          <div className="flex gap-2">
            <button 
              onClick={prev}
              className="w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center hover:bg-dental-50 hover:border-dental-200 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-slate-600" />
            </button>
            <button 
              onClick={next}
              className="w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center hover:bg-dental-50 hover:border-dental-200 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-slate-600" />
            </button>
          </div>
        </div>

        <div className="relative aspect-video max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl group">
          <div className="absolute inset-0 flex">
            {/* Before */}
            <div className="relative w-1/2 h-full">
              <img src={GALLERY[activeIdx].before} alt="Before" className="w-full h-full object-cover" />
              <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Before</div>
            </div>
            {/* After */}
            <div className="relative w-1/2 h-full">
              <img src={GALLERY[activeIdx].after} alt="After" className="w-full h-full object-cover" />
              <div className="absolute top-4 right-4 bg-dental-600/80 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">After</div>
            </div>
          </div>
          
          <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 to-transparent text-white">
            <span className="text-dental-300 text-xs font-bold uppercase tracking-widest">{GALLERY[activeIdx].category}</span>
            <h4 className="text-2xl font-bold mt-1">{GALLERY[activeIdx].description}</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmileGallery;
