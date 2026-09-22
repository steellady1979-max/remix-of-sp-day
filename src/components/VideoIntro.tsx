import { useEffect, useRef, useState } from "react";
import introVideo from "@/assets/wedding-intro.mp4.asset.json";
import introPoster from "@/assets/wedding-intro-poster.jpg.asset.json";

/**
 * Full-screen intro that plays a muted, controls-free clip and then
 * cross-fades into the landing page. Falls back to the poster image and a
 * timed exit if autoplay is blocked or the file is slow, so it never sticks.
 */
export function VideoIntro({ onFinish }: { onFinish: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [leaving, setLeaving] = useState(false);
  const done = useRef(false);

  useEffect(() => {
    const finish = () => {
      if (done.current) return;
      done.current = true;
      setLeaving(true);
      window.setTimeout(onFinish, 900);
    };

    const el = videoRef.current;
    let hardStop: number | undefined;

    if (el) {
      el.muted = true;
      el.playsInline = true;
      const started = () => {
        // guarantee an exit even if 'ended' never fires
        const total = Number.isFinite(el.duration) && el.duration > 0 ? el.duration : 6;
        hardStop = window.setTimeout(finish, (total + 1.2) * 1000);
      };
      el.addEventListener("playing", started, { once: true });
      el.addEventListener("ended", finish, { once: true });
      el.addEventListener("error", finish, { once: true });
      const attempt = el.play();
      if (attempt && typeof attempt.catch === "function") {
        attempt.catch(() => {
          // autoplay blocked: show poster briefly, then continue
          window.setTimeout(finish, 2200);
        });
      }
    } else {
      window.setTimeout(finish, 1200);
    }

    // absolute safety net
    const safety = window.setTimeout(finish, 12000);
    return () => {
      window.clearTimeout(safety);
      if (hardStop) window.clearTimeout(hardStop);
    };
  }, [onFinish]);

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-50 bg-background transition-opacity duration-[900ms] ease-out ${
        leaving ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        src={introVideo.url}
        poster={introPoster.url}
        muted
        autoPlay
        playsInline
        preload="auto"
        disablePictureInPicture
        controls={false}
        // @ts-expect-error vendor attribute for iOS/Android inline playback
        webkit-playsinline="true"
        x5-playsinline="true"
      />
      <button
        type="button"
        onClick={() => {
          if (done.current) return;
          done.current = true;
          setLeaving(true);
          window.setTimeout(onFinish, 500);
        }}
        className="absolute inset-0 h-full w-full cursor-default bg-transparent"
        aria-label="Skip intro"
      />
    </div>
  );
}
