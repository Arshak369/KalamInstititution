import { motion } from "motion/react";
import { Check, ArrowRight } from "lucide-react";

const COURSES = [
  {
    name: "Foundation Drop-In",
    price: "₹99",
    period: "/trial",
    popular: false,
    features: [
      "2 Live Demo Classes",
      "Chapter-wise Mock Test",
      "PDF Formula Sheet",
      "AI MCQ Generator Access"
    ]
  },
  {
    name: "Monthly Practice",
    price: "₹499",
    period: "/month",
    popular: false,
    features: [
      "Access to All Live Classes",
      "Daily Practice Problems (DPP)",
      "Weekly Mock Tests",
      "Recorded Video Library",
      "Doubt Resolution Support"
    ]
  },
  {
    name: "Full Year Course",
    price: "₹1,999",
    period: "/year",
    popular: true,
    features: [
      "Complete Syllabus Coverage",
      "Priority Doubt Resolution",
      "Advanced AI Pattern Analysis",
      "All India Test Series (AITS)",
      "Printed Study Material",
      "Revision Crash Course"
    ]
  },
  {
    name: "1-on-1 Mentorship",
    price: "₹4,999",
    period: "/year",
    popular: false,
    features: [
      "Everything in Full Year",
      "Personalized Study Planner",
      "Bi-weekly Parent Meetings",
      "Direct Call with Mentors",
      "Stress Management Sessions"
    ]
  }
];

export function Courses() {
  return (
    <section id="courses" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tight text-brand-blue mb-4">
            Focused Learning Plans
          </h2>
          <p className="text-lg text-slate-600">
            Limited seats per batch to ensure individual attention. Next batch starts soon.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {COURSES.map((course, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative flex flex-col rounded-3xl p-8 bg-white border ${
                course.popular ? "border-brand-yellow shadow-xl shadow-brand-yellow/10" : "border-slate-200 shadow-lg shadow-slate-100"
              }`}
            >
              {course.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-yellow text-brand-blue font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full">
                  Most Popular
                </div>
              )}
              
              <h3 className="font-display font-bold text-xl text-brand-blue mb-2">{course.name}</h3>
              <div className="mb-6">
                <span className="font-display font-bold text-4xl text-brand-blue">{course.price}</span>
                <span className="text-slate-500 font-medium ml-1">{course.period}</span>
              </div>
              
              <div className="flex-1">
                <ul className="space-y-4 mb-8">
                  {course.features.map((feature, j) => (
                    <li key={j} className="flex items-start text-sm text-slate-600">
                      <Check className="h-5 w-5 text-green-500 mr-3 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className={`w-full py-3.5 rounded-xl font-bold flex items-center justify-center transition-colors ${
                course.popular 
                  ? "bg-brand-blue text-brand-yellow hover:bg-brand-blue-light" 
                  : "bg-slate-100 text-brand-blue hover:bg-slate-200"
              }`}>
                Enroll Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
