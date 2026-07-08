import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import SiteCTA from '@/components/SiteCTA';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import { STATS, CountUp, MissionBlock, PhilosophyBlock, CoverageBlock, QualityBlock } from '@/pages/index/shared';

const TEAM_PHOTOS = [
  'https://cdn.poehali.dev/projects/f54777b0-87fc-4f92-93d7-a263150798ce/files/0ad80f3c-b8a7-4af0-96ee-3143ff317f0d.jpg',
  'https://cdn.poehali.dev/projects/f54777b0-87fc-4f92-93d7-a263150798ce/files/c022516b-0439-4df4-8314-42d0d84342af.jpg',
  'https://cdn.poehali.dev/projects/f54777b0-87fc-4f92-93d7-a263150798ce/files/5570b00f-a5d7-4e0f-b601-b6fc83216fde.jpg',
];

const ABOUT_BLOCKS = [
  {
    title: '25 лет экспертизы на рынке FMCG',
    text: 'Ace Target — агентство трейд-маркетинга, которое работает с крупными компаниями и корпорациями в сегменте FMCG. За более чем 25 лет работы (с 1999 года) мы сформировали глубокую экспертизу — успешно реализовали свыше 500 проектов в разных товарных категориях и научились эффективно решать задачи как в долгосрочной перспективе, так и в оперативном режиме.',
    icon: 'Award',
  },
  {
    title: 'Полный цикл продвижения товара',
    text: 'Мы берём на себя весь цикл задач по продвижению товаров в сетевой рознице: от разработки стратегии до её воплощения. В нашем арсенале — ценовые и товарные аудиты, грамотная выкладка продукции, оформление торговых пространств, монтаж временного оборудования и сложных POS-материалов. Наша цель — максимально усилить продажи ваших товаров.',
    icon: 'Layers',
  },
  {
    title: 'Прозрачность и контроль на каждом уровне',
    text: 'Благодаря нашим решениям клиенты всегда в курсе своей доли полки, могут оперативно провести инвентаризацию оборудования и отслеживать цены в ритейле — и на федеральном, и на локальном уровне. Многие из них уже занимают лидирующие позиции в своих нишах, а остальные уверенно к этому движутся.',
    icon: 'Eye',
  },
  {
    title: 'Ставка на нестандартные решения',
    text: 'Ace Target делает ставку на нестандартные, высококачественные решения: развиваем направления ритейл- и технического мерчандайзинга, разрабатываем программы торгового маркетинга для дистрибуторов, ритейла и B2B-партнёров, а также предлагаем комплексные инструменты в сфере шоппер-маркетинга.',
    icon: 'Sparkles',
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-white font-sans text-neutral-900">
      <SiteHeader />

      <div className="border-b border-neutral-100 bg-white">
        <div className="container flex items-center gap-2 py-3 text-sm text-neutral-500">
          <Link to="/" className="hover:text-brand-green transition-colors">Главная</Link>
          <Icon name="ChevronRight" size={14} className="text-neutral-300" />
          <span className="font-medium text-neutral-800">О компании</span>
        </div>
      </div>

      {/* 1. Заголовок и описание */}
      <section className="bg-neutral-50 py-20 md:py-28">
        <div className="container max-w-3xl text-center">
          <h1 className="font-heading text-3xl font-black leading-tight md:text-5xl">О компании MGroups: история, руководство, цели</h1>
          <p className="mt-6 text-lg leading-relaxed text-neutral-600 md:text-xl">
            Мы выстраиваем прочные партнёрские связи — объединяем ритейлеров, бренды и покупателей в единую эффективную цепочку. MGroups — признанный эксперт в сфере торгового маркетинга и мерчандайзинга: помогаем бизнесу усиливать присутствие в точках продаж и добиваться устойчивых результатов.
          </p>
        </div>
      </section>

      {/* 2. Цифры */}
      <section className="border-b border-neutral-100 bg-white py-12">
        <div className="container grid gap-6 md:grid-cols-3">
          {STATS.map((s) => (
            <div key={s.title} className="rounded-3xl border border-neutral-100 bg-neutral-50 p-8 transition-shadow hover:shadow-xl">
              <CountUp value={s.num} className={`font-heading text-5xl font-black ${s.color}`} />
              <div className="mt-3 font-heading text-lg font-bold">{s.title}</div>
              <p className="mt-2 text-sm text-neutral-500">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Текст блоками с подзаголовками */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2">
            {ABOUT_BLOCKS.map((b) => (
              <div key={b.title} className="rounded-3xl border border-neutral-100 bg-neutral-50 p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-green/10">
                  <Icon name={b.icon} size={24} className="text-brand-green" />
                </div>
                <h2 className="mt-5 font-heading text-xl font-bold text-neutral-900">{b.title}</h2>
                <p className="mt-3 text-base leading-relaxed text-neutral-600">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Фото команды на всю ширину, слайдер */}
      <section className="pb-20 md:pb-28">
        <div className="container">
          <Carousel opts={{ loop: true }}>
            <CarouselContent>
              {TEAM_PHOTOS.map((src, i) => (
                <CarouselItem key={i}>
                  <div className="overflow-hidden rounded-3xl">
                    <img src={src} alt={`Команда MGroups — фото ${i + 1}`} className="aspect-[21/9] w-full object-cover" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
      </section>

      {/* 5. Миссия и философия */}
      <section className="border-t border-neutral-100 py-20 md:py-28">
        <div className="container">
          <MissionBlock />
          <PhilosophyBlock />
        </div>
      </section>

      {/* 6. География покрытия */}
      <CoverageBlock />

      {/* 7. Контроль качества */}
      <QualityBlock />

      <SiteCTA />
      <SiteFooter />
    </div>
  );
}
