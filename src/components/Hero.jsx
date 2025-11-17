import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section className="relative w-full min-h-[70vh] grid place-items-center overflow-hidden bg-slate-50">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 py-24">
        <div className="max-w-3xl">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#131C43]/70 mb-3">Forté Realty & Property Management</span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-semibold leading-[1.05] text-slate-900">
            Transform homes into assets and portfolios into lifestyles
          </h1>
          <p className="mt-6 text-base sm:text-lg text-slate-700 max-w-2xl">
            At Forté Realty & Property Management, we go beyond transactions to help people create lasting freedom and legacy through real estate. We treat every home as an opportunity to build strength, stability, and abundance guided by integrity, clarity, and genuine care for each client’s goals.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a href="#contact" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-[#131C43] text-white font-medium shadow-sm hover:shadow-md hover:brightness-110 transition-all">
              Request Your Free Property Consultation
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/80 to-white/20" />
    </section>
  );
}

export default Hero;
