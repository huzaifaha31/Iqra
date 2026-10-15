/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { PinkNavbar } from './components/PinkNavbar';
import { PinkHero } from './components/PinkHero';
import { PinkPackages } from './components/PinkPackages';
import { PinkRegistrationForm, SimpleRegistration } from './components/PinkRegistrationForm';
import { PinkFooter } from './components/PinkFooter';
import { PinkSuccessModal } from './components/PinkSuccessModal';

const STORAGE_KEY = 'simple_jomngaji_regs_v2';

const INITIAL_SIMPLE_REGS: SimpleRegistration[] = [
  {
    id: 'JN-2026-8910',
    name: 'Nur Aisyah binti Ahmad',
    age: '7 tahun',
    classType: 'iqra',
    whatsapp: '0102955726',
    notes: 'Anak baru mula belajar huruf Alif, Ba, Ta.',
    submittedAt: '15/10/2026'
  }
];

export default function App() {
  const [registrations, setRegistrations] = useState<SimpleRegistration[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch {
      // Fallback
    }
    return INITIAL_SIMPLE_REGS;
  });

  const [selectedClassType, setSelectedClassType] = useState<'iqra' | 'quran'>('iqra');
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [activeRegistration, setActiveRegistration] = useState<SimpleRegistration | null>(null);

  // Sync to local storage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(registrations));
    } catch {
      // Ignore write errors
    }
  }, [registrations]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenRegister = () => {
    scrollTo('daftar');
  };

  const handleSelectPackage = (type: 'iqra' | 'quran') => {
    setSelectedClassType(type);
    scrollTo('daftar');
  };

  const handleSuccess = (record: SimpleRegistration) => {
    setRegistrations((prev) => [record, ...prev]);
    setActiveRegistration(record);
    setIsSuccessModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF8F8] text-slate-800 font-sans selection:bg-rose-200 selection:text-rose-900">
      
      {/* Pink Header Nav */}
      <PinkNavbar
        onOpenRegister={handleOpenRegister}
      />

      <main className="flex-1">
        {/* Pink Hero with exact user greeting & copy */}
        <PinkHero
          onOpenRegister={handleOpenRegister}
        />

        {/* 2 Monthly Packages & Key Offerings */}
        <PinkPackages
          onSelectPackage={handleSelectPackage}
        />

        {/* Simple Registration Form with Umur & without time slot */}
        <PinkRegistrationForm
          selectedClassType={selectedClassType}
          onSuccess={handleSuccess}
        />
      </main>

      {/* Gentle Pink Footer with Doa & User Closing Quote */}
      <PinkFooter
        onOpenRegister={handleOpenRegister}
      />

      {/* Success Modal */}
      <PinkSuccessModal
        isOpen={isSuccessModalOpen}
        record={activeRegistration}
        onClose={() => setIsSuccessModalOpen(false)}
      />

    </div>
  );
}
