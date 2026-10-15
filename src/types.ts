export type StudentCategory = 'kanak-kanak' | 'dewasa' | 'warga-emas';

export type CurrentLevel = 
  | 'asas-sifar' 
  | 'iqra-1-3' 
  | 'iqra-4-6' 
  | 'al-quran-merangkak' 
  | 'tahsin-tajwid';

export type ClassFormat = 'one-on-one' | 'group';

export type FrequencyOption = '2x' | '3x' | '4x';

export type TimeSlot = 'pagi' | 'petang' | 'malam';

export type TeacherGender = 'ustaz' | 'ustazah' | 'tiada-halangan';

export interface ProgramPackage {
  id: string;
  name: string;
  targetCategory: StudentCategory | 'semua';
  tagline: string;
  description: string;
  ageRange: string;
  recommendedFor: string;
  syllabus: string[];
  durationMinutes: number;
  monthlyPricing: {
    group: {
      '2x': number;
      '3x': number;
      '4x': number;
    };
    oneOnOne: {
      '2x': number;
      '3x': number;
      '4x': number;
    };
  };
  highlightFeatures: string[];
  popular?: boolean;
}

export interface TeacherProfile {
  id: string;
  name: string;
  title: string;
  credentials: string[];
  specialty: string;
  yearsExperience: number;
  image: string;
  totalStudentsTaught: number;
  gender: 'ustaz' | 'ustazah';
  status: 'Tersedia' | 'Slot Penuh';
}

export interface RegistrationRecord {
  id: string;
  studentName: string;
  category: StudentCategory;
  age: number;
  gender: 'lelaki' | 'perempuan';
  parentName?: string;
  whatsapp: string;
  email: string;
  state: string;
  packageId: string;
  packageName: string;
  classFormat: ClassFormat;
  frequency: FrequencyOption;
  preferredDays: string[];
  timeSlot: TimeSlot;
  timeSlotDetail: string;
  teacherPreference: TeacherGender;
  currentLevel: CurrentLevel;
  notes?: string;
  monthlyFee: number;
  registeredAt: string;
  status: 'Menunggu Pengesahan' | 'Disahkan' | 'Kelas Ditetapkan';
  assignedTeacher?: string;
  meetLink?: string;
  firstTrialDate?: string;
}

export interface DiagnosticQuestion {
  id: number;
  question: string;
  subtitle: string;
  options: {
    label: string;
    description: string;
    suggestedLevel: CurrentLevel;
    suggestedPackageId: string;
  }[];
}
