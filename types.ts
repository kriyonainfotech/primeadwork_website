import React from 'react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  deliverables?: string[];
}

export interface CaseStudyItem {
  id: string;
  client: string;
  industry: string;
  title: string;
  problem: string;
  strategy: string;
  metrics: {
    label: string;
    value: string;
  }[];
  result: string;
  imageUrl: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatarUrl: string;
}