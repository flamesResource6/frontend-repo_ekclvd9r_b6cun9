function Team() {
  return (
    <section id="team" className="relative bg-white">
      <div className="absolute inset-x-0 -top-6 mx-auto w-fit px-4 py-1 rounded-full bg-slate-100 text-[#131C43] text-xs font-semibold border border-slate-200 shadow-sm">
        Careers
      </div>

      <div className="max-w-[92rem] mx-auto px-6 sm:px-8 py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Join Our Team</h2>
            <p className="mt-4 text-slate-700">
              We’re building a team of agents who value integrity, lifestyle, and growth. Join Forté to build a business and lifestyle that feel strong, balanced, and free while being empowered to help our clients reach their financial success.
            </p>
            <a href="#contact" className="mt-8 inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#131C43] text-white font-semibold shadow-lg shadow-[#131C43]/20 hover:shadow-xl hover:-translate-y-0.5 transition-all">
              Explore Opportunities
            </a>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6">
            <div className="absolute -top-8 -right-8 h-44 w-44 rounded-full bg-[#131C43]/10 blur-3xl" />
            <ul className="relative grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-800">
              <li className="p-4 rounded-xl border border-slate-200 bg-white">• Mentorship & growth plans</li>
              <li className="p-4 rounded-xl border border-slate-200 bg-white">• Flexible, lifestyle-first culture</li>
              <li className="p-4 rounded-xl border border-slate-200 bg-white">• Strong brand & marketing support</li>
              <li className="p-4 rounded-xl border border-slate-200 bg-white">• Community and investor network</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
