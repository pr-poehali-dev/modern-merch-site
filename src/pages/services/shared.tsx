import { Link, useParams } from 'react-router-dom';
import { Fragment } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import SiteCTA from '@/components/SiteCTA';
import { FadeIn, useSlideIn } from '@/pages/merchandising/shared';
import { CASES, CasesCarousel, type CaseCategory } from '@/pages/cases/shared';

export function ServiceBreadcrumb({ label }: { label: string }) {
  return (
    <div className="border-b border-neutral-100 bg-white">
      <div className="container flex items-center gap-2 py-3 text-sm text-neutral-500">
        <Link to="/" className="hover:text-brand-green transition-colors">Главная</Link>
        <Icon name="ChevronRight" size={14} className="text-neutral-300" />
        <span className="hover:text-brand-green transition-colors cursor-pointer">Услуги</span>
        <Icon name="ChevronRight" size={14} className="text-neutral-300" />
        <span className="font-medium text-neutral-800">{label}</span>
      </div>
    </div>
  );
}

export function ServiceHero({
  badge, title, description, image, bgClass, buttonTextClass,
}: {
  badge: string;
  title: string;
  description: string;
  image: string;
  bgClass: string;
  buttonTextClass: string;
}) {
  return (
    <section className={`relative overflow-hidden ${bgClass} py-24`}>
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 70% 50%, white 0%, transparent 60%)' }} />
      <div className="container relative">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_420px]">
          <FadeIn>
            <span className="inline-block rounded-full bg-white/20 px-4 py-1.5 text-sm font-semibold text-white mb-6">{badge}</span>
            <h1 className="font-heading text-3xl font-black text-white sm:text-5xl md:text-7xl leading-tight">{title}</h1>
            <p className="mt-4 max-w-2xl text-base text-white/85 leading-relaxed sm:mt-6 sm:text-xl">{description}</p>
            <Button className={`mt-10 rounded-full bg-white px-10 py-4 text-base font-bold hover:bg-white/90 ${buttonTextClass}`}>
              Получить консультацию
            </Button>
          </FadeIn>
          <FadeIn delay={150} className="hidden lg:block">
            <img src={image} alt={title} className="w-full rounded-3xl object-cover shadow-2xl" style={{ maxHeight: 380 }} />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

export function ServiceFeatures({ title, subtitle, items, dark }: {
  title: string;
  subtitle?: string;
  items: { text: string; icon: string }[];
  dark?: boolean;
}) {
  return (
    <section className={`py-20 md:py-28 ${dark ? 'bg-neutral-950' : ''}`}>
      <div className="container">
        <FadeIn>
          <h2 className={`font-heading text-3xl font-bold md:text-4xl ${dark ? 'text-white' : ''}`}>{title}</h2>
          {subtitle && <p className={`mt-3 text-lg ${dark ? 'text-white/70' : 'text-neutral-500'}`}>{subtitle}</p>}
        </FadeIn>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <FadeIn key={i} delay={i * 80}>
              <div className={`flex h-full gap-5 rounded-3xl p-7 transition-colors ${dark ? 'border border-white/10 bg-white/5 hover:bg-white/10' : 'bg-neutral-50 hover:bg-neutral-100'}`}>
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${dark ? 'bg-brand-green/20' : 'bg-brand-green/10'}`}>
                  <Icon name={item.icon} size={24} className="text-brand-green" />
                </div>
                <p className={`leading-relaxed ${dark ? 'text-white/85' : 'text-neutral-700'}`}>{item.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SubServiceGrid({ title, subtitle, items }: {
  title: string;
  subtitle?: string;
  items: { name: string; slug: string; icon: string }[];
}) {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <FadeIn>
          <h2 className="font-heading text-3xl font-bold md:text-4xl">{title}</h2>
          {subtitle && <p className="mt-3 text-neutral-500">{subtitle}</p>}
        </FadeIn>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <FadeIn key={item.slug} delay={i * 80}>
              <Link
                to={item.slug}
                className="group flex items-center gap-4 rounded-3xl border border-neutral-100 bg-white p-6 shadow-sm transition-all hover:shadow-lg hover:border-brand-green/30"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand-green/10 transition-colors group-hover:bg-brand-green/20">
                  <Icon name={item.icon} size={26} className="text-brand-green" />
                </div>
                <span className="flex-1 font-heading text-lg font-bold text-neutral-900">{item.name}</span>
                <Icon name="ArrowRight" size={18} className="shrink-0 text-neutral-300 transition-all group-hover:translate-x-1 group-hover:text-brand-green" />
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServiceCases({ category }: { category: CaseCategory }) {
  const items = CASES.filter((c) => c.category === category);
  if (items.length === 0) return null;

  return (
    <section className="bg-neutral-50 py-20 md:py-28">
      <div className="container">
        <FadeIn>
          <h2 className="font-heading text-3xl font-bold md:text-4xl">Примеры работ</h2>
          <p className="mt-3 text-neutral-500">Результаты нашей работы на реальных объектах</p>
        </FadeIn>
        <div className="mt-12">
          <CasesCarousel items={items} viewAllHref={`/cases?category=${encodeURIComponent(category)}`} />
        </div>
      </div>
    </section>
  );
}

export function ServiceApproachBlocks({ blocks }: {
  blocks: [
    { eyebrow: string; title: string; text: string; image: string; alt: string },
    { eyebrow: string; title: string; text: string; image: string; alt: string },
  ];
}) {
  const imgLeft = useSlideIn('left');
  const textRight = useSlideIn('right');
  const textLeft = useSlideIn('left');
  const imgRight = useSlideIn('right');

  const [first, second] = blocks;

  return (
    <section className="py-20 md:py-28">
      <div className="container space-y-16 md:space-y-20">
        {/* Фото слева — текст справа */}
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-14">
          <div ref={imgLeft.ref} style={imgLeft.style} className="overflow-hidden rounded-3xl">
            <img src={first.image} alt={first.alt} className="aspect-[4/3] w-full object-cover" />
          </div>
          <div ref={textRight.ref} style={textRight.style}>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-neutral-400">{first.eyebrow}</span>
            <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">{first.title}</h2>
            <p className="mt-4 text-lg leading-relaxed text-neutral-600">{first.text}</p>
          </div>
        </div>

        {/* Текст слева — фото справа */}
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-14">
          <div ref={textLeft.ref} style={textLeft.style} className="md:order-1">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-neutral-400">{second.eyebrow}</span>
            <h2 className="mt-3 font-heading text-3xl font-bold md:text-4xl">{second.title}</h2>
            <p className="mt-4 text-lg leading-relaxed text-neutral-600">{second.text}</p>
          </div>
          <div ref={imgRight.ref} style={imgRight.style} className="overflow-hidden rounded-3xl md:order-2">
            <img src={second.image} alt={second.alt} className="aspect-[4/3] w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function InDevelopmentPage({ title, breadcrumb }: { title: string; breadcrumb: string[] }) {
  return (
    <div className="min-h-screen bg-white font-sans text-neutral-900">
      <SiteHeader />

      <div className="border-b border-neutral-100 bg-white">
        <div className="container flex flex-wrap items-center gap-2 py-3 text-sm text-neutral-500">
          <Link to="/" className="hover:text-brand-green transition-colors">Главная</Link>
          {breadcrumb.map((b, i) => (
            <Fragment key={i}>
              <Icon name="ChevronRight" size={14} className="text-neutral-300" />
              <span className={i === breadcrumb.length - 1 ? 'font-medium text-neutral-800' : 'hover:text-brand-green transition-colors cursor-pointer'}>{b}</span>
            </Fragment>
          ))}
        </div>
      </div>

      <section className="py-24 md:py-32">
        <div className="container max-w-2xl text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-brand-green/10">
            <Icon name="Construction" size={36} className="text-brand-green" />
          </div>
          <h1 className="mt-8 font-heading text-3xl font-black md:text-5xl">{title}</h1>
          <p className="mt-6 text-lg text-neutral-500">Страница в разработке. Мы уже готовим для неё материалы — загляните немного позже.</p>
          <Link
            to="/"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-6 py-3 text-sm font-semibold text-neutral-700 shadow-sm transition-all hover:border-brand-green hover:text-brand-green"
          >
            <Icon name="ArrowLeft" size={16} />
            На главную
          </Link>
        </div>
      </section>

      <SiteCTA />
      <SiteFooter />
    </div>
  );
}

function humanizeSlug(slug: string) {
  return decodeURIComponent(slug)
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export function GenericSubPage({ sectionLabel, knownTitles }: {
  sectionLabel: string;
  knownTitles?: Record<string, string>;
}) {
  const { slug = '' } = useParams();
  const title = knownTitles?.[slug] || humanizeSlug(slug);

  return <InDevelopmentPage title={title} breadcrumb={[sectionLabel, title]} />;
}