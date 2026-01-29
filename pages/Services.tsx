import React from 'react';
import ServiceCard from '../components/ServiceCard';
import CTASection from '../components/CTASection';
import { Target, PenTool, LayoutTemplate, BarChartBig } from 'lucide-react';
import { ServiceItem } from '../types';

const Services: React.FC = () => {
  const services: ServiceItem[] = [
    {
      title: "Meta Ads Management",
      description: "Our core offering. We handle everything from audience research to bid management. We use a proprietary testing framework to identify winning creatives and scale them aggressively while maintaining profitability.",
      icon: <Target size={32} />,
      deliverables: [
        "Audience research & segmentation",
        "Campaign structure setup (CBO/ABO)",
        "Daily bid & budget optimization",
        "Retargeting funnel implementation",
        "Weekly performance reporting"
      ]
    },
    {
      title: "Creative Strategy & Production",
      description: "Creative is the new targeting. We don't just ask you for images; we brief, design, and iterate on high-performance UGC, static, and video ads that resonate with your specific audience avatars.",
      icon: <PenTool size={32} />,
      deliverables: [
        "Competitor creative analysis",
        "Direct response copywriting",
        "UGC creator sourcing & briefing",
        "Video editing & motion graphics",
        "A/B testing variations"
      ]
    },
    {
      title: "Full-Funnel Systems",
      description: "Clicks mean nothing if they don't convert. We analyze your post-click experience, ensuring your landing pages, offers, and email flows are optimized to capture and convert the traffic we send.",
      icon: <LayoutTemplate size={32} />,
      deliverables: [
        "Landing page conversion audit",
        "Offer strategy consultation",
        "Cart abandonment recovery",
        "Post-purchase flow optimization",
        "Average Order Value (AOV) strategy"
      ]
    },
    {
      title: "Audit & Consultancy",
      description: "Not ready for full management? We offer deep-dive audits for internal teams. We'll tear down your ad account, identify wasted spend, and give you a roadmap to fix it.",
      icon: <BarChartBig size={32} />,
      deliverables: [
        "Comprehensive account health check",
        "Tracking & Pixel verification",
        "Audience overlap analysis",
        "Creative performance review",
        "Actionable 90-day roadmap"
      ]
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Services Hero */}
      <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-brand-900 opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Scientific advertising mixed with compelling creative. A holistic approach to scaling your brand on Meta.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} variant="detailed" />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">How We Work</h2>
            <p className="text-slate-600">Our 4-step framework for consistent results.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Onboarding", desc: "We deep dive into your brand, unit economics, and past data." },
              { step: "02", title: "Testing", desc: "Rapid testing of audiences and creative hooks to find winners." },
              { step: "03", title: "Scaling", desc: "Doubling down on what works while maintaining ROAS targets." },
              { step: "04", title: "Optimizing", desc: "Refining the funnel and introducing new angles to fight fatigue." }
            ].map((item, idx) => (
              <div key={idx} className="relative p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-brand-200 transition-colors">
                <div className="text-5xl font-bold text-slate-200 mb-4">{item.step}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default Services;