import { Menu } from "lucide-react";

function Header() {
  return (
    <header className="w-full sticky top-0 z-30 border-b border-slate-200/60 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="max-w-[92rem] mx-auto px-6 sm:px-8 py-4 flex items-center justify-between">
        <a href="#" className="group flex items-center gap-3">
          <div className="relative h-11 w-11 rounded-xl grid place-items-center font-semibold text-white overflow-hidden">
            <span className="absolute inset-0 bg-[#131C43]" />
            <span className="relative z-10 text-lg">F</span>
          </div>
          <div className="leading-tight">
            <span className="block font-semibold tracking-tight text-slate-900">
              Forté Realty
            </span>
            <span className="block text-[11px] tracking-wide text-slate-500">
              Property Management
            </span>
          </div>
        </a>

        <button className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors sm:hidden">
          <Menu className="h-4 w-4" />
          Menu
        </button>

        <nav className="hidden sm:flex items-center gap-2 text-sm">
          <a href="#services" className="px-3 py-2 rounded-full text-slate-700 hover:text-[#131C43] hover:bg-slate-100 transition-colors">Services</a>
          <a href="#areas" className="px-3 py-2 rounded-full text-slate-700 hover:text-[#131C43] hover:bg-slate-100 transition-colors">Areas</a>
          <a href="#team" className="px-3 py-2 rounded-full text-slate-700 hover:text-[#131C43] hover:bg-slate-100 transition-colors">Join Our Team</a>
          <a href="#contact" className="ml-2 inline-flex items-center justify-center px-4 py-2 rounded-full bg-[#131C43] text-white font-medium shadow-sm hover:shadow-md hover:brightness-110 transition-all">
            Free Consultation
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
