"use client";

import Image from "next/image";

const testimonials = [
  {
    text: "La Dra. Montserrat tiene unas manos exquisitas. Llevo tres años con ella y los resultados siempre son naturales. Nunca ese aspecto de 'me he hecho algo'. Sales siendo tú, solo que mejor.",
    name: "María G.",
    detail: "Paciente desde 2022",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop&q=80",
  },
  {
    text: "Después de probar varias clínicas, encontré por fin un sitio donde realmente escuchan lo que quiero. El trato es impecable y los resultados hablan solos. No me voy a ningún otro sitio.",
    name: "Carla G.",
    detail: "Paciente desde 2021",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&fit=crop&q=80",
  },
  {
    text: "Lo que más valoro es la honestidad. Cuando algo no te conviene, te lo dice. Esa confianza es impagable. Además, su técnica con el ácido hialurónico es la mejor que he visto.",
    name: "Elena R.",
    detail: "Paciente desde 2023",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&fit=crop&q=80",
  },
  {
    text: "Fui con miedo por ser mi primer tratamiento estético y salí encantada. Se toma todo el tiempo para explicarte cada paso. La diferencia entre una doctora de verdad y un centro cualquiera es abismal.",
    name: "Ana M.",
    detail: "Paciente desde 2024",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=96&h=96&fit=crop&q=80",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonios"
      className="relative px-6 md:px-12 lg:px-24 py-24 md:py-40"
    >
      <div className="max-w-[1280px] mx-auto">
        {/* Section header */}
        <div className="mb-16 md:mb-24">
          <span className="scroll-reveal inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] font-medium bg-rose-light/60 text-rose-deep ring-1 ring-rose/20 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-rose" />
            Testimonios
          </span>
          <h2 className="scroll-reveal text-4xl sm:text-5xl md:text-6xl font-light tracking-[-0.03em] leading-[1.1] text-text max-w-2xl">
            La confianza de
            <br />
            quienes ya
            <br />
            <span className="text-rose">han confiado.</span>
          </h2>
        </div>

        {/* Asymmetrical testimonial grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
          {testimonials.map((t, i) => {
            const sizes = [
              "md:col-span-7 md:row-span-1",
              "md:col-span-5 md:row-span-1",
              "md:col-span-5 md:row-span-1",
              "md:col-span-7 md:row-span-1",
            ];
            return (
              <div
                key={t.name}
                className={`scroll-reveal ${sizes[i]}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="h-full p-[1px] rounded-[2rem] bg-black/[0.04] ring-1 ring-black/[0.04]">
                  <div className="h-full rounded-[calc(2rem-1px)] bg-white p-7 md:p-9 flex flex-col justify-between">
                    <div>
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#C4908A"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mb-5 opacity-50"
                      >
                        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                        <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                      </svg>
                      <p className="text-base md:text-lg text-text font-light leading-relaxed">
                        {t.text}
                      </p>
                    </div>
                    <div className="mt-8 pt-6 border-t border-black/[0.05] flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden bg-rose-light/30 shrink-0 relative">
                        <Image
                          src={t.avatar}
                          alt={t.name}
                          fill
                          sizes="40px"
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-text">{t.name}</p>
                        <p className="text-xs text-text-muted">{t.detail}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
