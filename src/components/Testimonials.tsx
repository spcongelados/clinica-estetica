"use client";

import Image from "next/image";
import { useState, useRef } from "react";

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

function TestimonialCard({
  testimonial,
  index,
  sizeClass,
}: {
  testimonial: (typeof testimonials)[0];
  index: number;
  sizeClass: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const tiltX = ((e.clientY - rect.top - rect.height / 2) / (rect.height / 2)) * -3;
    const tiltY = ((e.clientX - rect.left - rect.width / 2) / (rect.width / 2)) * 3;
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <div
      className={`scroll-reveal ${sizeClass} group`}
      style={{ transitionDelay: `${index * 100}ms`, perspective: "600px" }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        className="h-full p-[1px] rounded-[2rem] bg-black/[0.04] ring-1 ring-black/[0.04] transition-all duration-500 cubic-spring hover:ring-rose/15"
        style={{
          transform: isHovered
            ? `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(-4px)`
            : "rotateX(0deg) rotateY(0deg) translateY(0)",
          boxShadow: isHovered
            ? "0 2px 4px rgba(0,0,0,0.02), 0 24px 64px rgba(196,144,138,0.06)"
            : "none",
        }}
      >
        <div className="h-full rounded-[calc(2rem-1px)] bg-white p-7 md:p-9 flex flex-col justify-between transition-colors duration-500">
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
              className={`mb-5 transition-all duration-500 cubic-spring ${
                isHovered ? "opacity-70 scale-110" : "opacity-50"
              }`}
            >
              <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
              <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
            </svg>
            <p className="text-base md:text-lg text-text font-light leading-relaxed transition-colors duration-500">
              {testimonial.text}
            </p>
          </div>
          <div className="mt-8 pt-6 border-t border-black/[0.05] flex items-center gap-3 transition-all duration-500">
            <div
              className={`w-10 h-10 rounded-full overflow-hidden bg-rose-light/30 shrink-0 relative transition-all duration-500 cubic-spring ${
                isHovered ? "scale-110 shadow-[0_0_16px_rgba(196,144,138,0.2)]" : ""
              }`}
            >
              <Image
                src={testimonial.avatar}
                alt={testimonial.name}
                fill
                sizes="40px"
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-medium text-text">{testimonial.name}</p>
              <p className="text-xs text-text-muted">{testimonial.detail}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section
      id="testimonios"
      className="relative px-6 md:px-12 lg:px-24 py-24 md:py-40"
    >
      <div className="max-w-[1280px] mx-auto">
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

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5">
          {testimonials.map((t, i) => {
            const sizes = [
              "md:col-span-7 md:row-span-1",
              "md:col-span-5 md:row-span-1",
              "md:col-span-5 md:row-span-1",
              "md:col-span-7 md:row-span-1",
            ];
            return (
              <TestimonialCard
                key={t.name}
                testimonial={t}
                index={i}
                sizeClass={sizes[i]}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
