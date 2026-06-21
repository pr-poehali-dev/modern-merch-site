import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const LOGO = 'https://cdn.poehali.dev/files/6a547e27-4b11-4695-94f5-7c447eebdf12.png';
const LOGO2 = 'https://cdn.poehali.dev/projects/f54777b0-87fc-4f92-93d7-a263150798ce/bucket/179b9058-9478-4d68-bf69-5c2480211128.png';
const HERO_BG = 'https://cdn.poehali.dev/projects/f54777b0-87fc-4f92-93d7-a263150798ce/files/ea928111-988d-4323-ab90-baece32d7118.jpg';
const MISSION_IMG = 'https://cdn.poehali.dev/projects/f54777b0-87fc-4f92-93d7-a263150798ce/files/d2809aca-e2f0-4e42-993f-19153ade8fd1.jpg';

const NAV = ['Главная', 'О компании', 'Услуги', 'Наши кейсы', 'Блог', 'Контакты'];

const PHONES = [
  { num: '+7 931 342 23 37', name: 'Лилия', role: 'Руководитель проектов', tel: '+79313422337' },
  { num: '+7 926 473 53 70', name: 'Николоз', role: 'Менеджер по развитию', tel: '+79264735370' },
];

const STATS = [
  { num: '87', title: 'регионов покрытия', desc: 'В каждом городе у нас есть мерчендайзер под Ваш проект', color: 'text-brand-green' },
  { num: '2 244', title: 'полевого персонала', desc: 'И с каждым проектом наша команда растет', color: 'text-brand-blue' },
  { num: '100%', title: 'вовлеченность в Ваш проект', desc: 'Мы работаем на результат, заботясь о вашем товаре и имидже в каждой торговой точке.', color: 'text-brand-orange' },
];

const CLIENTS = ['Магнит', 'Пятёрочка', 'Лента', 'Ашан', 'Перекрёсток', 'METRO', 'Дикси', 'ВкусВилл'];

const SERVICES = [
  { title: 'Мерчандайзинг', icon: 'Store', color: '#00af50' },
  { title: 'Технический мерчандайзинг', icon: 'Wrench', color: '#00afef' },
  { title: 'Торговый аудит', icon: 'ClipboardCheck', color: '#ffff00', dark: true },
  { title: 'BTL мероприятия', icon: 'PartyPopper', color: '#ffc000', dark: true },
];

const TABS = [
  {
    name: 'Мерчандайзинг',
    sub: [
      { name: 'Совмещенный', points: [
        'Мерчандайзер совмещает работу по Вашей продукции с другими проектами.',
        'Мы согласовываем с Вами тайминг в торговой точке.',
        'Возможен, как один визит в месяц (выход под поставку), так и ежедневное обслуживание.',
        'Вы платите только за визиты, отчет по которым видите и принимаете в онлайн системе',
      ]},
      { name: 'Эксклюзивный', points: [
        'Выделенный мерчандайзер работает только по Вашему проекту.',
        'Полный контроль выкладки и присутствия товара на полке.',
        'Ежедневная отчётность в онлайн-системе.',
      ]},
      { name: 'Визитный', points: [
        'Разовые или периодические визиты по согласованному графику.',
        'Идеально для запуска новинок и сезонных акций.',
        'Гибкая тарификация за каждый визит.',
      ]},
    ],
  },
  {
    name: 'Технический мерчандайзинг',
    sub: [{ name: 'Монтаж оборудования', points: [
      'Установка и обслуживание торгового оборудования.',
      'Размещение POS-материалов и брендирование зон.',
      'Контроль состояния оборудования в торговых точках.',
    ]}],
  },
  {
    name: 'Торговый аудит',
    sub: [{ name: 'Независимый аудит', points: [
      'Оценка представленности товара и доли полки.',
      'Контроль цен и соблюдения планограмм.',
      'Прозрачные фотоотчёты и аналитика в онлайн-системе.',
    ]}],
  },
  {
    name: 'BTL мероприятия',
    sub: [{ name: 'Промоакции', points: [
      'Организация дегустаций и промоакций под ключ.',
      'Подбор и обучение промо-персонала.',
      'Праздничные мероприятия и событийный маркетинг.',
    ]}],
  },
];

const MAP_BG = 'https://cdn.poehali.dev/projects/f54777b0-87fc-4f92-93d7-a263150798ce/bucket/35483c6f-8495-4325-8a3d-1459c76183a9.jpg';
const MARKER = 'https://cdn.poehali.dev/projects/f54777b0-87fc-4f92-93d7-a263150798ce/bucket/07a93ba5-f34c-40b0-9057-eb7c9b1235c1.png';
const APP_MOBILE = 'https://cdn.poehali.dev/projects/f54777b0-87fc-4f92-93d7-a263150798ce/bucket/694acc0f-6a0a-4895-92f6-3133b98de332.png';
const APP_DESKTOP = 'https://cdn.poehali.dev/projects/f54777b0-87fc-4f92-93d7-a263150798ce/bucket/0873700f-551a-467c-ad56-8c748c568754.png';

const MAP_POINTS = [
  { top: '40%', left: '11%' }, { top: '52%', left: '19%' }, { top: '50%', left: '27%' },
  { top: '58%', left: '35%' }, { top: '57%', left: '70%' }, { top: '72%', left: '18%' }, { top: '82%', left: '17%' },
];

const SOFTWARE = [
  { title: 'Мобильное приложение', desc: 'Для автоматизации работы мерчендайзера по сбору информации о наличии продукции и товаров конкурентов, контролю выкладки (планограмм), мониторингу цен, проведению промо-акций и опросов.', img: APP_MOBILE, mobile: true },
  { title: 'Desktop приложение', desc: 'Все проекты в одной системе! По всем вашим проектам, будь то мерчендайзеры, тайные покупатели, аудиты, промо или продавцы-консультанты, вся информация собирается и обрабатывается в едином облачном пространстве онлайн отчетности.', img: APP_DESKTOP, mobile: false },
];

const QUALITY = [
  ['100% отчетов мерчандайзеров', ' проходят строгую оценку на качество выполнения работ.'],
  ['Мы сами отклоним отчет', ', если качество работы нашего сотрудника не соответствует требованиям.'],
  ['Вы видите только те отчеты', ', которые соответствуют заданным параметрам контракта.'],
  ['Благодаря возможностям программы Optimum', ' вы можете участвовать в процессе работы полевых сотрудников, вносить коррективы и получать максимально качественный результат.'],
];

const ADVANTAGES = [
  'Мы составляем для вас эффективную адресную программу',
  'Мы умеем преподнести товар потребителю так, чтобы он его не просто заметил, но и приобрел',
  'Мы оперативно подстраиваемся под ваши желания — подключение новых торговых точек происходит в течение 1-2 недель',
  'Мы имеем широкое покрытие городов России и сотрудничаем со всеми крупными сетями',
];

export default function Index() {
  const [tab, setTab] = useState(0);
  const [subTab, setSubTab] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-black">
      {/* БЛОК 1 + 2: Шапка поверх hero */}
      <header className="relative">
        <div className="absolute inset-0 z-0">
          <img src={HERO_BG} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
        </div>

        {/* Строка 1: контакты */}
        <div className="relative z-10 border-b border-white/15">
          <div className="container flex items-center justify-between gap-4 py-4">
            <img src={LOGO2} alt="MerchGroups" className="h-16" />

            {/* Desktop: телефоны + email */}
            <div className="hidden flex-wrap items-center gap-8 lg:flex">
              {PHONES.map((p) => (
                <a key={p.tel} href={`tel:${p.tel}`} className="group flex items-center gap-3 text-white">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 transition-colors group-hover:bg-brand-green/30">
                    <Icon name="Phone" size={18} className="text-brand-green" />
                  </div>
                  <div className="leading-snug">
                    <div className="text-base font-bold tracking-wide transition-colors group-hover:text-brand-green">{p.num}</div>
                    <div className="text-[12px] font-bold text-white/80">{p.name}</div>
                    <div className="text-[11px] text-white/50">{p.role}</div>
                  </div>
                </a>
              ))}
              <a href="mailto:info@merch-groups.ru" className="flex items-center gap-2 text-sm text-white/70 hover:text-white">
                <Icon name="Mail" size={16} /> info@merch-groups.ru
              </a>
            </div>

            {/* Правая часть */}
            <div className="flex items-center gap-2">
              {/* Mobile: иконка телефона */}
              <a href={`tel:${PHONES[0].tel}`} className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-green lg:hidden">
                <Icon name="Phone" size={20} className="text-white" />
              </a>
              <Button className="hidden rounded-full bg-brand-green font-semibold text-white hover:bg-brand-green/90 sm:flex">
                Связаться с нами
              </Button>
              {/* Mobile: кнопка меню */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white lg:hidden"
              >
                <Icon name={mobileMenuOpen ? 'X' : 'Menu'} size={22} />
              </button>
            </div>
          </div>
        </div>

        {/* Строка 2: меню + поиск (desktop) */}
        <div className="relative z-10 hidden border-b border-white/10 lg:block">
          <div className="container flex items-center justify-between gap-4 py-3">
            <nav className="flex flex-wrap gap-x-7 gap-y-2">
              {NAV.map((n, i) => (
                <a key={n} href="#" className={`text-sm font-semibold uppercase tracking-wide transition-colors ${i === 0 ? 'text-brand-green' : 'text-white/90 hover:text-brand-blue'}`}>
                  {n}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur">
              <Icon name="Search" size={16} className="text-white/60" />
              <input placeholder="Поиск по сайту" className="w-36 bg-transparent text-sm text-white placeholder:text-white/50 focus:outline-none" />
            </div>
          </div>
        </div>

        {/* Mobile: выпадающее меню */}
        {mobileMenuOpen && (
          <div className="relative z-20 border-b border-white/10 bg-black/90 backdrop-blur lg:hidden">
            <nav className="container flex flex-col py-4">
              {NAV.map((n, i) => (
                <a
                  key={n}
                  href="#"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`border-b border-white/10 py-3 text-sm font-semibold uppercase tracking-wide transition-colors ${i === 0 ? 'text-brand-green' : 'text-white/80 hover:text-white'}`}
                >
                  {n}
                </a>
              ))}
              <div className="mt-4 flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
                <Icon name="Search" size={16} className="text-white/60" />
                <input placeholder="Поиск по сайту" className="w-full bg-transparent text-sm text-white placeholder:text-white/50 focus:outline-none" />
              </div>
              <a href="mailto:info@merch-groups.ru" className="mt-3 flex items-center gap-2 text-sm text-white/60">
                <Icon name="Mail" size={14} /> info@merch-groups.ru
              </a>
            </nav>
          </div>
        )}

        {/* Hero контент */}
        <div className="relative z-10">
          <div className="container py-28 md:py-40">
            <div className="max-w-2xl animate-fade-in">
              <div className="mb-4 inline-block rounded-full bg-brand-green/20 px-4 py-1 text-sm font-semibold text-brand-green ring-1 ring-brand-green/40">
                Агентство мерчандайзинга №1
              </div>
              <h1 className="font-heading text-4xl font-extrabold leading-tight text-white md:text-6xl">
                MerchGroups — агентство мерчандайзинга
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-white/80">
                Специализированное агентство, предоставляющее услуги по мерчандайзингу, проведению независимого аудита, техническому мерчандайзингу и организации промоакций и праздничных мероприятий.
              </p>
              <Button size="lg" className="mt-8 rounded-full bg-brand-green px-8 text-base font-bold text-white hover:bg-brand-green/90">
                Получить расчет стоимости
                <Icon name="ArrowRight" size={18} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* БЛОК 3: Миссия и философия */}
      <section className="py-20 md:py-28">
        <div className="container grid items-center gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl">
            <img src={MISSION_IMG} alt="Миссия MerchGroups" className="h-full w-full object-cover" />
          </div>
          <div className="space-y-10">
            <div>
              <div className="mb-2 h-1.5 w-12 rounded bg-brand-green" />
              <h2 className="font-heading text-3xl font-bold">Наша миссия</h2>
              <p className="mt-3 text-lg text-neutral-600">
                Оказывать качественные услуги в сфере рекламы и маркетинга, способствующие развитию клиентского бизнеса и укрепления его на рынке.
              </p>
            </div>
            <div>
              <div className="mb-2 h-1.5 w-12 rounded bg-brand-blue" />
              <h2 className="font-heading text-3xl font-bold">Наша философия</h2>
              <p className="mt-3 text-lg text-neutral-600">
                Мы уверены, что сила нашего успеха — это персонал. Именно поэтому в нашей компании работают самые внимательные, ответственные сотрудники, имеющие многолетний опыт работы в сфере рекламы.
              </p>
            </div>
          </div>
        </div>

        {/* Преимущества-цифры */}
        <div className="container mt-16 grid gap-6 md:grid-cols-3">
          {STATS.map((s) => (
            <div key={s.title} className="rounded-3xl border border-neutral-100 bg-neutral-50 p-8 transition-shadow hover:shadow-xl">
              <div className={`font-heading text-5xl font-black ${s.color}`}>{s.num}</div>
              <div className="mt-3 font-heading text-lg font-bold">{s.title}</div>
              <p className="mt-2 text-sm text-neutral-500">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* БЛОК 4: Клиенты */}
      <section className="border-y border-neutral-100 bg-neutral-50 py-16">
        <div className="container">
          <h2 className="text-center font-heading text-2xl font-bold">Наши клиенты</h2>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {CLIENTS.map((c) => (
              <div key={c} className="flex h-20 items-center justify-center rounded-2xl bg-white font-heading text-lg font-bold text-neutral-400 shadow-sm transition-colors hover:text-black">
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* БЛОК 5: Основные услуги */}
      <section className="py-20 md:py-28">
        <div className="container">
          <h2 className="text-center font-heading text-3xl font-bold md:text-4xl">Основные услуги</h2>
          <p className="mt-3 text-center text-neutral-500">Полный спектр услуг для роста ваших продаж</p>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className="group relative flex items-center gap-6 overflow-hidden rounded-3xl p-8 transition-transform hover:-translate-y-1"
                style={{ backgroundColor: s.color }}
              >
                <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl ${s.dark ? 'bg-black/10' : 'bg-white/20'}`}>
                  <Icon name={s.icon} size={32} className={s.dark ? 'text-black' : 'text-white'} />
                </div>
                <h3 className={`font-heading text-2xl font-bold ${s.dark ? 'text-black' : 'text-white'}`}>{s.title}</h3>
                <Icon name="ArrowUpRight" size={28} className={`ml-auto transition-transform group-hover:translate-x-1 ${s.dark ? 'text-black/60' : 'text-white/70'}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* БЛОК 6: Вкладки услуг */}
      <section className="bg-neutral-950 py-20 text-white md:py-28">
        <div className="container">
          <h2 className="font-heading text-3xl font-bold md:text-4xl">Подробно об услугах</h2>
          <div className="mt-10 flex flex-wrap gap-3">
            {TABS.map((t, i) => (
              <button
                key={t.name}
                onClick={() => { setTab(i); setSubTab(0); }}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${tab === i ? 'bg-brand-green text-white' : 'bg-white/10 text-white/70 hover:bg-white/20'}`}
              >
                {t.name}
              </button>
            ))}
          </div>

          {TABS[tab].sub.length > 1 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {TABS[tab].sub.map((st, i) => (
                <button
                  key={st.name}
                  onClick={() => setSubTab(i)}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${subTab === i ? 'bg-brand-blue text-white' : 'bg-white/5 text-white/60 hover:bg-white/10'}`}
                >
                  {st.name}
                </button>
              ))}
            </div>
          )}

          <div key={`${tab}-${subTab}`} className="mt-8 animate-fade-in rounded-3xl bg-white/5 p-8 ring-1 ring-white/10 md:p-10">
            <ul className="space-y-4">
              {TABS[tab].sub[subTab].points.map((p) => (
                <li key={p} className="flex gap-3">
                  <Icon name="Check" size={22} className="mt-0.5 shrink-0 text-brand-green" />
                  <span className="text-white/80">{p}</span>
                </li>
              ))}
            </ul>
            <Button className="mt-8 rounded-full bg-brand-green font-bold text-white hover:bg-brand-green/90">
              Получить расчет стоимости
            </Button>
          </div>
        </div>
      </section>

      {/* БЛОК 7: Преимущества */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="font-heading text-5xl font-black">MerchGroups</h2>
              <p className="mt-4 max-w-md text-lg text-neutral-600">
                Мы не просто красиво выкладываем товар на полки, мы делаем это из расчета особенностей вашей целевой аудитории.
              </p>
            </div>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-green via-brand-blue to-brand-orange p-12">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/20 blur-2xl" />
              <img src={LOGO2} alt="MerchGroups" className="relative mx-auto h-24" />
            </div>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {ADVANTAGES.map((a, i) => (
              <div key={a} className="flex gap-5 rounded-3xl border border-neutral-100 p-7 transition-shadow hover:shadow-lg">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-green/10 font-heading text-xl font-black text-brand-green">
                  {i + 1}
                </div>
                <p className="text-neutral-700">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* БЛОК 8: География покрытия */}
      <section className="bg-neutral-50 py-20 md:py-28">
        <div className="container">
          <h2 className="font-heading text-3xl font-bold md:text-5xl">География покрытия</h2>
          <p className="mt-3 max-w-xl text-neutral-500">
            Наши мерчендайзеры присутствуют в 87 регионах России — в каждом городе под Ваш проект.
          </p>
          <div className="relative mt-10 overflow-hidden rounded-3xl">
            <img src={MAP_BG} alt="Карта покрытия MerchGroups" className="w-full" />
            {MAP_POINTS.map((p, i) => (
              <img
                key={i}
                src={MARKER}
                alt=""
                className="absolute h-8 w-8 -translate-x-1/2 -translate-y-1/2 animate-scale-in drop-shadow-lg md:h-10 md:w-10"
                style={{ top: p.top, left: p.left, animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* БЛОК 9: Программное обеспечение */}
      <section className="py-20 md:py-28">
        <div className="container">
          <h2 className="text-center font-heading text-3xl font-bold md:text-4xl">Программное обеспечение</h2>
          <p className="mt-3 text-center text-neutral-500">Единая облачная система онлайн-отчётности Optimum</p>
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {SOFTWARE.map((s) => (
              <div key={s.title} className="flex flex-col overflow-hidden rounded-3xl border border-neutral-100 bg-neutral-50">
                <div className="p-8">
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue/10">
                    <Icon name={s.mobile ? 'Smartphone' : 'Monitor'} size={24} className="text-brand-blue" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold">{s.title}</h3>
                  <p className="mt-3 text-neutral-600">{s.desc}</p>
                </div>
                <div className={`mt-auto flex items-center justify-center bg-neutral-100 p-8 ${s.mobile ? 'py-10' : ''}`}>
                  <img
                    src={s.img}
                    alt={s.title}
                    className={`rounded-2xl object-contain shadow-lg ${s.mobile ? 'h-72' : 'w-full'}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* БЛОК 10: Контроль качества */}
      <section className="bg-neutral-50 py-20 md:py-28">
        <div className="container">
          <h2 className="text-center font-heading text-3xl font-bold md:text-5xl">Контроль качества</h2>
          <p className="mt-3 text-center text-neutral-500">Каждый отчёт проходит строгую проверку перед передачей Вам</p>
          <div className="mx-auto mt-14 grid max-w-4xl gap-x-12 gap-y-10 md:grid-cols-2">
            {QUALITY.map(([bold, rest]) => (
              <div key={bold} className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-green/10">
                  <Icon name="ShieldCheck" size={26} className="text-brand-green" />
                </div>
                <p className="text-neutral-600">
                  <span className="font-semibold text-black">{bold}</span>{rest}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Подвал */}
      <footer className="border-t border-white/10 bg-neutral-950 pt-14 pb-8 text-white">
        <div className="container">
          {/* Верхняя часть */}
          <div className="grid gap-10 md:grid-cols-3">
            {/* Лого + email */}
            <div>
              <img src={LOGO2} alt="MerchGroups" className="h-14" />
              <a href="mailto:info@merch-groups.ru" className="mt-4 flex items-center gap-2 text-sm text-white/50 hover:text-white">
                <Icon name="Mail" size={14} /> info@merch-groups.ru
              </a>
            </div>

            {/* Телефоны */}
            <div className="flex flex-col gap-5">
              {PHONES.map((p) => (
                <a key={p.tel} href={`tel:${p.tel}`} className="group flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 transition-colors group-hover:bg-brand-green/30">
                    <Icon name="Phone" size={16} className="text-brand-green" />
                  </div>
                  <div className="leading-snug">
                    <div className="text-base font-bold transition-colors group-hover:text-brand-green">{p.num}</div>
                    <div className="text-[12px] font-bold text-white/70">{p.name}</div>
                    <div className="text-[11px] text-white/40">{p.role}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Меню */}
            <nav className="flex flex-col gap-2">
              <div className="mb-2 text-xs font-bold uppercase tracking-widest text-white/30">Навигация</div>
              {NAV.map((n, i) => (
                <a key={n} href="#" className={`text-sm transition-colors hover:text-brand-green ${i === 0 ? 'text-brand-green' : 'text-white/60'}`}>
                  {n}
                </a>
              ))}
            </nav>
          </div>

          {/* Нижняя строка */}
          <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-white/30">
            © 2026 MerchGroups — агентство мерчандайзинга
          </div>
        </div>
      </footer>
    </div>
  );
}