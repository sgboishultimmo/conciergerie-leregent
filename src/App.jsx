import React, { useState } from "react";

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f8f7f5] text-gray-900 font-serif">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur shadow-sm border-b border-gray-200 sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3 sm:gap-4">
            <img
              src="/logo-regent.png"
              alt="Logo Conciergerie Le Régent"
              className="h-10 sm:h-14 w-auto"
            />
            <h1 className="hidden sm:inline text-lg sm:text-2xl font-bold tracking-wide text-[#1b2a41]">
              Conciergerie <span className="text-[#bfa67a]">Le Régent</span>
            </h1>
          </div>

          {/* Navigation desktop */}
          <nav className="hidden md:flex space-x-8 lg:space-x-10 text-sm lg:text-lg font-light">
            <a href="#services" className="hover:text-[#bfa67a] transition">
              Services
            </a>
            <a href="#process" className="hover:text-[#bfa67a] transition">
              Expérience
            </a>
            <a href="#references" className="hover:text-[#bfa67a] transition">
              Références
            </a>
            <a href="#contact" className="hover:text-[#bfa67a] transition">
              Contact
            </a>
          </nav>

          {/* Bouton menu mobile */}
          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md border border-gray-300 text-gray-700"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Ouvrir le menu"
          >
            <div className="space-y-1">
              <span className="block w-5 h-[2px] bg-gray-800" />
              <span className="block w-5 h-[2px] bg-gray-800" />
              <span className="block w-5 h-[2px] bg-gray-800" />
            </div>
          </button>
        </div>

        {/* Menu mobile */}
        {mobileOpen && (
          <nav className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-3 space-y-2 text-sm">
              <a
                href="#services"
                className="block py-1"
                onClick={() => setMobileOpen(false)}
              >
                Services
              </a>
              <a
                href="#process"
                className="block py-1"
                onClick={() => setMobileOpen(false)}
              >
                Expérience
              </a>
              <a
                href="#references"
                className="block py-1"
                onClick={() => setMobileOpen(false)}
              >
                Références
              </a>
              <a
                href="#contact"
                className="block py-1"
                onClick={() => setMobileOpen(false)}
              >
                Contact
              </a>
            </div>
          </nav>
        )}
      </header>

      {/* Hero */}
      <section className="relative bg-[#1b2a41] text-white py-16 sm:py-24 md:py-28 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1400&q=60')] opacity-20 bg-cover bg-center"></div>

        <div className="relative max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 sm:mb-6 tracking-wide">
            L&apos;excellence au service de vos locations d&apos;exception
          </h2>
          <p className="text-base sm:text-lg md:text-xl font-light leading-relaxed mb-8 sm:mb-10">
            Une conciergerie premium dédiée aux propriétaires exigeants,
            offrant une expérience sur-mesure à vos voyageurs.
          </p>
          <a
            href="#contact"
            className="inline-block w-full sm:w-auto bg-[#bfa67a] text-[#1b2a41] px-8 sm:px-10 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold shadow hover:bg-[#d4c5a4] transition"
          >
            Obtenir un accompagnement personnalisé
          </a>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="max-w-7xl mx-auto px-4 sm:px-8 py-16 sm:py-24"
      >
        <h3 className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-16 text-[#1b2a41] tracking-wide">
          Services Haut de Gamme
        </h3>

        <div className="grid gap-8 sm:gap-10 sm:grid-cols-2 lg:grid-cols-3">
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
              className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg border border-gray-200"
            >
              <h4 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-[#1b2a41]">
                {s.title}
              </h4>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                {s.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#f2efe9] py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <h3
            id="process"
            className="text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-14 text-[#1b2a41] tracking-wide"
          >
            Une Expérience Pensée pour Vous
          </h3>

          <div className="space-y-10 sm:space-y-14 text-base sm:text-lg font-light">
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
              <div key={i} className="flex items-start gap-5 sm:gap-8">
                <div className="text-3xl sm:text-5xl font-bold text-[#bfa67a]">
                  {step.n}
                </div>
                <p className="leading-relaxed">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* References Section */}
      <section id="references" className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <h3 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-[#1b2a41] tracking-wide">
            Nos Références
          </h3>

          <p className="text-center text-base sm:text-lg text-gray-700 max-w-3xl mx-auto mb-12 sm:mb-14">
            Des propriétaires nous confient déjà la gestion de leurs gîtes haut
            de gamme. Nous veillons à chaque détail pour offrir une expérience
            irréprochable à leurs voyageurs.
          </p>

          <div className="grid gap-8 sm:gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {/* Les Rives de Chenonceaux */}
            <article className="group rounded-3xl overflow-hidden shadow-lg border border-gray-200 bg-[#f8f7f5] flex flex-col">
              <div className="relative">
                <img
                  src="/lesrives.png"
                  alt="Gîte Les Rives de Chenonceaux"
                  className="w-full h-56 sm:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-white/85 text-[#1b2a41] text-[10px] sm:text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full shadow">
                  Superhôte · Civray-de-Touraine
                </div>
              </div>
              <div className="p-6 sm:p-7 flex-1 flex flex-col">
                <h4 className="text-xl sm:text-2xl font-semibold text-[#1b2a41] mb-1">
                  Les Rives de Chenonceaux
                </h4>
                <p className="text-xs sm:text-sm text-[#bfa67a] mb-3">
                  4 chambres · 8 lits · Note Airbnb 4,89 ★
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Service tout inclus : gestion complète des séjours, ménage
                  hôtelier, gestion du linge et livraison de pain et
                  viennoiseries pour une expérience chaleureuse et soignée.
                </p>
              </div>
            </article>

            {/* Le Chant des Étoiles */}
            <article className="group rounded-3xl overflow-hidden shadow-lg border border-gray-200 bg-[#f8f7f5] flex flex-col">
              <div className="relative">
                <img
                  src="/chantetoiles.png"
                  alt="Gîte Le Chant des Étoiles"
                  className="w-full h-56 sm:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-white/85 text-[#1b2a41] text-[10px] sm:text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full shadow">
                  Coup de cœur voyageurs
                </div>
              </div>
              <div className="p-6 sm:p-7 flex-1 flex flex-col">
                <h4 className="text-xl sm:text-2xl font-semibold text-[#1b2a41] mb-1">
                  Le Chant des Étoiles
                </h4>
                <p className="text-xs sm:text-sm text-[#bfa67a] mb-3">
                  La Croix-en-Touraine · 4 chambres · 7 lits · Note Airbnb 4,87
                  ★
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Accompagnement sur mesure, accueil premium, suivi rigoureux
                  après chaque séjour et coordination discrète des prestataires
                  pour garantir un niveau de qualité constant.
                </p>
              </div>
            </article>

            {/* Votre gîte prochainement ? */}
            <article className="rounded-3xl border-2 border-dashed border-[#d4c5a4] bg-[#fdfaf3] p-6 sm:p-7 flex flex-col justify-center">
              <div className="mb-4 text-[#bfa67a] text-3xl sm:text-4xl">
                🗝️
              </div>
              <h4 className="text-xl sm:text-2xl font-semibold text-[#1b2a41] mb-3">
                Votre gîte, prochainement parmi nos références
              </h4>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                Vous possédez un bien d&apos;exception et souhaitez confier la
                gestion à une conciergerie premium ? Nous étudions chaque
                projet avec soin pour construire un accompagnement sur mesure.
              </p>
              <p className="text-xs sm:text-sm text-gray-500">
                Prenons le temps d&apos;échanger sur votre propriété, vos
                attentes et le niveau de service que vous souhaitez offrir à vos
                voyageurs.
              </p>
            </article>
          </div>

          <div className="mt-12 sm:mt-14 text-center">
            <a
              href="#contact"
              className="inline-block bg-[#1b2a41] text-white px-8 sm:px-10 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold hover:bg-[#2a3b57] transition shadow"
            >
              Nous confier votre bien
            </a>
          </div>
        </div>
      </section>

      {/* Team / Direction Section */}
      <section className="bg-[#f2efe9] py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <h3 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-[#1b2a41] tracking-wide">
            Direction & accompagnement
          </h3>
          <p className="text-center text-base sm:text-lg text-gray-700 max-w-3xl mx-auto mb-12 sm:mb-14">
            Derrière la Conciergerie Le Régent, des propriétaires engagés,
            passionnés par l&apos;hospitalité et la qualité de service, qui
            connaissent concrètement les attentes des hôtes comme des voyageurs.
          </p>

          <div className="grid gap-10 md:grid-cols-2">
            {/* Portrait 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden mb-5 shadow-lg border border-white/70">
                <img
                  src="/photo-sophie.jpeg"
                  alt="Direction Conciergerie Le Régent"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h4 className="text-lg sm:text-xl font-semibold text-[#1b2a41] mb-1">
                Sophie
              </h4>
              <p className="text-xs sm:text-sm text-[#bfa67a] mb-3">
                Fondatrice · Gestion opérationnelle & relation voyageurs
              </p>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                En charge de l&apos;accueil, de la coordination des prestataires
                et du suivi qualité après chaque séjour, avec une attention
                particulière portée aux détails qui font la différence.
              </p>
            </div>

            {/* Portrait 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden mb-5 shadow-lg border border-white/70">
                <img
                  src="/photo-greg.jpeg"
                  alt="Direction Conciergerie Le Régent"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h4 className="text-lg sm:text-xl font-semibold text-[#1b2a41] mb-1">
                Grégory
              </h4>
              <p className="text-xs sm:text-sm text-[#bfa67a] mb-3">
                Co-fondateur · Stratégie, expérience propriétaire & optimisation
              </p>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                Propriétaire et exploitant de gîtes, il accompagne la mise en
                place de la conciergerie, l&apos;organisation des séjours et le
                suivi de la rentabilité dans le temps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="max-w-4xl mx-auto px-4 sm:px-8 py-16 sm:py-24 text-center"
      >
        <h3 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-10 text-[#1b2a41] tracking-wide">
          Contact & Accompagnement
        </h3>
        <p className="text-base sm:text-xl font-light mb-8 sm:mb-10 max-w-2xl mx-auto">
          Confiez la gestion de votre bien à une conciergerie premium offrant
          rigueur, discrétion et excellence.
        </p>

        <a
          href="mailto:contact@conciergerieleregent.fr"
          className="inline-block bg-[#1b2a41] text-white px-8 sm:px-10 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-semibold hover:bg-[#2a3b57] transition shadow"
        >
          contact@conciergerieleregent.fr
        </a>
      </section>

      <footer className="text-center py-6 sm:py-8 bg-[#1b2a41] text-[#bfa67a] text-xs sm:text-sm tracking-wide">
        © {new Date().getFullYear()} Conciergerie Le Régent — Excellence &
        Sérénité.
      </footer>
    </div>
  );
}
