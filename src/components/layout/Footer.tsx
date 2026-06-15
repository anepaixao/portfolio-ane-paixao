import { Code2, ExternalLink, Mail } from 'lucide-react';

const footerLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/anepaixao',
    icon: Code2,
    external: true,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/aneapaixao',
    icon: ExternalLink,
    external: true,
  },
  {
    label: 'E-mail',
    href: 'mailto:anepaixao50@gmail.com',
    icon: Mail,
    external: false,
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-portfolio-bg-alt py-10">
      <div className="section-shell flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <a
            className="text-base font-black uppercase tracking-[0.18em] text-portfolio-text transition hover:text-portfolio-lilac"
            href="#inicio"
          >
            Ane
          </a>
          <p className="mt-3 max-w-xl text-sm leading-6 text-portfolio-muted">
            Construindo produtos digitais com tecnologia, propósito e visão de
            usuário.
          </p>
          <p className="mt-4 text-xs text-portfolio-muted/80">
            © {currentYear} Ane. Todos os direitos reservados.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {footerLinks.map(({ label, href, icon: Icon, external }) => (
            <a
              aria-label={label}
            className="grid size-11 place-items-center rounded border border-white/10 bg-white/[0.04] text-portfolio-muted transition duration-200 hover:-translate-y-0.5 hover:border-portfolio-lilac/60 hover:text-portfolio-lilac"
              href={href}
              key={label}
              rel={external ? 'noreferrer' : undefined}
              target={external ? '_blank' : undefined}
              title={label}
            >
              <Icon size={19} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
