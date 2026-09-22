import { useEffect, useState } from "react";

const TARGET = new Date("2027-06-06T16:00:00+04:00").getTime();

function diff() {
  const ms = Math.max(0, TARGET - Date.now());
  return {
    days: Math.floor(ms / 86400000),
    hours: Math.floor((ms / 3600000) % 24),
    minutes: Math.floor((ms / 60000) % 60),
    seconds: Math.floor((ms / 1000) % 60),
  };
}

const LABELS: Array<[keyof ReturnType<typeof diff>, string]> = [
  ["days", "დღე"],
  ["hours", "საათი"],
  ["minutes", "წუთი"],
  ["seconds", "წამი"],
];

export function Countdown({ className = "" }: { className?: string }) {
  const [time, setTime] = useState(diff);

  useEffect(() => {
    const id = setInterval(() => setTime(diff()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className={className}>
      <div className="mx-auto mb-5 h-px w-24 bg-border" />
      <div className="flex items-start justify-center gap-4 sm:gap-7">
        {LABELS.map(([key, label], i) => (
          <div key={key} className="flex items-start gap-4 sm:gap-7">
            {i > 0 && <span className="pt-1 font-galaktioni text-xl text-muted-foreground/40">·</span>}
            <div className="min-w-12 text-center">
              <div className="font-galaktioni text-3xl leading-none text-foreground tabular-nums sm:text-4xl">
                {String(time[key]).padStart(2, "0")}
              </div>
              <div className="mt-2 text-[0.6rem] uppercase tracking-[0.25em] text-muted-foreground">
                {label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
