import { useState } from 'react';
import { Menu, X, BookOpen } from 'lucide-react';

interface NavbarProps {
  onOpenRegister: () => void;
  onOpenQuiz: () => void;
  onOpenStatus: () => void;
}

export function Navbar({ onOpenRegister, onOpenQuiz, onOpenStatus }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-18">
          
          {/* Zone 1: Brand Wordmark (Single text element) */}
          <a href="#" className="flex items-center gap-2.5 text-slate-900 whitespace-nowrap shrink-0 group">
            <div className="w-9 h-9 rounded-lg bg-emerald-800 text-amber-300 flex items-center justify-center font-bold shadow-xs">
              <BookOpen className="w-5 h-5" />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900">
              Akademi Al-Furqan
            </span>
          </a>

          {/* Zone 2: 4-5 clean single-line nav links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a 
              href="#program" 
              className="hover:text-emerald-800 transition-colors whitespace-nowrap shrink-0"
            >
              Pakej Mengaji
            </a>
            <a 
              href="#sukatan" 
              className="hover:text-emerald-800 transition-colors whitespace-nowrap shrink-0"
            >
              Sukatan Iqra'
            </a>
            <a 
              href="#guru" 
              className="hover:text-emerald-800 transition-colors whitespace-nowrap shrink-0"
            >
              Asatizah
            </a>
            <button 
              type="button"
              onClick={onOpenQuiz}
              className="hover:text-emerald-800 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Ujian Tahap
            </button>
            <button 
              type="button"
              onClick={onOpenStatus}
              className="hover:text-emerald-800 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Semakan Status
            </button>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onOpenRegister}
              className="px-5 py-2.5 text-sm font-semibold text-white bg-emerald-800 hover:bg-emerald-900 rounded-lg transition-colors shadow-xs whitespace-nowrap shrink-0 cursor-pointer"
            >
              Daftar Sekarang
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={onOpenRegister}
              className="px-3.5 py-1.5 text-xs font-semibold text-white bg-emerald-800 rounded-md whitespace-nowrap"
            >
              Daftar
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 focus:outline-hidden"
              aria-label="Buka menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-neutral-200 bg-white px-4 pt-3 pb-6 space-y-3">
          <a
            href="#program"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-700 hover:text-emerald-800"
          >
            Pakej Mengaji
          </a>
          <a
            href="#sukatan"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-700 hover:text-emerald-800"
          >
            Sukatan Iqra' & Tajwid
          </a>
          <a
            href="#guru"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-sm font-medium text-slate-700 hover:text-emerald-800"
          >
            Asatizah Bertauliah
          </a>
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenQuiz();
            }}
            className="block w-full text-left py-2 text-sm font-medium text-slate-700 hover:text-emerald-800"
          >
            Ujian Penilaian Tahap
          </button>
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenStatus();
            }}
            className="block w-full text-left py-2 text-sm font-medium text-slate-700 hover:text-emerald-800"
          >
            Semak Status Pendaftaran
          </button>
          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRegister();
              }}
              className="w-full py-2.5 text-center text-sm font-semibold text-white bg-emerald-800 rounded-lg hover:bg-emerald-900"
            >
              Borang Pendaftaran Online
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
