import { useState } from 'react';
import { Sparkles, MessageCircle, ArrowRight, CheckCircle2, BookOpen } from 'lucide-react';
import heroPinkQuran from '../assets/images/hero_pink_quran_1792081058102.jpg';

interface PinkHeroProps {
  onOpenRegister: () => void;
}

export function PinkHero({ onOpenRegister }: PinkHeroProps) {
  const directWhatsAppUrl = "https://wa.me/60102955726?text=JomNgaji";
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <section id="tentang" className="relative overflow-hidden py-10 sm:py-16 lg:py-20 bg-gradient-to-b from-[#FFF5F6] via-white to-[#FFF8F8]">
      
      {/* Soft floral background glow */}
      <div className="absolute top-0 right-0 -mt-10 -mr-10 w-80 h-80 rounded-full bg-rose-100/60 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-72 h-72 rounded-full bg-rose-200/40 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Text & Value Proposition */}
          <div className="lg:col-span-7 space-y-5">
            
            {/* Arabic Bismillah - Connected Cursive (strictly NO tracking-wide) */}
            <div 
              dir="rtl" 
              lang="ar" 
              className="text-rose-700 text-2xl sm:text-3xl font-normal leading-normal select-none"
              style={{ fontFamily: "'Amiri', 'Traditional Arabic', serif" }}
            >
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </div>

            {/* Title Kicker with user emojis */}
            <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-rose-600 uppercase">
              <span className="flex items-center gap-1.5 flex-wrap">
                <span>📖✨</span>
                <span>KELAS IQRA' & MENGAJI AL-QURAN ONLINE</span>
                <span>✨📖</span>
              </span>
            </div>

            {/* Warm Greeting */}
            <div className="text-sm font-semibold text-rose-900 flex items-center gap-1.5">
              <span>Assalamualaikum w.b.t.</span>
              <span>🤍</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight" style={{ textWrap: 'balance' }}>
              Nak belajar mengaji dari rumah dengan <span className="text-rose-600">mudah dan fleksibel?</span>
            </h1>

            {/* Friendly Invitation Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Jom sertai kelas mengaji online! 🌸 Terbuka kepada yang ingin belajar daripada asas Iqra’ atau memperbaiki bacaan al-Quran.
            </p>

            {/* Key benefits list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0" />
                <span>8 sesi kelas sebulan</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0" />
                <span>2 kali seminggu</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0" />
                <span>Kelas dijalankan secara online</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-semibold text-rose-800">
                <Sparkles className="w-4 h-4 text-rose-600 shrink-0" />
                <span>Cuba 1 sesi percuma dulu!</span>
              </div>
            </div>

            {/* Guarantee Highlight Banner */}
            <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200/80 text-xs sm:text-sm text-rose-950 flex items-start gap-2.5">
              <span className="text-base">🌷</span>
              <p className="leading-snug">
                <strong>Jaminan Tanpa Risiko:</strong> Cuba 1 sesi percuma dulu! Jika puas hati, cuma bayar yuran bulanan untuk teruskan sesi seterusnya.
              </p>
            </div>

            {/* Call To Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                type="button"
                onClick={onOpenRegister}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-bold text-white bg-rose-600 hover:bg-rose-700 rounded-xl transition-all shadow-md shadow-rose-200 hover:shadow-lg cursor-pointer"
              >
                <span>Daftar Sesi Percuma Sekarang</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-rose-900 bg-white hover:bg-rose-50 rounded-xl transition-all border border-rose-200 shadow-2xs"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>WhatsApp: 010-295 5726</span>
              </a>
            </div>

          </div>

          {/* Right Column: Pink Themed Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border-2 border-rose-200 shadow-lg shadow-rose-100/60 bg-rose-100/30 min-h-[320px] flex items-center justify-center group">
              
              {!imageError ? (
                <img
                  src={heroPinkQuran || '/hero_pink_quran.jpg'}
                  alt="Al-Quran dan hiasan bunga ros tema pink lembut"
                  className={`w-full h-80 sm:h-96 object-cover transition-all duration-500 group-hover:scale-102 ${
                    imageLoaded ? 'opacity-100' : 'opacity-90'
                  }`}
                  onLoad={() => setImageLoaded(true)}
                  onError={() => setImageError(true)}
                  referrerPolicy="no-referrer"
                />
              ) : (
                <div className="w-full h-80 sm:h-96 bg-gradient-to-br from-rose-100 via-rose-50 to-pink-100 flex flex-col items-center justify-center p-6 text-center space-y-3">
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-3xl">
                    📖
                  </div>
                  <div 
                    dir="rtl" 
                    lang="ar" 
                    className="font-arabic text-2xl text-rose-700 font-bold"
                  >
                    اللَّهُمَّ اجْعَلِ الْقُرْآنَ رَبِيعَ قُلُوبِنَا
                  </div>
                  <p className="text-xs text-rose-800 font-medium max-w-xs">
                    Kelas Iqra' & Mengaji Al-Quran Online Bersama Guru Bertauliah
                  </p>
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-rose-950/50 via-transparent to-transparent pointer-events-none" />

              {/* Floating quote badge */}
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-rose-200 text-slate-800 shadow-sm text-center">
                <div 
                  className="text-base sm:text-lg text-rose-700 font-bold leading-normal" 
                  dir="rtl" 
                  lang="ar"
                  style={{ fontFamily: "'Amiri', serif" }}
                >
                  اللَّهُمَّ اجْعَلِ الْقُرْآنَ رَبِيعَ قُلُوبِنَا 🌷
                </div>
                <div className="text-[11px] text-slate-500 mt-1 italic">
                  "Ya Allah, jadikanlah Al-Quran penyejuk dan penenang hati kami."
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
