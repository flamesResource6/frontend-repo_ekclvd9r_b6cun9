import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative w-full min-h-[92vh] overflow-hidden bg-slate-50">
      {/* Bold radial background accents */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-[42rem] w-[42rem] rounded-full bg-[#131C43]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-[42rem] w-[42rem] rounded-full bg-[#131C43]/10 blur-3xl" />

      {/* Spline Cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Angled mask to create an unconventional silhouette */}
      <div className="absolute inset-0" aria-hidden>
        <div className="absolute inset-0" style={{
          WebkitMaskImage: 'linear-gradient(180deg, black 65%, transparent 100%)',
          maskImage: 'linear-gradient(180deg, black 65%, transparent 100%)'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[92rem] mx-auto px-6 sm:px-8 py-28 md:py-36">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur px-3 py-1 ring-1 ring-slate-200 text-xs font-semibold text-[#131C43]">
            Forté Realty & Property Management
          </div>
          <h1 className="mt-5 text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[0.98] text-slate-900">
            Transform homes into assets and portfolios into lifestyles
          </h1>
          <p className="mt-6 text-base sm:text-lg text-slate-700 max-w-2xl">
            At Forté Realty & Property Management, we go beyond transactions to help people create lasting freedom and legacy through real estate. We treat every home as an opportunity to build strength, stability, and abundance guided by integrity, clarity, and genuine care for each client’s goals.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#131C43] text-white font-semibold shadow-lg shadow-[#131C43]/20 hover:shadow-xl hover:-translate-y-0.5 transition-all">
              Request Your Free Property Consultation
            </a>
            <span className="text-sm text-slate-600">Strong. Balanced. Free.</span>
          </div>
        </div>
      </div>

      {/* Diagonal edge divider */}
      <svg className="relative z-10 block w-full" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden>
        <polygon points="0,80 1440,0 1440,80 0,80" fill="white" />
      </svg>
    </section>
  );
}

export default Hero;
