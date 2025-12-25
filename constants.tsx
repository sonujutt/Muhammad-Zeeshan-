
import React from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  HeartPulse, 
  CalendarCheck,
  Zap,
  Smile
} from 'lucide-react';
import { Service, Testimonial, GalleryItem, FAQ } from './types';

export const SERVICES: Service[] = [
  {
    id: 'cosmetic',
    title: 'Cosmetic Dentistry',
    description: 'Transform your smile with veneers, whitening, and bonding.',
    icon: <Sparkles className="w-6 h-6" />,
    longDescription: 'Our cosmetic dentistry services are designed to give you the confidence you deserve. Using the latest Lake Worth cosmetic dentistry techniques, we create natural-looking results.'
  },
  {
    id: 'implants',
    title: 'Dental Implants',
    description: 'The gold standard for missing teeth replacement in Lake Worth.',
    icon: <ShieldCheck className="w-6 h-6" />,
    longDescription: 'Regain full function and aesthetics. Our Lake Worth dental implants are biocompatible and designed to last a lifetime with proper care.'
  },
  {
    id: 'preventative',
    title: 'Preventative Care',
    description: 'Comprehensive cleanings and checkups for the whole family.',
    icon: <HeartPulse className="w-6 h-6" />,
    longDescription: 'Prevention is key. We offer gentle cleanings, digital X-rays, and thorough exams to keep your oral health in peak condition.'
  },
  {
    id: 'restorative',
    title: 'Restorative Care',
    description: 'Crowns, bridges, and fillings to restore your natural bite.',
    icon: <CalendarCheck className="w-6 h-6" />,
    longDescription: 'We use high-quality porcelain and composite materials to restore damaged teeth to their original strength and beauty.'
  },
  {
    id: 'emergency',
    title: 'Emergency Dentistry',
    description: 'Same-day appointments for dental emergencies.',
    icon: <Zap className="w-6 h-6" />,
    longDescription: 'Toothache? Broken tooth? We offer priority scheduling for dental emergencies in the Lake Worth area.'
  },
  {
    id: 'invisalign',
    title: 'Invisalign®',
    description: 'Straighten your teeth discreetly without metal braces.',
    icon: <Smile className="w-6 h-6" />,
    longDescription: 'Clear aligners offer a comfortable and nearly invisible way to achieve the straight smile you’ve always wanted.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    rating: 5,
    text: "The best dental experience I've ever had. Dr. Miller and the team at Lake Worth Dental Studio are truly cosmetic dentistry experts.",
    date: '2 months ago'
  },
  {
    id: '2',
    name: 'Michael Rivera',
    rating: 5,
    text: "Got my dental implants here. The process was smooth, painless, and the result looks perfectly natural. Highly recommend!",
    date: '1 month ago'
  },
  {
    id: '3',
    name: 'Emily Davis',
    rating: 5,
    text: "Friendly staff and beautiful office. They made my Invisalign journey so easy. Five stars for this Lake Worth dentist!",
    date: '3 weeks ago'
  }
];

export const GALLERY: GalleryItem[] = [
  {
    id: 'g1',
    category: 'Cosmetic',
    before: 'https://picsum.photos/seed/dental1/600/400',
    after: 'https://picsum.photos/seed/dental2/600/400',
    description: 'Full Smile Makeover with Porcelain Veneers'
  },
  {
    id: 'g2',
    category: 'Implants',
    before: 'https://picsum.photos/seed/dental3/600/400',
    after: 'https://picsum.photos/seed/dental4/600/400',
    description: 'Single Tooth Implant Restoration'
  },
  {
    id: 'g3',
    category: 'Invisalign',
    before: 'https://picsum.photos/seed/dental5/600/400',
    after: 'https://picsum.photos/seed/dental6/600/400',
    description: 'Complex Orthodontic Realignment'
  }
];

export const FAQS: FAQ[] = [
  {
    question: "Do you offer financing for dental implants?",
    answer: "Yes! We partner with CareCredit and LendingClub to offer flexible, low-interest monthly payment plans for dental implants and cosmetic procedures."
  },
  {
    question: "Are you accepting new patients in Lake Worth?",
    answer: "Absolutely! We welcome new patients of all ages. You can book your first appointment online or call us directly."
  },
  {
    question: "How long does the teeth whitening process take?",
    answer: "Our in-office professional whitening takes about 60-90 minutes and can brighten your teeth by several shades in one visit."
  }
];
