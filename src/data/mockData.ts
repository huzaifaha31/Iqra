import { ProgramPackage, TeacherProfile, RegistrationRecord, DiagnosticQuestion } from '../types';

export const PROGRAM_PACKAGES: ProgramPackage[] = [
  {
    id: 'iqra-cilik',
    name: 'Iqra\' Cilik Bintang',
    targetCategory: 'kanak-kanak',
    tagline: 'Asas Mengenal Huruf & Bacaan Ceria untuk Kanak-kanak',
    description: 'Bimbingan asas Kaedah Iqra\' Jilid 1 hingga 6 secara interaktif. Guru menggunakan teknik visual berwarna, pujian berterusan dan latih tubi makhraj yang bersesuaian dengan psikologi kanak-kanak.',
    ageRange: '4 – 12 Tahun',
    recommendedFor: 'Kanak-kanak belum kenal huruf atau baru mula mengeja suku kata Arab.',
    syllabus: [
      'Jilid 1: Pengenalan 29 Huruf Hijaiyyah Tunggal & Sebutan Makhraj Asas',
      'Jilid 2: Huruf Bersambung & Bentuk Awal/Tengah/Akhir',
      'Jilid 3: Tanda Bacaan Asas (Fathah, Kasrah, Dhommah, Mad Asli)',
      'Jilid 4: Tanda Tanwin & Baris Dua',
      'Jilid 5: Tanda Sukun (Mati), Sabdu (Tasydid) & Qalqalah Asas',
      'Jilid 6: Hukum Wakaf, Mad Lazim & Pengenalan Masuk Al-Quran'
    ],
    durationMinutes: 40,
    monthlyPricing: {
      group: {
        '2x': 75,
        '3x': 105,
        '4x': 135
      },
      oneOnOne: {
        '2x': 140,
        '3x': 195,
        '4x': 250
      }
    },
    highlightFeatures: [
      'Pendekatan mesra kanak-kanak (gamified & santai)',
      'Laporan kemajuan mingguan kepada ibu bapa',
      'Sijil tamat setiap jilid Iqra\'',
      'Rakaman video ringkas sebutan untuk ulangkaji'
    ],
    popular: true
  },
  {
    id: 'dewasa-celik-quran',
    name: 'Celik Al-Quran Dewasa',
    targetCategory: 'dewasa',
    tagline: 'Bimbingan Dari Sifar Tanpa Rasa Segan & Malu',
    description: 'Dirangka khas untuk golongan bekerja, ibu bapa, mahupun mualaf yang ingin membetulkan bacaan Al-Quran dari asas makhraj dan hukum tajwid secara tertutup dan menjaga maruah.',
    ageRange: '18 – 55 Tahun',
    recommendedFor: 'Dewasa yang bacaan merangkak, terlupa hukum tajwid, atau ingin mula dari sifar.',
    syllabus: [
      'Pemulihan Makharijul Huruf (Tempat Keluar Huruf yang Tepat)',
      'Pengukuhan Sifat-sifat Huruf (Hams, Jahr, Isti\'la\')',
      'Kefahaman Hukum Nun Sakinah & Tanwin Praktikal',
      'Hukum Mim Sakinah & Idgham',
      'Kadar Panjang Harakat Mad (2, 4, 6 Harakat)',
      'Talaqqi Surah Pilihan (Al-Fatihah, Surah Lazim & Al-Mulk)'
    ],
    durationMinutes: 45,
    monthlyPricing: {
      group: {
        '2x': 85,
        '3x': 120,
        '4x': 150
      },
      oneOnOne: {
        '2x': 150,
        '3x': 210,
        '4x': 270
      }
    },
    highlightFeatures: [
      'Privasi terjaga (sesi 1-on-1 peribadi atau kumpulan sejenis)',
      'Bimbingan sabar tanpa tekanan',
      'Fleksibiliti slot malam selepas waktu kerja',
      'Modul tajwid ringkas & infografik digital'
    ],
    popular: true
  },
  {
    id: 'tahsin-talaqqi-sanad',
    name: 'Tahsin & Talaqqi Bersanad',
    targetCategory: 'semua',
    tagline: 'Perkemas Bacaan Tartil & Kaedah Rasm Uthmani',
    description: 'Program lanjutan talaqqi musyafahah bagi pelajar yang sudah lancar membaca namun ingin menyempurnakan tartil, waqaf & ibtida\', serta memahami teori tajwid bertaraf sanad Riwayat Hafs \'an \'Asim.',
    ageRange: 'Semua Peringkat Umur (Boleh Baca)',
    recommendedFor: 'Pelajar, guru, dan individu yang ingin membaca Al-Quran dengan tartil sempurna.',
    syllabus: [
      'Talaqqi 30 Juzuk berperingkat mengikut Mushaf Rasm Uthmani',
      'Penelitian Tanda-tanda Waqaf & Ibtida\' Mengikut Makna',
      'Kajian Matan Jazariyyah / Tuhfatul Atfal (Teori & Amali)',
      'Tahsin Surah-surah Pilihan & Surah Sajdah',
      'Ujian Kelayakan Sanad Talaqqi Al-Quran'
    ],
    durationMinutes: 50,
    monthlyPricing: {
      group: {
        '2x': 95,
        '3x': 135,
        '4x': 175
      },
      oneOnOne: {
        '2x': 170,
        '3x': 240,
        '4x': 310
      }
    },
    highlightFeatures: [
      'Dibimbing terus oleh Asatizah Pemegang Sanad',
      'Semakan baris demi baris secara musyafahah',
      'Peluang memperoleh Ijazah Sanad Bacaan',
      'Bimbingan tartil dan kelancaran nafas'
    ]
  },
  {
    id: 'warga-emas-barakah',
    name: 'Santai Barakah Warga Emas',
    targetCategory: 'warga-emas',
    tagline: 'Tempo Perlahan, Penuh Kasih Sayang & Menenangkan Jiwa',
    description: 'Kelas khusus untuk warga emas dengan font teks Al-Quran yang dibesarkan di skrin, tempo bacaan yang tenang, dan fokus kepada surah-surah amalan penenang hati serta membetulkan bacaan solat.',
    ageRange: '55 Tahun Ke Atas',
    recommendedFor: 'Warga emas atau pesara yang ingin mengisi masa dengan Al-Quran dengan santai.',
    syllabus: [
      'Tahsin Bacaan Surah Al-Fatihah & Doa-doa Solat Harian',
      'Tadabbur Ringkas Surah Lazim Juzuk Amma',
      'Bimbingan Surah Amalan Penyelamat Kubur (Surah Al-Mulk)',
      'Talaqqi Surah Yasin, Al-Waqi\'ah & Al-Kahf',
      'Koreksi Sebutan Santai Tanpa Bebanan Hafalan Berat'
    ],
    durationMinutes: 40,
    monthlyPricing: {
      group: {
        '2x': 70,
        '3x': 95,
        '4x': 125
      },
      oneOnOne: {
        '2x': 130,
        '3x': 180,
        '4x': 230
      }
    },
    highlightFeatures: [
      'Pengajar dilatih khas untuk santun warga emas',
      'Bantuan teknikal setup Google Meet/Zoom sehingga bersambung',
      'Bahan bacaan digital bersaiz besar (HD)',
      'Suasana kelas yang sangat menenangkan'
    ]
  }
];

export const TEACHER_PROFILES: TeacherProfile[] = [
  {
    id: 'ustazah-nur-hanan',
    name: 'Ustazah Nur Hanan binti Zulkifli',
    title: 'Ketua Bimbingan Talaqqi & Asas Iqra\' Kanak-kanak',
    credentials: [
      'Pemegang Sanad Riwayat Hafs \'an \'Asim (Tareeq Syatibiyyah)',
      'Sarjana Muda Pengajian Quran & Sunnah, Universiti Sains Islam Malaysia (USIM)',
      'Tauliah Mengajar Al-Quran Negeri Selangor & MAIWP'
    ],
    specialty: 'Psikologi Kanak-kanak & Pemulihan Iqra\' Pantas',
    yearsExperience: 8,
    image: '/src/assets/images/teacher_recitation_portrait_1792080419909.jpg',
    totalStudentsTaught: 1240,
    gender: 'ustazah',
    status: 'Tersedia'
  },
  {
    id: 'ustaz-firdaus-alhafiz',
    name: 'Ustaz Muhammad Firdaus Al-Hafiz',
    title: 'Penasihat Akademik & Pensanad Qiraat',
    credentials: [
      'Syahadah Tahfiz Al-Quran 30 Juzuk Bersanad',
      'Graduan Kuliyyah Al-Quran, Universiti Al-Azhar, Kaherah',
      'Hakim Majlis Tilawah & Hafazan Peringkat Daerah'
    ],
    specialty: 'Tahsin Lanjutan, Makam Tilawah & Talaqqi Dewasa',
    yearsExperience: 11,
    image: '/src/assets/images/hero_quran_recitation_1792080420491.jpg',
    totalStudentsTaught: 1890,
    gender: 'ustaz',
    status: 'Tersedia'
  },
  {
    id: 'ustazah-fatimah-azzahra',
    name: 'Ustazah Fatimah Azzahra Al-Baqir',
    title: 'Pengajar Khas Celik Quran Dewasa & Warga Emas',
    credentials: [
      'Ijazah Sarjana Muda Usuluddin (Tafsir & Hadis)',
      'Sijil Kaedah Pengajaran Al-Quran Braille & Dewasa Sifar',
      'Pengalaman 9 tahun membimbing lebih 700 peserta dewasa'
    ],
    specialty: 'Bimbingan Dewasa Sifar & Surah Amalan Harian',
    yearsExperience: 9,
    image: '/src/assets/images/learning_kids_iqra_1792080420143.jpg',
    totalStudentsTaught: 980,
    gender: 'ustazah',
    status: 'Tersedia'
  }
];

export const INITIAL_REGISTRATIONS: RegistrationRecord[] = [
  {
    id: 'AFQ-2026-8921',
    studentName: 'Ahmad Rayyan bin Khairul',
    category: 'kanak-kanak',
    age: 7,
    gender: 'lelaki',
    parentName: 'Khairul Anwar',
    whatsapp: '0123456789',
    email: 'khairul.anwar@gmail.com',
    state: 'Selangor',
    packageId: 'iqra-cilik',
    packageName: 'Iqra\' Cilik Bintang',
    classFormat: 'one-on-one',
    frequency: '2x',
    preferredDays: ['Selasa', 'Khamis'],
    timeSlot: 'malam',
    timeSlotDetail: '8:30 Malam - 9:10 Malam',
    teacherPreference: 'ustaz',
    currentLevel: 'iqra-1-3',
    notes: 'Anak baru kenal alif ba ta tapi sebutan masih tertukar jim dan kha.',
    monthlyFee: 140,
    registeredAt: '2026-10-12',
    status: 'Kelas Ditetapkan',
    assignedTeacher: 'Ustaz Muhammad Firdaus Al-Hafiz',
    meetLink: 'https://meet.google.com/afq-ray-2026',
    firstTrialDate: 'Khamis, 8:30 Malam (Sesi Suai Kenal 20 Minit)'
  },
  {
    id: 'AFQ-2026-8945',
    studentName: 'Puan Siti Rahmah binti Abdullah',
    category: 'dewasa',
    age: 42,
    gender: 'perempuan',
    whatsapp: '0198765432',
    email: 'siti.rahmah@yahoo.com',
    state: 'Kuala Lumpur',
    packageId: 'dewasa-celik-quran',
    packageName: 'Celik Al-Quran Dewasa',
    classFormat: 'one-on-one',
    frequency: '3x',
    preferredDays: ['Isnin', 'Rabu', 'Jumaat'],
    timeSlot: 'malam',
    timeSlotDetail: '9:15 Malam - 10:00 Malam',
    teacherPreference: 'ustazah',
    currentLevel: 'al-quran-merangkak',
    notes: 'Ingin perbaiki makhraj huruf dan hukum mad untuk lancarkan solat.',
    monthlyFee: 210,
    registeredAt: '2026-10-14',
    status: 'Disahkan',
    assignedTeacher: 'Ustazah Nur Hanan binti Zulkifli',
    meetLink: 'https://meet.google.com/afq-siti-402',
    firstTrialDate: 'Isnin depan, 9:15 Malam'
  },
  {
    id: 'AFQ-2026-8960',
    studentName: 'Haji Othman bin Kassim',
    category: 'warga-emas',
    age: 64,
    gender: 'lelaki',
    whatsapp: '0139988776',
    email: 'othman.kassim@gmail.com',
    state: 'Negeri Sembilan',
    packageId: 'warga-emas-barakah',
    packageName: 'Santai Barakah Warga Emas',
    classFormat: 'one-on-one',
    frequency: '2x',
    preferredDays: ['Sabtu', 'Ahad'],
    timeSlot: 'pagi',
    timeSlotDetail: '9:00 Pagi - 9:40 Pagi',
    teacherPreference: 'ustaz',
    currentLevel: 'al-quran-merangkak',
    notes: 'Fokus bacaan Surah Al-Mulk dan Surah Yasin secara beransur-ansur.',
    monthlyFee: 130,
    registeredAt: '2026-10-15',
    status: 'Menunggu Pengesahan',
    assignedTeacher: 'Ustaz Muhammad Firdaus Al-Hafiz',
    meetLink: 'https://meet.google.com/afq-othman-90',
    firstTrialDate: 'Sabtu ini, 9:00 Pagi'
  }
];

export const DIAGNOSTIC_QUESTIONS: DiagnosticQuestion[] = [
  {
    id: 1,
    question: 'Bolehkah anda atau anak anda mengenal dan membunyikan Huruf Hijaiyyah tunggal (ا hingga ي)?',
    subtitle: 'Tahap pengenalan asas aksara Al-Quran',
    options: [
      {
        label: 'Belum kenal huruf langsung / Masih kerap tertukar titik',
        description: 'Perlu bimbingan visual dari huruf pertama Alif, Ba, Ta.',
        suggestedLevel: 'asas-sifar',
        suggestedPackageId: 'iqra-cilik'
      },
      {
        label: 'Kenal sebahagian huruf, tetapi sukar bila huruf disambung',
        description: 'Tahu huruf tunggal tapi keliru bentuk huruf di awal, tengah dan akhir kata.',
        suggestedLevel: 'iqra-1-3',
        suggestedPackageId: 'iqra-cilik'
      },
      {
        label: 'Sudah kenal semua huruf bersambung dan tanda baris asas',
        description: 'Boleh membaca perkataan mudah dengan baris atas, bawah dan hadapan.',
        suggestedLevel: 'iqra-4-6',
        suggestedPackageId: 'dewasa-celik-quran'
      }
    ]
  },
  {
    id: 2,
    question: 'Bagaimana tahap penguasaan tanda bacaan seperti Tanwin, Sukun (mati), dan Sabdu (tasydid)?',
    subtitle: 'Tahap kepantasan mengeja dan menyambung bunyi',
    options: [
      {
        label: 'Belum belajar / Masih membaca secara mengeja satu persatu dengan lambat',
        description: 'Perlu latihan suku kata dan kaedah rentak sebutan Iqra\' Jilid 3 hingga 5.',
        suggestedLevel: 'iqra-1-3',
        suggestedPackageId: 'iqra-cilik'
      },
      {
        label: 'Boleh baca tapi selalu terlanggar tanda sukun dan sabdu',
        description: 'Kerap membaca tanpa dengung atau tertukar sebutan qalqalah (lantunan).',
        suggestedLevel: 'iqra-4-6',
        suggestedPackageId: 'dewasa-celik-quran'
      },
      {
        label: 'Sudah kuasai asas tanda mati dan sabdu, bersedia masuk mashaf Al-Quran',
        description: 'Boleh menyambung sebutan ayat dengan lancar tanpa perlu mengeja.',
        suggestedLevel: 'al-quran-merangkak',
        suggestedPackageId: 'dewasa-celik-quran'
      }
    ]
  },
  {
    id: 3,
    question: 'Sejauh mana kefahaman anda mengenai hukum tajwid praktikal (Dengung Ikhfa\', Idgham, Mad Asli vs Mad Wajib)?',
    subtitle: 'Tahap ketelitian bacaan dan makhraj',
    options: [
      {
        label: 'Belum tahu hukum tajwid / Baca mengikut apa yang tertera sahaja',
        description: 'Perlu pendedahan hukum tajwid praktikal tanpa istilah yang membebankan.',
        suggestedLevel: 'al-quran-merangkak',
        suggestedPackageId: 'dewasa-celik-quran'
      },
      {
        label: 'Tahu serba sedikit tetapi sukar mengira kadar panjang harakat dan dengung',
        description: 'Perlu bimbingan tahsin makhraj dan latihan tempo harakat yang konsisten.',
        suggestedLevel: 'tahsin-tajwid',
        suggestedPackageId: 'tahsin-talaqqi-sanad'
      },
      {
        label: 'Sudah tahu hukum tajwid, ingin memperkemas tartil dan menyemak bacaan 30 juzuk',
        description: 'Bermatlamat talaqqi musyafahah berdepan guru bersanad secara mendalam.',
        suggestedLevel: 'tahsin-tajwid',
        suggestedPackageId: 'tahsin-talaqqi-sanad'
      }
    ]
  }
];

export const TESTIMONIALS_DATA = [
  {
    name: 'Puan Haliza binti Mansor',
    role: 'Ibu kepada Rayyan (7 tahun) & Aisyah (10 tahun)',
    location: 'Shah Alam, Selangor',
    comment: 'Alhamdulillah dalam masa 3 bulan anak sulung berjaya habis Iqra\' 6 dan kini sudah masuk Quran Surah Al-Baqarah. Ustazah sangat lemah-lembut dan pandai pikat minat anak-anak. Tiada lagi drama menangis bila tiba waktu mengaji!',
    highlight: 'Khatam Iqra\' 6 dalam 3 bulan',
    packageUsed: 'Iqra\' Cilik Bintang'
  },
  {
    name: 'Encik Kamaruddin Noor',
    role: 'Pengurus Operasi Logistik (48 tahun)',
    location: 'Bangi, Selangor',
    comment: 'Dulu saya sangat segan sebab umur hampir 50 tahun tapi bacaan Al-Quran masih merangkak dan selalu tersasul makhraj huruf. Program Celik Dewasa 1-on-1 ini sangat menjaga privasi. Ustaz bimbing dengan sabar tanpa pernah menghakimi.',
    highlight: 'Hilang segan & lancar bertajwid',
    packageUsed: 'Celik Al-Quran Dewasa'
  },
  {
    name: 'Hajah Zaharah binti Ariffin',
    role: 'Pesara Pendidik (66 tahun)',
    location: 'Kuantan, Pahang',
    comment: 'Sangat mudah walaupun saya bukan celik IT. Anak tolong daftarkan, ustazah terus hubungi dan ajar cara masuk Google Meet. Sekarang setiap minggu saya menanti kelas untuk talaqqi Surah Al-Mulk dan Surah Yasin.',
    highlight: 'Sesi menenangkan jiwa setiap minggu',
    packageUsed: 'Santai Barakah Warga Emas'
  }
];

export const FAQS_DATA = [
  {
    question: 'Bagaimana kelas online ini dijalankan? Adakah perlu pasang software rumit?',
    answer: 'Kelas dijalankan secara langsung (live interactive video) menggunakan Google Meet atau Zoom. Anda hanya perlu klik link bilik kelas yang diberikan oleh pihak akademi melalui WhatsApp. Boleh gunakan telefon pintar, tablet (iPad/Android), mahupun komputer riba dengan kamera dan mikrofon yang berfungsi.'
  },
  {
    question: 'Bolehkah saya memilih guru wanita (Ustazah) untuk anak perempuan atau diri saya?',
    answer: 'Ya, 100% boleh! Semasa mengisi borang pendaftaran, anda boleh memilih keutamaan guru sama ada Ustaz, Ustazah, atau tiada halangan. Kami menjamin pelajar muslimah dewasa akan dibimbing oleh Ustazah bertauliah demi keselesaan.'
  },
  {
    question: 'Bagaimana jika pelajar ada kecemasan dan terpaksa cuti pada hari kelas?',
    answer: 'Pelajar hanya perlu maklumkan kepada guru sekurang-kurangnya 4 jam sebelum kelas bermula. Untuk pakej 1-on-1 peribadi, sesi boleh diganti (replacement class) pada waktu persetujuan bersama. Untuk kelas berkumpulan, kami menyediakan rakaman ringkas intisari bacaan hari tersebut.'
  },
  {
    question: 'Apakah perbezaan antara Kelas 1-on-1 dengan Kelas Kumpulan Kecil?',
    answer: 'Kelas 1-on-1 memberikan tumpuan 100% khusus kepada seorang pelajar sahaja sepanjang tempoh sesi (40-50 minit), membolehkan peningkatan 2x lebih pantas. Manakala kelas kumpulan dihadkan kepada maksimum 3 hingga 4 orang pelajar yang sama tahap agar setiap orang tetap mendapat giliran membaca secara musyafahah.'
  },
  {
    question: 'Adakah terdapat sesi percubaan sebelum membuat bayaran penuh?',
    answer: 'Ya! Selepas pendaftaran dihantar, pihak kami akan menyediakan satu Sesi Suai Kenal & Diagnostik Percuma selama 20 minit bersama guru untuk menentukan keserasian dan buku panduan yang tepat sebelum anda memulakan silibus rasmi.'
  },
  {
    question: 'Bagaimanakah kaedah pembayaran yuran bulanan?',
    answer: 'Yuran dibayar secara bulanan melalui perbankan internet FPX selamat, kad debit/kredit, atau pindahan bank manual (invois WhatsApp rasmi). Tiada kontrak terikat; anda boleh meneruskan atau menangguhkan pengajian mengikut keselesaan anda.'
  }
];
