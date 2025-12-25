
import React from 'react';
import { Facebook, Instagram, Youtube, MapPin, Clock, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-white pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-dental-600 rounded-lg flex items-center justify-center text-white font-serif font-bold text-xl">
                L
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-serif text-lg font-bold">Lake Worth</span>
                <span className="text-[10px] uppercase tracking-widest font-medium opacity-60">Dental Studio</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Serving the Lake Worth community with excellence in cosmetic and restorative dentistry. Your smile is our signature.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-dental-600 transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-dental-600 transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-dental-600 transition-colors"><Youtube className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-dental-400 transition-colors">Lake Worth Cosmetic Dentist</a></li>
              <li><a href="#" className="hover:text-dental-400 transition-colors">Dental Implants Lake Worth</a></li>
              <li><a href="#" className="hover:text-dental-400 transition-colors">Invisalign Clear Aligners</a></li>
              <li><a href="#" className="hover:text-dental-400 transition-colors">Professional Teeth Whitening</a></li>
              <li><a href="#" className="hover:text-dental-400 transition-colors">Emergency Dental Care</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-dental-400 flex-shrink-0" />
                <span className="text-slate-400 text-sm">123 Coastal Ave, Suite 100<br />Lake Worth, FL 33460</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-dental-400 flex-shrink-0" />
                <a href="tel:5615550123" className="text-slate-400 text-sm hover:text-dental-400">(561) 555-0123</a>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-dental-400 flex-shrink-0" />
                <a href="mailto:hello@lakeworthdental.com" className="text-slate-400 text-sm hover:text-dental-400">hello@lakeworthdental.com</a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-bold text-lg mb-6">Office Hours</h4>
            <ul className="space-y-3">
              <li className="flex justify-between text-sm">
                <span className="text-slate-500">Mon - Thu:</span>
                <span className="text-slate-300">8:00 AM - 5:00 PM</span>
              </li>
              <li className="flex justify-between text-sm">
                <span className="text-slate-500">Friday:</span>
                <span className="text-slate-300">8:00 AM - 1:00 PM</span>
              </li>
              <li className="flex justify-between text-sm">
                <span className="text-slate-500">Sat - Sun:</span>
                <span className="text-dental-400">Emergency Only</span>
              </li>
            </ul>
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-2">Patient Portal</p>
              <button className="text-xs text-white hover:text-dental-400 font-bold underline underline-offset-4">Log in to your account</button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[11px] text-slate-500">
            © 2024 Lake Worth Dental Studio. All rights reserved. | <a href="#" className="hover:text-white">Privacy Policy</a> | <a href="#" className="hover:text-white">Accessibility</a>
          </p>
          <div className="flex gap-4">
             <img src="https://img.icons8.com/color/48/visa.png" alt="Visa" className="h-6 grayscale opacity-30" />
             <img src="https://img.icons8.com/color/48/mastercard.png" alt="Mastercard" className="h-6 grayscale opacity-30" />
             <img src="https://img.icons8.com/color/48/american-express.png" alt="Amex" className="h-6 grayscale opacity-30" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
