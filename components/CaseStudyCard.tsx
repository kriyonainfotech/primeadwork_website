import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CaseStudyItem } from '../types';

interface CaseStudyCardProps {
  study: CaseStudyItem;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ study }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={study.imageUrl} 
          alt={study.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors"></div>
        <div className="absolute top-4 left-4">
          <span className="bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-900 uppercase tracking-wide">
            {study.industry}
          </span>
        </div>
      </div>

      <div className="p-8">
        <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-brand-600 transition-colors">
          {study.title}
        </h3>
        <p className="text-slate-500 text-sm mb-6">{study.problem}</p>

        <div className="grid grid-cols-2 gap-4 mb-6">
          {study.metrics.map((metric, idx) => (
            <div key={idx} className="bg-slate-50 p-3 rounded-lg border border-slate-100">
              <p className="text-slate-500 text-xs uppercase font-semibold mb-1">{metric.label}</p>
              <p className="text-slate-900 text-lg font-bold">{metric.value}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between border-t border-slate-100 pt-6">
          <p className="text-sm font-medium text-brand-600 italic">"{study.result}"</p>
          <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-brand-600 group-hover:text-white transition-all">
            <ArrowUpRight size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;