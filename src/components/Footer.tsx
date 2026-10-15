import { BookOpen, Phone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onOpenRegister: () => void;
  onOpenQuiz: () => void;
  onOpenStatus: () => void;
}

export function Footer({ onOpenRegister, onOpenQuiz, onOpenStatus }: FooterProps) {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-800 text-amber-300 flex items-center justify-center font-bold">
                <BookOpen className="w-4 h-4" />
              </div>
              <span className="font-bold text-lg text-white tracking-tight">
                Akademi Al-Furqan Online
              </span>
            </div>
            
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Pusat bimbingan pengajian Al-Quran dan Kaedah Iqra' dalam talian bersanad. Membantu segenap lapisan masyarakat membaca Al-Quran dengan tartil, tenang dan istiqamah.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1.5">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>WhatsApp Admin: +60 11-5552 3456</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Emel: salam@alfurqan-online.edu.my</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Pusat Pengurusan: Bandar Baru Nilai & Bangi, Malaysia</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Pakej & Program
            </div>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#program" className="hover:text-emerald-400 transition-colors">
                  Iqra' Cilik (Kanak-kanak)
                </a>
              </li>
              <li>
                <a href="#program" className="hover:text-emerald-400 transition-colors">
                  Celik Al-Quran Dewasa
                </a>
              </li>
              <li>
                <a href="#program" className="hover:text-emerald-400 transition-colors">
                  Tahsin & Talaqqi Sanad
                </a>
              </li>
              <li>
                <a href="#program" className="hover:text-emerald-400 transition-colors">
                  Santai Barakah Warga Emas
                </a>
              </li>
            </ul>
          </div>

          {/* Nav Links */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Kemudahan Pelajar
            </div>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button
                  type="button"
                  onClick={onOpenRegister}
                  className="hover:text-emerald-400 transition-colors cursor-pointer text-left"
                >
                  Borang Pendaftaran Online
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenQuiz}
                  className="hover:text-emerald-400 transition-colors cursor-pointer text-left"
                >
                  Ujian Penilaian Tahap Bacaan
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenStatus}
                  className="hover:text-emerald-400 transition-colors cursor-pointer text-left"
                >
                  Semakan Status & Jadual Kelas
                </button>
              </li>
              <li>
                <a href="#sukatan" className="hover:text-emerald-400 transition-colors">
                  Silibus Kaedah Iqra' 1 - 6
                </a>
              </li>
            </ul>
          </div>

          {/* Trust & Tauliah */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Pentauliahan & Etika
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Pengajian diselia oleh asatizah pemegang sanad Al-Quran Riwayat Hafs 'an 'Asim tareeq Asy-Syatibiyyah. Menepati garis panduan Rasm Uthmani.
            </p>
            <div className="pt-2">
              <span className="inline-block px-3 py-1 bg-emerald-950 text-emerald-300 rounded-md text-[11px] font-semibold border border-emerald-800">
                Al-Quran Rasm Uthmani
              </span>
            </div>
          </div>

        </div>

        {/* Quiet Bottom Copyright */}
        <div className="mt-12 pt-6 border-t border-slate-800 text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            © {new Date().getFullYear()} Akademi Al-Furqan Online. Hak Cipta Terpelihara.
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-400 transition-colors">Dasar Privasi Pelajar</span>
            <span>·</span>
            <span className="hover:text-slate-400 transition-colors">Terma Pengajian</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
