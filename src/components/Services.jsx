function Services() {
  return (
    <section id="services" className="relative bg-white">
      {/* Section label */}
      <div className="absolute inset-x-0 -top-10 mx-auto w-fit px-4 py-1 rounded-full bg-slate-100 text-[#131C43] text-xs font-semibold border border-slate-200 shadow-sm">
        Services
      </div>

      <div className="max-w-[92rem] mx-auto px-6 sm:px-8 py-24">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
            Real Estate and Property Management Services
          </h2>
          <p className="mt-4 text-slate-700">
            Forté offers strategic real estate and property management services designed to build wealth, freedom, and lasting value.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Card 1 */}
          <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 md:p-7 shadow-sm hover:shadow-md transition-shadow">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#131C43]/5 blur-2xl group-hover:bg-[#131C43]/10 transition-colors" />
            <h3 className="text-xl font-semibold text-slate-900">
              Property Management with Strategy and Care
            </h3>
            <p className="mt-2 text-slate-700">
              Forté approaches property management as a path to lasting freedom and legacy. With strategy, integrity, and hands-on care, we help owners turn their homes into performing assets, building strength, stability, and growth through every decision, every tenant, and every property we manage.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 md:p-7 shadow-sm hover:shadow-md transition-shadow">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#131C43]/5 blur-2xl group-hover:bg-[#131C43]/10 transition-colors" />
            <h3 className="text-xl font-semibold text-slate-900">
              Residential Real Estate with Purpose and Vision
            </h3>
            <p className="mt-2 text-slate-700">
              Buying or selling a home should move you closer to freedom, not further from it. Forté helps clients make decisions that build long-term wealth and stability, combining local insight, real estate investing expertise and genuine guidance to turn every move into a step toward legacy.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 md:p-7 shadow-sm hover:shadow-md transition-shadow">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#131C43]/5 blur-2xl group-hover:bg-[#131C43]/10 transition-colors" />
            <h3 className="text-xl font-semibold text-slate-900">
              Commercial Real Estate with Clarity and Intent
            </h3>
            <p className="mt-2 text-slate-700">
              Forté guides business owners and investors through commercial sales and acquisitions with strategy and integrity. We focus on clarity, value and smart growth, helping each client structure deals that strengthen their portfolio and move them closer to lasting financial freedom.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
