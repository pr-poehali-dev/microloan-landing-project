import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LoanConditions from "@/components/LoanConditions";
import Benefits from "@/components/Benefits";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <LoanConditions />
      <Benefits />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;