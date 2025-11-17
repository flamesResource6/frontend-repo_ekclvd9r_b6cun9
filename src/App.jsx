import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Areas from './components/Areas';
import Team from './components/Team';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <main>
        <Hero />
        <Services />
        <Areas />
        <Team />
        <CTA />
      </main>
      <footer className="border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} Forté Realty & Property Management. All rights reserved.</p>
          <a href="#contact" className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-[#131C43] text-white text-sm font-medium">Request Your Free Property Consultation</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
