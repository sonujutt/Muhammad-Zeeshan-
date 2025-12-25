
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  longDescription: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
}

export interface GalleryItem {
  id: string;
  category: 'Cosmetic' | 'Implants' | 'Invisalign';
  before: string;
  after: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}