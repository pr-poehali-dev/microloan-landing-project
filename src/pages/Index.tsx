import { useEffect, lazy, Suspense } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MFOList from "@/components/MFOList";
import LoanQuiz from "@/components/LoanQuiz";
import ApprovalTicker from "@/components/ApprovalTicker";
import LatestNews from "@/components/LatestNews";

const LeadForm = lazy(() => import("@/components/LeadForm"));
const LoanCalculator = lazy(() => import("@/components/LoanCalculator"));
const WhatIsMicroloan = lazy(() => import("@/components/WhatIsMicroloan"));
const HowToGetLoan = lazy(() => import("@/components/HowToGetLoan"));
const OnlineProcess = lazy(() => import("@/components/OnlineProcess"));
const UrgentLoans = lazy(() => import("@/components/UrgentLoans"));
const Security = lazy(() => import("@/components/Security"));
const Licenses = lazy(() => import("@/components/Licenses"));
const Conditions2024 = lazy(() => import("@/components/Conditions2024"));
const Comparison = lazy(() => import("@/components/Comparison"));
const RefinancingAndTips = lazy(() => import("@/components/RefinancingAndTips"));
const Reviews = lazy(() => import("@/components/Reviews"));
const FAQ = lazy(() => import("@/components/FAQ"));
const Conclusion = lazy(() => import("@/components/Conclusion"));
const Footer = lazy(() => import("@/components/Footer"));

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
        <LatestNews />
        <Suspense fallback={<div className="h-20"></div>}>
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
        </Suspense>
      </main>
      <Suspense fallback={<div className="h-20"></div>}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;