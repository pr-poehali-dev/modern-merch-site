import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import SiteFooter from '@/components/SiteFooter';
import SiteCTA from '@/components/SiteCTA';

const LOGO = 'https://cdn.poehali.dev/projects/f54777b0-87fc-4f92-93d7-a263150798ce/bucket/fb1e7412-b52f-4b70-b954-1cc8e4db09f0.png';
const LOGO2 = 'https://cdn.poehali.dev/projects/f54777b0-87fc-4f92-93d7-a263150798ce/bucket/179b9058-9478-4d68-bf69-5c2480211128.png';
const HERO_BG = 'https://cdn.poehali.dev/projects/f54777b0-87fc-4f92-93d7-a263150798ce/files/28fac548-2488-4d76-8d83-7a1bd9f1c28f.jpg';
const MISSION_IMG = 'https://cdn.poehali.dev/projects/f54777b0-87fc-4f92-93d7-a263150798ce/files/d2809aca-e2f0-4e42-993f-19153ade8fd1.jpg';

const NAV = ['Главная', 'О компании', 'Услуги', 'Наши кейсы', 'Новости', 'Контакты'];

const PHONES = [
  { num: '+7 931 342 23 37', name: 'Лилия', role: 'Руководитель проектов', tel: '+79313422337' },
  { num: '+7 926 473 53 70', name: 'Николоз', role: 'Менеджер по развитию', tel: '+79264735370' },
];

const STATS = [
  { num: '87', title: 'регионов покрытия', desc: 'В каждом городе у нас есть мерчендайзер под Ваш проект', color: 'text-brand-green' },
  { num: '2 244', title: 'полевого персонала', desc: 'И с каждым проектом наша команда растет', color: 'text-brand-blue' },
  { num: '100%', title: 'вовлеченность в Ваш проект', desc: 'Мы работаем на результат, заботясь о вашем товаре и имидже в каждой торговой точке.', color: 'text-brand-orange' },
];

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

const SERVICES_ROW1 = [
  { title: 'Мерчандайзинг', icon: 'Store', color: '#00af50', desc: 'Профессиональное размещение товаров, управление полочным пространством и выкладкой продукции в торговых точках.', slug: '/merchandising' },
  { title: 'Технический мерчандайзинг', icon: 'Wrench', color: '#00afef', desc: 'Установка и обслуживание торгового оборудования, размещение POS-материалов и брендирование зон.', slug: '/tech-merchandising' },
];

const SERVICES_ROW2 = [
  { title: 'Тайный покупатель', icon: 'UserSearch', color: '#ffff00', dark: true, desc: 'Независимая проверка качества обслуживания и соблюдения стандартов через визиты инкогнито-аудиторов.', slug: '/mystery-shopper' },
  { title: 'Аудит торговых сетей', icon: 'ClipboardCheck', color: '#ffc000', dark: true, desc: 'Независимая оценка представленности товара, контроль цен и соблюдения планограмм с фотоотчётами.', slug: '/retail-audit' },
  { title: 'BTL услуги + Организация дегустаций', icon: 'Users', color: '#ff6b35', desc: 'Промоакции, дегустации и праздничные мероприятия с подбором и обучением персонала.', slug: '/btl' },
];

const TABS = [
  {
    name: 'Мерчандайзинг',
    sub: [
      { name: 'Стационарный', points: ['Постоянное присутствие мерчандайзера в торговой точке.', 'Ежедневный контроль выкладки и наличия товара.'] },
      { name: 'Визитный', points: ['Разовые или периодические визиты по согласованному графику.', 'Гибкая тарификация за каждый визит.'] },
      { name: 'Совмещенный', points: ['Мерчандайзер совмещает работу по Вашей продукции с другими проектами.', 'Вы платите только за принятые визиты в онлайн-системе.'] },
      { name: 'Выделенный', points: ['Выделенный мерчандайзер работает только по Вашему проекту.', 'Полный контроль выкладки и присутствия товара на полке.'] },
    ],
  },
  {
    name: 'Технический мерчандайзинг',
    sub: [
      { name: 'Логистика', points: ['Доставка торгового оборудования и POS-материалов в точки.', 'Контроль сроков и сохранности груза.'] },
      { name: 'Утилизация', points: ['Демонтаж и вывоз устаревшего оборудования.', 'Экологичная утилизация в соответствии с нормами.'] },
      { name: 'Изготовление', points: ['Производство фирменных стоек, дисплеев и POS-материалов.', 'Брендирование торгового пространства под ключ.'] },
      { name: 'Замеры', points: ['Выезд специалиста для замеров торгового пространства.', 'Подготовка технического задания для оборудования.'] },
    ],
  },
  {
    name: 'Тайный покупатель',
    sub: [{ name: 'Проверка инкогнито', points: ['Независимая оценка качества обслуживания.', 'Соблюдение стандартов и скриптов сотрудниками.', 'Детальный фотоотчёт по итогам визита.'] }],
  },
  {
    name: 'Аудит торговых сетей',
    sub: [{ name: 'Независимый аудит', points: ['Оценка представленности товара и доли полки.', 'Контроль цен и соблюдения планограмм.', 'Прозрачные фотоотчёты и аналитика в онлайн-системе.'] }],
  },
  {
    name: 'BTL услуги + Организация дегустаций',
    sub: [{ name: 'Промоакции', points: ['Организация дегустаций и промоакций под ключ.', 'Подбор и обучение промо-персонала.', 'Праздничные мероприятия и событийный маркетинг.'] }],
  },
];

const MAP_BG = 'https://cdn.poehali.dev/projects/f54777b0-87fc-4f92-93d7-a263150798ce/bucket/35483c6f-8495-4325-8a3d-1459c76183a9.jpg';
const MARKER = 'https://cdn.poehali.dev/projects/f54777b0-87fc-4f92-93d7-a263150798ce/bucket/07a93ba5-f34c-40b0-9057-eb7c9b1235c1.png';
const APP_MOBILE = 'https://cdn.poehali.dev/projects/f54777b0-87fc-4f92-93d7-a263150798ce/bucket/0a5f2ffe-b532-47d3-b2ef-a7d0f88e0f5d.png';
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

function MissionBlock() {
  const left = useSlideIn('left');
  const right = useSlideIn('right');
  return (
    <div className="border-b border-neutral-100 pb-16 md:flex md:items-start md:gap-20">
      <div ref={left.ref} style={left.style} className="shrink-0">
        <span className="font-heading text-[11px] font-bold uppercase tracking-[0.25em] text-neutral-400">01</span>
        <h2 className="mt-2 font-heading text-5xl font-black leading-none md:text-7xl">Наша<br/>миссия</h2>
      </div>
      <div ref={right.ref} style={right.style} className="mt-8 md:mt-3 md:pt-1">
        <div className="h-0.5 w-16 bg-brand-green mb-8" />
        <p className="text-xl leading-relaxed text-neutral-600 md:text-2xl">
          Оказывать качественные услуги в сфере рекламы и маркетинга, способствующие развитию клиентского бизнеса и укрепления его на рынке.
        </p>
      </div>
    </div>
  );
}

function PhilosophyBlock() {
  const right = useSlideIn('right');
  const left = useSlideIn('left');
  return (
    <div className="pt-16 md:flex md:items-start md:gap-20 md:flex-row-reverse">
      <div ref={right.ref} style={right.style} className="shrink-0 md:text-right">
        <span className="font-heading text-[11px] font-bold uppercase tracking-[0.25em] text-neutral-400">02</span>
        <h2 className="mt-2 font-heading text-5xl font-black leading-none md:text-7xl">Наша<br/>философия</h2>
      </div>
      <div ref={left.ref} style={left.style} className="mt-8 md:mt-3 md:pt-1 md:flex-1">
        <div className="h-0.5 w-16 bg-brand-blue mb-8" />
        <p className="text-xl leading-relaxed text-neutral-600 md:text-2xl">
          Мы уверены, что сила нашего успеха — это персонал. Именно поэтому в нашей компании работают самые внимательные, ответственные сотрудники, имеющие многолетний опыт работы в сфере рекламы.
        </p>
      </div>
    </div>
  );
}

function SlideIn({ children, direction = 'left', delay = 0, className = '', style: extStyle = {} }: {
  children: React.ReactNode;
  direction?: 'left' | 'right';
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...extStyle,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateX(0)' : `translateX(${direction === 'left' ? '-50px' : '50px'})`,
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function useSlideIn(direction: 'left' | 'right' = 'left') {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  const style: React.CSSProperties = {
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateX(0)' : `translateX(${direction === 'left' ? '-60px' : '60px'})`,
    transition: 'opacity 0.7s ease, transform 0.7s ease',
  };
  return { ref, style };
}

function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      const raw = value.replace(/\s/g, '').replace('%', '').replace('+', '');
      const target = parseInt(raw, 10);
      if (isNaN(target)) { setDisplay(value); return; }
      const suffix = value.includes('%') ? '%' : value.includes('+') ? '+' : '';
      const duration = 1400;
      const start = performance.now();
      const step = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(eased * target);
        setDisplay(current.toLocaleString('ru-RU') + suffix);
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, { threshold: 0.4 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return <div ref={ref} className={className}>{display}</div>;
}

function ServiceCard({ s, idx }: { s: { title: string; icon: string; color: string; dark?: boolean; desc: string; slug: string }; idx: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [trail, setTrail] = useState({ x: -999, y: -999, show: false });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setTrail({ x: e.clientX - rect.left, y: e.clientY - rect.top, show: true });
  };

  return (
    <div ref={ref}>
    <Link
      to={s.slug}
      className="group relative overflow-hidden rounded-3xl p-10 md:p-14 cursor-pointer transition-all duration-700 block"
      style={{
        backgroundColor: s.color,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(40px)',
        transitionDelay: `${idx * 100}ms`,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTrail(t => ({ ...t, show: false }))}
    >
      <div
        className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full transition-opacity duration-300"
        style={{
          left: trail.x,
          top: trail.y,
          width: 280,
          height: 280,
          background: s.dark ? 'radial-gradient(circle, rgba(0,0,0,0.12) 0%, transparent 70%)' : 'radial-gradient(circle, rgba(255,255,255,0.18) 0%, transparent 70%)',
          opacity: trail.show ? 1 : 0,
        }}
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
      <div className={`relative font-heading text-8xl font-black leading-none select-none mb-6 ${s.dark ? 'text-black/15' : 'text-white/20'}`}>
        {String(idx + 1).padStart(2, '0')}
      </div>
      <div className={`relative mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${s.dark ? 'bg-black/10' : 'bg-white/20'}`}>
        <Icon name={s.icon} size={32} className={s.dark ? 'text-black' : 'text-white'} />
      </div>
      <h3 className={`relative font-heading text-3xl font-bold mb-4 ${s.dark ? 'text-black' : 'text-white'}`}>{s.title}</h3>
      <p className={`relative text-base leading-relaxed transition-all duration-300 opacity-100 md:opacity-0 md:translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-y-0 ${s.dark ? 'text-black/80' : 'text-white/90'}`}>
        {s.desc}
      </p>
      <div className={`relative mt-6 flex items-center gap-2 text-sm font-bold uppercase tracking-widest transition-all duration-300 delay-75 opacity-100 md:opacity-0 md:translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-y-0 ${s.dark ? 'text-black' : 'text-white'}`}>
        Подробнее
        <Icon name="ArrowRight" size={16} />
      </div>
    </Link>
    </div>
  );
}

export default function Index() {
  const [tab, setTab] = useState(0);
  const [subTab, setSubTab] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [phonePopupOpen, setPhonePopupOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [clientsExpanded, setClientsExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans text-black">

      {/* Плавающая мобильная шапка (z-30 — ниже попапов меню/телефона z-40) */}
      <div className={`fixed top-0 left-0 right-0 z-30 lg:hidden transition-all duration-300 ${scrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
        <div className="backdrop-blur-md border-b border-black/5 bg-white/70 py-2 transition-all duration-300">
          <div className="container flex items-center justify-between gap-3">
            <img src={LOGO} alt="MerchGroups" className="h-8 transition-all duration-300" />
            <div className="flex items-center gap-2">
              <button
                onClick={() => setPhonePopupOpen(true)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-green"
              >
                <Icon name="Phone" size={17} className="text-white" />
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-black/10 text-neutral-800"
              >
                <Icon name={mobileMenuOpen ? 'X' : 'Menu'} size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Попап телефонов */}
      <div className={`fixed inset-0 z-50 lg:hidden flex items-end transition-all duration-300 ${phonePopupOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={() => setPhonePopupOpen(false)} />
        <div className={`relative w-full bg-white rounded-t-3xl p-6 pb-10 shadow-2xl transition-transform duration-300 ${phonePopupOpen ? 'translate-y-0' : 'translate-y-full'}`}>
          <div className="flex items-center justify-between mb-6">
            <span className="font-heading text-lg font-bold text-neutral-900">Контакты</span>
            <button onClick={() => setPhonePopupOpen(false)} className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-100 text-neutral-600">
              <Icon name="X" size={18} />
            </button>
          </div>
          <div className="flex flex-col gap-5">
            {PHONES.map((p) => (
              <a key={p.tel} href={`tel:${p.tel}`} className="group flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-green/10">
                  <Icon name="Phone" size={20} className="text-brand-green" />
                </div>
                <div className="leading-snug">
                  <div className="text-base font-bold text-neutral-900 group-hover:text-brand-green transition-colors">{p.num}</div>
                  <div className="text-[13px] font-semibold text-neutral-500">{p.name}</div>
                  <div className="text-[11px] text-neutral-400">{p.role}</div>
                </div>
              </a>
            ))}
          </div>
          <a href="mailto:info@merch-groups.ru" className="mt-4 flex items-center gap-3 text-neutral-500 hover:text-neutral-800">
            <Icon name="Mail" size={16} className="text-brand-blue" />
            <span className="text-sm">info@merch-groups.ru</span>
          </a>
          <Button className="mt-6 w-full rounded-full bg-brand-green font-bold text-white hover:bg-brand-green/90">
            Связаться с нами
          </Button>
        </div>
      </div>

      {/* БЛОК 1 + 2: Шапка поверх hero */}
      <header className="bg-white">

        {/* Строка 1: контакты */}
        <div className="border-b border-neutral-100">
          <div className="container flex items-center justify-between gap-4 py-4">
            <img src={LOGO} alt="MerchGroups" className="h-20" />

            {/* Правая часть: контакты + кнопка */}
            <div className="hidden items-center gap-10 lg:flex">
              {PHONES.map((p) => (
                <a key={p.tel} href={`tel:${p.tel}`} className="group flex items-center gap-3 text-neutral-800">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-green/10 transition-colors group-hover:bg-brand-green/20">
                    <Icon name="Phone" size={18} className="text-brand-green" />
                  </div>
                  <div className="leading-snug">
                    <div className="text-base font-bold tracking-wide transition-colors group-hover:text-brand-green">{p.num}</div>
                    <div className="text-[12px] font-bold text-neutral-500">{p.name}</div>
                    <div className="text-[11px] text-neutral-400">{p.role}</div>
                  </div>
                </a>
              ))}
              <a href="mailto:info@merch-groups.ru" className="flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-800">
                <Icon name="Mail" size={16} /> info@merch-groups.ru
              </a>
              <Button className="rounded-full bg-brand-green font-semibold text-white hover:bg-brand-green/90">
                Связаться с нами
              </Button>
            </div>

            {/* Mobile */}
            <div className="flex items-center gap-2 lg:hidden">
              <button onClick={() => setPhonePopupOpen(true)} className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-green lg:hidden">
                <Icon name="Phone" size={20} className="text-white" />
              </button>
              <Button className="hidden rounded-full bg-brand-green font-semibold text-white hover:bg-brand-green/90 sm:flex">
                Связаться с нами
              </Button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 text-neutral-700 lg:hidden"
              >
                <Icon name={mobileMenuOpen ? 'X' : 'Menu'} size={22} />
              </button>
            </div>
          </div>
        </div>

        {/* Строка 2: меню + поиск (desktop) */}
        <div className="hidden border-b border-neutral-100 lg:block">
          <div className="container flex items-center justify-between gap-4 py-3">
            <nav className="flex flex-wrap gap-x-14 gap-y-2">
              {NAV.map((n, i) => {
                if (n === 'Услуги') {
                  return (
                    <div key={n} className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
                      <a href="/services" className="flex items-center gap-1 text-sm font-semibold uppercase tracking-wide text-neutral-600 hover:text-brand-blue transition-colors">
                        {n}
                        <Icon name="ChevronDown" size={14} className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                      </a>
                      {/* Дропдаун */}
                      <div className={`absolute left-0 top-full z-50 pt-2 transition-all duration-200 ${servicesOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                        <div className="w-[680px] rounded-2xl border border-neutral-100 bg-white shadow-xl p-4 grid grid-cols-2 gap-3">
                          {TABS.map((service) => {
                            const allSvcs = [...SERVICES_ROW1, ...SERVICES_ROW2];
                            const svc = allSvcs.find((s) => s.title === service.name);
                            return (
                              <div key={service.name} className="group relative rounded-xl bg-neutral-50 p-4 hover:bg-neutral-100 transition-colors overflow-hidden">
                                {/* Иконка в углу */}
                                <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-xl opacity-20 group-hover:opacity-40 transition-opacity" style={{ backgroundColor: svc?.color }}>
                                  <Icon name={svc?.icon ?? 'Star'} size={18} className="text-white" style={{ color: svc?.dark ? '#000' : '#fff' }} />
                                </div>
                                <a href="#" className="block text-sm font-bold text-neutral-900 hover:text-brand-green mb-2 pr-10 transition-colors">{service.name}</a>
                                <ul className="space-y-1">
                                  {service.sub.map((sub) => (
                                    <li key={sub.name}>
                                      <a href="#" className="flex items-center gap-2 text-sm text-neutral-500 hover:text-brand-green transition-colors">
                                        <span className="h-1 w-1 rounded-full bg-brand-green shrink-0" />
                                        {sub.name}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                }
                return (
                  <a key={n} href="#" className={`text-sm font-semibold uppercase tracking-wide transition-colors ${i === 0 ? 'text-brand-green' : 'text-neutral-600 hover:text-brand-blue'}`}>
                    {n}
                  </a>
                );
              })}
            </nav>
            <div className="flex items-center gap-2 rounded-full bg-neutral-100 px-4 py-2">
              <Icon name="Search" size={16} className="text-neutral-400" />
              <input placeholder="Поиск по сайту" className="w-56 bg-transparent text-sm text-neutral-700 placeholder:text-neutral-400 focus:outline-none" />
            </div>
          </div>
        </div>

        {/* Mobile: попап-меню */}
        <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          <div className={`absolute right-0 top-0 bottom-0 w-72 bg-white shadow-2xl flex flex-col transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="flex items-center justify-between border-b border-neutral-100 px-6 py-5">
              <img src={LOGO} alt="MerchGroups" className="h-8" />
              <button onClick={() => setMobileMenuOpen(false)} className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-100 text-neutral-700">
                <Icon name="X" size={20} />
              </button>
            </div>
            <nav className="flex flex-col px-6 pt-6 flex-1 overflow-y-auto">
              {NAV.map((n, i) => {
                if (n === 'Услуги') {
                  return (
                    <div key={n} className="border-b border-neutral-100">
                      <div className="flex items-center justify-between py-4">
                        <a href="/services" onClick={() => setMobileMenuOpen(false)} className="text-sm font-semibold uppercase tracking-wider text-neutral-600 hover:text-brand-green transition-colors">
                          {n}
                        </a>
                        <button onClick={() => setMobileServicesOpen(!mobileServicesOpen)} className="flex h-7 w-7 items-center justify-center rounded-full bg-neutral-100">
                          <Icon name="ChevronDown" size={14} className={`transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                        </button>
                      </div>
                      {mobileServicesOpen && (
                        <div className="mb-3 space-y-2">
                          {TABS.map((service) => (
                            <div key={service.name} className="rounded-xl bg-neutral-50 p-3">
                              <a href={`/services/${service.name.toLowerCase().replace(/\s+/g, '-')}`} onClick={() => setMobileMenuOpen(false)} className="block text-[11px] font-bold uppercase tracking-wide text-neutral-500 hover:text-brand-green mb-2 transition-colors">{service.name}</a>
                              <ul className="space-y-2">
                                {service.sub.map((sub) => (
                                  <li key={sub.name}>
                                    <a href="#" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 text-sm text-neutral-600 hover:text-brand-green transition-colors">
                                      <span className="h-1.5 w-1.5 rounded-full bg-brand-green shrink-0" />
                                      {sub.name}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }
                return (
                  <a
                    key={n}
                    href="#"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`border-b border-neutral-100 py-4 text-sm font-semibold uppercase tracking-wider transition-colors ${i === 0 ? 'text-brand-green' : 'text-neutral-600 hover:text-neutral-900'}`}
                  >
                    {n}
                  </a>
                );
              })}
              <div className="mt-6 mb-4 flex items-center gap-2 rounded-full bg-neutral-100 px-4 py-3">
                <Icon name="Search" size={16} className="text-neutral-400" />
                <input placeholder="Поиск по сайту" className="w-full bg-transparent text-sm text-neutral-700 placeholder:text-neutral-400 focus:outline-none" />
              </div>
            </nav>
            <div className="border-t border-neutral-100 px-6 py-6 space-y-4">
              {PHONES.map((p) => (
                <a key={p.tel} href={`tel:${p.tel}`} className="flex items-center gap-3 group">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-green/10">
                    <Icon name="Phone" size={15} className="text-brand-green" />
                  </div>
                  <div className="leading-snug">
                    <div className="text-sm font-bold text-neutral-800 group-hover:text-brand-green transition-colors">{p.num}</div>
                    <div className="text-[12px] font-semibold text-neutral-500">{p.name}</div>
                    <div className="text-[11px] text-neutral-400">{p.role}</div>
                  </div>
                </a>
              ))}
              <a href="mailto:info@merch-groups.ru" className="flex items-center gap-3 text-neutral-500 hover:text-neutral-800">
                <Icon name="Mail" size={15} className="text-brand-blue" />
                <span className="text-sm">info@merch-groups.ru</span>
              </a>
            </div>
          </div>
        </div>

        {/* Hero контент */}
        <div className="relative overflow-hidden bg-neutral-50">
          <img src={HERO_BG} alt="" className="absolute inset-0 h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-white/80" />
          <div className="relative z-10 container py-24 md:py-36">
            <div className="max-w-2xl animate-fade-in">
              <div className="mb-4 inline-block rounded-full bg-brand-green/10 px-4 py-1 text-sm font-semibold text-brand-green ring-1 ring-brand-green/30">
                Агентство мерчандайзинга №1
              </div>
              <h1 className="font-heading text-4xl font-extrabold leading-tight text-neutral-900 md:text-6xl">
                MerchGroups — агентство мерчандайзинга
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-neutral-500">
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

      {/* Цифры под hero */}
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

      {/* БЛОК 3: Миссия и философия */}
      <section className="py-20 md:py-28">
        <div className="container">
          {/* Миссия */}
          <MissionBlock />

          {/* Философия */}
          <PhilosophyBlock />
        </div>

      </section>

      {/* БЛОК 4: Клиенты */}
      <section className="border-y border-neutral-100 bg-neutral-50 py-16">
        <div className="container">
          <h2 className="text-center font-heading text-2xl font-bold">Наши клиенты</h2>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {CLIENTS.map((src, i) => (
              <div
                key={i}
                className={`flex h-24 items-center justify-center rounded-2xl bg-white p-5 shadow-sm transition-shadow hover:shadow-md ${i >= 6 && !clientsExpanded ? 'hidden sm:flex' : ''}`}
              >
                <img src={src} alt={`Клиент ${i + 1}`} className="max-h-full max-w-full object-contain" />
              </div>
            ))}
          </div>
          {/* Кнопка "показать все" — только на мобильных */}
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

      {/* БЛОК 5: Основные услуги */}
      <section className="py-20 md:py-28">
        <div className="container">
          <h2 className="text-center font-heading text-3xl font-bold md:text-4xl">Основные услуги</h2>
          <p className="mt-3 text-center text-neutral-500">Полный спектр услуг для роста ваших продаж</p>
          {/* Ряд 1: 2 блока */}
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {SERVICES_ROW1.map((s, idx) => (
              <ServiceCard key={s.title} s={s} idx={idx} />
            ))}
          </div>
          {/* Ряд 2: 3 блока */}
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {SERVICES_ROW2.map((s, idx) => (
              <ServiceCard key={s.title} s={s} idx={idx + 2} />
            ))}
          </div>
        </div>
      </section>

      {/* БЛОК 7: Преимущества */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="container relative grid items-center gap-16 lg:grid-cols-2">
          {/* Левая часть */}
          <SlideIn direction="left" className="flex flex-col justify-center">
            <h2 className="font-heading text-5xl font-black leading-none text-neutral-900 md:text-6xl">Merch<br />Groups</h2>
            <div className="mt-8 space-y-5">
              <div className="border-l-4 border-brand-green pl-5">
                <p className="text-xl font-semibold text-neutral-800 leading-snug">
                  Мы не просто красиво выкладываем товар на полки
                </p>
              </div>
              <div className="border-l-4 border-neutral-200 pl-5">
                <p className="text-lg text-neutral-500 leading-relaxed">
                  Мы делаем это из расчёта особенностей{' '}
                  <span className="font-heading font-bold italic text-brand-green">вашей целевой аудитории</span>
                </p>
              </div>
            </div>
          </SlideIn>

          {/* Правая часть — 4 преимущества */}
          <SlideIn direction="right" className="grid gap-5 sm:grid-cols-2">
            {ADVANTAGES.map((a, i) => (
              <div key={a} className="group rounded-2xl bg-neutral-50 p-6 transition-all hover:bg-brand-green/5 hover:shadow-md">
                <div className="mb-3 font-heading text-4xl font-black text-brand-green/20 leading-none">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <p className="text-sm leading-relaxed text-neutral-700">{a}</p>
              </div>
            ))}
          </SlideIn>
        </div>
      </section>

      {/* БЛОК 8: География покрытия */}
      <section className="bg-neutral-50 py-20 md:py-28">
        <div className="container">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_2fr]">
            {/* Левая часть: заголовок + текст + статистика */}
            <SlideIn direction="left">
              <h2 className="font-heading text-3xl font-bold md:text-4xl">География покрытия</h2>
              <p className="mt-3 text-neutral-500">
                Наши мерчендайзеры присутствуют по всей России — в каждом городе под Ваш проект.
              </p>
              <div className="mt-8 space-y-3">
                {[
                  { num: '8', label: 'Федеральных округов' },
                  { num: '87+', label: 'Городов присутствия' },
                  { num: '5 000+', label: 'Ежедневных визитов' },
                ].map((s) => (
                  <div key={s.label} className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm">
                    <span className="font-heading text-3xl font-black text-brand-green">{s.num}</span>
                    <span className="text-sm font-medium text-neutral-600">{s.label}</span>
                  </div>
                ))}
              </div>
            </SlideIn>

            {/* Правая часть: карта */}
            <SlideIn direction="right" className="relative overflow-hidden rounded-3xl">
              <img src={MAP_BG} alt="Карта покрытия MerchGroups" className="w-full" />
              {MAP_POINTS.map((p, i) => (
                <img
                  key={i}
                  src={MARKER}
                  alt=""
                  className="absolute h-6 w-6 -translate-x-1/2 -translate-y-1/2 animate-scale-in drop-shadow-lg md:h-8 md:w-8"
                  style={{ top: p.top, left: p.left, animationDelay: `${i * 0.1}s` }}
                />
              ))}
              {/* Блоки статистики на карте */}
              <div className="absolute bottom-4 right-4 flex flex-col gap-2">
                <div className="rounded-xl bg-white/90 backdrop-blur-sm px-4 py-3 shadow-lg text-center">
                  <div className="font-heading text-2xl font-black text-brand-green">87</div>
                  <div className="text-xs font-medium text-neutral-600">регионов</div>
                </div>
                <div className="rounded-xl bg-white/90 backdrop-blur-sm px-4 py-3 shadow-lg text-center">
                  <div className="font-heading text-2xl font-black text-brand-blue">2 244</div>
                  <div className="text-xs font-medium text-neutral-600">сотрудника</div>
                </div>
              </div>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* БЛОК 9: Программное обеспечение */}
      <section className="py-20 md:py-28">
        <div className="container">
          <h2 className="text-center font-heading text-3xl font-bold md:text-4xl">Программное обеспечение</h2>
          <p className="mt-3 text-center text-neutral-500">Единая облачная система онлайн-отчётности Optimum</p>
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {SOFTWARE.map((s, i) => (
              <SlideIn key={s.title} direction={i === 0 ? 'left' : 'right'} delay={i * 150} className="flex flex-col overflow-hidden rounded-3xl border border-neutral-100 bg-neutral-50" style={{ minHeight: '480px' }}>
                <div className="p-8">
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-blue/10">
                    <Icon name={s.mobile ? 'Smartphone' : 'Monitor'} size={24} className="text-brand-blue" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold">{s.title}</h3>
                  <p className="mt-3 text-neutral-600">{s.desc}</p>
                </div>
                <div className="mt-auto flex h-80 items-center justify-center p-4">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="h-full w-full object-contain"
                  />
                </div>
              </SlideIn>
            ))}
          </div>
        </div>
      </section>

      {/* БЛОК 10: Контроль качества */}
      <section className="bg-neutral-50 py-20 md:py-28">
        <div className="container">
          {/* Верхняя часть: заголовок слева, карточка справа */}
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:gap-8">

            {/* Заголовок */}
            <SlideIn direction="left" className="flex flex-col justify-center">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-neutral-400">О контроле качества</span>
              <div className="mt-2 h-0.5 w-10 bg-brand-green" />
              <h2 className="mt-4 font-heading text-4xl font-black leading-tight md:text-5xl">Контроль качества</h2>
              <p className="mt-4 text-lg text-neutral-500">Каждый отчёт проходит строгую проверку перед передачей Вам</p>
            </SlideIn>

            {/* Карточка 01 */}
            <SlideIn direction="right" className="relative overflow-hidden rounded-3xl bg-white p-8 shadow-sm">
              <span className="absolute right-6 top-4 font-heading text-6xl font-black text-neutral-100 select-none">01</span>
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-green/10">
                <Icon name="ShieldCheck" size={32} className="text-brand-green" />
              </div>
              <p className="relative text-neutral-700 leading-relaxed">
                <span className="font-bold text-black">{QUALITY[0][0]}</span>{QUALITY[0][1]}
              </p>
            </SlideIn>
          </div>

          {/* Нижние три карточки */}
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {QUALITY.slice(1).map(([bold, rest], i) => {
              const icons = ['ShieldAlert', 'ClipboardCheck', 'BadgeCheck'];
              const accents = ['bg-brand-blue', 'bg-brand-orange', 'bg-brand-green'];
              return (
                <SlideIn key={bold} direction="left" delay={i * 120} className={`relative overflow-hidden rounded-3xl p-8 shadow-sm transition-shadow hover:shadow-lg ${i === 0 ? accents[0] + ' text-white' : 'bg-white'}`}>
                  <span className={`absolute right-6 top-4 font-heading text-6xl font-black select-none ${i === 0 ? 'text-white/20' : 'text-neutral-100'}`}>0{i + 2}</span>
                  <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${i === 0 ? 'bg-white/20' : accents[i] + '/10'}`}>
                    <Icon name={icons[i]} size={32} className={i === 0 ? 'text-white' : `text-${accents[i].replace('bg-', '')}`} />
                  </div>
                  <p className={`relative leading-relaxed ${i === 0 ? 'text-white/90' : 'text-neutral-700'}`}>
                    <span className={`font-bold ${i === 0 ? 'text-white' : 'text-black'}`}>{bold}</span>{rest}
                  </p>
                </SlideIn>
              );
            })}
          </div>
        </div>
      </section>

      <SiteCTA />

      <SiteFooter />
    </div>
  );
}