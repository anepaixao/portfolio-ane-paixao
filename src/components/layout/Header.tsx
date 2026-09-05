import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';

const navItems = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Processo', href: '#processo' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Experiências', href: '#experiencias' },
  { label: 'Habilidades', href: '#habilidades' },
  { label: 'Currículo', href: '#curriculo' },
  { label: 'Contato', href: '#contato' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHref, setActiveHref] = useState('#inicio');
  const [hasScrolled, setHasScrolled] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const { scrollY, scrollYProgress } = useScroll();

  const updateActiveSection = useCallback(() => {
    const activationLine = 136;
    let currentHref = '#inicio';

    navItems.forEach((item) => {
      const section = document.getElementById(item.href.slice(1));

      if (section && section.getBoundingClientRect().top <= activationLine) {
        currentHref = item.href;
      }
    });

    if (
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 24
    ) {
      currentHref = '#contato';
    }

    setActiveHref((current) =>
      current === currentHref ? current : currentHref,
    );
  }, []);

  useEffect(() => {
    updateActiveSection();
  }, [updateActiveSection]);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setHasScrolled((current) => {
      const next = latest > 24;
      return current === next ? current : next;
    });

    updateActiveSection();
  });

  const handleNavigation = (href: string) => {
    setActiveHref(href);
    setIsOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300 ${
        hasScrolled
          ? 'border-white/10 bg-portfolio-bg/82 shadow-[0_12px_36px_rgba(4,2,16,0.2)] backdrop-blur-2xl'
          : 'border-transparent bg-portfolio-bg/52 backdrop-blur-xl'
      }`}
    >
      <nav
        aria-label="Navegação principal"
        className="section-shell flex h-16 items-center justify-between"
      >
        <a
          aria-label="Voltar ao início"
          className="group relative inline-flex items-center gap-2 text-base font-black uppercase tracking-[0.18em] text-portfolio-text focus:outline-none focus-visible:ring-2 focus-visible:ring-portfolio-lilac/70"
          href="#inicio"
          onClick={() => handleNavigation('#inicio')}
        >
          <span className="relative grid size-8 place-items-center rounded-full border border-white/10 bg-white/[0.04] transition duration-300 group-hover:border-portfolio-lilac/45 group-hover:bg-portfolio-lilac/10">
            <span className="relative z-10">A</span>
            <span className="absolute inset-1 rounded-full bg-gradient-to-br from-portfolio-purple/30 to-portfolio-blue/20 opacity-0 blur-sm transition duration-300 group-hover:opacity-100" />
          </span>
          <span className="transition duration-200 group-hover:text-portfolio-lilac">Ane</span>
        </a>

        <div className="hidden items-center gap-1 rounded-full border border-white/[0.08] bg-white/[0.025] p-1 lg:flex">
          {navItems.map((item) => {
            const isActive = activeHref === item.href;

            return (
              <a
                aria-current={isActive ? 'page' : undefined}
                className={`relative rounded-full px-3 py-1.5 text-sm font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-portfolio-lilac/70 ${
                  isActive
                    ? 'text-portfolio-text'
                    : 'text-portfolio-muted hover:text-portfolio-lilac'
                }`}
                href={item.href}
                key={item.href}
                onClick={() => handleNavigation(item.href)}
              >
                {isActive && (
                  <motion.span
                    className="absolute inset-0 rounded-full border border-portfolio-lilac/25 bg-gradient-to-r from-portfolio-purple/18 to-portfolio-blue/12 shadow-[0_0_18px_rgba(109,59,255,0.12)]"
                    layoutId="active-navigation-pill"
                    transition={
                      prefersReducedMotion
                        ? { duration: 0 }
                        : { type: 'spring', stiffness: 420, damping: 34 }
                    }
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            );
          })}
        </div>

        <button
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          className="relative grid size-10 place-items-center overflow-hidden rounded-full border border-white/10 bg-white/[0.03] text-portfolio-text transition duration-200 hover:border-portfolio-lilac/60 hover:bg-portfolio-lilac/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-portfolio-lilac/70 lg:hidden"
          onClick={() => setIsOpen((current) => !current)}
          type="button"
        >
          <AnimatePresence initial={false} mode="wait">
            <motion.span
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              className="absolute"
              exit={{ opacity: 0, rotate: isOpen ? -45 : 45, scale: 0.8 }}
              initial={{ opacity: 0, rotate: isOpen ? 45 : -45, scale: 0.8 }}
              key={isOpen ? 'close' : 'open'}
              transition={{ duration: prefersReducedMotion ? 0 : 0.16 }}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.span>
          </AnimatePresence>
        </button>
      </nav>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="absolute inset-x-0 top-full max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-white/10 bg-portfolio-bg/96 shadow-[0_18px_44px_rgba(4,2,16,0.28)] backdrop-blur-2xl lg:hidden"
            exit={{ opacity: 0, y: -8 }}
            id="mobile-navigation"
            initial={{ opacity: 0, y: -8 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
          >
            <div className="section-shell grid gap-1 py-3">
              {navItems.map((item, index) => {
                const isActive = activeHref === item.href;

                return (
                  <motion.a
                    animate={{ opacity: 1, x: 0 }}
                    aria-current={isActive ? 'page' : undefined}
                    className={`relative overflow-hidden rounded-lg px-4 py-3 text-sm font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-portfolio-lilac/70 ${
                      isActive
                        ? 'text-portfolio-text'
                        : 'text-portfolio-muted hover:bg-white/[0.05] hover:text-portfolio-lilac'
                    }`}
                    href={item.href}
                    initial={{ opacity: 0, x: -8 }}
                    key={item.href}
                    onClick={() => handleNavigation(item.href)}
                    transition={{
                      delay: prefersReducedMotion ? 0 : index * 0.025,
                      duration: prefersReducedMotion ? 0 : 0.18,
                    }}
                  >
                    {isActive && (
                      <span className="absolute inset-0 border border-portfolio-lilac/20 bg-gradient-to-r from-portfolio-purple/16 to-portfolio-blue/8" />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-[-1px] h-px origin-left bg-gradient-to-r from-portfolio-purple via-portfolio-lilac to-portfolio-blue"
        style={{ scaleX: scrollYProgress }}
      />
    </header>
  );
}
