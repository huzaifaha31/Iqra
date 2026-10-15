import { useState } from 'react';
import { DIAGNOSTIC_QUESTIONS } from '../data/mockData';
import { CurrentLevel } from '../types';
import { X, CheckCircle2, ArrowRight, RotateCcw } from 'lucide-react';

interface PlacementQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyRecommendation: (level: CurrentLevel, packageId: string) => void;
}

export function PlacementQuizModal({ isOpen, onClose, onApplyRecommendation }: PlacementQuizModalProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [completed, setCompleted] = useState(false);

  if (!isOpen) return null;

  const currentQ = DIAGNOSTIC_QUESTIONS[currentStep];

  const handleSelectOption = (index: number) => {
    const newAnswers = [...answers];
    newAnswers[currentStep] = index;
    setAnswers(newAnswers);

    if (currentStep < DIAGNOSTIC_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers([]);
    setCompleted(false);
  };

  // Compute recommendation
  const computeResult = () => {
    const q1 = answers[0] ?? 0;
    const q2 = answers[1] ?? 0;
    const q3 = answers[2] ?? 0;

    if (q1 === 0 || (q1 === 1 && q2 === 0)) {
      return {
        level: 'iqra-1-3' as CurrentLevel,
        packageId: 'iqra-cilik',
        title: 'Tahap 1: Pengenalan Asas Kaedah Iqra\' (Jilid 1 - 3)',
        description: 'Fokus penguasaan 29 huruf hijaiyyah, sebutan makhraj bibir & kerongkong yang bersih, serta membaca huruf sambung dengan baris asas tanpa teragak-agak.',
        suggestedFormat: '1-on-1 (Dicadangkan untuk bina keyakinan pantas)'
      };
    } else if (q1 === 2 && q2 === 2 && q3 === 2) {
      return {
        level: 'tahsin-tajwid' as CurrentLevel,
        packageId: 'tahsin-talaqqi-sanad',
        title: 'Tahap 3: Tahsin & Talaqqi Al-Quran Bersanad',
        description: 'Anda sudah bersedia untuk talaqqi 30 juzuk dengan penelitian hukum mad, waqaf & ibtida\', serta penghalusan tajwid bertaraf sanad Riwayat Hafs \'an \'Asim.',
        suggestedFormat: '1-on-1 atau Kumpulan Kecil Tahsin'
      };
    } else {
      return {
        level: 'iqra-4-6' as CurrentLevel,
        packageId: 'dewasa-celik-quran',
        title: 'Tahap 2: Pengukuhan Iqra\' Jilid 4 - 6 & Masuk Al-Quran',
        description: 'Fokus melancarkan tanda baca sukun, tasydid, dengung ikhfa\', serta mula membaca kalimah-kalimah dari Mushaf Al-Quran dengan tartil santai.',
        suggestedFormat: '1-on-1 Peribadi / Kumpulan 3-4 Orang'
      };
    }
  };

  const result = completed ? computeResult() : null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-neutral-200 flex items-center justify-between bg-neutral-50/50">
          <div>
            <div className="text-xs font-semibold text-emerald-800 uppercase tracking-wider">
              Diagnostik Tahap Percuma
            </div>
            <h2 className="text-lg font-bold text-slate-900 mt-0.5">
              Penilaian Tahap Iqra' & Mengaji
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-slate-500 hover:text-slate-800 rounded-lg hover:bg-neutral-200 transition-colors cursor-pointer"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {!completed ? (
            <div className="space-y-6">
              {/* Progress Indicator */}
              <div className="flex items-center justify-between text-xs text-slate-500 font-medium pb-2 border-b border-neutral-100">
                <span>Soalan {currentStep + 1} daripada {DIAGNOSTIC_QUESTIONS.length}</span>
                <span className="font-mono tabular-nums">{Math.round(((currentStep) / DIAGNOSTIC_QUESTIONS.length) * 100)}% Lengkap</span>
              </div>

              {/* Question Text */}
              <div className="space-y-1.5">
                <h3 className="text-base sm:text-lg font-semibold text-slate-900 leading-snug">
                  {currentQ.question}
                </h3>
                <p className="text-xs text-slate-500">
                  {currentQ.subtitle}
                </p>
              </div>

              {/* Options */}
              <div className="space-y-3">
                {currentQ.options.map((opt, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSelectOption(idx)}
                    className="w-full text-left p-4 rounded-xl border border-neutral-200 hover:border-emerald-700 hover:bg-emerald-50/50 transition-all group flex items-start gap-3.5 cursor-pointer"
                  >
                    <div className="w-5 h-5 rounded-full border border-neutral-300 group-hover:border-emerald-700 group-hover:bg-emerald-700/10 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-xs font-semibold text-neutral-600 group-hover:text-emerald-800">
                        {String.fromCharCode(65 + idx)}
                      </span>
                    </div>
                    <div className="space-y-1 flex-1">
                      <div className="text-sm font-semibold text-slate-900 group-hover:text-emerald-950">
                        {opt.label}
                      </div>
                      <div className="text-xs text-slate-500 group-hover:text-slate-700 leading-relaxed">
                        {opt.description}
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Navigation Back */}
              {currentStep > 0 && (
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(currentStep - 1)}
                    className="text-xs font-medium text-slate-600 hover:text-slate-900 cursor-pointer"
                  >
                    ← Kembali ke soalan sebelumnya
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-6">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-emerald-50 border border-emerald-200">
                <div className="w-10 h-10 rounded-full bg-emerald-800 text-amber-300 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-emerald-800 uppercase tracking-wider">
                    Hasil Diagnostik Anda
                  </div>
                  <div className="text-base font-bold text-slate-900 mt-0.5">
                    {result?.title}
                  </div>
                </div>
              </div>

              <div className="space-y-3 text-sm text-slate-700">
                <p className="leading-relaxed">
                  {result?.description}
                </p>
                <div className="p-3 bg-neutral-100 rounded-lg text-xs text-slate-700 space-y-1">
                  <div className="font-semibold text-slate-900">Cadangan Mod Pengajian:</div>
                  <div>{result?.suggestedFormat}</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    if (result) {
                      onApplyRecommendation(result.level, result.packageId);
                    }
                    onClose();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-bold text-white bg-emerald-800 hover:bg-emerald-900 rounded-lg transition-colors shadow-xs cursor-pointer"
                >
                  <span>Gunakan Cadangan Ini & Mula Daftar</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={resetQuiz}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-neutral-100 rounded-lg transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Ulang Semula Ujian</span>
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
