import { useState } from "react";
import { motion } from "motion/react";
import { generatePhysicsMCQs } from "../lib/gemini";
import { CheckCircle2, XCircle, Sparkles, LockKeyhole } from "lucide-react";
import { cn } from "../lib/utils";

const TOPICS = [
  "Kinematics (1D & 2D)",
  "Laws of Motion",
  "Work, Energy & Power",
  "Rotational Motion",
  "Thermodynamics",
  "Electrostatics",
  "Current Electricity",
  "Ray Optics",
  "Modern Physics"
];

interface MCQ {
  id: string;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export function MCQGenerator() {
  const [topic, setTopic] = useState(TOPICS[0]);
  const [loading, setLoading] = useState(false);
  const [mcqs, setMcqs] = useState<MCQ[]>([]);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});

  const handleGenerate = async () => {
    setLoading(true);
    setMcqs([]);
    setSelectedAnswers({});
    try {
      // Generate 4 questions to show 2 unlocked, 2 locked
      const generated = await generatePhysicsMCQs(topic, 4);
      setMcqs(generated);
    } catch (e) {
      console.error(e);
      alert("Failed to generate questions. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSelectOption = (mcqId: string, index: number) => {
    if (selectedAnswers[mcqId] !== undefined) return; // Prevent changing answer
    setSelectedAnswers(prev => ({ ...prev, [mcqId]: index }));
  };

  return (
    <section id="practice" className="py-24 bg-brand-blue text-white relative isolate overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 -m-32 w-96 h-96 bg-brand-yellow/20 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 -m-32 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-slate-700 mb-6 text-brand-yellow text-sm font-semibold"
          >
            <Sparkles size={16} />
            AI-Powered Practice
          </motion.div>
          <h2 className="font-display font-bold text-3xl md:text-5xl tracking-tight mb-4">
            Test Your Knowledge Instantly
          </h2>
          <p className="text-lg text-slate-400">
            Select a chapter and our AI engine will generate personalized competitive-level MCQs in seconds.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl">
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
            <select 
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full sm:w-auto flex-1 bg-slate-800 border border-slate-700 text-white text-base rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-brand-yellow"
            >
              {TOPICS.map(t => <option key={t} value={t}>{t}</option>)}
            </select>
            <button 
              onClick={handleGenerate}
              disabled={loading}
              className="w-full sm:w-auto inline-flex items-center justify-center whitespace-nowrap rounded-xl bg-brand-yellow text-brand-blue px-6 py-3.5 font-bold hover:bg-brand-yellow-hover disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? "Generating..." : "Generate MCQs"}
            </button>
          </div>

          <div className="space-y-6">
            {mcqs.map((mcq, idx) => {
              const isLocked = idx >= 2; // Lock 3rd and 4th question
              const isAnswered = selectedAnswers[mcq.id] !== undefined;
              const isCorrect = isAnswered && selectedAnswers[mcq.id] === mcq.correctAnswerIndex;

              return (
                <motion.div 
                  key={mcq.id + idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative bg-slate-800/50 border border-slate-700 rounded-2xl p-6"
                >
                  {isLocked ? (
                    <>
                      {/* Blurred / Locked State */}
                      <div className="filter blur-sm select-none pointer-events-none opacity-50">
                        <div className="flex gap-4">
                          <span className="font-display font-bold text-brand-yellow">Q{idx + 1}.</span>
                          <p className="font-medium mb-4 pr-8 line-clamp-2">{mcq.question}</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-8">
                          {mcq.options.map((opt, i) => (
                            <div key={i} className="bg-slate-800 border border-slate-700 rounded-lg p-3 text-sm">
                              {opt}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Lock Overlay */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/60 rounded-2xl z-10">
                         <div className="bg-slate-800 p-3 rounded-full mb-3 shadow-lg">
                           <LockKeyhole className="text-brand-yellow" size={24} />
                         </div>
                         <h4 className="font-bold text-lg mb-1">Unlock Full Practice</h4>
                         <p className="text-sm text-slate-400 mb-4">Sign up to get access to all AI generated questions.</p>
                         <button className="bg-white text-brand-blue font-bold py-2 px-6 rounded-full text-sm hover:bg-slate-200 transition-colors">
                           Free Sign Up
                         </button>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Unlocked State */}
                      <div className="flex gap-4">
                        <span className="font-display font-bold text-brand-yellow">Q{idx + 1}.</span>
                        <p className="font-medium text-lg text-slate-100 mb-5 pr-8">{mcq.question}</p>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-8">
                        {mcq.options.map((opt, i) => {
                          const isSelected = selectedAnswers[mcq.id] === i;
                          const showCorrect = isAnswered && i === mcq.correctAnswerIndex;
                          const showIncorrect = isSelected && !showCorrect;

                          return (
                            <button
                              key={i}
                              onClick={() => handleSelectOption(mcq.id, i)}
                              disabled={isAnswered}
                              className={cn(
                                "flex items-center justify-between text-left w-full p-4 rounded-xl border text-sm transition-all",
                                !isAnswered && "bg-slate-800 border-slate-700 hover:border-brand-yellow hover:bg-slate-700/50 cursor-pointer",
                                showCorrect && "bg-green-500/10 border-green-500 text-green-400",
                                showIncorrect && "bg-red-500/10 border-red-500 text-red-400",
                                isAnswered && !showCorrect && !showIncorrect && "bg-slate-800/50 border-slate-700/50 opacity-50 cursor-not-allowed"
                              )}
                            >
                              <span>{String.fromCharCode(65 + i)}. {opt}</span>
                              {showCorrect && <CheckCircle2 size={18} className="text-green-500 shrink-0" />}
                              {showIncorrect && <XCircle size={18} className="text-red-500 shrink-0" />}
                            </button>
                          );
                        })}
                      </div>

                      {isAnswered && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          className="mt-6 pl-8"
                        >
                          <div className={cn(
                            "p-4 rounded-xl border",
                            isCorrect ? "bg-green-500/10 border-green-500/20 text-green-300" : "bg-brand-yellow/10 border-brand-yellow/20 text-brand-yellow"
                          )}>
                            <p className="font-semibold mb-1">
                              {isCorrect ? "Correct! Well done." : `Correct Answer: Option ${String.fromCharCode(65 + mcq.correctAnswerIndex)}`}
                            </p>
                            <p className="text-sm opacity-90 leading-relaxed font-sans mt-2 border-t border-current pt-2">
                              <span className="font-semibold">Explanation: </span>
                              {mcq.explanation}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </>
                  )}
                </motion.div>
              );
            })}
            
            {mcqs.length === 0 && !loading && (
              <div className="py-12 text-center border-2 border-dashed border-slate-700 rounded-2xl text-slate-500">
                Select a topic above and hit generate to start your smart practice.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
