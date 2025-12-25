
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import SmileGallery from './components/SmileGallery';
import AppointmentForm from './components/AppointmentForm';
import Footer from './components/Footer';
import AIConsultant from './components/AIConsultant';
import { FAQS, TESTIMONIALS } from './constants';
// Added ArrowRight to the imports from lucide-react
import { Star, Quote, Heart, ArrowRight } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
      <Header />
      
      <main>
        <Hero />
        
        {/* Intro/About Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <img 
                  src="https://picsum.photos/seed/doctor/800/1000" 
                  alt="Dr. Miller" 
                  className="rounded-3xl shadow-2xl relative z-10"
                />
                <div className="absolute -bottom-6 -right-6 w-64 bg-white p-6 rounded-2xl shadow-xl z-20">
                  <div className="flex items-center gap-2 text-amber-500 mb-2">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-xs text-slate-600 font-medium italic">"Best cosmetic dentist in Lake Worth. My confidence is through the roof!"</p>
                  <p className="text-[10px] uppercase tracking-widest mt-2 font-bold">— Maria S.</p>
                </div>
                <div className="absolute -top-12 -left-12 w-48 h-48 bg-dental-50 rounded-full z-0 opacity-50"></div>
              </div>

              <div>
                <h2 className="text-sm font-bold text-dental-600 uppercase tracking-widest mb-4">Welcome to Our Practice</h2>
                <h3 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
                  Where Science Meets the <span className="text-dental-600">Art of Dentistry</span>
                </h3>
                <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                  At Lake Worth Dental Studio, we believe every patient deserves a smile that looks natural and feels functional. Under the leadership of Dr. Jonathan Miller, our team utilizes 3D imaging, laser dentistry, and premium materials to deliver world-class care in a boutique environment.
                </p>
                <ul className="space-y-4 mb-8">
                  {['Expert Cosmetic & Implant Specialists', 'Latest 3D Dental Technology', 'Comfort-First Patient Experience', 'Affordable Financing Options'].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-dental-100 flex items-center justify-center text-dental-600">
                        <Heart className="w-3 h-3 fill-current" />
                      </div>
                      <span className="font-medium text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <button className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-colors">
                  Meet Our Team
                </button>
              </div>
            </div>
          </div>
        </section>

        <Services />
        
        {/* Financing Section */}
        <section id="financing" className="py-24 bg-dental-900 text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-dental-400 font-bold uppercase tracking-widest text-sm mb-4">Patient Financing</h2>
                <h3 className="text-4xl font-serif font-bold mb-6">Invest in Your Most Valuable Asset: Your Smile</h3>
                <p className="text-dental-100/80 mb-8 text-lg">
                  We believe cost should never stand between you and a healthy smile. That's why we offer diverse financing plans to fit your budget. Get the treatment you need now and pay over time.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                  <div className="bg-white/10 p-6 rounded-2xl border border-white/10 hover:bg-white/15 transition-colors">
                    <h4 className="font-bold mb-2">0% Interest Plans</h4>
                    <p className="text-sm text-dental-200">Pay over 6-24 months with no interest if paid in full.</p>
                  </div>
                  <div className="bg-white/10 p-6 rounded-2xl border border-white/10 hover:bg-white/15 transition-colors">
                    <h4 className="font-bold mb-2">Low Monthly Payments</h4>
                    <p className="text-sm text-dental-200">Extended terms up to 60 months for major procedures.</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-6 items-center">
                  <button className="bg-dental-500 hover:bg-dental-400 text-white px-8 py-4 rounded-full font-bold transition-all shadow-xl">
                    Check Eligibility
                  </button>
                  <div className="flex gap-4">
                    <img src="https://www.carecredit.com/sites/carecredit/images/carecredit_logo.svg" alt="CareCredit" className="h-8 brightness-0 invert opacity-60" />
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <img src="https://picsum.photos/seed/finance/800/600" alt="Consultation" className="rounded-3xl shadow-2xl relative z-10" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border-2 border-dental-500/30 rounded-3xl -rotate-3 z-0"></div>
              </div>
            </div>
          </div>
        </section>

        <SmileGallery />

        {/* Testimonials */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
               <h2 className="text-sm font-bold text-dental-600 uppercase tracking-widest mb-4">Patient Stories</h2>
               <h3 className="text-4xl font-serif font-bold text-slate-900">Why Lake Worth Trusts Us</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {TESTIMONIALS.map((t) => (
                <div key={t.id} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col h-full relative">
                  <Quote className="absolute top-6 right-6 w-8 h-8 text-dental-100" />
                  <div className="flex text-amber-500 mb-6">
                    {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-slate-600 mb-8 italic flex-1 leading-relaxed">"{t.text}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-dental-600 rounded-full text-white flex items-center justify-center font-bold">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-900 text-sm">{t.name}</h5>
                      <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">{t.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Appointment & FAQ */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <AppointmentForm />
              
              <div className="flex flex-col justify-center">
                <h3 className="text-3xl font-serif font-bold mb-8">Frequently Asked Questions</h3>
                <div className="space-y-6">
                  {FAQS.map((faq, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                      <h4 className="font-bold text-slate-900 mb-3">{faq.question}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-12 p-8 bg-dental-50 rounded-3xl border border-dental-100">
                  <h4 className="font-bold text-dental-900 mb-2">Emergency?</h4>
                  <p className="text-sm text-dental-700 mb-4">We reserve daily spots for dental emergencies. Call us now for immediate triage.</p>
                  <a href="tel:5615550123" className="inline-flex items-center gap-2 font-bold text-dental-600 hover:text-dental-700">
                    (561) 555-0123 <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI Assistant Floating Button/Window */}
        <AIConsultant />
      </main>

      <Footer />
    </div>
  );
};

export default App;