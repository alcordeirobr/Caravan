import React from 'react';
import { Umbrella, Sun, Wind, Award } from 'lucide-react';
import { Button } from './Button';

export const Features: React.FC = () => {
  return (
    <section id="benefits" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            Por que escolher a <span className="text-brand-gold">Caravan Toldos?</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Não é apenas sobre sombra. É sobre durabilidade, estética e valorização do seu patrimônio. Utilizamos insumos de primeira linha para garantir o melhor resultado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              icon: <Umbrella className="w-8 h-8" />,
              title: "Proteção Total",
              desc: "Tecnologia impermeável que protege contra chuvas fortes e reduz o calor térmico."
            },
            {
              icon: <Sun className="w-8 h-8" />,
              title: "Filtro UV Premium",
              desc: "Bloqueio de até 98% dos raios solares, preservando seus móveis e piso."
            },
            {
              icon: <Wind className="w-8 h-8" />,
              title: "Alta Resistência",
              desc: "Estruturas em alumínio e policarbonato projetadas para suportar ventos e intempéries."
            },
            {
              icon: <Award className="w-8 h-8" />,
              title: "Acabamento de Luxo",
              desc: "Design moderno que se integra perfeitamente à arquitetura da sua casa ou loja."
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-b-4 border-brand-gold group">
              <div className="w-16 h-16 bg-brand-navy/5 rounded-full flex items-center justify-center text-brand-navy mb-6 group-hover:bg-brand-navy group-hover:text-white transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-brand-navy rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
            <div className="relative z-10 text-white">
                <h3 className="text-2xl font-bold mb-2">Não sabe qual o modelo ideal?</h3>
                <p className="text-gray-300 max-w-md">Nossa equipe técnica vai até você para avaliar o espaço e sugerir a melhor solução.</p>
            </div>
            <div className="relative z-10 shrink-0">
                <Button 
                  text="Agendar Visita Técnica" 
                  variant="primary" 
                  whatsappMessage="Olá, vi os benefícios no site e gostaria de agendar uma visita técnica gratuita."
                />
            </div>
        </div>
      </div>
    </section>
  );
};