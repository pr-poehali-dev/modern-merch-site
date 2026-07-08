import { GenericSubPage } from '@/pages/services/shared';

const TITLES: Record<string, string> = {
  'proverka': 'Проверка инкогнито',
};

export default function MysterySubService() {
  return <GenericSubPage sectionLabel="Тайный покупатель" knownTitles={TITLES} />;
}
