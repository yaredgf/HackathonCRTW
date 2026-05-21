const stats = [
  { label: "Tareas completadas", value: "148", detail: "+18 esta semana" },
  { label: "Puntos de recompensa", value: "12.4k", detail: "34 canjeables" },
  { label: "Racha activa", value: "12 dias", detail: "3 metas cerradas" },
];

const previewCards = [
  {
    title: "Racha activa",
    description: "Suma un punto extra por cada dia completo.",
    value: "12 dias",
    tone: "bg-primary/10 text-primary",
  },
  {
    title: "Puesto actual",
    description: "A un paso del top 3 de tu equipo.",
    value: "#4",
    tone: "bg-secondary/10 text-secondary",
  },
  {
    title: "Recompensas",
    description: "Utiliza tus puntos para canjear beneficios.",
    value: "34 pts",
    tone: "bg-tertiary/10 text-tertiary",
  },
];

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(67,167,67,0.14),transparent_32%),radial-gradient(circle_at_top_right,rgba(75,145,226,0.14),transparent_30%),radial-gradient(circle_at_70%_75%,rgba(174,53,65,0.1),transparent_24%)]" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-[1440px] flex-col px-4 pb-16 pt-4 sm:px-6 lg:px-8">
        <header className="sticky top-4 z-40 rounded-[28px] border border-outline-variant/50 bg-surface/90 px-5 py-4 shadow-[0_10px_35px_rgba(15,23,42,0.08)] backdrop-blur-xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-lg font-extrabold text-on-primary shadow-lg shadow-primary/20">
                t
              </div>
              <div>
                <p className="text-lg font-extrabold tracking-tight text-on-background">taskii</p>
                <p className="text-sm text-on-surface-variant">Productividad con recompensas</p>
              </div>
            </div>

            <nav className="flex flex-wrap items-center gap-2 text-sm font-semibold text-on-surface-variant">
              <a className="rounded-full px-4 py-2 transition hover:bg-surface-container-low hover:text-on-background" href="/dashboard">
                Dashboard
              </a>
              <a className="rounded-full px-4 py-2 transition hover:bg-surface-container-low hover:text-on-background" href="/dashboard-tareas">
                Tareas
              </a>
              <a className="rounded-full px-4 py-2 transition hover:bg-surface-container-low hover:text-on-background" href="/leaderboard">
                Ranking
              </a>
              <a className="rounded-full px-4 py-2 transition hover:bg-surface-container-low hover:text-on-background" href="/admin">
                Admin
              </a>
              <a className="rounded-full bg-primary px-4 py-2 text-on-primary shadow-lg shadow-primary/20 transition hover:bg-primary/90" href="/crear-cuenta">
                Crear cuenta
              </a>
            </nav>
          </div>
        </header>

        <section className="grid gap-10 px-1 pb-6 pt-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pt-20">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-surface/80 px-4 py-2 text-sm font-semibold text-primary shadow-sm backdrop-blur">
              <span className="h-2.5 w-2.5 rounded-full bg-primary" />
              Base visual del prototipo Taskii
            </div>

            <div className="space-y-5">
              <h1 className="max-w-3xl text-5xl font-black tracking-tight text-on-background sm:text-6xl lg:text-7xl">
                Productivity and rewards in one calm, friendly workspace.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-on-surface-variant sm:text-xl">
                Esta landing conecta todas las pantallas: dashboard, tareas, ranking, admin y registro, con la identidad
                visual de Taskii.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="/dashboard"
                className="rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-on-primary shadow-lg shadow-primary/20 transition hover:-translate-y-0.5 hover:bg-primary/90"
              >
                Explorar dashboard
              </a>
              <a
                href="/leaderboard"
                className="rounded-full border border-outline bg-surface px-6 py-3.5 text-sm font-semibold text-on-background transition hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
              >
                Ver ranking
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((item) => (
                <article key={item.label} className="rounded-[24px] border border-outline-variant/40 bg-surface p-5 shadow-ambient-1">
                  <p className="text-sm font-medium text-on-surface-variant">{item.label}</p>
                  <p className="mt-2 text-3xl font-extrabold tracking-tight text-on-background">{item.value}</p>
                  <p className="mt-1 text-sm text-primary">{item.detail}</p>
                </article>
              ))}
            </div>
          </div>

          <section className="relative rounded-[32px] border border-outline-variant/40 bg-surface p-4 shadow-[0_20px_60px_rgba(30,41,59,0.12)]">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -left-8 bottom-10 h-32 w-32 rounded-full bg-secondary/10 blur-3xl" />

            <div className="relative rounded-[28px] bg-surface-container-low p-4 sm:p-5">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-on-surface-variant">Vista previa</p>
                  <h2 className="text-2xl font-bold text-on-background">Dashboard individual</h2>
                </div>
                <div className="rounded-full bg-surface px-4 py-2 text-sm font-semibold text-primary shadow-sm">+240 pts</div>
              </div>

              <div className="grid gap-4 lg:grid-cols-[220px_1fr]">
                <aside className="rounded-[24px] bg-inverse-surface p-5 text-inverse-on-surface shadow-[0_10px_40px_rgba(15,23,42,0.18)]">
                  <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-sm font-bold text-on-primary">TK</div>
                    <div>
                      <p className="text-sm text-inverse-on-surface/70">Hola, Mariana</p>
                      <p className="text-lg font-bold">Sigues en racha</p>
                    </div>
                  </div>

                  <nav className="mt-4 space-y-2 text-sm font-semibold">
                    <div className="rounded-2xl bg-white/10 px-4 py-3 text-inverse-on-surface">Dashboard</div>
                    <div className="rounded-2xl px-4 py-3 text-inverse-on-surface/60">Ranking</div>
                    <div className="rounded-2xl px-4 py-3 text-inverse-on-surface/60">Logros</div>
                    <div className="rounded-2xl px-4 py-3 text-inverse-on-surface/60">Perfil</div>
                  </nav>

                  <div className="mt-6 rounded-[22px] bg-white/10 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-inverse-on-surface/60">Progreso semanal</p>
                    <p className="mt-2 text-3xl font-black">78%</p>
                    <div className="mt-3 h-2 rounded-full bg-white/10">
                      <div className="h-full w-[78%] rounded-full bg-primary" />
                    </div>
                  </div>
                </aside>

                <div className="space-y-4">
                  {previewCards.map((card) => (
                    <article key={card.title} className="rounded-[24px] bg-surface p-5 shadow-ambient-1">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-on-surface-variant">{card.title}</p>
                          <h3 className="text-lg font-bold text-on-background">{card.title}</h3>
                          <p className="text-sm text-on-surface-variant">{card.description}</p>
                        </div>
                        <div className={`rounded-2xl px-3 py-2 text-sm font-semibold ${card.tone}`}>{card.value}</div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}
