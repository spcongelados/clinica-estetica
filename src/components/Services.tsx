"use client";

const services = [
  {
    title: "Toxina Botulínica",
    desc: "Relajación de arrugas de expresión con resultados naturales. Mirada descansada sin perder expresividad.",
    size: "md:col-span-4 md:row-span-1",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
  },
  {
    title: "Ácido Hialurónico",
    desc: "Rellenos dérmicos para restaurar volúmenes, perfilar labios y suavizar surcos con acabado invisible.",
    size: "md:col-span-4 md:row-span-1",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
      </svg>
    ),
  },
  {
    title: "Rejuvenecimiento Facial",
    desc: "Protocolos integrales que combinan tecnologías avanzadas para restaurar la firmeza y luminosidad de tu piel.",
    size: "md:col-span-5 md:row-span-2",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <ellipse cx="12" cy="12" rx="4" ry="7" />
        <path d="M12 5V19" />
      </svg>
    ),
  },
  {
    title: "Láser IPL",
    desc: "Fotorejuvenecimiento para eliminar manchas, rojeces y lesiones vasculares con tecnología de luz pulsada intensa.",
    size: "md:col-span-3 md:row-span-1",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 3v1M12 20v1M5.6 5.6l.7.7M17.7 17.7l.7.7M3 12h1M20 12h1M5.6 18.4l.7-.7M17.7 6.3l.7-.7" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
  },
  {
    title: "Peelings Químicos",
    desc: "Renovación celular profunda con formulaciones personalizadas para cada tipo y necesidad de piel.",
    size: "md:col-span-3 md:row-span-1",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 3a4 4 0 0 1 4 4v1h-8V7a4 4 0 0 1 4-4Z" />
        <path d="M8 8h8v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V8Z" />
        <path d="M10 12h4" />
      </svg>
    ),
  },
  {
    title: "Mesoterapia Facial",
    desc: "Microinyecciones de vitaminas, minerales y ácido hialurónico para hidratar y revitalizar la piel desde dentro.",
    size: "md:col-span-4 md:row-span-1",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 12L12 12.01" />
        <path d="M8 12L8 12.01" />
        <path d="M16 12L16 12.01" />
        <path d="M12 8L12 8.01" />
        <path d="M12 16L12 16.01" />
      </svg>
    ),
  },
  {
    title: "Hilos Tensores",
    desc: "Lifting no quirúrgico con hilos de PDO que estimulan el colágeno y reposicionan los tejidos faciales.",
    size: "md:col-span-4 md:row-span-1",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 12L4 12" />
        <path d="M20 12L16 8" />
        <path d="M20 12L16 16" />
        <path d="M4 12L8 8" />
        <path d="M4 12L8 16" />
      </svg>
    ),
  },
];

export function Services() {
  return (
    <section
      id="servicios"
      className="relative px-6 md:px-12 lg:px-24 py-24 md:py-40"
    >
      <div className="max-w-[1280px] mx-auto">
        {/* Section header */}
        <div className="mb-16 md:mb-24">
          <span className="scroll-reveal inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] font-medium bg-rose-light/60 text-rose-deep ring-1 ring-rose/20 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-rose" />
            Tratamientos
          </span>
          <h2 className="scroll-reveal text-4xl sm:text-5xl md:text-6xl font-light tracking-[-0.03em] leading-[1.1] text-text max-w-2xl">
            Técnicas avanzadas
            <br />
            para resultados
            <br />
            <span className="text-rose">naturalmente visibles.</span>
          </h2>
        </div>

        {/* Asymmetrical Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-8 gap-4 md:gap-5">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`scroll-reveal ${s.size} group cursor-default`}
              style={{ transitionDelay: `${i * 75}ms` }}
            >
              {/* Double-Bezel: Outer Shell */}
              <div className="h-full p-[1.5px] rounded-[2rem] bg-black/[0.04] ring-1 ring-black/[0.04] transition-all duration-700 cubic-spring hover:bg-black/[0.06]">
                {/* Inner Core */}
                <div className="h-full rounded-[calc(2rem-1.5px)] bg-white p-7 md:p-9 transition-all duration-700 cubic-spring group-hover:shadow-[0_1px_2px_rgba(0,0,0,0.02),0_16px_48px_rgba(0,0,0,0.03)]">
                  <div className="flex flex-col h-full">
                    <div className="w-10 h-10 rounded-full bg-rose-light/40 flex items-center justify-center text-rose-deep mb-5">
                      {s.icon}
                    </div>
                    <h3 className="text-lg md:text-xl font-medium tracking-tight text-text mb-3">
                      {s.title}
                    </h3>
                    <p className="text-sm md:text-base text-text-muted font-light leading-relaxed flex-1">
                      {s.desc}
                    </p>
                    <span className="inline-flex items-center gap-1.5 mt-5 text-sm font-medium text-rose group-hover:gap-2.5 transition-all duration-500 cubic-spring">
                      Saber más
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
