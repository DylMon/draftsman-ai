import { Zap, Brain, TrendingUp, Lock, MapPin, Home as HomeIcon } from 'lucide-react';

export default function Home() {
  return (
    <main>
      <section className="px-6 pt-20 pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-200 text-slate-700 text-sm font-medium mb-8">
              <Brain className="w-4 h-4" />
              Currently in Development
            </div>

            <h1 className="text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Design Better, Build Compliant with <span className="text-blue-600">AI-Powered Architecture</span>
            </h1>

            <p className="text-xl text-slate-600 mb-12 leading-relaxed">
              Draftsman revolutionizes residential design by combining local code compliance with intelligent floor planning. Our AI analyzes building codes, zoning requirements, and site conditions to generate designs that meet all regulations and match your vision.
            </p>

            <div className="flex gap-4 justify-center">
              <button className="px-8 py-4 bg-blue-600 text-white font-semibold text-lg hover:bg-blue-700 transition-all hover:scale-105 shadow-lg shadow-blue-600/30">
                Get Early Access
              </button>
            </div>

            <div className="mt-16 bg-white shadow-2xl p-8 border border-slate-300">
              <div className="aspect-video bg-gradient-to-br from-slate-100 to-gray-100 flex items-center justify-center">
                <div className="text-center">
                  <HomeIcon className="w-24 h-24 text-blue-600 mx-auto mb-4" />
                  <p className="text-slate-600 font-medium">Floor Plans & Elevations Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Intelligent Features for Code-Compliant Design
            </h2>
            <p className="text-xl text-slate-600">
              Comprehensive AI tools that simplify the design process while ensuring regulatory compliance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white border border-slate-300 hover:shadow-xl hover:border-slate-400 transition-all">
              <div className="w-14 h-14 bg-slate-700 flex items-center justify-center mb-6">
                <MapPin className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Multi-Level Code Compliance
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Our AI automatically checks federal, state, county, and local building codes. For example, it identifies Los Angeles and Duarte-specific requirements to ensure every design meets all applicable regulations before you begin.
              </p>
            </div>

            <div className="p-8 bg-white border border-slate-300 hover:shadow-xl hover:border-slate-400 transition-all">
              <div className="w-14 h-14 bg-slate-700 flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Instant Floor Plans
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Generate professional floor plans in seconds based on your specifications. Input square footage, bedroom count, bathroom requirements, and architectural style to receive optimized layouts that comply with all codes.
              </p>
            </div>

            <div className="p-8 bg-white border border-slate-300 hover:shadow-xl hover:border-slate-400 transition-all">
              <div className="w-14 h-14 bg-slate-700 flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Site Analysis
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Upload site plans to let our AI analyze lot characteristics, existing trees, utilities, and constraints. Draftsman intelligently positions your home on the property while respecting setback requirements and site conditions.
              </p>
            </div>

            <div className="p-8 bg-white border border-slate-300 hover:shadow-xl hover:border-slate-400 transition-all">
              <div className="w-14 h-14 bg-slate-700 flex items-center justify-center mb-6">
                <HomeIcon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Detailed Specifications
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Define every detail: room sizes, master bathroom preferences, stacked or side-by-side washer/dryer, open concept options, and garage requirements. Draftsman honors your preferences while maintaining compliance.
              </p>
            </div>

            <div className="p-8 bg-white border border-slate-300 hover:shadow-xl hover:border-slate-400 transition-all">
              <div className="w-14 h-14 bg-slate-700 flex items-center justify-center mb-6">
                <Lock className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Regulatory Documentation
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Every design comes with compliance notes detailing which codes are satisfied. Get documentation ready for permitting, ensuring smooth approval through planning departments and building inspectors.
              </p>
            </div>

            <div className="p-8 bg-white border border-slate-300 hover:shadow-xl hover:border-slate-400 transition-all">
              <div className="w-14 h-14 bg-slate-700 flex items-center justify-center mb-6">
                <Brain className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Architectural Styles
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Choose from a range of architectural styles including modern, contemporary, tudor, georgian, and more. Draftsman generates designs that match your aesthetic while maintaining all required code compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Be Among the First to Experience Draftsman
          </h2>
          <p className="text-xl text-slate-300 mb-12">
            Join our exclusive waitlist and get priority access when we launch. Early adopters receive special pricing, extended support, and influence over feature development.
          </p>

          <div className="bg-white p-8 shadow-2xl">
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 border-2 border-slate-200 focus:outline-none focus:border-blue-600 text-lg"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-blue-600 text-white font-semibold text-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
              >
                Join Waitlist
              </button>
            </form>
            <p className="text-slate-500 text-sm mt-4">
              No spam, ever. We respect your privacy and will only send product updates.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
