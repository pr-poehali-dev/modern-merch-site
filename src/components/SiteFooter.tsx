import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const LOGO2 = 'https://cdn.poehali.dev/projects/f54777b0-87fc-4f92-93d7-a263150798ce/bucket/b11faff2-b9ed-49ee-8ee2-838771b5e5dc.png';

const NAV = ['Главная', 'О компании', 'Услуги', 'Наши кейсы', 'Новости', 'Контакты'];

const PHONES = [
  { num: '+7 931 342 23 37', name: 'Лилия', role: 'Руководитель проектов', tel: '+79313422337' },
  { num: '+7 926 473 53 70', name: 'Николоз', role: 'Менеджер по развитию', tel: '+79264735370' },
];

const SERVICES = [
  { title: 'Мерчандайзинг', slug: '/merchandising' },
  { title: 'Технический мерчандайзинг', slug: '/tech-merchandising' },
  { title: 'Тайный покупатель', slug: '/mystery-shopper' },
  { title: 'Аудит торговых сетей', slug: '/retail-audit' },
  { title: 'BTL услуги + Организация дегустаций', slug: '/btl' },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-neutral-950 pb-8 pt-56 text-white">
      <div className="container">
        <div className="flex flex-col items-center text-center gap-8 md:grid md:grid-cols-[1fr_1fr_1fr_1fr] md:items-start md:text-left">

          {/* Колонка 1: Лого + аннотация */}
          <div className="flex flex-col items-center md:items-start">
            <Link to="/"><img src={LOGO2} alt="MGroups" className="h-14" /></Link>
            <p className="mt-3 text-sm text-white/50">Агентство мерчандайзинга</p>
          </div>

          {/* Колонка 2: Меню сайта */}
          <nav className="hidden md:flex flex-col gap-2 content-start">
            <span className="mb-2 text-xs font-bold uppercase tracking-widest text-white/30">Меню сайта</span>
            {NAV.filter((n) => n !== 'Услуги').map((n, i) => {
              if (n === 'Наши кейсы') {
                return (
                  <Link key={n} to="/cases" className="text-sm text-white/60 transition-colors hover:text-brand-green">
                    {n}
                  </Link>
                );
              }
              if (n === 'Новости') {
                return (
                  <Link key={n} to="/news" className="text-sm text-white/60 transition-colors hover:text-brand-green">
                    {n}
                  </Link>
                );
              }
              if (n === 'Контакты') {
                return (
                  <Link key={n} to="/contacts" className="text-sm text-white/60 transition-colors hover:text-brand-green">
                    {n}
                  </Link>
                );
              }
              return (
                <a key={n} href="#" className={`text-sm transition-colors hover:text-brand-green ${i === 0 ? 'text-brand-green' : 'text-white/60'}`}>
                  {n}
                </a>
              );
            })}
          </nav>

          {/* Колонка 3: Услуги */}
          <nav className="hidden md:flex flex-col gap-2 content-start">
            <span className="mb-2 text-xs font-bold uppercase tracking-widest text-white/30">Услуги</span>
            {SERVICES.map((s) => (
              <Link key={s.title} to={s.slug} className="text-sm text-white/60 transition-colors hover:text-brand-green">
                {s.title}
              </Link>
            ))}
          </nav>

          {/* Колонка 4: Телефоны + email */}
          <div className="flex flex-col items-center gap-5 md:items-end md:justify-self-end">
            {PHONES.map((p) => (
              <a key={p.tel} href={`tel:${p.tel}`} className="group flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 transition-colors group-hover:bg-brand-green/30">
                  <Icon name="Phone" size={16} className="text-brand-green" />
                </div>
                <div className="leading-snug text-left">
                  <div className="text-base font-bold transition-colors group-hover:text-brand-green">{p.num}</div>
                  <div className="text-[12px] font-bold text-white/70">{p.name}</div>
                  <div className="text-[11px] text-white/40">{p.role}</div>
                </div>
              </a>
            ))}
            <a href="mailto:info@merch-groups.ru" className="flex items-center gap-2 text-sm text-white/50 hover:text-white">
              <Icon name="Mail" size={14} /> info@merch-groups.ru
            </a>
          </div>
        </div>

        {/* Нижняя строка */}
        <div className="mt-10 border-t border-white/10 pt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-white/30 md:justify-between">
          <span>© 2026 MGroups — агентство мерчандайзинга</span>
          <div className="flex gap-5">
            <Link to="/privacy-policy" className="hover:text-white/60 transition-colors">Политика конфиденциальности</Link>
            <Link to="/terms-of-use" className="hover:text-white/60 transition-colors">Пользовательское соглашение</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}