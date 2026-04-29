"use client";

import { useState, useRef } from "react";

function AnimatedInput({
  label,
  type = "text",
  required = false,
  placeholder,
  rows,
}: {
  label: string;
  type?: string;
  required?: boolean;
  placeholder: string;
  rows?: number;
}) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  const Container = rows ? "div" : "div";
  const InputTag = rows ? "textarea" : "input";

  return (
    <div className="flex flex-col gap-2 group">
      <label className="text-xs uppercase tracking-[0.15em] text-rose font-medium transition-all duration-500 cubic-spring group-hover:text-rose-deep">
        {label}
      </label>
      <div className="relative">
        <InputTag
          {...(rows ? { rows } : { type })}
          ref={inputRef as never}
          required={required}
          value={value}
          onChange={(e) => setValue((e.target as HTMLInputElement).value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={placeholder}
          className={`w-full px-4 py-3 rounded-2xl bg-bg-alt text-text text-sm font-light placeholder:text-text-muted/40 focus:outline-none transition-all duration-500 cubic-spring resize-none ${
            focused
              ? "ring-2 ring-rose/20 bg-white shadow-[0_4px_24px_rgba(196,144,138,0.06)]"
              : "ring-1 ring-transparent"
          }`}
          style={{
            boxShadow: focused
              ? "0 4px 24px rgba(196,144,138,0.06), inset 0 1px 0 rgba(255,255,255,0.6)"
              : "inset 0 1px 0 rgba(255,255,255,0.3)",
          }}
        />
        {/* Bottom highlight bar */}
        <span
          className={`absolute bottom-0 left-4 right-4 h-px bg-rose transition-all duration-500 cubic-spring ${
            focused ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
          }`}
        />
      </div>
    </div>
  );
}

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contacto"
      className="relative px-6 md:px-12 lg:px-24 py-24 md:py-40 bg-bg-alt"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          {/* Left: Info */}
          <div className="md:col-span-5">
            <span className="scroll-reveal inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] font-medium bg-rose-light/60 text-rose-deep ring-1 ring-rose/20 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-rose" />
              Contacto
            </span>

            <h2 className="scroll-reveal text-4xl sm:text-5xl md:text-6xl font-light tracking-[-0.03em] leading-[1.1] text-text mb-8">
              Hablemos de
              <br />
              <span className="text-rose">tu proyecto</span>
              <br />
              estético.
            </h2>

            <p
              className="scroll-reveal text-base text-text-muted font-light leading-relaxed mb-12 max-w-md"
              style={{ transitionDelay: "100ms" }}
            >
              La primera consulta es un espacio para conocernos, entender tus
              objetivos y diseñar juntos un plan personalizado sin compromiso.
            </p>

            <div
              className="scroll-reveal space-y-6"
              style={{ transitionDelay: "150ms" }}
            >
              {[
                {
                  label: "Dirección",
                  value: "Carrer de Provença 284, Bajos\n08008 Barcelona",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  ),
                },
                {
                  label: "Teléfono",
                  value: "+34 932 541 187",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  ),
                },
                {
                  label: "Email",
                  value: "info@dramontserrat.com",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  ),
                },
                {
                  label: "Horario",
                  value: "Lunes – Viernes: 10:00 – 19:00",
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  ),
                },
              ].map((item) => (
                <div key={item.label} className="flex gap-4 group cursor-default">
                  <div className="w-9 h-9 rounded-full bg-rose-light/40 flex items-center justify-center text-rose-deep shrink-0 mt-0.5 transition-all duration-500 cubic-spring group-hover:bg-rose-light/60 group-hover:scale-110 group-hover:shadow-[0_0_16px_rgba(196,144,138,0.15)]">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] text-rose font-medium mb-1">
                      {item.label}
                    </p>
                    <p className="text-sm text-text font-light leading-relaxed whitespace-pre-line transition-colors duration-500 group-hover:text-text">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="md:col-span-7">
            <div className="scroll-reveal">
              <div className="p-[1.5px] rounded-[2.5rem] bg-black/[0.04] ring-1 ring-black/[0.04] transition-all duration-700 cubic-spring hover:ring-rose/10">
                <div className="rounded-[calc(2.5rem-1.5px)] bg-white p-8 md:p-12">
                  {submitted ? (
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                      <div className="w-16 h-16 rounded-full bg-rose-light/40 flex items-center justify-center mb-6 animate-[fade-up_0.6s_cubic-bezier(0.16,1,0.3,1)]">
                        <svg
                          width="28"
                          height="28"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#C4908A"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-light text-text mb-3">
                        Gracias por tu mensaje
                      </h3>
                      <p className="text-text-muted font-light max-w-sm">
                        Te responderemos personalmente en menos de 24 horas.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <AnimatedInput
                          label="Nombre"
                          required
                          placeholder="Tu nombre"
                        />
                        <AnimatedInput
                          label="Email"
                          type="email"
                          required
                          placeholder="tu@email.com"
                        />
                      </div>

                      <div className="flex flex-col gap-2 group">
                        <label className="text-xs uppercase tracking-[0.15em] text-rose font-medium transition-all duration-500 cubic-spring group-hover:text-rose-deep">
                          Tratamiento de interés
                        </label>
                        <select className="w-full px-4 py-3 rounded-2xl bg-bg-alt text-text text-sm font-light focus:outline-none focus:ring-2 focus:ring-rose/20 transition-all duration-500 cubic-spring appearance-none cursor-pointer hover:bg-white">
                          <option>Selecciona un tratamiento</option>
                          <option>Toxina Botulínica</option>
                          <option>Ácido Hialurónico</option>
                          <option>Rejuvenecimiento Facial</option>
                          <option>Láser IPL</option>
                          <option>Peeling Químico</option>
                          <option>Mesoterapia Facial</option>
                          <option>Hilos Tensores</option>
                          <option>Primera consulta informativa</option>
                        </select>
                      </div>

                      <AnimatedInput
                        label="Mensaje"
                        placeholder="Cuéntanos qué te gustaría mejorar..."
                        rows={4}
                      />

                      <button
                        type="submit"
                        onMouseDown={() => setIsPressed(true)}
                        onMouseUp={() => setIsPressed(false)}
                        onMouseLeave={() => setIsPressed(false)}
                        className="w-full flex items-center justify-center gap-3 pl-6 pr-2.5 py-3 bg-text text-bg rounded-full text-base font-medium transition-all duration-500 cubic-spring hover:scale-[0.98] active:scale-[0.96] group relative overflow-hidden"
                      >
                        {/* Shimmer effect */}
                        <span
                          className={`absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transition-all duration-700 cubic-spring ${
                            isPressed ? "translate-x-full" : "-translate-x-full"
                          } group-hover:translate-x-full`}
                          style={{ transitionDuration: "700ms" }}
                        />
                        <span className="relative z-10">Solicitar cita informativa</span>
                        <span className="relative z-10 w-8 h-8 rounded-full bg-white/15 flex items-center justify-center transition-all duration-500 cubic-spring group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:scale-105">
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
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
