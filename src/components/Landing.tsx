import frame from "@/assets/invite-frame.png.asset.json";

export function Landing() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-5 py-10">
      <div className="relative w-full max-w-md animate-fade-up">
        <img src={frame.url} alt="" className="w-full" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-[22%] text-center">
          <h1 className="font-galaktioni text-[2.1rem] leading-tight text-foreground sm:text-5xl">
            სოფია
            <span className="mx-2 text-primary">&</span>
            კახა
          </h1>
          <p className="mt-4 font-galaktioni text-lg tracking-[0.15em] text-muted-foreground sm:text-xl">
            06.06.2027
          </p>
        </div>
      </div>
    </main>
  );
}
