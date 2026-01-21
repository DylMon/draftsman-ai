import { Calendar, ArrowRight } from 'lucide-react';

export default function News() {
  const newsItems = [
    {
      date: 'January 15, 2026',
      title: 'Draftsman Development Officially Begins',
      excerpt: 'We are excited to announce the start of development on Draftsman, our AI-powered residential architecture platform. Our team is working to create a system that will revolutionize how architects approach code compliance.',
      category: 'Company'
    }
  ];

  return (
    <main>
      <section className="px-6 pt-20 pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h1 className="text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Latest <span className="text-blue-600">News</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Stay updated on Draftsman development, feature releases, and industry insights.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {newsItems.map((item, index) => (
              <article key={index} className="bg-white border border-slate-300 p-8 hover:shadow-xl transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-blue-600 text-white text-sm font-medium">
                    {item.category}
                  </span>
                  <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <Calendar className="w-4 h-4" />
                    {item.date}
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  {item.title}
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  {item.excerpt}
                </p>
                <button className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-4 transition-all">
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </article>
            ))}
          </div>

          <div className="mt-20 bg-gradient-to-br from-slate-800 to-slate-900 p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Want to Stay Informed?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Join our waitlist to receive exclusive updates about new features, beta access opportunities, and industry insights delivered directly to your inbox.
            </p>
            <button className="px-8 py-4 bg-blue-600 text-white font-semibold text-lg hover:bg-blue-700 transition-colors">
              Join Waitlist
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
