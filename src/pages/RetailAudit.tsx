import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import SiteCTA from '@/components/SiteCTA';
import { ServiceBreadcrumb, ServiceHero, ServiceFeatures, SubServiceGrid } from '@/pages/services/shared';

const SUB_SERVICES = [
  { name: 'Независимый аудит', slug: '/retail-audit/audit', icon: 'ClipboardCheck' },
];

export default function RetailAudit() {
  return (
    <div className="min-h-screen bg-white font-sans text-neutral-900">
      <SiteHeader />
      <ServiceBreadcrumb label="Аудит торговых сетей" />

      <ServiceHero
        badge="Услуга"
        title="Аудит торговых сетей"
        description="Независимая оценка представленности товара, контроль цен и соблюдения планограмм с фотоотчётами."
        image="https://cdn.poehali.dev/projects/f54777b0-87fc-4f92-93d7-a263150798ce/files/cebefa7a-12c1-499f-b4cf-737ab7ec62fb.jpg"
        bgClass="bg-brand-orange"
        buttonTextClass="text-brand-orange"
      />

      <ServiceFeatures
        title="Что входит в аудит"
        subtitle="Полная прозрачность представленности вашего товара в рознице"
        items={[
          { text: 'Проверку наличия и представленности товара на полке', icon: 'PackageSearch' },
          { text: 'Контроль соответствия цен на ценниках и на кассе', icon: 'Tag' },
          { text: 'Оценку соблюдения планограмм и стандартов выкладки', icon: 'LayoutGrid' },
          { text: 'Мониторинг активности конкурентов в тех же точках', icon: 'Eye' },
          { text: 'Подробные отчёты с фотофиксацией по каждой точке', icon: 'FileCheck' },
          { text: 'Аналитику по регионам, сетям и отдельным магазинам', icon: 'BarChart3' },
        ]}
      />

      <SubServiceGrid
        title="Направления работы"
        subtitle="Выберите интересующее направление, чтобы узнать подробнее"
        items={SUB_SERVICES}
      />

      <SiteCTA />
      <SiteFooter />
    </div>
  );
}
