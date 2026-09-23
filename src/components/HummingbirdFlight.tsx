import hummingbird from "@/assets/hummingbird-transparent.png";

export function HummingbirdFlight() {
  return (
    <div className="hummingbird-flight pointer-events-none fixed left-0 top-0 z-40" aria-hidden>
      <div className="hummingbird-hover relative">
        <img
          src={hummingbird}
          alt=""
          className="hummingbird-bird block h-auto w-full select-none"
          draggable={false}
        />
        <img
          src={hummingbird}
          alt=""
          className="hummingbird-wing-blur absolute inset-0 h-auto w-full select-none"
          draggable={false}
        />
      </div>
    </div>
  );
}
