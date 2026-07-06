import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import SiteCTA from '@/components/SiteCTA';
import MerchHero from './merchandising/MerchHero';
import MerchShowcase from './merchandising/MerchShowcase';
import MerchCoverage from './merchandising/MerchCoverage';

export default function Merchandising() {
  const [clientsExpanded, setClientsExpanded] = useState(false);
  const [citiesExpanded, setCitiesExpanded] = useState(false);
  const [networksExpanded, setNetworksExpanded] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-900">

      <SiteHeader />

      {/* Хлебные крошки */}
      <div className="border-b border-neutral-100 bg-white">
        <div className="container flex items-center gap-2 py-3 text-sm text-neutral-500">
          <Link to="/" className="hover:text-brand-green transition-colors">Главная</Link>
          <Icon name="ChevronRight" size={14} className="text-neutral-300" />
          <span className="hover:text-brand-green transition-colors cursor-pointer">Услуги</span>
          <Icon name="ChevronRight" size={14} className="text-neutral-300" />
          <span className="font-medium text-neutral-800">Мерчандайзинг</span>
        </div>
      </div>

      <MerchHero />

      <MerchShowcase clientsExpanded={clientsExpanded} setClientsExpanded={setClientsExpanded} />

      <MerchCoverage
        citiesExpanded={citiesExpanded}
        setCitiesExpanded={setCitiesExpanded}
        networksExpanded={networksExpanded}
        setNetworksExpanded={setNetworksExpanded}
      />

      <SiteCTA />

      <SiteFooter />

    </div>
  );
}
