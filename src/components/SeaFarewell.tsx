import seaFrame from "@/assets/sea-frame.png";
import { Reveal } from "@/components/Reveal";

export function SeaFarewell({ className = "" }: { className?: string }) {
  return (
    <Reveal className={className}>
      <div className="relative select-none overflow-hidden">
        <img src={seaFrame} alt="" className="w-full" loading="lazy" decoding="async" />

        {/* A transparent, layered sea: the painted water remains visible underneath. */}
        <div
          className="sea-mask pointer-events-none absolute inset-x-0 bottom-[2.5%] h-[21%] overflow-hidden"
          aria-hidden="true"
        >
          <div className="sea-swell sea-swell-back absolute inset-x-0 bottom-[24%] h-[68%]">
            <svg
              className="sea-track sea-track-back absolute bottom-0 left-0 h-full w-[200%]"
              viewBox="0 0 2880 120"
              preserveAspectRatio="none"
            >
              <defs>
                <path
                  id="sea-back-wave"
                  d="M0 62 C150 31 294 30 446 61 S744 91 904 60 S1210 28 1440 62 L1440 120 L0 120 Z"
                />
              </defs>
              <use href="#sea-back-wave" x="0" />
              <use href="#sea-back-wave" x="1440" />
            </svg>
          </div>

          <div className="sea-swell sea-swell-front absolute inset-x-0 bottom-0 h-[62%]">
            <svg
              className="sea-track sea-track-front absolute bottom-0 left-0 h-full w-[200%]"
              viewBox="0 0 2880 120"
              preserveAspectRatio="none"
            >
              <defs>
                <path
                  id="sea-front-wave"
                  d="M0 58 C118 25 245 29 360 56 C486 86 606 89 724 57 C850 23 985 25 1102 55 C1220 85 1330 87 1440 58 L1440 120 L0 120 Z"
                />
                <path
                  id="sea-foam-line"
                  d="M0 58 C118 25 245 29 360 56 C486 86 606 89 724 57 C850 23 985 25 1102 55 C1220 85 1330 87 1440 58"
                />
              </defs>
              <use className="sea-front-fill" href="#sea-front-wave" x="0" />
              <use className="sea-front-fill" href="#sea-front-wave" x="1440" />
              <use className="sea-foam" href="#sea-foam-line" x="0" />
              <use className="sea-foam" href="#sea-foam-line" x="1440" />
            </svg>
          </div>

          <div className="sea-ripples absolute inset-x-[8%] bottom-[12%] h-[56%]" />
          <div className="sea-glimmer absolute inset-0" />
        </div>

        {/* farewell words inside the oval */}
        <div className="absolute inset-x-0 top-[10%] bottom-[34%] flex flex-col items-center justify-center px-[27%] text-center">
          <p className="font-handwritten text-3xl leading-tight text-primary sm:text-4xl">
            with love
          </p>
          <h2 className="mt-3 font-galaktioni text-2xl leading-snug text-foreground sm:text-3xl">
            გელოდებით სიყვარულით
          </h2>
          <p className="mt-3 font-galaktioni text-xl text-primary sm:text-2xl">სოფია &amp; კახა</p>
          <p className="mt-2 font-galaktioni text-sm tracking-[0.2em] text-muted-foreground">
            06.06.2027
          </p>
        </div>
      </div>
    </Reveal>
  );
}
