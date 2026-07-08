import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import SiteCTA from '@/components/SiteCTA';
import { ServiceBreadcrumb, ServiceHero, ServiceFeatures, SubServiceGrid, ServiceApproachBlocks } from '@/pages/services/shared';

const SUB_SERVICES = [
  { name: 'Проверка инкогнито', slug: '/mystery-shopper/proverka', icon: 'UserSearch' },
];

export default function MysteryShopper() {
  return (
    <div className="min-h-screen bg-white font-sans text-neutral-900">
      <SiteHeader />
      <ServiceBreadcrumb label="Тайный покупатель" />

      <ServiceHero
        badge="Услуга"
        title="Тайный покупатель"
        description="Независимая проверка качества обслуживания и соблюдения стандартов через визиты инкогнито-аудиторов."
        image="https://cdn.poehali.dev/projects/f54777b0-87fc-4f92-93d7-a263150798ce/files/516fd59e-f792-4d57-82c1-2cee31f7a345.jpg"
        bgClass="bg-brand-yellow"
        buttonTextClass="text-brand-yellow"
      />

      <ServiceFeatures
        title="Что вы получите"
        subtitle="Объективная картина клиентского сервиса из первых рук"
        items={[
          { text: 'Независимую оценку качества обслуживания в каждой точке', icon: 'UserSearch' },
          { text: 'Проверку соблюдения корпоративных стандартов сотрудниками', icon: 'ClipboardCheck' },
          { text: 'Детальные отчёты с фотофиксацией и оценкой по чек-листу', icon: 'FileCheck' },
          { text: 'Выявление слабых мест в обслуживании до потери клиентов', icon: 'AlertTriangle' },
          { text: 'Регулярный мониторинг для отслеживания динамики сервиса', icon: 'TrendingUp' },
          { text: 'Обученных аудиторов, действующих полностью инкогнито', icon: 'ShieldCheck' },
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
            title: 'Сценарий проверки под задачи вашего бизнеса',
            text: 'Перед выездом мы составляем индивидуальный чек-лист и легенду визита с учётом специфики вашей точки продаж — чтобы оценка отражала реальные критерии, важные именно для вашего бизнеса.',
            image: 'https://cdn.poehali.dev/projects/f54777b0-87fc-4f92-93d7-a263150798ce/files/f066f58c-708f-452e-b7e3-a9e7c0138fd9.jpg',
            alt: 'Подготовка сценария проверки тайного покупателя',
          },
          {
            eyebrow: 'Контроль качества',
            title: 'Каждый отчёт проверяется перед передачей',
            text: 'Супервайзер проверяет каждый отчёт аудитора на объективность и полноту перед тем, как он попадёт к вам — вы получаете точную и достоверную картину сервиса в точке.',
            image: 'https://cdn.poehali.dev/projects/f54777b0-87fc-4f92-93d7-a263150798ce/files/260af146-b401-4955-bf51-dc7f9dec1c76.jpg',
            alt: 'Проверка отчёта тайного покупателя',
          },
        ]}
      />

      <SiteCTA />
      <SiteFooter />
    </div>
  );
}