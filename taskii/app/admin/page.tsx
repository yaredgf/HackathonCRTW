const members = [
  { name: "Mariana Perez", email: "mariana@taskii.com", role: "Admin", status: "Activo" },
  { name: "Carlos Diaz", email: "carlos@taskii.com", role: "Moderador", status: "Activo" },
  { name: "Valeria Gomez", email: "valeria@taskii.com", role: "Participante", status: "Pendiente" },
];

const invites = [
  { email: "sofia@taskii.com", role: "Participante", expires: "48h" },
  { email: "nicolas@taskii.com", role: "Moderador", expires: "72h" },
];

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-background text-on-background">
      <div className="mx-auto flex min-h-screen w-full max-w-[1440px] flex-col gap-8 px-4 pb-16 pt-6 sm:px-6 lg:px-8">
        <header className="flex flex-col gap-6 rounded-[28px] border border-outline-variant/40 bg-surface px-6 py-5 shadow-ambient-1 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-on-surface-variant">Administracion</p>
            <h1 className="text-3xl font-black tracking-tight text-on-background md:text-4xl">Panel de control</h1>
            <p className="text-sm text-on-surface-variant">Gestion de equipos, roles y recompensas.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <a className="rounded-full border border-outline bg-surface px-4 py-2 text-sm font-semibold text-on-background" href="/dashboard">
              Ver dashboard
            </a>
            <a className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-on-primary shadow-lg shadow-primary/20" href="/crear-cuenta">
              Agregar miembro
            </a>
          </div>
        </header>

        <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="rounded-[28px] border border-outline-variant/40 bg-surface p-6 shadow-ambient-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-on-surface-variant">Miembros</p>
                <h2 className="text-2xl font-bold text-on-background">Equipo principal</h2>
              </div>
              <span className="rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary">24 miembros</span>
            </div>
            <div className="mt-6 grid gap-3">
              {members.map((member) => (
                <div key={member.email} className="flex items-center justify-between gap-4 rounded-2xl border border-outline-variant/40 bg-surface-container-low px-4 py-3">
                  <div>
                    <p className="text-sm font-semibold text-on-background">{member.name}</p>
                    <p className="text-xs text-on-surface-variant">{member.email}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-semibold text-on-background">{member.role}</p>
                    <p className="text-xs text-on-surface-variant">{member.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <aside className="rounded-[28px] border border-outline-variant/40 bg-inverse-surface p-6 text-inverse-on-surface shadow-[0_18px_40px_rgba(15,23,42,0.25)]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-inverse-on-surface/60">Invitaciones</p>
                <h2 className="text-2xl font-bold">Pendientes</h2>
              </div>
              <span className="rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold text-primary">{invites.length}</span>
            </div>
            <div className="mt-6 grid gap-3">
              {invites.map((invite) => (
                <div key={invite.email} className="rounded-2xl bg-white/10 px-4 py-3">
                  <p className="text-sm font-semibold">{invite.email}</p>
                  <div className="mt-1 flex items-center justify-between text-xs text-inverse-on-surface/70">
                    <span>{invite.role}</span>
                    <span>Expira en {invite.expires}</span>
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-6 w-full rounded-full bg-primary px-4 py-2 text-sm font-semibold text-on-primary shadow-lg shadow-primary/20">
              Generar nueva invitacion
            </button>
          </aside>
        </section>
      </div>
    </main>
  );
}
