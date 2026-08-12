type Mockup = {
  label: string;
  variant: 1 | 2 | 3 | 4;
};

const ROW_1: Mockup[] = [
  { label: "Curso Online", variant: 1 },
  { label: "Clínica", variant: 2 },
  { label: "Evento", variant: 3 },
  { label: "E-commerce", variant: 4 },
  { label: "SaaS B2B", variant: 1 },
  { label: "Marca pessoal", variant: 2 },
];

const ROW_2: Mockup[] = [
  { label: "Lançamento", variant: 3 },
  { label: "Curso Online", variant: 1 },
  { label: "E-commerce", variant: 4 },
  { label: "Clínica", variant: 2 },
  { label: "Marca pessoal", variant: 1 },
  { label: "SaaS B2B", variant: 3 },
];

const ROW_3: Mockup[] = [
  { label: "E-commerce", variant: 4 },
  { label: "Clínica", variant: 2 },
  { label: "Curso Online", variant: 1 },
  { label: "Lançamento", variant: 3 },
  { label: "Marca pessoal", variant: 2 },
  { label: "SaaS B2B", variant: 4 },
];

function MockupCard({ label, variant }: Mockup) {
  return (
    <div className={`mockup m-${variant}`}>
      <div className="m-header">
        <span className="dot" />
        <span className="dot" />
        <span className="dot" />
      </div>
      <div className="m-body">
        <div className="m-line short" />
        <div className="m-line mid" />
        <div className="m-line long" />
        <div className="m-block" />
        <div className="m-title">{label}</div>
      </div>
    </div>
  );
}

export function MockupsMarquee() {
  return (
    <section className="mockups-section">
      <div className="mockups-header">
        <h2>
          Pensado pra <em>converter.</em>
          <br />
          Cada página, do <em>seu</em> jeito.
        </h2>
      </div>

      <div className="mockups-rows">
        <div className="mockups-track row-1">
          {[...ROW_1, ...ROW_1].map((m, i) => (
            <MockupCard key={i} label={m.label} variant={m.variant} />
          ))}
        </div>
        <div className="mockups-track row-2">
          {[...ROW_2, ...ROW_2].map((m, i) => (
            <MockupCard key={i} label={m.label} variant={m.variant} />
          ))}
        </div>
        <div className="mockups-track row-3">
          {[...ROW_3, ...ROW_3].map((m, i) => (
            <MockupCard key={i} label={m.label} variant={m.variant} />
          ))}
        </div>
      </div>
    </section>
  );
}
