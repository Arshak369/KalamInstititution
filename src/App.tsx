import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { USP } from "./components/USP";
import { MCQGenerator } from "./components/MCQGenerator";
import { Courses } from "./components/Courses";
import { Trust } from "./components/Trust";
import { LeadCapture } from "./components/LeadCapture";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <Navbar />
      <main>
        <Hero />
        <USP />
        <MCQGenerator />
        <Courses />
        <Trust />
        <LeadCapture />
      </main>
      <Footer />
    </div>
  );
}

