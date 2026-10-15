import { useState } from 'react';
import { RegistrationRecord } from '../types';
import { Search, Video, MessageCircle, Calendar, ArrowRight } from 'lucide-react';

interface StatusCheckerProps {
  registrations: RegistrationRecord[];
  onOpenReceipt: (record: RegistrationRecord) => void;
  onOpenRegister: () => void;
}

export function StatusChecker({ registrations, onOpenReceipt, onOpenRegister }: StatusCheckerProps) {
  const [query, setQuery] = useState('');
  const [searched, setSearched] = useState(false);
  const [result, setResult] = useState<RegistrationRecord | null>(null);

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const cleanQuery = query.trim().toLowerCase().replace(/[-\s]/g, '');
    
    if (!cleanQuery) {
      setResult(null);
      setSearched(false);
      return;
    }

    const found = registrations.find(r => {
      const matchId = r.id.toLowerCase().replace(/[-\s]/g, '').includes(cleanQuery);
      const matchPhone = r.whatsapp.replace(/[-\s]/g, '').includes(cleanQuery);
      const matchName = r.studentName.toLowerCase().includes(cleanQuery);
      return matchId || matchPhone || matchName;
    });

    setResult(found || null);
    setSearched(true);
  };

  const setSampleQuery = (val: string) => {
    setQuery(val);
    const found = registrations.find(r => r.id === val || r.whatsapp === val);
    setResult(found || null);
    setSearched(true);
  };

  return (
    <section id="semakan" className="py-16 sm:py-20 bg-neutral-50/60 border-b border-neutral-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-1">
            Portal Semakan Pelajar & Penjaga
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight" style={{ textWrap: 'balance' }}>
            Semak Status Pendaftaran Kelas Mengaji Online Anda
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Masukkan No. Rujukan pendaftaran (cth: AFQ-2026-8921) atau Nombor Telefon WhatsApp yang didaftarkan.
          </p>
        </div>

        {/* Search Box */}
        <div className="bg-white rounded-2xl border border-neutral-200 p-6 sm:p-8 shadow-xs space-y-4">
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  if (searched) setSearched(false);
                }}
                placeholder="Contoh: AFQ-2026-8921 atau 0123456789"
                className="w-full pl-11 pr-4 py-3 bg-neutral-50 focus:bg-white text-sm rounded-xl border border-neutral-300 focus:outline-hidden focus:ring-2 focus:ring-emerald-700/30 font-mono"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 text-sm font-bold text-white bg-emerald-800 hover:bg-emerald-900 rounded-xl transition-colors shadow-xs cursor-pointer whitespace-nowrap"
            >
              Cari Pendaftaran
            </button>
          </form>

          {/* Quick sample buttons for testability */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 pt-1">
            <span className="font-medium text-slate-700">Contoh Ujian Pantas:</span>
            <button
              type="button"
              onClick={() => setSampleQuery('AFQ-2026-8921')}
              className="px-2.5 py-1 bg-neutral-100 hover:bg-neutral-200 text-slate-700 rounded-lg font-mono transition-colors cursor-pointer"
            >
              AFQ-2026-8921
            </button>
            <button
              type="button"
              onClick={() => setSampleQuery('0198765432')}
              className="px-2.5 py-1 bg-neutral-100 hover:bg-neutral-200 text-slate-700 rounded-lg font-mono transition-colors cursor-pointer"
            >
              0198765432
            </button>
          </div>

          {/* Search Result */}
          {searched && (
            <div className="pt-6 border-t border-neutral-200">
              {result ? (
                <div className="bg-neutral-50 rounded-xl border border-neutral-200 p-5 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-neutral-200">
                    <div>
                      <div className="text-xs text-slate-500">No Rujukan:</div>
                      <div className="text-base font-bold font-mono text-emerald-950">{result.id}</div>
                    </div>
                    <div>
                      <span className="inline-flex items-center px-3 py-1 text-xs font-semibold rounded-lg bg-emerald-100 text-emerald-900 border border-emerald-200">
                        ● {result.status}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div>
                      <span className="text-slate-400 block">Nama Pelajar:</span>
                      <span className="font-bold text-slate-800">{result.studentName} ({result.age} thn)</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block">Program:</span>
                      <span className="font-semibold text-emerald-900">{result.packageName}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block">Format:</span>
                      <span className="font-medium text-slate-700">
                        {result.classFormat === 'one-on-one' ? '1-on-1 Peribadi' : 'Kumpulan Kecil'} ({result.frequency} seminggu)
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-400 block">Jadual Tetap:</span>
                      <span className="font-medium text-slate-700">{result.preferredDays.join(', ')} · {result.timeSlotDetail}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block">Ustaz / Ustazah:</span>
                      <span className="font-semibold text-slate-800">{result.assignedTeacher || 'Sedang Diatur'}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block">Yuran Bulanan:</span>
                      <span className="font-mono font-bold text-emerald-900">RM{result.monthlyFee}/bulan</span>
                    </div>
                  </div>

                  {/* Google Meet & Trial Date */}
                  <div className="p-3.5 rounded-lg bg-white border border-neutral-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="space-y-0.5">
                      <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-emerald-800" />
                        <span>Sesi Percubaan / Kelas Seterusnya:</span>
                      </div>
                      <div className="text-xs text-slate-600 font-medium">
                        {result.firstTrialDate || 'Hubungi admin untuk penetapan tarikh'}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {result.meetLink && (
                        <a
                          href={result.meetLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-semibold rounded-lg transition-colors shadow-2xs whitespace-nowrap"
                        >
                          <Video className="w-3.5 h-3.5" />
                          <span>Bilik Google Meet</span>
                        </a>
                      )}
                      <button
                        type="button"
                        onClick={() => onOpenReceipt(result)}
                        className="px-3 py-1.5 bg-neutral-100 hover:bg-neutral-200 text-slate-700 text-xs font-semibold rounded-lg border border-neutral-300 transition-colors whitespace-nowrap cursor-pointer"
                      >
                        Lihat Slip
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-6 space-y-3">
                  <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-800 mx-auto flex items-center justify-center">
                    <Search className="w-5 h-5" />
                  </div>
                  <div className="text-sm font-bold text-slate-800">
                    Rekod pendaftaran tidak dijumpai
                  </div>
                  <p className="text-xs text-slate-500 max-w-sm mx-auto">
                    Sila pastikan No. Rujukan atau Nombor WhatsApp betul, atau anda boleh membuat pendaftaran baru sekarang.
                  </p>
                  <div>
                    <button
                      type="button"
                      onClick={onOpenRegister}
                      className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-emerald-900 bg-emerald-50 hover:bg-emerald-100 rounded-lg border border-emerald-200 transition-colors cursor-pointer"
                    >
                      <span>Buka Borang Pendaftaran Baru</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

        </div>

        {/* Support Help Contact */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 px-2 gap-2">
          <span>Perlukan bantuan teknikal atau pertukaran guru?</span>
          <a
            href="https://wa.me/601155523456"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-semibold text-emerald-800 hover:underline"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Hubungi Meja Bantuan WhatsApp Akademi</span>
          </a>
        </div>

      </div>
    </section>
  );
}
