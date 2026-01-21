import { Building2, Users, Target, Award } from 'lucide-react';

export default function About() {
  return (
    <main>
      <section className="px-6 pt-20 pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h1 className="text-6xl font-bold text-slate-900 mb-6 leading-tight">
              About <span className="text-blue-600">Draftsman</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              We're revolutionizing the residential design industry by making code-compliant architecture accessible to everyone through artificial intelligence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Mission</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                Draftsman exists to democratize residential architecture by combining cutting-edge AI technology with comprehensive building code knowledge. We believe that creating compliant, beautiful home designs should be accessible to architects, builders, and homeowners alike.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our platform eliminates the complexity and time-consuming nature of manual code research, allowing professionals to focus on creativity while ensuring every design meets all regulatory requirements from federal to local levels.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-slate-50 p-8 border border-slate-300 flex items-center justify-center">
              <Building2 className="w-64 h-64 text-blue-600/20" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="text-center p-8 bg-white border border-slate-300">
              <div className="w-16 h-16 bg-blue-600 flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                To become the industry standard for AI-powered architectural design, ensuring every residential project starts with a code-compliant foundation.
              </p>
            </div>

            <div className="text-center p-8 bg-white border border-slate-300">
              <div className="w-16 h-16 bg-blue-600 flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Team</h3>
              <p className="text-slate-600 leading-relaxed">
                Built by architects, engineers, and AI specialists who understand the challenges of residential design and code compliance firsthand.
              </p>
            </div>

            <div className="text-center p-8 bg-white border border-slate-300">
              <div className="w-16 h-16 bg-blue-600 flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Excellence</h3>
              <p className="text-slate-600 leading-relaxed">
                Committed to accuracy, reliability, and continuous improvement of our AI models to serve the architecture community better.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Why Draftsman?
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-slate-300 leading-relaxed mb-6">
                Traditional architectural design requires countless hours researching building codes across multiple jurisdictions. A single project might need compliance with federal ADA requirements, state energy codes, county fire regulations, and local zoning ordinances.
              </p>
              <p className="text-xl text-slate-300 leading-relaxed">
                Draftsman automates this complexity, instantly analyzing all relevant codes and generating designs that meet every requirement. This means faster project timelines, fewer permit rejections, and more time for creative design work.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
