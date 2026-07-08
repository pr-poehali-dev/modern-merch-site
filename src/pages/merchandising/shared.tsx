import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { CASES as ALL_CASES, CasesCarousel } from '@/pages/cases/shared';

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

export const MERCH_TYPES = [
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
    desc: 'MGroups уже развернула полевую структуру совмещённого мерчандайзинга — она работает в тысячах торговых точек.',
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

export const CITIES = [
  'Москва', 'Санкт-Петербург', 'Новосибирск', 'Екатеринбург', 'Нижний Новгород',
  'Казань', 'Самара', 'Челябинск', 'Ростов-на-Дону', 'Омск', 'Уфа', 'Красноярск',
  'Пермь', 'Волгоград', 'Воронеж', 'Саратов', 'Краснодар', 'Тольятти', 'Тюмень',
  'Ижевск', 'Барнаул', 'Ульяновск', 'Иркутск', 'Владивосток', 'Ярославль',
  'Хабаровск', 'Махачкала', 'Оренбург', 'Томск', 'Новокузнецк', 'Кемерово',
  'Астрахань', 'Набережные Челны', 'Рязань', 'Пенза', 'Липецк', 'Тула', 'Киров',
  'Чебоксары', 'Калининград', 'Курск', 'Улан-Удэ', 'Ставрополь', 'Магнитогорск',
  'Тверь', 'Иваново', 'Брянск', 'Сочи', 'Белгород', 'Сургут', 'Владимир',
];

export const NETWORKS = [
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

export const WORKFLOW_IMG_APPROACH = 'https://cdn.poehali.dev/projects/f54777b0-87fc-4f92-93d7-a263150798ce/files/4bbd1a4c-118d-48f8-b1c4-b90a30637d01.jpg';
export const WORKFLOW_IMG_QUALITY = 'https://cdn.poehali.dev/projects/f54777b0-87fc-4f92-93d7-a263150798ce/files/d536c6e7-cc98-4a48-a349-f359d104bc01.jpg';

export const CASES = ALL_CASES.slice(-5).reverse();

export function CasesShowcase() {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <FadeIn>
          <h2 className="font-heading text-3xl font-bold md:text-4xl">Примеры работ</h2>
          <p className="mt-3 text-neutral-500">Результаты нашей работы на реальных объектах</p>
        </FadeIn>

        <div className="mt-12">
          <CasesCarousel items={CASES} viewAllHref="/cases" />
        </div>
      </div>
    </section>
  );
}

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
    transform: visible ? 'translateX(0)' : `translateX(${direction === 'left' ? '-30px' : '30px'})`,
    transition: 'opacity 0.7s ease, transform 0.7s ease',
  };
  return { ref, style };
}

export function WorkflowBlocks() {
  const imgLeft = useSlideIn('left');
  const textRight = useSlideIn('right');
  const textLeft = useSlideIn('left');
  const imgRight = useSlideIn('right');

  return (
    <section className="py-20 md:py-28">
      <div className="container space-y-16 md:space-y-20">
        {/* Фото слева — текст справа */}
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-14">
          <div ref={imgLeft.ref} style={imgLeft.style} className="overflow-hidden rounded-3xl">
            <img src={WORKFLOW_IMG_APPROACH} alt="Индивидуальный подход к каждому проекту" className="aspect-[4/3] w-full object-cover" />
          </div>
          <div ref={textRight.ref} style={textRight.style}>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-neutral-400">Наш подход</span>
            <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">Индивидуальная стратегия под ваш бизнес</h2>
            <p className="mt-4 text-lg leading-relaxed text-neutral-600">
              Перед запуском проекта мы изучаем специфику вашей категории, торговых точек и целевой аудитории — чтобы выстроить решение, которое действительно увеличивает продажи, а не просто наводит порядок на полке.
            </p>
          </div>
        </div>

        {/* Текст слева — фото справа */}
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-14">
          <div ref={textLeft.ref} style={textLeft.style} className="md:order-1">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-neutral-400">Контроль качества</span>
            <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">Каждый визит фиксируется и проверяется</h2>
            <p className="mt-4 text-lg leading-relaxed text-neutral-600">
              Наши мерчандайзеры отчитываются о каждом посещении с фотофиксацией, а супервайзеры регулярно проверяют качество работы — вы всегда видите реальную картину на полке.
            </p>
          </div>
          <div ref={imgRight.ref} style={imgRight.style} className="overflow-hidden rounded-3xl md:order-2">
            <img src={WORKFLOW_IMG_QUALITY} alt="Контроль качества выкладки" className="aspect-[4/3] w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function FadeIn({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
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

export function Calculator() {
  const [sku, setSku] = useState('');
  const [points, setPoints] = useState('');
  const [visits, setVisits] = useState('');
  const [result, setResult] = useState<number | null>(null);
  const [calculated, setCalculated] = useState(false);

  const calculate = () => {
    const s = parseInt(sku) || 0;
    const p = parseInt(points) || 0;
    const v = parseInt(visits) || 0;
    const basePerVisit = 350;
    const skuCoeff = s <= 20 ? 1 : s <= 50 ? 1.3 : s <= 100 ? 1.6 : 2;
    const weeksPerMonth = 4.3;
    const total = Math.round(basePerVisit * skuCoeff * p * v * weeksPerMonth);
    setResult(total);
    setCalculated(true);
  };

  const formatPrice = (n: number) =>
    n.toLocaleString('ru-RU') + ' ₽';

  return (
    <section className="bg-neutral-50 py-20 md:py-28">
      <div className="container">
        <FadeIn>
          <h2 className="font-heading text-3xl font-bold md:text-4xl">Расчёт стоимости</h2>
          <p className="mt-3 text-neutral-500">Укажите параметры вашего проекта — мы рассчитаем ориентировочную стоимость</p>
        </FadeIn>
        <FadeIn delay={100}>
          <div className="mt-10 rounded-3xl bg-white border border-neutral-100 shadow-sm p-8 md:p-12">
            <div className="grid gap-6 md:grid-cols-3">
              {[
                { label: 'Количество SKU в торговой точке', value: sku, setter: setSku, placeholder: 'Например, 30', hint: 'SKU — уникальных позиций товара' },
                { label: 'Количество торговых точек', value: points, setter: setPoints, placeholder: 'Например, 50', hint: 'Магазинов, супермаркетов и т.д.' },
                { label: 'Количество посещений в неделю', value: visits, setter: setVisits, placeholder: 'Например, 2', hint: 'Визитов мерчандайзера в 1 точку' },
              ].map((f) => (
                <div key={f.label}>
                  <label className="block text-sm font-semibold text-neutral-700 mb-2">{f.label}</label>
                  <input
                    type="number"
                    min="0"
                    value={f.value}
                    onChange={(e) => { f.setter(e.target.value); setCalculated(false); }}
                    placeholder={f.placeholder}
                    className="w-full rounded-2xl border border-neutral-200 bg-neutral-50 px-5 py-4 text-lg font-semibold text-neutral-900 placeholder:text-neutral-400 focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/20 transition-all"
                  />
                  <p className="mt-2 text-xs text-neutral-400">{f.hint}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col items-center gap-6">
              <Button
                onClick={calculate}
                disabled={!sku || !points || !visits}
                className="w-full rounded-full bg-brand-green px-8 py-4 text-base font-bold text-white hover:bg-brand-green/90 disabled:opacity-40 disabled:cursor-not-allowed sm:w-auto sm:px-16 sm:py-5 sm:text-xl"
              >
                Рассчитать стоимость
              </Button>

              {calculated && result !== null && (
                <div className="max-w-sm w-full rounded-2xl border border-brand-green/20 bg-brand-green/5 p-6 animate-fade-in text-center">
                  <span className="text-sm text-neutral-500 font-medium">Ориентировочная стоимость в месяц:</span>
                  <span className="font-heading text-4xl font-black text-brand-green block mt-1">от {formatPrice(result)}</span>
                  <p className="mt-2 text-xs text-neutral-400">* Итоговая стоимость является ориентировочной и может отличаться. Не является публичной офертой.</p>
                </div>
              )}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export function MerchTypeCard({ t, idx }: { t: typeof MERCH_TYPES[0]; idx: number }) {
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
        <div className="relative p-5 sm:p-8">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-green/10 sm:h-14 sm:w-14 sm:rounded-2xl">
                <Icon name={t.icon} size={20} className="text-brand-green sm:hidden" />
                <Icon name={t.icon} size={28} className="text-brand-green hidden sm:block" />
              </div>
              <h3 className="font-heading text-lg font-bold text-neutral-900 sm:text-2xl">{t.title}</h3>
            </div>
            <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${open ? 'rotate-180 bg-brand-green' : 'bg-neutral-100 group-hover:bg-brand-green group-hover:text-white'}`}>
              <Icon name="ChevronDown" size={18} className={open ? 'text-white' : 'text-neutral-500 group-hover:text-white'} />
            </div>
          </div>
          <p className="mt-4 text-neutral-600 leading-relaxed">{t.desc}</p>
          <div className={`overflow-hidden transition-all duration-400 ${open ? 'max-h-[600px] mt-6 opacity-100' : 'max-h-0 opacity-0'}`}>
            <ul className="space-y-3 mb-4">
              {t.points.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-green" />
                  <span className="text-neutral-700">{p}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-neutral-500 italic border-l-2 border-brand-green/30 pl-4 mb-6">{t.footer}</p>
            <Button
              className="rounded-full bg-brand-green px-6 py-2 text-sm font-semibold text-white hover:bg-brand-green/90"
              onClick={(e) => e.stopPropagation()}
            >
              Подробнее об услуге
              <Icon name="ArrowRight" size={15} className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}