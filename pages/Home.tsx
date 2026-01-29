import React from 'react';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import CaseStudyCard from '../components/CaseStudyCard';
import TestimonialSection from '../components/TestimonialSection';
import CTASection from '../components/CTASection';
import { Target, PenTool, LayoutTemplate, BarChartBig, CheckCircle } from 'lucide-react';
import { ServiceItem, CaseStudyItem } from '../types';

const Home: React.FC = () => {
  const services: ServiceItem[] = [
    {
      title: "Meta Ads Management",
      description: "Data-driven campaign management that scales. We handle targeting, bidding, and optimization to maximize your ROAS.",
      icon: <Target size={24} />
    },
    {
      title: "Creative Strategy",
      description: "Ads that stop the scroll. We design high-converting visuals and copy based on psychological triggers.",
      icon: <PenTool size={24} />
    },
    {
      title: "Full-Funnel Systems",
      description: "We don't just get clicks; we get customers. We optimize the entire journey from ad impression to checkout.",
      icon: <LayoutTemplate size={24} />
    },
    {
      title: "Audit & Consultancy",
      description: "Deep-dive analysis of your current setup to identify leaks and opportunities for immediate improvement.",
      icon: <BarChartBig size={24} />
    }
  ];

  const featuredCaseStudies: CaseStudyItem[] = [
    {
      id: '1',
      client: 'EcoWear',
      industry: 'E-Commerce',
      title: 'Scaling Sustainable Fashion to $50k/mo',
      problem: 'High CPA and inability to scale beyond $5k/mo spend.',
      strategy: 'Implemented ABO testing structure and UGC-heavy creative strategy.',
      metrics: [
        { label: 'ROAS', value: '4.2x' },
        { label: 'Revenue', value: '+310%' }
      ],
      result: 'Record-breaking Q4 revenue.',
      imageUrl: 'https://picsum.photos/600/400?random=20'
    },
    {
      id: '2',
      client: 'TechAcademy',
      industry: 'EdTech',
      title: 'Reducing Lead Cost by 60%',
      problem: 'Leads were too expensive and low quality.',
      strategy: 'Refined audience targeting and created value-first lead magnets.',
      metrics: [
        { label: 'CPL', value: '-60%' },
        { label: 'Lead Vol', value: '2.5x' }
      ],
      result: 'Filled 3 cohorts in 45 days.',
      imageUrl: 'https://picsum.photos/600/400?random=21'
    }
  ];

  const reasons = [
    "Certified Meta Business Partners",
    "No long-term lock-in contracts",
    "Weekly detailed reporting calls",
    "Direct access to your media buyer",
    "Creative production included",
    "Profit-first approach"
  ];

  return (
    <>
      <Hero />
      
      {/* Services Overview */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-brand-600 uppercase tracking-wide mb-2">Our Expertise</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Everything You Need to Scale</h3>
            <p className="text-slate-600 text-lg">
              We provide an end-to-end solution for brands looking to dominate on Facebook and Instagram.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} variant="compact" />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Why Top Brands Trust <span className="text-brand-600">PrimeAdWork</span>
              </h2>
              <p className="text-slate-600 text-lg mb-8">
                The agency model is broken. We fixed it. No junior account managers, no hidden fees, and no fluff. Just relentless execution and transparency.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {reasons.map((reason, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <CheckCircle className="text-brand-500 w-5 h-5 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{reason}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-slate-900 rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="relative z-10">
                   <h3 className="text-2xl font-bold mb-4">The Prime Standard</h3>
                   <div className="space-y-6">
                     <div className="flex justify-between items-center border-b border-slate-700 pb-4">
                       <span className="text-slate-400">Avg. Client Retention</span>
                       <span className="text-xl font-bold text-brand-400">18 Months</span>
                     </div>
                     <div className="flex justify-between items-center border-b border-slate-700 pb-4">
                       <span className="text-slate-400">Avg. ROAS Increase</span>
                       <span className="text-xl font-bold text-brand-400">145%</span>
                     </div>
                     <div className="flex justify-between items-center">
                       <span className="text-slate-400">Ad Spend Managed</span>
                       <span className="text-xl font-bold text-brand-400">$10M+</span>
                     </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Preview */}
      <section className="py-24 bg-slate-50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex justify-between items-end mb-12">
             <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Recent Wins</h2>
                <p className="text-slate-600 text-lg">See how we solve complex growth problems.</p>
             </div>
             <a href="#/case-studies" className="hidden md:flex items-center text-brand-600 font-bold hover:text-brand-700">
               View All Case Studies <Target className="ml-2 w-5 h-5" />
             </a>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {featuredCaseStudies.map(study => (
               <CaseStudyCard key={study.id} study={study} />
             ))}
           </div>
           
           <div className="mt-8 text-center md:hidden">
              <a href="#/case-studies" className="inline-flex items-center text-brand-600 font-bold hover:text-brand-700">
               View All Case Studies <Target className="ml-2 w-5 h-5" />
             </a>
           </div>
         </div>
      </section>

      <TestimonialSection />
      <CTASection />
    </>
  );
};

export default Home;