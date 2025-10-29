import { Helmet } from "react-helmet-async";
import { useState } from "react";
import BlogPost12Intro from './post12/BlogPost12Intro';
import BlogPost12TopMFO from './post12/BlogPost12TopMFO';
import BlogPost12HowTo from './post12/BlogPost12HowTo';
import BlogPost12Features from './post12/BlogPost12Features';
import BlogPost12Additional from './post12/BlogPost12Additional';
import BlogPost12FAQ from './post12/BlogPost12FAQ';
import BlogPost12Conclusion from './post12/BlogPost12Conclusion';
import type { MFOOffer } from './post12/BlogPost12MFOCard';

const BlogPost12Content = () => {
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
    <>
      <Helmet>
        <title>
          Займ на карту Сбербанка онлайн — быстро и без отказа в 2025
        </title>
        <meta
          name="description"
          content="Оформите займ на карту Сбербанка онлайн в 2025 году — срочно, без проверки и с высокой вероятностью одобрения. Первый займ под 0% в надёжных МФО."
        />
        <meta
          property="og:title"
          content="Займ на карту Сбербанка онлайн — быстро и без отказа в 2025"
        />
        <meta
          property="og:description"
          content="Оформите займ на карту Сбербанка онлайн в 2025 году — срочно, без проверки и с высокой вероятностью одобрения. Первый займ под 0% в надёжных МФО."
        />
        <link
          rel="canonical"
          href="https://mikrofinru.ru/blog/zajm-na-kartu-sberbanka-onlajn"
        />
      </Helmet>

      <article className="max-w-4xl mx-auto px-4 py-12">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Займ на карту Сбербанка онлайн — быстрое и безопасное оформление
          </h1>
          <div className="flex items-center gap-4 text-gray-600 text-sm">
            <time dateTime="2025-10-15">15 октября 2025</time>
            <span>•</span>
            <span>14 мин чтения</span>
            <span>•</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
              Советы
            </span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          <BlogPost12Intro />
          <BlogPost12TopMFO 
            mfoOffers={mfoOffers}
            selectedMFO={selectedMFO}
            onMFOClick={handleMFOClick}
          />
          <BlogPost12HowTo />
          <BlogPost12Features />
          <BlogPost12Additional />
          <BlogPost12FAQ />
          <BlogPost12Conclusion />
        </div>
      </article>
    </>
  );
};

export default BlogPost12Content;
