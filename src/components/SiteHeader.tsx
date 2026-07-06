import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const LOGO = 'https://cdn.poehali.dev/projects/f54777b0-87fc-4f92-93d7-a263150798ce/bucket/ad788e8b-54f0-4b45-98bf-2d5f3e89f035.png';

const NAV = ['Главная', 'О компании', 'Услуги', 'Наши кейсы', 'Новости', 'Контакты'];

const PHONES = [
  { num: '+7 931 342 23 37', name: 'Лилия', role: 'Руководитель проектов', tel: '+79313422337' },
  { num: '+7 926 473 53 70', name: 'Николоз', role: 'Менеджер по развитию', tel: '+79264735370' },
];

const TABS = [
  {
    name: 'Мерчандайзинг',
    slug: '/merchandising',
    color: '#00af50',
    icon: 'Store',
    dark: false,
    sub: [
      { name: 'Стационарный', slug: '/merchandising#стационарный' },
      { name: 'Визитный', slug: '/merchandising#визитный' },
      { name: 'Совмещенный', slug: '/merchandising#совмещенный' },
      { name: 'Выделенный', slug: '/merchandising#выделенный' },
    ],
  },
  {
    name: 'Технический мерчандайзинг',
    slug: '/tech-merchandising',
    color: '#3b82f6',
    icon: 'Wrench',
    dark: false,
    sub: [
      { name: 'Логистика', slug: '/tech-merchandising#логистика' },
      { name: 'Утилизация', slug: '/tech-merchandising#утилизация' },
      { name: 'Изготовление', slug: '/tech-merchandising#изготовление' },
      { name: 'Замеры', slug: '/tech-merchandising#замеры' },
    ],
  },
  {
    name: 'Тайный покупатель',
    slug: '/mystery-shopper',
    color: '#eab308',
    icon: 'UserSearch',
    dark: true,
    sub: [{ name: 'Проверка инкогнито', slug: '/mystery-shopper#проверка' }],
  },
  {
    name: 'Аудит торговых сетей',
    slug: '/retail-audit',
    color: '#b85c7b',
    icon: 'ClipboardCheck',
    dark: true,
    sub: [{ name: 'Независимый аудит', slug: '/retail-audit#аудит' }],
  },
  {
    name: 'BTL услуги + Организация дегустаций',
    slug: '/btl',
    color: '#ea580c',
    icon: 'Users',
    dark: false,
    sub: [{ name: 'Промоакции', slug: '/btl#промоакции' }],
  },
];

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [phonePopupOpen, setPhonePopupOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Плавающая мобильная шапка */}
      <div className={`fixed top-0 left-0 right-0 z-30 lg:hidden transition-all duration-300 ${scrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
        <div className="backdrop-blur-md border-b border-black/5 bg-white/70 py-2 transition-all duration-300">
          <div className="container flex items-center justify-between gap-3">
            <Link to="/"><img src={LOGO} alt="MGroups" className="h-8 transition-all duration-300" /></Link>
            <div className="flex items-center gap-2">
              <button onClick={() => setPhonePopupOpen(true)} className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-green">
                <Icon name="Phone" size={17} className="text-white" />
              </button>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="flex h-9 w-9 items-center justify-center rounded-full bg-black/10 text-neutral-800">
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

      {/* Шапка */}
      <header className="bg-white">
        {/* Строка 1: контакты */}
        <div className="border-b border-neutral-100">
          <div className="container flex items-center justify-between gap-4 py-4">
            <Link to="/"><img src={LOGO} alt="MGroups" className="h-12 w-auto sm:h-16 lg:h-20" /></Link>

            {/* Desktop */}
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
              <button onClick={() => setPhonePopupOpen(true)} className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-green">
                <Icon name="Phone" size={20} className="text-white" />
              </button>
              <Button className="hidden rounded-full bg-brand-green font-semibold text-white hover:bg-brand-green/90 sm:flex">
                Связаться с нами
              </Button>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 text-neutral-700 lg:hidden">
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
                      <div className={`absolute left-0 top-full z-50 pt-2 transition-all duration-200 ${servicesOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                        <div className="w-[680px] rounded-2xl border border-neutral-100 bg-white shadow-xl p-4 grid grid-cols-2 gap-3">
                          {TABS.map((service) => (
                            <div key={service.name} className="group relative rounded-xl bg-neutral-50 p-4 hover:bg-neutral-100 transition-colors overflow-hidden">
                              <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-xl opacity-20 group-hover:opacity-40 transition-opacity" style={{ backgroundColor: service.color }}>
                                <Icon name={service.icon} size={18} className="text-white" />
                              </div>
                              <Link to={service.slug} onClick={() => setServicesOpen(false)} className="block text-sm font-bold text-neutral-900 hover:text-brand-green mb-2 pr-10 transition-colors">
                                {service.name}
                              </Link>
                              <ul className="space-y-1">
                                {service.sub.map((sub) => (
                                  <li key={sub.name}>
                                    <Link to={sub.slug} onClick={() => setServicesOpen(false)} className="flex items-center gap-2 text-sm text-neutral-500 hover:text-brand-green transition-colors">
                                      <span className="h-1 w-1 rounded-full bg-brand-green shrink-0" />
                                      {sub.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                }
                if (n === 'Мерчандайзинг') {
                  return (
                    <Link key={n} to="/merchandising" className="text-sm font-semibold uppercase tracking-wide text-neutral-600 hover:text-brand-blue transition-colors">
                      {n}
                    </Link>
                  );
                }
                if (n === 'Новости') {
                  return (
                    <Link key={n} to="/news" className="text-sm font-semibold uppercase tracking-wide text-neutral-600 hover:text-brand-blue transition-colors">
                      {n}
                    </Link>
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
              <Link to="/"><img src={LOGO} alt="MGroups" className="h-8" /></Link>
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
                        <a href="/services" onClick={() => setMobileMenuOpen(false)} className="text-sm font-semibold uppercase tracking-wider text-neutral-600 hover:text-brand-green transition-colors">{n}</a>
                        <button onClick={() => setMobileServicesOpen(!mobileServicesOpen)} className="flex h-7 w-7 items-center justify-center rounded-full bg-neutral-100">
                          <Icon name="ChevronDown" size={14} className={`transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                        </button>
                      </div>
                      {mobileServicesOpen && (
                        <div className="mb-3 space-y-2">
                          {TABS.map((service) => (
                            <div key={service.name} className="rounded-xl bg-neutral-50 p-3">
                              <Link to={service.slug} onClick={() => setMobileMenuOpen(false)} className="block text-[11px] font-bold uppercase tracking-wide text-neutral-500 hover:text-brand-green mb-2 transition-colors">{service.name}</Link>
                              <ul className="space-y-2">
                                {service.sub.map((sub) => (
                                  <li key={sub.name}>
                                    <Link to={sub.slug} onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 text-sm text-neutral-600 hover:text-brand-green transition-colors">
                                      <span className="h-1.5 w-1.5 rounded-full bg-brand-green shrink-0" />
                                      {sub.name}
                                    </Link>
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
                if (n === 'Мерчандайзинг') {
                  return (
                    <Link key={n} to="/merchandising" onClick={() => setMobileMenuOpen(false)} className="border-b border-neutral-100 py-4 text-sm font-semibold uppercase tracking-wider text-neutral-600 hover:text-neutral-900 transition-colors">
                      {n}
                    </Link>
                  );
                }
                if (n === 'Новости') {
                  return (
                    <Link key={n} to="/news" onClick={() => setMobileMenuOpen(false)} className="border-b border-neutral-100 py-4 text-sm font-semibold uppercase tracking-wider text-neutral-600 hover:text-neutral-900 transition-colors">
                      {n}
                    </Link>
                  );
                }
                return (
                  <a key={n} href="#" onClick={() => setMobileMenuOpen(false)} className={`border-b border-neutral-100 py-4 text-sm font-semibold uppercase tracking-wider transition-colors ${i === 0 ? 'text-brand-green' : 'text-neutral-600 hover:text-neutral-900'}`}>
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
      </header>
    </>
  );
}