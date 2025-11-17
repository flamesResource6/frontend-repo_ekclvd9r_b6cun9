function Areas() {
  return (
    <section id="areas" className="relative bg-slate-50">
      <div className="absolute inset-x-0 -top-6 mx-auto w-fit px-4 py-1 rounded-full bg-white text-[#131C43] text-xs font-semibold border border-slate-200 shadow-sm">
        Coverage
      </div>

      <div className="max-w-[92rem] mx-auto px-6 sm:px-8 py-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Areas We Serve</h2>
            <p className="mt-3 text-slate-700">Proudly serving:</p>
          </div>
          <p className="text-sm text-slate-600 max-w-md">
            Working with investors across the country looking to advance their real estate portfolio.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { name: 'Lakewood Ranch' },
            { name: 'Sarasota' },
            { name: 'Bradenton' }
          ].map((city) => (
            <div key={city.name} className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6">
              <div className="absolute inset-0 opacity-60" style={{
                backgroundImage: 'radial-gradient(circle at 20% 10%, rgba(19,28,67,0.12), transparent 40%), radial-gradient(circle at 80% 90%, rgba(19,28,67,0.08), transparent 35%)'
              }} />
              <div className="relative">
                <div className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-[#131C43]/10 text-[#131C43] text-sm font-semibold">
                  📍
                </div>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">{city.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Areas;
