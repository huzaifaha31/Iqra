import { useState } from 'react';
import { SimpleRegistration } from './PinkRegistrationForm';
import { Search, Calendar, MessageCircle, Heart } from 'lucide-react';

interface PinkStatusLookupProps {
  registrations: SimpleRegistration[];
  onOpenRegister: () => void;
}

export function PinkStatusLookup({ registrations, onOpenRegister }: PinkStatusLookupProps) {
  const [query, setQuery] = useState('');
  const [searched, setSearched] = useState(false);
  const [result, setResult] = useState<SimpleRegistration | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = query.trim().toLowerCase().replace(/[-\s]/g, '');
    if (!clean) {
      setResult(null);
      setSearched(false);
      return;
    }

    const found = registrations.find(r => 
      r.id.toLowerCase().replace(/[-\s]/g, '').includes(clean) ||
      r.whatsapp.replace(/[-\s]/g, '').includes(clean) ||
      r.name.toLowerCase().includes(clean)
    );

    setResult(found || null);
    setSearched(true);
  };

  return (
    <section id="semakan" className="py-14 bg-white border-b border-rose-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-8 space-y-1.5">
          <div className="inline-flex items-center gap-1 text-xs font-bold text-rose-600 bg-rose-50 px-2.5 py-1 rounded-full uppercase tracking-wider">
            <span>🔍 SEMAKAN TEMPAHAN SLOT</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Semak Status Pendaftaran Kelas Anda
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Masukkan No. Telefon WhatsApp atau No. Rujukan yang telah didaftarkan.
          </p>
        </div>

        {/* Search Input */}
        <div className="bg-[#FFFBFB] p-5 sm:p-6 rounded-2xl border border-rose-200/80 shadow-2xs space-y-4">
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-2.5">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-rose-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  if (searched) setSearched(false);
                }}
                placeholder="Contoh: 0102955726 atau JN-2026-..."
                className="w-full pl-10 pr-3 py-2.5 bg-white text-xs sm:text-sm rounded-xl border border-rose-200 focus:outline-hidden focus:ring-2 focus:ring-rose-400 font-mono"
              />
            </div>
            <button
              type="submit"
              className="px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-rose-500 hover:bg-rose-600 rounded-xl transition-colors shadow-2xs cursor-pointer whitespace-nowrap"
            >
              Semak Slot
            </button>
          </form>

          {searched && (
            <div className="pt-4 border-t border-rose-100">
              {result ? (
                <div className="p-4 rounded-xl bg-rose-50/70 border border-rose-200 text-xs space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-rose-200/60">
                    <div>
                      <span className="text-slate-400">No. Rujukan: </span>
                      <span className="font-mono font-bold text-rose-900">{result.id}</span>
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full bg-rose-200 text-rose-800 font-semibold text-[11px]">
                      Slot Sesi Percuma Ditempah
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-700">
                    <div><strong>Nama:</strong> {result.name}</div>
                    <div><strong>Pakej:</strong> {result.classType === 'iqra' ? 'Kelas Iqra\' (Asas)' : 'Kelas Al-Quran (Tahsin)'}</div>
                    <div><strong>Waktu Pilihan:</strong> {result.preferredTime}</div>
                    <div><strong>Kekerapan:</strong> 8 Sesi / Bulan (2x seminggu)</div>
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-slate-500">Tarikh daftar: {result.submittedAt}</span>
                    <a
                      href={`https://wa.me/60102955726?text=${encodeURIComponent(`Salam Admin, saya ingin semak status slot untuk rujukan ${result.id} (${result.name})`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-700 hover:underline"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                      <span>WhatsApp Admin</span>
                    </a>
                  </div>
                </div>
              ) : (
                <div className="text-center py-4 space-y-2">
                  <p className="text-xs text-slate-500">
                    Tiada rekod ditemui untuk carian ini. Anda boleh terus mendaftar sesi percuma sekarang!
                  </p>
                  <button
                    type="button"
                    onClick={onOpenRegister}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-600 hover:underline cursor-pointer"
                  >
                    <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-100" />
                    <span>Daftar Sesi Percuma</span>
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
