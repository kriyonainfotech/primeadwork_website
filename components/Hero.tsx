import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Target, Users } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-20 pb-32 lg:pt-32 lg:pb-48">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-20 right-0 w-[600px] h-[600px] bg-brand-100/50 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute top-40 -left-20 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl opacity-60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-xs font-semibold uppercase tracking-wider mb-8">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
              </span>
              Accepting New Clients for Q4
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-tight tracking-tight mb-8">
              Performance That Actually <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400">Performs.</span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              We don't just "run ads." We build predictable, scalable revenue systems for ambitious brands using scientific Meta Ads strategies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link 
                to="/contact" 
                className="inline-flex justify-center items-center px-8 py-4 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Scale Your Brand
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link 
                to="/case-studies" 
                className="inline-flex justify-center items-center px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-lg font-semibold hover:bg-slate-50 transition-all"
              >
                View Case Studies
              </Link>
            </div>

            <div className="mt-12 flex items-center justify-center lg:justify-start space-x-8 text-sm font-medium text-slate-500">
              <div className="flex items-center">
                <TrendingUp className="mr-2 text-brand-600" size={18} />
                <span>$10M+ Ad Spend Managed</span>
              </div>
              <div className="flex items-center">
                <Target className="mr-2 text-brand-600" size={18} />
                <span>4.5x Avg ROAS</span>
              </div>
            </div>
          </div>

          {/* Visual Content */}
          <div className="lg:w-1/2 w-full relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="https://picsum.photos/800/600?random=1" 
                alt="Dashboard Analytics" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/80 to-transparent p-8">
                 <div className="flex items-center space-x-4">
                    <div className="bg-white/20 backdrop-blur-md p-4 rounded-lg flex-1 border border-white/10">
                       <p className="text-brand-200 text-xs font-medium uppercase mb-1">Conversion Rate</p>
                       <p className="text-white text-2xl font-bold">+156%</p>
                    </div>
                    <div className="bg-white/20 backdrop-blur-md p-4 rounded-lg flex-1 border border-white/10">
                       <p className="text-brand-200 text-xs font-medium uppercase mb-1">Cost Per Acq.</p>
                       <p className="text-white text-2xl font-bold">-42%</p>
                    </div>
                 </div>
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center space-x-3 animate-bounce-slow">
              <div className="bg-green-100 p-2 rounded-full text-green-600">
                <Users size={20} />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-semibold">Active Clients</p>
                <p className="text-slate-900 font-bold">50+ Brands Scaled</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;