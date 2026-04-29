"use client";

import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-32 pb-20 overflow-hidden">
      {/* Ambient light orbs */}
      <div
        className="absolute top-[-20%] right-[-10%] w-[700px] h-[700px] rounded-full opacity-[0.10] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, #E8C4BE 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute bottom-[-15%] left-[-8%] w-[500px] h-[500px] rounded-full opacity-[0.07] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, #D4A99A 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Subtle decorative image — floating abstract */}
      <div className="absolute top-[15%] right-[5%] w-[280px] h-[350px] md:w-[340px] md:h-[420px] opacity-[0.06] pointer-events-none hidden md:block">
        <svg viewBox="0 0 200 250" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="80" stroke="#C4908A" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="60" stroke="#C4908A" strokeWidth="0.3" />
          <circle cx="100" cy="100" r="40" stroke="#C4908A" strokeWidth="0.5" />
          <path d="M60 60C80 40 120 40 140 60" stroke="#C4908A" strokeWidth="0.5" />
          <path d="M65 75C85 55 115 55 135 75" stroke="#C4908A" strokeWidth="0.3" />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto w-full">
        {/* Eyebrow badge */}
        <div className="scroll-reveal flex justify-start mb-8">
          <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] font-medium bg-rose-light/60 text-rose-deep ring-1 ring-rose/20">
            <span className="w-1.5 h-1.5 rounded-full bg-rose" />
            Medicina Estética
          </span>
        </div>

        {/* Massive headline */}
        <h1 className="scroll-reveal text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-[-0.03em] leading-[1.05] text-text max-w-4xl mb-8">
          Tu belleza,
          <br />
          <span className="text-rose">nuestra ciencia.</span>
        </h1>

        {/* Subheadline */}
        <p
          className="scroll-reveal text-lg md:text-xl text-text-muted font-light max-w-lg leading-relaxed mb-12"
          style={{ transitionDelay: "100ms" }}
        >
          La Dra. Valeria Montserrat combina precisión médica con sensibilidad
          estética para realzar tu belleza natural con resultados armónicos y
          seguros.
        </p>

        {/* CTAs */}
        <div
          className="scroll-reveal flex flex-col sm:flex-row items-start gap-4"
          style={{ transitionDelay: "200ms" }}
        >
          <Link
            href="#contacto"
            className="flex items-center gap-3 pl-6 pr-2.5 py-2.5 bg-text text-bg rounded-full text-base font-medium transition-all duration-500 cubic-spring hover:scale-[0.98] active:scale-[0.96] group no-underline"
          >
            <span>Agenda tu primera consulta</span>
            <span className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center transition-all duration-500 cubic-spring group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:scale-105">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-bg"
              >
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </span>
          </Link>

          <Link
            href="#servicios"
            className="flex items-center gap-2 px-6 py-2.5 rounded-full text-base font-normal text-text-muted hover:text-text transition-all duration-500 cubic-spring hover:bg-black/[0.03] group no-underline"
          >
            Ver servicios
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-500 cubic-spring group-hover:translate-x-0.5"
            >
              <path d="M5 12H19M19 12L12 5M19 12L12 19" />
            </svg>
          </Link>
        </div>

        {/* Stats row */}
        <div
          className="scroll-reveal grid grid-cols-3 gap-8 md:gap-16 mt-24 pt-12 border-t border-black/[0.06]"
          style={{ transitionDelay: "300ms" }}
        >
          {[
            { value: "15+", label: "Años de experiencia" },
            { value: "8,000+", label: "Pacientes satisfechos" },
            { value: "100%", label: "Resultados naturales" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-2xl md:text-3xl font-light tracking-tight text-text">
                {s.value}
              </p>
              <p className="text-sm text-text-muted mt-1 font-light">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
