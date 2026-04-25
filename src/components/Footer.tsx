import { Atom } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 border-b border-slate-200 pb-12 mb-8">
          
          <div className="flex flex-col items-center md:items-start max-w-sm">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-8 h-8 rounded bg-brand-blue text-brand-yellow">
                <Atom size={20} />
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-brand-blue">
                Kalam Institute
              </span>
            </div>
            <p className="text-slate-500 text-sm text-center md:text-left">
              India's Smart Physics Practice Platform. We turn complicated physics concepts into competitive exam ranks.
            </p>
          </div>

          <div className="flex gap-16">
            <div className="flex flex-col gap-3 text-sm">
              <h4 className="font-bold text-brand-blue uppercase tracking-wider mb-2">Quick Links</h4>
              <a href="#practice" className="text-slate-500 hover:text-brand-blue">Practice MCQs</a>
              <a href="#courses" className="text-slate-500 hover:text-brand-blue">View Courses</a>
              <a href="#results" className="text-slate-500 hover:text-brand-blue">Our Results</a>
            </div>
            <div className="flex flex-col gap-3 text-sm">
              <h4 className="font-bold text-brand-blue uppercase tracking-wider mb-2">Legal</h4>
              <a href="#" className="text-slate-500 hover:text-brand-blue">Privacy Policy</a>
              <a href="#" className="text-slate-500 hover:text-brand-blue">Terms of Service</a>
              <a href="#" className="text-slate-500 hover:text-brand-blue">Refund Policy</a>
            </div>
          </div>
          
        </div>

        <div className="text-center text-sm text-slate-400 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Kalam Institute. All rights reserved.</p>
          <p className="font-medium">Built for top percentiles.</p>
        </div>
      </div>
    </footer>
  );
}
