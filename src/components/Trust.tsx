import { motion } from "motion/react";
import { Star, PlayCircle } from "lucide-react";

export function Trust() {
  return (
    <section id="results" className="py-24 bg-brand-blue text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tight mb-6 leading-tight">
              Don't just take our word for it. <span className="text-brand-yellow">See the results.</span>
            </h2>
            <p className="text-lg text-slate-400 mb-10">
              Our AI-powered methodology has helped thousands of students crack the toughest physics exams with top percentiles.
            </p>
            
            <div className="space-y-6">
              {[
                { name: "Rahul Sharma", exam: "NEET 2023", rank: "AIR 452", quote: "The daily DPPs and AI doubt solving saved me hours of struggling with HC Verma." },
                { name: "Priya Desai", exam: "JEE Adv 2023", rank: "Top 1%", quote: "Kalam Institute bridged the gap between NCERT logic and advanced numericals perfectly." }
              ].map((t, i) => (
                <div key={i} className="bg-slate-800/50 border border-slate-700 p-6 rounded-2xl">
                  <div className="flex text-brand-yellow mb-3">
                    {[1,2,3,4,5].map(s => <Star key={s} size={16} className="fill-current" />)}
                  </div>
                  <p className="text-slate-300 italic mb-4">"{t.quote}"</p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold">{t.name}</span>
                    <span className="text-xs font-bold px-2 py-1 bg-brand-yellow/10 text-brand-yellow rounded-md">{t.exam} - {t.rank}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            {/* Faux Video Player */}
            <div className="relative aspect-video rounded-3xl overflow-hidden bg-slate-900 border border-slate-700/50 shadow-2xl group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop" 
                alt="Teaching class" 
                className="object-cover w-full h-full opacity-60 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/80 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-brand-yellow text-brand-blue rounded-full flex items-center justify-center scale-90 group-hover:scale-100 transition-transform duration-300 shadow-[0_0_40px_rgba(251,191,36,0.4)]">
                  <PlayCircle size={40} className="ml-1" />
                </div>
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <span className="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full mb-3 inline-block">LIVE RECORDING</span>
                <h3 className="font-display font-bold text-xl text-white">How we solve Complex Kinematics in 30 Seconds</h3>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
