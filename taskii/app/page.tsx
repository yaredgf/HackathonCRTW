const highlights = [
  {
    label: "Tareas completadas",
    value: "148",
    detail: "+18 esta semana",
  },
  {
    label: "Puntos de recompensa",
    value: "12.4k",
    detail: "34 canjeables",
  },
  {
    label: "Racha activa",
    value: "12 días",
    detail: "3 metas cerradas",
  },
];

const quickTasks = [
  {
    title: "Subir reporte de avance",
    category: "Académico",
    status: "En progreso",
    points: 60,
    accent: "bg-secondary",
  },
  {
    title: "Revisar tablero de equipo",
    category: "Colaboración",
    status: "Pendiente",
    points: 35,
    accent: "bg-tertiary",
  },
  {
    title: "Cerrar metas de la semana",
    category: "Prioridad",
    status: "Completado",
    points: 90,
    accent: "bg-primary",
  },
];

const leaderboard = [
  { name: "Alex M.", role: "Ingeniería", points: 12200, rank: 1, accent: "bg-primary-container" },
  { name: "Sarah J.", role: "Diseño", points: 8450, rank: 2, accent: "bg-secondary-container" },
  { name: "Emily R.", role: "Marketing", points: 7890, rank: 3, accent: "bg-tertiary-container" },
  { name: "Michael T.", role: "Operaciones", points: 6540, rank: 4, accent: "bg-surface-container-high" },
  { name: "Valeria P.", role: "Administración", points: 6210, rank: 5, accent: "bg-surface-container-high" },
];

const rewards = [
  "Insignia Starter",
  "Combo de café",
  "Día sin tareas",
  "Beca de puntos",
];

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="space-y-3">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-secondary">{eyebrow}</p>
      <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">{title}</h2>
      <p className="max-w-2xl text-base leading-7 text-slate-600 md:text-lg">{description}</p>
    </div>
  );
}

function ProgressBar({ value }: { value: number }) {
  return (
    <div className="h-3 rounded-full bg-sky-100">
      <div className="h-full rounded-full bg-primary shadow-[0_0_0_1px_rgba(255,255,255,0.45)_inset]" style={{ width: `${value}%` }} />
    </div>
  );
}

function Avatar({ name, tone }: { name: string; tone: string }) {
  return (
    <div className={`flex h-11 w-11 items-center justify-center rounded-full text-sm font-bold text-white ${tone}`}>
      {name
        .split(" ")
        .map((part) => part[0])
        .join("")}
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(67,167,67,0.13),transparent_24%),radial-gradient(circle_at_top_right,rgba(75,145,226,0.14),transparent_26%),radial-gradient(circle_at_70%_75%,rgba(174,53,65,0.08),transparent_22%)]" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-[1440px] flex-col px-4 pb-16 pt-4 sm:px-6 lg:px-8">
        <header className="sticky top-4 z-40 rounded-[28px] border border-slate-200/80 bg-white/85 px-5 py-4 shadow-[0_10px_35px_rgba(15,23,42,0.06)] backdrop-blur-xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-lg font-extrabold text-white shadow-lg shadow-primary/20">
                t
              </div>
              <div>
                <p className="text-lg font-extrabold tracking-tight text-slate-900">taskii</p>
                <p className="text-sm text-slate-500">Productividad con recompensas</p>
              </div>
            </div>

            <nav className="flex flex-wrap items-center gap-2 text-sm font-semibold text-slate-600">
              <a className="rounded-full px-4 py-2 transition hover:bg-slate-100 hover:text-slate-900" href="#dashboard">
                Dashboard
              </a>
              <a className="rounded-full px-4 py-2 transition hover:bg-slate-100 hover:text-slate-900" href="#ranking">
                Ranking
              </a>
              <a className="rounded-full px-4 py-2 transition hover:bg-slate-100 hover:text-slate-900" href="#auth">
                Acceso
              </a>
              <a className="rounded-full bg-primary px-4 py-2 text-white shadow-lg shadow-primary/20 transition hover:bg-primary/90" href="#admin">
                Ver admin
              </a>
            </nav>
          </div>
        </header>

        <section className="grid gap-8 px-1 pb-6 pt-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pt-20">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/80 px-4 py-2 text-sm font-semibold text-primary shadow-sm backdrop-blur">
              <span className="h-2.5 w-2.5 rounded-full bg-primary" />
              Base visual del prototipo Taskii
            </div>

            <div className="space-y-5">
              <h1 className="max-w-3xl text-5xl font-black tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
                Productivity and rewards in one calm, friendly workspace.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                Esta interfaz traduce las pantallas del ZIP a una experiencia completa: landing, auth, dashboard, leaderboard y panel de administración, con la identidad visual de Taskii.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a href="#dashboard" className="rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition hover:-translate-y-0.5 hover:bg-primary/90">
                Explorar dashboard
              </a>
              <a href="#auth" className="rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary">
                Probar acceso
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <article key={item.label} className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-[0_4px_20px_rgba(30,41,59,0.05)]">
                  <p className="text-sm font-medium text-slate-500">{item.label}</p>
                  <p className="mt-2 text-3xl font-extrabold tracking-tight text-slate-950">{item.value}</p>
                  <p className="mt-1 text-sm text-primary">{item.detail}</p>
                </article>
              ))}
            </div>
          </div>

          <section className="relative rounded-[32px] border border-slate-200 bg-white p-4 shadow-[0_20px_60px_rgba(30,41,59,0.08)]">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -left-8 bottom-10 h-32 w-32 rounded-full bg-secondary/10 blur-3xl" />

            <div className="relative rounded-[28px] bg-[#f5f8ff] p-4 sm:p-5">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Vista previa</p>
                  <h2 className="text-2xl font-bold text-slate-900">Dashboard individual</h2>
                </div>
                <div className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-primary shadow-sm">+240 pts</div>
              </div>

              <div className="grid gap-4 lg:grid-cols-[220px_1fr]">
                <aside className="rounded-[24px] bg-slate-900 p-5 text-slate-100 shadow-[0_10px_40px_rgba(15,23,42,0.18)]">
                  <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                    <Avatar name="Taskii" tone="bg-primary" />
                    <div>
                      <p className="text-sm text-slate-300">Hola, Mariana</p>
                      <p className="text-lg font-bold">Sigues en racha</p>
                    </div>
                  </div>

                  <nav className="mt-4 space-y-2 text-sm font-semibold">
                    <div className="rounded-2xl bg-white/10 px-4 py-3 text-white">Dashboard</div>
                    <div className="rounded-2xl px-4 py-3 text-slate-300">Ranking</div>
                    <div className="rounded-2xl px-4 py-3 text-slate-300">Logros</div>
                    <div className="rounded-2xl px-4 py-3 text-slate-300">Perfil</div>
                  </nav>

                  <div className="mt-6 rounded-[22px] bg-white/10 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">Progreso semanal</p>
                    <p className="mt-2 text-3xl font-black">78%</p>
                    <div className="mt-3 h-2 rounded-full bg-white/10">
                      <div className="h-full w-[78%] rounded-full bg-primary" />
                    </div>
                  </div>
                </aside>

                <div className="space-y-4">
                  <article className="rounded-[24px] bg-white p-5 shadow-[0_4px_20px_rgba(30,41,59,0.05)]">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-secondary">Tareas clave</p>
                        <h3 className="mt-1 text-xl font-bold text-slate-900">Lo que más suma esta semana</h3>
                      </div>
                      <div className="rounded-full bg-primary-container px-4 py-2 text-sm font-semibold text-primary">Meta: 300 pts</div>
                    </div>

                    <div className="mt-5 space-y-4">
                      {quickTasks.map((task) => (
                        <div key={task.title} className="rounded-[22px] border border-slate-200 p-4">
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <div className="flex flex-wrap items-center gap-2">
                                <span className={`h-2.5 w-2.5 rounded-full ${task.accent}`} />
                                <p className="font-semibold text-slate-900">{task.title}</p>
                              </div>
                              <p className="mt-1 text-sm text-slate-500">{task.category} · {task.status}</p>
                            </div>
                            <div className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-bold text-slate-700">+{task.points}</div>
                          </div>
                          <div className="mt-4">
                            <ProgressBar value={task.points} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </article>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <article className="rounded-[24px] bg-primary-container p-5 shadow-[0_8px_30px_rgba(67,167,67,0.12)]">
                      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Recompensas</p>
                      <h3 className="mt-1 text-xl font-bold text-slate-950">Canjea tus puntos</h3>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {rewards.map((reward) => (
                          <span key={reward} className="rounded-full bg-white/75 px-3 py-1.5 text-sm font-semibold text-slate-800">{reward}</span>
                        ))}
                      </div>
                    </article>

                    <article className="rounded-[24px] bg-secondary-container p-5 shadow-[0_8px_30px_rgba(75,145,226,0.14)]">
                      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-secondary">Panel admin</p>
                      <h3 className="mt-1 text-xl font-bold text-slate-950">7 solicitudes nuevas</h3>
                      <ul className="mt-4 space-y-3 text-sm text-slate-700">
                        <li className="flex items-center justify-between rounded-2xl bg-white/70 px-3 py-2"><span>Validar tarea semanal</span><span className="font-semibold">Hoy</span></li>
                        <li className="flex items-center justify-between rounded-2xl bg-white/70 px-3 py-2"><span>Aprobar recompensa</span><span className="font-semibold">18 min</span></li>
                      </ul>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>

        <section id="ranking" className="px-1 py-12 sm:py-16">
          <SectionHeading
            eyebrow="Leaderboard"
            title="Competencia suave, progreso visible"
            description="La tabla replica el enfoque del prototipo: podio destacado, ranking claro y tarjetas con personalidad suficiente para celebrar avances sin perder legibilidad."
          />

          <div className="mt-8 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[32px] border border-slate-200 bg-white p-5 shadow-[0_4px_20px_rgba(30,41,59,0.05)]">
              <div className="grid gap-4 md:grid-cols-3 md:items-end">
                {leaderboard.slice(0, 3).map((entry) => (
                  <article
                    key={entry.rank}
                    className={`rounded-[28px] ${entry.accent} p-5 text-center shadow-[0_10px_30px_rgba(30,41,59,0.08)] ${entry.rank === 1 ? "md:-mt-3" : ""}`}
                  >
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white text-lg font-black text-slate-900">{entry.rank}</div>
                    <p className="mt-4 text-lg font-bold text-slate-950">{entry.name}</p>
                    <p className="text-sm text-slate-600">{entry.role}</p>
                    <p className="mt-4 text-2xl font-black text-slate-950">{entry.points.toLocaleString()} pts</p>
                  </article>
                ))}
              </div>

              <div className="mt-5 space-y-3">
                {leaderboard.slice(3).map((entry) => (
                  <div key={entry.rank} className="flex items-center gap-4 rounded-[22px] border border-slate-200 px-4 py-3">
                    <div className="w-8 text-center text-lg font-black text-slate-500">{entry.rank}</div>
                    <Avatar name={entry.name} tone="bg-slate-800" />
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-semibold text-slate-900">{entry.name}</p>
                      <p className="text-sm text-slate-500">{entry.role}</p>
                    </div>
                    <div className="text-right font-bold text-slate-900">{entry.points.toLocaleString()} pts</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              <article className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_4px_20px_rgba(30,41,59,0.05)]">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Flujo de uso</p>
                <h3 className="mt-1 text-2xl font-bold text-slate-950">Pensado para estudiantes y administradores</h3>
                <div className="mt-5 grid gap-3">
                  {[
                    ["Crear cuenta", "Registro con datos simples y acceso rápido"],
                    ["Completar tareas", "Estado, puntos y prioridad visibles"],
                    ["Ganar recompensas", "Canje por beneficios claros"],
                  ].map(([step, detail], index) => (
                    <div key={step} className="flex items-start gap-4 rounded-[22px] bg-slate-50 p-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-black text-white">0{index + 1}</div>
                      <div>
                        <p className="font-semibold text-slate-900">{step}</p>
                        <p className="text-sm leading-6 text-slate-600">{detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </article>

              <article className="rounded-[32px] border border-slate-200 bg-slate-950 p-6 text-white shadow-[0_20px_50px_rgba(15,23,42,0.18)]">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-300">Panel de observación</p>
                <h3 className="mt-1 text-2xl font-bold">Métricas que el backend puede alimentar luego</h3>
                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {[
                    ["Sesiones", "1.8k"],
                    ["Tareas", "246"],
                    ["Premios", "52"],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-[22px] bg-white/10 p-4">
                      <p className="text-sm text-slate-300">{label}</p>
                      <p className="mt-2 text-3xl font-black">{value}</p>
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="auth" className="px-1 py-12 sm:py-16">
          <SectionHeading
            eyebrow="Auth"
            title="Pantallas de acceso listas para el backend"
            description="Los prototipos de iniciar sesión y crear cuenta quedan representados con un layout limpio y accesible, preparado para conectarse a rutas reales cuando el backend esté disponible."
          />

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            <article className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_4px_20px_rgba(30,41,59,0.05)]">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-secondary">Iniciar sesión</p>
              <h3 className="mt-1 text-2xl font-bold text-slate-950">Acceso rápido y sin fricción</h3>
              <div className="mt-6 space-y-4">
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-slate-700">Correo electrónico</span>
                  <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-primary focus:bg-white" defaultValue="maria@taskii.cr" />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-slate-700">Contraseña</span>
                  <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-primary focus:bg-white" defaultValue="••••••••" type="password" />
                </label>
                <button className="w-full rounded-2xl bg-primary px-4 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition hover:bg-primary/90">
                  Entrar al dashboard
                </button>
              </div>
            </article>

            <article className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_4px_20px_rgba(30,41,59,0.05)]">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-tertiary">Crear cuenta</p>
              <h3 className="mt-1 text-2xl font-bold text-slate-950">Registro para estudiantes y administradores</h3>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  "Nombre completo",
                  "Institución",
                  "Correo",
                  "Rol",
                ].map((field) => (
                  <label key={field} className="block sm:col-span-1">
                    <span className="mb-2 block text-sm font-semibold text-slate-700">{field}</span>
                    <input className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-primary focus:bg-white" />
                  </label>
                ))}
                <button className="sm:col-span-2 rounded-2xl bg-secondary px-4 py-3.5 text-sm font-semibold text-white shadow-lg shadow-secondary/20 transition hover:bg-secondary/90">
                  Crear perfil
                </button>
              </div>
            </article>
          </div>
        </section>

        <section id="admin" className="px-1 py-12 sm:py-16">
          <SectionHeading
            eyebrow="Admin"
            title="Vista para supervisar progreso, tareas y recompensas"
            description="La referencia del ZIP incluye un dashboard administrativo y una navegación lateral. Aquí queda resumido como una zona de control que puede extenderse después a una ruta específica."
          />

          <div className="mt-8 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
            <article className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-[0_4px_20px_rgba(30,41,59,0.05)]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Estado general</p>
                  <h3 className="mt-1 text-2xl font-bold text-slate-950">Tablero ejecutivo</h3>
                </div>
                <div className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">Semana actual</div>
              </div>

              <div className="mt-6 space-y-4">
                {[
                  ["Tareas aprobadas", "84", 84],
                  ["Recompensas disponibles", "18", 58],
                  ["Usuarios activos", "1,204", 72],
                ].map(([label, value, progress]) => (
                  <div key={label} className="rounded-[22px] border border-slate-200 p-4">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="font-semibold text-slate-900">{label}</p>
                        <p className="text-sm text-slate-500">Actualización automática del backend</p>
                      </div>
                      <p className="text-2xl font-black text-slate-950">{value}</p>
                    </div>
                    <div className="mt-4">
                      <ProgressBar value={progress as number} />
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-[32px] border border-slate-200 bg-slate-950 p-6 text-white shadow-[0_20px_50px_rgba(15,23,42,0.18)]">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-300">Navegación principal</p>
              <h3 className="mt-1 text-2xl font-bold">Mismo orden del prototipo</h3>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-[24px] bg-white/10 p-5">
                  <p className="text-sm text-slate-300">Dashboard</p>
                  <p className="mt-2 text-lg font-bold">Seguimiento diario y puntos</p>
                </div>
                <div className="rounded-[24px] bg-white/10 p-5">
                  <p className="text-sm text-slate-300">Ranking</p>
                  <p className="mt-2 text-lg font-bold">Podio y lista de participantes</p>
                </div>
                <div className="rounded-[24px] bg-white/10 p-5">
                  <p className="text-sm text-slate-300">Logros</p>
                  <p className="mt-2 text-lg font-bold">Canje, badges y recompensas</p>
                </div>
                <div className="rounded-[24px] bg-white/10 p-5">
                  <p className="text-sm text-slate-300">Administración</p>
                  <p className="mt-2 text-lg font-bold">Tareas, validaciones y usuarios</p>
                </div>
              </div>

              <div className="mt-6 rounded-[24px] bg-primary-container p-5 text-slate-950">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Listo para backend</p>
                <p className="mt-2 text-base leading-7">
                  No encontré rutas o servicios backend en el workspace actual, así que dejé la página lista para conectar datos reales más adelante sin romper la identidad visual.
                </p>
              </div>
            </article>
          </div>
        </section>

        <footer className="px-1 py-8 text-sm text-slate-500">
          <div className="flex flex-col gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p>Taskii frontend rebuild con base en el ZIP de referencia.</p>
            <p>Diseño con Plus Jakarta Sans, tarjetas suaves y contraste accesible.</p>
          </div>
        </footer>
      </div>
    </main>
  );
}
