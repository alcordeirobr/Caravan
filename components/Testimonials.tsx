import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '../types';
import { Button } from './Button';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Pedro Marquez",
    content: "Parabéns a toda equipe pois o serviço foi executado e muita boa qualidade. Entrega também tudo perfeitamente. Gostaria de agradecer pela dedicação de todos vocês. Valeu a pena pois o valor também foi perfeito.",
    rating: 5,
    initial: "P"
  },
  {
    id: 2,
    name: "Vitória Azevedo",
    content: "Excelente trabalho, muito prestativos e caprichosos! Transformaram completamente a área da minha piscina. O atendimento foi impecável do início ao fim.",
    rating: 5,
    initial: "V"
  },
  {
    id: 3,
    name: "Valquiria Tavares",
    content: "Excelente trabalho, TD perfeito, pontuais, super indico o trabalho deles. Estou super feliz com o resultado e recomendarei para todos os meus amigos.",
    rating: 5,
    initial: "V"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-brand-navy relative overflow-hidden">
       {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-gold rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Opinião de quem <span className="text-brand-gold">escolheu a Caravan</span>
          </h2>
          <p className="text-gray-300">
            A satisfação dos nossos clientes é a nossa melhor garantia. Junte-se à nossa lista de clientes felizes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 relative hover:bg-white/10 transition-colors duration-300">
              <Quote className="absolute top-6 right-6 w-10 h-10 text-brand-gold/20" />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-brand-navy font-bold text-xl">
                  {t.initial}
                </div>
                <div>
                  <h4 className="font-bold text-white">{t.name}</h4>
                  <div className="flex text-brand-gold">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-gray-300 italic leading-relaxed">"{t.content}"</p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center bg-white/5 rounded-2xl p-8 border border-brand-gold/20 max-w-3xl mx-auto">
             <h3 className="text-white text-xl mb-6 font-semibold">Pronto para ter essa experiência 5 estrelas?</h3>
             <Button 
               text="Falar com Especialista Agora" 
               variant="primary" 
               className="animate-pulse hover:animate-none" 
               whatsappMessage="Olá, vi os depoimentos de clientes satisfeitos e quero ter essa qualidade na minha casa também."
             />
             <p className="text-gray-400 text-sm mt-4">* Atendemos toda região de São José e Grande Florianópolis com pontualidade garantida.</p>
        </div>
      </div>
    </section>
  );
};