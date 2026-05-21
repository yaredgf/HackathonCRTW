const snapshots = [
  { label: "Meta semanal", value: "78%", detail: "Equipo A" },
  { label: "Tareas cerradas", value: "42", detail: "Ultimos 7 dias" },
  { label: "Puntos totales", value: "18.2k", detail: "Equipo" },
];

const leaderboard = [
  { rank: 1, name: "Alex M.", role: "Ingenieria", points: "12,200" },
  { rank: 2, name: "Sarah J.", role: "Diseno", points: "8,450" },
  { rank: 3, name: "Emily R.", role: "Marketing", points: "7,890" },
  { rank: 4, name: "Michael T.", role: "Operaciones", points: "6,540" },
  { rank: 5, name: "Jessica W.", role: "Producto", points: "6,120" },
];

export default function LeaderboardDashboardPage() {
  return (
    <main className="min-h-screen bg-background text-on-background">
      <div className="mx-auto flex min-h-screen w-full max-w-[1440px] flex-col gap-8 px-4 pb-16 pt-6 sm:px-6 lg:px-8">
        <header className="flex flex-col gap-6 rounded-[28px] border border-outline-variant/40 bg-surface px-6 py-5 shadow-ambient-1 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-on-surface-variant">Ranking dashboard</p>
            <h1 className="text-3xl font-black tracking-tight text-on-background md:text-4xl">Leaderboard del equipo</h1>
            <p className="text-sm text-on-surface-variant">Vista combinada con metricas clave.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <a className="rounded-full border border-outline bg-surface px-4 py-2 text-sm font-semibold text-on-background" href="/dashboard">
              Volver al dashboard
            </a>
            <a className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-on-primary shadow-lg shadow-primary/20" href="/leaderboard">
              Ver ranking completo
            </a>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-3">
          {snapshots.map((item) => (
            <article key={item.label} className="rounded-[24px] border border-outline-variant/40 bg-surface p-5 shadow-ambient-1">
              <p className="text-sm font-medium text-on-surface-variant">{item.label}</p>
              <p className="mt-2 text-3xl font-extrabold tracking-tight text-on-background">{item.value}</p>
              <p className="mt-1 text-sm text-primary">{item.detail}</p>
            </article>
          ))}
        </section>

        <section className="rounded-[28px] border border-outline-variant/40 bg-surface p-6 shadow-ambient-1">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-on-surface-variant">Tabla</p>
              <h2 className="text-2xl font-bold text-on-background">Ranking semanal</h2>
            </div>
            <span className="rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary">Semana 22</span>
          </div>

          <div className="mt-6 grid gap-3">
            {leaderboard.map((person) => (
              <div key={person.rank} className="flex items-center justify-between rounded-2xl border border-outline-variant/40 bg-surface-container-low px-4 py-3">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-sm font-bold text-primary">{person.rank}</div>
                  <div>
                    <p className="text-sm font-semibold text-on-background">{person.name}</p>
                    <p className="text-xs text-on-surface-variant">{person.role}</p>
                  </div>
                </div>
                <p className="text-sm font-semibold text-on-background">{person.points} pts</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
