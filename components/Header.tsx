
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, UserCircle } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Smile Gallery', href: '#gallery' },
    { name: 'Financing', href: '#financing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-dental-600 rounded-lg flex items-center justify-center text-white font-serif font-bold text-xl">
            L
          </div>
          <div className={`flex flex-col leading-none ${isScrolled ? 'text-dental-900' : 'text-white'}`}>
            <span className="font-serif text-lg font-bold">Lake Worth</span>
            <span className="text-[10px] uppercase tracking-widest font-medium">Dental Studio</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-dental-500 ${
                isScrolled ? 'text-slate-600' : 'text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a 
            href="tel:5615550123" 
            className={`flex items-center gap-2 text-sm font-bold ${isScrolled ? 'text-dental-600' : 'text-white'}`}
          >
            <Phone className="w-4 h-4" />
            (561) 555-0123
          </a>
          <button className="bg-white text-dental-600 hover:bg-slate-100 px-4 py-2 rounded-full text-xs font-bold transition-all shadow-sm flex items-center gap-1">
            <UserCircle className="w-4 h-4" />
            Patient Portal
          </button>
          <button className="bg-dental-600 hover:bg-dental-700 text-white px-6 py-2 rounded-full text-xs font-bold transition-all shadow-lg">
            Request Appointment
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-dental-900 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu className={isScrolled ? 'text-dental-900' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t p-4 flex flex-col gap-4 animate-in slide-in-from-top">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-slate-700 py-2 border-b last:border-0"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="flex flex-col gap-3 pt-2">
            <a href="tel:5615550123" className="text-dental-600 font-bold flex items-center gap-2">
              <Phone className="w-4 h-4" /> (561) 555-0123
            </a>
            <button className="w-full bg-dental-600 text-white py-3 rounded-lg font-bold">
              Request Appointment
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
