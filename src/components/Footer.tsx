export function Footer() {
  return (
    <footer className="relative px-6 md:px-12 lg:px-24 py-12 border-t border-black/[0.05]">
      <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <p className="text-sm text-text-muted font-light">
          &copy; {new Date().getFullYear()} Dra. Valeria Montserrat — Medicina
          Estética.
        </p>
        <div className="flex items-center gap-6">
          {[
            { label: "Instagram", href: "#" },
            { label: "Aviso Legal", href: "#" },
            { label: "Privacidad", href: "#" },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm text-text-muted font-light hover:text-text transition-colors duration-500 cubic-spring no-underline"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
