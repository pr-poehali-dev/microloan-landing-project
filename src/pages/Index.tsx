import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MFOList from "@/components/MFOList";
import LoanQuiz from "@/components/LoanQuiz";
import LeadForm from "@/components/LeadForm";
import LoanCalculator from "@/components/LoanCalculator";
import WhatIsMicroloan from "@/components/WhatIsMicroloan";
import HowToGetLoan from "@/components/HowToGetLoan";
import OnlineProcess from "@/components/OnlineProcess";
import UrgentLoans from "@/components/UrgentLoans";
import Security from "@/components/Security";
import Licenses from "@/components/Licenses";
import Conditions2024 from "@/components/Conditions2024";
import Comparison from "@/components/Comparison";
import RefinancingAndTips from "@/components/RefinancingAndTips";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import Conclusion from "@/components/Conclusion";
import Footer from "@/components/Footer";
import ApprovalTicker from "@/components/ApprovalTicker";

const Index = () => {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Взять микрозайм онлайн на карту без отказа срочно",
      "description": "Оформите микрозайм онлайн на карту за 5 минут. Без справок и поручителей. Одобрение до 99%.",
      "url": "https://mikrofinru.ru/",
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [{
          "@type": "ListItem",
          "position": 1,
          "name": "Главная",
          "item": "https://mikrofinru.ru/"
        }]
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <ApprovalTicker />
      <main>
        <Hero />
        <LoanQuiz />
        <MFOList />
        <LeadForm />
        <LoanCalculator />
        <WhatIsMicroloan />
        <HowToGetLoan />
        <OnlineProcess />
        <UrgentLoans />
        <Security />
        <Licenses />
        <Conditions2024 />
        <Comparison />
        <RefinancingAndTips />
        <Reviews />
        <FAQ />
        <Conclusion />
      </main>
      <Footer />
    </div>
  );
};

export default Index;