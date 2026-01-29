import React from 'react';
import { Quote } from 'lucide-react';
import { TestimonialItem } from '../types';

const testimonials: TestimonialItem[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'CMO',
    company: 'Velvet Apparel',
    quote: "PrimeAdWork didn't just manage our ads; they overhauled our entire acquisition funnel. Our ROAS went from 2.1x to 5.4x in just 90 days. Their creative strategy is unmatched.",
    avatarUrl: 'https://picsum.photos/100/100?random=10'
  },
  {
    id: '2',
    name: 'Rajesh Patel',
    role: 'Founder',
    company: 'TechGear India',
    quote: "Working with PrimeAdWork has been a game-changer. They understand the nuances of the Indian market while applying global best practices. Highly professional team.",
    avatarUrl: 'https://picsum.photos/100/100?random=11'
  },
  {
    id: '3',
    name: 'Elena Rodriguez',
    role: 'Marketing Director',
    company: 'Luxe Skin',
    quote: "The audit they performed was eye-opening. We were wasting 40% of our budget on wrong targeting. PrimeAdWork fixed it in week one. Truly performance that performs.",
    avatarUrl: 'https://picsum.photos/100/100?random=12'
  }
];

const TestimonialSection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Trusted by Growth-Minded Brands</h2>
          <p className="text-slate-400 text-lg">
            Don't just take our word for it. Here is what our partners have to say about our impact on their bottom line.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-brand-500/50 transition-colors">
              <div className="mb-6 text-brand-500">
                <Quote size={40} className="opacity-50" />
              </div>
              <p className="text-slate-300 mb-8 italic leading-relaxed">"{t.quote}"</p>
              <div className="flex items-center">
                <img 
                  src={t.avatarUrl} 
                  alt={t.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-slate-600 mr-4"
                />
                <div>
                  <h4 className="font-bold text-white">{t.name}</h4>
                  <p className="text-sm text-slate-500">{t.role}, {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;