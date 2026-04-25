import { motion } from "motion/react";
import { BrainCircuit, Target, Zap } from "lucide-react";

export function USP() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tight text-brand-blue mb-4">
            We don't just teach physics.<br />
            <span className="text-slate-400">We make you score.</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Say goodbye to "I don't understand numericals." Our structured learning path takes you from basic NCERT understanding to advanced problem-solving mastery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: BrainCircuit,
              title: "Concept First",
              desc: "We break down complex physics phenomena into simple, digestible mental models. No rote memorization.",
              color: "bg-blue-100 text-blue-600"
            },
            {
              icon: Target,
              title: "NCERT + Beyond",
              desc: "Perfectly aligned with NCERT for NEET, scaled up with precision for JEE Advanced requirements.",
              color: "bg-emerald-100 text-emerald-600"
            },
            {
              icon: Zap,
              title: "AI Practice Engine",
              desc: "Dynamic MCQ generation adapts to your weaknesses. Practice precisely what you need to improve.",
              color: "bg-brand-yellow/20 text-brand-yellow-hover"
            }
          ].map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all"
            >
              <div className={`p-4 rounded-2xl mb-6 ${feature.color}`}>
                <feature.icon size={32} />
              </div>
              <h3 className="font-display font-bold text-xl text-brand-blue mb-3">{feature.title}</h3>
              <p className="text-slate-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
