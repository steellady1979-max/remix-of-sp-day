import { useEffect, useRef, useState } from "react";
import introVideo from "@/assets/wedding-intro.mp4";
import introPoster from "@/assets/wedding-intro-poster.jpg";

/**
 * Full-screen intro that plays the complete muted clip and only then
 * cross-fades into the landing page.
 */
export function VideoIntro({ onFinish }: { onFinish: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [leaving, setLeaving] = useState(false);
  const [needsPlay, setNeedsPlay] = useState(false);
  const done = useRef(false);

  useEffect(() => {
    let fadeTimer: number | undefined;

    const finish = () => {
      if (done.current) return;
      done.current = true;
      setLeaving(true);
      fadeTimer = window.setTimeout(onFinish, 900);
    };

    const el = videoRef.current;

    if (el) {
      el.muted = true;
      el.playsInline = true;
      el.addEventListener("ended", finish, { once: true });
      el.addEventListener("error", finish, { once: true });

      const attempt = el.play();
      if (attempt && typeof attempt.catch === "function") {
        attempt.catch(() => {
          // Some mobile browsers require one explicit tap before playback.
          setNeedsPlay(true);
        });
      }
    } else {
      finish();
    }

    return () => {
      if (fadeTimer) window.clearTimeout(fadeTimer);
      el?.removeEventListener("ended", finish);
      el?.removeEventListener("error", finish);
    };
  }, [onFinish]);

  const startPlayback = async () => {
    const el = videoRef.current;
    if (!el) return;

    try {
      el.currentTime = 0;
      await el.play();
      setNeedsPlay(false);
    } catch {
      setNeedsPlay(true);
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 bg-background transition-opacity duration-[900ms] ease-out ${
        leaving ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        src={introVideo}
        poster={introPoster}
        muted
        autoPlay
        playsInline
        preload="auto"
        disablePictureInPicture
        controls={false}
        webkit-playsinline="true"
        x5-playsinline="true"
      />
      {needsPlay && (
        <button
          type="button"
          onClick={startPlayback}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 rounded-full border border-white/70 bg-black/35 px-6 py-3 font-galaktioni text-lg text-white shadow-lg backdrop-blur-sm transition hover:bg-black/50"
        >
          ვიდეოს დაწყება
        </button>
      )}
    </div>
  );
}
