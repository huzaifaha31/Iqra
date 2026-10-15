import { useState } from 'react';
import { PROGRAM_PACKAGES } from '../data/mockData';
import { StudentCategory, ClassFormat, FrequencyOption } from '../types';
import { Check, ArrowRight, Clock, Users, User, ShieldCheck } from 'lucide-react';

interface ProgramsSectionProps {
  onSelectPackage: (packageId: string, format: ClassFormat, frequency: FrequencyOption) => void;
}

export function ProgramsSection({ onSelectPackage }: ProgramsSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<StudentCategory | 'semua'>('semua');
  const [selectedFormat, setSelectedFormat] = useState<ClassFormat>('one-on-one');
  const [selectedFrequency, setSelectedFrequency] = useState<FrequencyOption>('2x');

  const filteredPackages = PROGRAM_PACKAGES.filter((pkg) => {
    if (selectedCategory === 'semua') return true;
    return pkg.targetCategory === selectedCategory || pkg.targetCategory === 'semua';
  });

  return (
    <section id="program" className="py-16 sm:py-20 bg-neutral-50/60 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-1">
            Pakej & Sukatan Pengajian
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight" style={{ textWrap: 'balance' }}>
            Pilih Program Yang Bersesuaian Mengikut Tahap & Matlamat Anda
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Setiap program direka khusus dengan modul berperingkat, silibus musyafahah yang jelas, dan bimbingan guru yang sabar serta bertauliah.
          </p>
        </div>

        {/* Interactive Filter Controls & Configuration Deck */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl border border-neutral-200 shadow-xs mb-10 space-y-5">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            
            {/* Category Filter Tabs */}
            <div className="space-y-1.5">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Kategori Pelajar:
              </span>
              <div className="flex flex-wrap items-center gap-1.5 p-1 bg-neutral-100 rounded-xl">
                <button
                  type="button"
                  onClick={() => setSelectedCategory('semua')}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                    selectedCategory === 'semua'
                      ? 'bg-emerald-800 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Semua Program
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedCategory('kanak-kanak')}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                    selectedCategory === 'kanak-kanak'
                      ? 'bg-emerald-800 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Kanak-kanak (4-12 Thn)
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedCategory('dewasa')}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                    selectedCategory === 'dewasa'
                      ? 'bg-emerald-800 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Dewasa (18-55 Thn)
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedCategory('warga-emas')}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                    selectedCategory === 'warga-emas'
                      ? 'bg-emerald-800 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Warga Emas (55+ Thn)
                </button>
              </div>
            </div>

            {/* Class Format & Frequency Toggle Controls */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-4">
              
              {/* Format Toggle */}
              <div className="space-y-1.5">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Bentuk Sesi:
                </span>
                <div className="flex items-center gap-1 p-1 bg-neutral-100 rounded-xl">
                  <button
                    type="button"
                    onClick={() => setSelectedFormat('one-on-one')}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                      selectedFormat === 'one-on-one'
                        ? 'bg-emerald-800 text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <User className="w-3.5 h-3.5" />
                    <span>1-on-1 Peribadi</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedFormat('group')}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                      selectedFormat === 'group'
                        ? 'bg-emerald-800 text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <Users className="w-3.5 h-3.5" />
                    <span>Kumpulan (3-4 Org)</span>
                  </button>
                </div>
              </div>

              {/* Frequency Toggle */}
              <div className="space-y-1.5">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Kekerapan Seminggu:
                </span>
                <div className="flex items-center gap-1 p-1 bg-neutral-100 rounded-xl">
                  <button
                    type="button"
                    onClick={() => setSelectedFrequency('2x')}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                      selectedFrequency === '2x'
                        ? 'bg-emerald-800 text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    2x (8 Sesi/Bln)
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedFrequency('3x')}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                      selectedFrequency === '3x'
                        ? 'bg-emerald-800 text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    3x (12 Sesi/Bln)
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedFrequency('4x')}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                      selectedFrequency === '4x'
                        ? 'bg-emerald-800 text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    4x (16 Sesi/Bln)
                  </button>
                </div>
              </div>

            </div>

          </div>

          <div className="pt-2 text-xs text-slate-500 border-t border-neutral-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              <span>Semua pakej merangkumi sesi diagnostik awal, modul rujukan digital, dan semakan makhraj.</span>
            </div>
            <div className="hidden sm:block text-slate-400">
              *Yuran dibayar secara bulanan tanpa deposit tersembunyi
            </div>
          </div>

        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPackages.map((pkg) => {
            const price = pkg.monthlyPricing[selectedFormat === 'one-on-one' ? 'oneOnOne' : 'group'][selectedFrequency];

            return (
              <div
                key={pkg.id}
                className="flex flex-col justify-between bg-white rounded-2xl border border-neutral-200 hover:border-emerald-700 hover:shadow-md transition-all duration-200 overflow-hidden"
              >
                <div className="p-6 space-y-4">
                  {/* Clean unboxed metadata kicker */}
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <span className="font-semibold text-emerald-800 uppercase tracking-wider">{pkg.ageRange}</span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1 font-mono tabular-nums">
                      <Clock className="w-3 h-3 text-slate-400" />
                      {pkg.durationMinutes} min/sesi
                    </span>
                  </div>

                  {/* Program Title */}
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                      {pkg.name}
                    </h3>
                    <p className="text-xs text-slate-600 mt-1 font-medium leading-relaxed">
                      {pkg.tagline}
                    </p>
                  </div>

                  {/* Price display with tabular-nums */}
                  <div className="pt-2 pb-3 border-y border-neutral-100">
                    <div className="flex items-baseline gap-1">
                      <span className="text-xs text-slate-500 font-medium">RM</span>
                      <span className="text-3xl font-extrabold text-slate-900 font-mono tabular-nums">
                        {price}
                      </span>
                      <span className="text-xs text-slate-500">/bulan</span>
                    </div>
                    <div className="text-xs text-emerald-800 font-medium mt-1">
                      {selectedFormat === 'one-on-one' ? 'Sesi Peribadi 1-on-1' : 'Kumpulan Kecil'} ({selectedFrequency === '2x' ? '8 sesi' : selectedFrequency === '3x' ? '12 sesi' : '16 sesi'})
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2.5">
                    <div className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                      Kelebihan Bimbingan:
                    </div>
                    <ul className="space-y-2">
                      {pkg.highlightFeatures.slice(0, 3).map((feat, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-600 leading-snug">
                          <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Syllabus Preview summary */}
                  <div className="pt-2">
                    <div className="text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      Fokus Utama:
                    </div>
                    <div className="text-xs text-slate-500 leading-relaxed bg-neutral-50 p-2.5 rounded-lg border border-neutral-100">
                      {pkg.recommendedFor}
                    </div>
                  </div>
                </div>

                {/* Card Action */}
                <div className="p-6 pt-0">
                  <button
                    type="button"
                    onClick={() => onSelectPackage(pkg.id, selectedFormat, selectedFrequency)}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold text-emerald-900 bg-emerald-50 hover:bg-emerald-800 hover:text-white rounded-lg transition-colors border border-emerald-200 cursor-pointer"
                  >
                    <span>Daftar Pakej Ini</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
