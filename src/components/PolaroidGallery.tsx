import { useEffect, useRef, useState } from "react";
import photo1 from "@/assets/photo-1.jpg";
import photo2 from "@/assets/photo-2.jpg";
import photo3 from "@/assets/photo-3.jpg";
import photo4 from "@/assets/photo-4.jpg";

const photos = [
  { src: photo1, caption: "our beginning" },
  { src: photo2, caption: "hand in hand" },
  { src: photo3, caption: "last summer" },
  { src: photo4, caption: "forever yes" },
];

const tilts = ["-2.5deg", "1.8deg", "-1.4deg", "2.2deg"];

export function PolaroidGallery({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className={className}>
      <h2 className="text-center font-galaktioni text-2xl text-foreground sm:text-3xl">
        ჩვენი მომენტები
      </h2>
      <p className="mt-1 text-center font-handwritten text-2xl text-primary">
        swipe through our story
      </p>

      <div className="-mx-5 mt-6 w-[calc(100%+2.5rem)] sm:mx-0 sm:w-full">
        <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-8 pb-6 pt-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {photos.map((photo, i) => (
            <figure
              key={photo.caption}
              className="shrink-0 snap-center rounded-[2px] bg-card p-3 pb-10 shadow-[0_10px_30px_-12px_rgba(90,60,40,0.45)] transition-all duration-1000 ease-out"
              style={{
                width: "min(72vw, 17rem)",
                transform: visible
                  ? `rotate(${tilts[i % tilts.length]}) translateY(0)`
                  : "rotate(0deg) translateY(2.5rem)",
                opacity: visible ? 1 : 0,
                transitionDelay: `${i * 160}ms`,
              }}
            >
              <img
                src={photo.src}
                alt=""
                loading="lazy"
                width={816}
                height={816}
                className="aspect-square w-full object-cover"
              />
              <figcaption className="mt-4 text-center font-handwritten text-2xl leading-none text-muted-foreground">
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
