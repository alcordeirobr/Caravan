import React from 'react';
import { Stat } from '../types';

const stats: Stat[] = [
  { value: '+15', label: 'Anos de Experiência' },
  { value: '+200k', label: 'm² Instalados' },
  { value: '+5k', label: 'Clientes Satisfeitos' },
  { value: '100%', label: 'Compromisso com Prazo' },
];

export const Stats: React.FC = () => {
  return (
    <div className="bg-brand-navy border-t border-white/5 py-12 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute right-0 top-0 w-64 h-64 bg-brand-gold blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-4">
              <div className="text-4xl md:text-5xl font-black text-brand-gold mb-2 font-sans tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-gray-300 font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};