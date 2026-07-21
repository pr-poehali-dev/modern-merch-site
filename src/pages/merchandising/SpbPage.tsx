import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import SiteCTA from '@/components/SiteCTA';
import { useContactPopup } from '@/context/ContactPopupContext';
import { FadeIn } from './shared';
import MerchCoverage from './MerchCoverage';

const REGION_CITIES = [
  'Мурино', 'Кудрово', 'Гатчина', 'Выборг', 'Всеволожск', 'Сертолово',
  'Кириши', 'Тихвин', 'Волхов', 'Сосновый Бор', 'Кингисепп', 'Луга',
  'Тосно', 'Приозерск', 'Сланцы',
];

const NETWORK_PHOTOS = [
  { name: 'Лента', image: 'https://cdn.poehali.dev/projects/f54777b0-87fc-4f92-93d7-a263150798ce/files/911494e6-a65f-430e-99ba-28ab81208801.jpg' },
  { name: 'Ашан', image: 'https://cdn.poehali.dev/projects/f54777b0-87fc-4f92-93d7-a263150798ce/files/a9fe969a-f3b9-4997-a8df-4aa3d25fc744.jpg' },
  { name: 'Перекрёсток', image: 'https://cdn.poehali.dev/projects/f54777b0-87fc-4f92-93d7-a263150798ce/files/d4b008e4-d5fe-4964-b0bb-24383acb35ca.jpg' },
  { name: 'Пятёрочка', image: 'https://cdn.poehali.dev/projects/f54777b0-87fc-4f92-93d7-a263150798ce/files/38afcf42-ba2b-4832-8613-d2827433508f.jpg' },
  { name: 'Магнит', image: 'https://cdn.poehali.dev/projects/f54777b0-87fc-4f92-93d7-a263150798ce/files/9684ea90-80bd-47bd-ac09-b0de4a2f3091.jpg' },
  { name: "О'КЕЙ", image: 'https://cdn.poehali.dev/projects/f54777b0-87fc-4f92-93d7-a263150798ce/files/7a9742d1-3fb9-4b05-b9dd-4ac9de954958.jpg' },
  { name: 'Детский Мир', image: 'https://cdn.poehali.dev/projects/f54777b0-87fc-4f92-93d7-a263150798ce/files/a85bab88-83d3-4c0b-a1bf-7af6bd9cb40b.jpg' },
  { name: 'М.Видео', image: 'https://cdn.poehali.dev/projects/f54777b0-87fc-4f92-93d7-a263150798ce/files/de27b91c-5683-4d88-a029-51d58acefcd6.jpg' },
  { name: 'DNS', image: 'https://cdn.poehali.dev/projects/f54777b0-87fc-4f92-93d7-a263150798ce/files/ca21f882-5073-49b0-acd8-80a848d1e9d6.jpg' },
  { name: 'Fix Price', image: 'https://cdn.poehali.dev/projects/f54777b0-87fc-4f92-93d7-a263150798ce/files/79c41586-f7f2-488b-95d3-5d0e5217ba7d.jpg' },
  { name: 'Metro', image: 'https://cdn.poehali.dev/projects/f54777b0-87fc-4f92-93d7-a263150798ce/files/a6edfe77-3405-4dd9-87e9-a4aba40d2897.jpg' },
  { name: 'и другие сети', image: 'https://cdn.poehali.dev/projects/f54777b0-87fc-4f92-93d7-a263150798ce/files/8b6c9089-c8ff-4a0b-87fb-a030609b1f6b.jpg' },
];

const WHY_ITEMS = [
  { text: 'Фотоотчёты в режиме реального времени', icon: 'Camera' },
  { text: 'Контроль каждой торговой точки', icon: 'MapPinCheck' },
  { text: 'Персональный менеджер проекта', icon: 'UserCheck' },
  { text: 'Быстрый запуск команды', icon: 'Zap' },
  { text: 'Федеральное покрытие', icon: 'Globe' },
];

export default function SpbPage() {
  const { open: openContactPopup } = useContactPopup();
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
          <span className="hover:text-brand-green transition-colors cursor-pointer">По городам</span>
          <Icon name="ChevronRight" size={14} className="text-neutral-300" />
          <span className="font-medium text-neutral-800">Санкт-Петербург</span>
        </div>
      </div>

      {/* Заголовок */}
      <section className="bg-neutral-50 py-16 md:py-24">
        <div className="container max-w-4xl">
          <FadeIn>
            <h1 className="font-heading text-3xl font-black text-neutral-900 sm:text-5xl leading-tight">Мерчендайзинг в Санкт-Петербурге</h1>
            <p className="mt-4 text-lg text-neutral-500 leading-relaxed sm:text-xl">
              MerchGroup оказывает услуги визитного и стационарного мерчендайзинга в Санкт-Петербурге и на всей территории Ленинградской области.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Основной текст */}
      <section className="py-20 md:py-28">
        <div className="container">
          <FadeIn>
            <div className="mx-auto max-w-4xl rounded-3xl bg-brand-green p-6 text-white md:p-10">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/20">
                  <Icon name="Store" size={20} className="text-white" />
                </div>
                <h2 className="font-heading text-2xl font-bold">О работе в регионе</h2>
              </div>
              <p className="mt-4 text-lg leading-relaxed md:text-xl">
                Мы организуем работу мерчендайзеров в федеральных, региональных и локальных торговых сетях, обеспечивая стабильное присутствие продукции на полке, контроль выкладки, фотоотчётность и соблюдение стандартов бренда.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* География работы */}
      <section className="py-20 md:py-28">
        <div className="container max-w-4xl">
          <FadeIn>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-blue/10">
                <Icon name="MapPin" size={20} className="text-brand-blue" />
              </div>
              <h2 className="font-heading text-2xl font-bold md:text-3xl">География работы</h2>
            </div>
            <p className="mt-5 text-base leading-relaxed text-neutral-600 md:text-lg">
              Мы обслуживаем торговые точки не только в Санкт-Петербурге, но и во всех крупных городах Ленинградской области:
            </p>
          </FadeIn>
          <div className="mt-8 flex flex-wrap gap-3">
            {REGION_CITIES.map((city, i) => (
              <FadeIn key={city} delay={i * 40}>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm font-medium text-neutral-700">
                  <Icon name="MapPin" size={13} className="text-brand-green" />
                  {city}
                </span>
              </FadeIn>
            ))}
            <FadeIn delay={REGION_CITIES.length * 40}>
              <span className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm font-medium text-neutral-500">
                и других населённых пунктах
              </span>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Федеральные сети */}
      <section className="bg-neutral-50 py-20 md:py-28">
        <div className="container">
          <FadeIn>
            <h2 className="font-heading text-3xl font-bold md:text-4xl">Работаем практически со всеми федеральными сетями</h2>
            <p className="mt-3 text-neutral-500">Наши команды работают в:</p>
          </FadeIn>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {NETWORK_PHOTOS.map((net, i) => (
              <FadeIn key={net.name} delay={i * 60}>
                <div className="overflow-hidden rounded-3xl bg-white shadow-sm">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={net.image} alt={net.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-neutral-800">{net.name}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Масштаб присутствия */}
      <section className="bg-neutral-50 py-20 md:py-28">
        <div className="container">
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:gap-8">
            <FadeIn className="flex flex-col justify-center">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-neutral-400">О масштабе</span>
              <div className="mt-2 h-0.5 w-10 bg-brand-green" />
              <h2 className="mt-4 font-heading text-4xl font-black leading-tight md:text-5xl">Масштаб присутствия</h2>
              <p className="mt-4 text-lg text-neutral-500">
                На территории Санкт-Петербурга и Ленинградской области расположено более 2 700 торговых точек крупнейших федеральных сетей, с которыми работает наша команда.
              </p>
            </FadeIn>

            <FadeIn delay={100} className="relative overflow-hidden rounded-3xl bg-white p-8 shadow-sm">
              <span className="absolute right-6 top-4 font-heading text-6xl font-black text-neutral-100 select-none">01</span>
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-green/10">
                <Icon name="Store" size={32} className="text-brand-green" />
              </div>
              <p className="relative text-neutral-700 leading-relaxed">
                <span className="font-bold text-black">Более 2 700 торговых точек</span> крупнейших федеральных сетей в регионе.
              </p>
            </FadeIn>
          </div>

          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <FadeIn delay={120} className="relative overflow-hidden rounded-3xl bg-brand-blue p-8 text-white shadow-sm transition-shadow hover:shadow-lg">
              <span className="absolute right-6 top-4 font-heading text-6xl font-black text-white/20 select-none">02</span>
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20">
                <Icon name="Users" size={32} className="text-white" />
              </div>
              <p className="relative leading-relaxed text-white/90">
                <span className="font-bold text-white">От 1 500 до 5 800 сотрудников</span> — мерчендайзеров, супервайзеров и мобильных сотрудников в зависимости от сезонной нагрузки.
              </p>
            </FadeIn>
            <FadeIn delay={240} className="relative overflow-hidden rounded-3xl bg-white p-8 shadow-sm transition-shadow hover:shadow-lg">
              <span className="absolute right-6 top-4 font-heading text-6xl font-black text-neutral-100 select-none">03</span>
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-orange/10">
                <Icon name="Gauge" size={32} className="text-brand-orange" />
              </div>
              <p className="relative leading-relaxed text-neutral-700">
                <span className="font-bold text-black">Гибкое масштабирование штата</span> под задачи и сезонность конкретного клиента.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Почему выбирают */}
      <section className="bg-neutral-950 py-20 md:py-28">
        <div className="container">
          <FadeIn>
            <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">Почему выбирают MerchGroup</h2>
          </FadeIn>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_ITEMS.map((item, i) => (
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

      {/* Призыв к действию */}
      <section className="py-20 md:py-28">
        <div className="container max-w-3xl text-center">
          <FadeIn>
            <h2 className="font-heading text-3xl font-bold md:text-4xl">Нужен мерчендайзинг в Санкт-Петербурге?</h2>
            <p className="mt-4 text-lg leading-relaxed text-neutral-600">
              Подготовим коммерческое предложение в течение одного рабочего дня и предложим оптимальную модель обслуживания именно для вашего проекта.
            </p>
            <Button onClick={openContactPopup} className="mt-8 rounded-full bg-brand-green px-8 py-3 text-sm font-bold text-white hover:bg-brand-green/90 md:px-10 md:py-4 md:text-base">
              Связаться с нами
            </Button>
          </FadeIn>
        </div>
      </section>

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