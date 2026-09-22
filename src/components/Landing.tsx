import introPoster from "@/assets/wedding-intro-poster.jpg.asset.json";

const details = [
  { label: "თარიღი", value: "პირველი ოქტომბერი, 2026" },
  { label: "ცერემონია", value: "17:00 — ღია ბაღი" },
  { label: "ადგილი", value: "სახელი და მისამართი" },
];

export function Landing() {
  return (
    <main className="min-h-screen bg-background">
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 text-center">
        <img
          src={introPoster.url}
          alt=""
          aria-hidden
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-background/45" aria-hidden />
        <div className="relative animate-fade-up">
          <p className="text-xs uppercase tracking-[0.5em] text-muted-foreground">
            ერთად
          </p>
          <h1 className="mt-6 flex flex-col items-center gap-1 text-4xl leading-tight text-foreground sm:flex-row sm:gap-4 sm:text-6xl">
            <span>მარიამი</span>
            <span className="text-primary">&</span>
            <span>გიორგი</span>
          </h1>
          <div className="mx-auto mt-8 h-px w-24 bg-primary/40" />
          <p className="mt-8 max-w-md text-balance text-base text-muted-foreground">
            სიხარულით გიწვევთ ჩვენი ქორწილის დღეს — გაგვიზიარეთ ეს განსაკუთრებული
            საღამო.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-24">
        <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
          {details.map((d) => (
            <div key={d.label} className="bg-card px-6 py-10 text-center">
              <p className="text-[0.7rem] uppercase tracking-[0.3em] text-muted-foreground">
                {d.label}
              </p>
              <p className="mt-3 font-display text-lg text-foreground">{d.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="font-display text-2xl text-foreground">გელოდებით</p>
          <p className="mt-3 text-sm text-muted-foreground">
            დასწრების დადასტურება მალე დაემატება
          </p>
        </div>
      </section>
    </main>
  );
}
