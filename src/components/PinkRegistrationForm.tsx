import { useState, useEffect } from 'react';
import { MessageCircle, Heart, Sparkles, CheckCircle2 } from 'lucide-react';

export interface SimpleRegistration {
  id: string;
  name: string;
  age: string;
  classType: 'iqra' | 'quran';
  whatsapp: string;
  notes: string;
  submittedAt: string;
}

interface PinkRegistrationFormProps {
  selectedClassType: 'iqra' | 'quran';
  onSuccess: (reg: SimpleRegistration) => void;
}

export function PinkRegistrationForm({ selectedClassType, onSuccess }: PinkRegistrationFormProps) {
  const [classType, setClassType] = useState<'iqra' | 'quran'>(selectedClassType);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [notes, setNotes] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    setClassType(selectedClassType);
  }, [selectedClassType]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Sila masukkan nama pelajar.');
      return;
    }
    if (!age.trim()) {
      setError('Sila masukkan umur pelajar.');
      return;
    }
    if (!whatsapp.trim() || whatsapp.replace(/\D/g, '').length < 8) {
      setError('Sila masukkan nombor WhatsApp yang sah.');
      return;
    }

    setError('');
    const randomCode = Math.floor(1000 + Math.random() * 9000);
    const newRecord: SimpleRegistration = {
      id: `JN-2026-${randomCode}`,
      name: name.trim(),
      age: age.trim(),
      classType,
      whatsapp: whatsapp.trim(),
      notes: notes.trim(),
      submittedAt: new Date().toLocaleDateString('ms-MY')
    };

    onSuccess(newRecord);
  };

  // Pre-generate WhatsApp message
  const generateWhatsAppUrl = () => {
    const text = 
      `*PENDAFTARAN SESI PERCUMA KELAS MENGAJI ONLINE*\n` +
      `-----------------------------------------\n` +
      `🌸 Nama Pelajar: *${name || '[Nama Belum Diisi]'}*\n` +
      `🌸 Umur: *${age || '-'}*\n` +
      `🌸 Pilihan Kelas: *${classType === 'iqra' ? 'Kelas Iqra\' (Asas)' : 'Kelas Al-Quran (Tahsin)'}*\n` +
      `🌸 No. WhatsApp: *${whatsapp || '-'}*\n` +
      `${notes ? `🌸 Catatan: *${notes}*\n` : ''}` +
      `-----------------------------------------\n` +
      `Salam Admin, saya berminat untuk cuba 1 sesi percuma mengikut maklumat di atas. Terima kasih! 🤍`;

    return `https://wa.me/60102955726?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="daftar" className="py-16 sm:py-20 bg-[#FFF8F8] border-b border-rose-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-1 text-xs font-bold text-rose-600 bg-rose-100/70 px-3 py-1 rounded-full uppercase tracking-wider">
            <span>📩 BERMINAT UNTUK MENDAFTAR?</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight" style={{ textWrap: 'balance' }}>
            Tempah 1 Sesi Percubaan Percuma Anda Sekarang 🌸
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Jangan tunggu lagi! Isi borang ringkas di bawah atau terus hubungi kami melalui WhatsApp untuk pertanyaan lanjut dan tempahan slot. 💌
          </p>
        </div>

        {/* Card Form */}
        <div className="bg-white rounded-2xl border-2 border-rose-200/80 p-6 sm:p-10 shadow-sm relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-32 h-32 bg-rose-50 rounded-bl-full -z-0 pointer-events-none" />

          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            
            {/* 1. Class Choice */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-rose-950 uppercase tracking-wider">
                1. Pilih Jenis Kelas <span className="text-rose-500">*</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setClassType('iqra')}
                  className={`p-3.5 rounded-xl border-2 text-left flex items-center justify-between transition-all cursor-pointer ${
                    classType === 'iqra'
                      ? 'bg-rose-50/80 border-rose-500 shadow-2xs'
                      : 'bg-white border-rose-100 hover:border-rose-200'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-2xl">🌱</span>
                    <div>
                      <div className="text-sm font-bold text-slate-900">Kelas Iqra' (Asas)</div>
                      <div className="text-xs text-slate-500">Mula dari mengenal huruf & makhraj</div>
                    </div>
                  </div>
                  {classType === 'iqra' && <CheckCircle2 className="w-5 h-5 text-rose-600 shrink-0" />}
                </button>

                <button
                  type="button"
                  onClick={() => setClassType('quran')}
                  className={`p-3.5 rounded-xl border-2 text-left flex items-center justify-between transition-all cursor-pointer ${
                    classType === 'quran'
                      ? 'bg-rose-50/80 border-rose-500 shadow-2xs'
                      : 'bg-white border-rose-100 hover:border-rose-200'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-2xl">📖</span>
                    <div>
                      <div className="text-sm font-bold text-slate-900">Kelas Al-Quran</div>
                      <div className="text-xs text-slate-500">Memperbaiki bacaan & tajwid praktikal</div>
                    </div>
                  </div>
                  {classType === 'quran' && <CheckCircle2 className="w-5 h-5 text-rose-600 shrink-0" />}
                </button>
              </div>
            </div>

            {/* 2. Name & 3. Age */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-rose-950 uppercase tracking-wider">
                  2. Nama Penuh Pelajar <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Contoh: Nur Aisyah / Khairul"
                  className="w-full px-4 py-2.5 bg-rose-50/30 text-sm rounded-xl border border-rose-200 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-rose-400"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-rose-950 uppercase tracking-wider">
                  3. Umur Pelajar <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  placeholder="Contoh: 7 tahun / 28 tahun"
                  className="w-full px-4 py-2.5 bg-rose-50/30 text-sm rounded-xl border border-rose-200 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-rose-400"
                />
              </div>
            </div>

            {/* 4. WhatsApp Number */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-rose-950 uppercase tracking-wider">
                4. No. WhatsApp Untuk Dihubungi <span className="text-rose-500">*</span>
              </label>
              <input
                type="tel"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                placeholder="Contoh: 0102955726"
                className="w-full px-4 py-2.5 bg-rose-50/30 text-sm rounded-xl border border-rose-200 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-rose-400 font-mono"
              />
            </div>

            {/* 5. Short notes */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-rose-950 uppercase tracking-wider">
                5. Catatan Tambahan (Pilihan)
              </label>
              <input
                type="text"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Contoh: Ingin mula daripada huruf Alif, Ba, Ta / Pelajar perempuan mohon Ustazah"
                className="w-full px-4 py-2 bg-rose-50/20 text-sm rounded-xl border border-rose-200 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-rose-400"
              />
            </div>

            {error && (
              <div className="p-3 bg-rose-50 border border-rose-300 rounded-xl text-xs text-rose-700 font-medium">
                ⚠️ {error}
              </div>
            )}

            {/* Trial assurance reminder */}
            <div className="p-3.5 bg-rose-50/60 rounded-xl border border-rose-200 text-xs text-rose-900 flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-rose-500 shrink-0" />
                <span><strong>Ingatan Mesra:</strong> Sesi pertama adalah 100% PERCUMA. Tiada sebarang bayaran diperlukan sebelum anda berpuas hati!</span>
              </div>
              <span className="font-semibold text-rose-700">8 sesi sebulan · 2x seminggu</span>
            </div>

            {/* Form actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <button
                type="submit"
                className="w-full sm:flex-1 flex items-center justify-center gap-2 py-3 px-6 text-sm font-bold text-white bg-rose-500 hover:bg-rose-600 rounded-xl transition-all shadow-md shadow-rose-200 hover:shadow-lg cursor-pointer"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>Daftar Sesi Percuma & Simpan Slot</span>
              </button>

              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-5 text-sm font-bold text-rose-900 bg-rose-100 hover:bg-rose-200 rounded-xl transition-colors border border-rose-300 whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Terus Hantar ke WhatsApp</span>
              </a>
            </div>

          </form>

        </div>

        {/* User's Exact Direct WhatsApp Quick Button */}
        <div className="mt-8 text-center p-4 rounded-xl bg-white border border-rose-200/70 max-w-lg mx-auto shadow-2xs">
          <p className="text-xs text-slate-600 mb-2">
            Atau ingin terus bertanya tanpa mengisi borang sekarang?
          </p>
          <a
            href="https://wa.me/60102955726?text=JomNgaji"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold text-rose-700 hover:text-rose-900 bg-rose-50 hover:bg-rose-100 px-4 py-2 rounded-lg border border-rose-200 transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>Klik Sini: WhatsApp "JomNgaji" ke 010-295 5726 💌</span>
          </a>
        </div>

      </div>
    </section>
  );
}
