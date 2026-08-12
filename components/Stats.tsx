import { STATS } from "@/lib/data";

export function Stats() {
  return (
    <section className="stats-strip">
      <div className="stats-grid reveal">
        {STATS.map((stat, i) => (
          <div key={i} className="stat-tile">
            <div className="stat-num">
              {stat.num}
              {stat.suffix && <em>{stat.suffix}</em>}
            </div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}