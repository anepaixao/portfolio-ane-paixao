import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Experiências', href: '#experiencias' },
  { label: 'Habilidades', href: '#habilidades' },
  { label: 'Currículo', href: '#curriculo' },
  { label: 'Contato', href: '#contato' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-portfolio-bg/90 backdrop-blur-xl">
      <nav className="section-shell flex h-16 items-center justify-between">
        <a
          className="text-base font-black uppercase tracking-[0.18em] text-portfolio-text transition hover:text-portfolio-lilac"
          href="#inicio"
        >
          Ane
        </a>

        <div className="hidden items-center gap-5 lg:flex">
          {navItems.map((item) => (
            <a
            className="rounded px-2 py-1 text-sm font-medium text-portfolio-muted transition duration-200 hover:bg-white/[0.04] hover:text-portfolio-lilac"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isOpen}
          className="grid size-10 place-items-center rounded border border-white/10 text-portfolio-text transition duration-200 hover:border-portfolio-lilac/60 lg:hidden"
          onClick={() => setIsOpen((current) => !current)}
          type="button"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-white/10 bg-portfolio-bg/95 backdrop-blur-xl lg:hidden">
          <div className="section-shell grid gap-1 py-3">
            {navItems.map((item) => (
              <a
                className="rounded px-3 py-3 text-sm font-medium text-portfolio-muted transition duration-200 hover:bg-white/[0.04] hover:text-portfolio-lilac"
                href={item.href}
                key={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
