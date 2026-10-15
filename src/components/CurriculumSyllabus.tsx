import { useState } from 'react';
import { Award, BookMarked, GraduationCap } from 'lucide-react';

export function CurriculumSyllabus() {
  const [activeTab, setActiveTab] = useState<'iqra' | 'tahsin'>('iqra');

  const iqraStages = [
    {
      jilid: 'Jilid 1',
      title: 'Huruf Hijaiyyah Tunggal',
      arabic: 'ا ب ت ث ج ح خ',
      desc: 'Mengenali 29 huruf hijaiyyah dengan tepat dari segi makhraj makharijul huruf (kerongkong, bibir, lidah). Tiada mengeja, terus sebut bunyi pendek satu harakat.',
      milestone: 'Boleh membunyikan semua huruf tunggal dengan fasih.'
    },
    {
      jilid: 'Jilid 2',
      title: 'Bentuk Huruf Bersambung',
      arabic: 'بـ ـبـ ـب',
      desc: 'Memahami perubahan bentuk huruf apabila berada di awal, di tengah, dan di akhir perkataan arab serta perbezaan titik huruf seiras.',
      milestone: 'Mengenal pasti huruf bercantum dalam rangkai kata 2 ke 3 huruf.'
    },
    {
      jilid: 'Jilid 3',
      title: 'Baris Fathah, Kasrah, Dhommah & Mad Asli',
      arabic: 'بَ بِ بُ - بَا بِي بُو',
      desc: 'Kuasai sebutan baris atas, bawah, hadapan dan membezakan sebutan pendek (1 harakat) dengan sebutan panjang (Mad Asli 2 harakat).',
      milestone: 'Tiada lagi masalah tertukar bunyi panjang dan pendek.'
    },
    {
      jilid: 'Jilid 4',
      title: 'Tanda Tanwin (Baris Dua)',
      arabic: 'ـً ـٍ ـٌ',
      desc: 'Latihan membaca bunyi tanwin fathatain, kasratain, dan dhommatain secara lancar berangkai tanpa melambat-lambatkan sebutan.',
      milestone: 'Kelajuan membaca bertambah pantas dan natural.'
    },
    {
      jilid: 'Jilid 5',
      title: 'Tanda Sukun (Mati) & Qalqalah',
      arabic: 'ـْ (أَبْ ، أَجْ)',
      desc: 'Memahami huruf mati, getaran lantunan qalqalah (Qaf, Tha, Ba, Jim, Dal), dan dengung asas pada huruf mim serta nun.',
      milestone: 'Menguasai hentian makhraj huruf mati dengan tepat.'
    },
    {
      jilid: 'Jilid 6',
      title: 'Sabdu (Tasydid), Waqaf & Masuk Al-Quran',
      arabic: 'ـّ (إِنَّ ، رَبِّ)',
      desc: 'Penguasaan huruf bersabdu, dengung Ghunnah, tanda waqaf berhenti, dan peralihan rasmi ke Mushaf Al-Quran Rasm Uthmani.',
      milestone: 'Khatam Kaedah Iqra\' dan dianugerahkan Sijil Tamat Asas.'
    }
  ];

  const tahsinStages = [
    {
      title: '01. Makharijul Huruf & Sifat',
      desc: 'Mempelajari 17 tempat keluar huruf dan sifat-sifat huruf seperti Hams, Jahr, Isti\'la\', dan Tafkhim/Tarqiq secara amali.'
    },
    {
      title: '02. Hukum Nun Sakinah & Tanwin',
      desc: 'Izhar Halqi, Idgham Ma\'al Ghunnah, Idgham Bila Ghunnah, Iqlab, dan 15 huruf Ikhfa\' Haqiqi dengan ketukan dengung 2 harakat yang tepat.'
    },
    {
      title: '03. Hukum Mim Sakinah & Idgham Mutamathilain',
      desc: 'Ikhfa\' Syafawi, Idgham Mithlain Saghir, dan Izhar Syafawi dalam Mushaf.'
    },
    {
      title: '04. Bahagian Mad (Asli & Far\'i)',
      desc: 'Mad Jaiz Munfasil, Mad Wajib Muttasil, Mad Silah, Mad Badal, Mad \'Aridh Lissukun, dan Mad Lazim 6 harakat.'
    },
    {
      title: '05. Waqaf, Ibtida\' & Rasm Uthmani',
      desc: 'Memahami simbol waqaf (Lazim, Jaiz, Qila, Kafi) dan cara memulakan bacaan semula tanpa merosakkan makna ayat.'
    }
  ];

  return (
    <section id="sukatan" className="py-16 sm:py-20 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-1">
              Silibus Rasmi & Kaedah Pembelajaran
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight" style={{ textWrap: 'balance' }}>
              Kurikulum Berstruktur Dari Huruf Pertama Hingga Khatam Al-Quran
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Kaedah terbukti berkesan yang memudahkan kanak-kanak dan dewasa menguasai bacaan dengan pantas tanpa kekeliruan.
            </p>
          </div>

          {/* Tab Selector */}
          <div className="flex items-center gap-1.5 p-1 bg-neutral-100 rounded-xl shrink-0">
            <button
              type="button"
              onClick={() => setActiveTab('iqra')}
              className={`flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                activeTab === 'iqra'
                  ? 'bg-emerald-800 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <BookMarked className="w-4 h-4" />
              <span>Silibus Kaedah Iqra' (Jilid 1-6)</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('tahsin')}
              className={`flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                activeTab === 'tahsin'
                  ? 'bg-emerald-800 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Silibus Al-Quran & Tajwid Sanad</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Iqra Stages */}
        {activeTab === 'iqra' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {iqraStages.map((stage, idx) => (
              <div
                key={idx}
                className="bg-neutral-50/70 rounded-2xl p-6 border border-neutral-200 hover:border-emerald-700 hover:bg-white transition-all space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider font-mono">
                    {stage.jilid}
                  </span>
                  <span className="font-arabic text-lg text-slate-800" dir="rtl">
                    {stage.arabic}
                  </span>
                </div>
                
                <h3 className="text-base font-bold text-slate-900">
                  {stage.title}
                </h3>
                
                <p className="text-xs text-slate-600 leading-relaxed">
                  {stage.desc}
                </p>

                <div className="pt-2 border-t border-neutral-200/80 text-xs text-slate-700 flex items-start gap-2">
                  <Award className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                  <span className="font-medium text-slate-800">{stage.milestone}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Tahsin & Quran Stages with Certificate Visual */}
        {activeTab === 'tahsin' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              {tahsinStages.map((stage, idx) => (
                <div
                  key={idx}
                  className="bg-neutral-50/70 p-5 rounded-xl border border-neutral-200 hover:border-emerald-700 transition-colors"
                >
                  <h3 className="text-sm font-bold text-slate-900">
                    {stage.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {stage.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Certificate Visual Asset Showcase */}
            <div className="lg:col-span-5 space-y-4">
              <div className="rounded-2xl overflow-hidden border border-neutral-200 shadow-md bg-neutral-900 group">
                <img
                  src="/src/assets/images/certificate_talaqqi_quran_1792080419646.jpg"
                  alt="Sijil Pengiktirafan Khatam Al-Quran & Tajwid Rasmi"
                  className="w-full h-72 sm:h-80 object-cover transition-transform duration-500 group-hover:scale-102"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-slate-700 space-y-1">
                <div className="font-bold text-emerald-950 flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-emerald-800" />
                  <span>Pensijilan Khatam & Pengiktirafan Rasmi</span>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Setiap pelajar yang menamatkan silibus Iqra' atau mengkhatamkan 30 Juzuk Al-Quran bersama guru akan menerima Sijil Pengiktirafan Rasmi Akademi berserta laporan penilaian makhraj & tajwid.
                </p>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
