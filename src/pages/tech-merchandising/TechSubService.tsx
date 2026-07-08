import { GenericSubPage } from '@/pages/services/shared';

const TITLES: Record<string, string> = {
  'logistika': 'Логистика оборудования',
  'utilizaciya': 'Утилизация оборудования',
  'izgotovlenie': 'Изготовление конструкций',
  'zamery': 'Замеры торговых точек',
};

export default function TechSubService() {
  return <GenericSubPage sectionLabel="Технический мерчандайзинг" knownTitles={TITLES} />;
}
