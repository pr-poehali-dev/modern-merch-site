import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import SiteCTA from '@/components/SiteCTA';
import { ServiceBreadcrumb, ServiceHero, ServiceFeatures, SubServiceGrid, ServiceApproachBlocks, ServiceCases } from '@/pages/services/shared';

const SUB_SERVICES = [
  { name: 'Промоакции', slug: '/btl/promoakcii', icon: 'Percent' },
];

export default function Btl() {
  return (
    <div className="min-h-screen bg-white font-sans text-neutral-900">
      <SiteHeader />
      <ServiceBreadcrumb label="BTL услуги + Организация дегустаций" />

      <ServiceHero
        badge="Услуга"
        title="BTL услуги + Организация дегустаций"
        description="Промоакции, дегустации и праздничные мероприятия с подбором и обучением персонала под ключ."
        image="https://cdn.poehali.dev/projects/f54777b0-87fc-4f92-93d7-a263150798ce/files/41cccab1-353e-4501-96a7-0b9371141f2b.jpg"
        bgClass="bg-[#ea580c]"
        buttonTextClass="text-[#ea580c]"
      />

      <ServiceFeatures
        title="Что мы организуем"
        subtitle="Полный цикл BTL-мероприятий — от идеи до отчёта"
        items={[
          { text: 'Дегустации новых продуктов с подбором промоперсонала', icon: 'Utensils' },
          { text: 'Промоакции и розыгрыши призов в торговых точках', icon: 'Percent' },
          { text: 'Праздничные мероприятия и активации бренда в ТЦ', icon: 'PartyPopper' },
          { text: 'Обучение и инструктаж промоутеров перед стартом', icon: 'GraduationCap' },
          { text: 'Ротацию персонала для долгосрочных проектов без простоев', icon: 'RefreshCw' },
          { text: 'Сбор обратной связи и подробную отчётность по итогам', icon: 'FileCheck' },
        ]}
      />

      <SubServiceGrid
        title="Направления работы"
        subtitle="Выберите интересующее направление, чтобы узнать подробнее"
        items={SUB_SERVICES}
      />

      <ServiceApproachBlocks
        blocks={[
          {
            eyebrow: 'Наш подход',
            title: 'Механика мероприятия под вашу аудиторию',
            text: 'Перед запуском мы прорабатываем формат акции, сценарий и локации с учётом целевой аудитории и бюджета — чтобы мероприятие действительно вовлекало покупателей и повышало продажи.',
            image: 'https://cdn.poehali.dev/projects/f54777b0-87fc-4f92-93d7-a263150798ce/files/be33d181-cca9-4817-9fea-e8fb1886d18b.jpg',
            alt: 'Планирование BTL-мероприятия и промоакции',
          },
          {
            eyebrow: 'Контроль качества',
            title: 'Промоперсонал обучен и проверен перед стартом',
            text: 'Каждый промоутер проходит инструктаж и репетицию перед мероприятием, а супервайзер контролирует качество работы на месте — вы получаете стабильный результат на каждой точке.',
            image: 'https://cdn.poehali.dev/projects/f54777b0-87fc-4f92-93d7-a263150798ce/files/0b7e56c6-333c-4a16-bee3-8a4cdc5b2404.jpg',
            alt: 'Обучение промоперсонала перед мероприятием',
          },
        ]}
      />

      <ServiceCases category="BTL услуги + Организация дегустаций" />

      <SiteCTA />
      <SiteFooter />
    </div>
  );
}