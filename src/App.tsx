import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import BlogPost1 from "./pages/BlogPost1";
import BlogPost2 from "./pages/BlogPost2";
import BlogPost3 from "./pages/BlogPost3";
import BlogPost4 from "./pages/BlogPost4";
import BlogPost5 from "./pages/BlogPost5";
import BlogPost6 from "./pages/BlogPost6";
import BlogPost7 from "./pages/BlogPost7";
import BlogPost8 from "./pages/BlogPost8";
import BlogPost9 from "./pages/BlogPost9";
import BlogPost10 from "./pages/BlogPost10";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import UserAgreement from "./pages/UserAgreement";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";
import Sitemap from "./pages/Sitemap";
import FloatingTelegram from "./components/FloatingTelegram";
import PopupLeadForm from "./components/PopupLeadForm";
import CookieConsent from "./components/CookieConsent";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <FloatingTelegram />
          <PopupLeadForm />
          <CookieConsent />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/chto-takoe-mikrozajmy" element={<BlogPost1 />} />
            <Route path="/blog/raznitsa-mikrozajm-kredit-karta" element={<BlogPost2 />} />
            <Route path="/blog/kak-vybrat-nadezhnuyu-mfo" element={<BlogPost3 />} />
            <Route path="/blog/kak-rasschitat-pereplatu-po-mikrozajmu" element={<BlogPost4 />} />
            <Route path="/blog/prolongatsiya-i-refinansirovanie-mikrozajmov" element={<BlogPost5 />} />
            <Route path="/blog/kakie-dokumenty-nuzhny-dlya-mikrozajma" element={<BlogPost6 />} />
            <Route path="/blog/kak-vzyat-mikrozajm-i-ne-popast-v-dolgovuyu-yamu" element={<BlogPost7 />} />
            <Route path="/blog/top-oshibok-pri-oformlenii-mikrozajmov" element={<BlogPost8 />} />
            <Route path="/blog/mfo-s-momentalnym-odobreniem" element={<BlogPost9 />} />
            <Route path="/blog/mfo-kredit-s-plohoj-kreditnoj-istoriej" element={<BlogPost10 />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/user-agreement" element={<UserAgreement />} />
            <Route path="/sitemap.xml" element={<Sitemap />} />
            <Route path="/admin" element={<Admin />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;