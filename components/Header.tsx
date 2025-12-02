import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Benefícios', href: '#benefits' },
    { name: 'Depoimentos', href: '#testimonials' },
    { name: 'Empresa', href: '#footer' },
  ];

  return (
    <nav className="fixed w-full z-40 bg-brand-navy/95 backdrop-blur-sm border-b border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center gap-2">
            {/* Logo simulation based on original image */}
            <div className="w-10 h-10 bg-brand-gold rounded-tl-xl rounded-br-xl flex items-center justify-center">
              <span className="text-brand-navy font-bold text-xl">CT</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl leading-none tracking-tight text-brand-gold">CARAVAN</span>
              <span className="text-sm tracking-widest text-gray-300">TOLDOS</span>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-brand-gold transition-colors px-3 py-2 rounded-md text-sm font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
             <a href="tel:4832460673" className="flex items-center gap-2 text-brand-gold font-bold">
                <Phone className="w-4 h-4" />
                (48) 3246-0673
             </a>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-brand-navy border-t border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};