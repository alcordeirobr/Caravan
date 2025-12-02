import React from 'react';
import { Button } from './Button';
import { Star, ShieldCheck, Clock } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div id="home" className="relative bg-brand-navy pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://caravantoldos.com.br/wp-content/webp-express/webp-images/uploads/2024/02/Aluzinco2.jpg.webp" 
          alt="Cobertura de luxo Caravan Toldos em Aluzinco" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="lg:w-2/3">
          <div className="inline-flex items-center gap-2 bg-brand-gold/10 border border-brand-gold/30 rounded-full px-4 py-1 mb-6 fade-in-up backdrop-blur-sm">
            <Star className="w-4 h-4 text-brand-gold" fill="currentColor" />
            <span className="text-brand-gold font-semibold text-sm tracking-wide uppercase">Líder em Coberturas em SC</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6 fade-in-up" style={{animationDelay: '0.1s'}}>
            Transforme seu Espaço Externo em um <span className="text-brand-gold">Refúgio de Luxo</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl fade-in-up leading-relaxed" style={{animationDelay: '0.2s'}}>
            Não deixe o sol ou a chuva limitarem o uso da sua área. Proteção solar premium, conforto térmico e design sofisticado. 
            <span className="block mt-4 text-white font-semibold">
              Junte-se a +5.000 clientes que valorizaram seus imóveis.
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 fade-in-up" style={{animationDelay: '0.3s'}}>
            <Button 
              text="Quero um Orçamento Agora" 
              variant="primary" 
              whatsappMessage="Olá! Vi a capa do site e quero transformar minha área externa. Pode me passar um orçamento?"
            />
            <Button 
              text="Ver Projetos Realizados" 
              variant="secondary" 
              icon={false} 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            />
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 fade-in-up border-t border-white/10 pt-6" style={{animationDelay: '0.4s'}}>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-brand-gold" />
              <span>Garantia de Fábrica</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-brand-gold" />
              <span>Instalação Rápida</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-brand-gold" />
              <span>Acabamento Premium</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};