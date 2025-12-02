import React, { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Features } from './components/Features';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

const App: React.FC = () => {
  
  // Basic SEO structured data
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "HomeAndConstructionBusiness",
      "name": "Caravan Toldos",
      "image": "https://picsum.photos/seed/awning_luxury/1920/1080",
      "telephone": "554832460673",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "R. José Volnei de Souza, Galpão 11",
        "addressLocality": "São José",
        "addressRegion": "SC",
        "postalCode": "88113-325",
        "addressCountry": "BR"
      },
      "priceRange": "$$",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "08:00",
        "closes": "18:00"
      }
    });
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    }
  }, []);

  return (
    <div className="font-sans antialiased text-gray-900 bg-white selection:bg-brand-gold selection:text-brand-navy">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Features />
        <Gallery />
        <Testimonials />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default App;