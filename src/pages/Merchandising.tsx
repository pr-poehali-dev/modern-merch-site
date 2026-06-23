import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import SiteCTA from '@/components/SiteCTA';


const CLIENTS = [
  'https://cdn.poehali.dev/projects/f54777b0-87fc-4f92-93d7-a263150798ce/bucket/fde397df-26e6-4375-a03e-4fd9bea6373c.png',
  'https://cdn.poehali.dev/projects/f54777b0-87fc-4f92-93d7-a263150798ce/bucket/4d102773-5a5b-4614-90de-98a1ab016516.png',
  'https://cdn.poehali.dev/projects/f54777b0-87fc-4f92-93d7-a263150798ce/bucket/07e9ed49-9508-45a7-ac11-f36b3adcfc4a.png',
  'https://cdn.poehali.dev/projects/f54777b0-87fc-4f92-93d7-a263150798ce/bucket/5fe1ec75-7fa0-489a-b1f3-54e75f96cc47.png',
  'https://cdn.poehali.dev/projects/f54777b0-87fc-4f92-93d7-a263150798ce/bucket/485b63a8-8581-461e-9cd8-7d336e85c9b6.png',
  'https://cdn.poehali.dev/projects/f54777b0-87fc-4f92-93d7-a263150798ce/bucket/fbb7ab4d-0777-4659-8e41-95745b9b2f24.png',
  'https://cdn.poehali.dev/projects/f54777b0-87fc-4f92-93d7-a263150798ce/bucket/cd19be0c-2a41-4c78-9dbd-7a9060fd59c2.png',
  'https://cdn.poehali.dev/projects/f54777b0-87fc-4f92-93d7-a263150798ce/bucket/9cbd9a86-a11c-41c3-955c-61bb4d5b5260.png',
  'https://cdn.poehali.dev/projects/f54777b0-87fc-4f92-93d7-a263150798ce/bucket/75ea1d53-eaf8-4a0b-a2a3-a2118e7258c1.png',
  'https://cdn.poehali.dev/projects/f54777b0-87fc-4f92-93d7-a263150798ce/bucket/47fd07cd-1d6b-4acc-aeab-2daff59280d6.png',
  'https://cdn.poehali.dev/projects/f54777b0-87fc-4f92-93d7-a263150798ce/bucket/f0128b87-9b4b-4dfd-888e-831e0903a2fd.png',
  'https://cdn.poehali.dev/projects/f54777b0-87fc-4f92-93d7-a263150798ce/bucket/bac397b9-28f2-4e0a-802a-f23f52800154.png',
  'https://cdn.poehali.dev/projects/f54777b0-87fc-4f92-93d7-a263150798ce/bucket/f26eef0c-133e-423e-b207-7b5176899430.png',
  'https://cdn.poehali.dev/projects/f54777b0-87fc-4f92-93d7-a263150798ce/bucket/c3253a59-7b6a-4714-af11-82bf9aec2559.png',
  'https://cdn.poehali.dev/projects/f54777b0-87fc-4f92-93d7-a263150798ce/bucket/22931d5e-00e5-498c-bf8b-ef05bb16c4ff.png',
];

const MERCH_TYPES = [
  {
    title: 'Стационарный',
    icon: 'Building2',
    desc: 'Ключевой способ навести порядок в местах продаж — привлечь профессиональную команду мерчандайзеров.',
    points: [
      'Увеличение объёма выкладки товара на полках',
      'Расширение доли полки для вашего бренда',
      'Устранение виртуальных остатков и продукции с истёкшим сроком годности',
      'Целенаправленная работа с ключевыми и перспективными торговыми точками',
    ],
    footer: 'Такой подход позволит добиться устойчивого роста продаж в долгосрочной перспективе.',
  },
  {
    title: 'Визитный',
    icon: 'Route',
    desc: 'Формат работы, при котором мерчандайзер регулярно посещает несколько торговых точек по заранее составленному маршруту.',
    points: [
      'Корректная выкладка товара в каждой точке',
      'Проверка актуальности ценников и POS-материалов',
      'Контроль наличия ассортимента',
      'Поддержание стандартов бренда в большом числе магазинов',
    ],
    footer: 'Позволяет поддерживать стандарты бренда в большом числе магазинов при оптимальных затратах.',
  },
  {
    title: 'Совмещённый',
    icon: 'Layers',
    desc: 'MerchGroups уже развернула полевую структуру совмещённого мерчандайзинга — она работает в тысячах торговых точек.',
    points: [
      'Оптимальное решение для категорий с типовыми задачами',
      'Экономия ресурсов без частых визитов',
      'Гибкие решения под сложные сценарии визитов',
      'Самый экономически выгодный способ поддерживать порядок на полках',
    ],
    footer: 'Для многих категорий это самый экономически выгодный способ поддерживать порядок на полках.',
  },
  {
    title: 'Выделенный',
    icon: 'UserCheck',
    desc: 'Формат обслуживания торговой точки, при котором закреплённый специалист находится в магазине на протяжении всего рабочего дня.',
    points: [
      'Выкладка товара согласно планограмме',
      'Контроль актуальности ценников и POS-материалов',
      'Ротация продукции по срокам годности',
      'Мониторинг остатков и своевременное пополнение полок',
      'Сбор данных о конкурентах и фотоотчётность',
    ],
    footer: 'Подходит для точек с высоким оборотом, скоропортящимися товарами или активным промо-продвижением.',
  },
];

const CITIES = [
  'Москва', 'Санкт-Петербург', 'Новосибирск', 'Екатеринбург', 'Нижний Новгород',
  'Казань', 'Самара', 'Челябинск', 'Ростов-на-Дону', 'Омск', 'Уфа', 'Красноярск',
  'Пермь', 'Волгоград', 'Воронеж', 'Саратов', 'Краснодар', 'Тольятти', 'Тюмень',
  'Ижевск', 'Барнаул', 'Ульяновск', 'Иркутск', 'Владивосток', 'Ярославль',
  'Хабаровск', 'Махачкала', 'Оренбург', 'Томск', 'Новокузнецк', 'Кемерово',
  'Астрахань', 'Набережные Челны', 'Рязань', 'Пенза', 'Липецк', 'Тула', 'Киров',
  'Чебоксары', 'Калининград', 'Курск', 'Улан-Удэ', 'Ставрополь', 'Магнитогорск',
  'Тверь', 'Иваново', 'Брянск', 'Сочи', 'Белгород', 'Сургут', 'Владимир',
];

const NETWORKS = [
  { name: 'Магнит', color: '#CC0000' },
  { name: 'X5 Group', color: '#E31E24' },
  { name: 'Mercury Retail Group', color: '#1A3A6B' },
  { name: 'Лента', color: '#FF6600' },
  { name: 'Fix Price', color: '#FF0000' },
  { name: 'Kari', color: '#E31E2F' },
  { name: 'Melon Fashion Group', color: '#222222' },
  { name: "O'Stin", color: '#2E3192' },
  { name: 'Familia', color: '#7B1FA2' },
  { name: 'Rendez-Vous', color: '#222222' },
  { name: 'Магнит Косметик', color: '#CC0000' },
  { name: 'Золотое яблоко', color: '#C8A84B' },
  { name: 'Лэтуаль', color: '#D4008C' },
  { name: 'Улыбка радуги', color: '#E91E8C' },
];

function FadeIn({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className={className} style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)', transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms` }}>
      {children}
    </div>
  );
}

function MerchTypeCard({ t, idx }: { t: typeof MERCH_TYPES[0]; idx: number }) {
  const [open, setOpen] = useState(false);
  const [trail, setTrail] = useState({ x: -999, y: -999, show: false });
  return (
    <FadeIn delay={idx * 100}>
      <div
        className="group relative overflow-hidden rounded-3xl bg-white border border-neutral-100 shadow-sm cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-brand-green/30"
        onMouseMove={(e) => { const r = e.currentTarget.getBoundingClientRect(); setTrail({ x: e.clientX - r.left, y: e.clientY - r.top, show: true }); }}
        onMouseLeave={() => setTrail(t => ({ ...t, show: false }))}
        onClick={() => setOpen(!open)}
      >
        <div
          className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full transition-opacity duration-300"
          style={{ left: trail.x, top: trail.y, width: 300, height: 300, background: 'radial-gradient(circle, rgba(0,175,80,0.07) 0%, transparent 70%)', opacity: trail.show ? 1 : 0 }}
        />
        <div className="relative p-8">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-green/10">
                <Icon name={t.icon} size={28} className="text-brand-green" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-neutral-900">{t.title}</h3>
            </div>
            <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-neutral-100 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}>
              <Icon name="ChevronDown" size={18} className="text-neutral-500" />
            </div>
          </div>
          <p className="mt-4 text-neutral-600 leading-relaxed">{t.desc}</p>
          <div className={`overflow-hidden transition-all duration-400 ${open ? 'max-h-[500px] mt-6 opacity-100' : 'max-h-0 opacity-0'}`}>
            <ul className="space-y-3 mb-4">
              {t.points.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-green" />
                  <span className="text-neutral-700">{p}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-neutral-500 italic border-l-2 border-brand-green/30 pl-4">{t.footer}</p>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

export default function Merchandising() {
  const [clientsExpanded, setClientsExpanded] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-900">

      <SiteHeader />

      {/* 1. Заголовок + вступление */}
      <section className="relative overflow-hidden bg-brand-green py-24">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 70% 50%, white 0%, transparent 60%)' }} />
        <div className="container relative">
          <FadeIn>
            <span className="inline-block rounded-full bg-white/20 px-4 py-1.5 text-sm font-semibold text-white mb-6">Услуга</span>
            <h1 className="font-heading text-5xl font-black text-white md:text-7xl leading-none">Мерчандайзинг</h1>
            <p className="mt-6 max-w-2xl text-xl text-white/85 leading-relaxed">
              Профессиональное размещение товаров, управление полочным пространством и выкладкой продукции в торговых точках.
            </p>
            <Button className="mt-10 rounded-full bg-white px-10 py-4 text-base font-bold text-brand-green hover:bg-white/90">
              Получить консультацию
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* 2. Преимущества */}
      <section className="py-20 md:py-28">
        <div className="container">
          <FadeIn>
            <h2 className="font-heading text-3xl font-bold md:text-4xl">Преимущества</h2>
            <p className="mt-3 text-lg text-neutral-500">Доверьте мерчандайзинг нашему агентству — и получите:</p>
          </FadeIn>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { text: 'Экономию бюджета и высвобождение кадровых ресурсов вашей компании', icon: 'PiggyBank' },
              { text: 'Стабильное наличие товара на полках без «провалов» ассортимента', icon: 'Package' },
              { text: 'Снижение объёмов возвратов благодаря продуманной ротации продукции', icon: 'TrendingDown' },
              { text: 'Отсутствие необходимости контролировать работу мерчандайзеров', icon: 'ShieldCheck' },
              { text: 'Надёжное и постоянное сопровождение от опытного специалиста', icon: 'Handshake' },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 80} className={i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''}>
                <div className="flex h-full gap-5 rounded-3xl bg-neutral-50 p-7 hover:bg-brand-green/5 transition-colors">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-green/10">
                    <Icon name={item.icon} size={24} className="text-brand-green" />
                  </div>
                  <p className="text-neutral-700 leading-relaxed">{item.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Наши мерчандайзеры обеспечат */}
      <section className="bg-neutral-950 py-20 md:py-28">
        <div className="container">
          <FadeIn>
            <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">Наши мерчандайзеры обеспечат:</h2>
          </FadeIn>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { text: 'Привлекательную и эффективную выкладку товара в магазинах', icon: 'LayoutGrid' },
              { text: 'Актуальные ценники и маркировки — без ошибок и неточностей', icon: 'Tag' },
              { text: 'Своевременное пополнение запасов, чтобы товар всегда был в наличии', icon: 'RefreshCw' },
              { text: 'Рост лояльности покупателей к вашему бренду', icon: 'Heart' },
              { text: 'Безупречный порядок и презентабельный вид продукции на полках', icon: 'Sparkles' },
              { text: 'Профессиональные консультации для покупателей, чтобы подчеркнуть сильные стороны вашего товара', icon: 'MessageSquare' },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 80}>
                <div className="flex gap-5 rounded-3xl border border-white/10 bg-white/5 p-7 hover:bg-white/10 transition-colors">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-green/20">
                    <Icon name={item.icon} size={24} className="text-brand-green" />
                  </div>
                  <p className="text-white/85 leading-relaxed">{item.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Виды мерчандайзинга */}
      <section className="py-20 md:py-28">
        <div className="container">
          <FadeIn>
            <h2 className="font-heading text-3xl font-bold md:text-4xl">Виды мерчандайзинга</h2>
            <p className="mt-3 text-neutral-500">Нажмите на карточку, чтобы узнать подробнее</p>
          </FadeIn>
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {MERCH_TYPES.map((t, idx) => (
              <MerchTypeCard key={t.title} t={t} idx={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Наши клиенты */}
      <section className="border-y border-neutral-100 bg-neutral-50 py-16">
        <div className="container">
          <FadeIn>
            <h2 className="text-center font-heading text-2xl font-bold">Наши клиенты</h2>
          </FadeIn>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {CLIENTS.map((src, i) => (
              <FadeIn key={i} delay={i * 40} className={`${i >= 6 && !clientsExpanded ? 'hidden sm:block' : ''}`}>
                <div className="flex h-24 items-center justify-center rounded-2xl bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
                  <img src={src} alt={`Клиент ${i + 1}`} className="max-h-full max-w-full object-contain" />
                </div>
              </FadeIn>
            ))}
          </div>
          <div className="mt-6 flex justify-center sm:hidden">
            <button
              onClick={() => setClientsExpanded(!clientsExpanded)}
              className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-6 py-2.5 text-sm font-semibold text-neutral-700 shadow-sm transition-all hover:border-brand-green hover:text-brand-green"
            >
              {clientsExpanded ? 'Свернуть' : 'Показать все'}
              <Icon name={clientsExpanded ? 'ChevronUp' : 'ChevronDown'} size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* 6. Примеры работ */}
      <section className="py-20 md:py-28">
        <div className="container">
          <FadeIn>
            <h2 className="font-heading text-3xl font-bold md:text-4xl">Примеры работ</h2>
            <p className="mt-3 text-neutral-500">До и после — результаты нашей работы</p>
          </FadeIn>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="overflow-hidden rounded-3xl border border-neutral-100 bg-neutral-50">
                  <div className="grid grid-cols-2 divide-x divide-neutral-200">
                    <div className="relative">
                      <div className="absolute left-2 top-2 z-10 rounded-full bg-black/60 px-2 py-0.5 text-[10px] font-bold text-white uppercase tracking-wide">До</div>
                      <div className="h-44 bg-neutral-200 flex items-center justify-center">
                        <Icon name="ImageOff" size={32} className="text-neutral-400" />
                      </div>
                    </div>
                    <div className="relative">
                      <div className="absolute right-2 top-2 z-10 rounded-full bg-brand-green/90 px-2 py-0.5 text-[10px] font-bold text-white uppercase tracking-wide">После</div>
                      <div className="h-44 bg-neutral-200 flex items-center justify-center">
                        <Icon name="ImageOff" size={32} className="text-neutral-400" />
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="font-semibold text-neutral-800">Объект {i}</p>
                    <p className="mt-1 text-sm text-neutral-500">Розничная торговля · Выкладка товара</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Мерчандайзинг по городам */}
      <section className="bg-neutral-50 py-20 md:py-28">
        <div className="container">
          <FadeIn>
            <h2 className="font-heading text-3xl font-bold md:text-4xl">Мерчандайзинг по городам</h2>
            <p className="mt-3 text-neutral-500">Работаем во всех крупных городах России</p>
          </FadeIn>
          <div className="mt-12 flex flex-wrap gap-3">
            {CITIES.map((city, i) => (
              <FadeIn key={city} delay={Math.floor(i / 6) * 60}>
                <a
                  href={`/merchandising/${city.toLowerCase().replace(/\s+/g, '-').replace(/ё/g, 'e')}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-700 transition-all hover:border-brand-green hover:bg-brand-green/5 hover:text-brand-green shadow-sm"
                >
                  <Icon name="MapPin" size={13} className="text-brand-green" />
                  {city}
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Мерчандайзинг по сетям */}
      <section className="py-20 md:py-28">
        <div className="container">
          <FadeIn>
            <h2 className="font-heading text-3xl font-bold md:text-4xl">Мерчандайзинг по сетям</h2>
            <p className="mt-3 text-neutral-500">Сотрудничаем со всеми крупными торговыми сетями России</p>
          </FadeIn>
          <div className="mt-12 grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {NETWORKS.map((net, i) => (
              <FadeIn key={net.name} delay={i * 50}>
                <a
                  href={`/merchandising/network/${net.name.toLowerCase().replace(/\s+/g, '-').replace(/'/g, '')}`}
                  className="group flex h-24 flex-col items-center justify-center gap-2 rounded-2xl border border-neutral-100 bg-white p-4 shadow-sm transition-all hover:shadow-md hover:border-neutral-200"
                >
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-xl text-white text-lg font-black"
                    style={{ backgroundColor: net.color }}
                  >
                    {net.name.charAt(0)}
                  </div>
                  <span className="text-center text-xs font-semibold text-neutral-700 group-hover:text-brand-green transition-colors leading-tight">{net.name}</span>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <SiteCTA />

      <SiteFooter />

    </div>
  );
}