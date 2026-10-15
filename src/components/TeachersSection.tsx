import { TEACHER_PROFILES } from '../data/mockData';
import { Award, GraduationCap, CheckCircle2 } from 'lucide-react';

export function TeachersSection() {
  return (
    <section id="guru" className="py-16 sm:py-20 bg-neutral-50/60 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-1">
            Barisan Asatizah Bertauliah
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight" style={{ textWrap: 'balance' }}>
            Belajar Terus Bersama Guru Al-Quran Pemegang Sanad & Ijazah Rasmi
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Setiap guru di Akademi Al-Furqan ditapis dengan teliti dari segi kemantapan sanad bacaan, akhlak, dan kemahiran pedagogi mengajar secara maya.
          </p>
        </div>

        {/* Teachers Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TEACHER_PROFILES.map((teacher) => (
            <div
              key={teacher.id}
              className="bg-white rounded-2xl border border-neutral-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Teacher Photo */}
                <div className="relative h-64 overflow-hidden bg-neutral-100">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-103"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  
                  {/* Status Overlay */}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs text-emerald-900 px-2.5 py-1 rounded-md text-xs font-semibold shadow-xs">
                    {teacher.status}
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <div className="text-base font-bold drop-shadow-xs">
                      {teacher.name}
                    </div>
                    <div className="text-xs text-amber-200 font-medium">
                      {teacher.title}
                    </div>
                  </div>
                </div>

                {/* Profile Details */}
                <div className="p-5 space-y-4">
                  
                  {/* Quick stats unboxed */}
                  <div className="flex items-center gap-3 text-xs text-slate-500 pb-3 border-b border-neutral-100">
                    <span className="font-semibold text-slate-800">{teacher.yearsExperience} Tahun Pengalaman</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono tabular-nums">{teacher.totalStudentsTaught}+ Pelajar Dibimbing</span>
                  </div>

                  {/* Specialty */}
                  <div>
                    <div className="text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-1">
                      Kepakaran Utama:
                    </div>
                    <div className="text-xs font-medium text-slate-700 bg-neutral-50 p-2.5 rounded-lg border border-neutral-100">
                      {teacher.specialty}
                    </div>
                  </div>

                  {/* Credentials List */}
                  <div className="space-y-2">
                    <div className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                      Kelayakan & Sanad:
                    </div>
                    <ul className="space-y-1.5">
                      {teacher.credentials.map((cred, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-600 leading-snug">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                          <span>{cred}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>

              {/* Bottom Assurance */}
              <div className="p-5 pt-0">
                <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-950 text-xs font-medium flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-emerald-800 shrink-0" />
                  <span>Sedia untuk bimbingan peribadi 1-on-1</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tauliah Assurance Banner */}
        <div className="mt-10 p-5 rounded-2xl bg-white border border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-900 flex items-center justify-center shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">
                Jaminan Kualiti Bacaan & Integriti Sanad
              </div>
              <div className="text-xs text-slate-500">
                Semua guru mematuhi piawaian Kaedah Rasm Uthmani Majlis Agama Islam Negeri dan Kementerian Pendidikan.
              </div>
            </div>
          </div>
          <div className="text-xs text-slate-600 whitespace-nowrap">
            Diselia oleh Lembaga Disiplin & Tahsin Akademi
          </div>
        </div>

      </div>
    </section>
  );
}
