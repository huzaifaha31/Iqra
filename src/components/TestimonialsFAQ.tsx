import { useState } from 'react';
import { TESTIMONIALS_DATA, FAQS_DATA } from '../data/mockData';
import { ChevronDown, Quote, CheckCircle2 } from 'lucide-react';

export function TestimonialsFAQ() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Testimonials Sub-section */}
        <div className="mb-20">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-1">
              Bukti Kejayaan & Maklum Balas
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight" style={{ textWrap: 'balance' }}>
              Dipercayai Oleh Ribuan Keluarga & Pelajar Di Seluruh Malaysia
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Kisah benar pelajar yang bermula dari mengenal huruf sehinggalah lancar membaca ayat suci Al-Quran dengan tartil.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS_DATA.map((t, idx) => (
              <div
                key={idx}
                className="bg-neutral-50/70 p-6 rounded-2xl border border-neutral-200 flex flex-col justify-between hover:border-emerald-700 transition-colors"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-slate-400">
                    <Quote className="w-6 h-6 text-emerald-800/40" />
                    <span className="text-xs font-semibold text-emerald-800">
                      {t.packageUsed}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                    "{t.comment}"
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-neutral-200/80 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                    <span>{t.name}</span>
                  </div>
                  <div className="text-[11px] text-slate-500">
                    {t.role}
                  </div>
                  <div className="text-[11px] text-emerald-800 font-medium">
                    {t.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Sub-section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-1">
              Soalan Lazim (FAQ)
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Pertanyaan Kerap Mengenai Kelas Mengaji Online
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Segala maklumat yang anda perlukan sebelum mendaftarkan diri atau anak anda.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS_DATA.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;

              return (
                <div
                  key={idx}
                  className="rounded-xl border border-neutral-200 overflow-hidden bg-neutral-50/50 transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between gap-4 p-4 sm:p-5 text-left font-bold text-slate-900 text-xs sm:text-sm hover:text-emerald-900 transition-colors cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-emerald-800' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-neutral-200/50 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
