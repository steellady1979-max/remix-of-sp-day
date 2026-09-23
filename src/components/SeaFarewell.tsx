import seaFrame from "@/assets/sea-frame.png";
import { Reveal } from "@/components/Reveal";

export function SeaFarewell({ className = "" }: { className?: string }) {
  return (
    <Reveal className={className}>
      <div className="relative select-none overflow-hidden">
        <img src={seaFrame} alt="" className="w-full" />

        {/* living sea over the painted ocean */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[34%] overflow-hidden">
          {/* deep water tint that breathes */}
          <div className="absolute inset-0 animate-swell bg-gradient-to-t from-[#2e6f8e]/45 via-[#5ea4bd]/25 to-transparent" />

          {/* back wave — dark teal, slow */}
          <svg
            className="absolute bottom-[30%] left-0 h-[58%] w-[200%] animate-wave-slow"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,64 C180,16 360,108 540,60 C720,14 900,100 1080,58 C1260,20 1350,72 1440,58 L1440,120 L0,120 Z"
              fill="rgba(46,111,142,0.42)"
            />
          </svg>

          {/* middle wave — seafoam, opposite drift */}
          <svg
            className="absolute bottom-[14%] left-0 h-[62%] w-[200%] animate-wave-mid"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,56 C160,100 320,12 480,56 C640,100 800,14 960,56 C1120,98 1280,18 1440,56 L1440,120 L0,120 Z"
              fill="rgba(126,186,205,0.5)"
            />
          </svg>

          {/* front wave — white foam crest, fast */}
          <svg
            className="absolute bottom-0 left-0 h-[48%] w-[200%] animate-wave-fast"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,66 C200,26 420,100 720,62 C1020,24 1240,96 1440,60 L1440,120 L0,120 Z"
              fill="rgba(255,255,255,0.6)"
            />
          </svg>

          {/* swelling foam line */}
          <div className="absolute inset-x-0 bottom-[26%] h-[22%] animate-swell-late bg-gradient-to-b from-white/30 to-transparent" />

          {/* sunlight glints dancing on the water */}
          <div className="absolute bottom-[38%] left-[18%] h-1.5 w-10 animate-glint rounded-full bg-white/80 blur-[2px]" />
          <div className="absolute bottom-[30%] left-[46%] h-1 w-14 animate-glint-late rounded-full bg-white/70 blur-[2px]" />
          <div className="absolute bottom-[42%] left-[68%] h-1.5 w-8 animate-glint rounded-full bg-white/80 blur-[2px] [animation-delay:2.4s]" />
          <div className="absolute bottom-[22%] left-[30%] h-1 w-12 animate-glint-late rounded-full bg-white/60 blur-[2px] [animation-delay:3.2s]" />
          <div className="absolute bottom-[18%] left-[76%] h-1 w-10 animate-glint rounded-full bg-white/70 blur-[2px] [animation-delay:1.1s]" />

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
