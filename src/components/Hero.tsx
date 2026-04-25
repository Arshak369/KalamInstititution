import { motion } from "motion/react";
import { ArrowRight, PlayCircle, Star } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-blue pt-16 md:pt-24 pb-32">
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="absolute -top-[500px] -right-[500px] w-[1000px] h-[1000px] rounded-full bg-brand-blue-light/50 blur-[100px]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center rounded-full border border-brand-yellow/30 bg-brand-yellow/10 px-3 py-1 text-sm font-medium text-brand-yellow mb-8"
        >
          <Star className="mr-1.5 h-4 w-4 fill-brand-yellow" />
          <span>India’s Smart Physics Platform</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display font-bold text-5xl md:text-7xl tracking-tighter text-white mb-6 max-w-4xl leading-[1.1]"
        >
          Crack NEET & JEE Physics with <span className="text-brand-yellow">Kalam Institute</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-300 max-w-2xl mb-10 font-medium"
        >
          Master concepts. Build speed. Secure your rank. From NCERT fundamentals to advanced rank-oriented strategy with daily guided practice.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <a href="#practice" className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-brand-yellow text-brand-blue px-8 py-4 text-base font-bold hover:bg-brand-yellow-hover transition-colors shadow-lg shadow-brand-yellow/20">
            Start Free Practice
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
          <button className="w-full sm:w-auto inline-flex items-center justify-center rounded-full border border-slate-600 bg-transparent text-white px-8 py-4 text-base font-bold hover:bg-slate-800 transition-colors">
            <PlayCircle className="mr-2 h-5 w-5" />
            Watch Free Demo
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-slate-700/50 w-full max-w-3xl"
        >
          <div className="flex flex-col items-center">
            <span className="font-display font-bold text-3xl text-white">500+</span>
            <span className="text-sm text-slate-400 mt-1">Students Joined</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-display font-bold text-3xl text-white">10k+</span>
            <span className="text-sm text-slate-400 mt-1">Smart MCQs</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-display font-bold text-3xl text-white">99.9</span>
            <span className="text-sm text-slate-400 mt-1">Top Percentile</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-display font-bold text-3xl text-white">24/7</span>
            <span className="text-sm text-slate-400 mt-1">AI Doubt Support</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
