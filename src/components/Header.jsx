import { Menu } from "lucide-react";

function Header() {
  return (
    <header className="w-full sticky top-0 z-20 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-md bg-[#131C43] text-white grid place-items-center font-semibold">F</div>
          <span className="font-semibold tracking-tight text-slate-900">Forté Realty & Property Management</span>
        </div>
        <button className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors sm:hidden">
          <Menu className="h-4 w-4" />
          Menu
        </button>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-700">
          <a href="#services" className="hover:text-[#131C43]">Services</a>
          <a href="#areas" className="hover:text-[#131C43]">Areas</a>
          <a href="#team" className="hover:text-[#131C43]">Join Our Team</a>
          <a href="#contact" className="hover:text-[#131C43]">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
