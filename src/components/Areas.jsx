function Areas() {
  return (
    <section id="areas" className="bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-20">
        <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">Areas We Serve</h2>
        <p className="mt-2 text-slate-700">Proudly serving:</p>
        <ul className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-slate-800">
          <li className="p-4 rounded-lg border border-slate-200 bg-white">📍 Lakewood Ranch</li>
          <li className="p-4 rounded-lg border border-slate-200 bg-white">📍 Sarasota</li>
          <li className="p-4 rounded-lg border border-slate-200 bg-white">📍 Bradenton</li>
        </ul>
        <p className="mt-6 text-slate-700">Working with investors across the country looking to advance their real estate portfolio.</p>
      </div>
    </section>
  );
}

export default Areas;
