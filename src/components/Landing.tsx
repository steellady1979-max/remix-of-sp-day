import { useState } from "react";
import { MapPin } from "lucide-react";
import frame from "@/assets/invite-frame.png.asset.json";
import band from "@/assets/floral-band.png.asset.json";
import scheduleFrame from "@/assets/schedule-frame.png.asset.json";
import dresscodeFrame from "@/assets/dresscode-frame.png.asset.json";
import { Typewriter } from "@/components/Typewriter";
import { Countdown } from "@/components/Countdown";

const schedule = [
  {
    time: "12:00",
    label: "ფოტოსესია სასტუმროში",
    link: "https://maps.app.goo.gl/vtAEEmrkupa8fShT7?g_st=ic",
  },
  { time: "14:00", label: "ფოტოსესია ძველ ბათუმში" },
  {
    time: "16:00",
    label: "ხელის მოწერის ცერემონიალი პეტრას ციხე",
    link: "https://maps.app.goo.gl/B2pJqNkRgCehzroB8?g_st=ic",
  },
  {
    time: "18:00",
    label: "გალა ვახშამი ერა ჰოლში",
    link: "https://maps.app.goo.gl/KKvZjWKEvpfrzUtE8?g_st=ic",
  },
];

export function Landing() {
  const [namesDone, setNamesDone] = useState(false);
  const [dateDone, setDateDone] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-5 py-12">
      <div className="relative w-full max-w-md animate-frame-reveal">
        <img src={frame.url} alt="" className="w-full" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-[22%] text-center">
          <h1 className="font-galaktioni text-[2.1rem] leading-tight text-foreground sm:text-5xl">
            <Typewriter text="სოფია" delay={1500} speed={130} onDone={() => setNamesDone(true)} />
            <span
              className="mx-2 text-primary transition-opacity duration-700"
              style={{ opacity: namesDone ? 1 : 0 }}
            >
              &
            </span>
            {namesDone && <Typewriter text="კახა" speed={130} />}
          </h1>
          <p className="mt-4 font-galaktioni text-lg tracking-[0.15em] text-muted-foreground sm:text-xl">
            <Typewriter text="06.06.2027" delay={3400} speed={95} onDone={() => setDateDone(true)} />
          </p>
        </div>
      </div>

      {dateDone && (
        <>
          <Countdown className="mt-10 w-full max-w-md animate-soft-in" />
          <div className="-mx-5 mt-8 w-[calc(100%+2.5rem)] animate-soft-in [animation-delay:300ms] sm:mx-0 sm:w-full sm:max-w-md">
            <img src={band.url} alt="" className="w-full" />
          </div>
          <div className="mt-6 max-w-md text-center animate-soft-in [animation-delay:600ms]">
            <p className="font-handwritten text-3xl leading-snug text-foreground sm:text-4xl">
              So happy to share the special day with you
            </p>
            <p className="mt-3 font-handwritten text-2xl leading-snug text-primary sm:text-3xl">
              Let’s make it unforgettable
            </p>
          </div>

          <div className="-mx-5 mt-10 w-[calc(100%+2.5rem)] animate-soft-in [animation-delay:800ms] sm:mx-0 sm:w-full sm:max-w-md">
            <div className="relative">
              <img src={scheduleFrame.url} alt="" className="w-full" />
              <div className="absolute inset-x-0 top-[23%] bottom-[9%] flex flex-col items-center justify-center px-[17%] text-center">
                <h2 className="font-galaktioni text-2xl text-foreground sm:text-3xl">
                  დღის განრიგი
                </h2>
                <ul className="mt-4 space-y-3">
                  {schedule.map((item, i) => (
                    <li
                      key={item.time}
                      className="animate-soft-in"
                      style={{ animationDelay: `${1200 + i * 350}ms` }}
                    >
                      <p className="font-galaktioni text-xl leading-none text-primary sm:text-2xl">
                        {item.time}
                      </p>
                      <p className="mt-1 font-galaktioni text-lg leading-snug text-foreground sm:text-xl">
                        {item.label}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  );
}
