import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import SiteCTA from '@/components/SiteCTA';
import { ServiceBreadcrumb, ServiceHero, ServiceFeatures, SubServiceGrid, ServiceApproachBlocks, ServiceCases } from '@/pages/services/shared';

const SUB_SERVICES = [
  { name: 'Логистика', slug: '/tech-merchandising/logistika', icon: 'Truck' },
  { name: 'Утилизация', slug: '/tech-merchandising/utilizaciya', icon: 'Recycle' },
  { name: 'Изготовление', slug: '/tech-merchandising/izgotovlenie', icon: 'Factory' },
  { name: 'Замеры', slug: '/tech-merchandising/zamery', icon: 'Ruler' },
];

export default function TechMerchandising() {
  return (
    <div className="min-h-screen bg-white font-sans text-neutral-900">
      <SiteHeader />
      <ServiceBreadcrumb label="Технический мерчандайзинг" />

      <ServiceHero
        badge="Услуга"
        title="Технический мерчандайзинг"
        description="Установка и обслуживание торгового оборудования, размещение POS-материалов и брендирование зон продаж под ключ."
        image="https://cdn.poehali.dev/projects/f54777b0-87fc-4f92-93d7-a263150798ce/files/40338d5e-f790-471a-8f4e-cc509c504881.jpg"
        bgClass="bg-brand-blue"
        buttonTextClass="text-brand-blue"
      />

      <ServiceFeatures
        title="Что входит в услугу"
        subtitle="Полный цикл технических работ на точке продаж"
        items={[
          { text: 'Логистику и доставку торгового оборудования в любую точку сети', icon: 'Truck' },
          { text: 'Монтаж и обслуживание стеллажей, POS-конструкций и брендированных зон', icon: 'Hammer' },
          { text: 'Изготовление индивидуальных конструкций под формат вашего зала', icon: 'Factory' },
          { text: 'Утилизацию устаревшего оборудования с соблюдением экологичных норм', icon: 'Recycle' },
          { text: 'Точные замеры торговых пространств перед проектированием', icon: 'Ruler' },
          { text: 'Контроль качества установки с фотоотчётом на каждом объекте', icon: 'ShieldCheck' },
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
            title: 'Технические решения под формат вашей сети',
            text: 'Перед монтажом мы изучаем планировку торговых точек и особенности ассортимента — чтобы оборудование и POS-конструкции органично вписывались в пространство и работали на продажи.',
            image: 'https://cdn.poehali.dev/projects/f54777b0-87fc-4f92-93d7-a263150798ce/files/e43e3691-ff2f-42ac-8ee9-280c7092bd39.jpg',
            alt: 'Планирование технического оснащения торговой точки',
          },
          {
            eyebrow: 'Контроль качества',
            title: 'Каждая установка проверяется на месте',
            text: 'После монтажа наши специалисты проводят финальную проверку с фотоотчётом — вы получаете подтверждение, что оборудование установлено точно по проекту и готово к работе.',
            image: 'https://cdn.poehali.dev/projects/f54777b0-87fc-4f92-93d7-a263150798ce/files/20d04a8f-3679-47d0-a29a-bde46f7cf8c1.jpg',
            alt: 'Проверка качества установки торгового оборудования',
          },
        ]}
      />

      <ServiceCases category="Технический мерчандайзинг" />

      <SiteCTA />
      <SiteFooter />
    </div>
  );
}