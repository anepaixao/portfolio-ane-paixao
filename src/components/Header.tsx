import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Habilidades', href: '#habilidades' },
  { label: 'Contato', href: '#contato' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/85 backdrop-blur">
      <nav className="section-shell flex h-16 items-center justify-between">
        <a className="text-sm font-bold uppercase tracking-[0.18em] text-green-300" href="#inicio">
          Ane Paixao
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              className="text-sm text-zinc-300 transition hover:text-green-300"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          className="grid size-10 place-items-center rounded border border-white/10 text-zinc-100 md:hidden"
          onClick={() => setIsOpen((current) => !current)}
          type="button"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-white/10 bg-zinc-950 md:hidden">
          <div className="section-shell grid py-3">
            {navItems.map((item) => (
              <a
                className="py-3 text-sm text-zinc-300"
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
