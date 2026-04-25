import { motion } from "motion/react";
import { Atom } from "lucide-react";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 cursor-pointer"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-brand-blue text-brand-yellow">
              <Atom size={24} />
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-brand-blue">
              Kalam Institute
            </span>
          </motion.div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#practice" className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors">Practice</a>
            <a href="#courses" className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors">Courses</a>
            <a href="#results" className="text-sm font-medium text-slate-600 hover:text-brand-blue transition-colors">Results</a>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            <button className="hidden md:inline-flex items-center justify-center rounded-full text-sm font-semibold bg-brand-blue text-white px-5 py-2.5 hover:bg-brand-blue-light transition-colors">
              Join Free Demo
            </button>
          </motion.div>
        </div>
      </div>
    </nav>
  );
}
