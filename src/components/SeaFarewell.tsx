import seaFrame from "@/assets/sea-frame.png";
import { Reveal } from "@/components/Reveal";

export function SeaFarewell({ className = "" }: { className?: string }) {
  return (
    <Reveal className={className}>
      <div className="relative select-none overflow-hidden">
        <img src={seaFrame} alt="" className="w-full" />

        {/* moving sea waves over the painted ocean */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[28%] overflow-hidden">
          <svg
            className="absolute bottom-[38%] left-0 h-[46%] w-[200%] animate-wave-slow opacity-55"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,70 C180,20 360,110 540,64 C720,18 900,104 1080,62 C1260,22 1350,74 1440,60 L1440,120 L0,120 Z"
              fill="rgba(255,255,255,0.55)"
            />
          </svg>
          <svg
            className="absolute bottom-[16%] left-0 h-[52%] w-[200%] animate-wave-fast opacity-45"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,58 C160,102 320,14 480,58 C640,102 800,16 960,58 C1120,100 1280,20 1440,58 L1440,120 L0,120 Z"
              fill="rgba(255,255,255,0.7)"
            />
          </svg>
          <div className="absolute inset-x-0 bottom-0 h-1/2 animate-shimmer bg-gradient-to-t from-white/25 to-transparent" />
        </div>

        {/* farewell words inside the oval */}
        <div className="absolute inset-x-0 top-[10%] bottom-[34%] flex flex-col items-center justify-center px-[27%] text-center">
          <p className="font-handwritten text-3xl leading-tight text-primary sm:text-4xl">
            with love
          </p>
          <h2 className="mt-3 font-galaktioni text-2xl leading-snug text-foreground sm:text-3xl">
            გელოდებით სიყვარულით
          </h2>
          <p className="mt-3 font-galaktioni text-xl text-primary sm:text-2xl">
            სოფია &amp; კახა
          </p>
          <p className="mt-2 font-galaktioni text-sm tracking-[0.2em] text-muted-foreground">
            06.06.2027
          </p>
        </div>
      </div>
    </Reveal>
  );
}
