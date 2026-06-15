import { Code2, ExternalLink, Mail } from 'lucide-react';

const contactLinks = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/aneapaixao',
    icon: ExternalLink,
    external: true,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/anepaixao',
    icon: Code2,
    external: true,
  },
  {
    label: 'E-mail',
    href: 'mailto:anepaixao50@gmail.com',
    icon: Mail,
    external: false,
  },
];

export function Contact() {
  return (
    <section
      aria-labelledby="contact-title"
      className="section-block bg-portfolio-bg-alt"
      id="contato"
    >
      <div className="section-shell">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-portfolio-card p-6 shadow-2xl shadow-black/20 sm:p-8 lg:p-10">
          <div className="absolute -right-10 top-10 h-40 w-40 rounded-full bg-portfolio-blue/20 blur-3xl" />
          <div className="absolute -left-10 bottom-0 h-44 w-44 rounded-full bg-portfolio-purple/20 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-portfolio-lilac">
                Contato
              </p>
              <h2
                className="mt-4 text-3xl font-black leading-tight text-portfolio-text sm:text-4xl lg:text-5xl"
                id="contact-title"
              >
                Contato
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-portfolio-muted sm:text-lg">
                Estou aberta a oportunidades de estágio, projetos colaborativos
                e conexões na área de tecnologia, produto digital e inteligência
                artificial aplicada.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {contactLinks.map(({ label, href, icon: Icon, external }) => (
                <a
                  className="group flex min-h-16 items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-portfolio-text transition duration-200 hover:-translate-y-0.5 hover:border-portfolio-lilac/60 hover:bg-white/[0.07] hover:shadow-lg hover:shadow-portfolio-purple/10 focus:outline-none focus:ring-2 focus:ring-portfolio-lilac focus:ring-offset-2 focus:ring-offset-portfolio-card"
                  href={href}
                  key={label}
                  rel={external ? 'noreferrer' : undefined}
                  target={external ? '_blank' : undefined}
                >
                  <span className="flex items-center gap-3 font-bold">
                    <span className="grid size-10 shrink-0 place-items-center rounded-full bg-gradient-to-r from-portfolio-purple to-portfolio-blue text-white">
                      <Icon size={20} />
                    </span>
                    {label}
                  </span>
                  <ExternalLink
                    className="text-portfolio-lilac opacity-80 transition group-hover:translate-x-0.5 group-hover:opacity-100"
                    size={18}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
