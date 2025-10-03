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
import Conditions2024 from "@/components/Conditions2024";
import Comparison from "@/components/Comparison";
import RefinancingAndTips from "@/components/RefinancingAndTips";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import Conclusion from "@/components/Conclusion";
import Footer from "@/components/Footer";
import LiveCounter from "@/components/LiveCounter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
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
      <Conditions2024 />
      <Comparison />
      <RefinancingAndTips />
      <Reviews />
      <FAQ />
      <Conclusion />
      <Footer />
      <LiveCounter />
    </div>
  );
};

export default Index;