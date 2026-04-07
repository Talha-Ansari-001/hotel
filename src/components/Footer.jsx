import React from 'react';
import { Mail, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-12 pb-24 lg:pb-12 border-t-2 border-primary">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
          
          {/* Line 1: The Signature */}
          <div className="text-center lg:text-left">
            <h4 className="font-serif text-2xl md:text-3xl font-bold tracking-tight">
              Designed & Developed by <br className="sm:hidden" />
              <span className="text-primary italic ml-1">Talha Ansari</span>
            </h4>
          </div>

          {/* Links & Copyright Group */}
          <div className="flex flex-col items-center lg:items-end gap-8">
            
            {/* Line 2 & 3: Contact and Agency */}
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
              <a 
                href="mailto:789talhaansari@gmail.com" 
                className="flex items-center gap-3 text-stone-400 hover:text-primary transition-all duration-300 font-sans group"
              >
                <div className="p-2 rounded-full bg-white/5 group-hover:bg-primary/10 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm md:text-base font-medium">789talhaansari@gmail.com</span>
              </a>
              
              <a 
                href="https://web-agency-001.netlify.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 text-stone-400 hover:text-primary transition-all duration-300 font-sans group"
              >
                <div className="p-2 rounded-full bg-white/5 group-hover:bg-primary/10 transition-colors">
                  <Globe className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm md:text-base font-medium">Visit My Agency</span>
              </a>
            </div>

            {/* Line 4: Copyright */}
            <p className="text-stone-500 text-[10px] md:text-xs font-sans uppercase tracking-[0.3em] text-center lg:text-right border-t border-white/5 pt-8 w-full lg:w-auto">
              © 2026 Hotel Nine Premium Dining. All Rights Reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
