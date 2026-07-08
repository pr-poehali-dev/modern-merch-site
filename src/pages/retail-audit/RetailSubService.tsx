import { GenericSubPage } from '@/pages/services/shared';

const TITLES: Record<string, string> = {
  'audit': 'Независимый аудит',
};

export default function RetailSubService() {
  return <GenericSubPage sectionLabel="Аудит торговых сетей" knownTitles={TITLES} />;
}
