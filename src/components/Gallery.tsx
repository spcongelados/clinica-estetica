"use client";

import Image from "next/image";
import { useState, useRef, useCallback, useEffect } from "react";

const cases = [
  {
    id: "botox",
    label: "Toxina Botulínica",
    desc: "Relajación de arrugas de expresión en frente y entrecejo. Resultado a los 14 días.",
    before: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=533&fit=crop&q=85",
    after: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&h=533&fit=crop&q=85",
  },
  {
    id: "fillers",
    label: "Ácido Hialurónico",
    desc: "Relleno de surcos nasogenianos y perfilado de labios con técnica de microcánula.",
    before: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=800&h=533&fit=crop&q=85",
    after: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=800&h=533&fit=crop&q=85",
  },
  {
    id: "ipl",
    label: "Láser IPL",
    desc: "Tratamiento de manchas y rojeces. Tres sesiones. Fototipo III.",
    before: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=800&h=533&fit=crop&q=85",
    after: "https://images.unsplash.com/photo-1609357871098-fa889a68bc68?w=800&h=533&fit=crop&q=85",
  },
  {
    id: "peeling",
    label: "Peeling Químico",
    desc: "Renovación cutánea con peeling de ácido glicólico al 35%. Textura y luminosidad.",
    before: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&h=533&fit=crop&q=85",
    after: "https://images.unsplash.com/photo-1609357605121-26bc7629e62f?w=800&h=533&fit=crop&q=85",
  },
];

function ComparisonSlider({ before, after, label }: { before: string; after: string; label: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);

  const updatePosition = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.max(5, Math.min(95, ((clientX - rect.left) / rect.width) * 100));
      setPosition(x);
    },
    []
  );

  // Track container width for the before image
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () => setContainerWidth(el.getBoundingClientRect().width);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) updatePosition(e.clientX);
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging) updatePosition(e.touches[0].clientX);
  };

  return (
    <div
      ref={containerRef}
      className="relative aspect-[3/2] overflow-hidden cursor-ew-resize select-none group"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseUp}
      onTouchMove={handleTouchMove}
    >
      {/* After image (full width underneath) */}
      <Image
        src={after}
        alt={`Después — ${label}`}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover"
        draggable={false}
      />

      {/* Before image (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${position}%` }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={before}
          alt={`Antes — ${label}`}
          draggable={false}
          className="absolute top-0 left-0 h-full object-cover max-w-none"
          style={{ width: containerWidth || "100vw" }}
        />
      </div>

      {/* Slider line */}
      <div
        className="absolute inset-y-0 w-[2px] bg-white shadow-[0_0_16px_rgba(0,0,0,0.15)] pointer-events-none transition-opacity duration-300"
        style={{ left: `${position}%` }}
      />

      {/* Slider handle */}
      <div
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-[0_2px_16px_rgba(0,0,0,0.12)] flex items-center justify-center pointer-events-none transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_4px_24px_rgba(0,0,0,0.15)]"
        style={{ left: `${position}%` }}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#1a1a1a"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M8 4L16 12L8 20" />
          <path d="M16 4L8 12L16 20" />
        </svg>
      </div>

      {/* Labels */}
      <span
        className={`absolute top-5 left-5 px-3 py-1.5 rounded-full text-white text-xs font-medium uppercase tracking-wider backdrop-blur-sm transition-all duration-500 ${
          position > 30 ? "opacity-100" : "opacity-0"
        }`}
        style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      >
        Antes
      </span>
      <span
        className={`absolute top-5 right-5 px-3 py-1.5 rounded-full text-white text-xs font-medium uppercase tracking-wider backdrop-blur-sm transition-all duration-500 ${
          position < 70 ? "opacity-100" : "opacity-0"
        }`}
        style={{ backgroundColor: "rgba(196,144,138,0.85)" }}
      >
        Después
      </span>
    </div>
  );
}

export function Gallery() {
  const [active, setActive] = useState(cases[0].id);

  const current = cases.find((c) => c.id === active) || cases[0];

  return (
    <section className="relative px-6 md:px-12 lg:px-24 py-24 md:py-40">
      <div className="max-w-[1280px] mx-auto">
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
              className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-500 cubic-spring ${
                active === c.id
                  ? "bg-text text-bg shadow-[0_2px_16px_rgba(0,0,0,0.08)] scale-100"
                  : "bg-transparent text-text-muted hover:text-text hover:bg-black/[0.03] active:scale-[0.97]"
              }`}
            >
              {c.label}
              {active === c.id && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-rose md:hidden" />
              )}
            </button>
          ))}
        </div>

        {/* Comparison Slider */}
        <div className="scroll-reveal" style={{ transitionDelay: "100ms" }}>
          <div className="p-[1.5px] rounded-[2.5rem] bg-black/[0.04] ring-1 ring-black/[0.04]">
            <div className="rounded-[calc(2.5rem-1.5px)] overflow-hidden bg-white">
              <ComparisonSlider
                key={current.id}
                before={current.before}
                after={current.after}
                label={current.label}
              />
            </div>
          </div>
        </div>

        <p
          className="scroll-reveal text-center text-base text-text-muted font-light mt-8 max-w-lg mx-auto"
          style={{ transitionDelay: "150ms" }}
        >
          {current.desc}
        </p>

        <p className="scroll-reveal text-center text-xs text-text-muted/60 font-light mt-6 max-w-md mx-auto">
          * Los resultados pueden variar según cada paciente. Estas imágenes son
          representativas de resultados reales obtenidos en nuestra clínica.
        </p>
      </div>
    </section>
  );
}
