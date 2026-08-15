type Mockup = {
  imageNum: number;
  label: string;
};

const ROW_1: Mockup[] = [
  { imageNum: 1, label: "Projeto 1" },
  { imageNum: 2, label: "Projeto 2" },
  { imageNum: 3, label: "Projeto 3" },
  { imageNum: 4, label: "Projeto 4" },
  { imageNum: 5, label: "Projeto 5" },
  { imageNum: 6, label: "Projeto 6" },
  { imageNum: 7, label: "Projeto 7" },
];

const ROW_2: Mockup[] = [
  { imageNum: 8, label: "Projeto 8" },
  { imageNum: 9, label: "Projeto 9" },
  { imageNum: 10, label: "Projeto 10" },
  { imageNum: 11, label: "Projeto 11" },
  { imageNum: 12, label: "Projeto 12" },
  { imageNum: 13, label: "Projeto 13" },
  { imageNum: 14, label: "Projeto 14" },
];

const ROW_3: Mockup[] = [
  { imageNum: 15, label: "Projeto 15" },
  { imageNum: 16, label: "Projeto 16" },
  { imageNum: 17, label: "Projeto 17" },
  { imageNum: 18, label: "Projeto 18" },
  { imageNum: 19, label: "Projeto 19" },
  { imageNum: 20, label: "Projeto 20" },
  { imageNum: 21, label: "Projeto 21" },
];

function MockupCard({ imageNum, label }: Mockup) {
  return (
    <div className="mockup">
      <img 
        src={`/assets/portfolio-carrossel/portfolio-pwlabs-${imageNum}.webp`} 
        alt={label} 
        className="mockup-image" 
        loading="lazy" 
      />
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
			  <MockupCard key={i} label={m.label} imageNum={m.imageNum} />
			))}
		  </div>
		  <div className="mockups-track row-2">
			{[...ROW_2, ...ROW_2].map((m, i) => (
			  <MockupCard key={i} label={m.label} imageNum={m.imageNum} />
			))}
		  </div>
		  <div className="mockups-track row-3">
			{[...ROW_3, ...ROW_3].map((m, i) => (
			  <MockupCard key={i} label={m.label} imageNum={m.imageNum} />
			))}
		  </div>
		</div>
    </section>
  );
}
