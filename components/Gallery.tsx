import React from 'react';
import { Button } from './Button';
import { ArrowRight } from 'lucide-react';

export const Gallery: React.FC = () => {
  const projects = [
    { title: "Residencial Premium", category: "Policarbonato Alveolar", img: "https://picsum.photos/seed/patio1/600/400" },
    { title: "Área Gourmet", category: "Toldo Retrátil", img: "https://picsum.photos/seed/patio2/600/400" },
    { title: "Fachada Comercial", category: "Lona Vinílica", img: "https://picsum.photos/seed/shopawning/600/400" },
    { title: "Garagem Externa", category: "Estrutura Metálica", img: "https://picsum.photos/seed/garage/600/400" },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <span className="text-brand-gold font-bold tracking-wider uppercase text-sm">Nosso Portfólio</span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mt-2">Obras que Inspiram</h2>
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 text-brand-navy font-semibold hover:text-brand-gold transition-colors mt-4 md:mt-0 group">
            Ver galeria completa 
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {projects.map((project, idx) => (
            <div key={idx} className="group relative rounded-xl overflow-hidden cursor-pointer h-80 shadow-lg">
              <img 
                src={project.img} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-brand-gold text-xs font-bold uppercase tracking-wider mb-1">{project.category}</p>
                <h3 className="text-white text-xl font-bold">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-6">Gostou do que viu? Podemos fazer igual ou melhor no seu espaço.</p>
          <Button 
            text="Solicitar Projeto Semelhante" 
            variant="outline" 
            whatsappMessage="Olá, vi as fotos dos projetos no site e gostaria de saber o preço para fazer algo similar."
          />
        </div>
      </div>
    </section>
  );
};