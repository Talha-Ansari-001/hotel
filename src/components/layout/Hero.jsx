import React, { memo } from 'react';
import { Search, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { Input } from '../ui/Input';

const Hero = memo(({ searchQuery, setSearchQuery }) => {
  return (
    <section className="relative overflow-hidden pt-20 pb-16 px-4 md:px-8">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[80px] -z-10" />

      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-primary/10 text-primary-dark px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-[0.25em] border border-primary/20 shadow-sm shadow-primary/5"
          >
            <Sparkles className="w-4 h-4" />
            Exquisite Flavors, Exceptional Service
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-4"
          >
            <h2 className="font-serif text-5xl md:text-8xl font-bold text-secondary leading-[1.1] tracking-tight">
              Savor the Finest <br /> 
              <span className="italic text-primary font-medium tracking-normal">Culinary Delights</span>
            </h2>
            <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl font-medium leading-relaxed">
              Experience the art of fine dining from the comfort of your room. <br className="hidden md:block" />
              Handcrafted dishes prepared by world-class chefs.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative max-w-2xl mx-auto"
          >
            <Input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="What are you craving today? (e.g., Tiramisu...)"
              icon={Search}
              className="py-6 px-14 text-lg shadow-2xl shadow-secondary/5 border-none bg-white ring-1 ring-gray-100/50"
              aria-label="Search food items"
            />
            
            <div className="absolute top-1/2 right-4 -translate-y-1/2 flex items-center gap-2 pointer-events-none opacity-40">
              <span className="hidden md:flex items-center gap-1 border border-gray-200 rounded-lg px-2 py-1 text-[10px] font-bold">
                <span className="text-gray-400">⌘</span> K
              </span>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center items-center gap-8 md:gap-16 pt-4 text-gray-400"
          >
            <div className="flex flex-col items-center gap-1">
              <span className="text-secondary font-black text-2xl tracking-tighter">4.9/5</span>
              <span className="text-[10px] uppercase tracking-widest font-bold">Chef's Choice</span>
            </div>
            <div className="w-[1px] h-8 bg-gray-200" />
            <div className="flex flex-col items-center gap-1">
              <span className="text-secondary font-black text-2xl tracking-tighter">100%</span>
              <span className="text-[10px] uppercase tracking-widest font-bold">Fresh Organic</span>
            </div>
            <div className="w-[1px] h-8 bg-gray-200" />
            <div className="flex flex-col items-center gap-1">
              <span className="text-secondary font-black text-2xl tracking-tighter">24/7</span>
              <span className="text-[10px] uppercase tracking-widest font-bold">In-room Service</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;
