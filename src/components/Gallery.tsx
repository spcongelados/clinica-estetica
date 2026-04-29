"use client";

import Image from "next/image";
import { useState } from "react";

const cases = [
  {
    id: "botox",
    label: "Toxina Botulínica",
    desc: "Relajación de arrugas de expresión en frente y entrecejo. Resultado a los 14 días.",
    before: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop&q=85",
    after: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&h=400&fit=crop&q=85",
  },
  {
    id: "fillers",
    label: "Ácido Hialurónico",
    desc: "Relleno de surcos nasogenianos y perfilado de labios con técnica de microcánula.",
    before: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=600&h=400&fit=crop&q=85",
    after: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&h=400&fit=crop&q=85",
  },
  {
    id: "ipl",
    label: "Láser IPL",
    desc: "Tratamiento de manchas y rojeces. Tres sesiones. Fototipo III.",
    before: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=600&h=400&fit=crop&q=85",
    after: "https://images.unsplash.com/photo-1609357871098-fa889a68bc68?w=600&h=400&fit=crop&q=85",
  },
  {
    id: "peeling",
    label: "Peeling Químico",
    desc: "Renovación cutánea con peeling de ácido glicólico al 35%. Textura y luminosidad.",
    before: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&h=400&fit=crop&q=85",
    after: "https://images.unsplash.com/photo-1609357605121-26bc7629e62f?w=600&h=400&fit=crop&q=85",
  },
];

export function Gallery() {
  const [active, setActive] = useState(cases[0].id);

  const current = cases.find((c) => c.id === active) || cases[0];

  return (
    <section className="relative px-6 md:px-12 lg:px-24 py-24 md:py-40">
      <div className="max-w-[1280px] mx-auto">
        {/* Section header */}
        <div className="mb-16 md:mb-24">
          <span className="scroll-reveal inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] font-medium bg-rose-light/60 text-rose-deep ring-1 ring-rose/20 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-rose" />
            Casos Reales
          </span>
          <h2 className="scroll-reveal text-4xl sm:text-5xl md:text-6xl font-light tracking-[-0.03em] leading-[1.1] text-text max-w-2xl">
            Resultados que
            <br />
            hablan por
            <br />
            <span className="text-rose">sí mismos.</span>
          </h2>
        </div>

        {/* Tabs */}
        <div className="scroll-reveal flex flex-wrap gap-2 mb-12">
          {cases.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-500 cubic-spring ${
                active === c.id
                  ? "bg-text text-bg shadow-[0_2px_16px_rgba(0,0,0,0.08)]"
                  : "bg-transparent text-text-muted hover:text-text hover:bg-black/[0.03]"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Before / After */}
        <div className="scroll-reveal grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6" style={{ transitionDelay: "100ms" }}>
          {/* Before */}
          <div className="p-[1.5px] rounded-[2.5rem] bg-black/[0.04] ring-1 ring-black/[0.04]">
            <div className="rounded-[calc(2.5rem-1.5px)] overflow-hidden bg-white">
              <div className="relative aspect-[3/2]">
                <Image
                  src={current.before}
                  alt={`Antes — ${current.label}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <span className="absolute top-5 left-5 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm text-white text-xs font-medium uppercase tracking-wider">
                  Antes
                </span>
              </div>
            </div>
          </div>

          {/* After */}
          <div className="p-[1.5px] rounded-[2.5rem] bg-black/[0.04] ring-1 ring-black/[0.04]">
            <div className="rounded-[calc(2.5rem-1.5px)] overflow-hidden bg-white">
              <div className="relative aspect-[3/2]">
                <Image
                  src={current.after}
                  alt={`Después — ${current.label}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <span className="absolute top-5 left-5 px-3 py-1.5 rounded-full bg-rose/90 backdrop-blur-sm text-white text-xs font-medium uppercase tracking-wider">
                  Después
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="scroll-reveal text-center text-base text-text-muted font-light mt-8 max-w-lg mx-auto" style={{ transitionDelay: "150ms" }}>
          {current.desc}
        </p>

        {/* Disclaimer */}
        <p className="scroll-reveal text-center text-xs text-text-muted/60 font-light mt-6 max-w-md mx-auto">
          * Los resultados pueden variar según cada paciente. Estas imágenes son
          representativas de resultados reales obtenidos en nuestra clínica.
        </p>
      </div>
    </section>
  );
}
