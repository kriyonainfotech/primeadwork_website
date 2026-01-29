import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Twitter, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-semibold tracking-tight">
                <span className="text-white">prime</span>
                <span className="text-brand-500">adwork</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Performance That Actually Performs. We help ambitious brands scale with scientific Meta Ads strategies and high-converting creatives.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-brand-500 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-brand-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-brand-500 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">Explore</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/services" className="hover:text-brand-500 transition-colors">Services</Link></li>
              <li><Link to="/case-studies" className="hover:text-brand-500 transition-colors">Case Studies</Link></li>
              <li><Link to="/about" className="hover:text-brand-500 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-brand-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6">Expertise</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/services" className="hover:text-brand-500 transition-colors">Meta Ads Management</Link></li>
              <li><Link to="/services" className="hover:text-brand-500 transition-colors">Creative Strategy</Link></li>
              <li><Link to="/services" className="hover:text-brand-500 transition-colors">Full-Funnel Systems</Link></li>
              <li><Link to="/services" className="hover:text-brand-500 transition-colors">Audit & Consultancy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-2">
                <span className="text-brand-500 font-medium">Headquarters:</span>
                <span>Surat, Gujarat, India</span>
              </li>
              <li>
                 <a href="mailto:hello@primeadwork.com" className="hover:text-brand-500 transition-colors">
                   hello@primeadwork.com
                 </a>
              </li>
              <li className="pt-4">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center space-x-2 text-brand-500 font-medium hover:text-brand-400"
                >
                  <span>Get a Free Audit</span>
                  <ArrowRight size={16} />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} PrimeAdWork. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;