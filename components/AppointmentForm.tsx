
import React, { useState } from 'react';
import { Calendar, User, Phone, Mail, MessageSquare } from 'lucide-react';

const AppointmentForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white p-12 rounded-3xl shadow-xl text-center">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <Calendar className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-bold mb-4">Request Received!</h3>
        <p className="text-slate-600 mb-8">
          Thank you for choosing Lake Worth Dental Studio. A member of our team will contact you shortly to confirm your visit.
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="text-dental-600 font-bold hover:underline"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Schedule Your Visit</h3>
        <p className="text-slate-600">Start your journey to a better smile today.</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input 
              required
              type="text" 
              placeholder="Full Name" 
              className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-dental-500 outline-none transition-all"
            />
          </div>
          <div className="relative">
            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input 
              required
              type="tel" 
              placeholder="Phone Number" 
              className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-dental-500 outline-none transition-all"
            />
          </div>
        </div>

        <div className="relative">
          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input 
            required
            type="email" 
            placeholder="Email Address" 
            className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-dental-500 outline-none transition-all"
          />
        </div>

        <div className="relative">
          <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-slate-400" />
          <textarea 
            rows={4} 
            placeholder="Tell us about your dental goals..." 
            className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-dental-500 outline-none transition-all"
          ></textarea>
        </div>

        <button 
          type="submit" 
          className="w-full bg-dental-600 hover:bg-dental-700 text-white py-4 rounded-xl font-bold shadow-lg transition-all active:scale-95"
        >
          Request Your Appointment
        </button>
        
        <p className="text-[11px] text-center text-slate-400">
          By submitting this form, you agree to be contacted by Lake Worth Dental Studio.
        </p>
      </form>
    </div>
  );
};

export default AppointmentForm;
