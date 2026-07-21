import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import SiteCTA from '@/components/SiteCTA';
import { FadeIn } from './shared';
import { CaseLightbox } from '@/pages/cases/shared';
import MerchCoverage from './MerchCoverage';

const LENTA_IMAGE = 'https://cdn.poehali.dev/projects/f54777b0-87fc-4f92-93d7-a263150798ce/bucket/4a2a00d0-61e2-429e-882c-d3f0e44291f3.jpg';

const WORK_ITEMS = [
  { text: 'Выкладка продукции согласно планограмме', icon: 'LayoutGrid' },
  { text: 'Контроль наличия товара на полке', icon: 'PackageCheck' },
  { text: 'Работа с OOS (отсутствием товара)', icon: 'AlertTriangle' },
  { text: 'Проверка ценников', icon: 'Tag' },
  { text: 'Ротация продукции', icon: 'RefreshCw' },
  { text: 'Размещение POSM', icon: 'Megaphone' },
  { text: 'Работа с дополнительными местами продаж', icon: 'LayoutDashboard' },
  { text: 'Фотофиксация результатов', icon: 'Camera' },
  { text: 'Контроль промоактивностей', icon: 'Percent' },
];

const FEATURES_ITEMS = [
  { title: 'Контроль остатков', desc: 'Регулярно отслеживаем остатки товара на полке, чтобы не допустить простоев в продажах.' },
  { title: 'Реакция на OOS', desc: 'Оперативно реагируем на отсутствие товара и восполняем полку в кратчайшие сроки.' },
  { title: 'Корректная выкладка', desc: 'Поддерживаем выкладку согласно планограмме на каждой точке присутствия.' },
  { title: 'Актуальные материалы', desc: 'Своевременно обновляем ценники и рекламные материалы в торговом зале.' },
  { title: 'Фотоотчётность', desc: 'Обеспечиваем фотоотчётность по каждому визиту мерчендайзера.' },
];

const ONLINE_ITEMS = [
  { text: 'Фотографии сразу после визита', icon: 'Camera' },
  { text: 'Контроль времени посещения', icon: 'Clock' },
  { text: 'Информацию по остаткам', icon: 'PackageCheck' },
  { text: 'Комментарии мерчендайзера', icon: 'MessageSquare' },
  { text: 'Аналитику по торговым точкам', icon: 'BarChart3' },
];

const GALLERY = [
  'https://cdn.poehali.dev/projects/f54777b0-87fc-4f92-93d7-a263150798ce/files/d4b008e4-d5fe-4964-b0bb-24383acb35ca.jpg',
  'https://cdn.poehali.dev/projects/f54777b0-87fc-4f92-93d7-a263150798ce/files/38afcf42-ba2b-4832-8613-d2827433508f.jpg',
  'https://cdn.poehali.dev/projects/f54777b0-87fc-4f92-93d7-a263150798ce/files/9684ea90-80bd-47bd-ac09-b0de4a2f3091.jpg',
  'https://cdn.poehali.dev/projects/f54777b0-87fc-4f92-93d7-a263150798ce/files/ca21f882-5073-49b0-acd8-80a848d1e9d6.jpg',
  'https://cdn.poehali.dev/projects/f54777b0-87fc-4f92-93d7-a263150798ce/files/79c41586-f7f2-488b-95d3-5d0e5217ba7d.jpg',
  'https://cdn.poehali.dev/projects/f54777b0-87fc-4f92-93d7-a263150798ce/files/8b6c9089-c8ff-4a0b-87fb-a030609b1f6b.jpg',
];

export default function LentaPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [citiesExpanded, setCitiesExpanded] = useState(false);
  const [networksExpanded, setNetworksExpanded] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-900">
      <SiteHeader />

      <div className="border-b border-neutral-100 bg-white">
        <div className="container flex flex-wrap items-center gap-2 py-3 text-sm text-neutral-500">
          <Link to="/" className="hover:text-brand-green transition-colors">Главная</Link>
          <Icon name="ChevronRight" size={14} className="text-neutral-300" />
          <Link to="/merchandising" className="hover:text-brand-green transition-colors">Мерчандайзинг</Link>
          <Icon name="ChevronRight" size={14} className="text-neutral-300" />
          <span className="hover:text-brand-green transition-colors cursor-pointer">По сетям</span>
          <Icon name="ChevronRight" size={14} className="text-neutral-300" />
          <span className="font-medium text-neutral-800">Лента</span>
        </div>
      </div>

      {/* Заголовок + фото */}
      <section className="bg-neutral-50 py-16 md:py-24">
        <div className="container">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_460px]">
            <FadeIn>
              <h1 className="font-heading text-3xl font-black text-neutral-900 sm:text-5xl leading-tight">Мерчендайзинг в сети Лента</h1>
              <p className="mt-4 max-w-2xl text-lg text-neutral-500 leading-relaxed sm:text-xl">
                Профессиональный мерчендайзинг в магазинах Лента по всей России
              </p>
            </FadeIn>
            <FadeIn delay={150}>
              <img
                src={LENTA_IMAGE}
                alt="Магазин сети Лента"
                className="w-full rounded-3xl object-cover shadow-2xl"
                style={{ maxHeight: 360 }}
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Основной текст */}
      <section className="py-20 md:py-28">
        <div className="container max-w-3xl">
          <FadeIn>
            <div className="rounded-3xl bg-brand-green p-6 text-white md:p-10">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/20">
                  <Icon name="Store" size={20} className="text-white" />
                </div>
                <h2 className="font-heading text-2xl font-bold">О сотрудничестве</h2>
              </div>
              <p className="mt-4 text-lg leading-relaxed md:text-xl">
                MerchGroup оказывает услуги визитного и стационарного мерчендайзинга в сети Лента. Мы обеспечиваем контроль представленности продукции, соблюдение планограмм, наличие товара на полке и оперативную отчётность по каждой торговой точке.
              </p>
              <p className="mt-4 text-lg leading-relaxed md:text-xl">
                Наши команды работают как в гипермаркетах, так и в супермаркетах сети, обеспечивая единые стандарты обслуживания во всех регионах присутствия.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Что входит в работу */}
      <section className="py-20 md:py-28">
        <div className="container">
          <FadeIn>
            <h2 className="font-heading text-3xl font-bold md:text-4xl">Что входит в работу мерчендайзера в Ленте</h2>
          </FadeIn>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {WORK_ITEMS.map((item, i) => (
              <FadeIn key={item.text} delay={i * 60}>
                <div className="flex h-full items-center gap-4 rounded-3xl bg-neutral-50 p-6 shadow-sm">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-green/10">
                    <Icon name={item.icon} size={22} className="text-brand-green" />
                  </div>
                  <p className="text-neutral-700 leading-snug">{item.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Особенности работы */}
      <section className="bg-neutral-50 py-20 md:py-28">
        <div className="container max-w-4xl">
          <FadeIn>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-blue/10">
                <Icon name="ShieldCheck" size={20} className="text-brand-blue" />
              </div>
              <h2 className="font-heading text-2xl font-bold md:text-3xl">Особенности работы в сети Лента</h2>
            </div>
            <p className="mt-5 text-base leading-relaxed text-neutral-600 md:text-lg">
              Сеть Лента предъявляет высокие требования к качеству представленности продукции и соблюдению внутренних стандартов. Для эффективной работы важно:
            </p>
          </FadeIn>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES_ITEMS.map((item, i) => (
              <FadeIn key={item.title} delay={i * 70}>
                <div className="h-full rounded-2xl border border-neutral-100 bg-white p-6 shadow-sm">
                  <span className="font-heading text-3xl font-black text-neutral-100">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="mt-2 font-heading text-base font-bold text-neutral-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-500">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={FEATURES_ITEMS.length * 70}>
            <p className="mt-8 border-l-2 border-brand-green/30 pl-6 text-base italic leading-relaxed text-neutral-500 md:text-lg">
              Наши сотрудники проходят обучение и работают по единым стандартам обслуживания.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Онлайн-контроль */}
      <section className="bg-neutral-950 py-20 md:py-28">
        <div className="container">
          <FadeIn>
            <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">Онлайн-контроль каждой торговой точки</h2>
            <p className="mt-4 max-w-2xl text-lg text-white/70 leading-relaxed">
              Все данные передаются через собственное мобильное приложение MerchGroup.
            </p>
          </FadeIn>
          <FadeIn delay={80}>
            <p className="mt-8 text-sm font-semibold uppercase tracking-widest text-white/40">Клиент получает:</p>
          </FadeIn>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {ONLINE_ITEMS.map((item, i) => (
              <FadeIn key={item.text} delay={i * 60}>
                <div className="flex h-full items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-6">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-green/20">
                    <Icon name={item.icon} size={22} className="text-brand-green" />
                  </div>
                  <p className="text-white/85 leading-snug">{item.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Фото нашей работы */}
      <section className="py-20 md:py-28">
        <div className="container">
          <FadeIn>
            <h2 className="font-heading text-3xl font-bold md:text-4xl">Фото нашей работы</h2>
            <p className="mt-3 text-neutral-500">Результаты работы наших мерчендайзеров в сети Лента</p>
          </FadeIn>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {GALLERY.map((src, i) => (
              <FadeIn key={src} delay={i * 60}>
                <button
                  onClick={() => { setLightboxIndex(i); setLightboxOpen(true); }}
                  className="group block aspect-square w-full overflow-hidden rounded-2xl"
                >
                  <img src={src} alt={`Работа мерчендайзера в Ленте — фото ${i + 1}`} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </button>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CaseLightbox
        photos={GALLERY}
        title="Мерчендайзинг в сети Лента"
        initialIndex={lightboxIndex}
        open={lightboxOpen}
        onOpenChange={setLightboxOpen}
      />

      {/* Дублирование блоков по городам и сетям */}
      <MerchCoverage
        citiesExpanded={citiesExpanded}
        setCitiesExpanded={setCitiesExpanded}
        networksExpanded={networksExpanded}
        setNetworksExpanded={setNetworksExpanded}
      />

      <SiteCTA />
      <SiteFooter />
    </div>
  );
}