import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-[#f8f7f5] text-gray-900 font-serif">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img
              src="/logo-regent.png"
              alt="Logo Conciergerie Le Régent"
              className="h-14 w-auto"
            />
            <h1 className="text-2xl font-bold tracking-wide text-[#1b2a41]">
              Conciergerie <span className="text-[#bfa67a]">Le Régent</span>
            </h1>
          </div>
          <nav className="space-x-10 text-lg font-light">
            <a href="#services" className="hover:text-[#bfa67a] transition">
              Services
            </a>
            <a href="#process" className="hover:text-[#bfa67a] transition">
              Expérience
            </a>
            <a href="#contact" className="hover:text-[#bfa67a] transition">
              Contact
            </a>
          </nav>
        </div>
      </header>


      {/* Hero */}
      <section className="relative bg-[#1b2a41] text-white py-32 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=60')] opacity-20 bg-cover bg-center"></div>

        <div className="relative max-w-3xl mx-auto">
          <h2 className="text-5xl font-bold mb-6 tracking-wide">
            L&apos;excellence au service de vos locations d&apos;exception
          </h2>
          <p className="text-xl font-light leading-relaxed mb-10">
            Une conciergerie premium dédiée aux propriétaires exigeants,
            offrant une expérience sur-mesure à vos voyageurs.
          </p>
          <a
            href="#contact"
            className="bg-[#bfa67a] text-[#1b2a41] px-10 py-4 rounded-xl text-lg font-semibold shadow hover:bg-[#d4c5a4] transition"
          >
            Obtenir un accompagnement personnalisé
          </a>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="max-w-7xl mx-auto px-8 py-28">
        <h3 className="text-4xl font-bold text-center mb-16 text-[#1b2a41] tracking-wide">
          Services Haut de Gamme
        </h3>

        <div className="grid md:grid-cols-3 gap-14">
          {[
            {
              title: "Accueil personnalisé & expérience voyageurs",
              text: "Accueil élégant, attentionné, avec conseils sur mesure pour un séjour mémorable.",
            },
            {
              title: "Ménage prestige",
              text: "Prestations premium avec produits de qualité hôtelière et contrôles systématiques.",
            },
            {
              title: "Gestion du linge luxe",
              text: "Linge premium soigneusement entretenu : lavage, repassage, préparation raffinée.",
            },
            {
              title: "Conciergerie 7j/7",
              text: "Support réactif et discret pour vos voyageurs, résolution des imprévus, recommandations locales.",
            },
            {
              title: "Supervision & maintenance",
              text: "Contrôles réguliers du bien, gestion des prestataires, coordination des opérations.",
            },
            {
              title: "Optimisation du planning et de la rentabilité",
              text: "Gestion intelligente des séjours, rotation fluide et conseils personnalisés pour maximiser vos revenus.",
            },
          ].map((s, i) => (
            <div
              key={i}
              className="bg-white p-10 rounded-3xl shadow-lg border border-gray-200"
            >
              <h4 className="text-2xl font-semibold mb-4 text-[#1b2a41]">
                {s.title}
              </h4>
              <p className="text-gray-700 leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section id="process" className="bg-[#f2efe9] py-28">
        <div className="max-w-5xl mx-auto px-8">
          <h3 className="text-4xl font-bold text-center mb-14 text-[#1b2a41] tracking-wide">
            Une Expérience Pensée pour Vous
          </h3>

          <div className="space-y-14 text-lg font-light">
            {[
              {
                n: "01",
                text: "Rencontre et découverte de votre bien afin de comprendre vos attentes et votre positionnement.",
              },
              {
                n: "02",
                text: "Création d'une offre personnalisée adaptée à votre niveau d'exigence et au standing de votre propriété.",
              },
              {
                n: "03",
                text: "Gestion intégrale et discrète de vos séjours, avec une attention constante portée à l'excellence.",
              },
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-8">
                <div className="text-5xl font-bold text-[#bfa67a]">
                  {step.n}
                </div>
                <p className="leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* References Section */}
      <section className="bg-white py-28">
        <div className="max-w-7xl mx-auto px-8">
          <h3 className="text-4xl font-bold text-center mb-16 text-[#1b2a41] tracking-wide">
            Nos Références
          </h3>

          <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto mb-14">
            Nous accompagnons déjà plusieurs gîtes haut de gamme de la région, 
            en garantissant une qualité irréprochable et une expérience premium 
            pour leurs voyageurs.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Les Rives de Chenonceaux */}
            <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-200">
              <img 
                src="/lesrives.png" 
                alt="Les Rives de Chenonceaux" 
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h4 className="text-2xl font-semibold text-[#1b2a41] mb-2">
                  Les Rives de Chenonceaux
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Gîte 4 chambres, 8 lits — Note Airbnb 4,89 ★  
                  <br />Service complet incluant : gestion des séjours, livraison de pain, 
                  assistance voyageurs et coordination des prestataires.
                </p>
              </div>
            </div>

            {/* Le Chant des étoiles */}
            <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-200">
              <img 
                src="/chantetoiles.png" 
                alt="Le Chant des étoiles" 
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h4 className="text-2xl font-semibold text-[#1b2a41] mb-2">
                  Le Chant des Étoiles
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Gîte 4 chambres, 7 lits — Note Airbnb 4,87 ★  
                  <br />Accompagnement sur mesure, accueil premium, ménage hôtelier 
                  et suivi qualité à chaque séjour.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact */}
      <section id="contact" className="max-w-4xl mx-auto px-8 py-28 text-center">
        <h3 className="text-4xl font-bold mb-10 text-[#1b2a41] tracking-wide">
          Contact & Accompagnement
        </h3>
        <p className="text-xl font-light mb-10 max-w-2xl mx-auto">
          Confiez la gestion de votre bien à une conciergerie premium offrant
          rigueur, discrétion et excellence.
        </p>

        <a
          href="mailto:contact@conciergerieleregent.fr"
          className="inline-block bg-[#1b2a41] text-white px-10 py-5 rounded-xl text-lg font-semibold hover:bg-[#2a3b57] transition shadow"
        >
          contact@conciergerieleregent.fr
        </a>
      </section>

      <footer className="text-center py-8 bg-[#1b2a41] text-[#bfa67a] text-sm tracking-wide">
        © {new Date().getFullYear()} Conciergerie Le Régent — Excellence & Sérénité.
      </footer>
    </div>
  );
}
