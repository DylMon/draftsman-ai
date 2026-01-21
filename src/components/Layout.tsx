import { Home } from 'lucide-react';
import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100">
      <nav className="px-4 md:px-6 py-4 bg-white/95 backdrop-blur-md border-b border-slate-300 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex flex-col gap-3 md:flex-row md:justify-between md:items-center">
          <Link to="/" className="flex items-center gap-2">
            <Home className="w-8 h-8 text-blue-600" />
            <span className="text-2xl font-bold text-slate-900">Draftsman</span>
          </Link>

          {/* Mobile: new line row under logo, side-by-side */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 md:flex-nowrap md:gap-6">
            <Link to="/about" className="text-slate-700 font-medium hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link to="/news" className="text-slate-700 font-medium hover:text-blue-600 transition-colors">
              News
            </Link>

            <button className="px-4 py-2.5 bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors rounded-md whitespace-nowrap">
              Join Waitlist
            </button>
          </div>
        </div>
      </nav>


      <Outlet />

      <footer className="px-6 py-12 bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Home className="w-6 h-6 text-slate-400" />
              <span className="text-xl font-bold text-white">Draftsman</span>
            </div>
            <p className="text-slate-500">
              © 2026 Draftsman. All rights reserved.
            </p>
            <div className="flex gap-6 text-slate-500">
              <a href="#" className="hover:text-slate-300 transition-colors">Privacy</a>
              <a href="#" className="hover:text-slate-300 transition-colors">Terms</a>
              <a href="#" className="hover:text-slate-300 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
