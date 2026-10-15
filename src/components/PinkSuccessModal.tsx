import { SimpleRegistration } from './PinkRegistrationForm';
import { CheckCircle2, MessageCircle, X, Copy, Check } from 'lucide-react';
import { useState } from 'react';

interface PinkSuccessModalProps {
  record: SimpleRegistration | null;
  isOpen: boolean;
  onClose: () => void;
}

export function PinkSuccessModal({ record, isOpen, onClose }: PinkSuccessModalProps) {
  const [copied, setCopied] = useState(false);
  if (!isOpen || !record) return null;

  const rawMessage = 
    `*PENDAFTARAN SESI PERCUMA KELAS MENGAJI ONLINE*\n` +
    `-----------------------------------------\n` +
    `No. Rujukan: *${record.id}*\n` +
    `🌸 Nama Pelajar: *${record.name}*\n` +
    `🌸 Umur: *${record.age}*\n` +
    `🌸 Pilihan Kelas: *${record.classType === 'iqra' ? 'Kelas Iqra\' (Asas)' : 'Kelas Al-Quran (Tahsin)'}*\n` +
    `🌸 No. WhatsApp: *${record.whatsapp}*\n` +
    `${record.notes ? `🌸 Catatan: *${record.notes}*\n` : ''}` +
    `-----------------------------------------\n` +
    `Salam Admin, saya berminat untuk tempah 1 sesi percuma mengikut maklumat ini. Terima kasih! 🤍`;

  const whatsappUrl = `https://wa.me/60102955726?text=${encodeURIComponent(rawMessage)}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(rawMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-rose-950/40 backdrop-blur-xs">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-xl border-2 border-rose-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-rose-500 px-6 py-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl">🌸</span>
            <span className="text-sm font-bold">Pendaftaran Sesi Percuma Diterima!</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 text-white/80 hover:text-white rounded-lg hover:bg-white/20 transition-colors cursor-pointer"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5">
          
          <div className="text-center space-y-1">
            <div className="w-12 h-12 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center mx-auto mb-2">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-base font-bold text-slate-900">
              Alhamdulillah, maklumat anda telah direkodkan 🤍
            </h3>
            <p className="text-xs text-slate-500 font-mono">
              No. Rujukan: <strong className="text-rose-600">{record.id}</strong>
            </p>
          </div>

          {/* Details summary */}
          <div className="bg-rose-50/50 rounded-xl p-3.5 border border-rose-100 text-xs space-y-2">
            <div className="flex justify-between">
              <span className="text-slate-500">Nama Pelajar:</span>
              <span className="font-bold text-slate-800">{record.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Umur:</span>
              <span className="font-semibold text-slate-800">{record.age}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Pakej Dipilih:</span>
              <span className="font-semibold text-rose-700">
                {record.classType === 'iqra' ? 'Kelas Iqra\' (Asas)' : 'Kelas Al-Quran (Tahsin)'}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Kekerapan:</span>
              <span className="text-slate-700 font-medium">8 Sesi Sebulan (2x seminggu)</span>
            </div>
          </div>

          <p className="text-xs text-slate-600 text-center leading-relaxed">
            Sila klik butang di bawah untuk menghantar maklumat ini terus ke WhatsApp Admin (<strong>010-295 5726</strong>) bagi pengesahan tarikh sesi percuma anda. 🌷
          </p>

          {/* Action buttons */}
          <div className="space-y-2.5 pt-1">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-sm font-bold text-white bg-rose-500 hover:bg-rose-600 rounded-xl transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4 text-white" />
              <span>Buka WhatsApp Sekarang (Hantar ke 010-295 5726)</span>
            </a>

            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold text-slate-700 bg-neutral-100 hover:bg-neutral-200 rounded-xl border border-neutral-200 transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Telah Disalin!' : 'Salin Mesej'}</span>
              </button>

              <button
                type="button"
                onClick={onClose}
                className="py-2 px-3 text-xs font-semibold text-rose-700 bg-rose-50 hover:bg-rose-100 rounded-xl border border-rose-200 transition-colors cursor-pointer"
              >
                Tutup
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
