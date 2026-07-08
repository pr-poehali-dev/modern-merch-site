import { GenericSubPage } from '@/pages/services/shared';

const TITLES: Record<string, string> = {
  'promoakcii': 'Промоакции',
};

export default function BtlSubService() {
  return <GenericSubPage sectionLabel="BTL услуги + Организация дегустаций" knownTitles={TITLES} />;
}
