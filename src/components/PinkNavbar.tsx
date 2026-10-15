import { Heart, MessageCircle } from 'lucide-react';

interface PinkNavbarProps {
  onOpenRegister: () => void;
  onOpenStatus: () => void;
}

export function PinkNavbar({ onOpenRegister, onOpenStatus }: PinkNavbarProps) {
  const whatsappUrl = "https://wa.me/60102955726?text=JomNgaji";

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-rose-100 shadow-2xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 h-16">
          
          {/* Zone 1: Brand Wordmark (Single text element) */}
          <a href="#" className="flex items-center gap-2 text-rose-950 font-bold text-lg sm:text-xl tracking-tight whitespace-nowrap shrink-0 group">
            <span className="w-8 h-8 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center text-sm shadow-2xs group-hover:scale-105 transition-transform">
              🌸
            </span>
            <span>JomNgaji Online</span>
          </a>

          {/* Zone 2: 4 clean single-line nav links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <a 
              href="#tentang" 
              className="hover:text-rose-600 transition-colors whitespace-nowrap shrink-0"
            >
              Pengenalan
            </a>
            <a 
              href="#pakej" 
              className="hover:text-rose-600 transition-colors whitespace-nowrap shrink-0"
            >
              Pakej Kelas
            </a>
            <a 
              href="#keistimewaan" 
              className="hover:text-rose-600 transition-colors whitespace-nowrap shrink-0"
            >
              Tawaran Khas
            </a>
            <button 
              type="button"
              onClick={onOpenStatus}
              className="hover:text-rose-600 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Semak Slot
            </button>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-rose-800 bg-rose-50 hover:bg-rose-100 rounded-lg transition-colors border border-rose-200 whitespace-nowrap shrink-0"
            >
              <MessageCircle className="w-3.5 h-3.5 text-rose-600" />
              <span>WhatsApp Admin</span>
            </a>

            <button
              type="button"
              onClick={onOpenRegister}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-bold text-white bg-rose-500 hover:bg-rose-600 rounded-lg transition-colors shadow-xs whitespace-nowrap shrink-0 cursor-pointer"
            >
              <Heart className="w-3.5 h-3.5 fill-white" />
              <span>Daftar Sesi Percuma</span>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}
