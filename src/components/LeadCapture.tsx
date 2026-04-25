import { motion } from "motion/react";
import { Download, FileText, Smartphone } from "lucide-react";

export function LeadCapture() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-brand-blue rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden shadow-2xl"
        >
          {/* Decorative Pattern */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-yellow/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-yellow/20 text-brand-yellow text-sm font-bold mb-6">
                <FileText size={16} /> Free Resources
              </div>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4 line-clamp-2 md:line-clamp-none pb-2">
                Download the <span className="text-brand-yellow">Ultimate Physics Cheat Sheet</span>
              </h2>
              <p className="text-slate-300 mb-8">
                All essential formulas, derivations, and quick-hacks for NEET & JEE rolled into one neat 50-page PDF. Join 5,000+ students analyzing it.
              </p>
              
              <ul className="space-y-3 text-slate-300 text-sm mb-8 text-left inline-block md:block">
                <li className="flex items-center gap-2"><Smartphone className="text-brand-yellow" size={18} /> Daily WhatsApp practice questions</li>
                <li className="flex items-center gap-2"><Download className="text-brand-yellow" size={18} /> Instant PDF Delivery</li>
              </ul>
            </div>

            <div className="w-full md:w-1/2">
              <form className="bg-white rounded-3xl p-6 shadow-xl" onSubmit={(e) => e.preventDefault()}>
                <h3 className="font-bold text-xl text-brand-blue mb-6">Get Your Free PDF</h3>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-600 mb-1">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Aman Kumar"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-600 mb-1">WhatsApp Number</label>
                    <div className="flex">
                      <span className="inline-flex items-center px-4 rounded-l-xl border border-r-0 border-slate-200 bg-slate-100 text-slate-500 font-medium">
                        +91
                      </span>
                      <input 
                        type="tel" 
                        placeholder="00000 00000"
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-r-xl focus:outline-none focus:ring-2 focus:ring-brand-blue"
                      />
                    </div>
                  </div>
                </div>

                <button className="w-full flex items-center justify-center bg-brand-yellow text-brand-blue font-bold text-lg py-4 rounded-xl hover:bg-brand-yellow-hover transition-colors">
                  <Download className="mr-2 h-5 w-5" />
                  Send me the PDF
                </button>
                <p className="text-center text-xs text-slate-400 mt-4">We never spam. Unsubscribe anytime.</p>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
