import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-600 rounded-3xl overflow-hidden shadow-2xl relative">
          {/* Decorative circles */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
             <div className="absolute top-[-50%] right-[-10%] w-[500px] h-[500px] rounded-full bg-white/10 blur-3xl"></div>
             <div className="absolute bottom-[-50%] left-[-10%] w-[500px] h-[500px] rounded-full bg-slate-900/10 blur-3xl"></div>
          </div>

          <div className="relative z-10 px-8 py-16 md:py-20 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to Stop Guessing and Start Scaling?
            </h2>
            <p className="text-brand-100 text-lg md:text-xl max-w-2xl mx-auto mb-10">
              Get a free comprehensive audit of your current ad account. We'll show you exactly where you're losing money and how to fix it.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/contact" 
                className="inline-flex justify-center items-center px-8 py-4 bg-white text-brand-600 rounded-lg font-bold hover:bg-slate-50 transition-all shadow-lg"
              >
                Book Your Free Audit
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <a 
                href="https://wa.me/1234567890" // Placeholder number
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-bold hover:bg-white/10 transition-all"
              >
                Chat on WhatsApp
              </a>
            </div>
            <p className="mt-6 text-brand-200 text-sm font-medium">
              Limited spots available for Q4. No obligation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;