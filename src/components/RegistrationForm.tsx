import { useState, useEffect } from 'react';
import { PROGRAM_PACKAGES } from '../data/mockData';
import { StudentCategory, ClassFormat, FrequencyOption, CurrentLevel, TimeSlot, TeacherGender, RegistrationRecord } from '../types';
import { User, Calendar, Check, AlertCircle, Sparkles, Send } from 'lucide-react';

interface RegistrationFormProps {
  initialPackageId?: string;
  initialLevel?: CurrentLevel;
  initialFormat?: ClassFormat;
  initialFrequency?: FrequencyOption;
  onSuccessRegistration: (record: RegistrationRecord) => void;
  onOpenQuiz: () => void;
}

const MALAYSIAN_STATES = [
  'Selangor',
  'Kuala Lumpur',
  'Johor',
  'Penang',
  'Perak',
  'Kedah',
  'Pahang',
  'Negeri Sembilan',
  'Melaka',
  'Terengganu',
  'Kelantan',
  'Sabah',
  'Sarawak',
  'Perlis',
  'Putrajaya / Labuan',
  'Luar Negara (Singapura / Brunei / Lain-lain)'
];

const DAYS_OF_WEEK = [
  'Isnin',
  'Selasa',
  'Rabu',
  'Khamis',
  'Jumaat',
  'Sabtu',
  'Ahad'
];

export function RegistrationForm({
  initialPackageId,
  initialLevel,
  initialFormat,
  initialFrequency,
  onSuccessRegistration,
  onOpenQuiz
}: RegistrationFormProps) {
  // Step state (1: Info, 2: Program & Tahap, 3: Jadual & Guru, 4: Ringkasan)
  const [step, setStep] = useState<number>(1);

  // Form Fields
  const [category, setCategory] = useState<StudentCategory>('kanak-kanak');
  const [studentName, setStudentName] = useState('');
  const [parentName, setParentName] = useState('');
  const [age, setAge] = useState<number>(7);
  const [gender, setGender] = useState<'lelaki' | 'perempuan'>('lelaki');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [stateLocation, setStateLocation] = useState('Selangor');

  // Program details
  const [packageId, setPackageId] = useState(initialPackageId || 'iqra-cilik');
  const [currentLevel, setCurrentLevel] = useState<CurrentLevel>(initialLevel || 'iqra-1-3');
  const [classFormat, setClassFormat] = useState<ClassFormat>(initialFormat || 'one-on-one');
  const [frequency, setFrequency] = useState<FrequencyOption>(initialFrequency || '2x');

  // Schedule & Teacher
  const [preferredDays, setPreferredDays] = useState<string[]>(['Isnin', 'Rabu']);
  const [timeSlot, setTimeSlot] = useState<TimeSlot>('malam');
  const [timeSlotDetail, setTimeSlotDetail] = useState('08:30 Malam - 09:10 Malam');
  const [teacherPreference, setTeacherPreference] = useState<TeacherGender>('tiada-halangan');
  const [notes, setNotes] = useState('');

  // Payment
  const [paymentMethod, setPaymentMethod] = useState<'fpx' | 'kad' | 'whatsapp-invois'>('fpx');

  // Errors
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Sync props when user selects package from external section or quiz
  useEffect(() => {
    if (initialPackageId) {
      setPackageId(initialPackageId);
      const pkg = PROGRAM_PACKAGES.find(p => p.id === initialPackageId);
      if (pkg && pkg.targetCategory !== 'semua') {
        setCategory(pkg.targetCategory);
      }
    }
  }, [initialPackageId]);

  useEffect(() => {
    if (initialLevel) {
      setCurrentLevel(initialLevel);
    }
  }, [initialLevel]);

  useEffect(() => {
    if (initialFormat) setClassFormat(initialFormat);
  }, [initialFormat]);

  useEffect(() => {
    if (initialFrequency) setFrequency(initialFrequency);
  }, [initialFrequency]);

  // Adjust timeSlotDetail based on selected timeSlot
  useEffect(() => {
    if (timeSlot === 'pagi') {
      setTimeSlotDetail('09:00 Pagi - 09:40 Pagi');
    } else if (timeSlot === 'petang') {
      setTimeSlotDetail('04:00 Petang - 04:40 Petang');
    } else {
      setTimeSlotDetail('08:30 Malam - 09:10 Malam');
    }
  }, [timeSlot]);

  // Selected package details
  const selectedPkg = PROGRAM_PACKAGES.find(p => p.id === packageId) || PROGRAM_PACKAGES[0];
  const monthlyFee = selectedPkg.monthlyPricing[classFormat === 'one-on-one' ? 'oneOnOne' : 'group'][frequency];

  const handleDayToggle = (day: string) => {
    if (preferredDays.includes(day)) {
      if (preferredDays.length > 1) {
        setPreferredDays(preferredDays.filter(d => d !== day));
      }
    } else {
      setPreferredDays([...preferredDays, day]);
    }
  };

  const validateStep1 = () => {
    const errs: Record<string, string> = {};
    if (!studentName.trim()) {
      errs.studentName = 'Sila masukkan nama penuh pelajar.';
    }
    if (category === 'kanak-kanak' && !parentName.trim()) {
      errs.parentName = 'Sila masukkan nama ibu bapa / penjaga.';
    }
    if (!whatsapp.trim() || whatsapp.replace(/\D/g, '').length < 9) {
      errs.whatsapp = 'Sila masukkan nombor WhatsApp yang sah (contoh: 0123456789).';
    }
    if (!email.trim() || !email.includes('@')) {
      errs.email = 'Sila masukkan alamat emel yang sah.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNextToStep2 = () => {
    if (validateStep1()) {
      setErrors({});
      setStep(2);
    }
  };

  const handleNextToStep3 = () => {
    setErrors({});
    setStep(3);
  };

  const handleNextToStep4 = () => {
    setErrors({});
    setStep(4);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep1()) {
      setStep(1);
      return;
    }

    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const newId = `AFQ-2026-${randomSuffix}`;

    const newRecord: RegistrationRecord = {
      id: newId,
      studentName: studentName.trim(),
      category,
      age: Number(age),
      gender,
      parentName: category === 'kanak-kanak' ? parentName.trim() : undefined,
      whatsapp: whatsapp.trim(),
      email: email.trim(),
      state: stateLocation,
      packageId: selectedPkg.id,
      packageName: selectedPkg.name,
      classFormat,
      frequency,
      preferredDays,
      timeSlot,
      timeSlotDetail,
      teacherPreference,
      currentLevel,
      notes: notes.trim(),
      monthlyFee,
      registeredAt: new Date().toISOString().split('T')[0],
      status: 'Menunggu Pengesahan',
      assignedTeacher: teacherPreference === 'ustazah' ? 'Ustazah Nur Hanan binti Zulkifli' : 'Ustaz Muhammad Firdaus Al-Hafiz',
      meetLink: `https://meet.google.com/afq-${newId.toLowerCase()}`,
      firstTrialDate: `${preferredDays[0] || 'Isnin'} ini, ${timeSlotDetail} (Sesi Suai Kenal Percuma)`
    };

    onSuccessRegistration(newRecord);
  };

  return (
    <section id="daftar" className="py-16 sm:py-24 bg-white border-b border-neutral-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Form Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-1">
            Borang Pendaftaran Rasmi
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight" style={{ textWrap: 'balance' }}>
            Daftar Kelas Mengaji Online Anda Hari Ini
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Isi maklumat di bawah dalam 4 langkah mudah. Guru bertauliah kami akan menghubungi anda melalui WhatsApp untuk pengesahan jadual dan sesi pengenalan percuma.
          </p>
        </div>

        {/* Step Indicator Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8">
          {[
            { num: 1, label: '1. Maklumat Pelajar' },
            { num: 2, label: '2. Pakej & Tahap' },
            { num: 3, label: '3. Jadual & Guru' },
            { num: 4, label: '4. Pengesahan' }
          ].map((item) => (
            <button
              key={item.num}
              type="button"
              onClick={() => {
                if (item.num === 1 || (item.num === 2 && validateStep1())) {
                  setStep(item.num);
                }
              }}
              className={`p-3 rounded-xl text-left border transition-all cursor-pointer ${
                step === item.num
                  ? 'bg-emerald-800 text-white border-emerald-900 shadow-xs'
                  : step > item.num
                  ? 'bg-emerald-50 text-emerald-900 border-emerald-200'
                  : 'bg-neutral-50 text-slate-500 border-neutral-200'
              }`}
            >
              <div className="text-xs font-bold whitespace-nowrap">
                {item.label}
              </div>
              <div className="text-[11px] opacity-80 mt-0.5">
                {step > item.num ? '✓ Selesai' : step === item.num ? 'Sedang diisi' : 'Langkah ' + item.num}
              </div>
            </button>
          ))}
        </div>

        {/* Main Form Container */}
        <form onSubmit={handleSubmit} className="bg-neutral-50 rounded-2xl border border-neutral-200 p-6 sm:p-10 shadow-xs">
          
          {/* STEP 1: Maklumat Pelajar & Penjaga */}
          {step === 1 && (
            <div className="space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-neutral-200">
                <div className="space-y-0.5">
                  <h3 className="text-base font-bold text-slate-900">
                    Langkah 1: Maklumat Pelajar & Penjaga
                  </h3>
                  <p className="text-xs text-slate-500">
                    Pilih kategori pelajar untuk menyesuaikan modul pengajian.
                  </p>
                </div>
                <User className="w-5 h-5 text-emerald-800" />
              </div>

              {/* Student Category Selector */}
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                  Kategori Pemohon / Pelajar <span className="text-rose-500">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { id: 'kanak-kanak' as const, title: 'Kanak-kanak / Remaja', sub: 'Umur 4 hingga 17 tahun' },
                    { id: 'dewasa' as const, title: 'Dewasa / Belia', sub: 'Umur 18 hingga 54 tahun' },
                    { id: 'warga-emas' as const, title: 'Warga Emas', sub: 'Umur 55 tahun ke atas' }
                  ].map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => {
                        setCategory(cat.id);
                        if (cat.id === 'kanak-kanak') setPackageId('iqra-cilik');
                        if (cat.id === 'dewasa') setPackageId('dewasa-celik-quran');
                        if (cat.id === 'warga-emas') setPackageId('warga-emas-barakah');
                      }}
                      className={`p-3.5 rounded-xl text-left border transition-all cursor-pointer ${
                        category === cat.id
                          ? 'bg-white border-emerald-700 ring-2 ring-emerald-700/20 shadow-xs'
                          : 'bg-white/80 border-neutral-200 hover:border-neutral-300'
                      }`}
                    >
                      <div className="text-xs font-bold text-slate-900">{cat.title}</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">{cat.sub}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Parent Name (if kid) */}
              {category === 'kanak-kanak' && (
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Nama Penuh Ibu / Bapa / Penjaga <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={parentName}
                    onChange={(e) => setParentName(e.target.value)}
                    placeholder="Contoh: Khairul Anwar bin Salleh"
                    className={`w-full px-4 py-2.5 bg-white text-sm rounded-xl border focus:outline-hidden focus:ring-2 focus:ring-emerald-700/30 ${
                      errors.parentName ? 'border-rose-400 bg-rose-50/20' : 'border-neutral-300'
                    }`}
                  />
                  {errors.parentName && (
                    <p className="text-xs text-rose-600 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.parentName}</span>
                    </p>
                  )}
                </div>
              )}

              {/* Student Name */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
                <div className="sm:col-span-8 space-y-1.5">
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Nama Penuh Pelajar <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    placeholder="Contoh: Ahmad Rayyan bin Khairul"
                    className={`w-full px-4 py-2.5 bg-white text-sm rounded-xl border focus:outline-hidden focus:ring-2 focus:ring-emerald-700/30 ${
                      errors.studentName ? 'border-rose-400 bg-rose-50/20' : 'border-neutral-300'
                    }`}
                  />
                  {errors.studentName && (
                    <p className="text-xs text-rose-600 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.studentName}</span>
                    </p>
                  )}
                </div>

                <div className="sm:col-span-4 space-y-1.5">
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Umur Pelajar <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="number"
                    min={4}
                    max={99}
                    value={age}
                    onChange={(e) => setAge(Number(e.target.value))}
                    className="w-full px-4 py-2.5 bg-white text-sm rounded-xl border border-neutral-300 focus:outline-hidden focus:ring-2 focus:ring-emerald-700/30 font-mono"
                  />
                </div>
              </div>

              {/* Gender and Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Jantina Pelajar <span className="text-rose-500">*</span>
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setGender('lelaki')}
                      className={`py-2.5 px-3 text-xs font-semibold rounded-xl border text-center transition-all cursor-pointer ${
                        gender === 'lelaki'
                          ? 'bg-emerald-800 text-white border-emerald-800'
                          : 'bg-white text-slate-700 border-neutral-300 hover:bg-neutral-50'
                      }`}
                    >
                      Lelaki
                    </button>
                    <button
                      type="button"
                      onClick={() => setGender('perempuan')}
                      className={`py-2.5 px-3 text-xs font-semibold rounded-xl border text-center transition-all cursor-pointer ${
                        gender === 'perempuan'
                          ? 'bg-emerald-800 text-white border-emerald-800'
                          : 'bg-white text-slate-700 border-neutral-300 hover:bg-neutral-50'
                      }`}
                    >
                      Perempuan
                    </button>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Negeri / Lokasi <span className="text-rose-500">*</span>
                  </label>
                  <select
                    value={stateLocation}
                    onChange={(e) => setStateLocation(e.target.value)}
                    className="w-full px-4 py-2.5 bg-white text-sm rounded-xl border border-neutral-300 focus:outline-hidden focus:ring-2 focus:ring-emerald-700/30"
                  >
                    {MALAYSIAN_STATES.map((st) => (
                      <option key={st} value={st}>
                        {st}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Contact info: WhatsApp & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Nombor WhatsApp Aktif <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    placeholder="Contoh: 0123456789"
                    className={`w-full px-4 py-2.5 bg-white text-sm rounded-xl border focus:outline-hidden focus:ring-2 focus:ring-emerald-700/30 font-mono ${
                      errors.whatsapp ? 'border-rose-400 bg-rose-50/20' : 'border-neutral-300'
                    }`}
                  />
                  {errors.whatsapp ? (
                    <p className="text-xs text-rose-600 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.whatsapp}</span>
                    </p>
                  ) : (
                    <p className="text-[11px] text-slate-400">
                      Pautan kelas Google Meet akan dihantar ke WhatsApp ini.
                    </p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Alamat Emel <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="nama@email.com"
                    className={`w-full px-4 py-2.5 bg-white text-sm rounded-xl border focus:outline-hidden focus:ring-2 focus:ring-emerald-700/30 ${
                      errors.email ? 'border-rose-400 bg-rose-50/20' : 'border-neutral-300'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-rose-600 flex items-center gap-1 mt-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Step 1 Actions */}
              <div className="pt-4 flex items-center justify-end">
                <button
                  type="button"
                  onClick={handleNextToStep2}
                  className="px-6 py-3 text-sm font-bold text-white bg-emerald-800 hover:bg-emerald-900 rounded-xl transition-colors shadow-xs cursor-pointer"
                >
                  Seterusnya: Pilih Pakej & Tahap →
                </button>
              </div>

            </div>
          )}

          {/* STEP 2: Pemilihan Pakej & Tahap Semasa */}
          {step === 2 && (
            <div className="space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-neutral-200">
                <div className="space-y-0.5">
                  <h3 className="text-base font-bold text-slate-900">
                    Langkah 2: Pilih Pakej & Anggaran Tahap Semasa
                  </h3>
                  <p className="text-xs text-slate-500">
                    Boleh jalankan ujian diagnostik jika belum pasti tahap bacaan.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={onOpenQuiz}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 hover:text-emerald-950 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200 cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Ujian Tahap (Percuma)</span>
                </button>
              </div>

              {/* Package Radio Options */}
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                  Program Bimbingan Pilihan <span className="text-rose-500">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {PROGRAM_PACKAGES.map((pkg) => (
                    <label
                      key={pkg.id}
                      className={`p-4 rounded-xl border flex items-start gap-3 transition-all cursor-pointer ${
                        packageId === pkg.id
                          ? 'bg-white border-emerald-700 ring-2 ring-emerald-700/20 shadow-xs'
                          : 'bg-white/80 border-neutral-200 hover:border-neutral-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="programPackage"
                        value={pkg.id}
                        checked={packageId === pkg.id}
                        onChange={() => setPackageId(pkg.id)}
                        className="mt-1 accent-emerald-800"
                      />
                      <div className="space-y-1">
                        <div className="text-sm font-bold text-slate-900">{pkg.name}</div>
                        <div className="text-xs text-slate-600">{pkg.tagline}</div>
                        <div className="text-xs font-mono text-emerald-800 font-semibold pt-1">
                          RM{pkg.monthlyPricing[classFormat === 'one-on-one' ? 'oneOnOne' : 'group'][frequency]}/bulan
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Current Level Radio Options */}
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                  Anggaran Tahap Penguasaan Semasa Pelajar <span className="text-rose-500">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                  {[
                    { id: 'asas-sifar' as const, title: 'Asas Sifar (Belum Kenal Huruf)', desc: 'Mula dari huruf tunggal Alif, Ba, Ta' },
                    { id: 'iqra-1-3' as const, title: 'Iqra\' Jilid 1 – 3', desc: 'Kenal huruf tunggal tapi sukar huruf sambung' },
                    { id: 'iqra-4-6' as const, title: 'Iqra\' Jilid 4 – 6', desc: 'Sedang belajar tanda mati & sabdu' },
                    { id: 'al-quran-merangkak' as const, title: 'Al-Quran Merangkak', desc: 'Boleh baca Quran tapi tersekat-sekat' },
                    { id: 'tahsin-tajwid' as const, title: 'Lancar Ingin Perkemas Tajwid', desc: 'Talaqqi 30 juzuk bertaraf sanad' }
                  ].map((lvl) => (
                    <label
                      key={lvl.id}
                      className={`p-3 rounded-xl border flex items-start gap-2.5 transition-all cursor-pointer ${
                        currentLevel === lvl.id
                          ? 'bg-white border-emerald-700 ring-2 ring-emerald-700/20'
                          : 'bg-white/70 border-neutral-200 hover:border-neutral-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="currentLevel"
                        value={lvl.id}
                        checked={currentLevel === lvl.id}
                        onChange={() => setCurrentLevel(lvl.id)}
                        className="mt-1 accent-emerald-800"
                      />
                      <div className="space-y-0.5">
                        <div className="text-xs font-bold text-slate-900">{lvl.title}</div>
                        <div className="text-[11px] text-slate-500 leading-tight">{lvl.desc}</div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Class Format & Frequency */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                
                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Format Sesi Pembelajaran
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setClassFormat('one-on-one')}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        classFormat === 'one-on-one'
                          ? 'bg-emerald-800 text-white border-emerald-900 shadow-xs'
                          : 'bg-white text-slate-700 border-neutral-300 hover:bg-neutral-50'
                      }`}
                    >
                      <div className="text-xs font-bold">1-on-1 Peribadi</div>
                      <div className="text-[11px] opacity-80 mt-0.5">1 Murid : 1 Guru</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setClassFormat('group')}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        classFormat === 'group'
                          ? 'bg-emerald-800 text-white border-emerald-900 shadow-xs'
                          : 'bg-white text-slate-700 border-neutral-300 hover:bg-neutral-50'
                      }`}
                    >
                      <div className="text-xs font-bold">Kumpulan Kecil</div>
                      <div className="text-[11px] opacity-80 mt-0.5">Maksimum 3-4 Murid</div>
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Kekerapan Sesi Seminggu
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: '2x' as const, label: '2x Seminggu', sub: '8 sesi/bln' },
                      { id: '3x' as const, label: '3x Seminggu', sub: '12 sesi/bln' },
                      { id: '4x' as const, label: '4x Seminggu', sub: '16 sesi/bln' }
                    ].map((freq) => (
                      <button
                        key={freq.id}
                        type="button"
                        onClick={() => setFrequency(freq.id)}
                        className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                          frequency === freq.id
                            ? 'bg-emerald-800 text-white border-emerald-900 shadow-xs'
                            : 'bg-white text-slate-700 border-neutral-300 hover:bg-neutral-50'
                        }`}
                      >
                        <div className="text-xs font-bold">{freq.label}</div>
                        <div className="text-[10px] opacity-80 mt-0.5">{freq.sub}</div>
                      </button>
                    ))}
                  </div>
                </div>

              </div>

              {/* Price estimation banner */}
              <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200/80 flex items-center justify-between">
                <div>
                  <div className="text-xs font-medium text-slate-600">Anggaran Yuran Bulanan:</div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    {selectedPkg.name} ({classFormat === 'one-on-one' ? '1-on-1' : 'Kumpulan'}, {frequency === '2x' ? '8 sesi' : frequency === '3x' ? '12 sesi' : '16 sesi'})
                  </div>
                </div>
                <div className="text-xl font-bold font-mono text-emerald-900 tabular-nums">
                  RM{monthlyFee}<span className="text-xs font-normal text-slate-500">/bln</span>
                </div>
              </div>

              {/* Step 2 Actions */}
              <div className="pt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-4 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
                >
                  ← Kembali ke Maklumat Pelajar
                </button>
                <button
                  type="button"
                  onClick={handleNextToStep3}
                  className="px-6 py-3 text-sm font-bold text-white bg-emerald-800 hover:bg-emerald-900 rounded-xl transition-colors shadow-xs cursor-pointer"
                >
                  Seterusnya: Jadual & Guru →
                </button>
              </div>

            </div>
          )}

          {/* STEP 3: Jadual & Pilihan Guru */}
          {step === 3 && (
            <div className="space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-neutral-200">
                <div className="space-y-0.5">
                  <h3 className="text-base font-bold text-slate-900">
                    Langkah 3: Pemilihan Jadual & Asatizah
                  </h3>
                  <p className="text-xs text-slate-500">
                    Tetapkan masa yang paling selesa mengikut rutin keluarga anda.
                  </p>
                </div>
                <Calendar className="w-5 h-5 text-emerald-800" />
              </div>

              {/* Preferred Days multi-select */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    Pilihan Hari Kelas (Pilih sekurang-kurangnya mengikut kekerapan) <span className="text-rose-500">*</span>
                  </label>
                  <span className="text-xs text-slate-500">{preferredDays.length} hari dipilih</span>
                </div>
                <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
                  {DAYS_OF_WEEK.map((day) => {
                    const isSelected = preferredDays.includes(day);
                    return (
                      <button
                        key={day}
                        type="button"
                        onClick={() => handleDayToggle(day)}
                        className={`py-2 px-2 text-xs font-semibold rounded-xl border text-center transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-emerald-800 text-white border-emerald-900 shadow-2xs'
                            : 'bg-white text-slate-700 border-neutral-300 hover:bg-neutral-50'
                        }`}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Time Slots */}
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                  Waktu Kelas Yang Diingini <span className="text-rose-500">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { id: 'pagi' as const, label: 'Sesi Pagi', time: '08:30 Pagi - 11:30 Pagi' },
                    { id: 'petang' as const, label: 'Sesi Petang', time: '03:00 Petang - 06:00 Petang' },
                    { id: 'malam' as const, label: 'Sesi Malam (Popular)', time: '08:00 Malam - 10:30 Malam' }
                  ].map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setTimeSlot(s.id)}
                      className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                        timeSlot === s.id
                          ? 'bg-white border-emerald-700 ring-2 ring-emerald-700/20 shadow-xs'
                          : 'bg-white/80 border-neutral-200 hover:border-neutral-300'
                      }`}
                    >
                      <div className="text-xs font-bold text-slate-900">{s.label}</div>
                      <div className="text-[11px] text-slate-500 mt-0.5 font-mono">{s.time}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Teacher Gender Preference */}
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                  Keutamaan Jantina Pengajar
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { id: 'tiada-halangan' as const, label: 'Tiada Halangan (Paling Pantas)', desc: 'Mana-mana guru bertauliah yang ada slot sesuai' },
                    { id: 'ustaz' as const, label: 'Ustaz (Guru Lelaki)', desc: 'Diutamakan untuk pelajar lelaki atau dewasa' },
                    { id: 'ustazah' as const, label: 'Ustazah (Guru Wanita)', desc: 'Diutamakan untuk muslimah & kanak-kanak cilik' }
                  ].map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setTeacherPreference(t.id)}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        teacherPreference === t.id
                          ? 'bg-white border-emerald-700 ring-2 ring-emerald-700/20 shadow-xs'
                          : 'bg-white/80 border-neutral-200 hover:border-neutral-300'
                      }`}
                    >
                      <div className="text-xs font-bold text-slate-900">{t.label}</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">{t.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Special Notes */}
              <div className="space-y-1.5">
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                  Catatan Khas / Harapan Bimbingan (Pilihan)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Contoh: Anak agak pemalu, mohon guru yang santai dan banyak beri galakan. Atau: Saya nak fokus baiki sebutan huruf 'Ain dan Ghain."
                  className="w-full px-4 py-2.5 bg-white text-sm rounded-xl border border-neutral-300 focus:outline-hidden focus:ring-2 focus:ring-emerald-700/30"
                />
              </div>

              {/* Step 3 Actions */}
              <div className="pt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-4 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
                >
                  ← Kembali ke Pemilihan Pakej
                </button>
                <button
                  type="button"
                  onClick={handleNextToStep4}
                  className="px-6 py-3 text-sm font-bold text-white bg-emerald-800 hover:bg-emerald-900 rounded-xl transition-colors shadow-xs cursor-pointer"
                >
                  Seterusnya: Semak Ringkasan & Sahkan →
                </button>
              </div>

            </div>
          )}

          {/* STEP 4: Ringkasan & Pengesahan Pendaftaran */}
          {step === 4 && (
            <div className="space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-neutral-200">
                <div className="space-y-0.5">
                  <h3 className="text-base font-bold text-slate-900">
                    Langkah 4: Semak Ringkasan & Sahkan Pendaftaran
                  </h3>
                  <p className="text-xs text-slate-500">
                    Sila pastikan maklumat di bawah tepat sebelum menekan butang hantar.
                  </p>
                </div>
                <Check className="w-5 h-5 text-emerald-800" />
              </div>

              {/* Summary Card */}
              <div className="bg-white rounded-xl border border-neutral-200 p-5 space-y-4 shadow-2xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-slate-400 block">Nama Pelajar:</span>
                    <span className="font-bold text-slate-900 text-sm">{studentName} ({age} tahun, {gender})</span>
                  </div>
                  {category === 'kanak-kanak' && (
                    <div>
                      <span className="text-slate-400 block">Nama Penjaga:</span>
                      <span className="font-semibold text-slate-800">{parentName}</span>
                    </div>
                  )}
                  <div>
                    <span className="text-slate-400 block">WhatsApp:</span>
                    <span className="font-semibold text-slate-800 font-mono">{whatsapp}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Emel:</span>
                    <span className="font-semibold text-slate-800">{email}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Lokasi:</span>
                    <span className="font-semibold text-slate-800">{stateLocation}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Program Dipilih:</span>
                    <span className="font-bold text-emerald-900">{selectedPkg.name}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Format & Kekerapan:</span>
                    <span className="font-semibold text-slate-800">
                      {classFormat === 'one-on-one' ? '1-on-1 Peribadi' : 'Kumpulan Kecil'} · {frequency} seminggu
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Pilihan Hari & Waktu:</span>
                    <span className="font-semibold text-slate-800">
                      {preferredDays.join(', ')} ({timeSlotDetail})
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
                  <div className="text-xs text-slate-500">
                    Jumlah Yuran Bulanan:
                  </div>
                  <div className="text-2xl font-extrabold font-mono text-emerald-900 tabular-nums">
                    RM{monthlyFee} <span className="text-xs font-normal text-slate-500">/bulan</span>
                  </div>
                </div>
              </div>

              {/* Payment Preference Selector */}
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                  Pilihan Cara Pembayaran Yuran
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { id: 'fpx' as const, title: 'FPX Perbankan Online', desc: 'Maybank2u, CIMB, Bank Islam, RHB, dll.' },
                    { id: 'kad' as const, title: 'Kad Debit / Kredit', desc: 'Visa & Mastercard selamat (Stripe/Billplz)' },
                    { id: 'whatsapp-invois' as const, title: 'Invois / WhatsApp Manual', desc: 'Terima pautan bayaran rasmi dari admin' }
                  ].map((pay) => (
                    <button
                      key={pay.id}
                      type="button"
                      onClick={() => setPaymentMethod(pay.id)}
                      className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                        paymentMethod === pay.id
                          ? 'bg-white border-emerald-700 ring-2 ring-emerald-700/20 shadow-xs'
                          : 'bg-white/80 border-neutral-200 hover:border-neutral-300'
                      }`}
                    >
                      <div className="text-xs font-bold text-slate-900">{pay.title}</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">{pay.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Free Trial Disclaimer */}
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-slate-700 space-y-1.5">
                <div className="font-bold text-emerald-950 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-emerald-800" />
                  <span>Jaminan Sesi Suai Kenal & Diagnostik Percuma 20 Minit</span>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Pendaftaran hari ini TIDAK dikenakan sebarang caj serta-merta. Guru akan mengadakan sesi orientasi diagnostik percuma terlebih dahulu untuk menilai tahap pelajar dan memastikan keserasian sebelum bayaran yuran bulanan pertama disahkan.
                </p>
              </div>

              {/* Step 4 Actions */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
                >
                  ← Kembali ke Pilihan Jadual
                </button>
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-bold text-white bg-emerald-800 hover:bg-emerald-900 rounded-xl transition-colors shadow-sm cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Hantar Pendaftaran & Jana Resit Rasmi</span>
                </button>
              </div>

            </div>
          )}

        </form>

      </div>
    </section>
  );
}
