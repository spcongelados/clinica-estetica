"use client";

import Image from "next/image";
import { useState, useRef } from "react";

function CredentialCard({ label, detail, index }: { label: string; detail: string; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const tiltX = ((e.clientY - rect.top - rect.height / 2) / (rect.height / 2)) * -5;
    const tiltY = ((e.clientX - rect.left - rect.width / 2) / (rect.width / 2)) * 5;
    setTilt({ x: tiltX, y: tiltY });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setTilt({ x: 0, y: 0 });
      }}
      className="scroll-reveal flex flex-col gap-1 p-4 rounded-2xl bg-white/60 transition-all duration-500 cubic-spring cursor-default"
      style={{
        transitionDelay: `${200 + index * 50}ms`,
        transform: isHovered
          ? `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(-2px)`
          : "rotateX(0deg) rotateY(0deg) translateY(0)",
        boxShadow: isHovered
          ? "0 2px 4px rgba(0,0,0,0.02), 0 12px 32px rgba(196,144,138,0.06), inset 0 1px 0 rgba(255,255,255,0.6)"
          : "inset 0 1px 0 rgba(255,255,255,0.3)",
      }}
    >
      <span className="text-xs uppercase tracking-[0.15em] text-rose font-medium transition-colors duration-500">
        {label}
      </span>
      <span className="text-sm font-medium text-text">{detail}</span>
    </div>
  );
}

export function About() {
  return (
    <section
      id="sobre-mi"
      className="relative px-6 md:px-12 lg:px-24 py-24 md:py-40 bg-bg-alt"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
          {/* Image column — Double Bezel */}
          <div className="scroll-reveal md:col-span-5 group">
            <div className="p-2 rounded-[2.5rem] bg-black/[0.03] ring-1 ring-black/[0.05] transition-all duration-700 cubic-spring group-hover:ring-rose/15 group-hover:bg-black/[0.05]">
              <div className="rounded-[calc(2.5rem-0.5rem)] overflow-hidden aspect-[3/4] bg-rose-light/20 relative">
                <Image
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&h=1067&fit=crop&q=85"
                  alt="Dra. Valeria Montserrat — Medicina Estética"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover transition-all duration-1000 cubic-in-out group-hover:scale-[1.03]"
                  priority
                />
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 cubic-spring" />
              </div>
            </div>
          </div>

          {/* Text column */}
          <div className="md:col-span-7">
            <span className="scroll-reveal inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] font-medium bg-rose-light/60 text-rose-deep ring-1 ring-rose/20 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-rose" />
              Sobre Mí
            </span>

            <h2 className="scroll-reveal text-3xl sm:text-4xl md:text-5xl font-light tracking-[-0.03em] leading-[1.15] text-text mb-8">
              La precisión médica
              <br />
              al servicio de
              <br />
              <span className="text-rose">tu expresión natural.</span>
            </h2>

            <div
              className="scroll-reveal space-y-5"
              style={{ transitionDelay: "100ms" }}
            >
              <p className="text-base md:text-lg text-text-muted font-light leading-relaxed">
                Soy la Dra. Valeria Montserrat, especialista en Medicina
                Estética con más de 15 años de trayectoria. Mi formación en
                medicina interna me proporciona una base científica sólida que
                aplico en cada tratamiento, garantizando seguridad, precisión y
                resultados predecibles.
              </p>
              <p className="text-base md:text-lg text-text-muted font-light leading-relaxed">
                Creo firmemente que la belleza reside en la armonía, no en la
                transformación. Mi enfoque se basa en realzar tus rasgos
                naturales con técnicas mínimamente invasivas, devolviéndole a
                tu rostro la vitalidad y frescura que el tiempo y el estilo de
                vida van atenuando.
              </p>
              <p className="text-base md:text-lg text-text-muted font-light leading-relaxed">
                Cada paciente recibe un plan personalizado. No existen dos
                rostros iguales ni dos tratamientos idénticos. Esa filosofía,
                unida a la tecnología más avanzada, es lo que me permite
                ofrecer resultados que se ven y se sienten naturales.
              </p>
            </div>

            {/* Credentials with hover */}
            <div className="grid grid-cols-2 gap-4 mt-10">
              {[
                { label: "Colegiada", detail: "Nº 2828-1546" },
                { label: "Formación", detail: "Universidad de Barcelona" },
                { label: "Especialidad", detail: "Medicina Estética" },
                { label: "Miembro de", detail: "SEME · AME" },
              ].map((c, i) => (
                <CredentialCard key={c.label} {...c} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
