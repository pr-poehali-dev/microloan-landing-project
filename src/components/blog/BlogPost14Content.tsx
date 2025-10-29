import { useState } from "react";
import BlogPost14Hero from "./post14/BlogPost14Hero";
import BlogPost14DebtStory from "./post14/BlogPost14DebtStory";
import BlogPost14RecoveryPlan from "./post14/BlogPost14RecoveryPlan";
import BlogPost14Mistakes from "./post14/BlogPost14Mistakes";
import BlogPost14Solutions from "./post14/BlogPost14Solutions";
import BlogPost14Conclusions from "./post14/BlogPost14Conclusions";
import BlogPost14MFOList from "./post14/BlogPost14MFOList";
import type { MFOOffer } from "./post14/BlogPost14MFOCard";

const BlogPost14Content = () => {
  const [selectedMFO, setSelectedMFO] = useState<number | null>(null);

  const mfoOffers: MFOOffer[] = [
    {
      id: 1,
      name: "Надо денег",
      logo: "💰",
      rating: 4.9,
      amount: "до 30 000 ₽",
      term: "до 30 дней",
      rate: "0%",
      features: ["Первый займ 0%", "Без проверки КИ", "За 5 минут"],
      approved: "98%",
      url: "https://trk.ppdu.ru/click/3GyRuqoD?erid=2SDnjdmoM8q&siteId=8015",
    },
    {
      id: 2,
      name: "Умные наличные",
      logo: "⚡",
      rating: 4.8,
      amount: "до 30 000 ₽",
      term: "до 30 дней",
      rate: "от 0%",
      features: ["Без отказа", "Онлайн 24/7", "На карту"],
      approved: "96%",
      url: "https://trk.ppdu.ru/click/HbPsDylQ?erid=LjN8KKm44&siteId=8015",
    },
    {
      id: 3,
      name: "Max.Credit",
      logo: "🎯",
      rating: 4.7,
      amount: "до 30 000 ₽",
      term: "до 30 дней",
      rate: "0%",
      features: ["С 18 лет", "Мгновенно", "Первый под 0%"],
      approved: "95%",
      url: "https://trk.ppdu.ru/click/OMRKMQnH?erid=2SDnjbuHuCz&siteId=8015",
    },
    {
      id: 4,
      name: "Веб-Займ",
      logo: "🌐",
      rating: 4.7,
      amount: "до 30 000 ₽",
      term: "до 30 дней",
      rate: "от 0%",
      features: ["Быстрое одобрение", "Без справок", "Продление займа"],
      approved: "94%",
      url: "https://trk.ppdu.ru/click/cOBWm2j7?erid=2SDnjc5cRY8&siteId=8015",
    },
    {
      id: 5,
      name: "Турбозайм",
      logo: "🚀",
      rating: 4.6,
      amount: "до 100 000 ₽",
      term: "до 168 дней",
      rate: "0%",
      features: ["Первый 0%", "Без проверок", "За 10 минут"],
      approved: "93%",
      url: "https://trk.ppdu.ru/click/kxajeYKr?erid=LjN8K737T&siteId=8015",
    },
  ];

  const handleMFOClick = async (mfo: MFOOffer) => {
    setSelectedMFO(mfo.id);

    try {
      const response = await fetch(
        "https://functions.poehali.dev/c591c6e9-075e-48d0-a487-6cfffa0136b7",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ mfo: mfo.name }),
        }
      );

      if (!response.ok) {
        console.warn("Failed to track MFO click");
      }
    } catch (error) {
      console.error("Error tracking MFO click:", error);
    }

    window.open(mfo.url, "_blank", "noopener,noreferrer");
  };

  return (
    <article className="prose prose-lg max-w-none">
      <BlogPost14Hero />
      <BlogPost14DebtStory />
      <BlogPost14RecoveryPlan />
      <BlogPost14Mistakes />
      <BlogPost14Solutions />
      <BlogPost14Conclusions />
      <BlogPost14MFOList
        offers={mfoOffers}
        selectedMFO={selectedMFO}
        onMFOClick={handleMFOClick}
      />
    </article>
  );
};

export default BlogPost14Content;
