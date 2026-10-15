import { ArrowRight, CheckCircle2, Video, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenRegister: () => void;
  onOpenQuiz: () => void;
}

export function Hero({ onOpenRegister, onOpenQuiz }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-18">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Subtle text kicker (no pill capsules) */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-emerald-800 uppercase">
              <span>Bimbingan Mengaji Online Bertauliah</span>
              <span aria-hidden="true" className="text-neutral-400">·</span>
              <span className="text-neutral-600">Sesi Google Meet & Zoom</span>
            </div>

            {/* Display Headline with balanced wrapping */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight lg:leading-[1.15]" style={{ textWrap: 'balance' }}>
              Kuasai Bacaan Iqra' & Al-Quran Secara Online Dari Rumah Bersama Guru Bertauliah
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Platform bimbingan mengaji bersanad untuk kanak-kanak, dewasa, dan warga emas. Kaedah mudah faham, makhraj tepat, masa fleksibel, dan kelas 1-on-1 peribadi yang menjaga privasi.
            </p>

            {/* Value bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="flex items-center gap-2.5 text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Boleh pilih Ustaz atau Ustazah</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Pilihan jadual pagi, petang & malam</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Modul Iqra' Jilid 1 hingga 6 & Al-Quran</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Percuma Sesi Suai Kenal & Diagnostik</span>
              </div>
            </div>

            {/* Primary & Secondary Action buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-3">
              <button
                type="button"
                onClick={onOpenRegister}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-emerald-800 hover:bg-emerald-900 rounded-lg transition-colors shadow-sm whitespace-nowrap cursor-pointer"
              >
                <span>Daftar Sekarang (Pendaftaran Dibuka)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <button
                type="button"
                onClick={onOpenQuiz}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-700 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors border border-neutral-300 whitespace-nowrap cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-emerald-700" />
                <span>Ujian Tahap Bacaan Percuma</span>
              </button>
            </div>

            {/* Quiet metadata line */}
            <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
              <span>Yuran bermula serendah RM70/bulan</span>
              <span aria-hidden="true">·</span>
              <span>Tiada kontrak terikat</span>
              <span aria-hidden="true">·</span>
              <span>Bimbingan seluruh Malaysia & Luar Negara</span>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-200 shadow-md bg-neutral-900 group">
              <img
                src="/src/assets/images/hero_quran_recitation_1792080420491.jpg"
                alt="Sesi pembelajaran mengaji online Al-Quran dengan rehal kayu dan peranti tablet"
                className="w-full h-84 sm:h-96 lg:h-[460px] object-cover transition-transform duration-500 group-hover:scale-102"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />
              
              {/* Bottom media caption overlay */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/90 backdrop-blur-md border border-white/60 text-slate-900 shadow-sm">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-xs font-semibold text-emerald-800 uppercase tracking-wider">
                      Kaedah Musyafahah Maya
                    </div>
                    <div className="text-sm font-bold text-slate-900 mt-0.5">
                      Talaqqi 1-on-1 Bersemuka Skrin HD
                    </div>
                    <div className="text-xs text-slate-600 mt-0.5">
                      Guru memperbetulkan makhraj bibir, lidah & harakat secara langsung.
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-emerald-800 text-amber-300 flex items-center justify-center shrink-0">
                    <Video className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Full-width KPI and Social Proof Row below hero split */}
        <div className="mt-12 pt-8 border-t border-neutral-200 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-bold font-mono text-slate-900 tabular-nums">
              5,400+
            </div>
            <div className="text-xs text-slate-500 font-medium">
              Pelajar Berjaya Khatam Iqra' & Quran
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-bold font-mono text-slate-900 tabular-nums">
              100%
            </div>
            <div className="text-xs text-slate-500 font-medium">
              Asatizah Pemegang Sanad & Tauliah
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-bold font-mono text-slate-900 tabular-nums">
              4.9 / 5.0
            </div>
            <div className="text-xs text-slate-500 font-medium">
              Kepuasan Ibu Bapa & Pelajar Dewasa
            </div>
          </div>

          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-bold font-mono text-slate-900 tabular-nums">
              7 Hari
            </div>
            <div className="text-xs text-slate-500 font-medium">
              Pilihan Waktu Fleksibel (Pagi, Petang, Malam)
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
