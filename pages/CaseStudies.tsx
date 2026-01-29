import React from 'react';
import CaseStudyCard from '../components/CaseStudyCard';
import CTASection from '../components/CTASection';
import { CaseStudyItem } from '../types';

const CaseStudies: React.FC = () => {
  const studies: CaseStudyItem[] = [
    {
      id: '1',
      client: 'EcoWear',
      industry: 'E-Commerce Fashion',
      title: 'From Stagnant to Scaling: +310% Revenue in Q4',
      problem: 'EcoWear was stuck at $50k/mo revenue with a rising CPA. They had exhausted their lookalike audiences and creative fatigue was setting in.',
      strategy: 'We shifted from narrow targeting to broad targeting, allowing the algorithm to find buyers. Simultaneously, we launched a UGC campaign focused on the "sustainability" angle versus the "style" angle.',
      metrics: [
        { label: 'ROAS', value: '4.2x' },
        { label: 'Revenue Growth', value: '+310%' }
      ],
      result: 'Scaled to $200k/mo profitably within 90 days.',
      imageUrl: 'https://picsum.photos/600/400?random=30'
    },
    {
      id: '2',
      client: 'TechAcademy',
      industry: 'EdTech / Info Product',
      title: 'Filling Cohorts with High-Intent Leads',
      problem: 'Lead quality was poor. Sales team was wasting time calling leads who had no budget or intent.',
      strategy: 'We introduced a "Reverse Squeeze Page" funnel, giving value before asking for details. We also implemented a long-form lead form to qualify users by budget.',
      metrics: [
        { label: 'Cost Per Call', value: '-45%' },
        { label: 'Conversion Rate', value: '+22%' }
      ],
      result: 'Sales team close rate doubled.',
      imageUrl: 'https://picsum.photos/600/400?random=31'
    },
    {
      id: '3',
      client: 'GlowSkin',
      industry: 'Beauty & Cosmetics',
      title: 'Cracking the Code on TikTok Style Ads for Reels',
      problem: 'Static images were no longer performing. CPA had doubled year-over-year.',
      strategy: 'We produced 20+ raw, authentic video creatives per month featuring real customers. We tested hooks aggressively in the first 3 seconds.',
      metrics: [
        { label: 'CTR', value: '3.1%' },
        { label: 'CPA', value: '$12.50' }
      ],
      result: 'Reduced CPA by 60% while doubling spend.',
      imageUrl: 'https://picsum.photos/600/400?random=32'
    },
    {
      id: '4',
      client: 'FitLife App',
      industry: 'SaaS / App',
      title: 'Scaling App Installs for Fitness Brand',
      problem: 'High cost per install and low retention rate for new users.',
      strategy: 'Focused on "Outcome-based" creative showing the transformation. Implemented deep-linking for seamless onboarding.',
      metrics: [
        { label: 'CPI', value: '$1.80' },
        { label: 'Retention', value: '+15%' }
      ],
      result: '10,000+ new users acquired in 3 months.',
      imageUrl: 'https://picsum.photos/600/400?random=33'
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="bg-slate-900 text-white py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Case Studies</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Real results for real brands. We let the numbers do the talking.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {studies.map((study) => (
              <CaseStudyCard key={study.id} study={study} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default CaseStudies;