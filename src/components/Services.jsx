function Services() {
  return (
    <section id="services" className="bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-20">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">Real Estate and Property Management Services</h2>
          <p className="mt-3 text-slate-700">Forté offers strategic real estate and property management services designed to build wealth, freedom, and lasting value.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow transition-shadow">
            <h3 className="text-lg font-semibold text-slate-900">Property Management with Strategy and Care</h3>
            <p className="mt-2 text-slate-700">Forté approaches property management as a path to lasting freedom and legacy. With strategy, integrity, and hands-on care, we help owners turn their homes into performing assets, building strength, stability, and growth through every decision, every tenant, and every property we manage.</p>
          </div>

          <div className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow transition-shadow">
            <h3 className="text-lg font-semibold text-slate-900">Residential Real Estate with Purpose and Vision</h3>
            <p className="mt-2 text-slate-700">Buying or selling a home should move you closer to freedom, not further from it. Forté helps clients make decisions that build long-term wealth and stability, combining local insight, real estate investing expertise and genuine guidance to turn every move into a step toward legacy.</p>
          </div>

          <div className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow transition-shadow">
            <h3 className="text-lg font-semibold text-slate-900">Commercial Real Estate with Clarity and Intent</h3>
            <p className="mt-2 text-slate-700">Forté guides business owners and investors through commercial sales and acquisitions with strategy and integrity. We focus on clarity, value and smart growth, helping each client structure deals that strengthen their portfolio and move them closer to lasting financial freedom.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
