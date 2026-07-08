import { GenericSubPage } from '@/pages/services/shared';

const TITLES: Record<string, string> = {
  'stacionarny': 'Стационарный мерчандайзинг',
  'vizitny': 'Визитный мерчандайзинг',
  'sovmeshchenny': 'Совмещённый мерчандайзинг',
  'vydelenny': 'Выделенный мерчандайзинг',
};

export default function MerchSubService() {
  return <GenericSubPage sectionLabel="Мерчандайзинг" knownTitles={TITLES} />;
}
