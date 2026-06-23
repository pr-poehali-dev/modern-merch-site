import React from 'react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import SiteCTA from '@/components/SiteCTA';
import IndexHero from './index/IndexHero';
import IndexAbout from './index/IndexAbout';
import IndexServices from './index/IndexServices';
import IndexCoverage from './index/IndexCoverage';

export default function Index() {
  return (
    <div className="min-h-screen bg-white font-sans text-black">
      <SiteHeader />
      <IndexHero />
      <IndexAbout />
      <IndexServices />
      <IndexCoverage />
      <SiteCTA />
      <SiteFooter />
    </div>
  );
}
