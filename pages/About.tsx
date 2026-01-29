import React from 'react';
import CTASection from '../components/CTASection';
import { ShieldCheck, Zap, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* About Hero */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
               <h4 className="text-brand-600 font-bold uppercase tracking-wide mb-2">Our Story</h4>
               <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                 We Built the Agency We Wished We Hired.
               </h1>
               <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                 PrimeAdWork was founded in Surat with a simple mission: to bridge the gap between creative storytelling and hard data. 
               </p>
               <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                 We saw too many agencies focusing on "vanity metrics" like likes and impressions, while clients were struggling to make a profit. We decided to change that. We obsess over one metric: your Profit.
               </p>
               <p className="text-lg text-slate-600 leading-relaxed">
                 Today, we are a team of strategic media buyers, creative directors, and data analysts managing millions in ad spend for brands across the globe.
               </p>
            </div>
            <div className="lg:w-1/2">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img src="https://picsum.photos/800/800?random=40" alt="Team working" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Core Values</h2>
            <p className="text-slate-600">The principles that guide every campaign we launch.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Radical Transparency</h3>
              <p className="text-slate-600">You own your data. You see exactly where every rupee goes. No hidden fees, no smoke and mirrors.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mb-6">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Speed of Implementation</h3>
              <p className="text-slate-600">Money loves speed. We test fast, fail fast, and scale fast. We don't wait for permission to optimize.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center mb-6">
                <Heart size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Client Obsession</h3>
              <p className="text-slate-600">We treat your budget like our own. If we aren't profitable for you, we don't deserve your business.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team (Optional/Abstract) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <h2 className="text-3xl font-bold text-slate-900 mb-12">Meet the Leadership</h2>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
             {[1, 2, 3].map((i) => (
               <div key={i} className="group">
                 <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[4/5]">
                   <img src={`https://picsum.photos/400/500?random=${i+50}`} alt="Team Member" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                 </div>
                 <h3 className="text-lg font-bold text-slate-900">John Doe {i}</h3>
                 <p className="text-brand-600 font-medium">Co-Founder</p>
               </div>
             ))}
           </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default About;