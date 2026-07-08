import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import SiteCTA from '@/components/SiteCTA';
import { CASES, CaseLightbox } from '@/pages/cases/shared';

export default function CaseDetail() {
  const { id } = useParams();
  const item = CASES.find((c) => String(c.id) === id);

  const [current, setCurrent] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  if (!item) {
    return <Navigate to="/cases" replace />;
  }

  const prev = () => setCurrent((c) => (c - 1 + item.photos.length) % item.photos.length);
  const next = () => setCurrent((c) => (c + 1) % item.photos.length);

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-900">
      <SiteHeader />

      <div className="border-b border-neutral-100 bg-white">
        <div className="container flex items-center gap-2 py-3 text-sm text-neutral-500">
          <Link to="/" className="hover:text-brand-green transition-colors">Главная</Link>
          <Icon name="ChevronRight" size={14} className="text-neutral-300" />
          <Link to="/cases" className="hover:text-brand-green transition-colors">Наши кейсы</Link>
          <Icon name="ChevronRight" size={14} className="text-neutral-300" />
          <span className="font-medium text-neutral-800 line-clamp-1">{item.title}</span>
        </div>
      </div>

      <section className="py-12 md:py-16">
        <div className="container max-w-5xl">
          <h1 className="font-heading text-3xl font-bold leading-tight md:text-5xl">{item.title}</h1>
          <span className="mt-4 inline-block rounded-full bg-brand-green/10 px-4 py-1.5 text-sm font-semibold text-brand-green">
            {item.category}
          </span>

          <div className="mt-10 grid gap-8 lg:grid-cols-[3fr_2fr] lg:items-center">
            <div
              className="group relative aspect-video cursor-pointer overflow-hidden rounded-3xl bg-neutral-100"
              onClick={() => setLightboxOpen(true)}
            >
              <div
                className="flex h-full w-full transition-transform duration-300 ease-out"
                style={{ transform: `translateX(-${current * 100}%)` }}
              >
                {item.photos.map((src, i) => (
                  <img key={i} src={src} alt={`${item.title} — фото ${i + 1}`} className="h-full w-full shrink-0 object-cover" />
                ))}
              </div>

              <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/10">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/0 opacity-0 shadow transition-all group-hover:bg-white/90 group-hover:opacity-100">
                  <Icon name="Expand" size={20} className="text-neutral-800" />
                </div>
              </div>

              {item.photos.length > 1 && (
                <>
                  <button
                    onClick={(e) => { e.stopPropagation(); prev(); }}
                    aria-label="Предыдущее фото"
                    className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-neutral-800 opacity-0 shadow transition-opacity duration-200 group-hover:opacity-100 hover:bg-white"
                  >
                    <Icon name="ChevronLeft" size={18} />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); next(); }}
                    aria-label="Следующее фото"
                    className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-neutral-800 opacity-0 shadow transition-opacity duration-200 group-hover:opacity-100 hover:bg-white"
                  >
                    <Icon name="ChevronRight" size={18} />
                  </button>
                  <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                    {item.photos.map((_, i) => (
                      <button
                        key={i}
                        onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
                        aria-label={`Фото ${i + 1}`}
                        className={`h-1.5 rounded-full transition-all ${i === current ? 'w-5 bg-white' : 'w-1.5 bg-white/60'}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            <div>
              <h2 className="font-heading text-lg font-bold text-neutral-900">О проекте</h2>
              <p className="mt-3 text-base leading-relaxed text-neutral-600 md:text-lg">{item.description}</p>
            </div>
          </div>

          {/* Задача */}
          <div className="mt-14 rounded-3xl border border-neutral-100 bg-neutral-50 p-6 md:p-10">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-blue/10">
                <Icon name="Target" size={20} className="text-brand-blue" />
              </div>
              <h2 className="font-heading text-2xl font-bold">Задача</h2>
            </div>
            <p className="mt-4 text-base leading-relaxed text-neutral-600 md:text-lg">{item.task}</p>
          </div>

          {/* Что сделано */}
          <div className="mt-10">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-green/10">
                <Icon name="Hammer" size={20} className="text-brand-green" />
              </div>
              <h2 className="font-heading text-2xl font-bold">Что сделано</h2>
            </div>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {item.whatDone.map((block, i) => (
                <div key={i} className="rounded-2xl border border-neutral-100 bg-white p-6 shadow-sm">
                  <span className="font-heading text-3xl font-black text-neutral-100">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="mt-2 font-heading text-base font-bold text-neutral-900">{block.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-500">{block.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Результат */}
          <div className="mt-10 rounded-3xl bg-brand-green p-6 text-white md:p-10">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/20">
                <Icon name="TrendingUp" size={20} className="text-white" />
              </div>
              <h2 className="font-heading text-2xl font-bold">Результат</h2>
            </div>
            <p className="mt-4 text-lg font-semibold leading-relaxed md:text-xl">{item.result}</p>
          </div>

          {/* Заключение */}
          <div className="mt-10 border-l-2 border-brand-green/30 pl-6">
            <h2 className="font-heading text-xl font-bold text-neutral-900">Заключение</h2>
            <p className="mt-3 text-base italic leading-relaxed text-neutral-500 md:text-lg">{item.conclusion}</p>
          </div>

          <div className="mt-14 flex justify-center">
            <Link
              to="/cases"
              className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-6 py-3 text-sm font-semibold text-neutral-700 shadow-sm transition-all hover:border-brand-green hover:text-brand-green"
            >
              <Icon name="ArrowLeft" size={16} />
              Ко всем кейсам
            </Link>
          </div>
        </div>
      </section>

      <CaseLightbox
        photos={item.photos}
        title={item.title}
        initialIndex={current}
        open={lightboxOpen}
        onOpenChange={setLightboxOpen}
      />

      <SiteCTA />
      <SiteFooter />
    </div>
  );
}
