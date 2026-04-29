"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#sobre-mi", label: "Sobre Mí" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#contacto", label: "Contacto" },
];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleLinkClick = () => setOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-40 flex justify-center transition-all duration-700 cubic-spring ${
          scrolled ? "pt-4" : "pt-8"
        }`}
      >
        <div
          className={`flex items-center gap-6 px-5 py-3 rounded-full transition-all duration-700 cubic-spring ${
            scrolled
              ? "bg-white/70 backdrop-blur-2xl shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_32px_rgba(0,0,0,0.04)] ring-1 ring-black/5"
              : "bg-transparent"
          }`}
        >
          <Link
            href="/"
            className="text-sm font-medium tracking-tight text-text no-underline"
            onClick={handleLinkClick}
          >
            VM
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="px-4 py-2 text-sm font-normal text-text-muted hover:text-text rounded-full transition-all duration-500 cubic-spring hover:bg-black/[0.04] no-underline"
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <Link
            href="#contacto"
            className="hidden md:flex items-center gap-3 pl-5 pr-2 py-1.5 bg-text text-bg rounded-full text-sm font-medium transition-all duration-500 cubic-spring hover:scale-[0.98] active:scale-[0.96] group no-underline"
          >
            <span>Agenda tu cita</span>
            <span className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center transition-all duration-500 cubic-spring group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:scale-105">
              <svg
                width="12"
                height="12"
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

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden relative w-8 h-8 flex items-center justify-center"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
          >
            <span
              className={`absolute w-4 h-px bg-text transition-all duration-500 cubic-spring ${
                open ? "rotate-45" : "-translate-y-1"
              }`}
            />
            <span
              className={`absolute w-4 h-px bg-text transition-all duration-500 cubic-spring ${
                open ? "-rotate-45" : "translate-y-1"
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Fullscreen overlay */}
      <div
        className={`fixed inset-0 z-30 bg-white/85 backdrop-blur-3xl flex flex-col items-center justify-center transition-all duration-700 cubic-spring ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-8">
          {links.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={handleLinkClick}
              className={`text-4xl font-light tracking-tight text-text no-underline transition-all duration-700 cubic-spring ${
                open
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: open ? `${150 + i * 75}ms` : "0ms",
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="#contacto"
            onClick={handleLinkClick}
            className={`mt-6 flex items-center gap-3 pl-6 pr-2.5 py-2 bg-text text-bg rounded-full text-base font-medium transition-all duration-700 cubic-spring hover:scale-[0.98] active:scale-[0.96] group no-underline ${
              open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{
              transitionDelay: open ? `${150 + links.length * 75}ms` : "0ms",
            }}
          >
            <span>Agenda tu cita</span>
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
        </div>
      </div>
    </>
  );
}
