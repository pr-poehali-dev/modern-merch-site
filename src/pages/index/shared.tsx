import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

export const HERO_BG = 'https://cdn.poehali.dev/projects/f54777b0-87fc-4f92-93d7-a263150798ce/files/28fac548-2488-4d76-8d83-7a1bd9f1c28f.jpg';
export const MISSION_IMG = 'https://cdn.poehali.dev/projects/f54777b0-87fc-4f92-93d7-a263150798ce/files/d2809aca-e2f0-4e42-993f-19153ade8fd1.jpg';

export const STATS = [
  { num: '87', title: 'регионов покрытия', desc: 'В каждом городе у нас есть мерчендайзер под Ваш проект', color: 'text-brand-green' },
  { num: '2 244', title: 'полевого персонала', desc: 'И с каждым проектом наша команда растет', color: 'text-brand-blue' },
  { num: '100%', title: 'вовлеченность в Ваш проект', desc: 'Мы работаем на результат, заботясь о вашем товаре и имидже в каждой торговой точке.', color: 'text-brand-orange' },
];

export const CLIENTS = [
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

export const SERVICES_ROW1 = [
  { title: 'Мерчандайзинг', icon: 'Store', color: '#00af50', desc: 'Профессиональное размещение товаров, управление полочным пространством и выкладкой продукции в торговых точках.', slug: '/merchandising' },
  { title: 'Технический мерчандайзинг', icon: 'Wrench', color: '#3b82f6', desc: 'Установка и обслуживание торгового оборудования, размещение POS-материалов и брендирование зон.', slug: '/tech-merchandising' },
];

export const SERVICES_ROW2 = [
  { title: 'Тайный покупатель', icon: 'UserSearch', color: '#eab308', dark: true, desc: 'Независимая проверка качества обслуживания и соблюдения стандартов через визиты инкогнито-аудиторов.', slug: '/mystery-shopper' },
  { title: 'Аудит торговых сетей', icon: 'ClipboardCheck', color: '#d97706', dark: true, desc: 'Независимая оценка представленности товара, контроль цен и соблюдения планограмм с фотоотчётами.', slug: '/retail-audit' },
  { title: 'BTL услуги + Организация дегустаций', icon: 'Users', color: '#ea580c', desc: 'Промоакции, дегустации и праздничные мероприятия с подбором и обучением персонала.', slug: '/btl' },
];

export const ADVANTAGES = [
  'Мы составляем для вас эффективную адресную программу',
  'Мы умеем преподнести товар потребителю так, чтобы он его не просто заметил, но и приобрел',
  'Мы оперативно подстраиваемся под ваши желания — подключение новых торговых точек происходит в течение 1-2 недель',
  'Мы имеем широкое покрытие городов России и сотрудничаем со всеми крупными сетями',
];

export const MAP_BG = 'https://cdn.poehali.dev/projects/f54777b0-87fc-4f92-93d7-a263150798ce/bucket/35483c6f-8495-4325-8a3d-1459c76183a9.jpg';
export const MARKER = 'https://cdn.poehali.dev/projects/f54777b0-87fc-4f92-93d7-a263150798ce/bucket/07a93ba5-f34c-40b0-9057-eb7c9b1235c1.png';
export const APP_MOBILE = 'https://cdn.poehali.dev/projects/f54777b0-87fc-4f92-93d7-a263150798ce/bucket/0a5f2ffe-b532-47d3-b2ef-a7d0f88e0f5d.png';
export const APP_DESKTOP = 'https://cdn.poehali.dev/projects/f54777b0-87fc-4f92-93d7-a263150798ce/bucket/0873700f-551a-467c-ad56-8c748c568754.png';

export const MAP_POINTS = [
  { top: '40%', left: '11%' }, { top: '52%', left: '19%' }, { top: '50%', left: '27%' },
  { top: '58%', left: '35%' }, { top: '57%', left: '70%' }, { top: '72%', left: '18%' }, { top: '82%', left: '17%' },
];

export const SOFTWARE = [
  { title: 'Мобильное приложение', desc: 'Для автоматизации работы мерчендайзера по сбору информации о наличии продукции и товаров конкурентов, контролю выкладки (планограмм), мониторингу цен, проведению промо-акций и опросов.', img: APP_MOBILE, mobile: true },
  { title: 'Desktop приложение', desc: 'Все проекты в одной системе! По всем вашим проектам, будь то мерчендайзеры, тайные покупатели, аудиты, промо или продавцы-консультанты, вся информация собирается и обрабатывается в едином облачном пространстве онлайн отчетности.', img: APP_DESKTOP, mobile: false },
];

export const QUALITY = [
  ['100% отчетов мерчандайзеров', ' проходят строгую оценку на качество выполнения работ.'],
  ['Мы сами отклоним отчет', ', если качество работы нашего сотрудника не соответствует требованиям.'],
  ['Вы видите только те отчеты', ', которые соответствуют заданным параметрам контракта.'],
  ['Благодаря возможностям программы Optimum', ' вы можете участвовать в процессе работы полевых сотрудников, вносить коррективы и получать максимально качественный результат.'],
];

export function useSlideIn(direction: 'left' | 'right' = 'left') {
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

export function SlideIn({ children, direction = 'left', delay = 0, className = '', style: extStyle = {} }: {
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

export function CountUp({ value, className }: { value: string; className?: string }) {
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

export function ServiceCard({ s, idx }: { s: { title: string; icon: string; color: string; dark?: boolean; desc: string; slug: string }; idx: number }) {
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
    <div ref={ref} className="h-full">
    <Link
      to={s.slug}
      className="group relative overflow-hidden rounded-3xl p-7 md:p-14 cursor-pointer transition-all duration-700 block h-full"
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
          width: 420,
          height: 420,
          background: s.dark ? 'radial-gradient(circle, rgba(0,0,0,0.22) 0%, transparent 65%)' : 'radial-gradient(circle, rgba(255,255,255,0.32) 0%, transparent 65%)',
          opacity: trail.show ? 1 : 0,
        }}
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
      <div className={`relative font-heading text-5xl font-black leading-none select-none mb-4 md:text-8xl md:mb-6 ${s.dark ? 'text-black/15' : 'text-white/20'}`}>
        {String(idx + 1).padStart(2, '0')}
      </div>
      <div className={`relative mb-4 flex h-11 w-11 items-center justify-center rounded-xl md:mb-6 md:h-16 md:w-16 md:rounded-2xl ${s.dark ? 'bg-black/10' : 'bg-white/20'}`}>
        <Icon name={s.icon} size={22} className={`md:hidden ${s.dark ? 'text-black' : 'text-white'}`} />
        <Icon name={s.icon} size={32} className={`hidden md:block ${s.dark ? 'text-black' : 'text-white'}`} />
      </div>
      <h3 className={`relative font-heading text-2xl font-bold mb-3 md:text-3xl md:mb-4 ${s.dark ? 'text-black' : 'text-white'}`}>{s.title}</h3>
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

export function MissionBlock() {
  const left = useSlideIn('left');
  const right = useSlideIn('right');
  return (
    <div className="border-b border-neutral-100 pb-16 md:flex md:items-start md:gap-20">
      <div ref={left.ref} style={left.style} className="shrink-0">
        <span className="font-heading text-[11px] font-bold uppercase tracking-[0.25em] text-neutral-400">01</span>
        <h2 className="mt-2 font-heading text-4xl font-black leading-none sm:text-5xl md:text-7xl">Наша<br/>миссия</h2>
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

export function PhilosophyBlock() {
  const right = useSlideIn('right');
  const left = useSlideIn('left');
  return (
    <div className="pt-16 md:flex md:items-start md:gap-20 md:flex-row-reverse">
      <div ref={right.ref} style={right.style} className="shrink-0 md:text-right">
        <span className="font-heading text-[11px] font-bold uppercase tracking-[0.25em] text-neutral-400">02</span>
        <h2 className="mt-2 font-heading text-4xl font-black leading-none sm:text-5xl md:text-7xl">Наша<br/>философия</h2>
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