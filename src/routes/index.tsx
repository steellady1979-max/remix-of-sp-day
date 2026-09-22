import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useState } from "react";
import { VideoIntro } from "@/components/VideoIntro";
import { Landing } from "@/components/Landing";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "მარიამი & გიორგი — საქორწილო მოსაწვევი" },
      {
        name: "description",
        content:
          "მარიამისა და გიორგის საქორწილო მოსაწვევი: თარიღი, ადგილი და ცერემონიის დეტალები.",
      },
      { property: "og:title", content: "მარიამი & გიორგი — საქორწილო მოსაწვევი" },
      {
        property: "og:description",
        content: "გიწვევთ ჩვენი ქორწილის დღეს — ყველა დეტალი ერთ გვერდზე.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [introDone, setIntroDone] = useState(false);
  const finish = useCallback(() => setIntroDone(true), []);

  return (
    <>
      <div className={introDone ? "" : "pointer-events-none"}>
        <Landing />
      </div>
      {!introDone && <VideoIntro onFinish={finish} />}
    </>
  );
}
