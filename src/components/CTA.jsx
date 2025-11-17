function CTA() {
  return (
    <section id="contact" className="relative bg-slate-50">
      <div className="absolute inset-x-0 -top-6 mx-auto w-fit px-4 py-1 rounded-full bg-white text-[#131C43] text-xs font-semibold border border-slate-200 shadow-sm">
        Get Started
      </div>

      <div className="max-w-[92rem] mx-auto px-6 sm:px-8 py-24">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 md:p-12">
          <div className="absolute -left-10 -top-10 h-64 w-64 rounded-full bg-[#131C43]/10 blur-3xl" />
          <div className="absolute -right-10 -bottom-10 h-64 w-64 rounded-full bg-[#131C43]/10 blur-3xl" />

          <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Your Real Estate Strong, Balanced, and Free</h2>
              <p className="mt-3 text-slate-700 max-w-2xl">Ready to take the next step? Forté helps homeowners and investors manage, buy, and grow real estate with clarity, purpose, and long-term freedom.</p>
            </div>
            <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#131C43] text-white font-semibold shadow-lg shadow-[#131C43]/20 hover:shadow-xl hover:-translate-y-0.5 transition-all whitespace-nowrap">Request Your Free Property Consultation</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
