
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import Merchandising from "./pages/Merchandising";
import TechMerchandising from "./pages/TechMerchandising";
import MysteryShopper from "./pages/MysteryShopper";
import RetailAudit from "./pages/RetailAudit";
import Btl from "./pages/Btl";
import MerchSubService from "./pages/merchandising/MerchSubService";
import MerchCityPage from "./pages/merchandising/MerchCityPage";
import MerchNetworkPage from "./pages/merchandising/MerchNetworkPage";
import LentaPage from "./pages/merchandising/LentaPage";
import TechSubService from "./pages/tech-merchandising/TechSubService";
import MysterySubService from "./pages/mystery-shopper/MysterySubService";
import RetailSubService from "./pages/retail-audit/RetailSubService";
import BtlSubService from "./pages/btl/BtlSubService";
import Cases from "./pages/Cases";
import CaseDetail from "./pages/CaseDetail";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import Contacts from "./pages/Contacts";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import NotFound from "./pages/NotFound";
import { ContactPopupProvider } from "@/context/ContactPopupContext";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <ContactPopupProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/merchandising" element={<Merchandising />} />
            <Route path="/merchandising/city/:city" element={<MerchCityPage />} />
            <Route path="/merchandising/network/lenta" element={<LentaPage />} />
            <Route path="/merchandising/network/:network" element={<MerchNetworkPage />} />
            <Route path="/merchandising/:slug" element={<MerchSubService />} />
            <Route path="/tech-merchandising" element={<TechMerchandising />} />
            <Route path="/tech-merchandising/:slug" element={<TechSubService />} />
            <Route path="/mystery-shopper" element={<MysteryShopper />} />
            <Route path="/mystery-shopper/:slug" element={<MysterySubService />} />
            <Route path="/retail-audit" element={<RetailAudit />} />
            <Route path="/retail-audit/:slug" element={<RetailSubService />} />
            <Route path="/btl" element={<Btl />} />
            <Route path="/btl/:slug" element={<BtlSubService />} />
            <Route path="/cases" element={<Cases />} />
            <Route path="/cases/:id" element={<CaseDetail />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:id" element={<NewsDetail />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-use" element={<TermsOfUse />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ContactPopupProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;