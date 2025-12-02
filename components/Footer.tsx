import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-slate-950 text-gray-300 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand Info */}
          <div>
             <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-brand-gold rounded flex items-center justify-center">
                  <span className="text-brand-navy font-bold">CT</span>
                </div>
                <span className="font-bold text-xl text-white">CARAVAN TOLDOS</span>
             </div>
             <p className="text-sm leading-relaxed mb-6">
               Especialistas em coberturas de alto padrão. Há 15 anos protegendo seu patrimônio com elegância e durabilidade. 
               Qualidade que você vê, confiança que você sente.
             </p>
             <div className="flex gap-4">
               <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-gold hover:text-brand-navy transition-all">
                 <Instagram className="w-5 h-5" />
               </a>
               <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-gold hover:text-brand-navy transition-all">
                 <Facebook className="w-5 h-5" />
               </a>
             </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="hover:text-brand-gold transition-colors">Início</a></li>
              <li><a href="#projects" className="hover:text-brand-gold transition-colors">Nossos Projetos</a></li>
              <li><a href="#benefits" className="hover:text-brand-gold transition-colors">Benefícios</a></li>
              <li><a href="#testimonials" className="hover:text-brand-gold transition-colors">Depoimentos</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Fale Conosco</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-gold shrink-0 mt-1" />
                <span>R. José Volnei de Souza, Galpão 11 - Real Parque, São José - SC, 88113-325</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-gold shrink-0" />
                <a href="tel:4832460673" className="hover:text-white transition-colors">(48) 3246.0673</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-gold shrink-0" />
                <a href="mailto:contato@caravantoldos.com.br" className="hover:text-white transition-colors">contato@caravantoldos.com.br</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-black/20 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>CNPJ: 45.135.192/0001-81 - Caravan Toldos LTDA &copy; {new Date().getFullYear()}</p>
          <div className="flex gap-4">
             <span>Política de Privacidade</span>
             <span>Termos de Uso</span>
          </div>
        </div>
      </div>
    </footer>
  );
};