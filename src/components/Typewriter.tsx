import { useEffect, useState } from "react";

type Props = {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  onDone?: () => void;
};

export function Typewriter({ text, speed = 110, delay = 0, className, onDone }: Props) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(delay === 0);

  useEffect(() => {
    if (started) return;
    const t = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(t);
  }, [delay, started]);

  useEffect(() => {
    if (!started || count >= text.length) return;
    const t = setTimeout(() => setCount((c) => c + 1), speed);
    return () => clearTimeout(t);
  }, [started, count, text.length, speed]);

  const done = count >= text.length;

  useEffect(() => {
    if (done && started) onDone?.();
  }, [done, started, onDone]);

  return (
    <span className={className} aria-label={text}>
      <span aria-hidden>{text.slice(0, count)}</span>
      {started && !done && (
        <span aria-hidden className="animate-caret opacity-70">
          |
        </span>
      )}
    </span>
  );
}
