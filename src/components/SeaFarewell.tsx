import seaFrame from "@/assets/sea-frame.png";
import { Reveal } from "@/components/Reveal";

export function SeaFarewell({ className = "" }: { className?: string }) {
  return (
    <Reveal className={className}>
      <div className="relative select-none overflow-hidden">
        <img src={seaFrame} alt="" className="w-full" loading="lazy" decoding="async" />

        {/* living sea — confined to the painted water, softly masked so it never touches the flowers */}
        <div className="sea-mask pointer-events-none absolute inset-x-0 bottom-[2.5%] h-[20%] overflow-hidden">
          {/* back wave — seafoam, slow drift */}
          <svg
            className="absolute bottom-[26%] left-0 h-[70%] w-[200%] animate-wave-slow"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,64 C180,16 360,108 540,60 C720,14 900,100 1080,58 C1260,20 1350,72 1440,58 L1440,120 L0,120 Z"
              fill="rgba(122,180,200,0.38)"
            />
          </svg>

          {/* front wave — white foam crest, opposite drift */}
          <svg
            className="absolute bottom-0 left-0 h-[60%] w-[200%] animate-wave-mid"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,66 C200,26 420,100 720,62 C1020,24 1240,96 1440,60 L1440,120 L0,120 Z"
              fill="rgba(255,255,255,0.55)"
            />
          </svg>

          {/* gentle sunlight breathing on the water */}
          <div className="absolute inset-x-0 bottom-0 h-full animate-shimmer bg-gradient-to-t from-white/25 to-transparent" />
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
