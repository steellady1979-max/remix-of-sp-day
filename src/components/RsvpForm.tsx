import { useState } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

const rsvpSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "გთხოვთ მიუთითოთ სახელი" })
    .max(100, { message: "სახელი ძალიან გრძელია" }),
  attending: z.boolean(),
  guests: z.number().int().min(1).max(20),
  message: z.string().trim().max(500, { message: "შეტყობინება ძალიან გრძელია" }),
});

export function RsvpForm({ className = "" }: { className?: string }) {
  const [name, setName] = useState("");
  const [attending, setAttending] = useState<boolean | null>(null);
  const [guests, setGuests] = useState(1);
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (attending === null) {
      setError("გთხოვთ აირჩიოთ, დაესწრებით თუ არა");
      return;
    }

    const parsed = rsvpSchema.safeParse({
      name,
      attending,
      guests: attending ? guests : 1,
      message,
    });

    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "გთხოვთ შეავსოთ ველები");
      return;
    }

    setSending(true);
    const { error: dbError } = await supabase.from("rsvps").insert({
      name: parsed.data.name,
      attending: parsed.data.attending,
      guests: parsed.data.attending ? parsed.data.guests : 1,
      message: parsed.data.message || null,
    });
    setSending(false);

    if (dbError) {
      setError("ვერ გაიგზავნა. გთხოვთ სცადოთ ხელახლა.");
      return;
    }
    setDone(true);
  }

  const fieldClass =
    "w-full rounded-2xl border border-primary/25 bg-card/70 px-4 py-3 font-galaktioni text-lg text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors duration-300 focus:border-primary/60";

  return (
    <section className={className}>
      <div className="rounded-[2rem] border border-primary/20 bg-card/50 px-5 py-8 shadow-[0_18px_40px_-28px_rgba(90,60,40,0.55)] sm:px-8">
        <h2 className="text-center font-galaktioni text-2xl text-foreground sm:text-3xl">
          დასწრების დადასტურება
        </h2>
        <p className="mt-1 text-center font-handwritten text-2xl text-primary">
          will you be there?
        </p>

        {done ? (
          <div className="mt-8 animate-soft-in text-center">
            <p className="font-galaktioni text-xl text-foreground">
              მადლობა პასუხისთვის!
            </p>
            <p className="mt-2 font-handwritten text-3xl text-primary">
              see you soon
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-7 space-y-4">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={100}
              placeholder="სახელი და გვარი"
              className={fieldClass}
            />

            <div className="grid grid-cols-2 gap-3">
              {[
                { value: true, label: "დავესწრები" },
                { value: false, label: "ვერ დავესწრები" },
              ].map((opt) => (
                <button
                  key={String(opt.value)}
                  type="button"
                  onClick={() => setAttending(opt.value)}
                  className={`rounded-full border px-3 py-2.5 font-galaktioni text-base transition-colors duration-300 ${
                    attending === opt.value
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-primary/25 bg-card/60 text-muted-foreground hover:border-primary/50"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            {attending === true && (
              <div className="animate-soft-in flex items-center justify-between rounded-2xl border border-primary/25 bg-card/70 px-4 py-2.5">
                <span className="font-galaktioni text-lg text-foreground">
                  სტუმრების რაოდენობა
                </span>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setGuests((g) => Math.max(1, g - 1))}
                    className="h-8 w-8 rounded-full border border-primary/30 font-galaktioni text-lg leading-none text-primary transition-colors duration-300 hover:bg-primary/10"
                  >
                    −
                  </button>
                  <span className="w-5 text-center font-galaktioni text-lg text-foreground">
                    {guests}
                  </span>
                  <button
                    type="button"
                    onClick={() => setGuests((g) => Math.min(20, g + 1))}
                    className="h-8 w-8 rounded-full border border-primary/30 font-galaktioni text-lg leading-none text-primary transition-colors duration-300 hover:bg-primary/10"
                  >
                    +
                  </button>
                </div>
              </div>
            )}

            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              maxLength={500}
              rows={3}
              placeholder="მილოცვა წყვილს (სურვილისამებრ)"
              className={`${fieldClass} resize-none`}
            />

            {error && (
              <p className="text-center font-galaktioni text-base text-destructive">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={sending}
              className="w-full rounded-full bg-primary px-6 py-3 font-galaktioni text-lg text-primary-foreground transition-opacity duration-300 hover:opacity-90 disabled:opacity-60"
            >
              {sending ? "იგზავნება..." : "დადასტურება"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
