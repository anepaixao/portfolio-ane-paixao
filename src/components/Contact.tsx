import { Mail, Send } from 'lucide-react';

export function Contact() {
  return (
    <section className="py-24" id="contato">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="section-kicker">Contato</p>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Vamos conversar?
          </h2>
          <p className="mt-5 max-w-xl leading-8 text-zinc-300">
            Estou aberta a conexoes, projetos, estudos colaborativos e
            oportunidades para crescer como desenvolvedora.
          </p>
        </div>

        <div className="rounded-lg border border-white/10 bg-white/[0.03] p-6">
          <a
            className="flex items-center justify-between gap-4 rounded border border-white/10 p-4 text-zinc-200 transition hover:border-green-300 hover:text-green-300"
            href="mailto:ane.paixao@email.com"
          >
            <span className="inline-flex items-center gap-3">
              <Mail size={20} /> ane.paixao@email.com
            </span>
            <Send size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
