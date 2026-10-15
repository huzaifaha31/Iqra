import { MessageCircle, Heart } from 'lucide-react';

interface PinkFooterProps {
  onOpenRegister: () => void;
}

export function PinkFooter({ onOpenRegister }: PinkFooterProps) {
  const directWhatsAppUrl = "https://wa.me/60102955726?text=JomNgaji";

  return (
    <footer className="bg-[#FFF0F2] text-slate-800 border-t border-rose-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 text-center space-y-6">
        
        {/* User's Arabic Doa */}
        <div className="space-y-2">
          <div className="font-arabic text-2xl sm:text-3xl text-rose-700 font-bold" dir="rtl">
            اللهم اجعل القرآن ربيع قلوبنا 🌷
          </div>
          <div className="text-xs text-rose-800/80 italic">
            "Ya Allah, jadikanlah Al-Quran penyejuk hati kami."
          </div>
        </div>

        {/* User's Inspirational Closing Quote */}
        <div className="max-w-xl mx-auto p-4 rounded-2xl bg-white/80 border border-rose-200/80 shadow-2xs space-y-1">
          <div className="flex items-center justify-center gap-1.5 text-xs font-semibold text-rose-600">
            <span>🤍</span>
            <span>KATA-KATA SEMANGAT</span>
            <span>🤍</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
            Mulakan langkah kecil untuk memperbaiki bacaan al-Quran. Belajar dengan konsisten, insya-Allah semakin lancar!
          </p>
        </div>

        {/* Action button */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            type="button"
            onClick={onOpenRegister}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-bold text-white bg-rose-500 hover:bg-rose-600 rounded-xl transition-all shadow-xs cursor-pointer"
          >
            <Heart className="w-3.5 h-3.5 fill-white" />
            <span>Daftar Sesi Percuma Sekarang</span>
          </button>

          <a
            href={directWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold text-rose-800 bg-white hover:bg-rose-50 rounded-xl border border-rose-200 transition-colors shadow-2xs"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>WhatsApp: 010-295 5726 (JomNgaji)</span>
          </a>
        </div>

        {/* Copyright notice */}
        <div className="pt-6 border-t border-rose-200 text-[11px] text-slate-500">
          © {new Date().getFullYear()} Kelas Iqra' & Mengaji Al-Quran Online · Bimbingan Mudah & Fleksibel Dari Rumah
        </div>

      </div>
    </footer>
  );
}
