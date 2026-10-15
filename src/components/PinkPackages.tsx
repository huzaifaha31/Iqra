import { ArrowRight, Check, Heart, Sparkles, BookOpen } from 'lucide-react';

interface PinkPackagesProps {
  onSelectPackage: (packageType: 'iqra' | 'quran') => void;
}

export function PinkPackages({ onSelectPackage }: PinkPackagesProps) {
  return (
    <section id="pakej" className="py-16 sm:py-20 bg-white border-y border-rose-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-rose-600 text-xs font-bold uppercase tracking-wider mb-2 border border-rose-200">
            <span>📚 PAKEJ KELAS BULANAN</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight" style={{ textWrap: 'balance' }}>
            Pilihan Kelas Mengikut Tahap & Keperluan Anda
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Terbuka kepada kanak-kanak, remaja mahupun dewasa yang ingin belajar dari rumah dengan selesa.
          </p>
        </div>

        {/* 2 Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Card 1: Kelas Iqra' */}
          <div className="relative rounded-2xl bg-[#FFFBFB] border-2 border-rose-200 p-6 sm:p-8 flex flex-col justify-between hover:shadow-lg hover:shadow-rose-100/60 transition-all group">
            <div className="space-y-5">
              
              <div className="flex items-center justify-between">
                <span className="text-3xl">🌱</span>
                <span className="text-xs font-bold text-rose-600 bg-rose-100/80 px-2.5 py-1 rounded-full">
                  Asas Sifar ke Lancar
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Kelas Iqra' (Asas)
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                  Khusus untuk yang belum kenal huruf atau ingin memulakan pembelajaran Al-Quran daripada asas Kaedah Iqra'.
                </p>
              </div>

              {/* What's offered */}
              <div className="pt-2 border-t border-rose-100 space-y-2.5">
                <div className="text-xs font-bold text-rose-900 uppercase tracking-wider">
                  Kelebihan & Modul:
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                    <Check className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <span>Mengenal 29 huruf hijaiyyah & sebutan makhraj</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                    <Check className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <span>Latihan menyambung huruf & tanda bacaan</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                    <Check className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <span>Bimbingan sabar satu persatu tanpa rasa tertekan</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 font-medium text-rose-900">
                    <Sparkles className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <span><strong>8 Sesi Sebulan</strong> (2 kali seminggu)</span>
                  </li>
                </ul>
              </div>

              {/* Trial callout */}
              <div className="p-3 bg-rose-50/70 rounded-xl border border-rose-200/60 text-xs text-rose-900 flex items-center gap-2">
                <Heart className="w-4 h-4 text-rose-500 shrink-0 fill-rose-100" />
                <span><strong>Percuma 1 Sesi:</strong> Uji cuba dahulu sebelum buat bayaran!</span>
              </div>

            </div>

            <div className="pt-6">
              <button
                type="button"
                onClick={() => onSelectPackage('iqra')}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-bold text-white bg-rose-500 hover:bg-rose-600 rounded-xl transition-colors shadow-xs cursor-pointer"
              >
                <span>Pilih Kelas Iqra' (Sesi Percuma)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 2: Kelas Al-Quran */}
          <div className="relative rounded-2xl bg-[#FFFBFB] border-2 border-rose-300 p-6 sm:p-8 flex flex-col justify-between hover:shadow-lg hover:shadow-rose-100/60 transition-all group">
            <div className="space-y-5">
              
              <div className="flex items-center justify-between">
                <span className="text-3xl">📖</span>
                <span className="text-xs font-bold text-rose-700 bg-rose-200/80 px-2.5 py-1 rounded-full">
                  Tahsin & Tajwid
                </span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Kelas Al-Quran (Tahsin)
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                  Khusus untuk yang sudah boleh membaca tetapi ingin memperbaiki bacaan, membetulkan hukum tajwid & melancarkan bacaan.
                </p>
              </div>

              {/* What's offered */}
              <div className="pt-2 border-t border-rose-100 space-y-2.5">
                <div className="text-xs font-bold text-rose-900 uppercase tracking-wider">
                  Kelebihan & Modul:
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                    <Check className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <span>Pembetulan hukum tajwid praktikal & makhraj</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                    <Check className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <span>Talaqqi surah-surah lazim & surah amalan harian</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                    <Check className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <span>Bimbingan rentak tartil & wakaf ibtida' yang betul</span>
                  </li>
                  <li className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 font-medium text-rose-900">
                    <Sparkles className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <span><strong>8 Sesi Sebulan</strong> (2 kali seminggu)</span>
                  </li>
                </ul>
              </div>

              {/* Trial callout */}
              <div className="p-3 bg-rose-50/70 rounded-xl border border-rose-200/60 text-xs text-rose-900 flex items-center gap-2">
                <Heart className="w-4 h-4 text-rose-500 shrink-0 fill-rose-100" />
                <span><strong>Percuma 1 Sesi:</strong> Rasai keselesaan bimbingan secara santai.</span>
              </div>

            </div>

            <div className="pt-6">
              <button
                type="button"
                onClick={() => onSelectPackage('quran')}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-bold text-white bg-rose-600 hover:bg-rose-700 rounded-xl transition-colors shadow-xs cursor-pointer"
              >
                <span>Pilih Kelas Al-Quran (Sesi Percuma)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Feature Highlights Grid */}
        <div id="keistimewaan" className="mt-14 pt-12 border-t border-rose-100">
          <div className="text-center mb-8">
            <span className="text-xs font-bold text-rose-600 uppercase tracking-wider">
              ✨ APA YANG DITAWARKAN?
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-rose-50/50 border border-rose-100 text-center space-y-1.5">
              <div className="text-2xl">🗓️</div>
              <div className="text-sm font-bold text-slate-900">8 Sesi Sebulan</div>
              <div className="text-xs text-slate-600">Jadual konsisten setiap bulan untuk perkembangan lancar.</div>
            </div>

            <div className="p-4 rounded-xl bg-rose-50/50 border border-rose-100 text-center space-y-1.5">
              <div className="text-2xl">⏰</div>
              <div className="text-sm font-bold text-slate-900">2 Kali Seminggu</div>
              <div className="text-xs text-slate-600">Tempoh dan kekerapan optimum tanpa membebankan masa.</div>
            </div>

            <div className="p-4 rounded-xl bg-rose-50/50 border border-rose-100 text-center space-y-1.5">
              <div className="text-2xl">💻</div>
              <div className="text-sm font-bold text-slate-900">Secara Online</div>
              <div className="text-xs text-slate-600">Dari keselesaan rumah melalui Google Meet / Zoom HD.</div>
            </div>

            <div className="p-4 rounded-xl bg-rose-50/50 border border-rose-200 text-center space-y-1.5 bg-rose-100/40">
              <div className="text-2xl">🌸</div>
              <div className="text-sm font-bold text-rose-900">Cuba 1 Sesi Percuma!</div>
              <div className="text-xs text-rose-800">Puas hati baru buat bayaran yuran bulanan. Tiada paksaan.</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
