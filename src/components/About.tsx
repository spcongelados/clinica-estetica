"use client";

import Image from "next/image";

export function About() {
  return (
    <section
      id="sobre-mi"
      className="relative px-6 md:px-12 lg:px-24 py-24 md:py-40 bg-bg-alt"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
          {/* Image column — Double Bezel */}
          <div className="scroll-reveal md:col-span-5">
            <div className="p-2 rounded-[2.5rem] bg-black/[0.03] ring-1 ring-black/[0.05]">
              <div className="rounded-[calc(2.5rem-0.5rem)] overflow-hidden aspect-[3/4] bg-rose-light/20 relative">
                <Image
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&h=1067&fit=crop&q=85"
                  alt="Dra. Valeria Montserrat — Medicina Estética"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                  priority
                />
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

            {/* Credentials */}
            <div
              className="scroll-reveal grid grid-cols-2 gap-4 mt-10"
              style={{ transitionDelay: "200ms" }}
            >
              {[
                { label: "Colegiada", detail: "Nº 2828-1546" },
                { label: "Formación", detail: "Universidad de Barcelona" },
                { label: "Especialidad", detail: "Medicina Estética" },
                { label: "Miembro de", detail: "SEME · AME" },
              ].map((c) => (
                <div
                  key={c.label}
                  className="flex flex-col gap-1 p-4 rounded-2xl bg-white/60"
                >
                  <span className="text-xs uppercase tracking-[0.15em] text-rose font-medium">
                    {c.label}
                  </span>
                  <span className="text-sm font-medium text-text">
                    {c.detail}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
