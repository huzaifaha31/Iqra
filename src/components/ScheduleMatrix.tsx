import { useState } from 'react';
import { Clock, Calendar, Check, Laptop } from 'lucide-react';

export function ScheduleMatrix() {
  const [selectedSlot, setSelectedSlot] = useState<'pagi' | 'petang' | 'malam'>('malam');

  const slots = [
    {
      id: 'pagi' as const,
      label: 'Sesi Pagi (08:30 - 11:30)',
      target: 'Sesuai untuk kanak-kanak prasekolah, pelajar home-schooling & pesara warga emas.',
      times: [
        '08:30 Pagi – 09:10 Pagi',
        '09:20 Pagi – 10:00 Pagi',
        '10:10 Pagi – 10:50 Pagi',
        '11:00 Pagi – 11:40 Pagi'
      ]
    },
    {
      id: 'petang' as const,
      label: 'Sesi Petang (03:00 - 06:00)',
      target: 'Sesuai untuk murid sekolah rendah & menengah selepas tamat sesi persekolahan biasa.',
      times: [
        '03:00 Petang – 03:40 Petang',
        '03:50 Petang – 04:30 Petang',
        '04:40 Petang – 05:20 Petang',
        '05:30 Petang – 06:10 Petang'
      ]
    },
    {
      id: 'malam' as const,
      label: 'Sesi Malam (08:00 - 10:30)',
      target: 'Paling popular! Sesuai untuk keluarga, kanak-kanak & golongan dewasa bekerja.',
      times: [
        '08:00 Malam – 08:40 Malam',
        '08:45 Malam – 09:25 Malam',
        '09:30 Malam – 10:10 Malam',
        '10:15 Malam – 10:55 Malam'
      ]
    }
  ];

  const current = slots.find(s => s.id === selectedSlot)!;

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-1">
            Fleksibiliti Masa & Platform
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight" style={{ textWrap: 'balance' }}>
            Pilihan Jadual Waktu Yang Fleksibel Mengikut Keselesaan Keluarga Anda
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Kelas beroperasi 7 hari seminggu (Isnin hingga Ahad). Anda boleh memilih hari dan slot waktu tetap yang paling memudahkan urusan harian anda.
          </p>
        </div>

        {/* Schedule Selector Box */}
        <div className="bg-neutral-50 rounded-2xl border border-neutral-200 p-6 sm:p-8">
          
          {/* Top Switcher */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            {slots.map((slot) => (
              <button
                key={slot.id}
                type="button"
                onClick={() => setSelectedSlot(slot.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all cursor-pointer ${
                  selectedSlot === slot.id
                    ? 'bg-emerald-800 text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-neutral-100 border border-neutral-200'
                }`}
              >
                {slot.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Slot Description and Times */}
            <div className="lg:col-span-7 space-y-4">
              <div className="text-sm font-medium text-slate-700">
                {current.target}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {current.times.map((time, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 p-3.5 rounded-xl bg-white border border-neutral-200 shadow-2xs"
                  >
                    <Clock className="w-4 h-4 text-emerald-800 shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 font-mono tabular-nums">
                      {time}
                    </span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200/80 text-xs text-slate-700 space-y-1">
                <div className="font-semibold text-emerald-950 flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-emerald-800" />
                  <span>Kombinasi Hari Bebas Dipilih:</span>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Contoh: Isnin & Rabu, Selasa & Khamis, Jumaat & Ahad, atau slot hujung minggu sahaja (Sabtu & Ahad).
                </p>
              </div>
            </div>

            {/* How Online Class Works Infobox */}
            <div className="lg:col-span-5 bg-white p-5 rounded-xl border border-neutral-200 space-y-4">
              <div className="text-xs font-semibold text-emerald-800 uppercase tracking-wider flex items-center gap-1.5">
                <Laptop className="w-4 h-4" />
                <span>Cara Kelas Beroperasi</span>
              </div>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5 text-xs text-slate-600 leading-snug">
                  <Check className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-800">1. Pautan Google Meet Peribadi:</span> Setiap pelajar menerima bilik Google Meet khas yang tetap melalui WhatsApp.
                  </div>
                </li>
                <li className="flex items-start gap-2.5 text-xs text-slate-600 leading-snug">
                  <Check className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-800">2. Paparan Teks Skrin Besar:</span> Guru memaparkan muka surat Iqra' atau Mushaf Quran resolusi tinggi di skrin.
                  </div>
                </li>
                <li className="flex items-start gap-2.5 text-xs text-slate-600 leading-snug">
                  <Check className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-800">3. Bimbingan & Pembetulan Terus:</span> Guru mendengar dan memperbetulkan makhraj serta hukum tajwid sebaris demi sebaris.
                  </div>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
