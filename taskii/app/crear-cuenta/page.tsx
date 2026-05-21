export default function CrearCuentaPage() {
  return (
    <main className="min-h-screen bg-background text-on-background flex items-center justify-center px-4 py-10">
      <div className="relative w-full max-w-5xl grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <section className="rounded-[32px] bg-surface p-8 shadow-[0_20px_60px_rgba(30,41,59,0.12)] border border-outline-variant/40">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-surface-container-low px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            Bienvenida a taskii
          </div>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-on-background">Crear cuenta</h1>
          <p className="mt-2 text-on-surface-variant">
            Registra tu equipo y empieza a convertir metas en puntos canjeables.
          </p>

          <form className="mt-8 grid gap-4">
            <div className="grid gap-2">
              <label className="text-sm font-semibold text-on-surface-variant">Nombre completo</label>
              <input
                className="rounded-2xl border border-outline-variant/40 bg-surface px-4 py-3 text-sm shadow-sm focus:border-primary focus:outline-none"
                placeholder="Mariana Perez"
              />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-semibold text-on-surface-variant">Correo</label>
              <input
                className="rounded-2xl border border-outline-variant/40 bg-surface px-4 py-3 text-sm shadow-sm focus:border-primary focus:outline-none"
                placeholder="mariana@taskii.com"
                type="email"
              />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-semibold text-on-surface-variant">Contrasena</label>
              <input
                className="rounded-2xl border border-outline-variant/40 bg-surface px-4 py-3 text-sm shadow-sm focus:border-primary focus:outline-none"
                placeholder="********"
                type="password"
              />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-semibold text-on-surface-variant">Rol preferido</label>
              <div className="grid gap-2 sm:grid-cols-3">
                {["Admin", "Moderador", "Participante"].map((role) => (
                  <button
                    key={role}
                    type="button"
                    className="rounded-2xl border border-outline-variant/40 bg-surface-container-low px-3 py-2 text-sm font-semibold text-on-background transition hover:border-primary/40"
                  >
                    {role}
                  </button>
                ))}
              </div>
            </div>
            <button className="mt-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-on-primary shadow-lg shadow-primary/20 transition hover:-translate-y-0.5 hover:bg-primary/90">
              Crear cuenta
            </button>
            <p className="text-xs text-on-surface-variant">
              Ya tienes cuenta? <a className="text-primary font-semibold" href="/">Volver a landing</a>
            </p>
          </form>
        </section>

        <aside className="relative overflow-hidden rounded-[32px] bg-inverse-surface text-inverse-on-surface p-8 shadow-[0_20px_60px_rgba(15,23,42,0.3)]">
          <div className="absolute -top-20 -right-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-16 -left-8 h-36 w-36 rounded-full bg-secondary/20 blur-3xl" />
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-inverse-on-surface/60">Beneficios</p>
          <h2 className="mt-4 text-3xl font-bold">Tu progreso, visible para todos</h2>
          <p className="mt-3 text-inverse-on-surface/70">
            Configura recompensas, define metas y sigue el ranking semanal desde una sola vista.
          </p>
          <div className="mt-8 grid gap-4">
            {[
              { label: "Metas por equipo", value: "6 grupos activos" },
              { label: "Puntos acumulados", value: "12.4k pts" },
              { label: "Racha promedio", value: "9 dias" },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl bg-white/10 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-inverse-on-surface/60">{item.label}</p>
                <p className="mt-2 text-2xl font-bold">{item.value}</p>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </main>
  );
}
