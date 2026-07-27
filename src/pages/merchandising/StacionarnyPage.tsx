import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import SiteCTA from '@/components/SiteCTA';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import { FadeIn, useSlideIn, WORKFLOW_IMG_APPROACH, WORKFLOW_IMG_QUALITY } from './shared';
import { ServiceCases } from '@/pages/services/shared';

const SLIDER_PHOTOS = [
  'https://cdn.poehali.dev/projects/f54777b0-87fc-4f92-93d7-a263150798ce/files/d4b008e4-d5fe-4964-b0bb-24383acb35ca.jpg',
  'https://cdn.poehali.dev/projects/f54777b0-87fc-4f92-93d7-a263150798ce/files/38afcf42-ba2b-4832-8613-d2827433508f.jpg',
  'https://cdn.poehali.dev/projects/f54777b0-87fc-4f92-93d7-a263150798ce/files/9684ea90-80bd-47bd-ac09-b0de4a2f3091.jpg',
  'https://cdn.poehali.dev/projects/f54777b0-87fc-4f92-93d7-a263150798ce/files/79c41586-f7f2-488b-95d3-5d0e5217ba7d.jpg',
];

const WHO_FITS = [
  { title: 'Бренды с широким ассортиментом', text: 'Когда в матрице десятки или сотни SKU, важно, чтобы каждый товар был представлен корректно: с правильной ротацией, актуальными ценниками и POSM. Стационарный мерчендайзер успевает качественно проработать всю матрицу.', icon: 'LayoutGrid' },
  { title: 'Товары с высокой оборачиваемостью', text: 'Если продукция быстро раскупается, критически важно своевременно пополнять полку и избегать «пустых мест», которые снижают доверие покупателя и уменьшают продажи.', icon: 'TrendingUp' },
  { title: 'Проекты с жёсткими стандартами выкладки', text: 'Некоторые категории (например, FMCG, косметика, бытовая химия) требуют строгого соблюдения планограмм и визуальных стандартов — стационарный специалист лучше контролирует их исполнение.', icon: 'ClipboardCheck' },
  { title: 'Компании, запускающие промо-акции', text: 'В период акций мерчендайзер может оперативно менять выкладку, обновлять POSM, следить за корректностью цен и помогать магазину в реализации промо.', icon: 'Megaphone' },
  { title: 'Новые бренды и продукты', text: 'При выводе новинки на полку важно обеспечить максимальную видимость и правильную презентацию — стационарный мерчендайзер помогает быстро закрепиться в торговом пространстве.', icon: 'Rocket' },
];

const WHATS_INCLUDED = [
  { title: 'Ежедневная выкладка продукции', text: 'Мерчендайзер формирует и поддерживает выкладку строго по планограмме, учитывая особенности полки, освещение и покупательские потоки.', icon: 'LayoutGrid' },
  { title: 'Контроль наличия товара', text: 'Регулярная проверка остатков и оперативное выявление дефицитов позволяют избежать ситуаций, когда товар есть в системе, но отсутствует на полке.', icon: 'PackageCheck' },
  { title: 'Пополнение полки', text: 'Своевременное пополнение выкладки из подсобного помещения или склада магазина, чтобы полка всегда оставалась полной и привлекательной.', icon: 'PackagePlus' },
  { title: 'Контроль ценников и POSM', text: 'Проверка актуальности цен, корректности маркировки, наличия и правильного размещения рекламных материалов (ценников, шелфтокеров, воблеров, стоек и т. д.).', icon: 'Tag' },
  { title: 'Ротация товара', text: 'Соблюдение принципа FIFO (First In, First Out) для товаров с ограниченным сроком годности, а также перераспределение позиций в зависимости от спроса и акций.', icon: 'RefreshCw' },
  { title: 'Взаимодействие с администрацией магазина', text: 'Координация с товароведами, менеджерами и администраторами по вопросам размещения, пополнения, проведения акций и решения возникающих вопросов.', icon: 'Users' },
  { title: 'Фотоотчёты и онлайн-отчётность', text: 'Фиксация состояния выкладки на фото, заполнение отчётов в реальном времени, предоставление данных для аналитики и контроля исполнения стандартов.', icon: 'Camera' },
];

const APPROACH_POINTS = [
  { title: 'Персонализация под бренд и точку', text: 'Для каждой торговой точки и категории товаров мы адаптируем стандарты выкладки с учётом специфики магазина, трафика и целевой аудитории.' },
  { title: 'Чёткие KPI и стандарты', text: 'Все задачи мерчендайзера регламентированы: от времени начала работы до формата отчётов. Это позволяет гарантировать стабильное качество исполнения.' },
  { title: 'Оперативная коммуникация', text: 'Мы поддерживаем постоянную связь с клиентом и магазином, чтобы быстро реагировать на изменения: от внеплановых акций до срочного пополнения остатков.' },
  { title: 'Обучение и контроль персонала', text: 'Каждый мерчендайзер проходит обучение по стандартам бренда, планограммам и правилам взаимодействия с магазином. Мы регулярно проводим проверки и тренинги для поддержания высокого уровня компетенций.' },
  { title: 'Аналитика и обратная связь', text: 'На основе фотоотчётов и данных о выкладке мы формируем рекомендации по улучшению представленности товара и повышению эффективности мерчендайзинга.' },
];

const QUALITY_POINTS = [
  { title: 'Ежедневные фотоотчёты', text: 'Мерчендайзер фиксирует состояние выкладки в начале и конце смены, а также после проведения ключевых действий (пополнение, ротация, обновление POSM).' },
  { title: 'Онлайн-отчётность', text: 'Данные о выполненных задачах, остатках, выявленных дефицитах и проблемах вносятся в систему в режиме реального времени.' },
  { title: 'Выборочные проверки', text: 'Супервайзеры и аудиторы проводят внеплановые проверки торговых точек для оценки соответствия стандартам.' },
  { title: 'Обратная связь от магазинов', text: 'Мы регулярно собираем отзывы администрации и персонала магазина о работе мерчендайзера и оперативно корректируем процессы при необходимости.' },
  { title: 'Анализ динамики', text: 'На основании отчётов мы отслеживаем динамику представленности товара, частоту дефицитов и эффективность мерчендайзинговых мероприятий, чтобы своевременно вносить улучшения в работу.' },
];

function PointCard({ title, text, icon }: { title: string; text: string; icon: string }) {
  return (
    <div className="flex h-full gap-5 rounded-3xl bg-neutral-50 p-7 transition-colors hover:bg-brand-green/5">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-green/10">
        <Icon name={icon} size={24} className="text-brand-green" />
      </div>
      <div>
        <h3 className="font-heading text-base font-bold text-neutral-900">{title}</h3>
        <p className="mt-1.5 leading-relaxed text-neutral-600">{text}</p>
      </div>
    </div>
  );
}

function ApproachQualityBlock({ eyebrow, title, points, image, alt, imageOnLeft }: {
  eyebrow: string;
  title: string;
  points: { title: string; text: string }[];
  image: string;
  alt: string;
  imageOnLeft: boolean;
}) {
  const imgSide = useSlideIn(imageOnLeft ? 'left' : 'right');
  const textSide = useSlideIn(imageOnLeft ? 'right' : 'left');

  const imageBlock = (
    <div ref={imgSide.ref} style={imgSide.style} className={`overflow-hidden rounded-3xl ${imageOnLeft ? '' : 'md:order-2'}`}>
      <img src={image} alt={alt} className="aspect-[4/3] w-full object-cover" />
    </div>
  );

  const textBlock = (
    <div ref={textSide.ref} style={textSide.style} className={imageOnLeft ? '' : 'md:order-1'}>
      <span className="text-xs font-bold uppercase tracking-[0.25em] text-neutral-400">{eyebrow}</span>
      <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">{title}</h2>
      <ul className="mt-6 space-y-4">
        {points.map((p) => (
          <li key={p.title} className="flex items-start gap-3">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />
            <p className="leading-relaxed text-neutral-600">
              <span className="font-semibold text-neutral-900">{p.title}.</span> {p.text}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="grid items-center gap-8 md:grid-cols-2 md:gap-14">
      {imageOnLeft ? (
        <>
          {imageBlock}
          {textBlock}
        </>
      ) : (
        <>
          {textBlock}
          {imageBlock}
        </>
      )}
    </div>
  );
}

export default function StacionarnyPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-neutral-900">
      <SiteHeader />

      {/* Хлебные крошки */}
      <div className="border-b border-neutral-100 bg-white">
        <div className="container flex items-center gap-2 py-3 text-sm text-neutral-500">
          <Link to="/" className="hover:text-brand-green transition-colors">Главная</Link>
          <Icon name="ChevronRight" size={14} className="text-neutral-300" />
          <Link to="/merchandising" className="hover:text-brand-green transition-colors">Мерчандайзинг</Link>
          <Icon name="ChevronRight" size={14} className="text-neutral-300" />
          <span className="font-medium text-neutral-800">Стационарный мерчендайзинг</span>
        </div>
      </div>

      {/* 1. Заголовок + краткое описание */}
      <section className="relative overflow-hidden bg-brand-green py-24">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 70% 50%, white 0%, transparent 60%)' }} />
        <div className="container relative">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_420px]">
            <FadeIn>
              <span className="inline-block rounded-full bg-white/20 px-4 py-1.5 text-sm font-semibold text-white mb-6">Услуга</span>
              <h1 className="font-heading text-3xl font-black text-white sm:text-5xl md:text-7xl leading-tight">Стационарный мерчендайзинг</h1>
              <p className="mt-4 max-w-2xl text-base text-white/85 leading-relaxed sm:mt-6 sm:text-xl">
                Эффективный инструмент для усиления присутствия вашего товара на полке и роста продаж.
              </p>
              <Button className="mt-10 rounded-full bg-white px-10 py-4 text-base font-bold text-brand-green hover:bg-white/90">
                Получить консультацию
              </Button>
            </FadeIn>
            <FadeIn delay={150} className="hidden lg:block">
              <img
                src={SLIDER_PHOTOS[0]}
                alt="Стационарный мерчендайзинг"
                className="w-full rounded-3xl object-cover shadow-2xl"
                style={{ maxHeight: 380 }}
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 2. Фото-слайдер слева, текст справа */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
            <FadeIn>
              <Carousel opts={{ loop: true }}>
                <CarouselContent>
                  {SLIDER_PHOTOS.map((src, i) => (
                    <CarouselItem key={i}>
                      <div className="overflow-hidden rounded-3xl">
                        <img src={src} alt={`Стационарный мерчендайзинг — фото ${i + 1}`} className="aspect-[4/3] w-full object-cover" />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-3" />
                <CarouselNext className="right-3" />
              </Carousel>
            </FadeIn>
            <FadeIn delay={150}>
              <p className="text-lg leading-relaxed text-neutral-600 md:text-xl">
                Стационарный мерчендайзинг позволяет не просто «поставить продукт» в магазине, а системно управлять его видимостью, доступностью и привлекательностью для покупателя. Такой формат особенно ценен в условиях высокой конкуренции, когда каждая деталь — от расположения товара до актуальности ценника — напрямую влияет на решение о покупке.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 3. Что такое стационарный мерчендайзинг */}
      <section className="bg-neutral-50 py-20 md:py-28">
        <div className="container max-w-4xl">
          <FadeIn>
            <h2 className="font-heading text-3xl font-bold md:text-4xl">Что такое стационарный мерчендайзинг</h2>
            <p className="mt-6 text-lg leading-relaxed text-neutral-600">
              Стационарный мерчендайзинг — это закрепление мерчендайзера за конкретной торговой точкой на полный рабочий день либо по заранее согласованному графику. В отличие от визитного формата, где специалист посещает несколько магазинов за смену, здесь он полностью сфокусирован на одной точке и может оперативно реагировать на любые изменения.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-neutral-600">
              Такой подход даёт возможность не только поддерживать выкладку в соответствии со стандартами бренда, но и гибко подстраиваться под специфику магазина: учитывать особенности трафика, сезонность спроса, акции и промо-мероприятия. Мерчендайзер становится «лицом» бренда в торговой точке — он следит за тем, чтобы покупатель видел товар в лучшем виде, а магазин соблюдал договорённости по представлению продукции.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 4. Кому подходит */}
      <section className="py-20 md:py-28">
        <div className="container">
          <FadeIn>
            <h2 className="font-heading text-3xl font-bold md:text-4xl">Кому подходит стационарный мерчендайзинг</h2>
            <p className="mt-3 text-lg text-neutral-500">Этот формат оптимален для следующих категорий проектов</p>
          </FadeIn>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {WHO_FITS.map((item, i) => (
              <FadeIn key={item.title} delay={i * 80} className={i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''}>
                <PointCard {...item} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Что входит в услугу */}
      <section className="bg-neutral-50 py-20 md:py-28">
        <div className="container">
          <FadeIn>
            <h2 className="font-heading text-3xl font-bold md:text-4xl">Что входит в услугу</h2>
            <p className="mt-3 text-lg text-neutral-500">Полный цикл работ по управлению представлением товара в торговой точке</p>
          </FadeIn>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {WHATS_INCLUDED.map((item, i) => (
              <FadeIn key={item.title} delay={i * 70}>
                <PointCard {...item} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Наш подход / Контроль качества */}
      <section className="py-20 md:py-28">
        <div className="container space-y-16 md:space-y-20">
          <ApproachQualityBlock
            eyebrow="Наш подход"
            title="Прозрачность, оперативность и внимание к деталям"
            points={APPROACH_POINTS}
            image={WORKFLOW_IMG_APPROACH}
            alt="Индивидуальный подход к каждому проекту"
            imageOnLeft
          />
          <ApproachQualityBlock
            eyebrow="Контроль качества"
            title="Многоуровневая система контроля исполнения"
            points={QUALITY_POINTS}
            image={WORKFLOW_IMG_QUALITY}
            alt="Контроль качества выкладки"
            imageOnLeft={false}
          />
        </div>
      </section>

      {/* 7. Завершающий блок */}
      <section className="pb-20 md:pb-28">
        <div className="container">
          <FadeIn>
            <div className="mx-auto max-w-4xl rounded-3xl border border-brand-green/20 bg-brand-green/5 p-6 text-center md:p-10">
              <p className="text-lg font-semibold leading-relaxed text-neutral-900 md:text-xl">
                Таким образом, стационарный мерчендайзинг — это не просто присутствие специалиста в магазине, а комплексная система управления представлением товара, которая помогает бренду стабильно расти и укреплять свои позиции на полке.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 8. Примеры работ */}
      <ServiceCases category="Мерчандайзинг" />

      <SiteCTA />
      <SiteFooter />
    </div>
  );
}