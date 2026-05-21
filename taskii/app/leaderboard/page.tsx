export default function LeaderboardPage() {
  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col md:flex-row antialiased">
      <header className="md:hidden bg-surface shadow-ambient-1 w-full top-0 sticky flex justify-between items-center h-16 px-container-padding-mobile z-40 transition-all duration-200">
        <div className="flex items-center gap-3">
          <span className="font-headline-xl-mobile text-headline-xl-mobile font-extrabold text-primary">taskii</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-on-surface-variant hover:text-primary transition-colors duration-200 active:scale-95">
            <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
          </button>
          <div className="w-8 h-8 rounded-full bg-surface-container-high overflow-hidden border-2 border-primary-container">
            <img
              alt="User profile avatar"
              className="w-full h-full object-cover"
              data-alt="A close-up portrait of a young adult with a friendly, encouraging smile, wearing a casual light-colored top."
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCH_lBBbg0Ya-SJlr4aBXR0t-n-vYsosAr9VJoxgpjKBvp24a67c1H258ifZHjugWp1JvN04M-FZCQLdzMdj-T7sg631qKjZIVikf9mWy2TFh9T8MuFwqP0peqGcpDAx2wJqB4E77JuVgnF5AVKklSWKpp32xlZS8nek-oklBhvrmNVoRsEBnf2-F4bg_O-HV2AJSgr4PCF7GkTZSuiGAaF8cjDKSVswYOrCImLGa_rJHcuIwVq2Cr7S8uqNNSSOnj1A55wQ1TfsvWA"
            />
          </div>
        </div>
      </header>

      <nav className="hidden md:flex flex-col py-8 px-4 gap-2 bg-surface-container-low border-r border-outline-variant h-screen w-64 fixed left-0 top-0 z-30">
        <div className="mb-8 px-4 flex flex-col gap-1">
          <div className="flex items-center gap-2 mb-2">
            <img
              alt="taskii logo"
              className="w-8 h-8 object-contain"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAx1EBjvbo_i8MvvYhnWyjMCvMKAAEME18pCpRVq0ufQc8UbTzNZWExaAzJU4X10ufkYqaKeDxAr-bWK_d3TljiGEIV629tl6JYeqa3Oy_syW78m8msfwWCIOfidhvB7usT55D_tOF5Xxl0R6jKtinJqfqou41diS-PxAac7DbpF3nJopWin7qdqwZ-s5hdtn0EKsY10Q4LSUWbDTCYF8A279USyBhGh5xL8SDxPEGQkLd1H5scJ2L5fMZLvKLFTKftqhwU1BSvwhd"
            />
            <span className="font-headline-xl text-2xl font-extrabold text-primary tracking-tight">taskii</span>
          </div>
          <p className="font-label-md text-label-md text-on-surface-variant mt-1">Cada dia lo haces mejor</p>
        </div>

        <div className="flex flex-col gap-1 flex-grow">
          <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-highest rounded-xl transition-colors active:scale-[0.98]" href="/dashboard">
            <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
            <span className="font-label-lg text-label-lg">Dashboard</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 bg-primary-container text-on-primary-container font-bold rounded-xl active:scale-[0.98] transition-transform shadow-sm" href="/leaderboard">
            <span className="material-symbols-outlined fill" data-icon="leaderboard" data-weight="fill">leaderboard</span>
            <span className="font-label-lg text-label-lg">Ranking</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-highest rounded-xl transition-colors active:scale-[0.98]" href="/admin">
            <span className="material-symbols-outlined" data-icon="workspace_premium">workspace_premium</span>
            <span className="font-label-lg text-label-lg">Logros</span>
          </a>
        </div>
      </nav>

      <main className="flex-grow md:ml-64 p-container-padding-mobile md:p-container-padding-desktop flex flex-col gap-8 w-full max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mt-4 md:mt-0">
          <div>
            <h2 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-background mb-2">Ranking</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">Mira quien ha sido el mayor puntuador de la semana, sigue adelante.</p>
          </div>
          <div className="bg-surface-container-low p-1 rounded-xl flex inline-flex self-start border border-outline-variant/30">
            <button className="px-4 py-2 rounded-lg bg-surface shadow-sm font-label-lg text-label-lg text-primary transition-all">Esta semana</button>
            <button className="px-4 py-2 rounded-lg text-on-surface-variant hover:text-primary font-label-lg text-label-lg transition-all">Desde el inicio</button>
          </div>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-end mt-4">
          <div className="order-2 md:order-1 bg-surface rounded-2xl p-6 flex flex-col items-center text-center shadow-ambient-1 border border-outline-variant/20 relative overflow-hidden transform hover:-translate-y-1 transition-transform h-[280px] justify-end group">
            <div className="absolute top-0 w-full h-2 bg-secondary-container"></div>
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-secondary-container/10 rounded-full blur-xl group-hover:bg-secondary-container/20 transition-colors"></div>
            <div className="relative w-20 h-20 mb-4 z-10">
              <img
                alt="Sarah J."
                className="w-full h-full object-cover rounded-full border-4 border-surface shadow-md"
                data-alt="A bright, cheerful portrait of a young woman with a warm smile."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCg9gkrKXqevFtMUoIzvkj7JpWvyrVD1YeYULfbBQ3NkvPRP77h1_RohAdbwNGKEl2RnTKKXxAWBc0i7dXBBTH0xXCoEkXxw6dOiOWL6YmmOPq1GnurRNduZwKdwxtcslL0-DW8pltNreGwHmKMaIK5A8UejB4twTYx8pYJQZIX5Jp-fizvVsl-NpYOfZDWScOi6sToufBLUdVRjgZEEDpn52EzW4RCARcqr-WwNtWyW_ENwMIEzE2r8XLctOy26NmhbfA7XYuI43V3"
              />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-surface rounded-full flex items-center justify-center shadow-sm">
                <span className="font-label-lg text-label-lg text-secondary font-bold">2</span>
              </div>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-background mb-1 z-10">Sarah J.</h3>
            <p className="font-label-md text-label-md text-on-surface-variant mb-4 z-10 uppercase tracking-wider">Diseno</p>
            <div className="bg-surface-container-low px-4 py-2 rounded-full flex items-center gap-2 z-10">
              <span className="material-symbols-outlined text-secondary" style={{ fontSize: "18px" }}>stars</span>
              <span className="font-label-lg text-label-lg text-on-background font-bold">8,450 pts</span>
            </div>
          </div>

          <div className="order-1 md:order-2 bg-primary-container rounded-2xl p-8 flex flex-col items-center text-center shadow-ambient-2 relative overflow-hidden transform hover:-translate-y-2 transition-transform h-[320px] justify-end group z-10 border border-primary-fixed/30">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary-fixed/20 to-transparent pointer-events-none"></div>
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary-fixed/40 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-700"></div>
            <div className="absolute top-4 w-full flex justify-center">
              <span className="material-symbols-outlined text-on-primary-container fill" data-weight="fill" style={{ fontSize: "32px" }}>workspace_premium</span>
            </div>
            <div className="relative w-28 h-28 mb-4 z-10">
              <img
                alt="Alex M."
                className="w-full h-full object-cover rounded-full border-4 border-surface shadow-lg"
                data-alt="A confident, smiling portrait of a young man in a modern indoor environment."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnayq93q2MbZKUcNgguH-O7Wu-HyzmV53uI87h6uctyYPUc2txEyClnGjiyd_23jIhhWEZCI7kpEGUSr7ZN5yNmcBgiwvRP2jyVwBZ1bXTXeeW5CQadgGDVHDLyD9NBf2JN2QXY86GfxeK0Lh5XIJqr1lbDVArI9a-Tp5qt61ZNoBR0VwMyf924lFROyN8YSH5Jd0aCI3uucYuWgG5lDEYddfl1MP5vxchfzdZdBSOcYcCd_Cai_7lHKKKp_OBiNjXS4Bkg1V_Lx-c"
              />
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-surface rounded-full flex items-center justify-center shadow-md border-2 border-primary-container">
                <span className="font-headline-md text-headline-md text-primary font-bold">1</span>
              </div>
            </div>
            <h3 className="font-headline-lg text-headline-lg text-on-primary-container mb-1 z-10">Alex M.</h3>
            <p className="font-label-md text-label-md text-on-primary-container/80 mb-4 z-10 uppercase tracking-wider">Ingeniero en sistemas</p>
            <div className="bg-surface px-5 py-2.5 rounded-full flex items-center gap-2 z-10 shadow-sm">
              <span className="material-symbols-outlined text-primary fill" data-weight="fill" style={{ fontSize: "20px" }}>military_tech</span>
              <span className="font-headline-md text-headline-md text-on-background font-extrabold">12,200 pts</span>
            </div>
          </div>

          <div className="order-3 md:order-3 bg-surface rounded-2xl p-6 flex flex-col items-center text-center shadow-ambient-1 border border-outline-variant/20 relative overflow-hidden transform hover:-translate-y-1 transition-transform h-[260px] justify-end group">
            <div className="absolute top-0 w-full h-2 bg-tertiary-container"></div>
            <div className="relative w-16 h-16 mb-4 z-10">
              <img
                alt="Emily R."
                className="w-full h-full object-cover rounded-full border-4 border-surface shadow-md"
                data-alt="A portrait of an energetic young professional woman looking slightly off-camera with a gentle smile."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJINWdIP-YNoa8XhnI5prkdtEjcGO4VCHa3Ick5s66PQbiFgw3OqpOhX_PI_c1nHR1He5Qe3z3O7xTqVKvYXRrF0gm0QW4rLomiA0aLPiVTD3rWC6Ya5-lhBRUIAjTS6Kw3m3McTuZvP76go9LZsbiwlL0sfnEpnNoyA9O5dRKP68Z90mUHhUuUC4wt6cP8lsjTgQyT35UmFF4NiHYRkJd64NFBnEYXYXs3mNZ3Q6ED0lPblrX-svA5_HRE_4Rt0vhbXJv2WUhrNon"
              />
              <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-surface rounded-full flex items-center justify-center shadow-sm">
                <span className="font-label-lg text-label-lg text-tertiary font-bold">3</span>
              </div>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-background mb-1 z-10">Emily R.</h3>
            <p className="font-label-md text-label-md text-on-surface-variant mb-4 z-10 uppercase tracking-wider">Marketing</p>
            <div className="bg-surface-container-low px-4 py-2 rounded-full flex items-center gap-2 z-10">
              <span className="material-symbols-outlined text-tertiary" style={{ fontSize: "18px" }}>stars</span>
              <span className="font-label-lg text-label-lg text-on-background font-bold">7,890 pts</span>
            </div>
          </div>
        </section>

        <section className="mt-8 flex flex-col gap-3">
          <h3 className="font-headline-md text-headline-md text-on-background mb-2">Contendientes</h3>
          <div className="hidden md:flex items-center px-6 py-2 text-on-surface-variant font-label-md text-label-md uppercase tracking-wider">
            <div className="w-12 text-center">n.</div>
            <div className="flex-grow pl-4">persona</div>
            <div className="w-32 text-right">Tareas completas</div>
            <div className="w-32 text-right">Puntos totales</div>
          </div>

          {[
            { rank: 4, name: "Michael T.", points: "6,540", tasks: 42, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB90BbNZ5XPFB8XGceY7oQRFk8e1ufYKCx6369rby7RBWHMT-6GDTbbBsNOqIDRyqwMeLeGmnXWjOd0QHpD5S2Ew0YzQs9rTQ0rRgDp_m1zbvjePtpFiGf0jDP36WqV0U-K9NxjBh4z9IaVSO90m5DW2l8voV_2cqUDfBzLMpoJ91hLSSfCwaipK_se2z28CDnj5bfefwn2Zx9eL0PD3h4McM7COpn45DuFqoJupA60naSCF_pfOhW8wkCaVlkdG9UdoLFgOsV1AKbX" },
            { rank: 5, name: "Jessica W.", points: "6,120", tasks: 38, image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBl7tqWQRvVy8D74jzyAm0wRQ5T3EbcyUpI9EnbFipl0DZkc_mG7k358g20wPStLOqVv0tDbe94LtMPnH1W9HNrd3kKkMlIuwQCuw7DAW5l5Z82gtfK82isrhuWnCn-yIIoJ_YmOvxpukTMi08du71gKVB_COXD-cam6a1XSSxeJHRSJOTe-LOP34-YclORBbY4_8N4_R69uorpZz7IceX50fVpZ2G0Zeiw68bd95mPoBunAmOkVXvzfljDFfjYiAl6Pl9a6WDjngiJ" },
          ].map((item) => (
            <div key={item.rank} className="bg-surface rounded-xl p-4 md:px-6 md:py-4 flex items-center gap-4 shadow-ambient-1 hover:shadow-ambient-2 hover:-translate-y-0.5 transition-all cursor-pointer border border-transparent hover:border-primary-fixed/30 group">
              <div className="w-8 md:w-12 text-center font-headline-md text-headline-md text-on-surface-variant group-hover:text-primary transition-colors">{item.rank}</div>
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden flex-shrink-0">
                <img alt={item.name} className="w-full h-full object-cover" src={item.image} />
              </div>
              <div className="flex-grow">
                <h4 className="font-headline-md text-headline-md text-on-background" style={{ fontSize: "18px" }}>{item.name}</h4>
                <p className="font-label-md text-label-md text-on-surface-variant md:hidden">{item.points} pts</p>
              </div>
              <div className="hidden md:block w-32 text-right font-body-md text-body-md text-on-surface-variant">{item.tasks}</div>
              <div className="hidden md:flex w-32 justify-end items-center gap-1">
                <span className="font-headline-md text-headline-md text-on-background" style={{ fontSize: "18px" }}>{item.points}</span>
                <span className="material-symbols-outlined text-primary-fixed-dim" style={{ fontSize: "16px" }}>bolt</span>
              </div>
            </div>
          ))}

          <div className="bg-surface-container-low rounded-xl p-4 md:px-6 md:py-4 flex items-center gap-4 shadow-ambient-1 hover:shadow-ambient-2 hover:-translate-y-0.5 transition-all cursor-pointer border-l-4 border-l-primary-container group relative overflow-hidden">
            <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-primary-container/20 to-transparent pointer-events-none"></div>
            <div className="w-8 md:w-12 text-center font-headline-md text-headline-md text-primary font-bold">6</div>
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-primary-container">
              <img
                alt="You (David K.)"
                className="w-full h-full object-cover"
                data-alt="A close-up portrait of a young adult with a friendly, encouraging smile."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBM85jwhopj138O77aqZqGg6PJ5EUI69RCuPJJK_GEj-YrPW58L2UufWPOf0i5wi09ClDkhddNpb4xHJsms0xA30VblQTIM4tUravniEO89TKykY9dK0EcRHzVrkjiLjWEUQAAiZXiYsglTipMfNK8Z3fjEsXoZKVeSkdjj1reYfd-kRjYEHmDKiAaWyxSmGjZg8LWXNrCI_VyL_NmccEVvYzovRNmhdkRoht6SeUItw1viMdLTtkYm2VpU_xwVuF1gwQiWx9twjQ3s"
              />
            </div>
            <div className="flex-grow">
              <div className="flex items-center gap-2">
                <h4 className="font-headline-md text-headline-md text-on-background" style={{ fontSize: "18px" }}>You</h4>
                <span className="bg-primary-container/30 text-primary px-2 py-0.5 rounded-full font-label-md text-label-md">Rising!</span>
              </div>
              <p className="font-label-md text-label-md text-on-surface-variant md:hidden">5,900 pts</p>
            </div>
            <div className="hidden md:block w-32 text-right font-body-md text-body-md text-on-surface-variant">35</div>
            <div className="hidden md:flex w-32 justify-end items-center gap-1">
              <span className="font-headline-md text-headline-md text-on-background font-bold" style={{ fontSize: "18px" }}>5,900</span>
              <span className="material-symbols-outlined text-primary-container fill" data-weight="fill" style={{ fontSize: "16px" }}>bolt</span>
            </div>
          </div>

          <div className="bg-surface rounded-xl p-4 md:px-6 md:py-4 flex items-center gap-4 shadow-ambient-1 hover:shadow-ambient-2 hover:-translate-y-0.5 transition-all cursor-pointer border border-transparent hover:border-primary-fixed/30 group opacity-80 hover:opacity-100">
            <div className="w-8 md:w-12 text-center font-headline-md text-headline-md text-on-surface-variant group-hover:text-primary transition-colors">7</div>
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden flex-shrink-0 bg-surface-container-high flex items-center justify-center text-on-surface-variant font-headline-md">DB</div>
            <div className="flex-grow">
              <h4 className="font-headline-md text-headline-md text-on-background" style={{ fontSize: "18px" }}>Daniel B.</h4>
              <p className="font-label-md text-label-md text-on-surface-variant md:hidden">5,200 pts</p>
            </div>
            <div className="hidden md:block w-32 text-right font-body-md text-body-md text-on-surface-variant">29</div>
            <div className="hidden md:flex w-32 justify-end items-center gap-1">
              <span className="font-headline-md text-headline-md text-on-background" style={{ fontSize: "18px" }}>5,200</span>
              <span className="material-symbols-outlined text-outline" style={{ fontSize: "16px" }}>bolt</span>
            </div>
          </div>
        </section>

        <div className="h-16 md:h-8"></div>
      </main>

      <nav className="md:hidden fixed bottom-0 w-full bg-surface shadow-[0px_-4px_20px_rgba(30,41,59,0.05)] border-t border-outline-variant/20 flex justify-around items-center h-16 pb-safe z-40 px-2">
        <a className="flex flex-col items-center gap-1 p-2 text-on-surface-variant" href="/dashboard">
          <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
          <span className="text-[10px] font-semibold leading-none">Home</span>
        </a>
        <a className="flex flex-col items-center gap-1 p-2 text-primary font-bold" href="/leaderboard">
          <div className="bg-primary-container px-4 py-1 rounded-full flex items-center justify-center mb-0.5">
            <span className="material-symbols-outlined text-on-primary-container fill" data-icon="leaderboard" data-weight="fill">leaderboard</span>
          </div>
        </a>
        <a className="flex flex-col items-center gap-1 p-2 text-on-surface-variant" href="/admin">
          <span className="material-symbols-outlined" data-icon="workspace_premium">workspace_premium</span>
          <span className="text-[10px] font-semibold leading-none">Rewards</span>
        </a>
        <a className="flex flex-col items-center gap-1 p-2 text-on-surface-variant" href="/dashboard-tareas">
          <span className="material-symbols-outlined" data-icon="settings">settings</span>
          <span className="text-[10px] font-semibold leading-none">Settings</span>
        </a>
      </nav>
    </div>
  );
}
