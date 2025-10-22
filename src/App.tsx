import { lazy, Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FloatingTelegram from "./components/FloatingTelegram";
import PopupLeadForm from "./components/PopupLeadForm";
import CookieConsent from "./components/CookieConsent";
import ScrollToTop from "./components/ScrollToTop";

const Index = lazy(() => import("./pages/Index"));
const Blog = lazy(() => import("./pages/Blog"));
const Journal = lazy(() => import("./pages/Journal"));
const JournalPost2 = lazy(() => import("./pages/JournalPost2"));
const JournalPost4 = lazy(() => import("./pages/JournalPost4"));
const BlogPost1 = lazy(() => import("./pages/BlogPost1"));
const BlogPost2 = lazy(() => import("./pages/BlogPost2"));
const BlogPost3 = lazy(() => import("./pages/BlogPost3"));
const BlogPost4 = lazy(() => import("./pages/BlogPost4"));
const BlogPost5 = lazy(() => import("./pages/BlogPost5"));
const BlogPost6 = lazy(() => import("./pages/BlogPost6"));
const BlogPost7 = lazy(() => import("./pages/BlogPost7"));
const BlogPost8 = lazy(() => import("./pages/BlogPost8"));
const BlogPost9 = lazy(() => import("./pages/BlogPost9"));
const BlogPost10 = lazy(() => import("./pages/BlogPost10"));
const BlogPost11 = lazy(() => import("./pages/BlogPost11"));
const BlogPost12 = lazy(() => import("./pages/BlogPost12"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const UserAgreement = lazy(() => import("./pages/UserAgreement"));
const Admin = lazy(() => import("./pages/Admin"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Sitemap = lazy(() => import("./pages/Sitemap"));
const SeoCheck = lazy(() => import("./pages/SeoCheck"));

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
          <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div></div>}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/journal" element={<Journal />} />
              <Route path="/journal/ipoteka-ot-mfo-2025" element={<JournalPost2 />} />
              <Route path="/journal/reshenie-cb-24-oktyabrya-vklady-obligacii" element={<JournalPost4 />} />
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
              <Route path="/blog/pochemu-banki-i-mfo-otkazyvayut" element={<BlogPost11 />} />
              <Route path="/blog/zajm-na-kartu-sberbanka-onlajn" element={<BlogPost12 />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/user-agreement" element={<UserAgreement />} />
              <Route path="/sitemap.xml" element={<Sitemap />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/seo-check" element={<SeoCheck />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;