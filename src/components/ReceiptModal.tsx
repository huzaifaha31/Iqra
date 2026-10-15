import { RegistrationRecord } from '../types';
import { CheckCircle2, Printer, MessageSquare, ExternalLink, X, BookOpen, ShieldCheck } from 'lucide-react';

interface ReceiptModalProps {
  record: RegistrationRecord | null;
  isOpen: boolean;
  onClose: () => void;
  onViewStatus: () => void;
}

export function ReceiptModal({ record, isOpen, onClose, onViewStatus }: ReceiptModalProps) {
  if (!isOpen || !record) return null;

  const handlePrint = () => {
    window.print();
  };

  const whatsappMessage = encodeURIComponent(
    `*PENDAFTARAN KELAS PENGAJIAN IQRA & QURAN ONLINE*\n` +
    `-----------------------------------------\n` +
    `No Rujukan: *${record.id}*\n` +
    `Nama Pelajar: *${record.studentName}* (${record.age} tahun)\n` +
    `${record.parentName ? `Nama Penjaga: *${record.parentName}*\n` : ''}` +
    `Program: *${record.packageName}*\n` +
    `Format: *${record.classFormat === 'one-on-one' ? '1-on-1 Peribadi' : 'Kumpulan Kecil'}* (${record.frequency} seminggu)\n` +
    `Pilihan Hari: *${record.preferredDays.join(', ')}*\n` +
    `Slot Masa: *${record.timeSlotDetail}*\n` +
    `Keutamaan Guru: *${record.teacherPreference.toUpperCase()}*\n` +
    `Yuran Bulanan: *RM${record.monthlyFee}*\n` +
    `-----------------------------------------\n` +
    `Mohon pihak akademi sahkan pendaftaran dan slot sesi suai kenal percuma. Terima kasih.`
  );

  const whatsappUrl = `https://wa.me/601155523456?text=${whatsappMessage}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Top Bar */}
        <div className="px-6 py-4 bg-emerald-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-800 text-amber-300 flex items-center justify-center font-bold">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs text-amber-300 font-semibold tracking-wider uppercase">
                Pengesahan Rasmi
              </div>
              <div className="text-sm font-bold">
                Slip Pendaftaran Akademi Al-Furqan
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-white/80 hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Printable Receipt Body */}
        <div className="p-6 sm:p-8 space-y-6 printable-area">
          
          {/* Success Banner */}
          <div className="flex items-start gap-3.5 p-4 rounded-xl bg-emerald-50 border border-emerald-200">
            <CheckCircle2 className="w-6 h-6 text-emerald-800 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <div className="text-sm font-bold text-slate-900">
                Pendaftaran Berjaya Diterima!
              </div>
              <div className="text-xs text-slate-600 leading-relaxed">
                Nombor rujukan pendaftaran anda ialah <span className="font-mono font-bold text-emerald-900">{record.id}</span>. Pegawai asatizah kami akan menghubungi anda dalam tempoh 2 jam waktu bekerja.
              </div>
            </div>
          </div>

          {/* Details Table */}
          <div className="border border-neutral-200 rounded-xl overflow-hidden divide-y divide-neutral-200 text-xs">
            <div className="p-3 bg-neutral-50 font-semibold text-slate-800 flex items-center justify-between">
              <span>Ringkasan Maklumat Pendaftaran</span>
              <span className="font-mono text-emerald-800">{record.registeredAt}</span>
            </div>

            <div className="p-3 grid grid-cols-3 gap-2">
              <span className="text-slate-500">No. Rujukan:</span>
              <span className="col-span-2 font-mono font-bold text-slate-900">{record.id}</span>
            </div>

            <div className="p-3 grid grid-cols-3 gap-2">
              <span className="text-slate-500">Nama Pelajar:</span>
              <span className="col-span-2 font-bold text-slate-900">{record.studentName} ({record.age} tahun, {record.gender})</span>
            </div>

            {record.parentName && (
              <div className="p-3 grid grid-cols-3 gap-2">
                <span className="text-slate-500">Nama Penjaga:</span>
                <span className="col-span-2 font-medium text-slate-800">{record.parentName}</span>
              </div>
            )}

            <div className="p-3 grid grid-cols-3 gap-2">
              <span className="text-slate-500">WhatsApp Pelajar/Penjaga:</span>
              <span className="col-span-2 font-mono font-semibold text-slate-800">{record.whatsapp}</span>
            </div>

            <div className="p-3 grid grid-cols-3 gap-2">
              <span className="text-slate-500">Pakej Mengaji:</span>
              <span className="col-span-2 font-bold text-emerald-900">{record.packageName}</span>
            </div>

            <div className="p-3 grid grid-cols-3 gap-2">
              <span className="text-slate-500">Format & Kekerapan:</span>
              <span className="col-span-2 text-slate-800">
                {record.classFormat === 'one-on-one' ? '1-on-1 Peribadi' : 'Kumpulan Kecil'} ({record.frequency} seminggu)
              </span>
            </div>

            <div className="p-3 grid grid-cols-3 gap-2">
              <span className="text-slate-500">Jadual Dipilih:</span>
              <span className="col-span-2 text-slate-800">
                {record.preferredDays.join(', ')} · {record.timeSlotDetail}
              </span>
            </div>

            <div className="p-3 grid grid-cols-3 gap-2">
              <span className="text-slate-500">Cadangan Guru:</span>
              <span className="col-span-2 text-slate-800">{record.assignedTeacher}</span>
            </div>

            <div className="p-3 grid grid-cols-3 gap-2 bg-neutral-50/70">
              <span className="text-slate-700 font-semibold">Kadar Yuran Bulanan:</span>
              <span className="col-span-2 font-mono font-extrabold text-base text-emerald-900">
                RM{record.monthlyFee} <span className="text-xs font-normal text-slate-500">/bulan</span>
              </span>
            </div>
          </div>

          {/* Orientation session infobox */}
          <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-xs text-amber-950 space-y-1">
            <div className="font-bold flex items-center gap-1.5 text-amber-900">
              <ShieldCheck className="w-4 h-4 text-amber-800" />
              <span>Sesi Suai Kenal & Diagnostik Percuma:</span>
            </div>
            <p className="text-amber-800 leading-relaxed">
              Tentatif Sesi Percuma: <strong>{record.firstTrialDate}</strong> melalui Google Meet. Anda tidak perlu bayar apa-apa hari ini sehingga selesai sesi pertama bersama ustaz/ustazah.
            </p>
          </div>

          {/* Action buttons */}
          <div className="space-y-3 pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-sm font-bold text-white bg-emerald-700 hover:bg-emerald-800 rounded-xl transition-colors shadow-xs"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Hantar Pengesahan Segera ke WhatsApp Akademi</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <button
                type="button"
                onClick={handlePrint}
                className="inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-slate-700 bg-neutral-100 hover:bg-neutral-200 rounded-xl transition-colors border border-neutral-300 cursor-pointer"
              >
                <Printer className="w-4 h-4" />
                <span>Cetak / Simpan Slip PDF</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  onClose();
                  onViewStatus();
                }}
                className="inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-emerald-900 bg-emerald-50 hover:bg-emerald-100 rounded-xl transition-colors border border-emerald-200 cursor-pointer"
              >
                <span>Semak Status Pendaftaran Ini</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
