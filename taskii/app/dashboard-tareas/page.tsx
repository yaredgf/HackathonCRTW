const columns = [
  {
    title: "Pendiente",
    tone: "bg-surface-container-low",
    tasks: [
      { title: "Actualizar brief semanal", tag: "Equipo", points: 20 },
      { title: "Revisar feedback", tag: "Producto", points: 15 },
      { title: "Planificar sprint", tag: "Ops", points: 30 },
    ],
  },
  {
    title: "En progreso",
    tone: "bg-secondary/10",
    tasks: [
      { title: "Subir reporte de avance", tag: "Academico", points: 60 },
      { title: "Cerrar metas de diseno", tag: "Creativo", points: 40 },
    ],
  },
  {
    title: "Hecho",
    tone: "bg-primary/10",
    tasks: [
      { title: "Demo interna", tag: "Sprint", points: 50 },
      { title: "Encuesta de equipo", tag: "HR", points: 25 },
    ],
  },
];

export default function DashboardTareasPage() {
  return (
    <main className="min-h-screen bg-background text-on-background">
      <div className="mx-auto flex min-h-screen w-full max-w-[1440px] flex-col gap-8 px-4 pb-16 pt-6 sm:px-6 lg:px-8">
        <header className="flex flex-col gap-6 rounded-[28px] border border-outline-variant/40 bg-surface px-6 py-5 shadow-ambient-1 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-on-surface-variant">Tablero</p>
            <h1 className="text-3xl font-black tracking-tight text-on-background md:text-4xl">Dashboard de tareas</h1>
            <p className="text-sm text-on-surface-variant">Organiza, arrastra y suma puntos por avance.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <a className="rounded-full border border-outline bg-surface px-4 py-2 text-sm font-semibold text-on-background" href="/dashboard">
              Volver al dashboard
            </a>
            <a className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-on-primary shadow-lg shadow-primary/20" href="/leaderboard">
              Ranking
            </a>
          </div>
        </header>

        <section className="grid gap-4 lg:grid-cols-3">
          {columns.map((column) => (
            <div key={column.title} className={`rounded-[28px] border border-outline-variant/40 p-5 shadow-ambient-1 ${column.tone}`}>
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-on-background">{column.title}</h2>
                <span className="rounded-full bg-surface px-3 py-1 text-xs font-semibold text-on-surface-variant">{column.tasks.length}</span>
              </div>
              <div className="mt-4 grid gap-3">
                {column.tasks.map((task) => (
                  <article key={task.title} className="rounded-2xl bg-surface px-4 py-3 shadow-[0_10px_25px_rgba(15,23,42,0.08)]">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="text-sm font-semibold text-on-background">{task.title}</p>
                        <p className="text-xs text-on-surface-variant">{task.tag}</p>
                      </div>
                      <span className="rounded-full bg-primary/10 px-2 py-1 text-xs font-semibold text-primary">{task.points} pts</span>
                    </div>
                    <div className="mt-3 flex items-center gap-2 text-xs text-on-surface-variant">
                      <span className="material-symbols-outlined text-primary" style={{ fontSize: "16px" }}>schedule</span>
                      2 dias restantes
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
