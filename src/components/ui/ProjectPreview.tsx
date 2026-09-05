import {
  Bot,
  BrainCircuit,
  ChartNoAxesColumnIncreasing,
  MessageCircle,
  PackageCheck,
  Route,
  Smartphone,
  Sparkles,
  WalletCards,
} from 'lucide-react';

type ProjectPreviewProps = {
  title: string;
};

export function ProjectPreview({ title }: ProjectPreviewProps) {
  if (title === 'Macuco Entregas') {
    return <DeliveryPreview />;
  }

  if (title === 'FinanceirAne') {
    return <FinancePreview />;
  }

  return <ResearchPreview />;
}

function DeliveryPreview() {
  return (
    <div
      aria-hidden="true"
      className="relative min-h-[17rem] overflow-hidden rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_18%_12%,rgb(167_139_250_/_0.18),transparent_14rem),linear-gradient(145deg,rgb(109_59_255_/_0.18),rgb(59_130_246_/_0.08)_52%,rgb(255_255_255_/_0.03))] p-5"
    >
      <div className="absolute right-5 top-5 flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs font-semibold text-portfolio-muted">
        <Route aria-hidden="true" size={13} />
        Fluxo local
      </div>

      <div className="mx-auto mt-6 w-full max-w-[12rem] rounded-[2rem] border border-white/15 bg-portfolio-bg/75 p-2 shadow-2xl shadow-portfolio-purple/15 transition duration-300 group-hover:scale-[1.015]">
        <div className="rounded-[1.55rem] border border-white/10 bg-portfolio-card p-3">
          <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-white/20" />
          <div className="space-y-3">
            <div className="rounded-2xl border border-portfolio-lilac/20 bg-portfolio-lilac/10 p-3">
              <div className="mb-2 flex items-center justify-between">
                <ShoppingDot />
                <span className="h-2 w-10 rounded-full bg-portfolio-lilac/35" />
              </div>
              <div className="h-2 w-24 rounded-full bg-white/30" />
              <div className="mt-2 h-2 w-16 rounded-full bg-white/15" />
            </div>
            {[0, 1, 2].map((item) => (
              <div
                className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/[0.045] p-2"
                key={item}
              >
                <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-portfolio-purple/35 to-portfolio-blue/25 text-portfolio-lilac">
                  {item === 0 ? (
                    <PackageCheck aria-hidden="true" size={15} />
                  ) : (
                    <Smartphone aria-hidden="true" size={15} />
                  )}
                </span>
                <span className="space-y-1.5">
                  <span className="block h-2 w-20 rounded-full bg-white/25" />
                  <span className="block h-2 w-12 rounded-full bg-white/12" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function FinancePreview() {
  return (
    <div
      aria-hidden="true"
      className="relative min-h-[17rem] overflow-hidden rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_82%_18%,rgb(59_130_246_/_0.18),transparent_15rem),linear-gradient(145deg,rgb(255_255_255_/_0.04),rgb(109_59_255_/_0.14)_50%,rgb(59_130_246_/_0.08))] p-5"
    >
      <div className="flex items-center justify-between gap-4">
        <span className="grid size-11 place-items-center rounded-2xl border border-portfolio-blue/25 bg-portfolio-blue/10 text-portfolio-lilac">
          <WalletCards aria-hidden="true" size={20} />
        </span>
        <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs font-semibold text-portfolio-muted">
          Dados ilustrativos
        </span>
      </div>

      <div className="mt-8 grid gap-3 sm:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-3 rounded-2xl border border-white/10 bg-portfolio-bg/55 p-4">
          {['Categoria', 'Registro', 'Acompanhamento'].map((label, index) => (
            <div className="flex items-center gap-3" key={label}>
              <span
                className={`size-3 rounded-full ${
                  index === 0
                    ? 'bg-portfolio-lilac'
                    : index === 1
                      ? 'bg-portfolio-blue'
                      : 'bg-portfolio-purple'
                }`}
              />
              <span className="min-w-0 flex-1">
                <span className="block text-xs font-semibold text-portfolio-muted">
                  {label}
                </span>
                <span className="mt-1 block h-1.5 rounded-full bg-white/12">
                  <span
                    className="block h-full rounded-full bg-gradient-to-r from-portfolio-purple to-portfolio-blue transition-all duration-300 group-hover:w-[84%]"
                    style={{ width: `${62 + index * 9}%` }}
                  />
                </span>
              </span>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4">
          <div className="mb-4 flex items-center gap-2 text-xs font-semibold text-portfolio-lilac">
            <MessageCircle aria-hidden="true" size={14} />
            Experiência conversacional
          </div>
          <div className="space-y-3">
            <span className="block w-4/5 rounded-2xl rounded-bl-sm bg-white/10 px-3 py-2">
              <span className="block h-2 w-full rounded-full bg-white/22" />
            </span>
            <span className="ml-auto block w-3/5 rounded-2xl rounded-br-sm bg-portfolio-purple/20 px-3 py-2">
              <span className="block h-2 w-full rounded-full bg-portfolio-lilac/35" />
            </span>
            <div className="flex h-20 items-end gap-2 pt-3">
              {[42, 64, 48, 78, 56].map((height) => (
                <span
                  className="flex-1 rounded-t-lg bg-gradient-to-t from-portfolio-purple/35 to-portfolio-blue/45"
                  key={height}
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ResearchPreview() {
  return (
    <div
      aria-hidden="true"
      className="relative min-h-[17rem] overflow-hidden rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_50%_18%,rgb(167_139_250_/_0.16),transparent_14rem),linear-gradient(145deg,rgb(59_130_246_/_0.08),rgb(109_59_255_/_0.12)_55%,rgb(255_255_255_/_0.04))] p-5"
    >
      <div className="flex items-center justify-between gap-4">
        <span className="rounded-full border border-portfolio-lilac/25 bg-portfolio-lilac/10 px-3 py-1 text-xs font-semibold text-portfolio-lilac">
          Pesquisa em andamento
        </span>
        <BrainCircuit aria-hidden="true" className="text-portfolio-lilac" size={22} />
      </div>

      <div className="relative mx-auto mt-8 grid aspect-square max-w-[13rem] place-items-center">
        <div className="absolute inset-2 rounded-full border border-dashed border-portfolio-lilac/25 transition duration-300 group-hover:rotate-6" />
        <div className="absolute inset-8 rounded-full border border-portfolio-blue/25" />
        <div className="grid size-20 place-items-center rounded-3xl border border-white/15 bg-portfolio-bg/70 text-portfolio-lilac shadow-xl shadow-portfolio-purple/15">
          <Bot aria-hidden="true" size={30} />
        </div>

        {[
          { icon: Sparkles, className: 'left-2 top-8' },
          { icon: ChartNoAxesColumnIncreasing, className: 'right-1 top-20' },
          { icon: BrainCircuit, className: 'bottom-5 left-10' },
        ].map(({ icon: Icon, className }) => (
          <span
            className={`absolute grid size-10 place-items-center rounded-2xl border border-white/10 bg-white/[0.06] text-portfolio-lilac ${className}`}
            key={className}
          >
            <Icon aria-hidden="true" size={17} />
          </span>
        ))}
      </div>
    </div>
  );
}

function ShoppingDot() {
  return (
    <span className="grid size-8 place-items-center rounded-xl bg-portfolio-purple/25 text-portfolio-lilac">
      <PackageCheck aria-hidden="true" size={15} />
    </span>
  );
}
