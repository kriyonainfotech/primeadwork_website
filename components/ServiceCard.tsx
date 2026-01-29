import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceCardProps {
  service: ServiceItem;
  variant?: 'compact' | 'detailed';
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, variant = 'compact' }) => {
  return (
    <div className={`bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden ${variant === 'detailed' ? 'p-8' : 'p-6'}`}>
      
      <div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center text-brand-600 mb-6 group-hover:scale-110 transition-transform duration-300">
        {service.icon}
      </div>
      
      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors">
        {service.title}
      </h3>
      
      <p className="text-slate-600 leading-relaxed mb-6">
        {service.description}
      </p>

      {variant === 'detailed' && service.deliverables && (
        <div className="mb-8 bg-slate-50 rounded-lg p-6">
          <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">Deliverables</h4>
          <ul className="space-y-3">
            {service.deliverables.map((item, idx) => (
              <li key={idx} className="flex items-start text-sm text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-brand-500 mr-3 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {variant === 'compact' && (
        <div className="flex items-center text-brand-600 font-semibold text-sm group-hover:translate-x-2 transition-transform">
          <span>Learn more</span>
          <ArrowRight size={16} className="ml-2" />
        </div>
      )}
    </div>
  );
};

export default ServiceCard;