import { useEffect, useRef } from 'react';
import { ArrowRight, ArrowUpRight, X } from 'lucide-react';
import type { Project } from '../../data/projects';

export function ProjectDetailsDialog({ project }: { project: Project }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = `details-${project.title.replaceAll(' ', '-')}`;
  const isFinance = project.title === 'FinanceirAne';

  useEffect(() => {
    const dialog = dialogRef.current;
    const unlock = () => { document.body.style.overflow = previousOverflow; };
    const previousOverflow = document.body.style.overflow;
    dialog?.addEventListener('close', unlock);
    return () => {
      dialog?.removeEventListener('close', unlock);
      if (dialog?.open) unlock();
    };
  }, []);

  return (
    <>
      <button
        type="button"
        className="mt-6 inline-flex min-h-11 items-center gap-2 self-start rounded-lg border border-portfolio-lilac/30 px-4 py-2 text-sm font-semibold text-portfolio-text transition-colors hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-portfolio-lilac"
        aria-haspopup="dialog"
        onClick={() => {
          dialogRef.current?.showModal();
          document.body.style.overflow = 'hidden';
        }}
      >
        Ver detalhes <ArrowRight aria-hidden="true" size={16} />
      </button>
      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        className="fixed inset-0 m-auto max-h-[94dvh] w-[calc(100%-1rem)] max-w-5xl overflow-x-hidden overflow-y-auto overscroll-contain rounded-lg border border-white/15 bg-portfolio-bg p-0 text-portfolio-text shadow-2xl backdrop:bg-black/75 sm:w-[calc(100%-3rem)]"
      >
        <header className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-white/10 bg-portfolio-bg px-5 py-4 sm:px-8">
          <h2 id={titleId} className="min-w-0 break-words text-xl font-bold sm:text-2xl">{project.title}</h2>
          <button autoFocus type="button" aria-label="Fechar detalhes" onClick={() => dialogRef.current?.close()} className="grid size-11 shrink-0 place-items-center rounded-lg border border-white/15 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-portfolio-lilac">
            <X aria-hidden="true" size={20} />
          </button>
        </header>
        <div className="space-y-8 p-5 sm:p-8">
          <section>
            <h3 className="mb-3 font-bold text-portfolio-lilac">{project.status.startsWith('Pesquisa acadêmica') ? 'Contexto da pesquisa' : 'Visão geral'}</h3>
            <p className="leading-7 text-portfolio-muted">{project.description}</p>
            <p className="mt-4 text-sm font-semibold">{project.statusDetail ?? project.status}</p>
          </section>
          {isFinance && <section>
            <h3 className="mb-4 font-bold text-portfolio-lilac">Como funciona</h3>
            <ol className="flex flex-wrap items-center gap-3">
              {['Telegram', 'Backend Python', 'Gemini API', 'Validação dos dados', 'Google Sheets'].map((stage, index) => <li key={stage} className="flex max-w-full items-center gap-3 text-sm"><span className="border-b border-portfolio-lilac/40 py-2">{stage}</span>{index < 4 && <ArrowRight aria-hidden="true" size={16} />}</li>)}
            </ol>
            <p className="mt-4 text-sm text-portfolio-muted">O backend Python também coordena consultas e respostas enviadas ao Telegram.</p>
            <p className="mt-2 text-sm text-portfolio-muted">Aplicação implantada na Oracle Cloud.</p>
          </section>}
          <section>
            <h3 className="mb-3 font-bold text-portfolio-lilac">{isFinance ? 'Destaques' : 'Atuação'}</h3>
            <ul className="list-disc space-y-3 pl-5 leading-7 text-portfolio-muted">{project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
          </section>
          <section>
            <h3 className="mb-3 font-bold text-portfolio-lilac">{project.status.startsWith('Pesquisa acadêmica') ? 'Áreas relacionadas' : 'Tecnologias / competências'}</h3>
            <ul className="flex flex-wrap gap-2">{project.tags.map((tag) => <li key={tag} className="max-w-full break-words rounded border border-white/15 px-3 py-1 text-sm text-portfolio-muted">{tag}</li>)}</ul>
          </section>
          {project.links && project.links.length > 0 && (
            <div className="flex flex-wrap gap-3">
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 max-w-full items-center gap-2 rounded-lg border border-portfolio-lilac/30 px-4 py-2 text-sm font-semibold hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-portfolio-lilac"
                >
                  <span>{isFinance ? 'Ver repositório no GitHub' : link.label}</span>
                  <ArrowUpRight aria-hidden="true" className="shrink-0" size={16} />
                </a>
              ))}
            </div>
          )}
        </div>
      </dialog>
    </>
  );
}
